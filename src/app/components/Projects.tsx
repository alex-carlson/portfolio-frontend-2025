"use client";
import { sanityClient } from '@/lib/sanity';
import React, { useState, useRef, useEffect } from 'react';
import Project from './Project';

type BlogPost = {
    title: string;
    slug: { current: string };
    publishedDate: string;
    link: string;
    author: string;
    body: { children: { text: string }[] }[];
    mainImage?: {
        asset?: {
            _id: string;
            url: string;
        };
    };
    tags: string[];
};

const blogPosts = await sanityClient.fetch(
    `*[_type == "blogPost"] | order(publishedDate desc) {
    title,
    slug,
    publishedDate,
    tags,
    link,
    body,
    mainImage {
      asset -> {
        _id,
        url
      }
    }
  }`
);

export default function Projects({ limit }: { limit?: number }) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const projectsRef = useRef<HTMLDivElement>(null); // Create a ref for the projects container
    const tagsRef = useRef<HTMLDivElement>(null); // Create a ref for the tags container

    useEffect(() => {
        if (selectedTag !== activeTag) {
            setFadeState('fade-out');

            const timeout = setTimeout(() => {
                setActiveTag(selectedTag);
                setFadeState('fade-in');
            }, 400); // match CSS transition duration

            return () => clearTimeout(timeout);
        }
    }, [selectedTag, activeTag]);

    const uniqueTags: string[] = Array.from(
        new Set(blogPosts.flatMap((post: BlogPost) => post.tags))
    );

    const handleTagClick = (tag: string | null) => {
        setSelectedTag(tag);
        tagsRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll to the projects section
    };

    const visiblePosts = blogPosts.filter(
        (post: BlogPost) => !activeTag || post.tags.includes(activeTag)
    ).slice(0, limit || blogPosts.length);

    return (
        <div className="projects-container">
            {/* Tag Filter */}
            <div className="tag-filter" style={{ textAlign: 'center', marginBottom: '1rem' }} ref={tagsRef}>
                <button
                    onClick={() => handleTagClick(null)}
                    className={`tag-button ${!selectedTag ? 'active' : ''}`}
                >
                    All
                </button>
                {uniqueTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Projects */}
            <div className="projects" ref={projectsRef}>
                {visiblePosts.map((post: BlogPost, index: number) => (
                    <div
                        key={post.slug.current}
                        className={`project-wrapper ${fadeState}`}
                        style={{
                            transitionDelay: `${index * 100}ms`,
                        }}
                    >
                        <Project
                            title={post.title}
                            link={post.link}
                            mainImage={post.mainImage}
                            body={post.body}
                            tags={post.tags}
                            onTagClick={handleTagClick}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
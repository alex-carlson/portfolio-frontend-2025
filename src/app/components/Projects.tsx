"use client";
import { sanityClient } from '@/lib/sanity';
import React, { useState } from 'react';
import Project from './Project';
import NotFound from '../404'; // Import NotFound component for 404 handling
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

    if (!blogPosts || blogPosts.length === 0) {
        return (
            // use 404.tsx
            <NotFound />
        );
    }

    const filteredBlogPosts = selectedTag
        ? blogPosts.filter((post: BlogPost) => post.tags.includes(selectedTag))
        : blogPosts;

    const uniqueTags: string[] = Array.from(
        new Set(blogPosts.flatMap((post: BlogPost) => post.tags))
    );

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag);
    };

    return (
        <div className="projects-container">
            {/* Tag Filter */}
            <div className="tag-filter" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <button
                    onClick={() => setSelectedTag(null)}
                    className={`tag-button ${!selectedTag ? 'active' : ''}`}
                >
                    All
                </button>
                {uniqueTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Projects */}
            <div className="projects">
                {(limit ? filteredBlogPosts.slice(0, limit) : filteredBlogPosts).map((post: BlogPost) => (
                    <Project
                        key={post.slug.current}
                        title={post.title}
                        link={post.link}
                        mainImage={post.mainImage}
                        body={post.body}
                        tags={post.tags}
                        onTagClick={handleTagClick} // Pass callback to Project
                    />
                ))}
            </div>
        </div>
    );
}
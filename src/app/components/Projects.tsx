"use client";
import React, { useState } from 'react';
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

export default function Projects({ blogPosts, limit }: { blogPosts: BlogPost[]; limit: number }) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredBlogPosts = selectedTag
        ? blogPosts.filter((post: BlogPost) => post.tags.includes(selectedTag))
        : blogPosts;

    const uniqueTags = Array.from(
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
                {filteredBlogPosts.slice(0, limit).map((post: BlogPost) => (
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
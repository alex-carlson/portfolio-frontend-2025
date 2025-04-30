import { sanityClient } from '@/lib/sanity';
import Project from '../components/Project';
import Link from 'next/link';

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

export default async function AllProjects() {
    // Fetch all blog posts from Sanity
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

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center' }}>All Projects</h1>

            <div className="projects">
                {blogPosts.map((post: BlogPost) => (
                    <Project
                        key={post.slug.current}
                        title={post.title}
                        link={post.link}
                        mainImage={post.mainImage}
                        body={post.body}
                        tags={post.tags}
                    />
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/" className="view-all-button">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
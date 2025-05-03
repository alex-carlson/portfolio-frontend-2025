import { sanityClient } from '@/lib/sanity';
import Projects from '../components/Projects';
import Link from 'next/link';

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

            <Projects blogPosts={blogPosts} limit={blogPosts.length} />

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/" className="view-all-button">
                    Back to Home
                </Link>
            </div>
            <div className="spacer"></div>
        </div>
    );
}
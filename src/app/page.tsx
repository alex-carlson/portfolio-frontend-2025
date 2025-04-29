import { sanityClient } from '@/lib/sanity';
import styles from '@/styles/globals.css';

export default async function Page() {
  // Fetch blog posts directly inside the server component
  const blogPosts = await sanityClient.fetch(`
    *[_type == "blogPost"] | order(publishedDate desc){
      title,
      slug,
      publishedDate,
      author,
      body,
      mainImage {
        asset->{
          _id,
          url
        }
      }
    }
  `);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Projects</h1>
      <div className="projects">
        {blogPosts.map((post) => (
          <div key={post.slug.current} className="project">
            <h2>{post.title}</h2>
            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
              />
            )}
            <p>{post.body[0].children[0].text}</p> {/* Display first part of body */}
          </div>
        ))}
      </div>
    </div>
  );
}

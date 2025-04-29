import { sanityClient } from '@/lib/sanity';
import Bio from './components/Bio';
import Project from './components/Project';

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

export default async function Page() {

  // Fetch blog posts directly inside the server component
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
      <Bio />

      <h1 style={{ textAlign: 'center' }}>Projects</h1>

      <div className="projects">
        {blogPosts.map((post) => (
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
    </div>
  );
}

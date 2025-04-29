import { sanityClient } from '@/lib/sanity';
import Bio from './components/Bio';
import Project from './components/Project';
// add social icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBluesky, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

  // Limit the displayed projects to the latest 6 and add a link to view all projects
  const latestBlogPosts = blogPosts.slice(0, 6);

  return (
    <div className="container">
      <Bio />

      <h1 style={{ textAlign: 'center' }}>Projects</h1>

      <div className="projects">
        {latestBlogPosts.map((post: BlogPost) => (
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
        <a href="/all-projects" style={{ color: 'blue', textDecoration: 'underline' }}>
          View All Projects
        </a>
      </div>

      <div className="githubContributions">
        <h2>Github Contributions</h2>
        <img
          src="https://ghchart.rshah.org/alex-carlson"
          alt="GitHub Contributions Chart"
          style={{ width: '100%', maxWidth: '600px' }}
        />
      </div>

      <div className="socials" >
        <h2>Connect with me</h2>
        <div className="socials-links">
          <a href="https://bsky.app/profile/alexcarlson.bsky.social" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBluesky} size="2x" />
          </a>
          <a href="https://github.com/alex-carlson" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/carlsonalex/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="http://acwd.me/resume.html" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} size="2x" />
          </a>
          <a href="mailto:alex@acwd.me" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

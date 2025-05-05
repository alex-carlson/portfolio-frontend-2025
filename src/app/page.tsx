import { sanityClient } from '@/lib/sanity';
import Bio from './components/Bio';
import Connect from './components/Connect';
import WordSalad from './components/WordSalad';
import Projects from './components/Projects';

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

const skillsList = [
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Sass",
  "Git",
  "Next.js",
  "Svelte",
  "Docker",
  "Angular",
  "Vue"
];

const interestsList = [
  "Mechanical Keyboards",
  "Puzzle Games",
  "Retro Game Consoles",
  "Game Shows",
  "Escape Rooms",
  "Indie Games",
  "Karaoke",
  "Rock Climbing",
  "Concerts",
];


export default async function Page() {
  return (
    <div>
      <Bio />
      <Connect />

      <h1 style={{ textAlign: 'center' }}>Projects</h1>

      <Projects blogPosts={blogPosts} limit={6} />

      <div style={{ textAlign: 'center', margin: '2.5rem 0' }}>
        <a href="/all-projects" className="view-all-button">
          View All Projects
        </a>
      </div>

      <div className="spacer"></div>

      <div className="container center">
        <h2>Skills</h2>
        <WordSalad words={skillsList} type="skill" />
        <h2>Interests</h2>
        <WordSalad words={interestsList} type="interest" />
      </div>

      <div className="spacer"></div>

      <Connect />

      <div className="spacer"></div>

      <div className="githubContributions">
        <h2>Github Contributions</h2>
        <a href="https://github.com/alex-carlson" target="_blank" rel="noopener noreferrer">
          <img
            src="https://ghchart.rshah.org/alex-carlson"
            alt="GitHub Contributions Chart"
            style={{ width: '100%', maxWidth: '600px' }}
          />
        </a>
      </div>
    </div>
  );
}
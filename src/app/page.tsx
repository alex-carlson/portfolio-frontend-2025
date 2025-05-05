import Bio from './components/Bio';
import Connect from './components/Connect';
import WordSalad from './components/WordSalad';
import Projects from './components/Projects';

const skillsListObject = [
  { skill: "Unity", category: "game" },
  { skill: "C#", category: "game" },
  { skill: "TypeScript", category: "web" },
  { skill: "React", category: "web" },
  { skill: "Node.js", category: "web" },
  { skill: "Express", category: "web" },
  { skill: "MongoDB", category: "web" },
  { skill: "Sass", category: "web" },
  { skill: "Git", category: "misc" },
  { skill: "Next.js", category: "web" },
  { skill: "Svelte", category: "web" },
  { skill: "Docker", category: "misc" },
  { skill: "Angular", category: "web" },
  { skill: "Vue", category: "web" },
  { skill: "Blender", category: "game" },
  { skill: "XR", category: "game" },
  { skill: "UE4/5", category: "game" },
  { skill: "Godot", category: "game" },
  { skill: "CI/CD", category: "misc" },
  { skill: "supabase", category: "web" },
  { skill: "mongodb", category: "web" },
];

const interestsList = [
  { skill: "Mechanical Keyboards", category: "interest" },
  { skill: "Puzzle Games", category: "interest" },
  { skill: "Retro Game Consoles", category: "interest" },
  { skill: "Game Shows", category: "interest" },
  { skill: "Escape Rooms", category: "interest" },
  { skill: "Indie Games", category: "interest" },
  { skill: "Karaoke", category: "interest" },
  { skill: "Rock Climbing", category: "interest" },
  { skill: "Concerts", category: "interest" },
  { skill: "Cooking", category: "interest" },
];


export default async function Page() {
  return (
    <div>
      <Bio />
      <Connect />

      <h1 style={{ textAlign: 'center' }}>Projects</h1>

      <Projects limit={6} />

      <div style={{ textAlign: 'center', margin: '2.5rem 0' }}>
        <a href="/all-projects" className="view-all-button">
          View All Projects
        </a>
      </div>

      <div className="spacer"></div>

      <div className="container center">
        <h2>Skills</h2>
        <WordSalad list={skillsListObject} />
        <h2>Interests</h2>
        <WordSalad list={interestsList} />
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
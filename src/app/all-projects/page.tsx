export const metadata = {
  title: 'All Projects - Alex Carlson',
  description: 'Explore all projects by Alex Carlson.',
};

import Projects from '../components/Projects';
import Return from '../components/Return';

export default async function AllProjects() {

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>All Projects</h1>

      <Projects />

      <Return />
    </div>
  );
}
import Link from 'next/link';
import Return from '../components/Return';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
    title: 'Resume - Alex Carlson',
    description: 'Explore the resumes of Alex Carlson.',
};

export default async function AllProjects() {
    return (
        <div className="resume">
            <h1 style={{ textAlign: 'center' }}>Alex Carlson&apos;s Resumes</h1>

            <div className="resume-container">
                <div className="left resume-item">
                    <h2>Unity Engineer <Link href="/unity_resume.pdf"> <FontAwesomeIcon icon={faLink} style={{ width: '32px' }}></FontAwesomeIcon> </Link></h2>
                    <embed
                        src="/unity_resume.pdf"
                        style={{ width: '100%', height: '500px', border: 'none' }}
                        title="Unity Engineer Resume"
                    />
                </div>
                <div className="right resume-item">
                    <h2>Software Engineer <Link href="/software_resume.pdf"> <FontAwesomeIcon icon={faLink} style={{ width: '32px' }}></FontAwesomeIcon> </Link></h2>
                    <embed
                        src="/software_resume.pdf"
                        style={{ width: '100%', height: '500px', border: 'none' }}
                        title="Software Engineer Resume"
                    />
                </div>
            </div>
            <Return />
        </div>
    );
}
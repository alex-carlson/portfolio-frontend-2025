import { sanityClient } from '@/lib/sanity';
import Link from 'next/link';

export default async function AllProjects() {
    return (
        <div className="resume">
            <h1 style={{ textAlign: 'center' }}>Alex Carlson's Resumes</h1>

            <div className="resume-container">
                <div className="left resume-item">
                    <h2>Unity Engineer</h2>
                    <embed
                        src="http://acwd.me/AlexCarlson-UnityEngineer.pdf"
                        style={{ width: '100%', height: '500px', border: 'none' }}
                        title="Resume"
                    />
                </div>
                <div className="right resume-item">
                    <h2>Software Engineer</h2>
                    <embed
                        src="http://acwd.me/AlexCarlson-SoftwareEngineer.pdf"
                        style={{ width: '100%', height: '500px', border: 'none' }}
                        title="Resume"
                    />
                </div>
            </div>


            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/" className="view-all-button">
                    Back to Home
                </Link>
            </div>
            <div className="spacer"></div>
        </div>
    );
}
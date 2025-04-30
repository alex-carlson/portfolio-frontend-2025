import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBluesky, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Connect() {
    return (
        <div className="socials">
            <div className="socials-links">
                <a href="https://bsky.app/profile/alexcarlson.bsky.social" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faBluesky} size="2x" />
                    <span>Bluesky</span>
                </a>
                <a href="https://x.com/alexcarlson__" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} size="2x" />
                    <span>X</span>
                </a>
                <a href="https://github.com/alex-carlson" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <span>Github</span>
                </a>
                <a href="https://www.linkedin.com/in/carlsonalex/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    <span>LinkedIn</span>
                </a>
                <a href="http://acwd.me/AlexCarlson-UnityEngineer.pdf" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFile} size="2x" />
                    <span>Resume</span>
                </a>
                <a href="mailto:alex@acwd.me" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    <span>Email</span>
                </a>
            </div>
        </div>
    );
}
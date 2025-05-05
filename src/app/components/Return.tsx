import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Return() {
    return (
        <div className="return">
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/" className="view-all-button">
                    <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '0.5rem' }} size="2x" />
                    Back to Home
                </Link>
            </div>
            <div className="spacer"></div>
        </div>
    );
}
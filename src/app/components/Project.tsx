import Image from 'next/image';

type ProjectProps = {
    title: string;
    link: string;
    mainImage?: {
        asset?: {
            url: string;
        };
    };
    body: { children: { text: string }[] }[];
    tags: string[];
    onTagClick: (tag: string) => void; // Callback for tag click
};

const Project = ({ title, link, mainImage, body, tags, onTagClick }: ProjectProps) => {
    return (
        <div className="project">
            <h2>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h2>
            {mainImage?.asset?.url && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={mainImage.asset.url}
                        alt={title}
                        width={500} // Adjust width as needed
                        height={300} // Adjust height as needed
                    />
                </a>
            )}
            <p>{body[0].children[0].text}</p> {/* Display first part of body */}
            <div className="tags">
                {tags?.map((tag) => (
                    <span
                        key={tag}
                        className="tag"
                        onClick={() => onTagClick(tag)} // Call parent callback
                        style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Project;
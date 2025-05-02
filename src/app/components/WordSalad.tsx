interface WordSaladProps {
    words: string[];
    type: string;
}

export default function WordSalad({ words, type }: WordSaladProps) {
    return (
        <div className="word-salad">
            {words.map((word, index) => (
                <span
                    key={index}
                    className={`word-salad-word ${type || ''}`.trim()}
                    style={{
                        transform: `rotate(${Math.random() * 6 - 3}deg)`,
                    }}
                >
                    {word}
                </span>
            ))}
        </div>
    );
}
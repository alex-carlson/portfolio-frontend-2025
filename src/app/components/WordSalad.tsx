interface WordSaladProps {
    list: string[];
}

export default function WordSalad({ list }: WordSaladProps) {
    const shuffledList = [...list].sort(() => Math.random() - 0.5); // Randomly shuffle the list

    return (
        <div className="word-salad">
            {shuffledList.map((d, index) => {
                const rotation = Math.random() * 6 - 3; // Random rotation between -6 and +6 degrees
                return (
                    <span
                        key={index}
                        className={`word-salad-word ${d.category}`}
                        style={{ transform: `rotate(${rotation}deg) scale(1.0)` }}
                    >
                        {d.skill}
                    </span>
                );
            })}
        </div>
    );
}
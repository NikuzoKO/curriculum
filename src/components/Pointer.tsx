function Pointer({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="pointer">
            <h3>{title}</h3>
            <ul>
                {items.map((item: string) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Pointer;

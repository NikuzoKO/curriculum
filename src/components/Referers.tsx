function Referers({
    referers,
}: {
    referers: { name: string; phone: string }[];
}) {
    return (
        <>
            <h3>Referencias</h3>
            <div className="referers">
                {referers.map((item, index) => (
                    <div className="reference" key={index}>
                        <p className="bold-text">{item.name}</p>
                        <p>
                            Cel:
                            <a
                                type="tel"
                                href={`tel:${item.phone}`}
                                target="_blank"
                            >
                                {item.phone}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Referers;

import figmaData from '../../figma.json';

function FigmaDesigns() {
    return (
        <section className="figma-designs" id="designs">
            <div className="container">
                <div className="section-title">
                    <h2>UI/UX Designs</h2>
                    <p>Creative designs crafted in Figma</p>
                </div>

                <div className="figma-grid">
                    {figmaData.map((design, index) => (
                        <div key={index} className="figma-card">
                            <div className="figma-embed">
                                <iframe
                                    src={design.figmaURL}
                                    allowFullScreen
                                    title={design.title}
                                ></iframe>
                            </div>

                            <div className="figma-content">
                                <span className="figma-type">{design.type}</span>
                                <h3 className="figma-title">{design.title}</h3>
                                <p className="figma-description">{design.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FigmaDesigns;

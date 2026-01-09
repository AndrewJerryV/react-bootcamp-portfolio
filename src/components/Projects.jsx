import { useState } from 'react';
import projectsData from '../../projects.json';

function Projects() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="section-title">
                    <h2>My Projects</h2>
                    <p>Explore my latest work and side projects</p>
                </div>

                <div className="projects-grid">
                    {displayedProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <span className={`project-status ${project.status}`}>
                                    {project.status}
                                </span>
                            </div>

                            <div className="project-content">
                                <span className="project-tech">{project.tech}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.live !== '#' && project.live !== 'NULL' ? project.live : undefined}
                                        className={`project-link live ${project.live === '#' || project.live === 'NULL' ? 'disabled' : ''}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.code !== '#' ? project.code : undefined}
                                        className={`project-link code ${project.code === '#' ? 'disabled' : ''}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projectsData.length > 3 && (
                    <div className="projects-toggle">
                        <button
                            className="btn btn-secondary projects-toggle-btn"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? (
                                <>
                                    Show Less
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="18 15 12 9 6 15" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    View All Projects ({projectsData.length - 3} more)
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;

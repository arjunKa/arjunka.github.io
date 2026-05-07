import React from 'react';
import './project.css';

const Project = ({ project }) => {
  const {
    header,
    status,
    icons = [],
    actions = [],
    paragraphs = [],
    extraLinksHeading,
    extraLinks = [],
    images = [],
    videos = [],
  } = project;
  const hasVisuals = images.length > 0 || videos.length > 0;

  return (
    <div className="portfolio__project-container">
      <div className="portfolio__project-container-content">
        <div
          className={`portfolio__project-container-content-image-and-text${
            hasVisuals ? '' : ' portfolio__project-container-content-image-and-text--text-only'
          }`}
        >
          <div className="portfolio__project-container-content-text">
            <div className="portfolio__project-heading">
              <h3>{header}</h3>
              {status ? <p className="portfolio__project-status">{status}</p> : null}
            </div>

            {icons.length > 0 ? (
              <div className="portfolio__project-container-content-logos">
                {icons.map(({ src, alt }) => (
                  <img key={alt} src={src} alt={alt} />
                ))}
              </div>
            ) : null}

            {actions.length > 0 ? (
              <div className="portfolio__project-actions">
                {actions.map(({ href, label, ghost }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={ghost ? 'button button--ghost' : 'button'}
                  >
                    {label}
                  </a>
                ))}
              </div>
            ) : null}

            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {extraLinks.length > 0 ? (
              <>
                <p>
                  <strong>{extraLinksHeading || 'Other Links:'}</strong>
                </p>
                <ul>
                  {extraLinks.map(({ href, label }) => (
                    <li key={label}>
                      <a href={href} target="_blank" rel="noreferrer noopener">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          {hasVisuals ? (
            <div className="portfolio__project-container-content-image">
              {videos.map(({ src, poster, title, className }) => (
                <video
                  key={src}
                  className={className || ''}
                  src={src}
                  poster={poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={title}
                >
                  Your browser does not support the video tag.
                </video>
              ))}
              {images.map(({ src, alt, className }) => (
                <img key={alt} src={src} alt={alt} className={className || ''} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;

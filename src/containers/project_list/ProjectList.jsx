import './projectList.css';

const ProjectList = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    // <div
    //   className={`portfolio__projectList ${
    //     isOpen ? 'portfolio__projectList--open' : 'portfolio__projectList--closed'
    //   }`}
    //   id="projects"
    // >
      <div className="portfolio__projectList-heading">
        {/* <p className="section__label">Selected work</p> */}
        <h2 id="projects-title">Projects</h2>
        {/* <button
          type="button"
          className="portfolio__projectList-toggle button button--ghost"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="projects-list-content"
        >
          {isOpen ? 'Hide Projects' : 'Show Projects'}
        </button> */}
        {/* <p className="section__subtext">
          A quick scan of highlights. Jump into details below for full context.
        </p> */}
      {/* </div> */}

      {/* {isOpen ? (
        <div className="portfolio__projectList-container" id="projects-list-content">
          <div className="portfolio__projectList-container_groupB">
            {projectsData.map(({ id, cardSkills, cardTitle }) => (
              <Card
                key={id}
                linkToProject={`#${id}`}
                skills={cardSkills}
                text={cardTitle}
              />
            ))}
          </div>
        </div>
      ) : null} */}
    </div>
  );
};

export default ProjectList;

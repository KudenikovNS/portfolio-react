import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectBtns from "../components/projectBtns/ProjectBtns";

import { projects } from "../helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  useEffect(() => {
    const prevTitle = document.title;
    if (project?.title) {
      document.title = `${project.title}`;
    }

    return () => {
      document.title = prevTitle;
    };
  }, [project?.title]);

  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='projects__title'>{project.title}</h1>
          <div className='btn-container'>
            <ProjectBtns
              link={project.gitHubLink}
              URL={project.URL}
              linkBackend={project.gitHubBackend}
            />
          </div>
          {project.skills && (
            <div className='project-details__description'>
              <p>Skills: {project.skills}</p>
            </div>
          )}
          <a href={project.URL} target='_blank' rel='noreferrer'>
            <img
              className='project-details__img'
              src={project.img}
              alt={project.title}
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Project;

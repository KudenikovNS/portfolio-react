import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnGitHubBackend from "../components/btnGitHubBackend/BtnGitHubBackend";
import BtnWebsite from "../components/btnWebsite/BtnWebsite";

import { projects } from "../helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <main className='section'>
      <div className='container'>
        <div className='project-details'>
          <h1 className='projects__title'>{project.title}</h1>
          <img
            className='project-details__img'
            src={project.img}
            /*             src={project.imgBig} */
            alt={project.title}
          />
          <div className='project-details__description'>
            <p>Skills: {project.skills}</p>
          </div>

          <div className='btn-container'>
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
            {project.URL && <BtnWebsite URL={project.URL} />}
            {project.gitHubBackend && (
              <BtnGitHubBackend linkBacend={project.gitHubBackend} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;

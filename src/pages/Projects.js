import Project from "../components/project/Project";

import Header from "../components/header/Header";

import { projects } from "../helpers/projectsList";

const Projects = () => {
  return (
    <>
      <Header />
      <main className='section'>
        <div className='container'>
          <h2 className='projects__title'>Projects</h2>
          <ul className='projects'>
            {projects
              .map((project) => {
                return (
                  <Project
                    key={project.id}
                    title={project.title}
                    img={project.img}
                    index={project.id - 1}
                  />
                );
              })
              .reverse()}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;

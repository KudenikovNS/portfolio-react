import Project from "../components/project/Project";

import Header from "../components/header/Header";

import { projects } from "../helpers/projectsList";

const Projects = () => {
  return (
    <>
      <Header />
      <main className='section'>
        <div className='container'>
        {/*   <h2 className='projects__title'>Projects</h2> */}
          <ul className='projects'>
            {projects
              .filter((project) => project.type === 'project')
              .map((project) => {
                return (
                  <Project
                    key={project.id}
                    title={project.title}
                    img={project.img}
                    index={project.id - 1}
                    type={project.type}
                  />
                );
              })
              .reverse()}
          </ul>
        </div>
        
        <div className='projects__title-wrapper'>
          <h2 className='projects__title dark'>Elements</h2>
        </div>
        
        <div className='container'>
          <ul className='projects'>
            {projects
              .filter((project) => project.type === 'element')
              .map((project) => {
                return (
                  <Project
                    key={project.id}
                    title={project.title}
                    img={project.img}
                    index={project.id - 1}
                    type={project.type}
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

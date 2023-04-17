import './Work.css';

import Project from '../../components/Project/Project';
import { works } from '../../data/data';
const Work = () => {
  return (
    <main className="sr-main-work">
      <h1>.myWorks</h1>
      <div className="sr-works-container">
        {works.map((work) => (
          <Project
            key={work.title}
            title={work.title}
            year={work.year}
            tecnology={work.technologies}
          />
        ))}
      </div>
    </main>
  );
};

export default Work;

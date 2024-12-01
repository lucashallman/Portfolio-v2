import { projects, testProjects } from '../components/projectList.jsx';
import { personalInfo } from '../components/contactFunction.jsx';
import { ThemeContext } from '../components/ThemeContext.jsx';

function renderProjectPiece(project) {
    const title = project.title;
    const img = project.img;
    const desc = project.desc;
    const pageLink = project.pageLink;
    const gitLink = project.gitLink;
    return (
        <>
            <div className="card">
                <div>
                    {title}
                    {img}
                </div>
                <section className="content">
                    {desc}
                </section>
                <div>{personalInfo.email}</div>
            </div>
        </>
    );
};

//run renderProjectPiece on all projects in the array, then stick those onto the projectmount on the project page.

function renderProjectsModule(projectArray) {
    const module = []
    for (let i = 0; i < projectArray.length; i++) {
        const newCard = renderProjectPiece(projectArray[i]);
        module.push(newCard);
    }
    return module;
};

export default function Projects() {

    const projectModule = renderProjectsModule(testProjects);

    return (
        <section>
            <div>
                <h1>Project Page</h1>
                <p>See below a list of some of my favorite project pieces!</p>
            </div>
            <div className='projectmount'>{projectModule}</div>
        </section>
    );
};
import Project, {ProjectType, Skill} from "../../templates/Project";
import './index.css';
import {useState} from "react";
import Icon, {IconTypes} from "../../atoms/Icon";

const projects = [
    {
        title: 'Micro-frontend and micro-services solutions',
        skills: [
            Skill.NEST,
            Skill.MONGODB,
            Skill.DOCKER,
            Skill.REACT,
            Skill.MFE,
            Skill.REST,
        ],
        type: ProjectType.FREELANCE,
        image: 'src/assets/MFE.png',
    },
    {
        title: 'Pulse - Trucking system',
        skills: [
            Skill.NEST,
            Skill.MONGODB,
            Skill.DOCKER,
            Skill.REACT,
            Skill.MFE,
            Skill.REST,
        ],
        type: ProjectType.FREELANCE,
        image: 'src/assets/MFE.png',
    },
    {
        title: 'Mo2Drive - React Native application for scooter sharing',
        skills: [
            Skill.NEST,
            Skill.MONGODB,
            Skill.DOCKER,
            Skill.REACT,
            Skill.MFE,
            Skill.REST,
        ],
        type: ProjectType.FREELANCE,
        image: 'src/assets/MFE.png',
    },
    {
        title: 'South Pole - Webshop',
        skills: [
            Skill.NEST,
            Skill.MONGODB,
            Skill.DOCKER,
            Skill.REACT,
            Skill.MFE,
            Skill.REST,
        ],
        type: ProjectType.JOB,
        image: 'src/assets/MFE.png',
    },
    {
        title: 'Manigo - All-in-one Banking-as-a-Service platform',
        skills: [
            Skill.NEST,
            Skill.MONGODB,
            Skill.DOCKER,
            Skill.REACT,
            Skill.MFE,
            Skill.REST,
        ],
        type: ProjectType.JOB,
        image: 'src/assets/MFE.png',
    },
    {
        title: 'Social media agregator',
        skills: [
            Skill.NEST,
            Skill.MONGODB,
            Skill.DOCKER,
            Skill.REACT,
            Skill.MFE,
            Skill.REST,
        ],
        type: ProjectType.ACADEMIC,
        image: 'src/assets/MFE.png',
    },
    {
        title: 'Books recommendation system',
        skills: [
            Skill.NEST,
            Skill.MONGODB,
            Skill.DOCKER,
            Skill.REACT,
            Skill.MFE,
            Skill.REST,
        ],
        type: ProjectType.ACADEMIC,
        image: 'src/assets/MFE.png',
    },
    {
        title: 'Wall of Fame',
        skills: [
            Skill.NEST,
            Skill.MONGODB,
            Skill.DOCKER,
            Skill.REACT,
            Skill.MFE,
            Skill.REST,
        ],
        type: ProjectType.PERSONAL,
        image: 'src/assets/MFE.png',
    },
    {
        title: 'RBAC auth',
        skills: [
            Skill.NEST,
            Skill.MONGODB,
            Skill.DOCKER,
            Skill.REACT,
            Skill.MFE,
            Skill.REST,
        ],
        type: ProjectType.PERSONAL,
        image: 'src/assets/MFE.png',
    },
    {
        title: 'Portfolio Page',
        skills: [
            Skill.REACT,
            Skill.CSS,
        ],
        type: ProjectType.PERSONAL,
        image: 'src/assets/MFE.png',
    },
];

const Projects = () => {
    const [type, setType] = useState<ProjectType | null>(null);
    const [projectIndex, setProjectIndex] = useState(1);

    const onFilterType = (projectType: ProjectType) => setType(type === projectType ? null : projectType)

    const onNextClick = () => {
        const container = document.getElementById('projects-container');
        if (!container) {
            return;
        }
        const shouldReset = projects.length === projectIndex;
        container.style.transform = `translate(-${(shouldReset ? 0 : projectIndex) * 100}vw)`;
        setProjectIndex(shouldReset ? 1 : (projectIndex + 1))
    }
    const onPreviousClick = () => {
        const container = document.getElementById('projects-container');
        if (!container) {
            return;
        }
        const shouldReset = projectIndex === 1;
        console.log({ projectIndex, shouldReset, length: projects.length }, shouldReset ? '' : `translate(${(projectIndex - 1) * 100}vw)`);
        container.style.transform = shouldReset ? '' : `translate(${(projectIndex - 1) * 100}vw)`;
        setProjectIndex(shouldReset ? projects.length : (projectIndex - 1))
    }

    const activeProject = projects[projectIndex - 1];

    return (
        <div className="section">
            <div className="section-content section-content--column section--relative">
                <div className="projects-container">
                    <h1 className="projects-title">🛠️ Projects</h1>
                    <div className="projects-filters">
                        <span
                            className={`projects-filter ${type === ProjectType.FREELANCE ? 'projects-filter--active' : ''}`}
                            onClick={() => onFilterType(ProjectType.FREELANCE)}>👨🏻‍💻 Freelance</span>
                        <span className={`projects-filter ${type === ProjectType.JOB ? 'projects-filter--active' : ''}`}
                              onClick={() => onFilterType(ProjectType.JOB)}>💼 Job</span>
                        <span
                            className={`projects-filter ${type === ProjectType.ACADEMIC ? 'projects-filter--active' : ''}`}
                            onClick={() => onFilterType(ProjectType.ACADEMIC)}>🎓 Academic</span>
                        <span
                            className={`projects-filter ${type === ProjectType.PERSONAL ? 'projects-filter--active' : ''}`}
                            onClick={() => onFilterType(ProjectType.PERSONAL)}>💡 Personal</span>
                    </div>
                </div>
                <span className="project-previous" onClick={onPreviousClick}>
                    <Icon type={IconTypes.NEXT}/>
                </span>
                <div className="project-details">
                    <h2>{activeProject.title}</h2>
                    <div>{activeProject.type.toString()}</div>
                    <br/>
                    <div>{activeProject.skills.join(', ')}</div>
                </div>
                <div className="projects-container" id="projects-container">
                    {projects
                        .filter((project) => {
                            if (type === null) {
                                return true;
                            }
                            return type === project.type;
                        })
                        .map((project) => (
                            <Project
                                title={project.title}
                                type={project.type}
                                skills={project.skills}
                                image={project.image}
                            />
                        ))}
                </div>
                <span className="project-next" onClick={onNextClick}>
                    <Icon type={IconTypes.NEXT}/>
                </span>
            </div>
        </div>
    );
}

export default Projects;

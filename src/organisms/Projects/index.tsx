import Project, {ProjectType, Skill} from "../../templates/Project";
import './index.css';
import {useState} from "react";

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

    const onFilterType = (projectType: ProjectType) => setType(type === projectType ? null : projectType)

    return (
        <div className="section">
            <div className="section-content section-content--column">
                <div className="projects-container">
                    <h1 className="projects-title">🛠️ Projects</h1>
                    <div className="projects-filters">
                        <span className={`projects-filter ${type === ProjectType.FREELANCE ? 'projects-filter--active' : ''}`} onClick={() => onFilterType(ProjectType.FREELANCE)}>👨🏻‍💻 Freelance</span>
                        <span className={`projects-filter ${type === ProjectType.JOB ? 'projects-filter--active' : ''}`} onClick={() => onFilterType(ProjectType.JOB)}>💼 Job</span>
                        <span className={`projects-filter ${type === ProjectType.ACADEMIC ? 'projects-filter--active' : ''}`} onClick={() => onFilterType(ProjectType.ACADEMIC)}>🎓 Academic</span>
                        <span className={`projects-filter ${type === ProjectType.PERSONAL ? 'projects-filter--active' : ''}`} onClick={() => onFilterType(ProjectType.PERSONAL)}>💡 Personal</span>
                    </div>
                </div>
                <div className="projects-container">
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
            </div>
        </div>
    );
}

export default Projects;

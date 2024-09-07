import './index.css';
import Icon, {IconTypes} from "../../atoms/Icon";

export enum ProjectType {
    FREELANCE = 'FREELANCE',
    PERSONAL = 'PERSONAL',
    JOB = 'JOB',
    ACADEMIC = 'ACADEMIC',
}

export enum Skill {
    REACT = 'REACT',
    JAVASCRIPT = 'JAVASCRIPT',
    NODE = 'NODE',
    CSS = 'CSS',
    TYPESCRIPT = 'TYPESCRIPT',
    NEST = 'NEST',
    EXPRESS = 'EXPRESS',
    POSTGRES = 'POSTGRES',
    DOCKER = 'DOCKER',
    MYSQL = 'MYSQL',
    MONGODB = 'MONGODB',
    AWS = 'AWS',
    MFE = 'MFE',
    REST = 'REST',
}

interface ProjectTemplateProps {
    title: string;
    type: ProjectType;
    image?: string;
    skills?: Skill[];
}

const ProjectTemplate = ({ title, type, image, skills = [] }: ProjectTemplateProps) => {
    return (
        <div className="project">
            <div className="project-content">
                <img src={image} alt="" className="project-image"/>
                <div className="project-info">
                    <span className="project-name">{title}</span>
                    <br/>
                    <br/>
                    {skills.map((skill: Skill) => (
                        <span className="project-skill">
                            <Icon skill={skill} />
                        </span>
                    ))}
                </div>
                {type === ProjectType.PERSONAL ? (
                    <>
                        <span className="project-type-icon project-type-icon--top">💡</span>
                    </>
                ) :  null}
                {type === ProjectType.ACADEMIC ? (
                    <>
                        <span className="project-type-icon project-type-icon--top">🎓</span>
                    </>
                ) : null}
                {type === ProjectType.JOB ? (
                    <>
                        <span className="project-type-icon project-type-icon--top">💼</span>
                    </>
                ) : null}
                {type === ProjectType.FREELANCE ? (
                    <>
                        <span className="project-type-icon project-type-icon--top">👨🏻‍💻</span>
                    </>
                ) : null}
                <span className="project-type-icon--open">⤷</span>
                <span className="project-type-icon project-type-icon--right project-type-icon--clickable">
                    <Icon type={IconTypes.DETAILS}/>
                </span>
            </div>
            <div className="project-platform"/>
        </div>
    );
}

export default ProjectTemplate
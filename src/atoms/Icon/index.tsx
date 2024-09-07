import ReactIcon from './react.svg'
import NestIcon from './nestjs.svg'
import MongoIcon from './mongodb.svg'
import SkillIcon from './skill.svg'
import DetailsIcon from './details.svg'
import NextIcon from './next.svg'
import FullScreenInIcon from './fullscreen-enter.svg'
import FullScreenOutIcon from './fullscreen-exit.svg'
import {Skill} from "../../templates/Project";
import './index.css'

export enum IconTypes {
    DETAILS,
    NEXT,
    FULLSCREEN_IN,
    FULLSCREEN_OUT,
}

export interface IconProps {
    skill?: Skill;
    type?: IconTypes;
}

const Icon = ({ skill, type }: IconProps) => {
    let resolvedIcon = SkillIcon;
    let isPill = false
    if (skill === Skill.REACT) {
        resolvedIcon = ReactIcon;
    }
    if (skill === Skill.NEST) {
        resolvedIcon = NestIcon;
    }
    if (skill === Skill.MONGODB) {
        resolvedIcon = MongoIcon;
        isPill = true;
    }

    if (type === IconTypes.DETAILS) {
        resolvedIcon = DetailsIcon;
    }
    if (type === IconTypes.NEXT) {
        resolvedIcon = NextIcon;
    }
    if (type === IconTypes.FULLSCREEN_IN) {
        resolvedIcon = FullScreenInIcon;
    }
    if (type === IconTypes.FULLSCREEN_OUT) {
        resolvedIcon = FullScreenOutIcon;
    }

    return resolvedIcon ? (
        <img
            src={resolvedIcon}
            alt={(type || skill)?.toString()}
            className={`skill-icon ${isPill ? 'skill-icon--pill' : ''}`}
        />
    ): type;
}

export default Icon;

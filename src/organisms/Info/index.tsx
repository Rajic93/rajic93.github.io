import {useState} from "react";
type ContentsType = Record<string, string>;

export interface InfoProps {
    imageUrl: string;
    contents: ContentsType;
}

const Info = ({ imageUrl, contents }: InfoProps) => {
    const [contentId, setContentId] = useState('');
    const [content, setContent] = useState('');

    const onItemClick = (id: string) => {
        setContent(id === contentId ? '' : contents[id]);
        setContentId(id === contentId ? '' : id);
    }

    return (
        <div className="section section--dark">
            <div className="section-content">
                <div className="about-picture">
                    <img src={imageUrl} alt="aleksandar rajic" className="profile_picture"/>
                </div>
                <div className="about-principles">
                    <ul className="about-list">
                        <li
                            id="challenges"
                            className={`item ${contentId === 'challenges' ? 'item--clicked' : ''}`}
                            onClick={() => onItemClick('challenges')}
                        >
                            <span>🧗</span>
                        </li>
                        <li
                            id="proactivity"
                            className={`item ${contentId === 'proactivity' ? 'item--clicked' : ''}`}
                            onClick={() => onItemClick('proactivity')}
                        >
                            <span>🤔</span>
                        </li>
                        <li
                            id="learning"
                            className={`item ${contentId === 'learning' ? 'item--clicked' : ''}`}
                            onClick={() => onItemClick('learning')}
                        >
                            <span>📚</span>
                        </li>
                        <li
                            id="standalone"
                            className={`item ${contentId === 'standalone' ? 'item--clicked' : ''}`}
                            onClick={() => onItemClick('standalone')}
                        >
                            <span>🏋</span>
                        </li>
                    </ul>
                </div>
                <div className="about-explanation-container">
                    {content ? (
                        <div className={`about-explanation ${content ? 'about-explanation--white about-explanation--shadow' : ''}`}>
                            <span>{content ? `"${content}"` : ''}</span>
                        </div>
                    ) : (
                        <div className="name-container">
                            <h1 className="about-title">🤝 Aleksandar Rajic</h1>
                            <span className="about-subtitle">Full-Stack Software Engineer & </span>
                            <br/>
                            <span className="about-subtitle">Backend Tech Lead</span>
                            <br/>
                            <span className="show-right show-right--position">⤶</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Info;

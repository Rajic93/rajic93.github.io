import './index.css';
import Info from "../../organisms/Info";
import Projects from "../../organisms/Projects";
import data from '../../assets/data.json';
import Icon, {IconTypes} from "../../atoms/Icon";

const Home = () => {
    return (
        <>
            <span
                className="fullscreen-icon"
            >
                <Icon
                    type={IconTypes.FULLSCREEN_IN}
                />
            </span>
            <Info
                imageUrl={data.profilePicture}
                contents={data.profileContents}
            />
            <Projects />
        </>
    );
};

export default Home;

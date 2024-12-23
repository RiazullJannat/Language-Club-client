import Banner from "../Banner";
import JoinCommunity from "../JoinCommunity";
import LanguageCategory from "../LanguageCategory";
import Stats from "../Stats";
import UpcomingEvents from "../UpcomingEvents";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Stats></Stats>
          <LanguageCategory></LanguageCategory>
          <UpcomingEvents></UpcomingEvents>
          <JoinCommunity></JoinCommunity>
        </div>
    );
};

export default Home;
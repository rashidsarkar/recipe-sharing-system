import SectionHeading from "../../TextEffectComponents/SectionHeading/SectionHeading";
import TextifyText from "../../TextEffectComponents/TextifyText/TextifyText";
import SuccessStories from "../../components/SuccessStories/SuccessStories";
import Banar from "./Banner/Banner";

function Home() {
  return (
    <div>
      <div className="max-w-7xl">
        <Banar></Banar>
        <TextifyText className="animation-1">
          <SectionHeading>Success Stories</SectionHeading>
        </TextifyText>
        <SuccessStories />
      </div>
    </div>
  );
}

export default Home;

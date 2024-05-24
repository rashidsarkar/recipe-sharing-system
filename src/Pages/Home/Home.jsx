import SectionHeading from "../../TextEffectComponents/SectionHeading/SectionHeading";
import SectionHeading2 from "../../TextEffectComponents/SectionHeading/SectionHeading2";
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
        <SectionHeading2>Dev Info</SectionHeading2>
      </div>
    </div>
  );
}

export default Home;

import Profile from "./Profile";
import Random from "./Random";
const About = () => {
  return (
    <div>
      <h1>WELCOME TO ABOUT SECTION</h1>
      <div className=" flex border">
        <Profile />
        <Random />
      </div>
    </div>
  );
};

export default About;

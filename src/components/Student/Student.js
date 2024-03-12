import "./Student.css";
import Article from "../Article/Article";
import AboutMe from "../main/AboutMe/AboutMe";

function Student() {
  return (
    <Article title="Студент" navId="student">
      <AboutMe />
    </Article>
  );
}

export default Student;

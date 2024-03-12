import "./AboutProject.css";
import Article from "../../Article/Article";

function AboutProject() {
  return (
    <Article title="О&nbsp;проекте" navId="about-project">
      <article className="about-project">
        <div className="about-project__text">
          <p className="about-project__title">
            Дипломный проект включал 5&nbsp;этапов
          </p>
          <p className="about-project__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </div>
        <div className="about-project__text">
          <p className="about-project__title">
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </p>
          <p className="about-project__subtitle">
            Данную сборку составлял локально используя внешнюю базу данных с
            фестиваля BeatFilm. С дальнейшей возможностью сделать deeploy на
            виртуальную машину с использованием доменного имени.{" "}
          </p>
        </div>
        <div className="about-project__illustration">
          <p className="about-project__time-block">1&nbsp;неделя</p>
          <p className="about-project__time-caption">Back-end</p>
          <p className="about-project__time-block">4&nbsp;недели</p>
          <p className="about-project__time-caption">Front-end</p>
        </div>
      </article>
    </Article>
  );
}

export default AboutProject;

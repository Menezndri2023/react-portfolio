import HeaderComp from "./Components/HeaderComp"
import "./App.css";
import { LikeOutlined, LinkOutlined} from "@ant-design/icons";
import { Divider } from "antd";
import { projects } from "./data/data";
import { experience } from "./data/data";

import AsideComp from "./Components/AsideComp";


function App() {
  return ( 
    <>
    <div className="main">
      <HeaderComp/>
      <div className="body-container">
        <div className="left">
          <section >
            <article>
              <h2>A propos de moi</h2>
              <p>Développeur web junior passionné par la création d’interfaces modernes et fonctionnelles, j’ai acquis des compétences solides en front-end et back-end à travers des projets personnels et des formations. J’utilise des outils comme HTML, CSS, JavaScript, React, Laravel ou encore GitHub pour concevoir des sites web dynamiques.
                Curieux, autonome et déterminé à progresser, je suis à la recherche de nouvelles opportunités pour mettre mes compétences au service de projets concrets et collaborer avec des professionnels du secteur.
              </p>
            </article>
          </section>
          <section className="projets">
          <h2>Mes recents projets </h2>
          <article>
            <img className="featured-img" src="/src/assets/images/moi.png" alt="image1"/>
            <div className="projet-intro">
              <h3>Ma Passion</h3>
              <br />
              <p>Passionné par le développement web, je conçois des applications modernes, intuitives et performantes en combinant des technologies comme React.js,Node.js et MongoDB. Autodidacte et rigoureux, j’aime relever des défis techniques et proposer des solutions efficaces. Je m’investis pleinement dans mes projets, du design à la mise en ligne, en passant par le développement front-end et back-end.
              Je suis à la recherche d’opportunités pour mettre mes compétences au service de projets innovants, tout en continuant à apprendre et à progresser aux côtés d’équipes passionnées.
              </p>
                <div className="btn-link">
                  <button style={ {color: "whitesmoke"}} className="btn" icon={<LikeOutlined /> }>soutenenir mon projet</button>
                </div>
            </div>
          </article>
          <Divider style={ {backgroundColor:"whitesmoke"}}/>
          {
            projects.map((item) =>{
              return(
                <article className="article-item" key={item.id}>
                  <div className="left">
                    <img 
                    src={item.image} 
                    alt={item.title} />
                  </div>
                    <div className="right">
                      <h3>{item.title}</h3>
                      <br />
                      <p>{item.description} </p>

                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <button className="btn-link" type="link" icon={<LinkOutlined />}>En savoir plus</button>
                      </a>

                    </div>
                    <br />
                </article>
              );
            })
          }
          </section>
          <section className="experiences">
            <h2>Experience Professionnelle</h2>
            {
            experience.map((item) =>{
              return(
                <article key={item.id}>
              <h3>{item.title}</h3>
              <p>
                {item.description}
              </p>
            </article>
              );
            } )
            }
            
          </section>
        </div>
        
        <AsideComp/>
      </div>

      <footer>
        <p>Conçu avec a librairie React JSX - par N'dri N'guessan Manasse , All right Reserved &copy; 2025</p>
      </footer>
    </div>
    </>
  )
}

export default App;

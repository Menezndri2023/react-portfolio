
import { EnvironmentOutlined, LinkOutlined, MailOutlined , GithubOutlined, LinkedinOutlined} from "@ant-design/icons";
import { educations } from "../data/data";


const AsideComp = () => {
      return(
            <>
                  <aside>
            <div className="contacts section">
                  <div className="contact-item">
                  <EnvironmentOutlined/>
                  <span> Abidjan , CIV</span>
                  </div>
                  <div className="contact-item">
                  <MailOutlined/>
                  <span> <a href="mailto:Ndrimanasse437@gmail.com">Ndrimanasse437@gmail.com</a></span>
                  </div>
                  <div className="contact-item">
                  <LinkOutlined/>
                  <span> <a href="/src/assets/cv/CV pour cote d'ivoire de N'GUESSAN MANASSE N'DRI (1).pdf">Mon CV</a> </span>
                  </div>
            </div>

            <div className="skills section">
                  <h2>Compétences</h2>
                  <p>Grâce à mes projets personnels et à ma formation, j’ai acquis une base solide en développement web.
                  Je maîtrise les langages HTML, CSS et JavaScript pour la création d’interfaces responsives et interactives.
                  J’ai également travaillé avec des frameworks modernes comme React.js pour le front-end et le back-end.
                  J’utilise Git et GitHub pour la gestion de version de mes projets, et je suis à l’aise avec l’outil Visual Studio Code.
                  Curieux, rigoureux et autonome, je suis capable d’apprendre rapidement de nouvelles technologies et de les appliquer dans mes projets. Mon objectif est de développer des solutions web performantes et adaptées aux besoins des utilisateurs.
                  </p>
                  <div className="skill-list">
                  <div className="skill-item">
                  <span>React JS/JSX</span>
                  <div className="full">
                        <div className="percent first"></div>
                  </div>
                  </div>

                  <div className="skill-item">
                  <span>Javascript - React</span>
                  <div className="full">
                        <div className="percent second"></div>
                  </div>
                  </div>

                  <div className="skill-item">
                  <span>HTML - CSS</span>
                  <div className="full">
                        <div className="percent third"></div>
                  </div>
                  </div>

                  <div className="skill-item">
                  <span>Securité Numerique</span>
                  <div className="full">
                        <div className="percent forth"></div>
                  </div>
                  </div>
                  </div>
                  <br />
                  <a 
                        href="https://github.com/Menezndri2023" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: '40px',
                        width: '250px',
                        borderRadius: '5px',
                        color: '#1890ff',
                        textDecoration: 'none',
                        background:'whitesmoke',
                        fontWeight: '600',
                        }}
                        >
                        <GithubOutlined style={{ marginRight: 8 }} />
                        En savoir plus sur GitHub
                        </a>


            </div>
            <div className="section">
                  <h2>Temoignages</h2>
                  <p>
                        Voici ce que mes collaborateurs, clients et partenaires disent de mon travail. Chaque projet est une opportunité de créer de la valeur, d’innover, et de bâtir des relations de confiance.
                  </p>
                  <br />
                  <a 
                  href="https://www.linkedin.com/in/manass%C3%A9-ndri-959b80263/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '40px',
                  width: '250px',
                  borderRadius: '5px',
                  color: '#1890ff',
                  textDecoration: 'none',
                  background: 'whitesmoke',
                  fontWeight: '600',
                  }}
                  >
                  <LinkedinOutlined style={{ marginRight: 8 }} />
                  En savoir plus sur LinkedIn
                  </a>

            </div>
            <div className="section">
                  <h2>Mon Parcours</h2>
                  {
                  educations.map((item)=>{
                  return(
                  <div className="parcours-item" key={item.id}>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  
                  </div>

                  );
                  })
                  }
            </div>
            <div className="section">
                  <h2>Langues</h2>
                  <div className="language-item">
                  <h3>Français</h3>
                  <span>Locution Natif</span>
                  <div className="full ">
                  <div className="percent first"></div>
                  </div>
                  </div>

                  <div className="language-item">
                  <h3>Anglais</h3>
                  <span>Competences professionnelles </span>
                  <div className="full">
                  <div className="percent second"></div>
                  </div>
                  </div>
            </div>
            </aside>
            </>
      )
};
export default AsideComp;
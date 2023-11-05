import './project.css'
import UrlImg from './frente do RG.jpg'

const projects = () => {
    return (
        <>

            <section id="projects" className="project">
                <h2 className='titleProject'>Proj<span>etos</span></h2>
                <div className="boxContentProjects">
                    <div className="contentProjects">
                        <div className="boxImg">
                            <img src={UrlImg} alt="Imagem do projeto 01" />
                        </div>
                        <div className="btnsProject">
                            <a href="#" className="btnProject">Repositório</a>
                            <a href="#" className="btnProject">Projeto</a>
                        </div>
                    </div>
                    <div className="contentProjects">
                        <div className="boxImg">
                            <img src="" alt="Imagem do projeto 01" />
                        </div>
                        <div className="btnsProject">
                            <a href="#" className="btnProject">Repositório</a>
                            <a href="#" className="btnProject">Projeto</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default projects
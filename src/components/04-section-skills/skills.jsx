import '../css/reset.css'
import '../css/variables.css'
import '../04-section-skills/skills.css'

import { } from 'react-icons/fa6'

const skills = () => {
    return (
        <>

            <section id='skills' className='skills'>
                <h2 className='skills-main-title'>Minhas <span>habilidades</span></h2>
                <div className='skills-information'>
                    {/* HABILIDADES DE CODIFICAÇÃO */}
                    <div className="skills-coding grow">
                        <h3 className="skills-title"><span>Habilidades</span> de Codificação</h3>
                        <div className='border-lateral'>
                            <div className="box-content">
                                <div className="content">
                                    <h3 className='title-technology'>HTML <span>90%</span></h3>
                                    <div className='percentage-bar'><span></span></div>
                                </div>
                                <div className='content'>
                                    <h3 className='title-technology'>CSS <span>85%</span></h3>
                                    <div className='percentage-bar'><span></span></div>
                                </div>
                                <div className='content'>
                                    <h3 className='title-technology'>JS <span>60%</span></h3>
                                    <div className='percentage-bar'><span></span></div>
                                </div>
                                <div className='content'>
                                    <h3 className='title-technology'>REACT <span>70%</span></h3>
                                    <div className='percentage-bar'><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* HABILIDADES PROFISSIONAIS */}
                    <div className="skills-profession grow">
                        <h3 className="skills-title">Habilidades <span>Profissionais</span></h3>
                        <div className='border-lateral'>
                            <div className="box-content">
                                <div className="content">
                                    <h3 className='title-technology'>SEO Marketing <span>90%</span></h3>
                                    <div className='percentage-bar'><span></span></div>
                                </div>
                                <div className='content'>
                                    <h3 className='title-technology'>GIT, GITHUB e VS Code<span>85%</span></h3>
                                    <div className='percentage-bar'><span></span></div>
                                </div>
                                <div className='content'>
                                    <h3 className='title-technology'>Desenvolvimento Web <span>60%</span></h3>
                                    <div className='percentage-bar'><span></span></div>
                                </div>
                                <div className='content'>
                                    <h3 className='title-technology'>Designer Web <span>70%</span></h3>
                                    <div className='percentage-bar'><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default skills
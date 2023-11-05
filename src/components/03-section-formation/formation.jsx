import '../css/reset.css'
import '../css/variables.css'
import './formation.css'

import { FaCalendar } from 'react-icons/fa6'


const formation = () => {
    return (

        <>

            <section id='formation' className="formationAndExperience">

                <h2 className="title">Minha <span>trajetória</span></h2>

                <div className="information">


                    {/* ---------- Formação ----------  */}
                    <div className="formation trajetorias">
                        <h3 className='formation title-padrao'>Formação</h3>

                        <div className="border-content">
                            <div className="box-content">
                                <div className="content">
                                    <div className='calendarIcon'><FaCalendar /> <span>2020 - 2023</span></div>
                                    <h3 className='title-curseExperience'>Ciências da Computação - (UNIFG)</h3>
                                    <p className='description'>Curso de graduação pela universidade faculdade dos guararapes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-content">
                            <div className="box-content">
                                <div className="content">
                                    <div className='calendarIcon'><FaCalendar /> <span>2023 - 2023</span></div>
                                    <h3 className='title-curseExperience'>Curso Dev - Quest</h3>
                                    <p className='description'>Curso focado no desenvolvimento de software front-end e backend.</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-content">
                            <div className="box-content">
                                <div className="content">
                                    <div className='calendarIcon'><FaCalendar /> <span>2014 - 2015</span></div>
                                    <h3 className='title-curseExperience'>Informatica para internet (UNIFG)</h3>
                                    <p className='description'>Curso técnico pela universidade faculdade dos guararapes.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ---------- Experiências ----------  */}
                    <div className="experience trajetorias">
                        <h3 className='experience title-padrao'>Experiências</h3>

                        <div className="border-content">
                            <div className="box-content">
                                <div className="content">
                                    <div className='calendarIcon'><FaCalendar /> <span>2023 - 2023</span></div>
                                    <h3 className='title-curseExperience'>Construção de Páginas - landing page</h3>
                                    <p className='description'>Página interativa para venda de produtos.</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-content">
                            <div className="box-content">
                                <div className="content">
                                    <div className='calendarIcon'><FaCalendar /> <span>2020 - 2023</span></div>
                                    <h3 className='title-curseExperience'>Páginas de Cadastros</h3>
                                    <p className='description'>Páginas completas, interativas e obrigatórios.</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-content">
                            <div className="box-content">
                                <div className="content">
                                    <div className='calendarIcon'><FaCalendar /> <span>2020 - 2023</span></div>
                                    <h3 className='title-curseExperience'>Páginas de Formulários</h3>
                                    <p className='description'>Páginas completas de inputs de acordo com a necessidade.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <a href="#" className="btn-conversar">
                    <button type='button'>Vamos Conversar</button>
                </a>

            </section >

        </>

    )
}

export default formation
import '../css/reset.css'
import '../css/variables.css'
import '../02-section-about-me/about-me.css'
import imgPersonal from './img-pessoal-principal.jpg'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'

const aboutMe = () => {
    return (
        <>

            <section id='aboutMe' className='aboutMe'>
                <div className='information-personal'>
                    <h1 className='title-about'>Olá, eu sou Eduardo Henrick</h1>
                    <h2 className='profession'>Desenvolvedor Front-end</h2>
                    <p className='description'>
                        Olá, seja bem vindo ao meu portfólio. Meu nome é Eduardo Henrick, tenho 31 anos e curso atualmente ciências da computação com especialização e foco no desenvolvimento de software frontend.
                    </p>
                    <p className='description-additional'>
                        Fique a vontade para explorar meu portfólio.
                    </p>

                    {/* buttons */}
                    <div className="btns">
                        <a className='btn-hire' href="#">Contrate-me</a>
                        <a className='btn-talk' href="#">Conversar</a>
                    </div>

                    {/* web social */}
                    <div className='social'>
                        <a href="#github">
                            <FaGithub />
                        </a>
                        <a href="#linkedin">
                            <FaLinkedin />
                        </a>
                        <a href="#instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* img pessoal */}
                <div className='box-img'>
                    <div className='img'>
                        <img className='img-personal' src={imgPersonal} alt="Foto pessoal de Eduardo Henrick" title='foto pessoal de Eduardo Henrick' />
                        <span className='circle'></span>
                    </div>
                </div>


            </section>

        </>
    )
}

export default aboutMe
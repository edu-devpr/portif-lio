import '../css/reset.css'
import '../css/variables.css'
import '../01-header/header.css'

const header = () => {
    return (
        <>

            <header className="header">

                <a className='logo' href="#logo">Eduardo.</a>

                <nav className="navegation">
                    <a href="#aboutMe">Sobre mim</a>
                    <a href="#formation">Formação</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#projects">Projetos</a>
                    <a href="#contacts">Contato</a>
                </nav>

            </header>

        </>
    )
}

export default header
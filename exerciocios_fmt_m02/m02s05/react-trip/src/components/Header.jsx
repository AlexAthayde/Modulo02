import './Header.css'

function Header() {
    return (
        <>
            <header className="header-bg">
                <div className="header-container">
                    <img className='header-logo' src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" alt="Imagem Logo" />

                    <ul className='header-menu'>
                        <li>Bicicletas</li>
                        <li>Seguros</li>
                        <li>Contatos</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
import Caption from '../atoms/Caption';
import Logo from '../../assets/img/logo.png'
import '../../assets/styles/footer.css'

function Footer() {
    return ( 
        <footer>
            <div className="grupo_1">
                <div className="box">
                    <figure>
                        <a href="">
                            <img src={Logo} alt="Logo de Air Fresh 2.0" />
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <Caption msn="SOBRE NOSOTROS"></Caption>
                    <div className="nosotros">
                        <p className='info_nosotros'>La empresa se ha ganado una sólida reputación gracias a su enfoque en la precisión de los datos y su compromiso con la sostenibilidad ambiental. Air Fresh 2.0 contribuye activamente a la protección del medio ambiente y la salud pública, trabajando hacia un futuro más limpio y saludable para todos.</p>
                    </div>
                </div>

            </div>
            <div className="grupo_2">
                <small>&copy; 2023 <b>Air Fresh 2.0</b> - Todos los derechos reservados</small>
            </div>
        </footer>
    );
}

export default Footer;
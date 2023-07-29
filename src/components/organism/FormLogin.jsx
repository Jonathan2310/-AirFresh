import { Link, useNavigate } from 'react-router-dom';
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Logo from '../../assets/img/logo2.png'
import '../../assets/styles/formRegister.css'

function FormLogin() {
    const navigate = useNavigate();

    const handlerClick = (e)=> {
        e.preventDefault();
        navigate("/home");
    }

    return (

        <div className="form_register">
            <img src={Logo} alt="Logo de la empresa" className="logo" />
            <Title>Inicio de Sesión</Title>
            <form>
                <WrapperInput msn="Correo" type="E-mail" placeholder="" name={'correo'} />
                <WrapperInput msn="Contraseña" type="password" placeholder="" name={'contrasenia'} />

                <Button type="button" value="Iniciar Sesion" handlerClick={handlerClick} />
                <Link className="link" to="/register">Regístrarse</Link>
            </form>

        </div>
    );
}

export default FormLogin;
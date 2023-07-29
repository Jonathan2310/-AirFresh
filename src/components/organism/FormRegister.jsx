import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Logo from '../../assets/img/logo2.png'
import '../../assets/styles/formRegister.css'

function FormRegister() {
    const navigate = useNavigate();

    const handlerClick = (e)=> {
        e.preventDefault();
        navigate("/login");
    }
    
    return (
        <div className="form_register">
            <img src={Logo} alt="Logo de la empresa" className="logo" />
            <Title>Registro</Title>
            <form>
                <WrapperInput msn="Nombre(s)" type="text" placeholder="" name={'nombre'} />
                <WrapperInput msn="Apellido(s)" type="text" placeholder="" name={'apellido'} />
                <WrapperInput msn="Telefono" type="number" placeholder="" name={'telefono'} />
                <WrapperInput msn="Correo" type="E-mail" placeholder="" name={'correo'} />
                <WrapperInput msn="Password" type="password" placeholder="" name={'contrasenia'} />

                <Button type="button" value="Finalizar registro" handlerClick={handlerClick} />
            </form>

        </div>

    );
}

export default FormRegister;
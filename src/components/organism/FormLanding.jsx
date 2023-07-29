import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Title from "../atoms/Title";
import Logo2 from '../../assets/img/logo2.png'

import '../../assets/styles/InfoLogin.css'


function FormLanding() {
    const navigate = useNavigate();

    const handlerClick = (e)=> {
        e.preventDefault();
        navigate("/login");
    }


    return ( 
        <div className="info_landing">
            <Title>Air Fresh 2.0</Title>
            <img src={Logo2} alt="Logo de la empresa" className="logo" />
            <Label msn={"El mejor pronostico del clima con nosotros"} ></Label>
            <form>
                <Button type="button" value="Iniciar Sesion" handlerClick={handlerClick} />
            </form>
        </div>
    );
}

export default FormLanding;
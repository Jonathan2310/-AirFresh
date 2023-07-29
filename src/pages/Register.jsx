import { useParams } from "react-router-dom";
import FormRegister from "../components/organism/FormRegister";
import '../assets/styles/formRegister.css'

function Register() {
    const params = useParams();
    console.log(params.typeUser)
    
    return (
        <div className="cover_container">
            <div className="contenedor_form">
                <FormRegister typeUser={params.typeUser} />
            </div>
        </div>
        
        
    );
}

export default Register;
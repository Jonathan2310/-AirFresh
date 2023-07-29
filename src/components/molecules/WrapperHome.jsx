import Subtitle from "../atoms/Subtitle";
import SubtitleA from "../atoms/SubtitleA";
import SubtitleB from "../atoms/SubtitleB";
import SubtitleClima from "../atoms/SubtitleClima";
import '../../assets/styles/wrapperHome.css';

function WrapperInfo() {
    return (
        <div className="container_home">
            <Subtitle>Bienvenido <b>Usuario</b></Subtitle>
            <div className="clima">
                <SubtitleA>Las condiciones del aire son:</SubtitleA>
                <div>
                    <div className="contenedor_clima">
                        <SubtitleClima>60°</SubtitleClima>
                    </div>
                    <SubtitleB>Calidad de aire</SubtitleB>
                </div>
            </div>
        </div>
    );
}

export default WrapperInfo;
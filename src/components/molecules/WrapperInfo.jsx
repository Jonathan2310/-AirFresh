import SubTittleC from "../atoms/SubTittleC";
import Redirector from "../atoms/Redirector";
import Img1 from '../../assets/img/Info1.png'
import Img2 from '../../assets/img/Info2.png'
import Img3 from '../../assets/img/Info3.png'
import Img4 from '../../assets/img/Info4.png'
import Img5 from '../../assets/img/Info5.png'
import Img6 from '../../assets/img/Info6.png'
import '../../assets/styles/wrapperInfo.css'
import Subtitle from "../atoms/Subtitle";

function WrapperInfo() {
    return (
        <div className="container_masInfo">
            <Subtitle>Noticias</Subtitle>
            <div className="caption">
                <SubTittleC>Ultimas Noticias</SubTittleC>
            </div>
            <div className="section">
                <div className="cuerpo-tarjeta">
                    <img className="ImgInfo" src={Img1} alt="imagen informativa" />
                    <div className="descripcion">
                        <Redirector>2024 probablemente será aún más caluroso. Estas son las dos razones OMS:</Redirector>
                    </div>
                </div>
                <div className="cuerpo-tarjeta">
                <img className="ImgInfo" src={Img2} alt="imagen informativa" />
                    <div className="descripcion">
                        <Redirector>OMS: Calor excesivo complicará enfermedades preexistentes</Redirector>
                    </div>
                </div>
                <div className="cuerpo-tarjeta">
                    <div className="foto">
                        <img className="ImgInfo" src={Img3} alt="imagen informativa" />
                    </div>
                    <div className="descripcion">
                        <Redirector>Renunciaron a todo y viajarán por el mundo para proteger el medio ambiente</Redirector>
                    </div>
                </div>
            </div>

            <div className="caption2">
                <SubTittleC>Más Noticias del clima</SubTittleC>
            </div>
            <div className="section">
                <div className="cuerpo-tarjeta">
                    <div className="foto">
                        <img className="ImgInfo" src={Img4} alt="imagen informativa" />
                    </div>
                    <div className="descripcion">
                        <Redirector>Las altas temperaturas podrían hacer que tu avión no despegue. ¿Por qué?</Redirector>
                    </div>
                </div>
                <div className="cuerpo-tarjeta">
                    <div className="foto">
                        <img className="ImgInfo" src={Img5} alt="imagen informativa" />
                    </div>
                    <div className="descripcion">
                        <Redirector>¿Viajas a una zona afectada por la ola de calor? Esto es lo que debes saber</Redirector>
                    </div>
                </div>
                <div className="cuerpo-tarjeta">
                    <div className="foto">
                        <img className="ImgInfo" src={Img6} alt="imagen informativa" />
                    </div>
                    <div className="descripcion">
                        <Redirector>Incendios en Grecia: Evacúan a 1.200 niños de campamento de verano</Redirector>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default WrapperInfo;
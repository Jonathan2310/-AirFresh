import '../../assets/styles/wrapperInfo.css'
import Subtitle from "../atoms/Subtitle";
import SubtitleB from "../atoms/SubtitleB";
import '../../assets/styles/WrapperMasInformation.css';

function WrapperMasInformation() {
    return (
        <div className="container_masInformation">
            <Subtitle>Mas Information</Subtitle>
            <div className="container_Information">
                <SubtitleB>Como prevenir la contaminacion</SubtitleB>
                <p className='parafo'>Conciencia sobre la contaminación del aire: Reduce el uso de vehículos que emitan gases contaminantes, no quemes basura y evita el uso de leña o carbón en áreas urbanas.</p>
                <p className='parafo'>Participación ciudadana: Involúcrate en iniciativas locales y campañas medioambientales para promover un cambio significativo en tu comunidad.</p>
            </div>
            <div className="container_Information2">
                <SubtitleB>En caso de contigencia por aire contaminado</SubtitleB>
                <p className='parafo'>En caso de una contingencia por la calidad del aire, es esencial tomar medidas para proteger tu salud y minimizar la exposición a los contaminantes atmosféricos. Las contingencias pueden ocurrir debido a altos niveles de contaminantes como partículas suspendidas (PM2.5 y PM10), ozono, dióxido de azufre, dióxido de nitrógeno, entre otros. Aquí tienes algunas recomendaciones:</p>
                <ol>
                    <li><b>Mantente informado:</b> Presta atención a las advertencias y boletines emitidos por las autoridades ambientales y de salud. Sigue las noticias locales para estar al tanto de la situación.</li>
                    <li><b>Usa mascarillas adecuadas:</b> En situaciones de alta contaminación, considera usar mascarillas N95 o superiores para reducir la inhalación de partículas finas y contaminantes.</li>
                    <li><b>Mantén las ventanas cerradas:</b> En tu hogar, oficina o automóvil, mantén las ventanas cerradas para reducir la entrada de aire contaminado.</li>
                    <li><b>Usa purificadores de aire:</b> Si es posible, utiliza purificadores de aire con filtros HEPA en espacios interiores para mejorar la calidad del aire.</li>
                    <li><b>Evita el uso de productos contaminantes:</b> Limita el uso de aerosoles, productos de limpieza tóxicos y otras fuentes de emisiones contaminantes en interiores.</li>
                    <li><b>No quemes basura ni materiales:</b> Evita cualquier actividad que genere humo o emisiones adicionales en el aire.</li>
                </ol>
            </div>
        </div>
    );
}

export default WrapperMasInformation;
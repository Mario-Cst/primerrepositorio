
import Marie from './marie.jpeg'
import Abascal from './abascal.jpeg'
import Nicolas from './nicolas kage.jpeg'
import Michael from './michael.jpeg'
import Espinete from './espinete.jpeg'
function Opinion (){
    return (
        <div>
        <div className="opinion">
            <p className="comillas">,,</p>
            <p className="textillo">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know.</p>   
        </div>
        <div className="clientes">
            <img className="client" src={Marie} alt=""/>
            <img className="client" src={Abascal} alt=""/>
            <img className="client" src={Espinete} alt=""/>
            <img className="client" src={Nicolas} alt=""/>
            <img className="client" src={Michael} alt=""/>
        </div>
     </div>
    )
}

export default Opinion;

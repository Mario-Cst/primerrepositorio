import Foto from './image.png'

function TopContainer (){
    return (
        <div className="top_container">
        <div className="text_container">
            <p className="titulo">The place where you know people</p>
            <p className="subtitulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
            <button className="button_secundary">Get Started</button>
        </div>
        
        <div className="img_container">
            <img src={Foto} alt=""/>
        </div>
    </div>
    )
}

export default TopContainer;
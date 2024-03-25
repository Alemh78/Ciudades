import { Link } from "react-router-dom";

const Main = (props) => {
    return (
        <main>
            <div>
               
                <p className="text-xl text-center justify-center text-black">{props.subtitulo}</p>
                 <img src={props.imagen}></img>
            </div>
            {props.children}
        </main>
    );
};

export default Main;

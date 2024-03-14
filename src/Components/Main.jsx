
const Main=(props)=>{
    return(

<div>
    <main className="w-full max-h-full">
        <h1 className="text-4xl text-center justify-center text-black">{props.titulo}</h1>
        <p className="text-xl text-center justify-center text-black">{props.subtitulo}</p>
        <img src={props.imagen}></img>
        <nav>
            <a></a>
        </nav>
        {props.children}
    </main>
    
</div>






    )
}
export default Main
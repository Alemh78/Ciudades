
const Main=(props)=>{
    return(

<div>
    <main className= {props.claseMain}>

       
        <p className="text-xl text-center justify-center text-black">{props.subtitulo}</p>
        <img src={props.imagen}></img>
        {props.children}
    </main>
    
</div>






    )
}
export default Main
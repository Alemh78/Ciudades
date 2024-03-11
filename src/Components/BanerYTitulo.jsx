const BanerYTitulo=(props)=>{
    return(
<div className="bg-gradient-to-r from-cyan-600 to-blue-600 " >

<h1 className="text-5xl flex  flex-col justify-center items-center mt-20 text-white ">{props.titulo}</h1>  
<img  src={props.imagen} className="w-full min-h-full"></img>
{props.children}
</div>

    )
}
export default BanerYTitulo
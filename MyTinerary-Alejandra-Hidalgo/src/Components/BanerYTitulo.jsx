const BanerYTitulo=(props)=>{
    return(
<div className="w-full min-h-full" >

<h1 className="text-5xl flex  flex-col justify-center items-center mt-20 text-white ">{props.titulo}</h1>  
<img  src={props.Imagen} className="w-full min-h-full bg-cover"></img>
{props.children}
</div>

    )
}
export default BanerYTitulo
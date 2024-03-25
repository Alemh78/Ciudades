const BanerYTitulo=(props)=>{
    return(
<div className={props.bg} >

<h1 className="text-5xl  justify-center items-center text-center  text-black ">{props.titulo}</h1>  
<img  src={props.Imagen} className="w-full min-h-full bg-cover {props.bg}" ></img>

{props.children}
</div>

    )
}
export default BanerYTitulo
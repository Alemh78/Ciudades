const Main=(props)=>{
    return(
<main className=" min-h-screen bg-[url('src/assets/isla.jpg')]">
<section> 
<h1 className="text-5xl flex  flex-col justify-center items-center mt-20 text-white">{props.titulo}</h1>
             <p className="text-3xl flex  flex-col justify-center items-center mt-20 text-white" ></p>
<h2 className="p-2 tex-lg font-semibold tex-black  text-white text-2xl mt-40">{props.h2}</h2>
             <nav className="border-black text-black hover:bg-blue-900
             w-24 h-9 relative left-20  font-semibold flex justify-center ">
             <a >{props.nav}</a>
             </nav>
</section> 
</main>

    )
}
export default Main
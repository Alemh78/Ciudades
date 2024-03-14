
const Carrusel=({lugares})=>{
   
    return( 
       
        <article>
        <img className="h-40 w-70 space-x-4 border-black border-[3px]"
       
          src={lugares.image}
          alt={"Imagen" + lugares.name}
        ></img>
        <footer className="">
          <h2 className="text-2xl italic font-bold items-center text-center">{lugares.name}</h2>
          <p className="text-xl italic font-bold items-center text-center">{lugares.country}</p>
        </footer>
      </article>
        
    )
};

export default Carrusel
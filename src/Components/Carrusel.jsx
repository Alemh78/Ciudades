
const Carrusel=({lugares,imageSize })=>{
   
    return( 
       
        <article>
         <img className={`relative object-cover w-70 h-40 space-x-4 border-black border-[3px] ${imageSize}`} src={lugares.image} alt={"Imagen" + lugares.name} />
        <footer className="">
          <h2 className="text-2xl italic font-bold items-center text-center">{lugares.name}</h2>
          <p className="text-xl italic font-bold items-center text-center">{lugares.country}</p>
        </footer>
      </article>
        
    )
};

export default Carrusel
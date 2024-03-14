
const Carrusel=({lugares})=>{
   
    return( 
       
        <article className="w-full">
        <img
          className="w-full h-80 object-cover flex flex-col justify-center items-center text-center"
          src={lugares.image}
          alt={"Imagen" + lugares.name}
        ></img>
        <footer className="">
          <h2 className="text-3xl italic font-bold">{lugares.name}</h2>
          <p className="text-3xl italic">{lugares.country}</p>
        </footer>
      </article>
        
    )
};

export default Carrusel
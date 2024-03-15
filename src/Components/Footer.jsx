const Footer=(props)=>{
    return( 
        <footer className={props.content}>
            <p className="flex  justify-center text-center text-3xl">{props.foter}</p>
            {props.children}
        </footer>


        
    )
};

export default Footer
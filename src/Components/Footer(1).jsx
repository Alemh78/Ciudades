const Footer=(props)=>{
    return( 
        <footer className={props.color}>
            <p className="flex  justify-center text-center text-3xl">{props.foter}</p>
       
       {props.childen}
        </footer>


       
    )
};

export default Footer
(
    ()=>{
        const abc = (message: string):never =>{
            throw new Error( message );
        };

        console.log( abc('Auxilio, soy una funcion de tipo never') );
    }
)();
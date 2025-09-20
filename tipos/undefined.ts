

(
    ()=>{
        let nothing: undefined = undefined;
        let otherNothing: null = null;

        console.log( nothing );
        console.log( otherNothing );

        if( nothing === otherNothing ){
            console.log( true );
        }else{
            console.log( false );
        }
    }
)();
(()=>{
    const avengers: number = 25;

    console.log({ avengers });

    const villians: number = 15;

    console.log( {villians} );

    console.log('\n----------------\n');

    console.log(typeof avengers);
    console.log(typeof villians);

    console.log('\n----------------\n');

    if( avengers < villians ){
        console.log('Estamos en problemas');
    }else{
        console.log('Estamos salvados');
    }
})();
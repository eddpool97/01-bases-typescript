
(
    ()=>{
        const numbers: number[] = [1,2,3,4,5,8,7,8,9,10];

        console.log( numbers );

        numbers.push(11);

        console.log( numbers );

        const villian: string[] =['Omega Rojo', 'Dormamu', 'Duende Verde'];

        numbers.forEach( number => console.log(`El numero ahora es ${number}`) );

        villian.forEach( villian => console.log(`El villano ahora es ${villian}`) );


    }
)();
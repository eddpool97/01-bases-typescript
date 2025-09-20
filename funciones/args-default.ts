
(()=>{

    const fullName = ( firstName?: string, lastName?: string, upper: boolean = true ): string=>{

        if( upper ){
            return `${firstName} ${lastName}`.toUpperCase();
        }

        return `${firstName} ${lastName}`;
    }

    const name: string= fullName('Parker');

    console.log( name );

})();
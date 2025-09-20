

(()=>{

    const fullName = ( firstName?: string, lastName?: string ): string=>{

        return `${firstName} ${lastName}`;
    }

    const name: string= fullName('Parker');

    console.log( name );

})();
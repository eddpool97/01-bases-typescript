(()=>{
    const batman: string = 'Batman';
    const greenLantern: string = 'Linterna Verde';
    const blackVolcano: string = `Heroe: Volcan Negro`;

    console.log(`I'm ${batman}`);

    console.log(batman.toLocaleUpperCase());

    console.log(batman[10]?.toLocaleUpperCase() || 'No hero found');
})();
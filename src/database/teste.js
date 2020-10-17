const database = require('./db');
const saveOrphanage = require('./saveOrphanage');
database.then(async db => {
    //inserir dados na tabela
    //  await saveOrphanage(db, {
    //      lat: "-23.5462359",
    //      lng: "-46.6421534",
    //      name: "locallegal",
    //      about: "Presta assistencia a meninas de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //      images: [
    //          "https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //          "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //      ].toString(),
    //      instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //      opening_hours: "Horário de visitas das 18h até 8h",
    //      open_on_weekends: "1"
    //  })
    
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages) 

    // //consultar um orfanato por ID
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    // console.log(orphanage)

    // //apagar um dado
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))

})
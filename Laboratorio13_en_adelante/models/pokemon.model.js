const db = require('../util/database');

// const pokemones = [
//     {
//         nombre: "Bulbasaur",
//         tipo: "Planta",
//         imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
//     },
//     {
//         nombre: "Charmander",
//         tipo: "Fuego",
//         imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
//     },
//     {
//         nombre: "Squirtle",
//         tipo: "Agua",
//         imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
//     }
// ]

module.exports = class Pokemon{

    constructor(nombre, tipo, imagen){
        this.nombre = nombre;
        this.tipo = tipo;
        this.imagen = imagen;
    }

    save(){

        // pokemones.push({
        //     nombre: this.nombre,
        //     tipo: this.tipo,
        //     imagen: this.imagen
        // });

        
        
        return db.execute('INSERT INTO pokemons (nombre, tipo, imagen) VALUES (?, ?, ?)', [this.nombre, this.tipo, this.imagen]);
        

    }

    static fetchAll(){

        return db.execute('SELECT * FROM pokemons');
        //return pokemones;
    }

    static fetchLastOne(){
        return db.execute('SELECT * FROM pokemons ORDER BY id DESC LIMIT 1')
    }

    static updateLastOne(nombre, tipo, imagen){
        return db.execute('UPDATE pokemons SET nombre = ?, tipo = ?, imagen = ? ORDER BY id DESC LIMIT 1', [nombre, tipo, imagen]);
    }

    static fetchID(id){
        return db.execute('SELECT * FROM pokemons WHERE id = ?', [id]);
    }

    

}
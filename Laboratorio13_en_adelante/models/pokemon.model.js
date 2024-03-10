const pokemones = [
    {
        nombre: "Bulbasaur",
        tipo: "Planta",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {
        nombre: "Charmander",
        tipo: "Fuego",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
    },
    {
        nombre: "Squirtle",
        tipo: "Agua",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    }
]

module.exports = class Pokemon{

    constructor(nombre, tipo, imagen){
        this.nombre = nombre;
        this.tipo = tipo;
        this.imagen = imagen;
    }

    save(){

        pokemones.push({
            nombre: this.nombre,
            tipo: this.tipo,
            imagen: this.imagen
        });
    }

    static fetchAll(){
        return pokemones;
    }

}
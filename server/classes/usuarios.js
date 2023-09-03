
class Usuarios {

    // id: 'LLAVE',
    // nombre: 'NOMBRE',
    // sala: 'SALA'

    constructor(){
        this.personas = [];
    }

    agregarPersona(id, nombre, sala){
        let persona = { id, nombre, sala };
        this.personas.push(persona);

        return this.personas;
    }

    getPersona( id ){
        // filter retorna un nuevo arreglo. Por eso buscamos el primero [0]
        let persona = this.personas.filter( mipersona => {
            return mipersona.id === id;
        })[0];

        return persona;
    }

    getPersonas(){
        return this.personas;
    }

    getPersonasPorSala( sala ){
        let personasEnSala = this.personas.filter( persona => persona.sala === sala );
        return personasEnSala;
    }

    borrarPersona(id){
        
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter( mypersona => mypersona.id != id);
        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}

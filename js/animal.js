class Animal{

    constructor(tipo, pernas){
        this.tipo = tipo;
        this.pernas = pernas;
    }
    falar(som = 'Som qualquer'){
        return som;
    }
    get dados(){
        return `Tipo: ${this.tipo}, pernas: ${this.pernas}`;
    }
}
export class Gato extends Animal{
    constructor(pernas,cor){
        super('Gato',pernas);
        this.cor = cor;
    }
    falar(som = "Miau"){
        return som;
    }
    getCor(){
        return this.cor;
    }
    get color(){
        return this.cor;
    }
}
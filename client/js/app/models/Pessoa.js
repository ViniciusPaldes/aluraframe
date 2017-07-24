class Pessoa {
    constructor(nome , sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome() {
        return this._nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    get nomeCompleto() {
        return "Nome completo: "+this._nome+" "+this._sobrenome;
    }
}
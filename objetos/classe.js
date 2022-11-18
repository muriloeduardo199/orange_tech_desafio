class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade =idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`meu nome ${this.nome} e minha idade é ${this.idade}`);
    }
}


const murilo =new Pessoa('murilo', 29);

const renam = new Pessoa('renam', 30);




console.log(renam);
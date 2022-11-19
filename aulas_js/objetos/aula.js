const pessoa = {
    nome: 'murilo eduardo',
    idade: 29,
    descrever: function() {

        console.log(`meu nome e  ${this.nome} e minha idade  é ${this.idade}`);
    }
};

pessoa.descrever = function(){
    console.log(`Meu nome  é ${this.nome}`);
};



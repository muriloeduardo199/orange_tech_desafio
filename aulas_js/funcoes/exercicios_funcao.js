function escrevaMeuNome(nome) {
    console.log('Meu nome é' + nome);
}



function verificarIdade(idade) {
    if (idade >= 18){
        return escrevaMeuNome() + 'voce e maior de  idade';
    }

    else {
        return  escrevaMeuNome, 'voce é menor de idade';
    }
}

escrevaMeuNome('Vitor');


verificarIdade(18);
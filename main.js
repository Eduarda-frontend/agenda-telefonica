const form = document.querySelector('#form-agenda');
const inputTeleContato = document.querySelector('#telefone-contato');
let linhas = '';

const nomeContato = [];
const teleContato = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    toLimit();
})

function toLimit(string = ""){
    string.value = string.value.substring(0,13);
}

function adicionaLinha(){
    const inputNomeContato = document.querySelector('#nome-contato');


    if(nomeContato.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já foi inserido!`);
    }else{

        nomeContato.push(inputNomeContato.value);
        teleContato.push(inputTeleContato.value);
    
        let linha = `<tr>`;
        linha += `<td> ${inputNomeContato.value} </td>`;
        linha += `<td> ${inputTeleContato.value} </td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTeleContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



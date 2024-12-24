function checkButton() {
    //um teste para verificar se a pagina foi carregada,
    let header = document.querySelector(".OrderDetails__content");

    if (header) {
        console.log("Header encontrado!");
        if (document.querySelector(".CopyButton") == null) { // teste p/ verif. se o botão já existe.
            let headerButton = header.children[1];
            headerButton = headerButton.firstChild;
            headerButton = headerButton.children[1];
            console.log("botão não encontrado!");
            createButton(headerButton); //cria o botão no lugar especif.
        }
    }

}

function createButton(headerButton) {
    const button = document.createElement("button");
    button.innerHTML = "Copiar informaçõoes";
    button.classList.add("CopyButton");

    //Adicionando evento de click ao botão
    //Quando clicado, será copiada as informações para a área de transferência
    button.addEventListener("click", () => {

        //data = getOrderData();
        data = "ola tudo bem"
        console.log(data);

        navigator.clipboard.writeText(data)
            .then(() => {
                clickAlert("Informações copiadas!", 3000);
            })
            .catch(err => {
                clickAlert("Erro ao copiar", 3000);
            });

        
    });

    headerButton.appendChild(button);
    console.log("botao criado");

}



function getOrderData(){

    let text = "";

    divOrderDetails = document.getElementsByClassName('ORDER_DETAILS_COSTUMER_DATA')[0]
    const divTotal = document.getElementsByClassName('Summary__total')[0]

    let orderNumber, costumerName, contact, totalValue, paymentType;

    function capitalizeWords(str) {
        return str.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }

    function orderAndCostumer(){

        for(let i=0; i<4; i++){ //chegar até o h2 que contem os dois spans com numero e nome do pedido
            divData = divData.firstChild;
        }

        orderNumber = divData.firstChild.textContent
        costumerName = capitalizeWords(divData.children[1].textContent)
    }

    function contactConfig(){
        divData = divOrderDetails.children[1];
        divData = divData.children[2];

        numberContact = numberContact.substring(0, numberContact.indexOf('ID')) + numberContact.substring(numberContact.indexOf(':'))

        numberContact = numberContact.replaceAll(' ', '')
        numberContact = numberContact.replace(':', ';')

        contact = numberContact;

    }

    text += "*`●●●● ♦ IFOOD ♦ ●●●●`*" + '\n'
    text += "*`● " + nPedido(divOrderDetails) + "`*" + '\n'
    text += "*`● Nome`*: " + nomeCliente(divOrderDetails) + '\n'
    text += "*`● Contato`*: " + contactPhone(divContact) + '\n'
    text += "*`● Valor`*: R$ " + totalPrice(divTotal) + '\n'
    text += "*`● Tipo de Pagamento`*: " + tipoPagamento(divTotal) + '\n'
    text += getEndereco(divOrderDetails)

    return text
}

//Função para criar caixa de alerta
function clickAlert(mensagem, tempoExibicao) {
    // Criar elemento de alerta
    var alerta = document.createElement('div');
    alerta.classList.add('clickAlertDiv');
    alerta.textContent = mensagem;

    // Adicionar alerta ao corpo do documento
    document.body.appendChild(alerta);

    // Remover alerta após o tempo especificado
    setTimeout(function () {
        alerta.remove();
    }, tempoExibicao);
}

setInterval(checkButton, 1000)

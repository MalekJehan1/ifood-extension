function checkButton() {
    //um teste para verificar se a pagina foi carregada,
    let header = document.querySelector(".OrderDetails__content");

    if (header) {
        console.log("Header encontrado!");
        if (document.querySelector(".CopyButton") == null) { // teste p/ verif. se o botão já existe.
            let headerbutton = header.children[1];
            headerbutton = header.firstChild;
            headerbutton = header.children[1];
            console.log("botão não encontrado!");
            createButton(headerButton); //cria o botão no lugar especif.
        }
    }

}

function createButton(headerbutton) {
    const button = document.createElement("button");
    button.innerHTML = "Copiar informaçõoes";
    button.classList.add("CopyButton");

    //Adicionando evento de click ao botão
    //Quando clicado, será copiada as informações para a área de transferência
    button.addEventListener("click", () => {

        data = getOrderData();
        console.log(data);

        navigator.clipboard.writeText(data)
            .then(() => {
                clickAlert("Informações copiadas!", 3000);
            })
            .catch(err => {
                clickAlert("Erro ao copiar", 3000);
            });

        
    });

    headerbutton.appendChild(button);
    console.log("botao criado");

}

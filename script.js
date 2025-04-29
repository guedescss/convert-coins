// cotação das moedas no dia
const USD = 5.64
const EUR = 6.42
const GBP = 7.55

// obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// manipulando o input amount para receber somente numeros.
amount.addEventListener("input", () => {
    
    const hasCharacterRegex = /\D+/g
   
    amount.value = amount.value.replace(hasCharacterRegex, " ")

})

// capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// função para converter a moeda
function convertCurrency(amount, price, symbol) {
    // exibindo a cotação da moeda selecionada.
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // calcula o total
        
        let total = String(amount * price).replace(".", ",")

        // exibir o resultado total
        result.textContent = `${total} Reais`
    
        // Aplica a classe que exibe o footer pra mostrar o resultado 
        footer.classList.add("show-result")


    } catch (error) {
        
    // Remove a classe footer removendo ele da tela
        console.error(error)
        footer.classList.remove("show-result")
        alert("Ocorreu um erro ao converter a moeda.")
        
    }

}

// formata a moeda pra Real 
function formatCurrencyBRL (value) {
    // converte para number para utilizar o tolocalestring para formatar o valor no padrão brl
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}



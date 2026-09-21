
const button = document.querySelector("button");

button.addEventListener("click", function () {

    // Pegando os valores dos campos
    const nome = document.querySelector("#name").value;
    const valor = Number(document.querySelector("#value").value);
    const idade = Number(document.querySelector("#age").value);

    // Pegando a forma de pagamento
    const pagamento = document.querySelector('input[name="forma"]:checked');

    // Pegando a resposta do cupom
    const cupom = document.querySelector('input[name="desconto"]:checked');

    // Verificando se os campos foram preenchidos
    if (nome === "" || valor <= 0 || idade <= 0 || !pagamento || !cupom) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    let valorFinal = valor;

    // Aplicando desconto de 10%
    if (cupom.value === "Yes") {
        valorFinal = valor * 0.90;
    }

    // Mostrando o resultado
    alert(
        "Cliente: " + nome +
        "\nIdade: " + idade +
        "\nForma de pagamento: " + pagamento.value +
        "\nValor original: R$ " + valor.toFixed(2) +
        "\nValor final: R$ " + valorFinal.toFixed(2)
    );

});


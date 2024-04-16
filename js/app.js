let totalGeral = 0;
limpar();

// Adicionar o produto ao carrinho, separando o produto do valor
// Adicionar e somar o subtotal do produto, e o valor total do carrinho
function adicionar() {
    // Recuperar a quantidade de produtos, o produto e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // Calcular o preço
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    // Adicionar ao carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    // Adicionando valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
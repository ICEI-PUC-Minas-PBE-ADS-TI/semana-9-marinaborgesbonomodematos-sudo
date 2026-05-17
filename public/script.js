//Estrutura JSON
const data = {
    produtos: [
    {
        id:1,
        nome: "CARANGO",
        preco: 16.44,
        categoria: "savana",
        imagem:'../imagens/carango.jpg',
        descricao: "De qualidade selvagem, seu sabor é surpreendente para todos que experimentam, prova e diz aí. ",
        emEstoque:true
    },
     {
         id:2,
        nome: "PIRICATE",
        preco: 24.99,
        categoria: "passaro",
        imagem: '../imagens/piricate.jpg',
        descricao: "Ótimo para sua voz e saúde, com uma adubação natural, o sabor ressalta o timbre de todas as vozes existentes. Compre e repita.",
        emEstoque:true
    },
    {
         id:3,
        nome: "NEMORANGE",
        preco: 30.89,
        categoria: "aquatico",
        imagem: '../imagens/nemorange_.jpg',
        descricao: "Um suco natural com uma lembrança do mar, só tome cuidado com a qunatidade, pode causar ataques de riso.",
        emEstoque:true
    },
    {
         id:4,
        nome: "FONANA",
        preco: 50.22,
        categoria: "aquatico",
        imagem: '../imagens/fonana.jpg',
        descricao: "Podendo chegar até a 1T por penca, a fonana é uma grande fonte de cálcio, com uma doçura sem igual.",
        emEstoque:true
    },
    {
         id:5,
        nome: "LIMONÃO",
        preco: 10.88,
        categoria: "aquatico",
        imagem: '../imagens/limonão.jpg',
        descricao: "Azedo e assustador, o siciliano perfeito para acompanhamento de peixes... se é que você me entende.",
        emEstoque:true
    },
    {
         id:6,
        nome: "TARTARAYA",
        preco: 31.67,
        categoria: "aquatico",
        imagem: '../imagens/tartaraya.jpg',
        descricao: "Lenta e leve, um lanchinho relaxante para qualquer momento do seu dia",
        emEstoque:false
    },
    {
         id:7,
        nome: "LEÃOSSEGO",
        preco: 19.10,
        categoria: "savana",
        imagem: '../imagens/leaossego.jpg',
        descricao: "Macio e fofinho, gostosinho e cheirosinho.",
        emEstoque:true
    },
    {
         id:8,
        nome: "MOCOCO",
        preco: 24.30,
        categoria: "savana",
        imagem: '../imagens/mococo.jpg',
        descricao: "UH-UH AH-AH",
        emEstoque:true
    },
    {
         id:9,
        nome: "KIWI",
        preco: 9.99,
        categoria: "passaro",
        imagem: '../imagens/kiwi.jpg',
        descricao: "O azedinho mais fofinho que você pode encontrar, ótimo para cafés da manã e lanches da tarde.",
        emEstoque:false
    },
    {
         id:10,
        nome: "LICANO",
        preco: 95.00,
        categoria: "passaro",
        imagem: '../imagens/licano.jpg',
        descricao: "Um limão causalmente exótico e de difícil captura, seu bico exala um xeirinho de mousse dos Deuses",
        emEstoque:true
    },
    {
         id:11,
        nome: "PAPRIKA",
        preco: 14.66,
        categoria: "legumi",
        imagem: '../imagens/Paprika.jpg',
        descricao: "Primeiro lançamento da nossa linha de temperos, a paprika tem um forte poder de temperamento com atuação só com sua presença.",
        emEstoque:true
    },
    {
         id:12,
        nome: "Grorijela",
        preco: 12.99,
        categoria: "savana",
        imagem: '../imagens/gorijela.jpg',
        descricao: "Leguminosa mais primitiva que você conhece. Dizem até que é encontrada apenas nos galhos mais altos, das árvores mais altas. ",
        emEstoque:true
    },
    {
         id:13,
        nome: "ROMICO",
        preco: 12.99,
        categoria: "savana",
        imagem: '../imagens/romico.jpg',
        descricao: "Com uma tonalidade surpreendente, essa espécie de romã pode chegar a custar milhares de dólares, mas por dua produção expecífica na Amazônia não sofremos com essa inflação, uhhuulllll. ",
        emEstoque:true
    },
    {
        id:14,
        nome: "MANGRITO",
        preco: 12.80,
        categoria: "passaro",
        imagem:'../imagens/mangrito.jpg',
        descricao: "Uma manga totamente livre de fiapos. Perfeita para quem está fungindo de dentes entupidos dessa estressante parte de aproveitar uma manguinha. Só cuidado com as penas, rs",
        emEstoque:true
    }
 ]
}


// DOM
const productList = document.getElementById("product-list")
const productDetails = document.getElementById("product-details")

const searchInput = document.querySelector("#search")
const categorySelect = document.querySelector("#category")

const btnRender = document.querySelector("#btnRender")
// formatação do preço
function formatPrice(preco){
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}

//criação od cards
function createProductCard(produto){

                       // createElement
    const card = document.createElement("div");
      // classList.add
    card.classList.add("card");
      // setAttribute
    card.setAttribute("data-id", produto.id)
      // style
    card.style.padding = "15px"

    const imagem = document.createElement("img");
    imagem.setAttribute("src", produto.imagem);
    imagem.classList.add("imagem-produto");


    const titulo = document.createElement("h2");
    // innerHTML
    titulo.innerHTML = produto.nome;


    const preco = document.createElement("p");
    // innerHTML
    preco.innerHTML = formatPrice(produto.preco);


    const categoria = document.createElement("span");
    categoria.innerHTML = produto.categoria;
    categoria.classList.add("categoria");

        const detalhesBtn = document.createElement("button");
        detalhesBtn.innerHTML = "ver detalhes";
        detalhesBtn.classList.add("botao");

        const descricaoEl = document.createElement("p");
        descricaoEl.classList.add("descricao-card");
        descricaoEl.innerText = produto.descricao;
        descricaoEl.style.display = "none";

        detalhesBtn.addEventListener("click", () => {
            const isHidden = descricaoEl.style.display === "none";
            descricaoEl.style.display = isHidden ? "block" : "none";
            detalhesBtn.innerText = isHidden ? "esconder detalhes" : "ver detalhes";
        })

    const destaqueBtn = document.createElement("button");
    destaqueBtn.innerHTML = "Destacar";
    destaqueBtn.classList.add("botao");
    destaqueBtn.addEventListener("click", () => {
        card.classList.toggle("highlight")
        card.style.backgroundColor = "green"

    })


    const comprarBtn = document.createElement("button");

    comprarBtn.innerHTML = "Comprar";

    comprarBtn.classList.add("botao");

    comprarBtn.addEventListener("click", () => {

        showNotification(`${produto.nome} foi adicionado ao carrinho 🛒`)
    })


    // appendChild

    card.appendChild(imagem)

    card.appendChild(titulo)

    card.appendChild(preco)

    card.appendChild(detalhesBtn)

    card.appendChild(comprarBtn)

    card.appendChild(destaqueBtn)

    card.appendChild(descricaoEl)

    return card


    };

//redenização de produtos

function renderProducts(produtos){
    productList.innerHTML = ""
    produtos.forEach(produto => {
        const card = createProductCard(produto)
        productList.appendChild(card)

    })


    const todosCards = document.querySelectorAll(".card")
    todosCards.forEach(card => {
        console.log(card.dataset.id)
    })

}


// CATEGORIAS
function renderCategories(){

    const categorias = data.produtos.map(produto => produto.categoria)

    const categoriasUnicas = [...new Set(categorias)]
    categoriasUnicas.forEach(categoria => {
        const option = document.createElement("option")
        option.value = categoria
        option.innerHTML = categoria
        categorySelect.appendChild(option)

    })

}


// DETALHES
function showProductDetails(produto){

    const estoque = produto.emEstoque
        ? "Em estoque"
        : "Fora de estoque"

    productDetails.innerHTML = `

        <h2>${produto.nome}</h2>

        <img src="${produto.imagem}" width="200">

        <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>

        <p><strong>Categoria:</strong> ${produto.categoria}</p>

        <p><strong>Status:</strong> ${estoque}</p>

        <p>${produto.descricao}</p>

    `

}


// FILTRO

function filterProducts(){

    const textoBusca = searchInput.value.toLowerCase()

    const categoriaSelecionada = categorySelect.value

    const produtosFiltrados = data.produtos.filter(produto => {

        const nomeCorreto =
            produto.nome.toLowerCase().includes(textoBusca)

        const categoriaCorreta =
            categoriaSelecionada === "Todas"
            || produto.categoria === categoriaSelecionada

        return nomeCorreto && categoriaCorreta

    })

    renderProducts(produtosFiltrados)

}


// EVENTOS
searchInput.addEventListener("input", filterProducts)
categorySelect.addEventListener("change", filterProducts)
btnRender.addEventListener("click", () => {
    renderProducts(data.produtos)
})


// INICIAR

renderCategories()
renderProducts(data.produtos)

function showNotification(message){
    const notification = document.getElementById("notification")
    if (!notification) return

    notification.innerText = message
    notification.classList.add("visible")
    setTimeout(() => {
        notification.classList.remove("visible")
    }, 2800)
}

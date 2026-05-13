window.onload = function(){
    const intro=document.getElementById("inicio");

    setTimeout(()=>{
        intro.classList.add("efeito-out")
        setTimeout(()=>{
            intro.style.display="none";
            content.classList.remove("hidden");
            content.classList.add("efeito-in");
        },1000)
    },3000)

}


function trocar(cor){
    document.body.style.background=cor;
}
const produtos =[
    {nome:"Teclado Gamer",preco:200,emPromocao:true},
    {nome:"Mouse Gamer",preco:150,emPromocao:false},
    {nome:"Monitor",preco:1300,emPromocao:true},
    {nome:"Pad Mouse",preco:50,emPromocao:false},
];
console.log(produtos)
function produtosCard(lista){
     mostrarTotal.innerText="";
    const htmlProdutos= lista.map(item => `
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço R$ ${item.preco}</p>
            ${item.emPromocao ? '<span>Promoção</span>': ''}
        </div>
        `).join('');

        container.innerHTML=htmlProdutos;
}

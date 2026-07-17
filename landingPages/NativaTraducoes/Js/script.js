
// FORMULÁRIO
function enviarForm() {
     const nome = document.getElementById("nome").value;
     const telefoneUsu = document.querySelector("input[type='number']").value;
     const servico = document.getElementById("servico").value;

     const numeroDestino = "9999999999"; // coloque seu número aqui 

     const texto =
          "Novo orçamento:%0A" +
          "Nome: " + nome + "%0A" +
          "Telefone: " + telefoneUsu + "%0A" +
          "Serviço: " + servico + "%0A";

     const url = `https://wa.me/${numeroDestino}?text=${texto}`;
     window.open(url, "_blank");
}
const btnIdiomas = document.querySelectorAll(".containerIdiomas")
console.log(btnIdiomas)

document.addEventListener('DOMContentLoaded', () => {

     // imagens do carrossel
     const flags = [
          { img: 'img/united-states.png' },
          { img: 'img/turkey.png' },
          { img: 'img/singapore.png' },
          { img: 'img/poland.png' },
          { img: 'img/brazil-.png' },
          { img: 'img/spain.png' },
          { img: 'img/japan.png' },
          { img: "img/korea.png" },
          { img: 'img/saudi-arabia.png' },
          { img: 'img/france.png' },
          { img: 'img/germany.png' },
          { img: 'img/russia.png' },
          { img: 'img/norway.png' }


     ];
     // CARROSSEL

     const carrosseis = document.querySelectorAll('.carrossel');

     carrosseis.forEach(carrossel => {
          flags.forEach(bandeira => {
               const imgFlag = document.createElement('img');
               imgFlag.src = bandeira.img;
               imgFlag.alt = 'Bandeira';
               carrossel.appendChild(imgFlag);
          });

     })

     const cardContent = [
          //primeiro card
          { img: 'img/traduçãoJuramentada.jpg', titulo: "Tradução      <span>Juramentada</span>", texto: "Tradução oficial aceita por órgãos públicos, cartórios e instituições de ensino. Válida em todo território nacional", l1: "Validade oficial", l2: "Aceita por órgãos públicos", l3: "Entrega digital" },
          //segundo card
          { img: 'img/traduçãoTecnica.jpg', titulo: "Tradução <span>Técnica </span>", texto: "Tradução especializada para documentos técnicos, manuais, especificações e textos científicos.", l1: "Terminologia especializada", l2: "Profissionais qualificados", l3: "Precisão técnica" },
          //terçeiro card
          { img: 'img/traduçãoSimples.jpg', titulo: "  Tradução <span>Simples</span>", texto: "Tradução para documentos gerais, textos comerciais, correspondências e materiais informativos.", l1: "Processo ágil", l2: "Preço acessível", l3: "Qualidade garantida" },
          // quarto card 
          { img: 'img/traduçãodeHaia.jpg', titulo: "Apostila de <span> Haia  </span>", texto: "Legalização internacional de documentos para uso em países signatários da Convenção de Haia.", l1: "Validade internacional", l2: "Processo simplificado", l3: "Reconhecimento mundial" }


     ];
     //SERVIÇOS//
     const cards = document.querySelector(".containerCards")

     cardContent.forEach(serviços => {
          const container = document.createElement('div')
          container.classList.add('card')

          container.innerHTML = `
     <img src=${serviços.img}>
     <h3>${serviços.titulo}</h3>
     <p>${serviços.texto}</p>
     <ul>
     <li>${serviços.l1}</li>
     <li>${serviços.l2}</li>
     <li>${serviços.l3}</li>
     </ul>
     <button>SOLICITAR!</button>

     `



          cards.appendChild(container)



     })
     // COMO FUNCIONA

     const fasesContent = [
          //etapa 1
          { img: "css/img/fase1.png", titulo: "Solicite Orçamento", texto: "Preencha o formulário online com suas informações e anexe seus documentos" },
          //etapa 2
          { img: "css/img/fase2.png", titulo: "Envie Documentos", texto: "Faça upload dos seus documentos de forma segura através da nossa plataforma" },
          //etapa 3
          { img: "css/img/fase3.png", titulo: "Acompanhe o Progresso", texto: "Receba atualizações em tempo real sobre o andamento da sua tradução" },
          //etapa 4
          { img: "css/img/fase4.png", titulo: "Receba Digitalmente", texto: "Baixe sua tradução diretamente do seu email, de forma rápida e segura" }
     ]

     // IDIOMAS

     const ListaIdiomas = [
          { img: 'img/united-states.png', nome: 'Tradução  em inglês' },
          { img: 'img/spain.png', nome: 'Tradução  em Espanhol' },
          { img: 'img/italy.png', nome: 'Tradução  em Italiano' },
          { img: 'img/france.png', nome: 'Tradução  em Francês' },
     ]

     const containerIdiomas = document.querySelector('.containerIdiomas')


     ListaIdiomas.forEach(idiomas => {
          const listaIdiomas = document.createElement('div')
          listaIdiomas.classList.add('idiomas')

          listaIdiomas.innerHTML = `
      <img src=${idiomas.img}>
      <h3>${idiomas.nome}</h3>
     `
          containerIdiomas.appendChild(listaIdiomas)

          listaIdiomas.addEventListener('click', () => {
               enviarForm(idiomas.nome)


          })




     })



})









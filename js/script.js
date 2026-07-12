const projects = [
    {category:'landing page',name:'fonacria-2026',img:"img/bannerFonacriad.png",description:"landing page para o evento nacional cediado no para pela fasepa",link:"https://fasepa.pa.gov.br/ii-reuniao-tecnica-fonacriad/",
     tech: [
    { nome: "HTML", cor: "#E34F26" },
    { nome: "CSS3", cor: "#A36AFF" },
    { nome: "JavaScript", cor: "#F7DF1E" }
]
  },
    {category:'landing page',name:'miraterapeutica',img:"img/capaMiraTerapeutica.png",description:"",link:"https://superandoatraicao.com.br/",
    tech: [
    { nome: "HTML", cor: "#E34F26" },
    { nome: "CSS3", cor: "#A36AFF" },
    { nome: "JavaScript", cor: "#F7DF1E" }
]
  },
    {category:'chat bot',name:'Barber Curse',img:"img/capa.png",description:"",link:"",
     tech: [
    { nome: "HTML", cor: "#E34F26" },
    { nome: "CSS3", cor: "#A36AFF" },
    { nome: "JavaScript", cor: "#F7DF1E" }
]
  
  }

]
const containerprojects = document.querySelector('.containerProjects')
projects.forEach(pj=>{
    const cardProject = document.createElement('div')
    cardProject.classList.add('card-project')

    cardProject.innerHTML=`
     <div class="banner">
          <div class="category">
            <p>${pj.category}</p>
          </div>
          <img src="${pj.img}" alt="">
        </div>
        <div class="descriptionProj">
        <div class="top"></div>
        <div class="margin">
          <div class="text">
            <h3>${pj.name}</h3>
            <p>${pj.description}</p>
            <a href ="${pj.link}">
            <button>ver</button>
            </a>
          </div>
          <div class="tecnologies">
           ${pj.tech.map(tech => `
    <div class="tech" style="background:${tech.cor}">
        ${tech.nome}
    </div>
`).join('')}
          </div>
          </div>
        </div>
    `
    containerprojects.appendChild(cardProject);

});
const btnVerMais = document.querySelector('.vejaMais-btn');
const secaoSobre = document.getElementById('aboutMe');

btnVerMais.addEventListener('click',()=>{
  secaoSobre.scrollIntoView({
    behavior:'smooth',
    block:'start'
  });
});

const btnVoltar = document.querySelector('.voltar');
const heroSection = document.getElementById('heroSection')

btnVoltar.addEventListener('click',()=>{
  secaoSobre.scrollIntoView({
    behavior:'smooth',
    block:'start'
  });
});



const banners = containerprojects.querySelectorAll('.banner');
banners.forEach((banner) => {
    banner.addEventListener('click', () => {

        const cardAtual = banner.closest('.card-project');
        const descriptionAtual = cardAtual.querySelector('.descriptionProj');
        const textAtual = cardAtual.querySelector('.margin');

        const estavaAberto = descriptionAtual.classList.contains('open');

        // Fecha todos os cards
        document.querySelectorAll('.card-project').forEach((card) => {
            card.querySelector('.descriptionProj').classList.remove('open');
            card.querySelector('.descriptionProj').style.height = '25vh';
            card.querySelector('.margin').style.display = 'none';
            card.style.gridRow = 'span 1';
        });

        // Se o card clicado estava fechado, abre ele
        if (!estavaAberto) {
            descriptionAtual.classList.add('open');
            descriptionAtual.style.height = 'max-content';
            textAtual.style.display = 'grid';
            cardAtual.style.gridRow = 'span 2';
        }

    });
});
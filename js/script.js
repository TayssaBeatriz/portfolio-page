const projects = [
    {category:'landing page',name:'fonacria-2026',img:"img/bannerFonacriad.png",description:"Landing page institucional criada para divulgar o evento nacional do FONACRIAD. O projeto foi desenvolvido com foco em responsividade, acessibilidade e uma navegação intuitiva, apresentando informações do evento de forma organizada e atrativa.",link:"https://fasepa.pa.gov.br/ii-reuniao-tecnica-fonacriad/",
     tech: [
    { nome: "WordPress", cor: "blue" },
   
    
]
  },
    {category:'landing page',name:'miraterapeutica',img:"img/capaMiraTerapeutica.png",description:"Landing page criada para promover um curso online, oferecendo uma apresentação clara do conteúdo, benefícios e chamada para ação. Desenvolvida com foco em responsividade, desempenho e experiência do usuário.<br>Design de :Romulo Nazareno Correa de Carvalho",link:"https://superandoatraicao.com.br/",
    tech: [
    { nome: "HTML", cor: "#E34F26" },
    { nome: "CSS3", cor: "#A36AFF" },
    { nome: "JavaScript", cor: "#F7DF1E" }
]
  },
    {category:'Landing Page',name:'Barber Curse',img:"img/capa.png",description:"Landing page desenvolvida para divulgação de um curso online, com foco na conversão de visitantes em alunos. O projeto apresenta informações sobre o conteúdo, benefícios, depoimentos e chamada para inscrição, utilizando um design responsivo e navegação intuitiva.",link:"https://tayssabeatriz.github.io/portfolio-page/landingPages/barberCursewebsite/",
     tech: [
    { nome: "HTML", cor: "#E34F26" },
    { nome: "CSS3", cor: "#A36AFF" },
    { nome: "JavaScript", cor: "#F7DF1E" }
]
  
  },
   {category:'Landing Page',name:'Nativa traduções',img:"landingPages/NativaTraducoes/img/capa.png",description:"",link:"https://tayssabeatriz.github.io/portfolio-page/landingPages/NativaTraducoes/",
     tech: [
    { nome: "HTML", cor: "#E34F26" },
    { nome: "CSS3", cor: "#A36AFF" },
    { nome: "JavaScript", cor: "#F7DF1E" }
]
  
  },
  {category:'Landing Page',name:'Covite de casamento',img:"landingPages/convite/img/poster_capa.jpg",description:"Clone da página(https://finca-demo.thedigitalyes.com/)feito originalemente por:The Digital Yes.Este projeto foi desenvolvido com o objetivo de praticar HTML, CSS e JavaScript, reproduzindo o layout e algumas interações da página. Todos os direitos sobre o design e a identidade visual pertencem à empresa original.",link:"https://tayssabeatriz.github.io/portfolio-page/landingPages/convite/",
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

        const card = banner.closest('.card-project');
        const description = card.querySelector('.descriptionProj');
        const text = card.querySelector('.margin');

        const cardAberto = card.classList.contains('open');

        // Fecha todos os cards
        document.querySelectorAll('.card-project').forEach((c) => {
            c.classList.remove('open');

            const desc = c.querySelector('.descriptionProj');
            const margin = c.querySelector('.margin');

            desc.style.height = "0px";
            margin.style.display = "none";

            c.style.gridRow = "span 1";
        });

        // Se o card clicado estava fechado, abre ele
        if (!cardAberto) {
            card.classList.add('open');
            text.style.display = "grid";

            description.style.height = description.scrollHeight + "px";

            card.style.gridRow = "span 2";
        }

    });
});
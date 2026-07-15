window.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";

  // ===== CONTROLE ENVELOPE =====
  const btnAbrir = document.getElementById("btn-abrir");
  const videoInicial = document.getElementById("videoInicial");
  const envelope = document.getElementById("envelope");
  const site = document.getElementById("convite");
  const audio = document.getElementById("meuAudio");

  if (btnAbrir && videoInicial && envelope && site && audio) {

    btnAbrir.addEventListener("click", function () {

      btnAbrir.style.display = "none";

      videoInicial.play().catch(err => console.log(err));

      videoInicial.addEventListener("ended", function () {

        envelope.style.display = "none";
        site.classList.remove("hidden");
        site.classList.add("show");
        animarIntroducao();

        setTimeout(() => {
          ScrollTrigger.refresh(true);
        }, 500);

        audio.play().catch(err => console.log(err));

      });

    });

  }
// data e hora do evento 
  const dataEvento = new Date('2027-05-07T19:00:00')
  function attContador() {
    const data = new Date()
    const diferenca = dataEvento - data

    if (diferenca <= 0) {
      document.getElementById('Dias').textContent = '00 <br> dias'
      document.getElementById('horas').textContent = '00'
      document.getElementById('min').textContent = '00'
      document.getElementById('seg').textContent = '00'
      return
    }

    const calculoDias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const calculoHoras = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const calculoMin = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const calculoSeg = Math.floor((diferenca % (1000 * 60)) / 1000)

    document.getElementById('Dias').textContent = calculoDias.toString().padStart(2, '0');
    document.getElementById('horas').textContent = calculoHoras.toString().padStart(2, '0');
    document.getElementById('min').textContent = calculoMin.toString().padStart(2, '0');
    document.getElementById('seg').textContent = calculoSeg.toString().padStart(2, '0');


  }

  attContador()

  setInterval(attContador, 1000)
  // BOTÃO: GUARDAR DATA NO CALENDÁRIO
  const btnCalendario = document.getElementById("addAoCalendario");
  if (btnCalendario) {
    btnCalendario.addEventListener("click", () => {
      const titulo = "Casamento";
      const descricao = "Nosso grande dia!";
      const local = "Mallorca, Espanha";

      function formatarDataGoogle(data) {
        const ano = data.getUTCFullYear();
        const mes = String(data.getUTCMonth() + 1).padStart(2, "0");
        const dia = String(data.getUTCDate()).padStart(2, "0");
        const horas = String(data.getUTCHours()).padStart(2, "0");
        const minutos = String(data.getUTCMinutes()).padStart(2, "0");
        const segundos = "00";

        return `${ano}${mes}${dia}T${horas}${minutos}${segundos}Z`;
      }

      const inicio = formatarDataGoogle(dataEvento);

      // evento com 5 horas de duração (pode alterar)
      const dataFim = new Date(dataEvento.getTime() + (5 * 60 * 60 * 1000));
      const fim = formatarDataGoogle(dataFim);
    // link para adidiconar a data ao calendário
      const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&details=${encodeURIComponent(descricao)}&location=${encodeURIComponent(local)}&dates=${inicio}/${fim}`;

      window.open(url, "_blank");
    });

  }
  // para modificar o link do mapa para finca biniagual, modifique abaixo no link após o open
  const btnMaps = document.getElementById("abrirNoMaps"); btnMaps.addEventListener('click', () => { 
    window.open('https://maps.app.goo.gl/CP8cf6WoAxE2A5hZ8', "_blank"); 
  })


 // caso queira modificar os itens: programação, modifique abaixo
  //caso queira adicionar outro item: copie todo o conteudo de um dos que estão entre as chaves, encluindo as chaves e cole logo abaixo 
  // obs:sempre adicione uma virvula a penultima chave
  // nameIcon:nome dos icones. Icones do lucide.dev 
  const Dadosprogramacao = [
    { nameIcon: 'heart', hora: '17:00', titulo: 'Chegada dos hóspedes', descricao: 'Recepção e boas-vindas na propriedade' },

    { nameIcon: 'wine', hora: '17:30', titulo: 'Bebida de boas-vindas', descricao: 'Coquetel de boas-vindas enquanto aguardamos' },

    { nameIcon: 'church', hora: '18:00', titulo: 'Cerimônia', descricao: 'O momento mais especial do dia' },

    { nameIcon: 'wine', hora: '19:00', titulo: 'Coquetel', descricao: 'Aperitivos e bebidas no jardim' },

    { nameIcon: 'utensils-crossed', hora: '21:00', titulo: 'Banquete', descricao: 'Jantar e comemoração' },

    { nameIcon: 'music', hora: '00:00', titulo: 'Festa', descricao: 'Dance até o amanhecer!' },

    { nameIcon: 'party-popper', hora: '03:00', titulo: 'Fim da festa', descricao: 'Despedidas e boas lembranças' }

  ]

  const containerProgramacao = document.querySelector('.programacao-itens')


  Dadosprogramacao.forEach(itens => {
    const programacao = document.createElement('div')
    programacao.classList.add('item')

// estrutura dos itens de programação do evento
    programacao.innerHTML = `
<div class="Hora-icon">
<div><span class="hora">${itens.hora}</span></div>
<div class="icons-programa"><i data-lucide="${itens.nameIcon}"></i></div>
</div>
<div class="container-txt-programacao">
<div class="titulo-item">

<h3>${itens.titulo}</h3>
</div>
<p>${itens.descricao}</p>
</div>

`
    lucide.createIcons()
    containerProgramacao.appendChild(programacao)
  })
  // ALOJAMENTO//
  const containerAlojamentos = document.querySelector('.container-alojamento')

  const dadosAlojamentos = [
  // caso queira modificar o nome ou titulo dos cards :alojamento, modifique abaixo
  //caso queira adicionar outro card: copie todo o conteudo de um dos que estão entre as chaves, encluindo as chaves e cole logo abaixo 
  // obs:sempre adicione uma virvula a penultima chave
    { nome: 'Agroturismo Es Quatre Cantons', descricao: 'Mais perto do casamento', link: 'https://maps.app.goo.gl/jDLoVKp3mtGAKTni8' },

    { nome: 'La Pérgola', descricao: 'Alojamento recomendado', link: 'https://maps.app.goo.gl/4nyHNHQr65ZHvZ3r9'}
    // exemplo
    //  { nome: 'La Pérgola', descricao: 'Alojamento recomendado', link: 'https://maps.app.goo.gl/4nyHNHQr65ZHvZ3r9' }

  ]

  dadosAlojamentos.forEach(itensAlojamento => {
    const alojamento = document.createElement('div')
    alojamento.classList.add('alojamento-item')
    alojamento.classList.add('motion')
// estrutura do card alojamento
    alojamento.innerHTML = `
<h3>${itensAlojamento.nome}</h3>
<p>${itensAlojamento.descricao}</p>
<a href="${itensAlojamento.link}" target="_blank" rel="noopener noreferrer">
  <button>
    <i data-lucide="square-arrow-out-up-right"></i> 
    Ver detalhes
  </button>
</a>
`

    containerAlojamentos.appendChild(alojamento)

  })
  lucide.createIcons()

  // ao clicar no card "contribuições"
  const pergunta = document.querySelectorAll('.pergunta')
  const resposta = document.querySelectorAll('.resposta')

  pergunta.forEach((pergunta) => {
    pergunta.addEventListener('click', () => {
      const cardAtual = pergunta.closest('.card-pergunta');
      const arrow = pergunta.querySelector('.arrow-card');

      document.querySelectorAll('.card-pergunta').forEach((card) => {
        if (card !== cardAtual) {
          card.classList.remove('open');

          // resetar seta dos outros cards
          const otherArrow = card.querySelector('.arrow-card');
          if (otherArrow) otherArrow.classList.remove('ativo');
        }
      });

      cardAtual.classList.toggle('open');
      if (arrow) arrow.classList.toggle("ativo");
    });
  });

// botão de audio
  const botao = document.getElementById("btnAudio");
  if (botao) {
    botao.addEventListener("click", () => {
      // para dar play
      if (audio.paused) {
        audio.play();
        botao.innerHTML = `
      <i data-lucide="volume-1"></i> 
    `;
      } else {
        // para pausar
        audio.pause();
        botao.innerHTML = `
      <i data-lucide="volume-x"></i>  
    `;
      }
      lucide.createIcons()
    });

  }
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    ignoreMobileResize: true
  });



  //animar página
  function animarSecao(seletor, efeito = "fade-up", atrasoBase = 0.2) {
    const elementos = gsap.utils.toArray(seletor + ' .motion');

    elementos.forEach((el, i) => {
      let config = {
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        delay: i * atrasoBase
      };
      if (efeito === "fade-up") config.y = 50;
      if (efeito === "slide-left") config.x = -100;
      if (efeito === "slide-right") config.x = 100;
      if (efeito === "zoom-in") config.scale = 0.8;

      gsap.from(el, config);
    });
  }

  // ==== ANIMAÇÃO POR SEÇÃO ====
  function animarIntroducao() {
    const elementos = gsap.utils.toArray("#introducao .motion");

    gsap.from(elementos, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2
    });
  }

  animarSecao("#contagem-dias", "zoom-in", 0.15);
  animarSecao("#localizacao", "fade-up", 0.15);
  gsap.from("#programacao .item", {
    x: -100,          
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,       
    scrollTrigger: {
      trigger: "#programacao",
      start: "top center",
      toggleActions: "play none none none"
    }
  });
  animarSecao("#alojamento", "zoom-in", 0.15);
  animarSecao("#perguntas", "fade-up", 0.15);
  animarSecao("#presentes", "fade-up", 0.15);
  animarSecao("#comfirmar-presenca", "fade-up", 0.15);

})



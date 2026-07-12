


document.addEventListener('DOMContentLoaded', () => {
  const comentarios = [
    { nome: "Luan Victor", relato: "“Curso excelente! Aprendi do zero e hoje já consigo atender clientes com confiança. A didática é muito clara e prática.”", img: "img/userPic-1.jpg" },

    { nome: "Luan Victor", relato: "“Superou minhas expectativas. O instrutor explica muito bem e passa várias dicas que realmente fazem diferença no dia a dia da barbearia.”", img: "img/userPic-2.jpg" },
    { nome: "Lucas Silva", relato: "“Conteúdo completo, desde o básico até técnicas mais avançadas. Vale muito a pena para quem quer entrar na área ou se aperfeiçoar.”", img: "img/userPic-3.jpg" },
    { nome: "waldir de Oliveira", relato: "“Curso muito bem organizado e direto ao ponto. Aprendi cortes modernos, acabamento perfeito e atendimento ao cliente.”", img: "img/userPic-4.jpg" },
    { nome: "Paulo carneiro", relato: "Ótimo custo-benefício. As aulas práticas ajudam demais e dão segurança para começar a trabalhar logo após o curso!", img: "img/userPic-5.jpg" },
    { nome: "Sandro roberto", relato: "Recomendo demais! Além da parte técnica, o curso ensina sobre postura profissional e como fidelizar clientes.", img: "img/usePic-6.jpg" },

  ]
  const commentsGrid = document.querySelector('.carrosselComments')

  comentarios.forEach(comment => {

    const commentsCard = document.createElement('div')
    commentsCard.classList.add('cardComment')


    commentsCard.innerHTML = `
     <div class="containerStar">
        <span>&#10029;</span>
        <span>&#10029;</span>
        <span>&#10029;</span>
        <span>&#10029;</span>
        <span>&#10029;</span>

        </div>
        <p>"${comment.relato}"</p>
        <div class="containerUser">
        <img src=${comment.img} alt="">
        <div class="containerNome">
        <h4>${comment.nome}</h4>
        <p>concluiu o SUAT</p>
        </div>
        </div>
    
    `
    commentsGrid.appendChild(commentsCard)


  });

let containerFaq = document.querySelector('.containerFaq');
function mostrarResposta(answerFaq, questFaq, textAnswer) {
  // alterna entre mostrar e esconder

  const isVisible = textAnswer.style.display === 'grid';
  answerFaq.classList.toggle('open')
  textAnswer.style.display = isVisible ? 'none' : 'grid';
  questFaq.style.backgroundColor = isVisible ? '#2e2e38' : '#faca2eb3';

  answerFaq.style.height = isVisible ? '60px' : '120px'
  answerFaq.style.transition = 'height 0.4s ease'

}
  
// Perguntas e respostas do FAQ
const TextFaq = [
  { pergunta: 'O que eu vou receber?', resposta: 'Você receberá acesso completo ao curso e todos os materiais.' },
  { pergunta: 'Por quanto tempo posso acessar o curso?', resposta: 'O acesso é vitalício, sem prazo de expiração.' },
  { pergunta: 'Dá para parcelar no boleto?', resposta: 'Sim, você pode parcelar usando boleto ou cartão.' },
  { pergunta: 'Como eu recebo o certificado?', resposta: 'Após concluir o curso, o certificado é enviado por e-mail.' }
];

// Cria os elementos dinamicamente
TextFaq.forEach(item => {
  const answerFaq = document.createElement('div');
  answerFaq.classList.add('answerFaq');

  const questFaq = document.createElement('div');
  questFaq.classList.add('questFaq');
  questFaq.innerHTML = `<p>${item.pergunta}</p>`;

  const textAnswer = document.createElement('div');
  textAnswer.classList.add('text');
  textAnswer.style.display = 'none';
  textAnswer.innerHTML = `<p>${item.resposta}</p>`;

  // Eventos
  questFaq.onmouseover = () => aoPassaroMouse(questFaq);
  questFaq.onmouseout = () => aoRetirarOmouse(questFaq);
  questFaq.onclick = () => mostrarResposta(answerFaq, questFaq, textAnswer);


  // Monta estrutura
  answerFaq.appendChild(questFaq);
  answerFaq.appendChild(textAnswer);
  containerFaq.appendChild(answerFaq);
});




})




document.addEventListener('DOMContentLoaded', () => {
    const comentarios = [
        { nome: "Maria Silva", relato: "Este curso mudou minha vida. Eu estava perdida, sem esperança, e as 4 semanas me deram as ferramentas que eu precisava para me reconstituir. Hoje sou uma muoher mais forte e confiante.", img: "../img/commentPic.jpg" },
        { nome: "Ana Paula Santos", relato: "Pensei que nunca conseguiria superar a dor, mas esse curso me mostrou que é possível renascer.Os exercícios terapêuticos foram essenciais no meu processo de cura.", img:"../img/commentPic2.jpg" },
        { nome: "Juliana Oliveira", relato: "Finalmente consegui tomar uma decisão consciente sobre meu realcionamento. Não foi baseada na dor, mas no meu valor. Isso não tem preço.", img:"../img/commentPic3.jpg" },
        { nome: "Fernanda Costa", relato: "Aprendi a me valorizar novamente e a estabelecer limites saudáves. Recuperar minha voz e meu poder. Nunca mais vou aceitar migalhas de ninguém", img:"../img/commentPic4.jpg" },
        { nome: "Carla Mendes", relato: "A semanas 2 foi transformadora pra mim. Consegui me ver com lucide e amor próprio pela primeira vez em muito tempo. Gratidão eterna!", img:"../img/commentPic5.jpg" },
        { nome: "Patrícia Rodrigues", relato: "Investimento que valeu cada centavo. Não são frases prontas, é tratamento de verdade. Consegui entender minha dor e , finalmente, seguir em frente.", img:"../img/commentPic6.jpg" },

    ]
    const commentsGrid = document.querySelector('.carrossel')

    comentarios.forEach(comment => {

        const commentsCard = document.createElement('div')
        commentsCard.classList.add('Card_comentario')

        commentsCard.innerHTML = `
     <div class="containerStar">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>

        </div>
        <p>"${comment.relato}"</p>
        <div class="containerUser">
        <img src=${comment.img} alt="">
        <div class="containerNome">
        <h5>${comment.nome}</h5>
        <p>concluiu o SUAT</p>
        </div>
        </div>
    
    `
        commentsGrid.appendChild(commentsCard)


    });



})



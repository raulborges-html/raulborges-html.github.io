document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('loveButton');
    const contentArea = document.getElementById('contentArea');
    const backgroundMusic = document.getElementById('background-music');

    // Tente tocar a música automaticamente.
    // Navegadores modernos podem bloquear autoplay sem interação do usuário.
    // Se for bloqueado, ela tocará na primeira interação (clique no botão).
    backgroundMusic.play().catch(error => {
        console.log("Música não pôde ser tocada automaticamente:", error);
    });

    loveButton.addEventListener('click', () => {
        // Se a música não tocou automaticamente, tenta tocar no clique do botão
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                console.log("Erro ao tocar música no clique:", error);
            });
        }

        const specialMessage = `
            Meu amor, neste Dia dos Namorados,
            quero te lembrar o quanto você é especial para mim.
            Seu sorriso ilumina meus dias, seu abraço é meu porto seguro,
            e seu amor é a maior melodia da minha vida.
            Cada dia ao seu lado é uma nova aventura, uma nova alegria.
            Sou grato(a) por ter você.
            Que nosso amor continue crescendo e florescendo.
            Eu te amo mais do que as palavras podem expressar!
            Feliz Dia dos Namorados! ❤️❤️❤️
        `;

        contentArea.innerHTML = `<p class="sweet-text fade-in">${specialMessage}</p>`;
        loveButton.style.display = 'none'; // Esconde o botão após o clique
    });
});
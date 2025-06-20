let qtd = 0;

const mensagens = [
    "Nem que eu vivesse mil anos conseguiria colocar em palavras a sensação que é ter alguém como você na vida.",
    "Você é luz e graça por onde passa. Sua beleza encanta e ilumina qualquer ambiente.",
    "Seu coração é tão grande e cabe tanto amor... Parece uma geladeira Geladeira Brastemp Frost Free Inverse A+ 479 litros.", 
    "Deus como eu sou feliz de ter um compartimento só para mim, com meu nome.",
    "É clichê, eu sei, mas eu amo até seus defeitos (que são minúsculos perto das suas qualidades).",
    "Amo como você ri do meu senso de humor duvidoso, amo como você é divertida e leve, mesmo quando sua vida está desmoronando.",
    "Seus abraços são abrigo e curam feridas que você nem sabia que existiam, sua presença acalma até meus dias mais tempestuosos.",
    "Eu tenho tanto orgulho da mãe e mulher que você se tornou, você me inspira todos os dias a ser uma pessoa melhor.",
    "Amo a sua garra, a sua vontade de ser sempre sua melhor versão, sempre disposta a evoluir e melhorar (mesmo já sendo perfeita).",
    "Nunca vou me cansar de dizer o quanto eu te amo e o quanto sou grata por você existir na minha vida.",
    "Te amo por tudo que você ja foi, por tudo que você é e por tudo que ainda vamos ser juntas. 💖"
];

function trocarTexto() {
    const text = document.getElementById('text');
    const botao = document.getElementById('button');

    // Mostra a próxima mensagem se ainda houver
    if (qtd < mensagens.length) {
        text.innerHTML = mensagens[qtd];

        // Atualiza botão se for o último clique
        if (qtd === mensagens.length - 1) {
            botao.innerHTML = "Fim da carta 💌";
            botao.disabled = true;
            botao.style.opacity = "0.6";
            botao.style.cursor = "not-allowed";
        } else {
            botao.innerHTML = "Continuar lendo...";
        }

        qtd++;
    }
}
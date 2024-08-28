function login() {

    const username = document.getElementById('campoUser').value;
    const password = document.getElementById('campoPassword').value;
    const errorDiv = document.getElementById('error');

    if (username === "toyota" && password === "toy123") {
        errorDiv.textContent = '';
        // Redirecionar para outra página
        window.location.href = "toyota.html";
    } 
    if (username === "niterra" && password === "nit123") {
        errorDiv.textContent = '';
        // Redirecionar para outra página
        window.location.href = "niterra.html";
    } else {
        errorDiv.textContent = 'Usuário ou senha incorretos!';
    }
}

function showContent(option) {
    // Esconde todo o conteúdo
    document.getElementById('option1').style.display = 'none';
    document.getElementById('option2').style.display = 'none';
    
    // Exibe o conteúdo da opção selecionada
    document.getElementById(option).style.display = 'block';
}

function togglePopup() {
    const popup = document.getElementById('popup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

// Exibe a pop-up assim que a página for carregada
window.onload = function() {
    togglePopup();
};

function enviarSolicitacao() {
    const nome = document.getElementById('nome').value;
    const celular = document.getElementById('cel').value;
    const empresa = document.getElementById('empresa').value;
    const mensagem = document.getElementById('mensagem').value;

    const subject = `Solicitação de Cadastro - ${nome}`;
    const body = `Nome: ${nome}\nCelular: ${celular}\nEmpresa: ${empresa}\n\nMensagem:\n${mensagem}`;
    const mailtoLink = `mailto:g.takaoka@cbd.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message !== '') {
        const chatContent = document.getElementById('chat-content');
        
        // Criando um novo elemento div para a mensagem do usuário
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('message', 'user-message');
        
        const messageParagrafo = document.createElement('p');
        messageParagrafo.textContent = message;
        userMessageDiv.appendChild(messageParagrafo);
        
        // Adicionando a mensagem do usuário ao conteúdo do chat
        chatContent.appendChild(userMessageDiv);
        
        // Limpando o campo de entrada
        input.value = '';

        // Rolando o chat para a última mensagem
        chatContent.scrollTop = chatContent.scrollHeight;

        // Simular uma resposta do bot após uma pequena pausa
        setTimeout(() => {
            botResponse(message);
        }, 1000);
    }
}

function botResponse(userMessage) {
    const chatContent = document.getElementById('chat-content');
    
    // Criando um novo elemento div para a mensagem do bot
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('message', 'support-message');
    
    const messageParagrafo = document.createElement('p');

    // Respostas simples baseadas no que o usuário envia
    if (userMessage.toLowerCase().includes('oi') || userMessage.toLowerCase().includes('ola') || userMessage.toLowerCase().includes('eai') || userMessage.toLowerCase().includes('olá')) {
        messageParagrafo.textContent = 'Olá novamente! Como podemos ajudar?';
    } else if (userMessage.toLowerCase().includes('dias') || userMessage.toLowerCase().includes('dia') || userMessage.toLowerCase().includes('data')) {
        messageParagrafo.textContent = 'De segunda-feira até quinta-feira das 07:30 às 17:30 e sexta-feira às 16:30';
    } else if (userMessage.toLowerCase().includes('cadastro') || userMessage.toLowerCase().includes('cadastrar')) {
        messageParagrafo.textContent = 'Para realizar o cadastro é necessário preencher o campo "Cadastre-se" na página de login. Após o cadastro analisaremos os dados e confirmaremos sua identidade (essa analise poderá demorar dias).';
    } else if (userMessage.toLowerCase().includes('horário') || userMessage.toLowerCase().includes('horario') || userMessage.toLowerCase().includes('hora') || userMessage.toLowerCase().includes('horas')) {
        messageParagrafo.textContent = 'Nosso horário de atendimento é das 7:30h às 17:30h, de segunda a quinta-feira e das 7:30h às 16:30h toda sexta-feira.';
    } else {
        messageParagrafo.textContent = 'Desculpe, não entendi sua pergunta. Pode reformular?';
    }
    
    botMessageDiv.appendChild(messageParagrafo);
    
    // Adicionando a resposta do bot ao conteúdo do chat
    chatContent.appendChild(botMessageDiv);
    
    // Rolando o chat para a última mensagem
    chatContent.scrollTop = chatContent.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

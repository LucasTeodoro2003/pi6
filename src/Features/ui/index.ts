function showMessage() {
    const mensagem = document.body.classList.contains('dark')
        ? 'Modo Dark!'
        : 'Modo White!';

    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.bottom = '3%';
    popup.style.left = '91%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.padding = '10px';
    popup.style.backgroundColor = document.body.classList.contains('dark') ? 'black' : 'white';
    popup.style.border = '1px solid black';
    popup.style.borderRadius = '25px';
    popup.style.zIndex = '1000';
    popup.style.color = document.body.classList.contains('dark') ? 'white' : 'black';
    popup.textContent = mensagem;

    document.body.appendChild(popup);

    setTimeout(() => {
        document.body.removeChild(popup);
    }, 250);
}

export { showMessage };

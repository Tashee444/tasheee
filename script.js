function addCode() {
    const codeInput = document.getElementById('code-input');
    const codeContainer = document.getElementById('code-container');

    const codeBlock = document.createElement('pre');
    codeBlock.textContent = codeInput.value;

    codeContainer.appendChild(codeBlock);
    codeInput.value = '';
}

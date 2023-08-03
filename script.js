this.addEventListener('submit', e => {
    e.preventDefault();
    const p = document.getElementById('p')
    p.innerHTML = ""
    const size = document.getElementById('textBox')
    const letras = '1567asdfghjkIOPASDZXqwertyuFGHJKL234BlzxcvbnmQWER890iopTYUCVNM'
    let sizeReal = parseInt(size.value)
    if (!isNaN(sizeReal)) {
        for (let i = 0; i <= sizeReal; i++) {
            p.innerHTML += letras[Math.floor(Math.random() * letras.length)]
        }
    }
    else {
        alert('debe de colocar un tamnio valido permitido')
    }


})
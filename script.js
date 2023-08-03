const container = document.querySelector('.container')
const text = document.getElementById('text');
const History = document.querySelector('.history');

class Operaciones {

    constructor(valor) {
        this.valor = valor;
    }

    eliminarUltimoDigito() {
        let textoEliminado = this.valor.value.split('')
        this.valor.value = ''
        textoEliminado.pop()
        textoEliminado.map(elementico => {
            this.valor.value += elementico
        })
    }
    sacarRaizCuadrada() {
        let raiz_cuadrada = Math.sqrt(this.valor.value)
        if (isNaN(raiz_cuadrada)) {
            this.valor.value = ''
            return alert('operacion invalida')
        }
        return this.valor.value = raiz_cuadrada
    }
    elevarAlCuadrado() {
        let laPotencia = parseFloat(this.valor.value * this.valor.value)
        if (isNaN(laPotencia)) {
            this.valor.value = ''
            return alert('invalid Acction')
        }
        return this.valor.value = laPotencia
    }
    elevarUnNumeroAotro() {
        let desfragmentar = this.valor.value.split('^')
        let laPotencia = Math.pow(desfragmentar[0], desfragmentar[1])
        if (!isNaN(laPotencia)) {
            return this.valor.value = laPotencia
        }
        return alert('invalid Acction')
    }
    

    historial(){
        
    }

}

container.childNodes.forEach((element) => {
    element.childNodes.forEach(elemento => {
        elemento.addEventListener('click', () => {
            const operacion = new Operaciones(text)
            switch (elemento.value) {
                case 'CE':
                    text.value = "";
                    sessionStorage.clear()
                    break;

                case 'C':
                    text.value = "";
                    break;
                case 'D':
                    operacion.eliminarUltimoDigito()
                    break;
                case 'X':
                    text.value += '*'
                    break;
                case '=':
                    try {
                        if (text.value.indexOf('^') === -1) {
                            operacion.historial()
                            text.value = eval(text.value)
                        }else{
                            operacion.elevarUnNumeroAotro()
                        }
                    } catch (E) {
                        alert('accion invalida' + E)
                    }
                    break;
                case '+/-':
                    text.value += '-'
                    break;

                case 'sqrt':
                    operacion.sacarRaizCuadrada()
                    break;

                case 'x2':
                    operacion.elevarAlCuadrado()
                    break;

                default:
                    text.value += elemento.value
            }
        }
        )
    })
})

text.addEventListener('click', () => {
    text.value = ''
}) 

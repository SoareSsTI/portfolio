// Script para adicionar máscaras a campos de formulários

const mascara = {
    numero (evento){
        const campo = evento.target
        const valor = campo.value
        
        const novoValor = valor
        .replace(/\D/g, '')

        campo.value = novoValor
    },

    cpf (evento){
        const campo = evento.target
        campo.maxLength = '14'
        const valor = campo.value

        const novoValor = valor
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')

        campo.value = novoValor
    },

    telefone (evento){
        const campo = evento.target
        campo.maxLength = '15'
        const valor = campo.value

        const novoValor = valor
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')

        campo.value = novoValor
    }
}

export const inicializaCampos = () =>{
    const campos = document.querySelectorAll('[data-mascara]')

    campos.forEach((campo) => {
        const metodo = campo.getAttribute('data-mascara')
        campo.addEventListener('input', mascara[metodo])
        campo.dispatchEvent(new Event('input'))
    })
}

inicializaCampos()

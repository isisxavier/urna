const form = document.getElementById('form')
const voto = document.getElementById('numero')

function votar(){
    
    if(numero.value == 10){
        alert('Você votou na candidata: Isis')
    } else if(numero.value == 11){
        alert('Você votou na candidata: Brenda')
    }
    else if(numero.value == 12){
        alert('Você votou no candidato: Caio')
    }
    else{
        alert('Voto Nulo')
    }
 
}

function votoBranco(){
    alert('Voto Branco')
}

function clean(){
    document.getElementById('form').reset()

}



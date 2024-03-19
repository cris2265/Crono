let div_cronometro = document.querySelector(".cronometro")
let time = document.querySelector(".time")
let btn = document.querySelector(".btn")


function iniciar_cronometro(minutos, segundos) {
    div_cronometro.innerHTML = `${minutos}:${segundos}`
    
    function actualizr() {
        
        if (segundos == 1 && minutos ==0) {
            clearInterval(tiempo)
        }
        
        segundos--;
        
        if (segundos == 0) {
            if (minutos >=1) {
                segundos = 60
                minutos--;
            }

        }


        div_cronometro.innerHTML = "";
        
        if (segundos < 10) {
            div_cronometro.innerHTML=`0${minutos}:0${segundos}`;
            if (minutos < 10){
                div_cronometro.innerHTML=`0${minutos}:0${segundos}`; 
            }else{
                div_cronometro.innerHTML=`${minutos}:0${segundos}`; 
            }
        }else{
        div_cronometro.innerHTML=`0${minutos}:${segundos}`;
        }

    }
    
    
    //realiza un intervalo osea accion de tiempo
    let tiempo = setInterval(actualizr, 1000);

}

btn.addEventListener("click", () => {



    let segundos = parseInt(time.value)
    iniciar_cronometro(segundos, 1)
    let minutos = parseInt(time.value)
    iniciar_cronometro(minutos, 1)


})



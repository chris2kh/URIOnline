let tiempos = "0 0 0 1";



const duracion = (tiempos) =>{
    let h1 = parseInt(tiempos.split(" ")[0]);
    let m1 = parseInt(tiempos.split(" ")[1]);
    let h2 = parseInt(tiempos.split(" ")[2]);
    let m2 = parseInt(tiempos.split(" ")[3]);
    
    let horas = h2 - h1;
    let minutos = m2 - m1;

    if (h1 >= h2){
        horas += 24;
    }
    
    if (m1 > m2){
        minutos += 60;
        horas --;
    }

    if(horas == 24 && minutos != 0){
        horas = 0;
    }
    
    return [horas, minutos];
    
}

console.log("O JOGO DUROU " + duracion(tiempos)[0] + " HORA(S) E " + duracion(tiempos)[1] + " MINUTO(S)");

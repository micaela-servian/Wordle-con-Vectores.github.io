const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const PESO = document.getElementById('peso').value
    //que se cargue un dato
    if(PESO>0 && PESO < 31){
        ERROR.style.display = 'none';
        let flujo = Math.round(calFlujo(PESO));
        let mantenimiento = Math.round((flujo*1.5)/24);
        FLU.innerHTML = 'Volumen Diario: '+ flujo + 'cc/hr';
        MAN.innerHTML = 'm+m/2: ' + mantenimiento + 'cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
    else if(PESO>30){
        let flujo = Math.round(calFlujo(PESO));
        let mantenimiento = Math.round(flujo*24);
        FLU.innerHTML = 'Volumen Diario: '+ flujo + 'cc/hr';
        MAN.innerHTML = 'm+m/2: ' + mantenimiento + 'cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'none';
    }
    else{
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calFlujo (peso){
    //Calculamos en flujo
    let valor = peso;
    let flujo = 0;

    if (valor <= 10){
        flujo = valor*100;
    }
    else if (valor <= 20){ 
        flujo = 1000 + (valor - 10)*50;
    }
    else if (valor <= 30){
        flujo = 1500 + (valor - 20)*20;
    }
    else if(valor > 30){
        flujo = (((valor*4)+7)/(Number (valor)+90)*1500);
        console.log (flujo);
    }
    return(flujo)
    
}
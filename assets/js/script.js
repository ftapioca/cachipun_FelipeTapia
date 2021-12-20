// Ejercicio Cachipun

//Ingreso cantidad de juegos que desea participar el usuario
var cant_juegos = parseInt(prompt("Bienvenido al Cachipún contra la Máquina, ingresa la cantidad de veces que deseas jugar cachipún"));
var juegos = parseInt(0);

//Comparar si el numero ingresado es mayor que 0
if (juegos < cant_juegos) {
    //Contadores de resultado en 0
    var win = 0;
    var lost = 0;
    var draw = 0;

    //inicio del juego, dependiendo de la cantidad ingresada por el usuario

    while (juegos < cant_juegos) {
        //Variable para jugadas del computador, 1=Piedra 2=Papel 3=Tijera
        var play_pc = Math.floor(Math.random() * 3) + 1;
        var play_user = parseInt(prompt("Ingresa el número de tu siguiente jugada: 1=Piedra, 2=Papel, 3=Tijera"));

        if (play_user==1 || play_user==2 || play_user==3) {         //Compruebo si el usuario ingreso una jugada correcta
            
            
            if (play_user == 1){                                    //El usuario elige Piedra 
                if (play_user == play_pc) {                         //la máquina elige piedra
                    alert("Ha sido un empate.");
                    cant_juegos = cant_juegos-1;                    //descuento una jugada
                    draw = draw+1;
                } else if (play_pc == 2) {                          //la máquina elige papel
                    alert("Has perdido contra la máquina."); 
                    cant_juegos = cant_juegos-1;                    //descuento una jugada
                    lost=lost+1;
                }else if (play_pc == 3) {                           //la máquina elige tijera
                    alert("¡Felicitaciones!, le haz ganado a la máquina.")
                    cant_juegos = cant_juegos-1;                    //descuento una jugada
                    win=win+1;
                }
            } else if (play_user == 2){                             //El usuario elige Papel
                if (play_user==play_pc) {                           //la máquina elige papel
                    alert("Ha sido un empate.");
                    cant_juegos = cant_juegos-1;                    //descuento una jugada
                    draw = draw+1;
                } else if (play_pc == 3) {                          //la máquina elige tijera
                    alert("Has perdido contra la máquina.");
                    cant_juegos = cant_juegos-1;                    //descuento una jugada
                    lost=lost+1;
                }else if (play_pc == 1) {                           //la máquina elige piedra
                    alert("¡Felicitaciones!, le haz ganado a la máquina.")
                    cant_juegos = cant_juegos-1;                    //descuento una jugada
                    win=win+1;
                }
            } else if (play_user == 3){                             //El usuario elige Tijera
                if (play_user == play_pc) {                         //la máquina elige tijera
                    alert("Ha sido un empate.");
                    cant_juegos = cant_juegos-1;                    //descuento una jugada
                    draw = draw+1;
                } else if (play_pc == 1) {                          //la máquina elige piedra
                    alert("Has perdido contra la máquina.");
                    cant_juegos = cant_juegos-1;                    //descuento una jugada
                    lost=lost+1;
                }else if (play_pc == 2) {                           //la máquina elige papel
                    alert("¡Felicitaciones!, le haz ganado a la máquina.")
                    cant_juegos = cant_juegos-1;                    //descuento una jugada
                    win=win+1;
                }
            }

            if (cant_juegos > 0) {                                  //Compruebo que quedan mas jugadas
                alert("Te quedan "+ cant_juegos +" jugada(s).");      
            } else {
                alert("Esta fue tu última jugada.\nGanaste "+win+".\nPerdiste "+lost+".\nEmpataste "+draw+".\nMuchas gracias por participar."); 
            }


        } else {
            alert("Debes ingresar un alternativa de juego correcta, te recuerdo: 1=Papel, 2=Piedra, 3=Tijera")
        }
    }
} else {
    alert("Debes ingresar un número mayor que 0");
}







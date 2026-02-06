// 1. Solicitamos los datos al usuario

var mes = prompt("Ingrese el número del mes de nacimiento (ej: 5 para Mayo):");
var dia = prompt("Ingrese el día de nacimiento (ej: 11):");

// 2. Convertimos los datos de String a Enteros para poder comparar números
mes = parseInt(mes);
dia = parseInt(dia);

var signo = "";

// 3. Lógica para determinar el signo zodiacal
// Verificamos mes por mes y el día de corte
if (mes === 1) { // Enero
    if (dia <= 19) {
        signo = "Capricornio";
    } else {
        signo = "Acuario";
    }
} else if (mes === 2) { // Febrero
    if (dia <= 18) {
        signo = "Acuario";
    } else {
        signo = "Piscis";
    }
} else if (mes === 3) { // Marzo
    if (dia <= 20) {
        signo = "Piscis";
    } else {
        signo = "Aries";
    }
} else if (mes === 4) { // Abril
    if (dia <= 19) {
        signo = "Aries";
    } else {
        signo = "Tauro";
    }
} else if (mes === 5) { // Mayo
    if (dia <= 20) {
        signo = "Tauro";
    } else {
        signo = "Géminis";
    }
} else if (mes === 6) { // Junio
    if (dia <= 20) {
        signo = "Géminis";
    } else {
        signo = "Cáncer";
    }
} else if (mes === 7) { // Julio
    if (dia <= 22) {
        signo = "Cáncer";
    } else {
        signo = "Leo";
    }
} else if (mes === 8) { // Agosto
    if (dia <= 22) {
        signo = "Leo";
    } else {
        signo = "Virgo";
    }
} else if (mes === 9) { // Septiembre
    if (dia <= 22) {
        signo = "Virgo";
    } else {
        signo = "Libra";
    }
} else if (mes === 10) { // Octubre
    if (dia <= 22) {
        signo = "Libra";
    } else {
        signo = "Escorpio";
    }
} else if (mes === 11) { // Noviembre
    if (dia <= 21) {
        signo = "Escorpio";
    } else {
        signo = "Sagitario";
    }
} else if (mes === 12) { // Diciembre
    if (dia <= 21) {
        signo = "Sagitario";
    } else {
        signo = "Capricornio";
    }
} else {
    signo = "Fecha no válida (revise el número de mes)";
}

// 4. Mostrar el resultado final
if (mes >= 1 && mes <= 12) {
    alert("Su signo zodiacal es: " + signo);
} else {
    alert(signo);
}
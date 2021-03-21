function noc1() {
    noc(), lo();
}
function noc() {
    (min = document.getElementById("min").value), (cap = document.getElementById("cap").value), localStorage.setItem("minuto", min), localStorage.setItem("capitulo", cap);
}
function lo() {
    (cc = localStorage.getItem("capitulo")), (cm = localStorage.getItem("minuto")), (document.getElementById("txt").innerHTML = `Vas por el capitulo ${cc} y por el minuto ${cm}`), (min.value = cm), (cap.value = cc);
}
function inter() {
    interv = setInterval(() => {
        console.log("hola"), cronometro();
    }, 1e3);
}
function prin() {
    (c1 = parseInt(cm)), (c2 = cm.indexOf(":")), (c2 += 1), (c2 = cm.slice(c2)), (c2 = parseInt(c2)), (c3 = cm.lastIndexOf(":")), (c3 += 1), (c3 = cm.slice(c3)), (c3 = parseInt(c3));
}
async function sepa() {
    prin(), inter();
}
function cronometro() {
    (c3 += 1), console.log(c3), 60 === c2 && ((c1 += 1), (c2 = 0)), 60 === c3 && ((c2 += 1), (c3 = 0)), (res = `${c1}:${c2}:${c3}`), (min.value = res), localStorage.setItem("minuto", res), lo();
}
function stop() {
    clearInterval(interv), localStorage.setItem("minuto", res), lo();
}
lo();

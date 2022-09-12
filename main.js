const xi = -2;
const yi = 5;

function Calcular()
{   
    let intervalos = document.getElementById("intervalo").value;

    let x = 5 * (intervalos ** 2) + 3 * intervalos - 2;
    let y = 2 * (intervalos ** 3) + 5;
    let deltax = x - xi;
    let deltay = y - yi;
    let d = Math.sqrt((deltax ** 2) + (deltay ** 2));
    let vm = d / intervalos;

    x = x.toFixed(2).replace(/\.00$/, '');
    y = y.toFixed(2).replace(/\.00$/, '');
    vm = vm.toFixed(2).replace(/\.00$/, '');
    d = d.toFixed(2).replace(/\.00$/, '');

    let tabela = document.querySelector("table");
    let linha = tabela.insertRow(-1);

    let celula_i = linha.insertCell(0);
    let texto_i = document.createTextNode(intervalos + "s");

    celula_i.appendChild(texto_i);

    let celula_xy = linha.insertCell(1);
    let texto_xy = document.createTextNode("(" + x + ", " + y + ")");

    celula_xy.appendChild(texto_xy);

    let celula_d = linha.insertCell(2);
    let texto_d = document.createTextNode(d + " m");

    celula_d.appendChild(texto_d);

    let celula_vm = linha.insertCell(3);
    let texto_vm = document.createTextNode(vm + " m/s");

    celula_vm.appendChild(texto_vm);
}
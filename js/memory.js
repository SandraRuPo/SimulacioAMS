var fila;
function mostraCartes()
{
    var contador=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    var carta=0;
    var descrip = document.getElementById('descripcio');
    var num = document.getElementById('numero');
    fila = parseInt(num.value);
    if (fila==2||fila==4||fila==6)
    {
        document.getElementById('formulari').innerHTML= '';
        //document.getElementById('formulari').alt = fila;
        descrip.innerHTML = "Has escollit un tauler de " + num.value + ' x ' + num.value;
        var tauler = "";
        //console.log(fila);
        var cont=1;
        tauler += "<table id = 'tablero' class = 'col-8'>";
        for (var i = 0; i < fila; i++)
        {
            tauler += "<tr class='fila"+i+" '>";
            for (var j = 0; j < fila; j++)
            {
                do
                {
                    carta = getRandomInt(fila*fila/2);
                    contador[carta]++;
                } while (contador[carta]>2)
                //console.log("Lacarta" + carta);
                //console.log("El contador" + contador[carta]);
                tauler += "<td><img src='/images/caja.webp' class = 'carta"+cont+" cartes' name = '"+carta+"' width = '100%' height = '100%' onclick = 'giraCarta(this)'></td>";
                cont++;
            }
            tauler += "</tr>";
        }
        tauler += "</table>";
        document.getElementById('tabla').innerHTML = tauler;
    }
    else
    {
        descrip.innerHTML = 'Aquest tauler no es vàlid. Torna a introduir el número de files.';
    }
}
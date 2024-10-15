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

function reparteixCartes()
{
    var num = parseInt(document.getElementById('numero').value);
    for (var i = 1; i<=num;i++)
    {
        document.getElementsByClassName("carta"+i);
    }
}

var cont=0;
var cartaAnt=-1;
var cartaAnt2=-1;

function giraCarta(carta)
{
    if (carta!=cartaAnt)
    {
        if (cont==0&&cartaAnt2.name != 'trobades')
        {
            cartaAnt2.src='/images/caja.webp';
        }
        if (cont==0&&cartaAnt.name != 'trobades')
        {
            cartaAnt.src='/images/caja.webp';
        } 


        switch (carta.name)
        {
            case '0': carta.src='/images/bowser.webp'; break;
            case '1': carta.src='/images/mario.webp'; break;
            case '2': carta.src='/images/luigi.webp'; break;
            case '3': carta.src='/images/peach.webp'; break;
            case '4': carta.src='/images/toadd.webp'; break;
            case '5': carta.src='/images/toadette.webp'; break;
            case '6': carta.src='/images/yoshi.webp'; break;
            case '7': carta.src='/images/DK.webp'; break;
            case '8': carta.src='/images/flor.webp'; break;
            case '9': carta.src='/images/koppa.webp'; break;
            case '10': carta.src='/images/lakitu.webp'; break;
            case '11': carta.src='/images/planta.webp'; break;
            case '12': carta.src='/images/logo.webp'; break;
            case '13': carta.src='/images/Vida.webp'; break;
            case '14': carta.src='/images/bala.webp'; break;
            case '15': carta.src='/images/seta.webp'; break;
            case '16': carta.src='/images/friends.webp'; break;
            case '17': carta.src='/images/moneda.webp'; break;
            case '18': carta.src='/images/estrella.webp'; break;
            case 'trobades': break;
        }


        if (cont==1&&cartaAnt.name==carta.name)
        {
            // console.log("contador: "+cont+" cartas iguales");
            cont=0;
            carta.name = 'trobades';
            cartaAnt.name = 'trobades';
        }
        else if (cont==1&&cartaAnt.name!=carta.name)
        {
            // console.log("contador: "+cont+" cartas diferentes");
            cartaAnt2=carta;       
            cont=0;
        }
        else
        {
            // console.log("contador: "+cont);
            if (carta.name!='trobades')
            {
                cont++;
                cartaAnt=carta;
                // console.log("no trobada "+cont);
            }
        }
        // console.log("Hola "+carta.src);
        acabat();
    }
}

function enhorabona() {
    var main = document.getElementById('main');
    main.innerHTML = '';
    main.innerHTML = "<div id = 'final'><h1>ENHORABONA! HAS GUANYAT!</h1><img src ='./images/friends.webp' id = 'logo2'><button onclick = 'comenca()'>Torna a començar</button></div>";
}


function comenca() {
    window.location.reload();
}
class Billete
{
	constructor(valor, cantidad)
	{
		this.valor =  valor;
		this.cantidad = cantidad;
	}
}

var caja = [];

caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

//Cantidad de dinero en caja
var dinero =  0;

var entregado = [];

//Cantidad de billestes por denominación
var div = 0;

//Cantidad de billestes total
var papeles = 0;

//Obtener id boton
var boton = document.getElementById("extraer");


function entregarDinero() 
{
	//Obtener id de caja de texto
	var dineroInput = document.getElementById("dinero");
	//toma el valor de la caja de texto y lo covierte de texto a entero
	dinero = parseInt(dineroInput.value);

	//Recorre c/elemento que hay en caja es decir c/billete
	for (var billetes of caja)
	{
		if(dinero > 0)
		{
			div = Math.floor(dinero / billetes.valor);
			if (div > billetes.cantidad) 
			{
				papeles = billetes.cantidad;
			}
			else
			{
				papeles = div;
			}

			entregado.push(new Billete(billetes.valor, papeles));
			dinero = dinero - (billetes.valor * papeles);
		}
	}

	if (dinero > 0) 
	{
		resultado.innerHTML = "Este cajero tiene fondos insuficientes, para el dinero solicitado.";
	}
	else
	{
		for(var e of entregado)	
		{
			resultado.innerHTML += e.cantidad +  " billestes de $" + e.valor + "<br>";
		}
	}

}

var resultado =  document.getElementById("resultado");
boton.addEventListener("click", entregarDinero);

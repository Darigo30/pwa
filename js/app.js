// Llamamos el contenedor en HTML y hacemos el array para las imagenes

	const container = document.querySelector(".container")
	const playas = [
		{
			nombre: "Margarita",
			image: "images/playa-1.jpg"
		},
		{
			nombre: "Los Roques",
			image: "images/playa-2.jpg"
		},
		{
			nombre: "Morrocoy",
			image: "images/playa-3.jpg"
		},
		{
			nombre: "El Yaque",
			image: "images/playa-4.jpg"
		},
		{
			nombre: "Tucacas",
			image: "images/playa-5.jpg"
		},
		{
			nombre: "Choroní",
			image: "images/playa-6.jpg"
		},
		{
			nombre: "Chichiriviche",
			image: "images/playa-7.jpg"
		},
		{
			nombre: "Isla de Coche",
			image: "images/playa-8.jpg"
		},
		{
			nombre: "Isla Tortuga",
			image: "images/playa-9.jpg"
		},
	]

//Recorremos las imagenes con su nombre y botón las imprimimos con el evento DOMContentLoaded

	const showPlayas = () => {
		let mostrar = ""
		playas.forEach(
			({nombre, image}) =>
				(mostrar += `
					<div class="card">
						<img class="card--avatar" src=${image} />
						<h1 class="card--title">${nombre}</h1>
						<a class="card--link" href="#">Ver Más</a>
					</div>
				`)
		)
	container.innerHTML = mostrar
	}
	document.addEventListener("DOMContentLoaded", showPlayas)

	if ("serviceWorker" in navigator){
		window.addEventListener("load", function(){
			navigator.serviceWorker
			.register("/serviceWorker.js")
			.then(res => console.log("Servicio de trabajo registrado"))
			.catch(err => console.log("Servicio de trabajo no registrado", err))
		});
	}
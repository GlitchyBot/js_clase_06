class libro {
    constructor(titulo, autor, precio) {
      this.titulo = titulo;
      this.autor = autor;
      this.precio = precio;
    }
  }
  
  const libro1 = new libro("Filosofia A Martillazos Tomo 2", "Sztajnszrajber Dario", 1050,00)
  const libro2 = new libro("Catedrales", "Piñeiro Claudia", 899,00)
  const libro3 = new libro("La novia de sandro", "Sosa Villada Camila", 650,00)
  const libro4 = new libro("Las cosas que perdimos en el fuego", "Enriquez Mariana", 985,00)
  const libro5 = new libro("Matilde debe morir", " Acevedo Cristian", 715,00)
  const libro6 = new libro("Lass tinieblas y el alba", " Follett Ken", 1.999,00)
  const libro7 = new libro("1984", "Orwell George", 649,00)
  const libro8 = new libro("Ensayo sobre la ceguera", " Saramago Jose", 1.199,00)
  const libro9 = new libro("Performance", "Taylor Diana", 990,00)
  const libro10 = new libro("Como probocar un incendio y porque", "Ball Jesse", 850,00)
  const libro11 = new libro("Bonsai", " Sujimoto Hideo", 950,00)
  const libro12 = new libro("Huerta organica en macetas", "Escriba Maria Gabriela", 850,00)
  
  console.log(libro1)
  console.log(libro2)
  console.log(libro3)
  console.log(libro4)
  console.log(libro5)
  console.log(libro6)
  console.log(libro7)
  console.log(libro8)
  console.log(libro9)
  console.log(libro10)
  console.log(libro11)
  console.log(libro12)



  var carrito = [];

agregarAlCarrito('Filosofia A Martillazos Tomo 2', 1050,00)
agregarAlCarrito('Filosofia A Martillazos Tomo 2', 1050,00)
agregarAlCarrito('Performance', 990,00)
agregarAlCarrito('Huerta organica en macetas', 850,00)
agregarAlCarrito('Huerta organica en macetas', 850,00)
agregarAlCarrito('Huerta organica en macetas', 850,00)

function agregarAlCarrito(nombre, precio) {

	
	if (carrito.length > 0) {
		for (let i = 0; i < carrito.length; i++) {
			if (carrito[i].nombre == nombre) {
				
				carrito[i].cant++;
				return
			}
		}
		
		producto = {
			nombre: nombre,
			precio: precio,
			cant: 1
		}
		carrito.push(producto);
	} else {
		
		producto = {
			nombre: nombre,
			precio: precio,
			cant: 1
		}
		carrito.push(producto);
	}
}

console.table(carrito)
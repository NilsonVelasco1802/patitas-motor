const lola = [
  { fecha: "02/02", motivo: "Vacunación anual", veterinario: "Dra. Ríos", costo: 85000 },
  { fecha: "15/03", motivo: "Control de peso", veterinario: "Dr. Gómez", costo: 40000 },
  { fecha: "20/05", motivo: "Limpieza dental", veterinario: "Dra. Ríos", costo: 150000 },
];


class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.siguiente = null;
  }
}


const nodo1 = new Nodo(lola[0]);
const nodo2 = new Nodo(lola[1]);
const nodo3 = new Nodo(lola[2]);

nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;
nodo3.siguiente = null;

let cabez = nodo1;


let actual = cabez;

while (actual !== null) {
    console.log(actual.dato);
    actual = actual.siguiente;
}


let total = 0;
actual = cabez;

while (actual !== null) {
    total += actual.dato.costo;
    actual = actual.siguiente;
}

console.log("Costo total del historial: $" + total);

module.exports = Nodo;
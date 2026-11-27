const ListaEnlazada = require("../ListaEnlazada");

function verificar(descripcion, condicion) {
  console.log((condicion ? "✅ " : "❌ ") + descripcion);
}

// Revisa cabeza, cola, tamanio y el orden completo de la lista
function revisar(lista, datoCabeza, datoCola, tamanio, orden) {
  const dCabeza = lista.cabeza ? lista.cabeza.dato : null;
  const dCola = lista.cola ? lista.cola.dato : null;

  verificar("cabeza es " + datoCabeza, dCabeza === datoCabeza);
  verificar("cola es " + datoCola, dCola === datoCola);
  verificar("tamanio es " + tamanio, lista.tamanio === tamanio);
  verificar("orden es [" + orden + "]", lista.aArreglo().join(",") === orden.join(","));

  // La cola nunca debe apuntar a otro nodo
  if (lista.cola) {
    verificar("cola.siguiente es null", lista.cola.siguiente === null);
  }
}

// ---------- AGREGAR AL FINAL ----------

console.log("\nCaso 1: al final, lista vacía");
const l1 = new ListaEnlazada();
l1.agregarAlFinal("A");
revisar(l1, "A", "A", 1, ["A"]);

console.log("\nCaso 2: al final, lista con un nodo");
const l2 = new ListaEnlazada();
l2.agregarAlFinal("A");
l2.agregarAlFinal("B");
revisar(l2, "A", "B", 2, ["A", "B"]);

console.log("\nCaso 3: al final, lista con varios nodos");
const l3 = new ListaEnlazada();
l3.agregarAlFinal("A");
l3.agregarAlFinal("B");
l3.agregarAlFinal("C");
l3.agregarAlFinal("D");
revisar(l3, "A", "D", 4, ["A", "B", "C", "D"]);

// ---------- AGREGAR AL INICIO ----------

console.log("\nCaso 4: al inicio, lista vacía");
const l4 = new ListaEnlazada();
l4.agregarAlInicio("A");
revisar(l4, "A", "A", 1, ["A"]);

console.log("\nCaso 5: al inicio, lista con un nodo");
const l5 = new ListaEnlazada();
l5.agregarAlInicio("B");
l5.agregarAlInicio("A");
revisar(l5, "A", "B", 2, ["A", "B"]);

console.log("\nCaso 6: al inicio, lista con varios nodos");
const l6 = new ListaEnlazada();
l6.agregarAlInicio("D");
l6.agregarAlInicio("C");
l6.agregarAlInicio("B");
l6.agregarAlInicio("A");
revisar(l6, "A", "D", 4, ["A", "B", "C", "D"]);
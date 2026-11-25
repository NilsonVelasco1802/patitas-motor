const lola = [
  { fecha: "02/02", motivo: "Vacunación anual", veterinario: "Dra. Ríos", costo: 85000 },
  { fecha: "15/03", motivo: "Control de peso", veterinario: "Dr. Gómez", costo: 40000 },
  { fecha: "20/05", motivo: "Limpieza dental", veterinario: "Dra. Ríos", costo: 150000 },
];
let i = 1;
let acc = 0;
while(i < lola.length){
  
  acc += lola[i].costo
  i++
}

console.log(acc);
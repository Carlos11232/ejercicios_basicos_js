function removeDuplicates(list) {
  // Usamos un Set para eliminar duplicados y luego lo convertimos de nuevo a array
  return [...new Set(list)];
}

// Prueba con el array de ejemplo
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

console.log(removeDuplicates(duplicates));
// Mostrará: ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'chicken', 'onion rings', 'soda']


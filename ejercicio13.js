function nameFinder(nameList, nameToFind) {
  const index = nameList.indexOf(nameToFind);
  if (index !== -1) {
    // Si existe, devuelve true y la posición
    return { found: true, position: index };
  } else {
    // Si no existe, devuelve false
    return false;
  }
}

// Prueba con el array de ejemplo
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

// Ejemplos de uso:
console.log(nameFinder(names, 'Tony'));    // { found: true, position: 2 }
console.log(nameFinder(names, 'Pepper'));  // false


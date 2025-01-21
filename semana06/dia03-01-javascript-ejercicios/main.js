/*function createFrame(names) {
    let maxLength = 0;
    names.forEach(name => {
      if (name.length > maxLength) maxLength = name.length;
    });
  
    const namesWithSpaces = names.map(name => {
      const spaces = ' '.repeat(maxLength - name.length);
      return `* ${name}${spaces} *`;
    });
  
    const border = '*'.repeat(maxLength + 4);
  
    return [border, ...namesWithSpaces, border].join("\n");
  }*/

  function createFrame(names) {
    let maxLength = 0;
    names.forEach(function(name) {
      if (name.length > maxLength) maxLength = name.length;
    });
  
    const namesWithSpaces = names.map(function(name) {
      const spaces = ' '.repeat(maxLength - name.length);
      return `* ${name}${spaces} *`;
    });
  
    const border = '*'.repeat(maxLength + 4);
  
    return [border, ...namesWithSpaces, border].join("\n");
  }

  

  createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']))

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']))

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']))


const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
  console.log(`Element: ${number}, Index: ${index}, Array: ${array}`);
});

const numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach(number => console.log(number));

const numbers3 = [1, 2, 3, 4, 5];

numbers3.forEach(function(number) {
  console.log(number);
});
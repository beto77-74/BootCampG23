/*const getDifference = (s, t) => {
    s = [...s].sort();
    t = [...t].sort();
    return t.find((letra,i) => letra !== s[i]);
  };
  
  console.log(getDifference('lebronjames', 'lebronnjames'));
  console.log(getDifference('abc', 'abcd'));*/

  /*console.log(findNaughtyStep('abcd', 'abcde'));
  console.log(findNaughtyStep('stepfor', 'stepor'));
  console.log(findNaughtyStep('abcde', 'abcde'));*/



  function findNaughtyStep(original, modified) {
    let valor = original===modified;
    
    original = [...original].sort();
    modified = [...modified].sort();

    if (valor) {
        return '';
    }
    else {
    /*if (original.length < modified.length) {
        return modified.find((char,i) => char !== original[i]);
    } else if (original.length > modified.length) {
        return original.find((char,i) => char !== modified[i]);
    }*/

    if (original.length < modified.length) {
        return modified.find(function (char,i) {
            modified.char !== original[i] })
    } else if (original.length > modified.length) {
        return original.find(function (char,i) {
            original.char !== modified[i] });
    }
    }
  }
  
  const original1 = 'abcd'
  const modified1 = 'abcde'
  
  console.log(findNaughtyStep(original1, modified1)) // 'e'

  const original2 = 'stepfor'
  const modified2 = 'stepor'
  console.log(findNaughtyStep(original2, modified2)) // 'f'
  
  const original3 = 'abcde'
  const modified3 = 'abcde'
  console.log(findNaughtyStep(original3, modified3)) // ''
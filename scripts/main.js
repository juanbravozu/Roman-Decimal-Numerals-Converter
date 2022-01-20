const romanChars = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1,
};

function handleLoad() {
    var numberInput = document.querySelector('.numberInput');
    var button = document.querySelector('.numberSubmit');
    var result = document.querySelector('.numberResult');

    function handleClick() {
        result.innerHTML = translateNumber(numberInput.value);
    }

    button.addEventListener('click', handleClick);
}

function translateNumber (number) {
  const type = identifyNumberType(number);

  if(type === 'roman') {
    if(number.length === 1) return romanChars[number];
    const splitted = number.split('');
    let result = 0;
    for(let i = 0; i < splitted.length; i++) {
      const rawVal = splitted[i]
      const currVal = romanChars[rawVal];
      if(i + 1 === splitted.length) return result += currVal;

      // Check if there are more than 4 repeated characters
      if(i + 3 < splitted.length && rawVal === splitted[i+1] 
        && rawVal === splitted[i+2] && rawVal === splitted[i + 3]) throw new Error("Roman character repeated 4 or more times");

      const nextVal = romanChars[splitted[i + 1]];
      if(currVal < nextVal) {
        result += nextVal - currVal;
        i++;
      } else {
        result += currVal;
      }
    }
    return result;
  }

  if(type === 'decimal') {
    let result = '';
    let numCopy = number;
    for (const i in romanChars) {
      while(numCopy >= romanChars[i]) {
        result += i;
        numCopy -= romanChars[i];
      }
    }
    return result;
  }

  return -1;
}

function identifyNumberType (number) {
  if(typeof number === 'number') return 'decimal';
  if(typeof number === 'string') return 'roman';
  return null;
}

window.addEventListener('load', handleLoad);

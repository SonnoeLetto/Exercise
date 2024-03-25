function pad(name, number = name.length, symbol = "1", afterOrbefore = true) {
     const numberOfsymbol = number - name.length;
     let results = ''
     for (i = 1; i < numberOfsymbol; i++) {
          results = results + symbol;
     }
     if (afterOrbefore) {
          return (name + results);
     } else {
          return (results + name);
     }

}

console.log(pad('colya'));




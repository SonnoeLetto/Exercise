var persons = {
     name: 'misha',
     age: 23,

}
function getKeys(object) {
     a = [];
     for (var key in object) {
          a.push(key);
     }
     return a
}


function getValues(object) {
     a = [];
     for (var key in object) {
          a.push(object[key]);
     }
     return a
}

function getEntries(object) {
     allolo = []
     getKeys = [];
     getValues = []
     for (var key in object) {
          getKeys.push(key);
          getValues.push(object[key]);
     }
     allolo.push(getKeys)
     allolo.push(getValues)
     return allolo
}


function copyObj(obj) {
     let newObj = {};

     for (let key in obj) {
          newObj[key] = obj[key];
     }

     return newObj;
}

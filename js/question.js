const company = {
     development: {
          frontend: [
               {
                    name: 'Oleg',
                    salary: 1000,
               },
               {
                    name: 'Ivan',
                    salary: 2500
               },
          ],
          backend: [
               {
                    name: 'Dmytro',
                    salary: 1020,
               },
          ],
     },
     design: [
          {
               name: 'Katya',
               salary: 2500,
          },
     ],
     qa: [
          {
               name: 'mart',
               salary: 1300,
          },
     ],
     managment: {
          product: [
               {

                    name: 'pet',
                    salary: 100,

               },
          ],
          engineering: [
               {
                    name: 'kostya',
                    salary: 10,
               },
          ],
     },
};

function calcSalary(department) {
     if(Array.isArray(department)) {
          return department.reduce((acc, person) => (acc += person.salary), 0);
     } else {
          // let sum = 0;
          // for (let index = 0; index < Object.values(department).length; index++) {    // тут мы берем создаем цикл, индекс равен нулю, пока индекс меньше чем длина массива значений (результат Object.values), выполняем тело цикла и увеличиваем индекс на 1
          //      sum += calcSalary(Object.values(department) [index]);   // в теле цикла, ...
               
          // }
          console.log(Object.values(department));
     }
}
calcSalary(company);
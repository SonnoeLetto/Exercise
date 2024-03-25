// let $table = document.createElement('table');
// $table.className = 'main__table';
// document.body.append($table);
// let num = 0;
// for (let index = 1; index <= 10; index++) {
//     let $tr = document.createElement('tr');
//     $table.append($tr)

//     for (let k = 0; k < 10; k++) {
//         let $td = document.createElement('td');
//         num += 1;
//         $td.textContent = num;
//         // $td.className = 'className';
//         $td.style.padding = '5px'
//         $td.style.border = '2px solid purple'

//         $tr.append($td);
//     }
// }
// const array = [1,2, [1.1,1.2,1.3] ,3];

// function createList(list) {
//     const $ul = document.createElement('ul');

//     list.forEach(el => {
//         const $li = document.createElement('li');

//         if (Array.isArray(el)) {
//             $li.append(createList(el));
//         } else {
//             $li.textContent = el;
//         }
//         $ul.append($li);
//     });

//     return $ul;
// }
// const $list = createList(array);
// document.body.append($list);

const height = prompt('Введите высоту')
const width = prompt('Введите ширину')
function getArea(heightValue, widthValue) {
    
    if ((heightValue && widthValue)) {
        console.log(heightValue * widthValue)
    } else {
        console.log(null)
    }
}
getArea(height, width)
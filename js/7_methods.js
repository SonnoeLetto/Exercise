var map = ['дима', 'оксана', 'мария', 'никитос', 'оксана', 'оксана', 'оксана'];

function myMap(arr, fn) {
     var newArr = [];
     for (var i = 0; i < arr.length; i++) {
          newArr.push(fn(arr[i]));
     }
     return newArr;
}

var resultArray = myMap(map, function (item) {
     return item.length;
})


function myFilter(arr, callback) {
     var newArr = [];
     for (var i = 0; i < arr.length; i++) {
         
          if (callback(arr[i])) {
               newArr.push(arr[i]);
          }
     }
     return newArr
}

const notifications = [
     {
          date: '21/07/2019',
          msg: 'Some message here'
     },
     {
          date: '22/07/2019',
          msg: 'Some message here'
     },
     {
          date: '01/07/2019',
          msg: 'Some message here'
     },
     {
          date: '31/07/2019',
          msg: 'Some message here'
     },
];


var a = notifications.reduce(function (acc, notification) {
     if (!acc[notification.date]) {
          acc[notification.date] = [];
     }
     acc[notification.date].push(notification);
     return acc

}, {});

console.log(a)
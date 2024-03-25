const menu = {
    tako: [
        {
            name: '🌮',
            time: 3000
        },
        {
            name: '🍟',
            time: 750
        },
        {
            name: '🥤',
            time: 500
        },
    ],
    pizza: [
        {
            name: '🌮',
            time: 3000
        },
        {
            name: '🍟',
            time: 2850
        },
        {
            name: '🥤',
            time: 500
        },
    ],
}

function order(menuName, orderResult) {
    console.log('Start cooking...');
    const result = [];
    
        getCookingResult = (name, index) => {
            result[index] = name;

            if (menu.tako.length === result.filter(Boolean).length) {
                orderResult(result);
            }
        };


        function cooking({ name, time }, index) {
            
            setTimeout(() => {
                getCookingResult(name, index);

        }, time);
    };

    menu.tako.forEach(cooking); 
   
};

console.log(order(menu.tako, console.log));
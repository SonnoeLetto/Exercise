const numberArray = 3;
const numfor = -1;
const numReduce = 0;
class Student {
    constructor(name, surname, bdayYear) {
        this.name = name;
        this.surname = surname;
        this.bdayYear = bdayYear;
        this.attendance = new Array(numberArray);
        this.rating = new Array(numberArray);
    }

    get absent() {
        const findVal = this.attendance.findIndex((el) => typeof el === 'undefined');
        if (findVal === numfor) {
            throw new Error('Массив переполнен');
        } else {

            return this.attendance[findVal] = false;
        }
    }
    get present() {
        const findVal = this.attendance.findIndex((el) => typeof el === 'undefined');
        if (findVal === numfor) {
            throw new Error('Массив переполнен');
        } else {
            return this.attendance[findVal] = true;
        }
    }
    mark(number) {
        const findVal = this.rating.findIndex((el) => typeof el === 'undefined');

        if (findVal === numfor) {
            throw new Error('Массив переполнен');
        } else {
            return this.rating[findVal] = number;
        }
    }
    get summary() {
        const sum = this.rating.reduce((acc, el) => {
            let ass = acc;
            return ass += el;
        }, numReduce);
        const midValue = sum / this.rating.length;


        const ourpresent = this.attendance.filter((el) => el === true, numReduce);
        const ratingStudent = ourpresent.length / this.attendance.length;
        const bestRatOne = 9;
        const bestRatTwo = 0.9;
        const badlyRatone = 9;
        const badlyRattwo = 0.9;
        if ((midValue >= bestRatOne) && (ratingStudent >= bestRatTwo)) {
            return 'Ути какой молодчинка!';
        } else if ((midValue <= badlyRatone) && (ratingStudent <= badlyRattwo)) {
            return 'Редиска!';
        } else {
            return 'Норм, но можно лучше';
        }

    }
}
const year = 1977;
const serg = new Student('serg', 'petrov', year);
throw new Error(serg);

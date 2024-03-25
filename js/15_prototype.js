function Student(name, surname, yearOfBthday) {
    this.name = name;
    this.surname = surname;
    this.yearOfBthday = yearOfBthday;
    this.attendance = new Array(3);
    this.rating = new Array(3);
}

Student.prototype = {
    getYear() {
        const result = new Date().getFullYear() - this.yearOfBthday;
        return result;
    },
    present() {
        if(~this.indexAttendance) {
            this.indexAttendance.splice(index, 1, true)
            return 'Operation successful'
        } else {
            throw new Error('Array is full')
        }
    },
    absent() {
        if(~indexAttendance) {
            this.indexAttendance.splice(index, 1, false)
            return 'Operation successful'
        } else {
            throw new Error('Array is full')
        }
    },
    get indexAttendance() {
        return this.attendance.findIndex((el) => el === undefined);
    },
    mark(value) {
        const index = this.indexAttendance.findIndex((el) => el === undefined);
        
        if(~index) {
            this.attendance.splice(index, 1, value)
            return 'Operation successful'
        } else {
            throw new Error('Array is full')
        }
    },
    gradePointAvarage() {
        let summ;
        this.rating.forEach((rate) => summ = summ + rate);
        const result = summ/this.rating.length;
        return result;
    } 
    
}




const Ivan = new Student('Ivan', 'Ivanov', 1995);


let obj = {
    cool:10,
    kittycat:100
}
let result = {}; 
for(let cat in obj){
    result[cat] = obj[cat]; 
}

console.log(result)
console.log(obj === result)

console.dir(String)
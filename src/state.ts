/*
let a: number = 10
let b: string = 'hello'
let c: boolean = true

let ages: (number | string)[] = [18, '12', 19, 22, 45];
let ages1: Array<number | string | boolean> = [18, '12', 19, 22, true];
*/
interface IMan1Type {
    name: string
    height: number
}

/*

type CarType = {
    model: string
    year: number
}
*/


let man1: IMan1Type = {name: 'Dima', height: 1.78}
let man2: IMan1Type = {name: 'Sasha', height: 1.8}
//let car: CarType = {model: 'Reno ', year: 2016}

type Man3 = {
    name: string
    height: number
}

let people: Man3[] = [
    {name: 'Dima', height: 1.78},
    {name: 'Sasha', height: 1.8}
]

/*
function sum(a:number, b:number):number {
    return a + b
}*/


function toUpperCase(strings: string[]): string[] {
    let result = strings.map(s => s.toUpperCase());
    return result;
}


let createMan = ({name, height}: Man3): Man3 => {
    return {
        name,
        height
    };
}

type CarType = {
    model: string
    year: number
    on: boolean
    turnOn: () => void
    rename: (model: string) => void
}


let car: CarType = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}

type GarageType = {
    addCar: (car: CarType) => void
    logAllCarsNames: () => void
    getAllCars: () => CarType[]
}

let createGarage = (): GarageType => {
    let _cars: CarType[] = [];

    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}


export default 2
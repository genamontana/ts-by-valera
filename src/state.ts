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

type CarType = {
    model: string
    year: number
}


let man1: IMan1Type = {name: 'Dima', height: 1.78}
let man2: IMan1Type = {name: 'Sasha', height: 1.8}
let car: CarType = {model: 'Reno ', year: 2016}

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


let createMan = ({name, height}:Man3):Man3 => {
    return {
        name,
        height
    };
}



export default 1
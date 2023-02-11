/*
let a: number = 10
let b: string = 'hello'
let c: boolean = true

let ages: (number | string)[] = [18, '12', 19, 22, 45];
let ages1: Array<number | string | boolean> = [18, '12', 19, 22, true];
*/
interface Man1Type {
    name: string
    height: number
}

type CarType = {
    model: string
    year: number
}


let man1: Man1Type = {name: 'Dima', height: 1.78}
let man2: Man1Type = {name: 'Sasha', height: 1.8}
let car: CarType = {model: 'Reno ', year: 2016}


export default 1
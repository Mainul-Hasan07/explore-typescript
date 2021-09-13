interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?:string[]
}

const messi: Player = {
    name: 'L messi',
    club: 'PSG',
    salary: 50000,
    wife:'Nosimon ara Begum'
}

const hannan: Player = {
    name: 'Abdul Hannan',
    club: 'Kolabagan',
    salary: 20000,
}


interface Employee{
    name: string,
    designation: string,
    salary: number,
    age:number
}

interface Developer extends Employee{
    language: string,
    codeEditor: string,
    typingSpeed:number
}

const zuku: Developer = {
    name: 'Zukerburg',
    designation: 'usa',
    salary: 1100,
    age:31,
    language: 'js',
    codeEditor: 'vs code',
    typingSpeed: 65
}
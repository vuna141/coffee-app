export class Student {
    name: string;
    old: number;
    class: string;
    private diemso: number;

    constructor (name: string, old: number){
        this.name = name;
        this.old = old;
    }

    diHoc () {
        console.log('Di hoc')
    }

    xemDiem(pass: string) {
        if(pass)
    }
}

const angular = new Student('Q', 27);

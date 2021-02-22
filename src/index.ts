interface MapName {
    name: string;
}

export default class Map  {
    name: string;
    constructor(name:string) {
        this.name = name + 'hello!';
    }
    getName(): MapName {
        console.log(this.name)
        return {name: this.name};
    }
}
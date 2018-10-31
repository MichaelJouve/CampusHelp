export class Studient {

    public id: number;
    public name: String;
    public promo: number;
    public group?: number;

   
     // Param group is optional
    constructor(id: number, name: String, promo: number, group?: number) {
        this.name = name;
        this.promo = promo;
        this.id = id;
        this.group = group;
    }

}

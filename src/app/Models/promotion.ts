export class Promotion {

    public id?: number;
    public name: String;
    public startYear?: Date;
    public city?: String;

    constructor(name: String, startYear?: Date, id?: number, city?: String) {
        this.name = name;
        this.startYear = startYear;
        this.id = id;
        this.city = city;
    }

}

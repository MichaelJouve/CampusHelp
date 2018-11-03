export enum Status {
    toDo = 1,
    inProgress = 2,
    done = 3,
}

export class Tasks {

    public id: number;
    public title: String;
    public content: String;
    public status?: Status;
    public inCharge?: String;
    public startDate?: Date;
    public endDate?: Date;

    constructor(id: number, title: String, content: String, status?: Status, startDate?: Date, endDate?: Date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
    }
}

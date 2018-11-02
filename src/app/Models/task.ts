export enum Status {
    done,
    inProgress,
    waiting,
}

export class Task {

    public id: number;
    public title: String;
    public content: String;
    public status: Status;

     // Param group is optional
    constructor(id: number, title: String, content: String, status: Status) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
    }

}

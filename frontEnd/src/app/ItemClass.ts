export class Item {
    public userID: string;
    public imagePath: string;
    public title: string;

    constructor( userId: string,imagePath: string, title: string )
        
        {
        this.userID = userId;
        this.imagePath = imagePath;
        this.title = title; 
    }
}
export class Item {
    public id: string;
    public imagePath: string;
    public title: string;

    constructor( id: string,imagePath: string, title: string )
        
        {
        this.id = id;
        this.imagePath = imagePath;
        this.title = title; 
    }
}
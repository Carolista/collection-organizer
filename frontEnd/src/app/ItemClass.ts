export class Item {
    public imagePath: string;
    public category: string;
    public keywords: string[];
    public title: string;
    public countryCreator: string;
    public year: number;
    public condition: string;
    public media: string;
    public description: string;
    public references: string;

    constructor(imagePath: string, category: string, keywords: string[], title: string, countryCreator: string, 
        year: number, condition: string, media: string, description: string, reference: string)
        
        {
        this.imagePath = imagePath;
        this.category = category;
        this.keywords = keywords;
        this.title = title;
        this.countryCreator = countryCreator;
        this.year = year;
        this.condition = condition;
        this.media = media;
        this.description = description;
        this.references = reference; 
    }
}
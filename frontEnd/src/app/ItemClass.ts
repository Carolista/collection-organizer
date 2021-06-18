export class Item {
  public id: number;
  public title: string;
  public imagePath: string;
  public category: string;
  public subCategory: string;
  public description: string;
  public creator: string;
  public yearCreated: number;
  public placeOfOrigin: string;
  public yearAcquired: number;
  public cond: string;
  public mediaType: string;
  public refs: string;
  public user: number;

  constructor(id: number, title:string, imagePath: string, category: string, subCategory: string,
      description: string, creator: string, yearCreated: number, placeOfOrigin: string,
      yearAcquired: number, cond: string, mediaType: string, refs: string, user: number)
      
  {
    this.id = id;
    this.title = title; 
    this.imagePath = imagePath;
    this.category = category;
    this.subCategory = subCategory;
    this.description = description;
    this.creator = creator;
    this.yearCreated = yearCreated;
    this.placeOfOrigin = placeOfOrigin;
    this.yearAcquired = yearAcquired;
    this.cond = cond;
    this.mediaType = mediaType;
    this.refs = refs;
    this.user = user;
  }
}
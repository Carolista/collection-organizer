export class User {
  public userId: number
  public email: string;
  public password: string;

  //make these private and accessible only after validation using a getter: Angular course 20-298
  public token: string;
  public tokenExpiration: Date;

  constructor(userId: number, email:string, password: string, token: string, tokenExpiration: Date)
      
  {
    this.userId = userId;
    this.email = email; 
    this.password = password;
    this.token = token;
    this.tokenExpiration = tokenExpiration
  }
}
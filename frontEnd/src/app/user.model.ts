export class User {
  public email: string;
  public password: string;

  //make these private and accessible only after validation using a getter: Angular course 20-298
  public token: string;
  public tokenExpiration: string;
  //may need userId when working with auth0; find out how to make that work with resData in authentication.service
  // public userId?: number

  constructor(email:string, password: string, token: string, tokenExpiration: string)
      
  {
    this.email = email; 
    this.password = password;
    this.token = token;
    this.tokenExpiration = tokenExpiration
  }
}
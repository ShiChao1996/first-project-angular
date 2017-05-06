/*
export class User{
  userName:string;
  sex:string;
  cardId:number;
  major:string;
  grade_class:string;
}
*/
export class User{
  public name:string;
  public sex:string;
  public race:string;
  public degree:string;
  public stuId:number;
  public department:string;
  public phone:number;
  constructor(name1,sex1,race1,degree1,stuId1,department1,phone1){
    this.name = name1;
    this.sex = sex1;
    this.race = race1;
    this.degree = degree1;
    this.stuId = stuId1;
    this.department = department1;
    this.phone = phone1;
  }
}

export class Like{
   
    constructor(public likesCount:number, public isSelected:boolean){

    }
    onClick(){
      this.isSelected = !this.isSelected;
      this.likesCount += this.likesCount ? +1 : -1;
    }
  
}
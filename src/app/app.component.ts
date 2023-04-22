import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PureVsImpure';
  public searchedFood:string='';
  public detailsfood:any=[];
  public foodList:any=[
{'food_id':1001,'food':'chicken Biriyani','price':100},
{'food_id':1002,'food':'Mutton Biriyani','price':180},
{'food_id':1003,'food':'Alu Boriyani','price':80},
{'food_id':1004,'food':'Chicken Lollypop','price':90},
{'food_id':1005,'food':'Fried Rice ','price':90},
{'food_id':1006,'food':'Egg Roll','price':50},
{'food_id':1007,'food':'Chicken Egg Roll','price':60},

  ];



  addFood(){
    console.log('Add Food Item  trigered....');
   alert(' One item has been added....');
    this.foodList.push({
      'food_id':1008,
      'food':'Chicken Chaap',
      'price':100
    });
    
  }

  select(f:any){
    
    let detailsItem=f;  // here just store search object into a data member
    this.detailsfood=detailsItem; // here store above data member into array because our main list are as a array of oject
  }
}

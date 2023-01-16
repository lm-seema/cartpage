import { Component } from '@angular/core';


@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent{
  cart()
  {
    alert("You Successfully Added to your Cart!!!!!")
  }
  msg()
  {
    alert("Do You Want to Delete this???")
  }
  removemsg()
  {
    alert("Do You Really Want to Remove from this cart???")
  }

}

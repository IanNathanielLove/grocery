import { Component, Input } from '@angular/core';
import { CheckOutItem } from '../models/checkoutmodels';
import { Department } from '../models/departmentmodel';
import { GroceryAppService } from '../services/grocery_app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss']
})
export class ItemModalComponent {


  item_name : string = "";
  price: number = 0;
  upc: string ="";
  quantity: number = 0;
  department: string ="";
  inventory_dto: CheckOutItem;
  department_list: Department[] =[];
  department_dto!: Department;
  
  
  


  //inventory_dto!: CheckOutItem;
  constructor(private GroceryAppService: GroceryAppService,
    private route: ActivatedRoute,
    private router: Router,
   ){


    this.inventory_dto = new CheckOutItem;
     

  }

  ngOnInit() {
    this.getDepartments
  }




  getDepartments(){
      this.GroceryAppService.getDepartments().subscribe(
        department => {
          this.department_list = department
          console.log(department)
        }
      )
  }

  clearInput(){
    this.inventory_dto = new CheckOutItem;
  }


  addItemToInventory(){
   
    this.inventory_dto.item_name = this.item_name
    this.inventory_dto.price = this.price
    this.inventory_dto.upc = this.upc
    this.inventory_dto.quantity = this.quantity
    this.inventory_dto.department = this.department
    this.GroceryAppService.addItemToInventory(this.inventory_dto).subscribe(
      inventory =>{
        this.inventory_dto = inventory
      }
    )
  }





}

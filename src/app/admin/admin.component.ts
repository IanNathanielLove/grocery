import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Observable, observable, Subject, Subscription, takeUntil } from 'rxjs';
import { GroceryAppService } from '../services/grocery_app.service';
import { Inventory } from '../models/grocerymodel';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplateRef, ViewChild, AfterViewInit, Inject, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { CheckOutItem } from '../models/checkoutmodels';
import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*' , outline: '1px solid #000', opacity: '1'})),
      state('false', style({ height: '0px', outline: '1px solid #fff', opacity: '0'})),
      transition('false <=> true', [ animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)') ])
    ]),
    trigger('unHide', [
      state('true', style({ height: '*' ,  opacity: '1'})),
      state('false', style({ height: '0px', opacity: '0'})),
    ]
    )
  ]
})
export class AdminComponent {

  inventory?: Inventory[] = [];
  single_inventory!: Inventory;
  inventory_dto_list!: CheckOutItem[];
  inventory_dto!: CheckOutItem;
  display_view = false;
  value = '';
  inventory_amount = 0;
  upc = "";
  UPCplaceholder = "UPC"
  Deptplaceholder = "Department"
  isOpen = false;
  isHidden = true


  constructor(private GroceryAppService: GroceryAppService,
    private route: ActivatedRoute,
    private router: Router, 
   
    ){}


    ngOnInit() {}

    getInventory(){
      console.log
      this.GroceryAppService.getAllItems().subscribe(
        inventory =>{
          this.inventory_dto_list = inventory
        }
      )
    }


    addItemToInventory(inventory_dto: CheckOutItem){
      console.log(inventory_dto)
      this.GroceryAppService.addItemToInventory(inventory_dto).subscribe(
        inventory =>{
          this.inventory_dto = inventory
        }
      )
    }


    filterByDepartment(dept: string){
      this.GroceryAppService.getInventoryByDept(dept).subscribe(
        inventory =>{
          this.inventory = inventory

        }
      )
    }

    getInventoryItem(value:string){
      console.log("upcNum",value)
    
      this.GroceryAppService.getInventoryByUpc(value).subscribe(
        single_inventory =>{
          // this.single_inventory = single_inventory     
        }
      )
    }

    onEnterUpc(upc: string){
      console.log("string", upc)
      this.getInventoryItem(upc)
    }

    deleteItem(upc: string){
      console.log(upc)
      this.GroceryAppService.DeleteItem(upc).subscribe(item=>{
      this.getInventory();
   })
    }


    openModul(){
      this.display_view = true;
    }

    toggleOpen(){
      this.isOpen = !this.isOpen;
    }

    unHide(){

      this.isHidden = !this.isHidden;
    }



  







}

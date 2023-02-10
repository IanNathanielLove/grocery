import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Observable, observable, Subject, Subscription, takeUntil } from 'rxjs';
import { GroceryAppService } from '../services/grocery_app.service';
import { Inventory } from '../models/grocerymodel';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplateRef, ViewChild, AfterViewInit, Inject, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { CheckOutItem } from '../models/checkoutmodels';



@Component({
  selector: 'app-admin',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.scss']
})
export class KioskComponent {

  inventory?: CheckOutItem[] = [];
  single_inventory!: CheckOutItem;
  display_view = false;
  value = '';
  scanned_item = '';
  upc = "";
  total_price = 0;
  sum = 0;

  constructor(private GroceryAppService: GroceryAppService,
    private route: ActivatedRoute,
    private router: Router, 
   
    ){}




    getInventoryItem(value:string){

      this.GroceryAppService.getInventoryByUpc(value).subscribe(
        single_inventory =>{
          this.inventory?.push(single_inventory);
          this.inventory?.forEach(a => this.total_price += a.price);
        }
      )
    }

    onEnter(value: string){  
      this.getInventoryItem(value);
      
    }

    pay(inventory: Inventory[]){
      console.log(inventory)
      this.GroceryAppService.addToReciept(inventory).subscribe()

     }


}

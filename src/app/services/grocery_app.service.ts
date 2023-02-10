import { Injectable, LOCALE_ID } from '@angular/core';
import {concatMap, map, Observable, of, zip, tap, catchError } from 'rxjs'
import { Inventory} from '../models/grocerymodel';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CheckOutItem } from '../models/checkoutmodels';
import { Department } from '../models/departmentmodel';


@Injectable({
  providedIn: 'root'
})


export class GroceryAppService {
  handleError: any;

  constructor(private http:HttpClient) { }
  private groceryUrl = 'http://localhost:5046/Grocery';


  // getInventory():Observable<CheckOutItem[]>{

  //   return this.http.get(`${this.groceryUrl}/GetAllInventory`).pipe(
  //     map((data: any) => {
  //     let inventoryList: CheckOutItem[] = []
  //     data.forEach((p: any )=> {        
  //       inventoryList.push(inventory)
  //     }
  //     )
  //     console.log("InventoryList", inventoryList);
  //     return inventoryList 
  //   }))
  // }



  getInventoryByDept(dept: string):Observable<Inventory[]>{

    return this.http.get(`${this.groceryUrl}/GetAllInventoryByDept/`+ dept).pipe(
      map((data: any) => {
      let inventoryList: Inventory[] = []
      data.forEach((p: any )=> {

        let inventory = new Inventory(p.itemName, p.price, p.TaxId, p.InventoryAmount, p.DeptId, p.Upc);
        
        inventoryList.push(inventory)
      }
      )
      console.log("InventoryListbyDept", inventoryList);
      return inventoryList 
    }))
  }


  getInventoryByUpc(upc: string):Observable<CheckOutItem>{

    return this.http.get<CheckOutItem>(`${this.groceryUrl}/GetItemDto/`+ upc);
  }


  getAllItems():Observable<CheckOutItem[]>{
    return this.http.get<CheckOutItem[]>(`${this.groceryUrl}/GetAllInventory`);

  }

  getDepartments():Observable<Department[]>{
   
    return this.http.get<Department[]>(`${this.groceryUrl}/GetAllDepartments`);
  }


  addInventoryAmount<Inventory>(inventory: Inventory){
    
   
    return this.http.post<Inventory>(`${this.groceryUrl}/ChangeInventoryAmount/`, Inventory)
    .pipe(
      catchError(this.handleError('addInventory'))
    );

  }



  addToReciept(inventory: Inventory[]):Observable<Inventory[]>{

    return this.http.post<Inventory[]>(`${this.groceryUrl}/Checkout`, inventory)


  }


  addItemToInventory(checkout_item: CheckOutItem): Observable<CheckOutItem>{
    console.log("additem", checkout_item)
    return this.http.post<CheckOutItem>(`${this.groceryUrl}/AddItemToInventory/`, checkout_item);

  }






  DeleteItem (upc : string):Observable<string>{
    
    return this.http.delete<string>(this.groceryUrl + `/DeleteItem/`+ upc);
  }



}
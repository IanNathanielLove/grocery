
export class Inventory{

    item_name: string;
    price: number;
    tax_id: number;
    inventory_amount: number;
    dept_id: number;
    upc: string;


    constructor(item_name: string, price: number, tax_id: number, inventory_amount: number,
        dept_id: number, upc: string){

        this.item_name= item_name;
        this.price = price;
        this.tax_id = tax_id;
        this.inventory_amount = inventory_amount;
        this.dept_id = dept_id;
        this.upc = upc;

    }

}


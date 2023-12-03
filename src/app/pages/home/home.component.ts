import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { RaquetasService } from 'src/app/services/raquetas.service';

const ROW_HEIGHT: { [id:number]: number } = { 1:400, 3:350, 4:350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent  {

  cols = 3;
  rowHeight = ROW_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort="desc";
  count=12;
  productSub:Subscription | undefined;


  constructor(private cartService: CartService,private raquetaService:RaquetasService) {
    this.searchRaqueta();
  }
/*
  ngOnInit():void{
    this.getProducts();
  }*/
  public get Products () :Product[]{
    return this.raquetaService.raquetas;
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }



public getProducts () :void{
    this.productSub=this.raquetaService.getRaquetasFromDB().subscribe((raquetas) => {
      this.products = raquetas;
    });
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
  onItemsCountChange(newCount:number):void{
    this.count = newCount;
    this.getProducts();
  }
  onSortChange(newSort:string):void{
    this.sort = newSort;
    this.getProducts();
  }

  private searchRaqueta(searchTerm: string = ""): void {
    this.raquetaService.fetchRaquetasFromApi(searchTerm).subscribe(
      {
        next: (response: any) => {
          console.log(response);
          this.raquetaService.raquetas = response.raquetaList;
        },
        error: (error: any) => {
          console.log(error);
        },
      }
    )
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}

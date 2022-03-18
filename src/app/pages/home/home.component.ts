import { Component, OnInit } from '@angular/core';
import { IResult } from 'src/app/interfaces/service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public products: IResult[] = [];

    constructor(private _productsService: ProductsService) {}

    ngOnInit(): void {
        this._productsService.getProducts().subscribe((products) => {
            this.products = products;
        });
    }
}

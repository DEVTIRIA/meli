import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductsService } from 'src/app/services/products.service';
import { IResult } from 'src/app/interfaces/service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    public products: IResult[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private _productsService: ProductsService,
        private title: Title
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.products = [];

            if (params.cat) {
                this.title.setTitle(params.cat);
                this._productsService.getProducts(params.cat).subscribe((products) => (this.products = products));
            } else {
                this.title.setTitle(params.search);
                const term = new RegExp(params.search, 'i');
                this._productsService.getProductsByTerm(term).subscribe((products) => (this.products = products));
            }
        });
    }
}

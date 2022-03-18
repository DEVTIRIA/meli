import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IResult } from 'src/app/interfaces/service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
    public product!: IResult;

    constructor(private activatedRoute: ActivatedRoute, private _productsService: ProductsService) {}

    ngOnInit(): void {
        const pid = this.activatedRoute.snapshot.paramMap.get('id') || '';

        this._productsService.getProductByID(pid).subscribe((product) => {
            this.product = product;
        });
    }
}

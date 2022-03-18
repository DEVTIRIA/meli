import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IResult } from 'src/app/interfaces/service';

@Component({
    selector: 'app-product-single',
    templateUrl: './product-single.component.html',
    styleUrls: ['./product-single.component.scss'],
})
export class ProductSingleComponent implements OnInit {
    @Input() product!: IResult;
    public description: string = '';

    constructor(private activatedRoute: ActivatedRoute, private _productsService: ProductsService) {}

    ngOnInit(): void {
        const pid = this.activatedRoute.snapshot.paramMap.get('id') || '';

        this._productsService.getDescription(pid).subscribe((description) => {
            this.description = description;
        });
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Pathfromroot } from 'src/app/interfaces/categories';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
    @Input() categoryID: string = '';
    public categories: Pathfromroot[] = [];

    constructor(private _productsService: ProductsService) {}

    ngOnInit(): void {
        this._productsService
            .getCategoryByID(this.categoryID)
            .subscribe((categories) => (this.categories = categories));
    }
}

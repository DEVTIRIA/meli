import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() products: Result[] = [];

    constructor() {}

    ngOnInit(): void {}
}

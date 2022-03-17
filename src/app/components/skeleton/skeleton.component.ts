import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skeleton',
    templateUrl: './skeleton.component.html',
    styleUrls: ['./skeleton.component.scss', '../product/product.component.scss'],
})
export class SkeletonComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

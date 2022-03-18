import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from '../pages/pages-routing.module';

import { SearchComponent } from './search/search.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { ProductComponent } from './product/product.component';
import { SkeletonSingleComponent } from './skeleton-single/skeleton-single.component';
import { ProductSingleComponent } from './product-single/product-single.component';

@NgModule({
    declarations: [
        SearchComponent,
        SkeletonComponent,
        SkeletonSingleComponent,
        ProductComponent,
        ProductSingleComponent,
    ],
    imports: [CommonModule, PagesRoutingModule],
    exports: [SearchComponent, SkeletonComponent, SkeletonSingleComponent, ProductComponent, ProductSingleComponent],
})
export class ComponentsModule {}

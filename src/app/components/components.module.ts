import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from '../pages/pages-routing.module';

import { SearchComponent } from './search/search.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { ProductComponent } from './product/product.component';

@NgModule({
    declarations: [SearchComponent, SkeletonComponent, ProductComponent],
    imports: [CommonModule, PagesRoutingModule],
    exports: [SearchComponent, SkeletonComponent, ProductComponent],
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [ProductListComponent, ProductDetailComponent, HomeComponent],
    imports: [CommonModule, PagesRoutingModule, SharedModule, ComponentsModule],
})
export class PagesModule {}

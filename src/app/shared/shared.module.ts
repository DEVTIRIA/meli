import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [HeaderComponent, BreadcrumbComponent, FooterComponent],
    imports: [ComponentsModule, RouterModule, CommonModule],
    exports: [HeaderComponent, BreadcrumbComponent, FooterComponent],
})
export class SharedModule {}

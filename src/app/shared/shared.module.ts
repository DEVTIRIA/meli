import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [HeaderComponent, BreadcrumbComponent],
    imports: [ComponentsModule, RouterModule, CommonModule],
    exports: [HeaderComponent, BreadcrumbComponent],
})
export class SharedModule {}

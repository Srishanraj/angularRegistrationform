import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { SidebarComponent } from '@app/layout/sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,

    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent,
        SidebarComponent
    ],
    exports : [
        SidebarComponent

    ]
})
export class UsersModule { }
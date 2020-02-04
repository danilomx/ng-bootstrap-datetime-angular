import { NgModule } from '@angular/core';
import { NgBootstrapDatetimeAngularComponent } from './ng-bootstrap-datetime-angular.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NgBootstrapDatetimeAngularComponent],
  imports: [
    FormsModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [NgBootstrapDatetimeAngularComponent]
})
export class NgBootstrapDatetimeAngularModule { }

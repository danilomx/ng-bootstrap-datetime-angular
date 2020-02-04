# ng-bootstrap-datetime-angular

# Angular Date Time Picker

[![npm](https://img.shields.io/npm/v/ng-bootstrap-datetime-angular.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/ng-bootstrap-datetime-angular)
[![npm](https://img.shields.io/npm/dm/ng-bootstrap-datetime-angular.svg)](https://www.npmjs.com/package/ng-bootstrap-datetime-angular)

**This package supports Angular 8**

Description

---

This picker is responsive design, so feel free to try it in your desktops, tablets and mobile devices.

## Dependencies
[@ng-bootstrap/ng-bootstrap ^1.0.0](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap)

[moment ^2.24.0](https://www.npmjs.com/package/moment)

[bootstrap ^4.0.0](https://www.npmjs.com/package/bootstrap)

## Live Demo
[https://ng-bootstrap-datetime-angular.stackblitz.io](https://stackblitz.com/edit/ng-bootstrap-datetime-angular)

## How to Use

1.  Install with [npm](https://www.npmjs.com):`npm install ng-bootstrap-datetime-angular --save`

2.  Add NgBootstrapDatetimeAngularModule to your **@NgModule** like example below

    ```typescript
    import { BrowserModule } from "@angular/platform-browser";
    import { NgModule } from "@angular/core";

    import { AppComponent } from "./app.component";
    import { FormsModule, ReactiveFormsModule } from "@angular/forms";
    import { CommonModule } from "@angular/common";

    import { NgBootstrapDatetimeAngularModule } from "ng-bootstrap-datetime-angular";

    @NgModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgBootstrapDatetimeAngularModule,
        CommonModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {}
    ```

3.  Add your input into **form** like example below

    ```html
    <form>
      <div [formGroup]="formGroup">
        <ng-bootstrap-datetime-angular
          inputDatetimeFormat="dd/MM/yyyy hh:mm a"
          formControlName="activeEndDate"
          name="activeEndDate"
        ></ng-bootstrap-datetime-angular>
      </div>
    </form>
    ```

4.  Connect to your __component__

    ```typescript
    import { Component, OnInit } from "@angular/core";
    import { FormGroup, FormControl, Validators } from "@angular/forms";

    @Component({
      selector: "app-root",
      templateUrl: "./app.component.html",
      styleUrls: ["./app.component.scss"]
    })
    export class AppComponent implements OnInit {
      title = "Date";
      formGroup: FormGroup;

      ngOnInit() {
        this.formGroup = new FormGroup({
          activeEndDate: new FormControl(null, {
            validators: [Validators.required]
          })
        });
      }
    }
    ```

License
-------
* License: MIT

Author
-------
**Danilo Meneses Loaisiga**

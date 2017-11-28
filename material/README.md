# Material

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* commands:
* npm install --save @angular/material @angular/cdk
* npm install --save @angular/animations
* npm install --save hammerjs

### error-handling:

* cannot read property:
* can be resolved through adding property in form.component.ts
```
    import { Component, OnInit } from '@angular/core';
    import { Address } from '../address';

    @Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
    })
    export class FormComponent implements OnInit {

    address = new Address();

    constructor() { }

    ngOnInit() {
    }

    }

```
![alt-text](images.cannotreadproperty.png)
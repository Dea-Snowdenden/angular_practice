import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { MatInputModule, MatButtonModule } from '@angular/material';

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

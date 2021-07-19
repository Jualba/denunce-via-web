import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'agid-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input() id: string;
  @Input() placeholder: string;

  control: FormControl

  @Input('control') set _control(value: AbstractControl) { this.control = value as FormControl }

  constructor() { }


  ngOnInit(): void { }

}

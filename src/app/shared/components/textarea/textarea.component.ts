import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'agid-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Input() note: string;
  @Input() required: string;
  @Input() min: number;
  @Input() max: number;
  @Input() rows: number;
  @Input() readonly: boolean;
  @Input() info: boolean = false;
  @Input() titlePopover: string;
  @Input() textPopover: string;

  control: FormControl
  @Input('control') set _control(value: AbstractControl)
  { this.control = value as FormControl }

  constructor() {
    this.id = 'textarea' + Math.floor(Math.random()*1000);
    this.note = 'Inserisci';
    this.rows = 3;
  }

  ngOnInit(): void {
    $('[data-toggle="popover"]').popover({
      container: 'body'
    });
  }
}

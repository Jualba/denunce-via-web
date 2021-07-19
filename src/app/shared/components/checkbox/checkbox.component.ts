import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'agid-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() id: string;
  @Input() label: string;
  @Input() layout: string;
  @Input() disable: boolean;
  @Input() description: string;
  @Input() message: string;
  @Input() required: string;
  @Input() info: boolean = false;
  @Input() titlePopover: string;
  @Input() textPopover: string;
  @Input() checked: boolean = false;

  control: FormControl

  @Input('control') set _control(value: AbstractControl) { this.control = value as FormControl }

  class: string;

  constructor() { }

  ngOnInit(): void {
    if (this.layout === 'inline') {
      this.class = 'form-check form-check-inline';
      this.description = '';
      this.message = '';
    }
    else if (this.layout === 'group') {
      this.class = 'form-check form-check-group';
    }
    else {
      this.class = 'form-check';
    }
    $('[data-toggle="popover"]').popover({
      container: 'body'
    });
  }

}

import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'agid-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, AfterViewChecked {

  @Input() id: string;
  @Input() label: string;
  @Input() note: string;
  @Input() type: string;
  @Input() required: string;
  @Input() min: number;
  @Input() max: number;
  @Input() readonly: boolean;
  @Input() info: boolean = false;
  @Input() titlePopover: string;
  @Input() textPopover: string;

  control: FormControl
  @Input('control') set _control(value: AbstractControl)
  { this.control = value as FormControl }

  /* Per disabilitare l’input impostare come disabled il FormControl in questo modo:
  *  {email: [{value: 'nome.cognome@mail.com', disabled: true}, [Validators.required, Validators.email]]}
  */

  constructor() {
    this.id = 'input' + Math.floor(Math.random()*1000);
    this.note = 'COMPONENT.INPUT.INSERISCI';
    this.type = 'text';
  }

  ngOnInit(): void {
    $('[data-toggle="popover"]').popover({
      container: 'body'
    });
  }

  ngAfterViewChecked(): void {
    $('label').width('auto');
  }

}

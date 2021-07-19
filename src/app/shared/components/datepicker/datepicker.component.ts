import { formatDate } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'agid-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit, OnChanges {


  @Input() id: string;
  @Input() label: string;
  @Input() note: string;
  @Input() placeholder: string;
  @Input() required: string;
  @Input() min: string | Date;
  @Input() max: string | Date;
  @Input() dark: string;
  @Input() disabled: boolean;
  @Input() info: boolean = false;
  @Input() titlePopover: string;
  @Input() textPopover: string;

  control: FormControl
  @Input('control') set _control(value: AbstractControl)
  { this.control = value as FormControl }

  dateFormat: string;
  cancel: boolean = false;

  constructor() {
    this.id = 'datepicker' + Math.floor(Math.random()*1000);
    this.note = 'COMPONENT.SELECT';
    this.placeholder = 'COMPONENT.DATEPICKER.SELEZIONA_DATA';
    this.dateFormat = 'dd/MM/yyyy';
  }

  ngOnInit(): void {
    $(document).ready(() => {
      const idDateP = $(`#${this.id}`);
      idDateP.datepicker({
        inputFormat: [this.dateFormat],
        outputFormat: this.dateFormat
      });

      if (this.min) { this.setMinValue(this.min); }
      if (this.max) { this.setMaxValue(this.max); }
      this.setDisabled(this.disabled || this.control.disabled);
      this.control.statusChanges.subscribe(() => this.setDisabled(this.disabled || this.control.disabled));

      idDateP.on('change', () => {
        if (idDateP !== '' && idDateP !== null )
        { this.note = 'COMPONENT.DATEPICKER.CANCELLA_DATA';
          this.cancel = true;
        }
        else
        { this.note = 'COMPONENT.SELECT';
          this.cancel = false;
        }
        this.updateValue();
      });

      setTimeout(() => {
        const val = $(`#${this.id}`).val();
        if (  val !== '' && val !== null )
        { this.note = 'COMPONENT.DATEPICKER.CANCELLA_DATA';
          this.cancel = true;
        }
        else
        { this.note = 'COMPONENT.SELECT';
          this.cancel = false;
        }
      }, 200);

    });
    $('[data-toggle="popover"]').popover({
      container: 'body'
    });
  }

  cancelDate(): void {
    this.note = 'COMPONENT.SELECT';
    this.cancel = false;
    $(`#${this.id}`).val('');
    this.control.setValue('');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.min && !changes.min.isFirstChange() && changes.min.currentValue) {
      this.setMinValue(changes.min.currentValue);
    }
    if (changes.max && !changes.max.isFirstChange() && changes.max.currentValue) {
      this.setMaxValue(changes.max.currentValue);
    }
    if (changes.disabled && !changes.disabled.isFirstChange()) {
      this.setDisabled(changes.disabled.currentValue);
    }
  }

  updateValue(): void {
    const date = $(`#${this.id}`).datepicker('getDate');
    const formattedDate = formatDate(date, this.dateFormat, 'it-IT');
    this.control.setValue(formattedDate);
  }

  setMinValue(min: string | Date): void {
    const date = this.getDateValue(min);
    if (date.current && date.current < date.limit) { this.control.setValue(''); }
    $(`#${this.id}`).datepicker('min', date.value);
  }

  setMaxValue(max: string | Date): void {
    const date = this.getDateValue(max);
    if (date.current && date.current > date.limit) { this.control.setValue(''); }
    $(`#${this.id}`).datepicker('max', date.value);
  }

  getDateValue(value): any {
    let date: Date;
    if (value instanceof Date) {
      date = value;
    }
    else if (value === 'today' || value === 'oggi') {
      date = new Date();
      value = date.toLocaleDateString('it-IT', {year: 'numeric', month: '2-digit', day: '2-digit'});
    }
    const limit = date || this.stringToDate(value);
    const current = $(`#${this.id}`).datepicker('getDate');
    return {current, limit, value};
  }

  stringToDate(date: string): Date {
    const [giorno, mese, anno] = date.split('/');
    const [d, m, y] = [giorno, mese, anno].map(v => Number(v));
    return new Date(y, (m - 1), d);
  }

  setDisabled(isDisabled: boolean): void {
    if (isDisabled) { $(`#${this.id}`).datepicker('disable'); }
    else { $(`#${this.id}`).datepicker('enable'); }
  }

}

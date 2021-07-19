import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'agid-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, OnChanges, OnDestroy {

  @Input() id: string;
  @Input() title: string;
  @Input() label: string;
  @Input() note: string;
  @Input() type: string;
  @Input() required: string;
  @Input() optionName: string;
  @Input() noEmptyOption: boolean = false;
  @Input() info: boolean = false;
  @Input() titlePopover: string;
  @Input() textPopover: string;
  @Input() options: any[] = [];

  control: FormControl
  @Input('control') set _control(value: AbstractControl)
  { this.control = value as FormControl }

  destroy$ = new Subject<boolean>();
  class: string;
  constructor() {
    this.id = 'select' + Math.floor(Math.random()*1000);
    this.note = 'Seleziona';
    this.type = 'select';
    this.title = 'COMMON.SCEGLI_OPZIONE';
    this.class = 'bootstrap-select-wrapper form-group';
  }

  ngOnInit(): void {
    this.control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const select = $(`#${this.id}`);
      select.selectpicker('refresh').on('changed.bs.select', this.onSelectChange());
    });
    $('[data-toggle="popover"]').popover({
      container: 'body'
    });
  }

  onSelectChange = () => {
    $('.dropdown-menu li.selected')
      .find('input[type="checkbox"]')
      .prop('checked', true);
    $('.dropdown-menu li:not(.selected)')
      .find('input[type="checkbox"]')
      .prop('checked', false);
    const button = $(`#${this.id}`).parent().find('button');
    button.attr('aria-disabled', this.control.disabled);
    this.control.disabled ? button.addClass('disabled') : button.removeClass('disabled');
    return false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options?.currentValue) {
      $(document).ready(() => {
        const optionsList = changes.options.currentValue;
        const select = $(`#${this.id}`);
        const selectWrapper = select.parent();
        const options = optionsList.map((option: any) =>
          ({ value: this.mapToOptionStringId(option), text: this.mapToOptionString(option) })
        );
        if (!this.noEmptyOption) { options.unshift({ value: '', text: '-' }); }
        selectWrapper.setOptionsToSelect(options);

        setTimeout(() => {
          select.find('option').each((index: number, option: any) => {
            const i = option.liIndex >= 0 ? this.noEmptyOption ? option.liIndex : option.liIndex - 1 : -1;
            if (i >= 0 && optionsList.length) {
              option.setAttribute('data-codice', optionsList[i]?.codice);
            }
          });
          if (this.control && optionsList.length) {
            select.selectpicker('val', this.control.value);
            select.selectpicker('refresh');
          }
        }, 200);

      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  mapToOptionString(option: any): string {
    this.optionName = this.optionName || 'descrizione';
    return typeof option === 'string'
      ? option
      : this.mapObjToOptionString(option, this.optionName);
  }

  mapObjToOptionString = (option: any, optionName: string): string =>
    Object.entries(option)
      .filter(([key]) => key === optionName)
      .reduce(
        (acc, [key, val], idx, src) =>
          acc + val + (idx < src.length - 1 ? ', ' : ''),
        ''
      )

  mapToOptionStringId(option: any): string {
    return typeof option === 'string' ? option : this.mapObjToOptionStringId(option);
  }

  mapObjToOptionStringId = (option: any): string =>
    Object.entries(option)
      .filter(([key]) => key === 'id')
      .reduce(
        (acc, [key, val], idx, src) =>
          acc + val + (idx < src.length - 1 ? ', ' : ''),
        ''
      )

}

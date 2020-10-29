import {
  Component,
  OnInit,
  Input,
  forwardRef,
  ViewChild,
  AfterViewInit,
  Injector
} from '@angular/core';
import {
  NgbTimeStruct,
  NgbDateStruct,
  NgbPopoverConfig,
  NgbPopover,
  NgbDatepicker
} from '@ng-bootstrap/ng-bootstrap';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  NgControl
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { noop } from 'rxjs';
import { IfStmt } from '@angular/compiler';
import * as moment_ from 'moment';

const moment = moment_;
@Component({
  selector: 'ng-bootstrap-datetime-angular',
  templateUrl: './ng-bootstrap-datetime-angular.component.html',
  styles: [],
  providers: [
    DatePipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgBootstrapDatetimeAngularComponent),
      multi: true
    }
  ]
})
export class NgBootstrapDatetimeAngularComponent  implements ControlValueAccessor, OnInit, AfterViewInit {

  @Input()
  inputDatetimeFormat = 'd/M/yyyy H:mm:ss';
  @Input()
  placeholder: string = "";
  @Input()
  hourStep = 1;
  @Input()
  minuteStep = 15;
  @Input()
  secondStep = 30;
  @Input()
  seconds = true;

  @Input()
  disabled = false;

  @ViewChild(NgbDatepicker, { static: false })
  private dp: NgbDatepicker;

  @ViewChild(NgbPopover, { static: false })
  private popover: NgbPopover;

  private onTouched: () => void = noop;
  private onChange: (_: any) => void = noop;

  public ngControl: NgControl;

  dateStruct: NgbDateStruct;
  timeStruct: NgbTimeStruct;
  date: Date;

  constructor(private config: NgbPopoverConfig, private inj: Injector) {
    config.autoClose = 'outside';
    config.placement = 'auto';
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.ngControl = this.inj.get(NgControl);
  }

  ngAfterViewInit(): void {
  }

  writeValue(newModel: string) {
    if (newModel) {
      const myDate = moment(newModel).toDate();

      this.dateStruct = {
        year: myDate.getFullYear(),
        month: myDate.getMonth() + 1,
        day: myDate.getDate()
      };

      this.timeStruct = {
        hour: myDate.getHours(),
        minute: myDate.getMinutes(),
        second: myDate.getSeconds()
      };

      this.setDateStringModel();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange($event: any) {}

  onDateChange(event: NgbDateStruct) {
    this.setDateStringModel();
  }

  onTimeChange(event: NgbTimeStruct) {
    this.setDateStringModel();
  }

  setDateStringModel() {
    if (!this.timeStruct) {
      const dateA = new Date();
      this.timeStruct = {
        hour: dateA.getHours(),
        minute: dateA.getMinutes(),
        second: dateA.getSeconds()
      };
    }

    if (this.dateStruct) {
      this.date = new Date(
        this.dateStruct.year,
        this.dateStruct.month - 1,
        this.dateStruct.day,
        this.timeStruct.hour,
        this.timeStruct.minute,
        this.timeStruct.second
      );

      this.onChange(this.date);
    }
  }

  inputBlur($event) {
    this.onTouched();
  }

}

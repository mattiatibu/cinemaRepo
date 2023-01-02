import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment from 'moment'

export class DataValidator {

  minDate: any;

  maxDate: any;



  static NascitaValidator(source: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const valido=moment(sourceCtrl.value).isBefore(moment()) && moment(sourceCtrl.value).isAfter(moment().subtract(100,'years'))

      return sourceCtrl && valido
        ? { invalid: true }
        : null;
    };
  }
}

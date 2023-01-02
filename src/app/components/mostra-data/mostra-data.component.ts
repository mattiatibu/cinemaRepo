import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-mostra-data',
  templateUrl: './mostra-data.component.html',
  styleUrls: ['./mostra-data.component.scss']
})
export class MostraDataComponent implements OnInit {

  dataInserita:Date;
  constructor() { }

  minDate: Date;

  maxDate: Date;

  it: any;

  invalidDates: Array<Date>;

  ngOnInit() {
    this.it = {
      firstDayOfWeek: 1,
      dayNames: [
        'domenica',
        'lunedì',
        'martedì',
        'mercoledì',
        'giovedì',
        'venerdì',
        'sabato',
      ],
      dayNamesShort: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
      dayNamesMin: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
      monthNames: [
        'gennaio',
        'febbraio',
        'marzo',
        'aprile',
        'maggio',
        'giugno',
        'luglio',
        'agosto',
        'settembre',
        'ottobre',
        'novembre',
        'dicembre',
      ],
      monthNamesShort: [
        'gen',
        'feb',
        'mar',
        'apr',
        'mag',
        'giu',
        'lug',
        'ago',
        'set',
        'ott',
        'nov',
        'dic',
      ],
      today: 'Oggi',
      clear: 'Cancellare',
    };

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

}

import { FilterDate } from './../../interface/filter-date';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  filters: FilterDate[];
  selectedDate: string;

  constructor() { }

  ngOnInit() {
    this.getFilters();
  }

  // get filters value, text to display
  getFilters() {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date();
    this.filters = [];
    this.selectedDate = this.dateToString(date);

    for (let i = 0; i < 7; i++) {
      this.filters.push({ date: this.dateToString(date), day:  i === 0 ? 'Today' : weekday[date.getDay()] });
      date.setDate(date.getDate() + 1);
    }
  }

  // change filter
  changeFilter(date: string) {
    this.selectedDate = date;
  }

  // date to string mm/dd/yyyy
  private dateToString(date: Date): string {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }
}

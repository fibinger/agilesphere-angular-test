import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @Output() searchTriggered = new EventEmitter();
  city: string;

  constructor() { }

  search() {
    this.searchTriggered.emit(this.city);
  }
}

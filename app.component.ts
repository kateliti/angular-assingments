import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() public oddNumbers: number[] = [];
  @Output() public evenNumbers: number[] = [];

  onIntervalStart(intervalStartNumber: number) {
    if (intervalStartNumber % 2 === 0) {
      this.evenNumbers.push(intervalStartNumber);
    }
    else {
      this.oddNumbers.push(intervalStartNumber);
    }
  }
}


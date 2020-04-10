import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() public intervalStart = new EventEmitter<number>();

  public intervalNumber;
 
  public lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    this.intervalNumber = setInterval(() => {
      this.intervalStart.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onGameStop(){
    clearInterval(this.intervalNumber);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .fifthelement{
    color:white;
  }
  `]
})
export class AppComponent {

  public displayDetails: boolean = false;
  public passwordDetails: number[] = [];
  public timestamp = Number();
  public backgroundColor: string[] = [];
  public color = ''

  onClick() {
    this.displayDetails = true;
    this.passwordDetails.push(new Date().getTime());
    console.log(this.passwordDetails);
  }

  getBackColor() {
    let i;
    for (i = 0; this.passwordDetails.length > 4; i++) {
      return this.backgroundColor[i] = 'lightblue'
    }

  }
}

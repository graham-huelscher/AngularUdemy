import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .white{
    color: white;
  }`]
})
export class AppComponent {
  clicks = [];
  display = false

  onClick() {
    this.display = !this.display;
    this.clicks.push(this.clicks.length+1)
  }
}

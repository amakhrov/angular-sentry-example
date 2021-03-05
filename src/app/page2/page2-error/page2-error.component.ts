import { Component } from '@angular/core';

@Component({
  selector: 'app-page2-error',
  templateUrl: './page2-error.component.html',
  styleUrls: ['./page2-error.component.css']
})
export class Page2ErrorComponent {
  triggerError(): void {
    throw new Error('page 2 error');
  }
}

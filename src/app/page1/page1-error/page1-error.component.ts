import { Component } from '@angular/core';

@Component({
  selector: 'app-page1-error',
  templateUrl: './page1-error.component.html',
  styleUrls: ['./page1-error.component.css']
})
export class Page1ErrorComponent {
  triggerError(): void {
    throw new Error('page 1 (v3) error');
  }

  unusedButWhatever(): void {
    alert('1');
  }
}

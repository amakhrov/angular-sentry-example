import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-error',
  templateUrl: './shared-error.component.html',
  styleUrls: ['./shared-error.component.css']
})
export class SharedErrorComponent {

  triggerError(): void {
    throw new Error('shared error');
  }
}

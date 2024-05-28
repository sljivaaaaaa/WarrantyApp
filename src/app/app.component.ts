// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WarrantyListComponent } from './warranty-list/warranty-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DatePipe, WarrantyListComponent, FormsModule],
  template: `
  
    <app-warranty-list></app-warranty-list>
  `,
  providers: [DatePipe]
})
export class AppComponent {
  today = new Date();
  title: any;
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Warranty } from '../warranty.model';  
import { WarrantyService } from '../warranty.service';

@Component({
  selector: 'app-warranty-list',
  templateUrl: './warranty-list.component.html',
  styleUrls: ['./warranty-list.component.css'],
  imports: [CommonModule, FormsModule],  // Add FormsModule here
  standalone: true
})
export class WarrantyListComponent implements OnInit {
  warranties: Warranty[] = [];
  filteredWarranties: Warranty[] = [];
  searchTerm: string = '';

  constructor(private warrantyService: WarrantyService) { }

  ngOnInit(): void {
    this.warranties = this.warrantyService.getWarranties();
    this.filteredWarranties = this.warranties;
  }

  search(): void {
    if (!this.searchTerm) {
      this.filteredWarranties = this.warranties;
    } else {
      this.filteredWarranties = this.warranties.filter(warranty =>
        warranty.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        warranty.serialNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        warranty.manufacturer.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        warranty.model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}

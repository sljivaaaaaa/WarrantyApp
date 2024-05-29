import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'; 
import { Warranty } from '../warranty.model';  
import { WarrantyService } from '../warranty.service';

@Component({
  selector: 'app-warranty-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule], 
  templateUrl: './warranty-list.component.html',
  styleUrls: ['./warranty-list.component.css']
})
export class WarrantyListComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'serialNumber', 'manufacturer', 'model', 'purchaseDate', 'warrantyInYears', 'extraCare'];
  dataSource: Warranty[] = []; 
  searchTerm: string = '';

  constructor(private warrantyService: WarrantyService) { }

  ngOnInit(): void {
    this.loadWarranties();
  }

  loadWarranties(): void {
    this.dataSource = this.warrantyService.getWarranties();
  }

  search(): void {
    if (!this.searchTerm) {
      this.loadWarranties();
    } else {
      this.dataSource = this.dataSource.filter((warranty: Warranty) => 
        warranty.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        warranty.serialNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        warranty.manufacturer.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        warranty.model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}

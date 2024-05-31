import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Warranty } from '../warranty.model';
import { WarrantyService } from '../warranty.service';

@Component({
  selector: 'app-warranty-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  templateUrl: './warranty-list.component.html',
  styleUrls: ['./warranty-list.component.css']
})
export class WarrantyListComponent implements OnInit {
  displayedColumns: string[] = ['fullName', 'serialNumber', 'manufacturer', 'model', 'purchaseDate', 'warrantyInYears', 'extraCare'];
  dataSource: Warranty[] = [];
  filteredDataSource: Warranty[] = [];
  expandSearch: boolean = false;
  generalSearchTerm: string = '';
  searchParams = {
    fullName: '',
    serialNumber: '',
    manufacturer: '',
    model: '',
    purchaseDate: '',
    warrantyInYears: '',
    extraCare: ''
  };

  constructor(private warrantyService: WarrantyService) { }

  ngOnInit(): void {
    this.dataSource = this.warrantyService.getWarranties();
    this.filteredDataSource = this.dataSource;
  }

  performSearch(): void {
    this.filteredDataSource = this.dataSource.filter(warranty => {
      return (!this.searchParams.fullName || warranty.fullName.toLowerCase().includes(this.searchParams.fullName.toLowerCase())) &&
             (!this.searchParams.serialNumber || warranty.serialNumber.toLowerCase().includes(this.searchParams.serialNumber.toLowerCase())) &&
             (!this.searchParams.manufacturer || warranty.manufacturer.toLowerCase().includes(this.searchParams.manufacturer.toLowerCase())) &&
             (!this.searchParams.model || warranty.model.toLowerCase().includes(this.searchParams.model.toLowerCase())) &&
             (!this.searchParams.purchaseDate || new Date(warranty.purchaseDate).toLocaleDateString().includes(new Date(this.searchParams.purchaseDate).toLocaleDateString())) &&
             (!this.searchParams.warrantyInYears || warranty.warrantyInYears.toString().includes(this.searchParams.warrantyInYears)) &&
             (this.searchParams.extraCare === '' || warranty.extraCare.toString() === this.searchParams.extraCare);
    });
  }

  performGeneralSearch(): void {
    this.filteredDataSource = this.dataSource.filter(warranty => {
      const searchTerm = this.generalSearchTerm.toLowerCase();
      return warranty.fullName.toLowerCase().includes(searchTerm) ||
             warranty.serialNumber.toLowerCase().includes(searchTerm) ||
             warranty.manufacturer.toLowerCase().includes(searchTerm) ||
             warranty.model.toLowerCase().includes(searchTerm) ||
             new Date(warranty.purchaseDate).toLocaleDateString().includes(searchTerm) ||
             warranty.warrantyInYears.toString().includes(searchTerm) ||
             warranty.extraCare.toString().includes(searchTerm);
    });
  }
}

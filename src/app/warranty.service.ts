import { Injectable } from '@angular/core';
import { Warranty } from './warranty.model';

@Injectable({
  providedIn: 'root'
})
export class WarrantyService {
  private warranties: Warranty[] = [
    { fullName: 'John Doe', serialNumber: '758294', manufacturer: 'Xx Corp', model: 'ABC', purchaseDate: new Date(2020, 1, 1), warrantyInYears: 2, extraCare: true },
    { fullName: 'Alice Smith', serialNumber: '862935', manufacturer: 'YY Corp', model: 'DEF', purchaseDate: new Date(2020, 2, 1), warrantyInYears: 3, extraCare: false },
    { fullName: 'Bob Johnson', serialNumber: '123456', manufacturer: 'XZZ Corp', model: 'GHI', purchaseDate: new Date(2020, 3, 1), warrantyInYears: 1, extraCare: true },
    { fullName: 'Carol Lee', serialNumber: '654321', manufacturer: 'XYZ Corp', model: 'JKL', purchaseDate: new Date(2020, 4, 1), warrantyInYears: 2, extraCare: false },
    { fullName: 'David Black', serialNumber: '987650', manufacturer: 'XYZAB Corp', model: 'MNO', purchaseDate: new Date(2020, 5, 1), warrantyInYears: 2, extraCare: true },
    { fullName: 'Jane White', serialNumber: '456789', manufacturer: 'ABV Corp', model: 'PQR', purchaseDate: new Date(2020, 6, 1), warrantyInYears: 3, extraCare: false },
    { fullName: 'Alice Johnson', serialNumber: '192837', manufacturer: 'XYZVVV Corp', model: 'STU', purchaseDate: new Date(2020, 7, 1), warrantyInYears: 1, extraCare: true },
    { fullName: 'Bob Doe', serialNumber: '564738', manufacturer: 'XYZYT Corp', model: 'VWX', purchaseDate: new Date(2020, 8, 1), warrantyInYears: 2, extraCare: false },
    { fullName: 'Carol Smith', serialNumber: '675849', manufacturer: 'XYZTT Corp', model: 'YZA', purchaseDate: new Date(2020, 9, 1), warrantyInYears: 2, extraCare: true },
    { fullName: 'David Lee', serialNumber: '384756', manufacturer: 'XYIIZ Corp', model: 'BCD', purchaseDate: new Date(2020, 10, 1), warrantyInYears: 3, extraCare: false },
    { fullName: 'Ethan Grey', serialNumber: '239045', manufacturer: 'XYZBZ Corp', model: 'NOP', purchaseDate: new Date(2020, 9, 1), warrantyInYears: 2, extraCare: true },
{ fullName: 'Mia Hill', serialNumber: '568901', manufacturer: 'ABVC Corp', model: 'QRS', purchaseDate: new Date(2020, 10, 1), warrantyInYears: 3, extraCare: false },
{ fullName: 'Lucas Green', serialNumber: '483726', manufacturer: 'XCC Corp', model: 'TUV', purchaseDate: new Date(2020, 11, 1), warrantyInYears: 1, extraCare: true },
{ fullName: 'Emma Stone', serialNumber: '729184', manufacturer: 'XYZU Corp', model: 'WXY', purchaseDate: new Date(2020, 0, 1), warrantyInYears: 2, extraCare: false },
{ fullName: 'Noah Davis', serialNumber: '654738', manufacturer: 'XYZAB Corp', model: 'ZAB', purchaseDate: new Date(2020, 1, 1), warrantyInYears: 2, extraCare: true },
{ fullName: 'Sophia Brown', serialNumber: '982346', manufacturer: 'ABVJ Corp', model: 'CDE', purchaseDate: new Date(2020, 2, 1), warrantyInYears: 3, extraCare: false },
{ fullName: 'Liam Wilson', serialNumber: '837265', manufacturer: 'XYZKM Corp', model: 'FGH', purchaseDate: new Date(2020, 3, 1), warrantyInYears: 1, extraCare: true },
{ fullName: 'Isabella Martinez', serialNumber: '562378', manufacturer: 'XYZX Corp', model: 'IJK', purchaseDate: new Date(2020, 4, 1), warrantyInYears: 2, extraCare: false },
{ fullName: 'Oliver Smith', serialNumber: '876543', manufacturer: 'XYZW Corp', model: 'LMN', purchaseDate: new Date(2020, 5, 1), warrantyInYears: 2, extraCare: true },
{ fullName: 'Amelia White', serialNumber: '345678', manufacturer: 'ABVC Corp', model: 'OPQ', purchaseDate: new Date(2020, 6, 1), warrantyInYears: 3, extraCare: false },
{ fullName: 'Charlotte Johnson', serialNumber: '215639', manufacturer: 'ZCorp', model: 'RST', purchaseDate: new Date(2020, 7, 1), warrantyInYears: 1, extraCare: false },
{ fullName: 'James Wilson', serialNumber: '482930', manufacturer: 'KYZ Corp', model: 'UVW', purchaseDate: new Date(2020, 8, 1), warrantyInYears: 2, extraCare: true },
{ fullName: 'Ava Miller', serialNumber: '593812', manufacturer: 'LMO Corp', model: 'XYZ', purchaseDate: new Date(2020, 9, 1), warrantyInYears: 3, extraCare: false },
{ fullName: 'Logan Garcia', serialNumber: '834761', manufacturer: 'ABC Corp', model: 'DEF', purchaseDate: new Date(2020, 10, 1), warrantyInYears: 2, extraCare: true },
{ fullName: 'Olivia Rodriguez', serialNumber: '192837', manufacturer: 'QRS Corp', model: 'GHI', purchaseDate: new Date(2020, 11, 1), warrantyInYears: 1, extraCare: false },
{ fullName: 'Benjamin Lee', serialNumber: '657483', manufacturer: 'XYZ Corp', model: 'JKL', purchaseDate: new Date(2020, 0, 1), warrantyInYears: 2, extraCare: true },
{ fullName: 'Eleanor Anderson', serialNumber: '748291', manufacturer: 'NOP Corp', model: 'MNO', purchaseDate: new Date(2020, 1, 1), warrantyInYears: 3, extraCare: false },
{ fullName: 'William Thomas', serialNumber: '382719', manufacturer: 'STU Corp', model: 'VWX', purchaseDate: new Date(2020, 2, 1), warrantyInYears: 2, extraCare: true },
{ fullName: 'Madison Martinez', serialNumber: '927465', manufacturer: 'YZA Corp', model: 'BCD', purchaseDate: new Date(2020, 3, 1), warrantyInYears: 1, extraCare: false },
{ fullName: 'Mason Jackson', serialNumber: '506839', manufacturer: 'CDE Corp', model: 'FGH', purchaseDate: new Date(2020, 4, 1), warrantyInYears: 2, extraCare: true }


  ];

  constructor() { }

  getWarranties(): Warranty[] {
    return this.warranties;
  }
}

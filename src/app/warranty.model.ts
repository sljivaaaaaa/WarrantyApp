export class Warranty {
    fullName: string = '';
    serialNumber: string = '';
    manufacturer: string = '';
    model: string = '';
    purchaseDate: Date = new Date(); 
    warrantyInYears: number = 0;
    extraCare: boolean = false;
}

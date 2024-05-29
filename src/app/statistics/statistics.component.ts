import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


interface Sale {
  transactionDate: string;
  customerId: string;
  totalAmount: number;
  paymentMethod: string;
  salespersonId: string;
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  saleForm: FormGroup = new FormGroup({});
  isPopupOpen = false;
  sales: Sale[] = [];
  Data: any
  selectedIndex: number = -1;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.saleForm = this.fb.group({
      transactionDate: ['', Validators.required],
      customerId: ['', Validators.required],
      totalAmount: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      salespersonId: ['', Validators.required]
    });
    this.getData()
    this.Data.forEach((element: any) => {
      this.sales.push(element)
    })

  }

  openPopup() {
    this.isPopupOpen = true;
    this.saleForm.reset();
  }

  closePopup() {
    this.isPopupOpen = false;
  }
  openUpdatePopup(index: number) {
    this.selectedIndex = index;
    this.saleForm.patchValue(this.sales[index]);
  }
  onSubmit() {
    if (this.saleForm.valid) {
      const { transactionDate, customerId, totalAmount, paymentMethod, salespersonId } = this.saleForm.value;
      const newSale = {
        transactionDate,
        customerId,
        totalAmount,
        paymentMethod,
        salespersonId
      };
      if (this.selectedIndex >= 0) {
        this.sales[this.selectedIndex] = newSale;
      }
      else {
        this.sales.push(newSale)
      }

      //this.sales.push(newSale);

      localStorage.setItem("FormValue", JSON.stringify(this.sales));
      this.getData()
      this.closePopup();
      this.saleForm.reset(); // Reset the form after successful submission
    } else {
      console.error('Form is invalid');
    }
  }
  getData() {
    this.Data = localStorage.getItem("FormValue")
    this.Data = this.Data ? JSON.parse(this.Data) : null
    console.log(this.Data)
    return this.Data
  }
  deleteSale(index: number) {
    this.sales.splice(index, 1); // Remove the sale at the specified index
    localStorage.setItem("FormValue", JSON.stringify(this.sales));
  }
}

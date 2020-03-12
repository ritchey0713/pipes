import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name: string;
  date: string;
  amount: number;
  height: number;

  car = {
    make: "ford",
    model: "f150",
    year: 2000
  }

  onNameChange = (value: string) => {
    this.name = value;
  }

  onDateChange = (value: string) => {
    this.date = value;
  }

  onAmountChange = (value: string) => {
    const amountInput = parseFloat(value)
    this.amount = amountInput
  }

  onHeightChange = (value: string) => {
    const heightAmount = parseFloat(value)
    this.height = heightAmount
  }

}

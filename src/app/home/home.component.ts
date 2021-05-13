import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text: string;
  filteredText: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(typedText): void {
    console.log(`typedText`, typedText)
    if (typedText === '') {
      this.filteredText = '';
    } else {
      const consonantsArray = typedText.match(/[^aeiou]/gi);
      this.filteredText = consonantsArray.join('');
    }
  }

}

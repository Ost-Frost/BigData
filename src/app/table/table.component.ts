import { Component, OnInit } from '@angular/core';
import { getCards } from '../classes/db';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  searchString: string = "";

  elements: any[] = []

  constructor() { }

  ngOnInit(): void {

  }

  async searchElements() {
    let cards = await getCards(this.searchString);
    this.elements = cards;
  }

}

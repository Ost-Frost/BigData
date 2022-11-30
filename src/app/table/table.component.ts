import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  elements: any[] = [
    {
      name: "testName",
      id: "test",
      imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card"
    },
    {
      name: "test2",
      id: "tesasdasdt",
      imageUrl: "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card"
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { Results } from '../interfaces/results';
import { Data } from '../interfaces/results';
import { AwwService } from '../aww.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  listData: Results
  posts: Data
    constructor(private awwService: AwwService) { }

  ngOnInit(): void {
    this.awwService.getResults().subscribe(
      (data: Results) =>
      this.listData = data
    );
  }
}
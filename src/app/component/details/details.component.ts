import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(private dataCommon: DataService) {}
  public dataQuestion: any;
  public checkViewData() {
    if (this.dataCommon.flagQuestion == 'easy') {
      this.dataQuestion = this.dataCommon.easyQuestion;
    } else if (this.dataCommon.flagQuestion == 'diff') {
      this.dataQuestion = this.dataCommon.difficultQuestion;
    }
  }
  ngOnInit(): void {
    this.checkViewData();
  }
}

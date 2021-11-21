import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private dataCommon: DataService) {}
  public numberDiffQuestion = 0;
  public numberEasyQuestion = 0;
  public flagQuestion(flag: string) {
    this.dataCommon.flagQuestion = flag;
  }
  ngOnInit(): void {
    this.numberDiffQuestion = this.dataCommon.difficultQuestion.length;
    this.numberEasyQuestion = this.dataCommon.easyQuestion.length;
  }
}

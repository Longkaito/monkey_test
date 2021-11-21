import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss'],
})
export class EditQuestionComponent implements OnInit {
  constructor(private dataCommon: DataService) {}
  public $ = document.querySelector.bind(document);
  public flag = true;
  public getId = 1;
  public getDataQuestion: any;
  public getQuestion: any;
  public nameQuestion = '';
  public answer = '';
  public questionA = '';
  public questionB = '';
  public questionC = '';
  public questionD = '';
  public changeQuestion(index: number) {
    this.nameQuestion = this.getDataQuestion[index].name;
    this.answer = this.getDataQuestion[index].answer;
    this.questionA = this.getDataQuestion[index].answerA;
    this.questionB = this.getDataQuestion[index].answerB;
    this.questionC = this.getDataQuestion[index].answerC;
    this.questionD = this.getDataQuestion[index].answerD;
    this.checkClass();
    this.addClass(index + 1);
    // lấy id thực hiện thao tác sửa question
    this.getId = index + 1;
    this.flag = true;
  }
  public getData() {
    let afterAnswer = this.answer;
    this.getQuestion = this.$('input[name="answer"]:checked')?.id;
    if (this.getQuestion == 'r1') {
      afterAnswer = this.questionA;
    } else if (this.getQuestion == 'r2') {
      afterAnswer = this.questionB;
    } else if (this.getQuestion == 'r3') {
      afterAnswer = this.questionC;
    } else if (this.getQuestion == 'r4') {
      afterAnswer = this.questionD;
    }
    return afterAnswer;
  }

  public checkData() {
    if (this.dataCommon.flagQuestion == 'easy') {
      this.getDataQuestion = this.dataCommon.easyQuestion;
    } else if (this.dataCommon.flagQuestion == 'diff') {
      this.getDataQuestion = this.dataCommon.difficultQuestion;
    }
  }

  public updateQuestion(id: number) {
    let newQuestion = {
      id: id,
      name: this.nameQuestion,
      answer: this.getData(),
      answerA: this.questionA,
      answerB: this.questionB,
      answerC: this.questionC,
      answerD: this.questionD,
    };
    if (this.dataCommon.flagQuestion == 'diff') {
      this.dataCommon.difficultQuestion[id - 1] = newQuestion;
    } else {
      this.dataCommon.easyQuestion[id - 1] = newQuestion;
    }
    alert('Successful question update');
    this.ngOnInit();
  }

  public checkClass() {
    if (this.answer == this.questionA) {
      this.getQuestion = 'r1';
    } else if (this.answer == this.questionB) {
      this.getQuestion = 'r2';
    } else if (this.answer == this.questionC) {
      this.getQuestion = 'r3';
    } else if (this.answer == this.questionD) {
      this.getQuestion = 'r4';
    }
  }

  public addQuestion() {
    let newQuestion = {
      id: this.dataCommon.difficultQuestion.length + 1,
      name: this.nameQuestion,
      answer: this.getData(),
      answerA: this.questionA,
      answerB: this.questionB,
      answerC: this.questionC,
      answerD: this.questionD,
    };
    if (this.dataCommon.flagQuestion == 'diff') {
      this.dataCommon.difficultQuestion.push(newQuestion);
    } else {
      this.dataCommon.easyQuestion.push(newQuestion);
    }
    alert('Add success question');
    this.ngOnInit();
  }

  public checkQuestion() {
    if (
      this.questionA != this.questionB &&
      this.questionA != this.questionC &&
      this.questionA != this.questionD &&
      this.questionB != this.questionC &&
      this.questionB != this.questionD &&
      this.questionC != this.questionD
    ) {
      return true;
    } else {
      return false;
    }
  }

  public handleQuestion() {
    if (this.flag == true) {
      if (this.checkQuestion()) {
        this.updateQuestion(this.getId);
      } else {
        alert('The answers must be different');
      }
    } else {
      if (this.checkQuestion()) {
        this.addQuestion();
      } else {
        alert('The answers must be different');
      }
    }
  }

  public resetData() {
    this.nameQuestion = '';
    this.answer = '';
    this.questionA = '';
    this.questionB = '';
    this.questionC = '';
    this.questionD = '';
    this.$('.select')?.classList.remove('select');
    this.flag = false;
  }

  public addClass(index: number) {
    this.$(`.hightlightRow`)?.classList.remove('hightlightRow');
    this.$(`.left .question:nth-child(${index})`)?.classList.add(
      'hightlightRow'
    );
  }
  ngOnInit(): void {
    this.checkData();
    this.changeQuestion(0);
    this.checkClass();
  }
}

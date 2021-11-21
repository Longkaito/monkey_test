import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public flagQuestion = 'diff';
  public easyQuestion: any = [
    {
      id: 1,
      name: 'Con cá có mấy chân',
      answer: '4 chân',
      answerA: '4 chân',
      answerB: '2 chân',
      answerC: '1 chân',
      answerD: '3 chân',
    },
    {
      id: 2,
      name: 'Con cá sống ở đâu',
      answer: 'Dưới nước',
      answerA: 'Trong rừng',
      answerB: 'Dưới nước',
      answerC: 'Núi lửa',
      answerD: 'Trên cạn',
    },
    {
      id: 3,
      name: 'Bố gọi mẹ là gì',
      answer: 'Vợ',
      answerA: 'Sư Tử',
      answerB: 'Vợ',
      answerC: 'Mẹ Vợ',
      answerD: 'Em iu',
    },
  ];
  public difficultQuestion: any = [
    {
      id: 1,
      name: 'Bạn có bao nhiêu phần trăm qua được bài test này',
      answer: '96,69%',
      answerA: '40%',
      answerB: '96,69%',
      answerC: '10%',
      answerD: '50%',
    },
    {
      id: 2,
      name: 'Rap Việt mùa một ai là quán quân',
      answer: 'Dế Choắt',
      answerA: 'GDucky',
      answerB: 'Wowy',
      answerC: 'Binz',
      answerD: 'Dế Choắt',
    },
    {
      id: 3,
      name: 'Long Nguyễn có đẹp trai không',
      answer: 'Rất đẹp trai',
      answerA: 'Có',
      answerB: 'Không',
      answerC: 'Rất đẹp trai',
      answerD: 'Xấu vãi shit',
    },
    // {
    //   id: 4,
    //   name: 'Con cá sống ở đâu',
    //   answer: 'Dưới nước',
    //   answerA: 'Trong rừng',
    //   answerB: 'Dưới nước',
    //   answerC: 'Núi lửa',
    //   answerD: 'Trên cạn',
    // },
    // {
    //   id: 5,
    //   name: 'Bố gọi mẹ là gì',
    //   answer: 'Vợ',
    //   answerA: 'Sư Tử',
    //   answerB: 'Vợ',
    //   answerC: 'Mẹ Vợ',
    //   answerD: 'Em iu',
    // },
  ];
  constructor() {}
}

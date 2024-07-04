import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ToDoApp';
  numbers: number[]=[1,2,3,4,5,6,7,8,9,10];

  ngOnInit(){
    this.printNumbers();
  }

  printNumbers(){
    let index=0;
    
    const interval=setInterval(() => {
      if(index < this.numbers.length){
        console.log(this.numbers[index]);
        this.numbers[index];
        index++;
        
      }else{
        clearInterval(interval);
      }
    },1000);
  }

}

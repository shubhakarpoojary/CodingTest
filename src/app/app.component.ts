import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodingTest';
  stringOne: any;
  stringTwo: any;
  Output1: any;
  Output2: any;
  UserList: any = [];
  UniqueFrientList: any = [];
  constructor(private http: HttpClient) {

  }




  task1OutPut() {
    this.Output1 = "";
    for (let i = 0; i < this.stringOne.length; i++) {
      if (!this.stringTwo.includes(this.stringOne[i])) {
        this.Output1 += this.stringOne[i];
      }
    }

    this.Output2 = "";
    for (let i = 0; i < this.stringTwo.length; i++) {
      if (!this.stringOne.includes(this.stringTwo[i])) {
        this.Output2 += this.stringTwo[i];
      }
    }
  }



  task2OutPut() {

    let User1 = this.http.get('https://reqres.in/api/users/1');
    let User3 = this.http.get('https://reqres.in/api/users/3');
    let User10 = this.http.get('https://reqres.in/api/users/10');
    forkJoin([User1, User3, User10]).subscribe((results: any) => {
      this.UserList = [];
      this.UserList.push(results[0].data);
      this.UserList.push(results[1].data);
      this.UserList.push(results[2].data);
    });
  }


  previousEmailtask2OutPut(){
    debugger
       this.UniqueFrientList=[];
       let F1=["U1,U2","U3,U4","U1,U5","U2,U1","U3,U4"];
       F1.forEach(element => {
          let User1=element.split(',')[0];
          let User2=element.split(',')[1];
          let ReverseUser:any=User2+","+User1
          if(this.UniqueFrientList.find((user:any)=> (user==element || user==ReverseUser))==undefined)
          {
            this.UniqueFrientList.push(element)
          }
       });
  }

}
;
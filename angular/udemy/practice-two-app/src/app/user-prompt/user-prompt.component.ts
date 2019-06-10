import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-prompt',
  templateUrl: './user-prompt.component.html',
  styleUrls: ['./user-prompt.component.css']
})
export class UserPromptComponent implements OnInit {

  username = '';
  clearEnabled = false;
  constructor() { }

  ngOnInit() {
  }


  onUsernameChange(event: any){
    
    console.log(" lenght is " + this.username.length);
    if (this.username.length > 0)
    {
      this.clearEnabled = false;        
    } else {
      this.clearEnabled = true;        
    }

  }
  onclick(){

    this.username=''
     this.clearEnabled = false;

  }

}

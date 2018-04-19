import { Component } from '@angular/core';
import { vegInfo } from './shared/models/vegetables-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public vegData: string[] = vegInfo;
  public newVegetables: string[];
  public string: string = "";
  public errMsg: string;

  public showVegetables() {

    this.newVegetables=new Array<string>();

    if (this.string.length == 1) {

      for(let i=0;i<this.vegData.length;i++){
        if(this.vegData[i].charAt(0)==this.string){
          this.newVegetables.push(this.vegData[i]);
        }
        this.errMsg = "";
      }
       
    }
    else {
      this.errMsg = "please enter only one char ";
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-kalkulator',
  standalone: true,
  imports: [],
  templateUrl: './kalkulator.component.html',
  styleUrl: './kalkulator.component.css'
})
export class KalkulatorComponent {
  currScreen:string="";
  firstNumber:number=0;
  operator:string="";
  result:number=0;
  numberfunc(num:string) {
    if(this.currScreen===""){
      if(num!='0'){
      this.currScreen=this.currScreen+num;
    }
    }else{
      this.currScreen=this.currScreen+num;
    }
  }
  resetfunc(){
    this.currScreen="";
    this.operator="";
  }
  operatorpick(op:string){
    if(this.currScreen!=""){
      this.firstNumber=parseInt(this.currScreen);
      this.operator=op;
      this.currScreen="";
    }
  }
  equalsfunc(){
    if(this.operator==="+"){
      this.result=this.firstNumber+parseInt(this.currScreen);
      this.currScreen=""+this.result;
    }
    if(this.operator==="-"){
      this.result=this.firstNumber-parseInt(this.currScreen);
      this.currScreen=""+this.result;
    }
    if(this.operator==="/"){
      this.result=this.firstNumber/parseInt(this.currScreen);
      this.currScreen=""+this.result;
    }
    if(this.operator==="*"){
      this.result=this.firstNumber*parseInt(this.currScreen);
      this.currScreen=""+this.result;
    }
  }
}

import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private activeClass: any;
    private activeMenu: string = '';
    private activeArrow: boolean =true;


    activeMenus(event,eve : number) {
        this.activeClass = eve;
        this.activeArrow = false;
        var selectedEleOffset = event.currentTarget.offsetLeft;
        var currentClass= event.currentTarget.className;
        var currentEleWidth = $('.'+currentClass).width();
        var final = selectedEleOffset+ currentEleWidth/2+'px';
        $('.nav-indicator').css('left',final);
    }
}

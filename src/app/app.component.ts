import { Component } from '@angular/core';
import { DataService } from './data.service';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'incubr';
  constructor (public data:DataService){}
  ngAfterViewInit(){
    $(document).ready(function(){
      //@ts-ignore'
        $(this).scrollTop(1,0);
      //@ts-ignore'
        $(this).scrollTop(0,0);
      //@ts-ignore'
          // Scrollbar.init(document.querySelector('#my-scrollbar'),{renderByPixels:true});
      });
  };
}

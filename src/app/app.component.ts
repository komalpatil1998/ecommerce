import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular';
 constructor()
  {

  }
  ngOnInit(){}

  url:string = "assets/mobile.jpg";
  secondurl:string = "assets/girl.jpg";
  third:string = "assets/bottle.jpg";
  fourth:string ="assets/gshoes.jpg"

  changeImage(event:any)
  {
   this.url = event.target.src;
  }

  secondImage(event:any)
  {
   this.secondurl = event.target.src;
  }
  thirdImage(event:any)
  {
    this.third = event.target.src;
  }
  fourthImage(event:any)
  {
    this.fourth = event.target.src;

  }
}

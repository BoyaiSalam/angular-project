import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';
@Input() btn_name:string;
constructor(private router:Router) { }
// onClick(){
//   alert("Logout Successfull");
//   this.router.navigate(['/login']);
// }

}

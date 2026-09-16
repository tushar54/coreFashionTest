import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  isMobilemenuOpen=false;
  toggleMobileMenu(){
    this.isMobilemenuOpen=!this.isMobilemenuOpen
    console.log(this.isMobilemenuOpen)
  }

}

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports: [ RouterLink],
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

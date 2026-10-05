import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Navbar } from './AllComponent/navbar/navbar';
import { HeroSection } from './AllComponent/hero-section/hero-section';
import { Products } from './AllComponent/products/products';

@Component({
  imports: [ Navbar, HeroSection, Products],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('coreFashionApp');
}

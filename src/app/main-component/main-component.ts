import { Component } from '@angular/core';
import { Products } from '../AllComponent/products/products';
import { HeroSection } from '../AllComponent/hero-section/hero-section';
import { Navbar } from '../AllComponent/navbar/navbar';

@Component({
  imports: [Products, HeroSection, Navbar],
  selector: 'app-main-component',
  styleUrl: './main-component.css',
  templateUrl: './main-component.html',
})
export class MainComponent {}

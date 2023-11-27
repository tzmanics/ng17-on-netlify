import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,NavigationEnd, RouterModule  } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}

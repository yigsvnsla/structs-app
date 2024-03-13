import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-structs',
  standalone: true,
  templateUrl: './structs.page.html',
  styleUrl: './structs.page.css',
  imports: [NavbarComponent, RouterOutlet],
})
export class StructsPage {}

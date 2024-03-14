import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructsNavbarComponent } from '../../../components/structs/structs-navbar/structs-navbar.component';

@Component({
  selector: 'app-structs',
  standalone: true,
  templateUrl: './structs.page.html',
  styleUrl: './structs.page.css',
  imports: [StructsNavbarComponent, RouterOutlet],
})
export class StructsPage {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructsNavbarComponent } from '../../../components/structs/structs-navbar/structs-navbar.component';
import { StructsAsideComponent } from '../../../components/structs/structs-aside/structs-aside.component';

@Component({
  selector: 'app-structs',
  standalone: true,
  templateUrl: './structs.page.html',
  styleUrl: './structs.page.css',
  imports: [StructsNavbarComponent, RouterOutlet, StructsAsideComponent],
})
export class StructsPage {}

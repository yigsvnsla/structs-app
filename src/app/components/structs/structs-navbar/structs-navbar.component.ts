import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiNavigationModule, TuiIconModule,TuiButtonModule, TuiBadgeModule } from '@taiga-ui/experimental';
import { TuiTabsModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-structs-navbar',
  standalone: true,
  imports: [
    TuiNavigationModule,
    TuiIconModule,
    TuiTabsModule,
    TuiBadgeModule,
    TuiButtonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './structs-navbar.component.html',
  styleUrl: './structs-navbar.component.css'
})
export class StructsNavbarComponent {

}

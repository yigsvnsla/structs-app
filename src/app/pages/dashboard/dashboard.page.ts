import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { AsideComponent } from '../../components/aside/aside.component';
import { MainComponent } from '../../components/main/main.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AsideComponent, MainComponent],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {}

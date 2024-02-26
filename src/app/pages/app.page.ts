import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TuiRootModule, TUI_SANITIZER } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRootModule],
  templateUrl: './app.page.html',
  styleUrl: './app.page.css',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppPage {
  title = 'structs-app';
}

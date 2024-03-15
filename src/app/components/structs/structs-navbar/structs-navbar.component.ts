import { Component, Injector, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiDialogModule, TuiDialogService } from '@taiga-ui/core';
import {
  TuiNavigationModule,
  TuiIconModule,
  TuiButtonModule,
  TuiBadgeModule,
} from '@taiga-ui/experimental';
import { TuiTabsModule } from '@taiga-ui/kit';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { DialogNewStructComponent } from '../dialog-new-struct/dialog-new-struct.component';

@Component({
  selector: 'app-structs-navbar',
  standalone: true,
  imports: [
    TuiNavigationModule,
    TuiIconModule,
    TuiTabsModule,
    TuiBadgeModule,
    TuiButtonModule,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './structs-navbar.component.html',
  styleUrl: './structs-navbar.component.css',
})
export class StructsNavbarComponent {
  private readonly dialogService: TuiDialogService = inject(TuiDialogService);

  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(DialogNewStructComponent, inject(Injector)),
    {
      data: 237,
      dismissible: true,
      label: 'How naming the struct',
    }
  );

  public showDialog(): void {
    this.dialog.subscribe({
      next: (data) => {
        console.log(`Dialog emitted data = ${data}`);
      },
      complete: () => {
        console.log('Dialog closed');
      },
    });
  }
}

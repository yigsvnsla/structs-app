import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  TuiErrorModule,
  TuiHintModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { TuiCardModule, TuiHeaderModule, TuiSurfaceModule,TuiAvatarModule, TuiFallbackSrcModule } from '@taiga-ui/experimental';
import { TuiInputModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-form-new-structs',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiErrorModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiHintModule,
    TuiCardModule,
    TuiAvatarModule,
    TuiSurfaceModule,
    TuiHeaderModule,
    TuiFallbackSrcModule
  ],
  templateUrl: './form-new-structs.component.html',
  styleUrl: './form-new-structs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewStructsComponent {
  private formBuilder = inject(FormBuilder);

  protected structForm = this.formBuilder.group({});
}

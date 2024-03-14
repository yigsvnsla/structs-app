import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructsNavbarComponent } from './structs-navbar.component';

describe('StructsNavbarComponent', () => {
  let component: StructsNavbarComponent;
  let fixture: ComponentFixture<StructsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructsNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

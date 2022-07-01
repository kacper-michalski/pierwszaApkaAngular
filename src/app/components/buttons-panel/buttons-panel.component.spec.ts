import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPanelComponent } from './buttons-panel.component';

describe('ButtonsPanelComponent', () => {
  let component: ButtonsPanelComponent;
  let fixture: ComponentFixture<ButtonsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

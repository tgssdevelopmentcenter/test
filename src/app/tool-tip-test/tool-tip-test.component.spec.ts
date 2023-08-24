import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTipTestComponent } from './tool-tip-test.component';

describe('ToolTipTestComponent', () => {
  let component: ToolTipTestComponent;
  let fixture: ComponentFixture<ToolTipTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolTipTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTipTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

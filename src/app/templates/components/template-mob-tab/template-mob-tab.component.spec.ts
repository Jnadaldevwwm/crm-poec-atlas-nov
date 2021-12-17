import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMobTabComponent } from './template-mob-tab.component';

describe('TemplateMobTabComponent', () => {
  let component: TemplateMobTabComponent;
  let fixture: ComponentFixture<TemplateMobTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateMobTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateMobTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

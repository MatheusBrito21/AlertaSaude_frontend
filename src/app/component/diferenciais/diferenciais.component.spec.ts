import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaisComponent } from './diferenciais.component';

describe('DiferenciaisComponent', () => {
  let component: DiferenciaisComponent;
  let fixture: ComponentFixture<DiferenciaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiferenciaisComponent]
    });
    fixture = TestBed.createComponent(DiferenciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

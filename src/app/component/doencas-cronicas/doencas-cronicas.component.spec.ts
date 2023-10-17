import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoencasCronicasComponent } from './doencas-cronicas.component';

describe('DoencasCronicasComponent', () => {
  let component: DoencasCronicasComponent;
  let fixture: ComponentFixture<DoencasCronicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoencasCronicasComponent]
    });
    fixture = TestBed.createComponent(DoencasCronicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

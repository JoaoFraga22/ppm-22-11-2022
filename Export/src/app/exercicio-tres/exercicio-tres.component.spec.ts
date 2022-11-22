import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioTresComponent } from './exercicio-tres.component';

describe('ExercicioTresComponent', () => {
  let component: ExercicioTresComponent;
  let fixture: ComponentFixture<ExercicioTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

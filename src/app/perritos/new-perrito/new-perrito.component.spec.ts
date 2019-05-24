import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPerritoComponent } from './new-perrito.component';

describe('NewPerritoComponent', () => {
  let component: NewPerritoComponent;
  let fixture: ComponentFixture<NewPerritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPerritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPerritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

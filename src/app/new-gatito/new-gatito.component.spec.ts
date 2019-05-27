import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGatitoComponent } from './new-gatito.component';

describe('NewGatitoComponent', () => {
  let component: NewGatitoComponent;
  let fixture: ComponentFixture<NewGatitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGatitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGatitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

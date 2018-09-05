import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpliquerComponent } from './expliquer.component';

describe('ExpliquerComponent', () => {
  let component: ExpliquerComponent;
  let fixture: ComponentFixture<ExpliquerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpliquerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpliquerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

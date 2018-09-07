import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SePresenterComponent } from './se-presenter.component';

describe('SePresenterComponent', () => {
  let component: SePresenterComponent;
  let fixture: ComponentFixture<SePresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SePresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

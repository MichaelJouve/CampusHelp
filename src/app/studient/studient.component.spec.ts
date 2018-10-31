import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudientComponent } from './studient.component';

describe('StudientComponent', () => {
  let component: StudientComponent;
  let fixture: ComponentFixture<StudientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

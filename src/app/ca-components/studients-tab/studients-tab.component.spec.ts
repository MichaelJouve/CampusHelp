import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudientsTabComponent } from './studients-tab.component';

describe('StudientsTabComponent', () => {
  let component: StudientsTabComponent;
  let fixture: ComponentFixture<StudientsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudientsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudientsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

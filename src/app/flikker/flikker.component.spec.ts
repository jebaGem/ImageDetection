import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlikkerComponent } from './flikker.component';

describe('FlikkerComponent', () => {
  let component: FlikkerComponent;
  let fixture: ComponentFixture<FlikkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlikkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlikkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

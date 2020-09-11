import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScolisoisComponent } from './scolisois.component';

describe('ScolisoisComponent', () => {
  let component: ScolisoisComponent;
  let fixture: ComponentFixture<ScolisoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScolisoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScolisoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

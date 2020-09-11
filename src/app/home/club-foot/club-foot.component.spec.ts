import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubFootComponent } from './club-foot.component';

describe('ClubFootComponent', () => {
  let component: ClubFootComponent;
  let fixture: ComponentFixture<ClubFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

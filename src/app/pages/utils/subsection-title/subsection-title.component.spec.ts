import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectionTitleComponent } from './subsection-title.component';

describe('SubsectionTitleComponent', () => {
  let component: SubsectionTitleComponent;
  let fixture: ComponentFixture<SubsectionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsectionTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

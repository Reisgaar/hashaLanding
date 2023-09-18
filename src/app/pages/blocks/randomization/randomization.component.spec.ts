import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizationComponent } from './randomization.component';

describe('RandomizationComponent', () => {
  let component: RandomizationComponent;
  let fixture: ComponentFixture<RandomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowLocationsComponent } from './grow-locations.component';

describe('GrowLocationsComponent', () => {
  let component: GrowLocationsComponent;
  let fixture: ComponentFixture<GrowLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

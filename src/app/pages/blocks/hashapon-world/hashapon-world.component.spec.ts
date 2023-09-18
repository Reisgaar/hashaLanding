import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashaponWorldComponent } from './hashapon-world.component';

describe('HashaponWorldComponent', () => {
  let component: HashaponWorldComponent;
  let fixture: ComponentFixture<HashaponWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashaponWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashaponWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

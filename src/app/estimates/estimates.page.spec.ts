import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatesPage } from './estimates.page';

describe('EstimatesPage', () => {
  let component: EstimatesPage;
  let fixture: ComponentFixture<EstimatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatePage } from './estimate.page';

describe('EstimatePage', () => {
  let component: EstimatePage;
  let fixture: ComponentFixture<EstimatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

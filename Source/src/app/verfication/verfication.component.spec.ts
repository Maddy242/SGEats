import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerficationComponent } from './verfication.component';

describe('VerficationComponent', () => {
  let component: VerficationComponent;
  let fixture: ComponentFixture<VerficationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerficationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

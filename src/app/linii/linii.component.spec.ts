/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LiniiComponent } from './linii.component';

describe('LiniiComponent', () => {
  let component: LiniiComponent;
  let fixture: ComponentFixture<LiniiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiniiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiniiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

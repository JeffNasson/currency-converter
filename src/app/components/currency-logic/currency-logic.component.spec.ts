import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyLogicComponent } from './currency-logic.component';

describe('CurrencyLogicComponent', () => {
  let component: CurrencyLogicComponent;
  let fixture: ComponentFixture<CurrencyLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

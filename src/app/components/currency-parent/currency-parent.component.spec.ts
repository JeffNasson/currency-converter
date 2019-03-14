import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyParentComponent } from './currency-parent.component';

describe('CurrencyParentComponent', () => {
  let component: CurrencyParentComponent;
  let fixture: ComponentFixture<CurrencyParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

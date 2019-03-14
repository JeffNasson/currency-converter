import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsParentComponent } from './graphs-parent.component';

describe('GraphsParentComponent', () => {
  let component: GraphsParentComponent;
  let fixture: ComponentFixture<GraphsParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphsParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

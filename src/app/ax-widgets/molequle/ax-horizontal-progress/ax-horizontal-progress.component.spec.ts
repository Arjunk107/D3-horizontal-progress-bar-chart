import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxHorizontalProgressComponent } from './ax-horizontal-progress.component';

describe('AxHorizontalProgressComponent', () => {
  let component: AxHorizontalProgressComponent;
  let fixture: ComponentFixture<AxHorizontalProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AxHorizontalProgressComponent]
    });
    fixture = TestBed.createComponent(AxHorizontalProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

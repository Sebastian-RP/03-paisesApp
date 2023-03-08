import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRegionComponent } from './ver-region.component';

describe('VerRegionComponent', () => {
  let component: VerRegionComponent;
  let fixture: ComponentFixture<VerRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

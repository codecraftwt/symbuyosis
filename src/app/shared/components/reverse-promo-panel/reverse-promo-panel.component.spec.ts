import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversePromoPanelComponent } from './reverse-promo-panel.component';

describe('ReversePromoPanelComponent', () => {
  let component: ReversePromoPanelComponent;
  let fixture: ComponentFixture<ReversePromoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReversePromoPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReversePromoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

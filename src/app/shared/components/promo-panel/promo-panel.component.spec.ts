import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoPanelComponent } from './promo-panel.component';

describe('PromoPanelComponent', () => {
  let component: PromoPanelComponent;
  let fixture: ComponentFixture<PromoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

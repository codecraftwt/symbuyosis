import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignManagersComponent } from './campaign-managers.component';

describe('CampaignManagersComponent', () => {
  let component: CampaignManagersComponent;
  let fixture: ComponentFixture<CampaignManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignManagersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

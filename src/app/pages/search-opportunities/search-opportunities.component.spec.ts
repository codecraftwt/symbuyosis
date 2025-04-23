import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOpportunitiesComponent } from './search-opportunities.component';

describe('SearchOpportunitiesComponent', () => {
  let component: SearchOpportunitiesComponent;
  let fixture: ComponentFixture<SearchOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchOpportunitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

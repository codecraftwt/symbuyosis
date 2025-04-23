import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAnOpportunityComponent } from './post-an-opportunity.component';

describe('PostAnOpportunityComponent', () => {
  let component: PostAnOpportunityComponent;
  let fixture: ComponentFixture<PostAnOpportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostAnOpportunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAnOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

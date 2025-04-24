import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquireAnOpportuntiyComponent } from './enquire-an-opportuntiy.component';

describe('EnquireAnOpportuntiyComponent', () => {
  let component: EnquireAnOpportuntiyComponent;
  let fixture: ComponentFixture<EnquireAnOpportuntiyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquireAnOpportuntiyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquireAnOpportuntiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

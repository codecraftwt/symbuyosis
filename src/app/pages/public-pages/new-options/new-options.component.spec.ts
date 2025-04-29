import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOptionsComponent } from './new-options.component';

describe('NewOptionsComponent', () => {
  let component: NewOptionsComponent;
  let fixture: ComponentFixture<NewOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBusinesConnectComponent } from './small-busines-connect.component';

describe('SmallBusinesConnectComponent', () => {
  let component: SmallBusinesConnectComponent;
  let fixture: ComponentFixture<SmallBusinesConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallBusinesConnectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallBusinesConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

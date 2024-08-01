import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodychildComponent } from './bodychild.component';

describe('BodychildComponent', () => {
  let component: BodychildComponent;
  let fixture: ComponentFixture<BodychildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodychildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

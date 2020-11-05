import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBacksideComponent } from './card-backside.component';

describe('CardBacksideComponent', () => {
  let component: CardBacksideComponent;
  let fixture: ComponentFixture<CardBacksideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBacksideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBacksideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

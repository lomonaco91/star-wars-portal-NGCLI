import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsDeteailsPageComponent } from './starships-deteails-page.component';

describe('StarshipsDeteailsPageComponent', () => {
  let component: StarshipsDeteailsPageComponent;
  let fixture: ComponentFixture<StarshipsDeteailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsDeteailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsDeteailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

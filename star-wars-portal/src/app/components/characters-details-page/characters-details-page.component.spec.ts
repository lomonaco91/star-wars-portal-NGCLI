import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersDetailsPageComponent } from './characters-details-page.component';

describe('CharactersDetailsPageComponent', () => {
  let component: CharactersDetailsPageComponent;
  let fixture: ComponentFixture<CharactersDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

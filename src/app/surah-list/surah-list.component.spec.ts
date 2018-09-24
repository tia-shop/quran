import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurahListComponent } from './surah-list.component';

describe('SurahListComponent', () => {
  let component: SurahListComponent;
  let fixture: ComponentFixture<SurahListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurahListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurahListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MygodComponent } from './mygod.component';

describe('MygodComponent', () => {
  let component: MygodComponent;
  let fixture: ComponentFixture<MygodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

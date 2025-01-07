import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuHeaderComponent } from './top-menu-header.component';

describe('TopMenuHeaderComponent', () => {
  let component: TopMenuHeaderComponent;
  let fixture: ComponentFixture<TopMenuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMenuHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

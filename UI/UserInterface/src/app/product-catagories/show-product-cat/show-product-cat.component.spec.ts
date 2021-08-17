import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductCatComponent } from './show-product-cat.component';

describe('ShowProductCatComponent', () => {
  let component: ShowProductCatComponent;
  let fixture: ComponentFixture<ShowProductCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProductCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

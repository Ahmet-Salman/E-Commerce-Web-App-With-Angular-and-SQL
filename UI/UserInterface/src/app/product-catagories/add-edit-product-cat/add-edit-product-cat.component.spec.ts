import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProductCatComponent } from './add-edit-product-cat.component';

describe('AddEditProductCatComponent', () => {
  let component: AddEditProductCatComponent;
  let fixture: ComponentFixture<AddEditProductCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProductCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProductCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

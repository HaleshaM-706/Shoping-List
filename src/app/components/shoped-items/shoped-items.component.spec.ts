import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopedItemsComponent } from './shoped-items.component';

describe('ShopedItemsComponent', () => {
  let component: ShopedItemsComponent;
  let fixture: ComponentFixture<ShopedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

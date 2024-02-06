import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTshirtComponent } from './list-tshirt.component';

describe('ListTshirtComponent', () => {
  let component: ListTshirtComponent;
  let fixture: ComponentFixture<ListTshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTshirtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GomeTshirtComponent } from './gome-tshirt.component';

describe('GomeTshirtComponent', () => {
  let component: GomeTshirtComponent;
  let fixture: ComponentFixture<GomeTshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GomeTshirtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GomeTshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

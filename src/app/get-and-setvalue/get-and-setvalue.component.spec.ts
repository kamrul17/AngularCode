import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAndSetvalueComponent } from './get-and-setvalue.component';

describe('GetAndSetvalueComponent', () => {
  let component: GetAndSetvalueComponent;
  let fixture: ComponentFixture<GetAndSetvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAndSetvalueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAndSetvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

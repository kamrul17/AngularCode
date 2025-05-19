import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExmComponent } from './directive-exm.component';

describe('DirectiveExmComponent', () => {
  let component: DirectiveExmComponent;
  let fixture: ComponentFixture<DirectiveExmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveExmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectiveExmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

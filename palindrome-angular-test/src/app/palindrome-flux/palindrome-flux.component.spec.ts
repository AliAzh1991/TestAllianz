import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeFluxComponent } from './palindrome-flux.component';
import { PalindromeService } from '../services/palindrome.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PalindromeFluxComponent', () => {
  let component: PalindromeFluxComponent;
  let fixture: ComponentFixture<PalindromeFluxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ PalindromeFluxComponent ],
      providers: [ PalindromeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeFluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

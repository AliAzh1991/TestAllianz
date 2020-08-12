import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PalindromeWordComponent } from './palindrome-word.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PalindromeService } from '../services/palindrome.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';

const palindromeServiceMock = {
  isValidPrefixUrlCheck: jasmine.createSpy('isValidPrefixUrlCheck'),
  isPalindromeWord: jasmine.createSpy('isPalindromeWord'),
};
class RouterMock {
  events = of(new NavigationEnd(0, '/start/itti', '/start/itti'));
}

describe('PalindromeWordComponent', () => {
  let component: PalindromeWordComponent;
  let fixture: ComponentFixture<PalindromeWordComponent>;
  let router: Router;
  let palindromeService: any;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [PalindromeWordComponent],
      providers: [
        { provide: PalindromeService, useValue: palindromeServiceMock },
        { provide: Router, useClass: RouterMock }
      ]
    })
      .compileComponents();
    palindromeService = TestBed.inject(PalindromeService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeWordComponent);
    component = fixture.componentInstance;
    router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Given a router with wrong url prefix', () => {
    beforeEach(() => {
      palindromeService.isValidPrefixUrlCheck.and.returnValue(false);
      component.ngOnInit();
    });
    it('should return a NavigationEnd object', () => {
      router.events.subscribe((e) => {
        expect(e).toBeInstanceOf(NavigationEnd);
      });
    });
    it('should call palindromeService.isValidPrefixUrlCheck method', async(() => {
      expect(palindromeService.isValidPrefixUrlCheck).toHaveBeenCalled();
    }));
    it('should set isParseInError to true', async(() => {
      expect(component.isParseInError).toBeTrue();
    }));
  });

  describe('Given a router with Navigation to /start/** with a non palindrome param', () => {
    beforeEach(() => {
      palindromeService.isValidPrefixUrlCheck.and.returnValue(false);
      component.ngOnInit();
    });
    it('should return a NavigationEnd object', () => {
      router.events.subscribe((e) => {
        expect(e).toBeInstanceOf(NavigationEnd);
      });
    });
    it('should call palindromeService.isValidPrefixUrlCheck method', async(() => {
      expect(palindromeService.isValidPrefixUrlCheck).toHaveBeenCalled();
      expect(palindromeService.isValidPrefixUrlCheck).toHaveBeenCalledWith('/start/itti', '/start/');
    }));
    it('should set isParseInError to true', async(() => {
      expect(component.isParseInError).toBeTrue();
    }));
  });

  describe('Given a router with Navigation to /start/** with a palindrome param', () => {
    beforeEach(() => {
      palindromeService.isValidPrefixUrlCheck.and.returnValue(true);
      component.ngOnInit();
    });
    it('should return a NavigationEnd object', () => {
      router.events.subscribe((e) => {
        expect(e).toBeInstanceOf(NavigationEnd);
      });
    });
    it('should call palindromeService.isValidPrefixUrlCheck method', async(() => {
      expect(palindromeService.isValidPrefixUrlCheck).toHaveBeenCalled();
      expect(palindromeService.isValidPrefixUrlCheck).toHaveBeenCalledWith('/start/itti', '/start/');
    }));
    it('should call palindromeService.isPalindromeWord method ', async(() => {
      expect(palindromeService.isPalindromeWord).toHaveBeenCalled();
      expect(palindromeService.isPalindromeWord).toHaveBeenCalledWith('itti');
    }));
    it('should set isParseInError to false', async(() => {
      expect(component.isParseInError).toBeFalse();
    }));
  });
});

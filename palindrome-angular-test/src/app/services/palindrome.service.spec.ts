import {TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {PalindromeService} from './palindrome.service';
import {of} from 'rxjs';
import {PalindromeMock} from '../mocks/palindrome.mock';

const fakeHttpClient = {
  get: jasmine.createSpy('get').and.returnValue(of(PalindromeMock.NOMINAL))
};

describe('PalindromeService', () => {
  let palindromeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PalindromeService,
        {provide: HttpClient, useValue: fakeHttpClient}
        ]
    });
    palindromeService = TestBed.inject(PalindromeService);
  });

  it('should be created', () => {
    expect(palindromeService).toBeTruthy();
  });
  it('should call fakeHttpClient.get', () => {
    palindromeService.getPalindromeFlux('/test');
    expect(fakeHttpClient.get).toHaveBeenCalled();
  });
  it('should call with fakeHttpClient.get with /test path', () => {
    palindromeService.getPalindromeFlux('/test');
    expect(fakeHttpClient.get).toHaveBeenCalledWith('/test');
  });
  it('should return mapped data', () => {
    const result$ = palindromeService.getPalindromeFlux('/test');
    result$.subscribe((resultListModel) => {
      expect(resultListModel).toEqual(PalindromeMock.NOMINAL);
    });
  });
  it('should check if palindrome word', () => {
    expect(palindromeService.isPalindromeWord('kayak')).toBeTrue();
  });
  it('should check if not palindrome word', () => {
    expect(palindromeService.isPalindromeWord('test')).toBeFalse();
  });
});

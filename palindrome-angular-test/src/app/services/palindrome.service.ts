import { Injectable } from '@angular/core';
import { Palindrome } from '../models/palindrome';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**
 * Service to manage palindrome words
 */
@Injectable()
export class PalindromeService {

  constructor(private http: HttpClient) { }

  /**
   * Check if the url starts with prefix
   * @param url used url
   * @param prefix used prefix
   */
  isValidPrefixUrlCheck(url: string, prefix: string): boolean {
    if (prefix && url.startsWith(prefix)) {
      return true;
    }
    return false;
  }

  /**
   * Check if a word is a palindrome
   * @param url  url used
   */
  isPalindromeWord(word: string): boolean {
    if (word && word === word.split('').reverse().join('')) {
      return true;
    }
    return false;
  }

  /**
   * Get json from URL
   * @param path path of the json
   */
  getPalindromeFlux(path: string): Observable<Palindrome[]> {
    return this.http.get<Palindrome[]>(path);
  }
}

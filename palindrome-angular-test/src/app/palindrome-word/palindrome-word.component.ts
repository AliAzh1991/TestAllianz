import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PalindromeService } from '../services/palindrome.service';

@Component({
  selector: 'app-palindrome-word',
  templateUrl: './palindrome-word.component.html',
  styleUrls: ['./palindrome-word.component.scss']
})
export class PalindromeWordComponent implements OnInit {

  currentUrl: string;
  isPalindrome: boolean;
  isParseInError = false;

  constructor(private router: Router, private palindromeService: PalindromeService) {
  }

  ngOnInit(): void {
    // use the NavigationEnd to get the final route
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        // check valid url prefix
        if (this.palindromeService.isValidPrefixUrlCheck(e.url, '/start/')) {
          this.isParseInError = false;
          // get the last word from the route
          const urlParts = e.url.split('/');
          const wordToCheck = urlParts[urlParts.length - 1];
          this.isPalindrome = this.palindromeService.isPalindromeWord(wordToCheck);
        }
        else {
          this.isParseInError = true;
        }
      }
    });
  }
}

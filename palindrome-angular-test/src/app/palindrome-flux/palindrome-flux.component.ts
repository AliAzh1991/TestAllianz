import { Component, OnInit } from '@angular/core';
import { PalindromeService } from '../services/palindrome.service';
import { Palindrome } from '../models/palindrome';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-palindrome-flux',
  templateUrl: './palindrome-flux.component.html',
  styleUrls: ['./palindrome-flux.component.scss']
})
export class PalindromeFluxComponent implements OnInit {

  palindromeFluxList: Observable<Palindrome[]>;

  constructor(private palindromeService: PalindromeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.palindromeFluxList = this.palindromeService.getPalindromeFlux('assets/flux.json');
  }

  isPalindrome(word: string): boolean {
    return this.palindromeService.isPalindromeWord(word);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
  }

  storeRecipes() {}

  getRecipes() {}

}

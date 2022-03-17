import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

import { IService } from '../interfaces/service';

const API_URL = environment.API_URL;

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor(private http: HttpClient) {}

    getProducts() {
        return this.http
            .get<IService>(`${API_URL}/sites/MLA/search?category=MLA1648`)
            .pipe(map((resp) => resp.results));
    }
}

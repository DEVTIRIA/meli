import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

import { IResult, IService } from '../interfaces/service';
import { IDescription } from '../interfaces/description';
import { ICategorie } from '../interfaces/categories';

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

    getProductByID(pid: string) {
        return this.http.get<IResult>(`${API_URL}/items/${pid}`);
    }

    getDescription(pid: string) {
        return this.http.get<IDescription>(`${API_URL}/items/${pid}/description`).pipe(map((resp) => resp.plain_text));
    }

    getCategoryByID(cid: string) {
        return this.http.get<ICategorie>(`${API_URL}/categories/${cid}`).pipe(map((resp) => resp.path_from_root));
    }
}

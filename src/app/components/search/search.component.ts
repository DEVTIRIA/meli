import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public term: string = '';

    constructor(private router: Router) {}

    ngOnInit(): void {}

    searchProducts(search: string) {
        if (search.length <= 0) return;
        this.router.navigate(['/items'], {
            queryParams: { search },
        });
    }
}

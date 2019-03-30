import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Menu } from "../models/menu.model";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";


@Injectable()
export class MenuService {

    constructor(private http: HttpClient) { }

    obterMenu(): Observable<Menu> {
        return this.http.get<Menu>(`${environment.apiBaseUrl}/assets/mock-data.json`)
            .pipe(
                map((res: Menu) => {
                    return res;
                })
            );
    }

}
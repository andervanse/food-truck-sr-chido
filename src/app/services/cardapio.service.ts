import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cardapio } from "../models/cardapio.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

@Injectable()
export class CardapioService {

    constructor(private http: HttpClient) { }

    obterCardapio(): Observable<Cardapio> {
        return this.http.get<Cardapio>(`${environment.apiBaseUrl}/assets/mock-data.json`)
            .pipe(
                map((res: Cardapio) => {
                    return res;
                })
            );
    }

    salvarCardapio(cardapio: Cardapio): Observable<boolean> {
        return this.http.post<any>(`${environment.apiBaseUrl}/assets/mock-data.json`, cardapio)
            .pipe(
                map((res: any) => {
                    return true;
                })
            );
    }    
}
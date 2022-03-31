import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Game } from "src/app/model/game/game";
import { Observable } from "rxjs";
import { GameDetail } from '../../model/gameDetail/gameDetail';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private url: string = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getAllByGameName(gameName: string) {
        return this.http.get(this.url + "select/" + gameName)
    }

    getById(id: number): Observable<GameDetail> {
        return this.http.get<GameDetail>(this.url + "select/" + id)
    }

    getAllGames(): Observable<GameDetail> {
        return this.http.get<GameDetail>(this.url + "list/")
    }

    deleteGame(id: number): Observable<GameDetail> {
        return this.http.get<GameDetail>(this.url + "delete/" + id)
    }
}
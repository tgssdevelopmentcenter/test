import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { checkNull } from "../custom-modules/custom-funtions";

export class PaginationDTO {
    _page?: any = 1
    _limit?: any = 10
}

@Injectable({
    providedIn: 'root'
})
export class TableService {

    constructor(private http: HttpClient) { }


    getAllTodos(dto: any): Observable<any> {
        let params = new HttpParams()
        for (let data in dto) {
            if (checkNull(dto[data])) {
                params = params.append(data, dto[data])
            }
        }
        return this.http.get(`https://jsonplaceholder.typicode.com/todos`, { params: params })


    }

}
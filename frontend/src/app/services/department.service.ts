import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class DepartmentService {
  constructor(private httpClient: HttpClient) { }

  create(department: any) {
    return this.httpClient.post(environment.departmentURL, department);
  }

  update(department: any) {
    return this.httpClient.put(environment.departmentURL, department);
  }

  readAll() {
    return this.httpClient.get(environment.departmentListURL, { params: {} });
  }

  delete(departmentId: string) {
    return this.httpClient.delete(environment.departmentURL, {
      params: { departmentId: departmentId },
    });
  }

  readAllTeams(department_id: string) {
    return this.httpClient.get(environment.teamListURL, {
      params: { department_id: department_id },
    });
  }

  createTeam(team: any) {
    return this.httpClient.put(environment.teamURL, team);
  }

  deleteTeam(team: any) {
    console.log(team)
    return this.httpClient.delete(environment.teamURL, { params: team });
  }

  createPosition(position: any) {
    return this.httpClient.post(environment.positionURL, position);
  }

  deletePosition(position: any){
    return this.httpClient.delete(environment.positionURL, {params: position});
  }

  
}

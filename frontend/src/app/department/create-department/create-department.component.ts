import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { DepartmentService } from "../../services/department.service";

@Component({
  selector: "app-create-department",
  templateUrl: "./create-department.component.html",
  styleUrls: ["./create-department.component.css"],
})
export class CreateDepartmentComponent implements OnInit {
  // Forms
  createDepartmentForm: FormGroup;
  createTeamForm: FormGroup;
  createPosForm: FormGroup;

  // Messages variable
  deptMsg: string = "";
  deptErrMsg: string = "";

  teamMsg: string = "";
  teamErrMsg: string = "";

  posErrMsg: string = "";
  posMsg: string = "";

  // should be from a data source
  positions: string[] = [
    "Officer",
    "Senior",
    "Junior",
    "manager",
    "cisco c",
    "tester 1",
    "tester 2",
    "linux",
    "implementer 1",
    "implementer 2",
    "technical support engineer 1",
    "technical support engineer 2",
  ];

  isEdit: boolean = false;

  teams: any[];

  DEPARTMENT_DATA: any;
  selectedDepartment: any;
  selectedDepartmentTeams: any;

  selectedTeam: any = null;
  selectedPosition: any = null;

  // should be dynamic
  updateDepartmentId: string;

  constructor(private deptService: DepartmentService) {
    this.createDepartmentForm = new FormGroup({
      departmentName: new FormControl(""),
      departmentHead: new FormControl(""),
    });

    this.createTeamForm = new FormGroup({
      teamName: new FormControl(""),
      teamLeader: new FormControl(""),
    });

    this.createPosForm = new FormGroup({
      positionName: new FormControl(""),
    });

    this.readAllDepartments();
  }

  readAllTeams(department_id: string) {
    this.deptService.readAllTeams(department_id).subscribe(
      (data: any) => {
        this.selectedDepartmentTeams = data['teams']
      },
      (error) => {
      },
    );
  }

  // Read departments
  readAllDepartments() {
    this.deptService.readAll().subscribe(
      (data: any) => {
        this.DEPARTMENT_DATA = data["departments"];
      },
      (error) => {
      },
    );
  }

  ngOnInit(): void {}

  // Create department event handler
  createDepartment() {
    let department = {
      department_name: this.createDepartmentForm.value.departmentName,
      department_head: this.createDepartmentForm.value.departmentHead,
    };

    this.deptService.create(department).subscribe(
      (data) => {
        this.deptErrMsg = "";
        this.deptMsg = "Department created successfully";
        this.DEPARTMENT_DATA.push(department);
        this.createDepartmentForm.reset();
      },
      (error) => {
        this.deptMsg = "";
        if (error.status == 409) {
          this.deptErrMsg = "Department already exists";
        } else {
          this.deptErrMsg =
            "Failed to create department. Please contact your system administator.";
        }
      },
    );
  }

  // Delete department event handler
  deleteDepartment(departmentId: string) {
    this.deptService.delete(departmentId).subscribe(
      (data) => {
        this.deptErrMsg = "";
        this.deptMsg = "Department was deleted successfully";
        this.selectedDepartment = null;
        this.readAllDepartments();
      },
      (error) => {
        this.deptMsg = "";
        this.deptErrMsg = "Failed to delete department";
      },
    );
  }

  // view department button handler
  viewDepartment(index: number, id: string) {

    this.isEdit = false;
    this.createDepartmentForm.reset();
    this.selectedDepartment = this.DEPARTMENT_DATA[index];
    this.readAllTeams(id);
  }

  editDepartment(_id: string, departmentName: string, departmentHead: string) {
    this.updateDepartmentId = _id;
    this.isEdit = true;
    this.createDepartmentForm.patchValue({
      departmentName,
      departmentHead,
    });
  }

  updateDepartment() {
    this.isEdit = false;

    let departmentName: string = this.createDepartmentForm.value.departmentName;
    let departmentHead: string = this.createDepartmentForm.value.departmentHead;

    let department = {
      department_id: this.updateDepartmentId,
      departmentName: departmentName,
      departmentHead: departmentHead,
    };

    this.deptService.update(department).subscribe(
      (data) => {
        this.deptErrMsg = "";
        this.deptMsg = "Department was updated successfully";

        this.selectedDepartment = null;
        this.selectedTeam = null;
        this.selectedPosition = "";

        this.createDepartmentForm.reset();
        this.readAllDepartments();

      },
      (error) => {
        this.deptMsg = "";
        this.deptErrMsg = "Failed to update department";
      },
    );
  }

  // Create team event handler
  createTeam(department_id: string) {
    let team = {
      department_id: this.selectedDepartment._id,
      team_name: this.createTeamForm.value.teamName,
      team_leader: this.createTeamForm.value.teamLeader,
    };

    this.deptService.createTeam(team).subscribe(
      (data) => {
        this.createTeamForm.reset();
        this.readAllDepartments();
        this.readAllTeams(department_id);
      },
      (error) => {
        if (error.status === 422) {
          this.teamMsg = "";
          this.teamErrMsg = "Team already exists";
        }
        this.createTeamForm.reset();
      },
    );
  }

  deleteTeam(team_id: number) {
    let team = {
      team_id: team_id,
    };

    this.deptService.deleteTeam(team).subscribe(
      (data) => {
        this.teamErrMsg = "";
        this.teamMsg = "Team was deleted successfully";

        this.selectedPosition = "";
        this.selectedTeam= ""
        this.readAllTeams(this.selectedDepartment._id);

      },
      (error) => {
        this.teamMsg = "";
        this.teamErrMsg = "Failed to delete team";
      },
    );
  }

  // View team button
  viewTeam(index: number, team_id: string) {
    this.selectedTeam = this.selectedDepartmentTeams[index];
  }

  // position add buttton handler
  createPosition(): void {
    let positionName: string = this.createPosForm.value.positionName;

    let position = {
      department_id: this.selectedDepartment._id,
      team_id: this.selectedTeam._id,
      position_name: positionName,
    };

    this.deptService.createPosition(position).subscribe(
      (data) => {
        this.createPosForm.reset()
        this.posErrMsg = "";
        this.posMsg = "Position was created successfully";
        this.readAllTeams(position.department_id)
      },
      (error) => {
        this.posMsg = "";
        this.posErrMsg = "Failed to create position";
      },
    );
  }

  // position remove button handler
  removePosition(): void {
    let s_position = this.selectedPosition;
    let s_team = this.selectedTeam;

    let position = {
      position_name: s_position,
      team_id: s_team._id
    }

    this.deptService.deletePosition(position).subscribe(
      (data) => {
        this.createPosForm.reset();
        this.posErrMsg = "";
        this.posMsg = "Position was removed successfully";
        this.readAllTeams(this.selectedDepartment._id);
      },
      (error) => {
        this.posMsg = "";
        this.posErrMsg = "Failed to remove position";
        this.createPosForm.reset();
      }
    );

  }

  // position edit button handler
  editPosition(): void {
    this.createPosForm.reset();
  }

  selectPosition(position: any): void {
    this.selectedPosition = position;
    this.createPosForm.patchValue({
      positionName: position,
    });
  }
}

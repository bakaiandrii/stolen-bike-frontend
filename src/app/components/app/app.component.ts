import {Component, OnInit} from '@angular/core';
import {CaseService} from '../../services/case.service';
import {Case} from '../../models/Case';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  case: Case[];
  caseForm: FormGroup;
  officerForm: FormGroup;

  constructor(private caseService: CaseService,
              private httpClient: HttpClient) {
    this.caseForm = new FormGroup({
      owner: new FormControl(''),
      description: new FormControl('')
    });
    this.officerForm = new FormGroup({
      name: new FormControl('Ivanchenko Jon Makmilovich (NYPD)'),
    });
  }

  ngOnInit(): void {
    this.caseService.getCases().subscribe(value => this.case = value);
  }


  submitCaseForm(): void {
    this.httpClient.post('http://localhost:5000/case', this.caseForm.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  submitOfficerForm(): void {
    this.httpClient.post('http://localhost:5000/officer', this.officerForm.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Case} from '../../models/Case';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  @Input()
  case: Case;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  foundCase(id: number): void {
    this.httpClient.get(`http://localhost:5000/case/${id}/resolve`).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}

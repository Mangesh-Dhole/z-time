import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'z-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() dataSource: any;
  @Input() displayedColumns2: any;

  public headersLabel: string[] = [];

  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.headersLabel = this.displayedColumns2?.map((e: any) => e.label)
    this._cd.detectChanges();
  }

}



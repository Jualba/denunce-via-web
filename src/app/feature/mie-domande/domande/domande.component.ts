import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-domande',
  templateUrl: './domande.component.html',
  styleUrls: ['./domande.component.css']
})
export class DomandeComponent implements OnInit {

   constructor(private router: Router) { }

  ngOnInit(): void {
  }

  creaDomanda() {
    this.router.navigate(['/domanda/nuova']).then();
  }
}

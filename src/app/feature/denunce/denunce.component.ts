import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-denunce',
  templateUrl: './denunce.component.html',
  styleUrls: ['./denunce.component.css']
})
export class DenunceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  creaDenuncia() {
    this.router.navigate(['/denunce/crea']).then();
  }
}

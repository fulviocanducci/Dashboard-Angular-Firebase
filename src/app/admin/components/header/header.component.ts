import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  sair() {
    this.auth.signOut();
  }
}

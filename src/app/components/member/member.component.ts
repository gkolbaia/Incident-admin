import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/User.interface';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  user;
  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.checkSession();
  }
  logout(): void {
    this.authService.logout();
  }
}

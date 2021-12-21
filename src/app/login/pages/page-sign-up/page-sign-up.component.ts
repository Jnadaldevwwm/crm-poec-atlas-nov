import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.scss']
})
export class PageSignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public signUp(e: Event): void{
    console.log(e);
    this.authService.signUp(e).subscribe((response)=>{
      console.log("Réponse : " + response);
    });
  }
}

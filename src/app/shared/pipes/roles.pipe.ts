import { Pipe, PipeTransform } from '@angular/core';
import { RoleUser } from 'src/app/core/enums/role-user';

@Pipe({
  name: 'roles'
})
export class RolesPipe implements PipeTransform {

  transform(value: string ): string {
    if(value === RoleUser.ADMIN){
      return "Administrateur";
    } else if(value === RoleUser.USER){
      return "Utilisateur";
    }
    return "Error";
  }

}

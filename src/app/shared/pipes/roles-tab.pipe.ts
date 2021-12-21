import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolesTab'
})
export class RolesTabPipe implements PipeTransform {

  transform(value: string[]): string[] {
    let tabRoles: string[] = new Array();
    value.forEach(element => {
      tabRoles.push(element.replace('ROLE_','').toLowerCase().charAt(0).toUpperCase() + element.replace('ROLE_','').toLowerCase().slice(1));
    });
    return tabRoles;
  }

}

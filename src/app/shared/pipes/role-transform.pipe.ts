import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleTransform'
})
export class RoleTransformPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('ROLE_','').toLowerCase().charAt(0).toUpperCase() + value.replace('ROLE_','').toLowerCase().slice(1);;
  }

}

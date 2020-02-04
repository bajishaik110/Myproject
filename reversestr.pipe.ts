import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestr'
})
export class ReversestrPipe implements PipeTransform {

  transform(value:string, ): string {
     let newstr:string="";
     for(var i=value.length-1;i>=0;i--)
     newstr+=value.charAt(i);
  
  return newstr;
  }
}

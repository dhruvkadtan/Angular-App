import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {

  transform(param1 : any[] , param2: any): any[] {

    return param1.filter((a) => {
      return a != param2;
    })
  }

}

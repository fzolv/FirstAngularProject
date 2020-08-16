import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'headerTransform' })
export class HeaderTransformPipe implements PipeTransform {


    transform(header: String) {
        function regexUpper(match, offset, string) {
            return match.toUpperCase();
        }
        return header.replace(/^([\w])/g, regexUpper).replace(/([A-Z])/g, ' $1');
    }

}
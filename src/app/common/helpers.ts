import { loadModules } from 'esri-loader';
import { from, EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


export const loadModuleSub = (modules: string[]): Observable<any[]> => {
  return from(loadModules(modules))
    .pipe(
      catchError((e) => {
        console.log(`Error '${e.src}' loading module '${e.info[0]}'`);
        return EMPTY;
      })
    );
};

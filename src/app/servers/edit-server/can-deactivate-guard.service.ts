import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> |
                        Promise<boolean> |
                        boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

    canDeactivate(componenet: CanComponentDeactivate,
                  currentRoute: ActivatedRouteSnapshot,
                  curretState: RouterStateSnapshot,
                  nextState?: RouterStateSnapshot):
                Observable<boolean> | Promise<boolean> |
                        boolean {
                            return componenet.canDeactivate();
                        }
}

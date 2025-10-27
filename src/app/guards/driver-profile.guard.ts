import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { from, Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AvatarService } from '../services/avatar.service';

@Injectable({
  providedIn: 'root',
})
export class DriverProfileGuard implements CanActivate {
  constructor(
    private auth: Auth,
    private router: Router,
    private avatar: AvatarService
  ) {}

  canActivate(): Observable<boolean> {
    return from(new Promise<User | null>((resolve) => {
      onAuthStateChanged(this.auth, (user) => {
        resolve(user);
      });
    })).pipe(
      switchMap((user) => {
        if (!user) {
          this.router.navigate(['login']);
          return of(false);
        }
        
        if (!user.displayName || !user.photoURL) {
          this.router.navigate(['details']);
          return of(false);
        }
        
        return of(true);
      }),
      catchError(() => {
        this.router.navigate(['network']);
        return of(false);
      })
    );
  }
}

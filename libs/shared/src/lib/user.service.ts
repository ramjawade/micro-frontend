import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };
  getUser() {
    return this.user;
  }
  
  setUser(user: any) {
    this.user = user;
  }
}

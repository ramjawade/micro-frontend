import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    service.logout();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with user not logged in', (done) => {
    service.isUserLoggedIn$.subscribe(isLoggedIn => {
      expect(isLoggedIn).toBe(false);
      done();
    });
  });

  it('should authenticate with correct credentials', (done) => {
    service.checkCredentials('demo', 'demo');
    
    service.isUserLoggedIn$.subscribe(isLoggedIn => {
      expect(isLoggedIn).toBe(true);
      done();
    });
  });

  it('should not authenticate with incorrect credentials', (done) => {
    service.checkCredentials('wrong', 'wrong');
    
    service.isUserLoggedIn$.subscribe(isLoggedIn => {
      expect(isLoggedIn).toBe(false);
      done();
    });
  });

  it('should logout user', (done) => {
    // First login
    service.checkCredentials('demo', 'demo');
    
    // Then logout
    service.logout();
    
    service.isUserLoggedIn$.subscribe(isLoggedIn => {
      expect(isLoggedIn).toBe(false);
      done();
    });
  });

  it('should handle empty credentials', (done) => {
    service.checkCredentials('', '');
    
    service.isUserLoggedIn$.subscribe(isLoggedIn => {
      expect(isLoggedIn).toBe(false);
      done();
    });
  });
});

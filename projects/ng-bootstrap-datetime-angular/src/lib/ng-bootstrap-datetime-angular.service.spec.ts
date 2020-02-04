import { TestBed } from '@angular/core/testing';

import { NgBootstrapDatetimeAngularService } from './ng-bootstrap-datetime-angular.service';

describe('NgBootstrapDatetimeAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBootstrapDatetimeAngularService = TestBed.get(NgBootstrapDatetimeAngularService);
    expect(service).toBeTruthy();
  });
});

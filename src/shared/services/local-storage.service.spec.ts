import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('set() should return undefined', () => {
    expect(service.set('key', {})).toBeUndefined();
  });

  it('get() should return Object', () => {
    expect(service.get('key')).toEqual(null);
  });

  it('remove() should return undefined', () => {
    expect(service.remove('key')).toBeUndefined();
  });

  it('isSupported() should return boolean', () => {
    expect(service.isSupported()).toBeTruthy();
  });
});

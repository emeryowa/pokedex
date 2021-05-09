import { TestBed } from '@angular/core/testing';
import { Pokemon } from '@app/models/pokemon';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('ApiService', () => {
  let httpMock: HttpTestingController;
  let service: ApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ApiService ]
    });

    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected data', () => {
    const mockData: Pokemon[] = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
    const url = `${service.BASE_URL}pokemon?limit=1200`;
    // Make an HTTP GET request
    httpClient.get<Pokemon[]>(url)
      .subscribe(data =>
        expect(data).toEqual(mockData)
     );

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');

    req.flush(mockData);
  });

  it('can test for 404 error', () => {
    const errorMessage = '404 error';
    const url = `${service.BASE_URL}poke?limit=1200`;
  
    httpClient.get(url).subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(errorMessage, 'message');
      }
    );
  
    const req = httpTestingController.expectOne(url);

    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  });
});

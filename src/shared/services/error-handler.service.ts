import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handleError(error) {

    if (error.rejection) {
      // Handle promise errors
			error = error.rejection;
		}

    console.error(error);
    window.alert(error);

    throw error;
  }
}

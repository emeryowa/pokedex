/**
 * Filters out given objects out of given array by checking given properties and values to filter on. Useful in * *ngFor to hide items from list.
 *
 * Usage:
 *  items | filter : { property : value, property : value}
 * Example:
 *  *ngFor="let item of (items | filter : {property : 'my search value'})
 */

 import { Pipe, PipeTransform } from '@angular/core';

 @Pipe({name: 'filter'})
 
 export class FilterPipe implements PipeTransform {
   public transform(items, filters) {
 
     // If no filters or items return all items
     if (!filters || !items) {
       return items;
     }
 
     // Iterates over items and checks each property in filters
     let filter = function(obj, filters) {
       return Object.keys(filters).every(prop => {
         if (!filters[prop] || filters[prop] === '') {
           return true;
         }
 
         if (!obj[prop]) {
           return false;
         }

         if (typeof obj[prop] === "boolean"){
           return obj[prop];
        }
 
         return obj[prop].indexOf(filters[prop]) > -1 || obj[prop].toLowerCase().indexOf(filters[prop]) > -1;
       });
     };
 
     // Get filtered items
     let filteredItems = items.filter(obj => filter(obj, filters));
 
     // Return filtered items or return -1 if no items found in filters
     return filteredItems || []
   }
 }
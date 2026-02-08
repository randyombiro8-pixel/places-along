# Places I've Been

## Tests

### Test 1: Constructor Creates Place Object
- **Description**: Should create a new Place object with given properties
- **Code**: `const paris = new Place("France", ["Eiffel Tower"], "winter", "Beautiful city")`
- **Expected**: `paris` should be an object with all properties set
- //i.e console.log(france) shows the object
- **Status**: ✅ PASS

### Test 2: Properties Are Accessible   
## should show as below  

console.log(paris.location); // "Paris"  

console.log(paris.landmarks); // ["Eiffel Tower"]  

console.log(paris.timeOfYear); // "Spring"  

console.log(paris.notes); // "Loved it!"  

 -**Status**: ✅ PASS

   ### Does display()info work   
   console.log(paris.displayInfo());  
   
// Shows: "Location: Paris, Landmarks: Eiffel Tower, Visited: Spring, Notes: Loved it!"

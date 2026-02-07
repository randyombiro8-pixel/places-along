# Places I've Been

## Tests

### Test 1: Constructor Creates Place Object
- **Description**: Should create a new Place object with given properties
- **Code**: `const paris = new Place("Paris", ["Eiffel Tower"], "Spring", "Beautiful city")`
- **Expected**: `paris` should be an object with all properties set
- **Status**: ✅ PASS

### Test 2: Properties Are Accessible  
- **Description**: Should be able to access location, landmarks, timeOfYear, notes
- **Code**: `paris.location === "Paris" && Array.isArray(paris.landmarks)`
- **Expected**: All properties return correct values
- **Status**: ✅ PASS

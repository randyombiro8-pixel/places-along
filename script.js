//place constructor
 function Place(location,landmarks,timeOfYear,notes){
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear  = timeOfYear;
    this.notes = notes;

 }
 const place = new place('test',['test'],'test','test');
 console.log('constructor test:',testPlace);
//a way to display the info
Place.prototype.displayInfo = function() {
  return `Location: ${this.location}, 
          Landmarks: ${this.landmarks.join(", ")}, 
          Visited: ${this.timeOfYear}, 
          Notes: ${this.notes}`;
};


const paris = new Place("Paris", ["Eiffel Tower", "Louvre"], "Spring", "Loved it!");
console.log("Test 3 - displayInfo method:");
console.log(paris.displayInfo());

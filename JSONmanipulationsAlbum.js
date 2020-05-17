/*You are given a JSON object representation as a musical album collection. Each album has several properties 
and a unique id as a key. Not all albums have complete information. Wite a function which takes album's id, 
property and a value to modify data in the collection.

Rules:
1. If property isn't "tracks" and the value isn't empty, update/set value for that record album's property.
2. Your function must always return entire collection.
3. If property is "tracks" but album doesn't have tracks property, create an empty array before adding a 
new value to the album's corresponding property.
4. If property is "tracks" and value isn't empty , push the value onto the end of the existing tracks.
5. If value is empty, delete the given property from the album. */

var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
          "Let It Rock",
          "You Give Love a Bad Name"
        ]
      },
      2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
          "1999",
          "Little Red Corvette"
        ]
      },
      1245: {
        artist: "Robert Palmer",
        tracks: [ ]
      },
      5439: {
        album: "ABBA Gold"
      }
    };
    
    function updateRecords(id, prop, value) {
    if(value === ""){
        delete collection[id][prop];
    }
    else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }
    
    return collection; 
    }
    


updateRecords(5439, "artist", "ABBA");
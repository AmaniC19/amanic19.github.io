//objectValues() : Should take an object and return its values in an array

function objectValues(obj) {
    const output = [];
    for(var key in obj) {
        output.push(obj[key]);
    }
    return output;
}

//keysToString() : Should take an object and return all its keys in a string each separated with a space

function keysToString(obj) {
   return Object.keys(obj).join(' ');
    
}


//valuesToString() : Should take an object and return all its string values in a string each separated with a space

function valuesToString(obj) {
   // const values = objectValues(obj);
    var justPut = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
        justPut.push(obj[key]);
        }
    }
    return justPut.join(' ');
}

//arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object

function arrayOrObject(arg) {
    return Array.isArray(arg) ? "array" : "object";
}


//capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized 
function capitalizeWord(string) {
    var myArray = string.split('');
    myArray[0] = myArray[0].toUpperCase();
    //console.log(myArray);
    return myArray.join('');
    
}

//capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized 
function capitalizeAllWords(words) {
    var allWords = [];
    for(var word of words.split(' ')) {
        //console.log(word);
      allWords.push(capitalizeWord(word));
    }
    return allWords.join(' ');
}

//welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!

function welcomeMessage(obj) {
    var changeName = capitalizeWord(obj.name);
    return 'Welcome ' + changeName + '!';
}


//profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'
function profileInfo(obj) {
    var changeName = capitalizeWord(obj.name);
    var changeSpecies = capitalizeWord(obj.species);
    return changeName + ' is a ' + changeSpecies;
}

//maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space,
//if there are no noises return 'there are no noises'

function maybeNoises(obj) {
   //console.log(obj);
    if(typeof obj.noises === 'undefined') {
        return 'there are no noises';
    } else if(Array.isArray(obj.noises) === true && obj.noises.length >= 1) {
        return obj.noises.join(' ');
    } else {
        return 'there are no noises';
    }
}

//hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
function hasWord(sow,word) {
    var aow = sow.split(' ');
    return (aow.indexOf(word) > -1);
}



//addFriend() : Should take a name and an object and add the name to the object's friends array then return the object 

function addFriend(name,obj) {
    //console.log(name);
   //console.log(obj);
    obj.friends.push(name);
    return obj;
}


//isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise 
function isFriend(name,obj) {
    //console.log(name);
    //console.log(obj);
    if(typeof obj.friends === 'undefined') {
        return false;
    } else if(Array.isArray(obj.friends) === true && obj.friends.indexOf(name) > -1 ) {
        return true;
    } else {
        return false;
    }
}


//nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with

function nonFriends(name,arr) {
    var nonFriendsList = [];
    //console.log(arr);
    //console.log(name);
    for(var person of arr) {
        //console.log(person);
        if(person.friends.indexOf(name) === -1 && person.name !== name) {
            nonFriendsList.push(person.name);
        }
    
    }
    //console.log(nonFriendsList);

    return nonFriendsList;
}

//updateObject() : Should take an object, a key and a value. 
//Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.

function updateObject(obj,key,value) {
    //console.log(obj);
    //console.log(key);
    //console.log(value);
 obj[key] = value;
 return obj;
    
}

// removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
function removeProperties(obj,aos) {
   //console.log(obj);
   //console.log(aos);
    for(var key in obj ) {
        key.toString(key);
        //console.log(key);
        if(aos.indexOf(key) > -1) {
            delete obj[key];
        }
    }
    //console.log(obj);
    return obj;
}

//dedup() : Should take an array and return an array with all the duplicates removed 
function dedup(arr) {
    var arrNoDup = [];
    for(var number of arr) {
        console.log(number);
        if(arrNoDup.indexOf(number) === -1) {
            arrNoDup.push(number)
        }
    }
   //console.log(arr);
    //console.log(arrNoDup);
    return arrNoDup;
}

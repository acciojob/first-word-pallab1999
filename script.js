function firstWord(str) {
    // Trim leading spaces first
    str = str.trim();
    
    // Find the index of the first space
    let spaceIndex = str.indexOf(' ');
    
    // If no space is found, return the entire string
    return spaceIndex === -1 ? str : str.slice(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

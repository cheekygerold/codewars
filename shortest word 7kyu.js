// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//answer

let findShort = (s) => s.split(' ').map(x=> +x.length).sort((a,b) =>a>b?1:-1)[0]
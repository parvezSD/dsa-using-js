/*
To find all anagrams, let’s split every word to letters and sort them. When letter-sorted, all anagrams are same.
> For instance:
nap, pan -> anp
ear, era, are -> aer
cheaters, hectares, teachers -> aceehrst
*/


function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // split the word by letters, sort them and join back
        let sorted = word.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));


/*
Letter-sorting is done by the chain of calls in the line (*).
For convenience let’s split it into multiple lines:

let sorted = word // PAN
  .toLowerCase() // pan
  .split('') // ['p','a','n']
  .sort() // ['a','n','p']
  .join(''); // anp
Two different words 'PAN' and 'nap' receive the same letter-sorted form 'anp'.

The next line put the word into the map:
map.set(sorted, word);

If we ever meet a word the same letter-sorted form again, then it would overwrite the previous value with the same key in the map. So we’ll always have at maximum one word per letter-form.

At the end Array.from(map.values()) takes an iterable over map values (we don’t need keys in the result) and returns an array of them.
*/
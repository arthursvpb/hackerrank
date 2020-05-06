// https://www.hackerrank.com/challenges/js10-regexp-1/topics
// https://stackoverflow.com/questions/35814097/regex-to-match-beginning-and-end-of-a-word-with-a-vowel

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  // Notes:
  // regex HAS to be concatenated
  // / / is the regular expression literal
  // ^ matches the beginning
  // () is for precedence
  // [] matches anything inside [a | e | i | o | u]
  // . is any character
  // * is the character repeating (in this case, anything)
  // \1 is a special caracter backreference to the first capture group (in this case, the vowel)
  // $ matches end of input
  // We can put some flags after / but in this case it's not necessary
  let re = /^([aeiou]).*\1$/;

  /*
   * Do not remove the return statement
   */
  return re;
}

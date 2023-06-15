# Rex tutorial

howdy this is a simple regex infomatoin guide

## Summary

Regex is a comlicated and simple coding language to help you quckly find words. Just like when you are coding and you are trying to fina a word in all your code. But then you remember you can quck searched words with control + f. Well rexgex is pretty much the same thing. Here are some brief explenations of regex and in rejex.js are three syntax for example.

 - Literal Matches:

The most basic regex pattern is a literal match. It matches the exact characters you ask.
For example, the regex pattern cat matches the string "cat" exactly.

 - Character Classes:

Character classes allow you to match specific sets of characters.
Using square brackets [] define a character class. An example, [aeiou] matches any vowel.

- Escape Sequences:

Regex has many escape sequences for matching special characters like newline \n, tab \t, etc.
For example, \d matches a digit, and \. matches a period.



## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

### Anchors
Anchors will allow you to match patterns at specific positions within the text.
^ matches the start of a line or string, while $ matches the end of a line or string.\b matches a word boundary.
For example, the pattern ^\d{3}$ matches a three-digit number.

### Quantifiers
Quantifiers specify the number of occurrences of a pattern to match.
* matches zero or more occurrences, + matches one or more occurrences, and ? matches zero or one occurrence.
You can also use {} to specify exact ranges. For example, a{3} matches exactly three consecutive 'a' characters.

### OR Operator

### Character Classes

### Flags
Regex flags modify how the pattern is interpreted.
Common flags include i (case-insensitive matching), g (global matching), and m (multiline matching).

### Grouping and Capturing

### Bracket Expressions

### Greedy and Lazy Match
By default, regex quantifiers are greedy, meaning they match as much as possible.
Adding a ? after a quantifier makes it lazy, matching as little as possible.

### Boundaries

### Back-references

### Look-ahead and Look-behind
Lookaheads ((?=...)) and lookbehinds ((?<=...)) allow you to assert that a pattern should or should not be followed or preceded by another pattern, without including it in the actual match.



## Author

Name:Abraham 

Github: vampiro832


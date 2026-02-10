/*
Problem: The Occupations (HackerRank)

Goal:
Generate two result sets:

1) List all names in alphabetical order, followed by the first letter of their occupation in parentheses.
   Example: Ashley(P)

2) Count how many times each occupation occurs.
   Sort by the count ascending; if counts tie, sort by occupation name.
   Output format: There are a total of [count] [occupation]s.
   Note: occupation must be lowercase in the sentence.

Approach:
- Query 1:
  Use SUBSTR(occupation, 1, 1) to get the first letter (Oracle).
  Concatenate strings using || and order by name.

- Query 2:
  GROUP BY occupation to get counts.
  Use LOWER(occupation) for lowercase occupation names.
  Sort by COUNT(*), then occupation.

Oracle Notes:
- Oracle uses SUBSTR instead of LEFT.
- Oracle string concatenation uses || (not CONCAT() in this pattern).
*/

-- Result Set 1
SELECT
  name || '(' || SUBSTR(occupation, 1, 1) || ')' AS result
FROM occupations
ORDER BY name;

-- Result Set 2
SELECT
  'There are a total of ' || COUNT(*) || ' ' || LOWER(occupation) || 's.' AS result
FROM occupations
GROUP BY occupation
ORDER BY COUNT(*), occupation;
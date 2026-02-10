/*
Problem: Pivot the Occupation (HackerRank)

Goal:
Pivot the OCCUPATIONS table so that each occupation becomes a column:
Doctor, Professor, Singer, Actor (in this exact order).

Each column should list names alphabetically.
If one occupation has fewer names than others, display NULL for missing values.

Approach:
1) Assign a row number to each name within the same occupation,
   ordered alphabetically.
2) Use conditional aggregation (MAX + CASE) to pivot rows into columns.
3) Group by the generated row number to align names row-wise.

Oracle Notes:
- ROW_NUMBER() is used to create a sequence per occupation.
- Oracle does not support PIVOT well in HackerRank; CASE + MAX is safer.
*/

SELECT
  MAX(CASE WHEN occupation = 'Doctor'    THEN name END) AS Doctor,
  MAX(CASE WHEN occupation = 'Professor' THEN name END) AS Professor,
  MAX(CASE WHEN occupation = 'Singer'    THEN name END) AS Singer,
  MAX(CASE WHEN occupation = 'Actor'     THEN name END) AS Actor
FROM (
  SELECT
    name,
    occupation,
    ROW_NUMBER() OVER (PARTITION BY occupation ORDER BY name) AS rn
  FROM occupations
)
GROUP BY rn
ORDER BY rn;
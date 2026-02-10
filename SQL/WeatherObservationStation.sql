/*
Problem: Manhattan Distance (STATION)

We define:
a = MIN(LAT_N)
b = MIN(LONG_W)
c = MAX(LAT_N)
d = MAX(LONG_W)

Manhattan Distance between P1(a,b) and P2(c,d) is:
|a - c| + |b - d|

Round the result to 4 decimal places.
*/

SELECT
  ROUND(
    ABS(MIN(lat_n) - MAX(lat_n)) + ABS(MIN(long_w) - MAX(long_w)),
    4
  ) AS manhattan_distance
FROM station;
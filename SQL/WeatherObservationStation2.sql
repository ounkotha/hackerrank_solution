/*
Problem: Euclidean Distance (STATION)

Define:
a = MIN(LAT_N)
b = MAX(LAT_N)
c = MIN(LONG_W)
d = MAX(LONG_W)

Points:
P1 = (a, c)
P2 = (b, d)

Euclidean distance:
sqrt( (a-b)^2 + (c-d)^2 )

Format the answer to 4 decimal places.
*/

SELECT
  ROUND(
    SQRT(
      POWER(MIN(lat_n) - MAX(lat_n), 2) +
      POWER(MIN(long_w) - MAX(long_w), 2)
    ),
    4
  ) AS euclidean_distance
FROM station;
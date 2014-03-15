-- TODO: Use stored procedures in stead.
-- This will for example let you be able to
-- limit the amount of rows -
-- which would be very helpful indeed.
CREATE VIEW view_games AS
SELECT playdate, t1.teamname AS t1_name, t2.teamname AS t2_name, stadiumname
FROM game
JOIN team t1 ON game.teamid1 = t1.teamid
JOIN team t2 ON game.teamid1 = t2.teamid
NATURAL JOIN stadium
ORDER BY playdate DESC;
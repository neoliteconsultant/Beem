
-- Query to list the top 3 orders and from which campaign
-- it has been bought and by which user. 
SELECT o.order_id, c.campaign_id, u.name, SUM(o.total) AS total_order  FROM orders o
INNER JOIN users u ON u.user_id = o.user_id
INNER JOIN  campaigns c ON c.campaign_id = u.campaign_id
GROUP BY (u.user_id)
ORDER BY total_order DESC OFFSET 0, LIMIT 2;

-- Query to list 3 most revenue generating campaigns.
SELECT c.*, SUM(o.total) AS revenue FROM campaigns c
INNER JOIN users u ON u.campaign_id = c.campaign_id 
INNER JOIN orders o  ON o.user_id = u.user_id
GROUP BY (u.user_id)
ORDER BY revenue DESC OFFSET 0, LIMIT 2;

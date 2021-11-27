const pricesCTE = `
    WITH cte_aaa AS (
            SELECT 
                orders_items.order_id AS order_id, 
                (orders_items.quantity * items.unit_price) AS product
            FROM orders JOIN orders_items USING (order_id) 
            JOIN items USING (item_id)
        )
    UPDATE orders
        SET total_price = (
            SELECT SUM(cte_aaa.product) as product_sum
            FROM cte_aaa
            WHERE orders.order_id = cte_aaa.order_id
        )
    FROM cte_aaa
    WHERE orders.order_id = cte_aaa.order_id;`;

export default pricesCTE;

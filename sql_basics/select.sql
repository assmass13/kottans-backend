WITH
  result_table AS (
    select
		  p.id as id,
		  p.first_name as first_name, p.last_name as last_name,
		  count(o.person_id) as total_orders,
      sum(oi.quantity) as total_items_bought,
      sum(oi.quantity * (i.price - oi.discount)) as total_money_spent
	  from `person` as p
	  left outer join `order` as o
		  on p.id = o.person_id
	  left outer join `order_item` as oi
		  on o.id = oi.order_id
	  left outer join `item` as i
		  on oi.item_id = i.id
	  group by id
	  order by id
  )

select 
  first_name, last_name, total_orders, total_items_bought, total_money_spent
from result_table;


# 数据库常用sql-mysql

## 按条件a分组之后取条件b最大的数据
1. 
```sql
SELECT
	* 
FROM
	( SELECT * FROM tmp HAVING 1 ORDER BY modify_index DESC ) t 
GROUP BY
	index;
```
2. 
```sql
SELECT
	* 
FROM
	tmp a 
WHERE
	NOT EXISTS ( SELECT 1 FROM tmp b WHERE b.modify_index > a.modify_index AND b.index = a.index );
```

## 关联表b，更新表a的数据
1. 
```sql
UPDATE tmp
  SET tmp.column1 =
     (SELECT column1
       FROM tmp1
      WHERE tmp1.column2 = tmp.column3)
 WHERE EXISTS
     (SELECT 1
       FROM tmp1
      WHERE tmp1.column2 = tmp.column3);
```

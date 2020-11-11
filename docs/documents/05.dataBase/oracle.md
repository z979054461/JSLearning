
# 数据库常用sql-oracle

## 按条件a分组之后取条件b最大的数据
1. 
```sql
SELECT
	* 
FROM
	( SELECT t.*, row_number ( ) over ( PARTITION BY t.index ORDER BY t.modify_index ASC ) rn FROM tmp t ) 
WHERE
	rn = 1
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
2. 
```sql
merge into tmp t1
using (select t2.column2,t2.column1 from tmp1 t2) t
on (t.column2 = t1.column3)
when matched then 
  update  set t1.column1 = t.column1;
```

## 与mysql insert ignore相同效果的语句  
[参考地址](https://docs.oracle.com/cd/E11882_01/server.112/e41084/sql_elements006.htm#CHDEGDDG)  
`insert /*+ ignore_row_on_dupkey_index(TableName, IndexName) */ into TableName (Column1, Column2, Column3, Column4)
values (Value1, Value2,Value3,Value4);`  

## ORA-01439:要更改数据类型,则要修改的列必须为空  
1、当字段没有数据或者要修改的新类型和原类型兼容时，可以直接modify修改。  
2、当字段有数据并用要修改的新类型和原类型不兼容时，要间接新建字段来转移。  
```sql
alter table tname rename column cname to cname_bak;
ALTER TABLE tname add cname decimal(16, 8) DEFAULT 000000000;
update tname set cname=cname_bak;
alter table tname drop column cname_bak;
```
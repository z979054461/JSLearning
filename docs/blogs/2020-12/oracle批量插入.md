---
title: oracle批量插入
date: 2020-12-05
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - oracle
tags: 
  - oracle 
location: HangZhou
---


表结构：
```sql
create table Student(
  id   Varchar2(11) primary key,
  name varchar2(32) not null,
  sex  varchar2(3)  not null,
  age  smallint,
  tel  varchar(16)
)
```

## 单条插入
```sql
insert into Student(id, name, sex, age, tel) values ('13', 'jack', '男', 13, '13345674567')
```

## 批量插入
- 方案一：
```sql
insert all
    into Student(id, name, sex, age, tel) values ('12', 'jack1', '男', 12, '13345674567')
    into Student(id, name, sex, age, tel) values ('13', 'jack2', '男', 13, '13345674567')
    select 1 from dual;
```
insert all into并不表示一个表中插入多条记录，而是表示`多表插入各一条记录`，而这多表可以是同一个表，就成了单表插入多条记录。 
- 方案二：
```sql
insert into Student(id, name, sex, age, tel)
select '24', 'jack', '男', 22, '13345674567' from dual
  union select '25', 'jack', '男', 22, '13345674567' from dual
  union select '26', 'jack', '男', 32, '13345674567' from dual
```

## 从另一个表插入
```sql
insert into tmp2 select * from tmp;
```

参考：`https://www.cnblogs.com/hjm0928/p/10254894.html`
参考：`https://docs.oracle.com/database/121/SQLRF/statements_9015.htm#SQLRF01604`
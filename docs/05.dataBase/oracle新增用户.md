---
title: oracle新增用户
date: 2020-11-30
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - oracle
tags: 
  - oracle 
location: HangZhou
---

## 创建表空间
```sql
declare
  v_rowcount integer;
begin
  select count(*) into v_rowcount from dual where exists(select * from v$tablespace a where a.name = upper('USERNAME_data'));
  if v_rowcount > 0 then
    execute immediate 'DROP TABLESPACE USERNAME_data INCLUDING CONTENTS AND DATAFILES';
  end if;
end;
/
CREATE TABLESPACE USERNAME_data DATAFILE '/home/oracle/USERNAMEdata.dbf' SIZE 300M
autoextend on next 100M maxsize 10G
EXTENT MANAGEMENT LOCAL
SEGMENT SPACE MANAGEMENT AUTO;
COMMIT;
/
```

## 创建USERNAME用户
```sql
declare
  v_rowcount integer;
begin
  select count(*) into v_rowcount from dual where exists(select * from all_users a where a.username = upper('USERNAME'));
  if v_rowcount > 0 then
 	 execute immediate 'DROP USER USERNAME CASCADE';
  end if;
end;
/
CREATE USER USERNAME IDENTIFIED BY USERNAME DEFAULT TABLESPACE USERNAME_data TEMPORARY TABLESPACE TEMP;
GRANT CONNECT TO USERNAME;
GRANT RESOURCE TO USERNAME;
GRANT DBA TO USERNAME;
GRANT UNLIMITED TABLESPACE TO USERNAME;
GRANT create any table TO USERNAME;
GRANT select any table TO USERNAME;
GRANT drop any table TO USERNAME;
GRANT create any index TO USERNAME;
GRANT delete any table TO USERNAME;
GRANT insert any table TO USERNAME;
GRANT update any table TO USERNAME;
GRANT create any directory TO USERNAME;
COMMIT;
/
```

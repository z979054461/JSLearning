---
title: Oracle v$SQLAREA
date: 2020-11-25
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - database
tags: 
  - oracle
location: HangZhou
---

查看sql共享区的sql统计信息
```sql
Select b.USERNAME,
b.SID,
a.SQL_ID,
a.SQL_TEXT,
a.sql_fulltext,
b.EVENT,
a.executions,
-- trunc(((decode(a.EXECUTIONS,0,0,a.cpu_time / a.executions)) / 10000)) c_time, ---单位零点秒
trunc(((decode(a.EXECUTIONS,0,0,a.ELAPSED_TIME / a.executions)) / 10000)) e_time,
--trunc(cpu_time/10000) cpu_time,
trunc(a.ELAPSED_TIME/10000) ELAPSED_TIME ,
a.DISK_READS,
a.BUFFER_GETS,
b.MACHINE,
b.PROGRAM
From v$sqlarea a, v$session b
Where executions > =0
And b.status = 'ACTIVE'
and a.SQL_ID = b.SQL_ID
-- and b.USERNAME='DB_WTDZ'
-- and trunc(((a.cpu_time / a.executions) / 1000000))>5
Order By e_time desc
```
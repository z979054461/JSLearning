---
title: oracle缓冲区参数
date: 2020-11-30
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - oracle
tags: 
  - oracle 
location: HangZhou
---


## 查看db_cache_size
`show parameter db_cache_size`
db_cache_size等SGA中的参数为0，意味着是自动管理，动态分配内存大小

## 查看sga大小
`show sga` 等同于 `select * from v$sga;`

## 查询sga动态参数大小：
`select * from v$sgainfo;`
`select component,granule_size from v$sga_dynamic_components;`
granule：内存分配粒度

## 查看buffer_cache的advice
```sql
select size_for_estimate,buffers_for_estimate,estd_physical_read_factor,estd_physical_reads
from v$db_cache_advice
where name='DEFAULT'
AND block_size=(select value from v$parameter where name='db_block_size')
AND advice_status='ON';
```

## 查看SGA的resize过程
`select COMPONENT,OPER_TYPE,OPER_MODE,INITIAL_SIZE,FINAL_SIZE,STATUS,START_TIME from v$sga_resize_ops;`

## 查看共享池、保留区大小
`show parameter shared_pool;`

## 查看保留区
- 空闲大小： `select sum(free_space) from v$shared_pool_reserved;`
- 使用情况： `SELECT FREE_SPACE, FREE_COUNT, REQUEST_FAILURES, REQUEST_MISSES, LAST_FAILURE_SIZE FROM V$SHARED_POOL_RESERVED;`

## 缓冲区命中率
```sql
select 1 - ((physical.value - direct.value - lobs.value) / logical.value)
     "Buffer Cache Hit Ratio"
  from v$sysstat physical,v$sysstat direct,v$sysstat lobs,v$sysstat logical
  where physical.name = 'physical reads'
  and direct.name='physical reads direct'
  and lobs.name='physical reads direct (lob)'
  and logical.name='session logical reads';

```

参考：
http://blog.itpub.net/23718752/viewspace-777119/
https://blog.csdn.net/qq_35624642/article/details/53169792
https://blog.csdn.net/47522341/article/details/4353694
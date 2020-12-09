---
title: 数据库行列转换
date: 2020-12-08
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - oracle mysql
tags: 
  - oracle mysql
location: HangZhou
---

使用oracle经典的scott表结构
[oracle](/数据库行列转换/SCOTT_oracle.sql)(5.71 KB)
[mysql](/数据库行列转换/SCOTT_mysql.sql)(3.98 KB)


## 子查询（通用）
```sql
select
    DNAME,
    SUM(MANAGER_JOB) AS SUM_MANAGER_SAL,
    SUM(PRESIDENT_JOB) AS SUM_PRESIDENT_SAL,
    SUM(CLERK_JOB) AS SUM_CLERK_SAL,
    SUM(ANALYST_JOB) AS SUM_ANALYST_SAL,
    SUM(SALESMAN_JOB) AS SUM_SALESMAN_SAL
from
    (select
        d.dname,
        (select sum(sal) from emp where emp.empno = e.empno and emp.job = 'MANAGER') as MANAGER_JOB,
        (select sum(sal) from emp where emp.empno = e.empno and emp.job = 'PRESIDENT' ) as PRESIDENT_JOB,
        (select sum(sal) from emp where emp.empno = e.empno and emp.job = 'CLERK' ) as CLERK_JOB,
        (select sum(sal) from emp where emp.empno = e.empno and emp.job = 'ANALYST' ) as ANALYST_JOB,
        (select sum(sal) from emp where emp.empno = e.empno and emp.job = 'SALESMAN' ) as SALESMAN_JOB
    from
        emp e,
        dept d
    where
        e.deptno = d.deptno
    ) temp
group by
    temp.dname
order by
    temp.dname;
```
![](/数据库行列转换/result1.png)

>通过查询结果可以看到，这里我们已经实现了行列转换，同时这个结果也符合我们日常阅读习惯。但是代码过于复杂，执行计划`回表次数`明显会很多。这里的代码基本符合任何一种支持SQL的数据库基本语法，属于通用模式


## case when (通用)
```sql
select
    d.dname,
    sum(
        case
            when e.job = 'ANALYST' then sal
            else 0
        end
    ) as ANALYST_JOB,
    sum(
        case
            when e.job = 'CLERK' then sal
            else 0
        end
    ) as CLERK_JOB,
    sum(
        case
            when e.job = 'MANAGER' then sal
            else 0
        end
    ) as MANAGER_JOB,
    sum(
        case
            when e.job = 'PRESIDENT' then sal
            else 0
        end
    ) as PRESIDENT_JOB,
    sum(
        case
            when e.job = 'SALESMAN' then sal
            else 0
        end
    ) as SALESMAN_JOB
from
    emp e,
    dept d
where
    e.deptno = d.deptno
group by
    d.dname;
```
![](/数据库行列转换/result3.png)


## decode()函数(Oracle)  
```sql
select
    d.dname,
    sum(decode(job, 'MANAGER', sal, 0)) as SUM_MANAGER_SAL,
    sum(decode(job, 'PRESIDENT', sal, 0)) as SUM_PRESIDENT_SAL,
    sum(decode(job, 'CLERK', sal, 0)) as SUM_CLERK_SAL,
    sum(decode(job, 'ANALYST', sal, 0)) as SUM_ANALYST_SAL,
    sum(decode(job, 'SALESMAN', sal, 0)) as SUM_SALESMAN_SAL
from
    emp e,
    dept d
where
    e.deptno = d.deptno
group by
    d.dname;
```
![](/数据库行列转换/result2.png)


## pivot和unpivot函数(Oracle 11g)
pivot 语法如下：
```js
select *|列 [别名],...

from 子查询

pivot(统计函数(列)s for 转换列名称 in(

  内容1 [[as] 别名],

  内容2 [[as] 别名],

  ... ...

  内容n [[as] 别名]

  )

)

[where 条件(s)]

[group by 分组字段1,分组字段2,... ...]

[having 过滤条件(s)]

[order by 排序字段 asc|desc]
```
unpivot 语法如下：
```js
select *|列 [别名],...

from 子查询

unpivot [include nulls|exclude nulls(默认)](

统计函数(列)s for 转换列名称 in(

内容1 [[as] 别名],

内容2 [[as] 别名],

... ...

内容n [[as] 别名]

)

)

[where 条件(s)]

[group by 分组字段1,分组字段2,... ...]

[having 过滤条件(s)]

[order by 排序字段 asc|desc]
```

pivot示例：
```sql
select
    *
from
    (
        select
            d.dname,
            e.job,
            e.sal
        from
            emp e,
            dept d
        where
            e.deptno = d.deptno
    ) pivot(
        sum(sal) for job in(
            'ANALYST' AS ANALYST_JOB,
            'CLERK' AS CLERK_JOB,
            'MANAGER' AS MANAGER_JOB,
            'PRESIDENT' AS PRESIDENT_JOB,
            'SALESMAN' AS SALESMAN_JOB
        )
    )
order by
    dname;
```
![](/数据库行列转换/result4.png)

unpivot示例：
@TODO 这里没太看明白
```sql
with temp as (
    select
        *
    from
        (
            select
                d.dname,
                e.job,
                e.sal
            from
                emp e,
                dept d
            where
                e.deptno = d.deptno
        ) pivot(
            sum(sal) for job in(
                'ANALYST' AS ANALYST_JOB,
                'CLERK' AS CLERK_JOB,
                'MANAGER' AS MANAGER_JOB,
                'PRESIDENT' AS PRESIDENT_JOB,
                'SALESMAN' AS SALESMAN_JOB
            )
        )
    order by
        dname
)
select
    *
from
    temp unpivot (
        sum_sal for job in(
            ANALYST_JOB as 'ANALYST',
            CLERK_JOB as 'CLERK',
            MANAGER_JOB as 'MANAGER',
            PRESIDENT_JOB as 'PRESIDENT',
            SALESMAN_JOB as 'SALESMAN'
        )
    );
```
![](/数据库行列转换/result7.png) 

可以加上include nulls显示null： 
```sql
select
    *
from
    temp unpivot include nulls(-- 
        sum_sal for job in(
            ANALYST_JOB as 'ANALYST',
            CLERK_JOB as 'CLERK',
            MANAGER_JOB as 'MANAGER',
            PRESIDENT_JOB as 'PRESIDENT',
            SALESMAN_JOB as 'SALESMAN'
        )
    );
```
![](/数据库行列转换/result8.png) 


其他例子：
- 查询每个部门的总工资，每个部门不同职位的总工资和每个部门的最高工资和最低工资： 
```sql
select
    *
from
    (
        select
            deptno,
            job,
            sal,
            sum(sal) over(partition by deptno) as sum_sal,
            max(sal) over(partition by deptno) as max_sal,
            min(sal) over(partition by deptno) as min_sal
        from
            emp
    ) pivot(
        sum(sal) for job in(
            'ANALYST' AS ANALYST_JOB,
            'CLERK' AS CLERK_JOB,
            'MANAGER' AS MANAGER_JOB,
            'PRESIDENT' AS PRESIDENT_JOB,
            'SALESMAN' AS SALESMAN_JOB
        )
    )
order by
    deptno;
```
![](/数据库行列转换/result4.png) 

- 查询每个部门不同职位总工资以及每个部门不同职位最高工资：
```sql
select
    *
from
    (
        select
            deptno,
            job,
            sal
        from
            emp
    ) pivot(
        sum(sal) as sum_sal,
        max(sal) as sum_max for job in(
            'ANALYST' AS ANA_JOB,
            'CLERK' AS CLE_JOB,
            'MANAGER' AS MAN_JOB,
            'PRESIDENT' AS PRE_JOB,
            'SALESMAN' AS SAL_JOB
        )
    )
order by
    deptno;
```
![](/数据库行列转换/result5.png) 


参考：https://www.cnblogs.com/wcwen1990/p/7550953.html
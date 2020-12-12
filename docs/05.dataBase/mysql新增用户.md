---
title: mysql新增用户
date: 2020-11-30
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - mysql
tags: 
  - mysql 
location: HangZhou
---

# Heading
[[toc]]

## 删除用户
```sql
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ANSI';
DROP PROCEDURE IF EXISTS `mysql`.`drop_user_if_exists`;
DELIMITER $$
CREATE PROCEDURE `mysql`.`drop_user_if_exists`()
BEGIN
IF EXISTS
(
	select *
	from mysql.`user` u
	where u.`User` = 'USERNAME'
		and u.`Host`  = 'localhost'
)
THEN
DROP USER 'USERNAME'@'localhost' ;
END IF;
IF EXISTS
(
	select * from mysql.`user` u where u.`User` = 'USERNAME' and u.`Host` = '%'
)
THEN
DROP USER 'USERNAME'@'%' ;
END IF;
END ;$$
DELIMITER ;
CALL `mysql`.`drop_user_if_exists`();
DROP PROCEDURE IF EXISTS `mysql`.`drop_users_if_exists` ;
SET SQL_MODE=@OLD_SQL_MODE ;
```

## 创建数据库
```sql
CREATE DATABASE IF NOT EXISTS `USERNAME` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
```

## 创建用户
```sql
USE `USERNAME`;
CREATE USER 'USERNAME'@'%' IDENTIFIED BY 'USERNAME';
GRANT
SELECT                  ,
INSERT                  ,
UPDATE                  , REFERENCES,
DELETE                  , CREATE,
DROP                    , ALTER, INDEX, TRIGGER,
CREATE VIEW             ,
	SHOW VIEW              ,
	EXECUTE                ,
	ALTER ROUTINE          ,
	CREATE ROUTINE         ,
	CREATE TEMPORARY TABLES,
	LOCK TABLES ON `USERNAME`.* TO 'USERNAME'@'%';
GRANT
SELECT ON `hspub`.* TO 'USERNAME'@'%';
GRANT
SELECT ON `hsjc`.* TO 'USERNAME'@'%';
GRANT GRANT OPTION ON `USERNAME`.* TO 'USERNAME'@'%';
```
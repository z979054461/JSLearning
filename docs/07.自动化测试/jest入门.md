---
title: jest配置和使用
date: 2020-7-7
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - 自动化测试
tags: 
location: HangZhou
---


- Jest识别三种测试文件，以.test.js结尾的文件，以.spec.js结尾的文件，和放到__tests__ 文件夹中的文件
- describe 测试集


## 配置 
1. 安装  
`npm install --g jest` （推荐全局）
2. 新建一个项目  
`npm init -y`
3. 其他依赖  
`npm install --save-dev babel-jest babel-core babel-preset-env regenerator-runtime`  
这几个依赖是为了让我们可以使用ES6的语法特性进行单元测试，ES6提供的 import 来导入模块的方式，Jest本身是不支持的。
4. 添加.babelrc文件
```js
  {
    "presets": ["env"]
  }
```
5. 官方的配置太繁琐，简化如下：
   1. .babelr文件
   ```js
    {
        "env": {
            "test": {
                "plugins": [
                    "@babel/plugin-transform-modules-commonjs"
                ]
            }
        }
    }
   ```
   2. package.json - devDependencies
   ```js
    "@babel/plugin-transform-modules-commonjs": "^7.7.0",
   ```

## 使用

1. 执行测试  
`jest`
使用npm 
```js
test:jest --argus
npm run test -- --argus //npm 需要在脚本之间增加 --
yarn --argus //yarn 和直接用jest一样
```
2. 运行监视模式  
```js
jest --watch //runs jest -o by default
jest --watchAll //runs all tests
```

3. `jest --coverage`  
覆盖率报告

## 常用匹配器
toBe and toEqual are equivalent for numbers

- expect 期望的对象
- toBe Object.is 来测试精确相等
- toEqual 递归检查对象或数组的每个字段 
- toBeNull 只匹配 null
- toBeUndefined 只匹配 undefined
- toBeDefined 与 toBeUndefined 相反
- toBeTruthy 匹配任何 if 语句为真
- toBeFalsy 匹配任何 if 语句为假
- toBeGreaterThan 大于 >
- toBeGreaterThanOrEqual 大于等于 >=
- toBeLessThan 小于 <
- toBeLessThanOrEqual 小于等于 <=
- toBeCloseTo 浮点数相等
- toMatch 正则表达式
- toContain 数组或可迭代对象是否包含某个特定项
- toThrow 匹配抛出的Error对象、错误信息、错误信息正则
  ```js
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);
  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
  ```
[more expect](https://jestjs.io/docs/zh-Hans/expect)

## 异步测试
1. 回调  
done方法结束测试，error需要通过done传出
```js
test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback);
});

```
2. promise
测试回调需要返回promise
- resolved
```js
test('[Promise]the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    })
});
```
- rejected
```js
test('the fetch fails with an error', () => {
  expect.assertions(1);//请确保添加 expect.assertions 来验证一定数量的断言被调用
  return fetchData().catch(e => expect(e).toMatch('error'));
});
```
`expect.assertions(1)`就是明确告诉jest, 在执行这个测试用例的时候，一定要做一次断言。后面的数字是几，就表明在一个test中，一定要做几次断言，如果没有执行catch，也就没有执行断言，和这里的1，要做一次断言不符，测试失败，也就达到了测试的目的。

- expect() 方法返回的对象提供了resolves 和rejects 属性  
```js
test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchData()).rejects.toMatch('error');
});
```
## mock

1. 自定义匹配器
```js
// The mock function was called at least once
expect(mockFunc).toHaveBeenCalled();

// The mock function was called at least once with the specified args
expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

// The last call to the mock function was called with the specified args
expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

// All calls and the name of the mock is written as a snapshot
expect(mockFunc).toMatchSnapshot();

// The mock function was called at least once
expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

// The mock function was called at least once with the specified args
expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

// The last call to the mock function was called with the specified args
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
  arg1,
  arg2,
]);

// The first arg of the last call to the mock function was `42`
// (note that there is no sugar helper for this specific of an assertion)
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

// A snapshot will check that a mock was invoked the same number of times,
// in the same order, with the same arguments. 它还会在名称上断言。
expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
expect(mockFunc.getMockName()).toBe('a mock name');
```

## 钩子函数
1. 可以采取 done 参数或返回一个 promise
2. 可以应用到文件中的每个测试
3. 在 describe 块内部时，只适用于块内测试

- beforeEach 和 afterEach 为多次测试重复设置  
- beforeAll 和 afterAll 一次性初始化 

  

> [参考官网](https://jestjs.io/docs/zh-Hans/getting-started)  
> [参考博客园](https://www.cnblogs.com/SamWeb/p/11454923.html)
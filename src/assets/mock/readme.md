# 欢迎使用Markdown编辑器

## 功能

### 预防xss攻击

<h1>预防xss攻击</h1>

## 语法

### 代码高亮

- html代码高亮

```html
<div style="height: 600px;">
  <z-markdown [formGroup]="formGroup" [key]="key"></z-markdown>
</div>
```

- css代码高亮

```css
html, body {
  height: 100%;
}

body {
  margin: 0;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  padding: 0;
}
```

- javascript

```javascript
/**
 * ajax请求
 * @param method 请求方法
 * @param params get请求的参数
 * @param data post请求的参数
 * @param url 请求地址
 * @param async 是否异步,默认为异步
 * @param success 请求成功时调用
 * @param failure 请求失败时调用
 * @param headers 请求头信息
 * @param responseType 设置后台返回的数据类型
 */
function ajax({method, params, data, url, async, success, failure, headers, responseType}) {
    // 将请求方法转大写,不传默认为GET
    method = (method && method.toUpperCase()) || 'GET';
    // 为url链接的参数添加请求
    url = `${url}${params ? '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&') : ''}`;
    // async只要不设置为false,那么就为true
    async = async !== false;

    // 创建XMLHttpRequest对象,这里没有考虑低版本的IE浏览器
    const xhr = new XMLHttpRequest();

    // 创建一个新的Http请求,并指定Http的请求方法,URL以及验证信息
    xhr.open(method, url, async);

    // 监听Http的请求状态
    xhr.onreadystatechange = () => {
        // readyState为4时获取异步调用返回的数据
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // 通过回调函数获取请求成功的数据
                success && success(xhr.response);
            } else {
                // 通过回调函数获取请求失败的数据
                failure && failure(xhr.statusText);
            }
        }
    };

    // responseType默认为json
    xhr.responseType = 'json';
    if (responseType && responseType !== 'json') {
        xhr.responseType = responseType;
    }

    // 设置请求头
    if (headers) {
        Object.keys(headers).forEach(key => {
            xhr.setRequestHeader(key, headers[key]);
        })
    }

    // 发送Http请求
    method === 'GET' ? xhr.send() : xhr.send(data);
}

```


## 图片

![头像](https://hezhijian.oss-cn-beijing.aliyuncs.com/blog/img/avatar.jpg)


## 引用

> 引用内容


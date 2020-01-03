
# markdown 语法大全

## 标题-一共六种

\# 一个井号 表示大标题，剩下五种以井号数量类推，最多六个井号

## 标题-二阶标题

在输入文字的下一行加上 \= 号(数量不限) ，二阶标题输入 \- 号(数量不限)
![alt](../../resource/example.png)

## 字体

斜体：\** 内容 **  
粗体：\** 内容 **  
粗斜体：\** 内容 **

## 链接-两种

\[链接的内容](链接地址)

[邱旭的备忘录](http://www.qunincey.com)

\<链接的地址>  
<http://www.qunincey.com>

## 图片插入

![图片alt](图片地址 ''图片title'')

![logo](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577691975759&di=f0547d658fab31d628872b06ac49d43b&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D4141795614%2C1697102355%26fm%3D214%26gp%3D0.jpg)

## 脚注

带解释[^2]

## 引用

\> + 引用内容
>第一楼
>>第二楼
>>>第三楼

引用换行加上\<br>

## 代码块

\`代码内容\`  || \```代码内容\```

`System.out.println("hello world")`

```System.out.println("hello world && use three `")```

## 分割线

\*** & \--- & \___

***

## 删除线

\~~ 内容 \~~

~~shangchu~~

## 无序列表

 \*-+

* 星星
  
- 减号

+ 加好
  
## 有序列表

序号 + 内容

1. 1
2. 2
3. 3

## 嵌套列表

上下两级列表之间嵌入三个空格

* 一级无序列表
   * 二级不许
      * 三级无序

## 表格

```markdown

| 项目   |   价格 | 数量  |
| ------ | -----: | :---: |
| 计算机 | \$1600 |   5   |
| 手机   |   \$12 |  12   |
| 管线   |    \$1 |  234  |
| >      |     ce |  ce   |

```

| 项目   |   价格 | 数量  |
| ------ | -----: | :---: |
| 计算机 | \$1600 |   5   |
| 手机   |   \$12 |  12   |
| 管线   |    \$1 |  234  |
| >      |     ce |  ce   |
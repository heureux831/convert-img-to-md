对于使用obsidian的我，当别人发给我一份在typora上写的笔记时，出现了图片无法显示的问题，由于obsidian不支持html，所以需要将html图片标签转换为markdown图片标签，于是写了这个插件。


## 插件功能

转换html图片标签为markdown图片标签

转换`<img src="images/新华字典.jpg" alt="新华字典" style="zoom:28%;" />`或`<img src="images/新华字典.jpg" alt="新华字典" />`为

`![新华字典](images/新华字典.jpg)`

## 使用方法

1. 安装插件

clone仓库到本地，进入convert-img-to-md目录，执行以下命令：

```
npm install
```

复制生成的main.js、mainfest.json文件到.obsidian/plugins目录下,然后在obsidian第三方插件中启用。

2.打开命令面板，输入convert-img-to-md后执行

3. 转换后的markdown图片标签将自动替换原文件中的标签

## 注意事项

1.由于插件选择遍历所有内容，所以可能会替换掉一些不需要替换的图片标签，所以建议在转换前备份原文件，或者在转换后手动修改。

2.如果有使用问题，请在issue中提出。


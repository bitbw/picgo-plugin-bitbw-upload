## picgo-plugin-bitbw-upload

> 说明 ：自定义 picgo 上传插件, 可以实现自定义上传接口， 上传到自己的服务器上



## 安装 picgo

```bash
# 安装
npm i -g picgo # 或者 npm install picgo -g

# 上传具体路径图片
picgo upload /xxx/xxx.jpg

# 上传剪贴板里的第一张图片（上传时会将格式转成png） 上传后才有picgo默认的配置文件所在的目录
picgo upload

```

## 加载插件

进到 picgo[默认的配置文件所在的目录](https://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#默认配置文件)里 输入：

```bash
npm install picgo-plugin-bitbw-upload
```

## 编辑配置文件

修改 picgo[默认的配置文件所在的目录](https://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6) 下config.json


```json
{
  "picBed": {
    "uploader": "bitbw-uploader",
    "current": "bitbw-uploader"
  },
  "picgoPlugins": {
    "picgo-plugin-bitbw-upload": true
  },
  "picgo-plugin-bitbw-upload": {
    //  自定义 上传地址
    "url": "https://bitbw.top/xxxx/upload",
    // 自定义 formData 中的 key
    "key": "image"
  }
}
```

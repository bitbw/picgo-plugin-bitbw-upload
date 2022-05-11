## picgo-plugin-bitbw-upload

> 说明 ：自定义 picgo 上传插件, 可以实现自定义上传接口， 上传到自己的服务器上

配置案例

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

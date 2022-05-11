// https://picgo.github.io/PicGo-Core-Doc/zh/dev-guide/cli.html#transformer
module.exports = (ctx) => {
  const register = () => {
    // 上传
    ctx.helper.uploader.register("bitbw-uploader", {
      async handle(ctx) {
        console.log("=============ctx.output", ctx.output);
        // 获取当前插件的配置
        let config = ctx.getConfig("picgo-plugin-bitbw-upload");
        console.log("============= config", config);
        // 图片列表
        const imgList = ctx.output;
        try {
          for (const img of imgList) {
            if (img.fileName && img.buffer) {
              const base64Image = img.base64Image || Buffer.from(img.buffer);
              const options = {
                method: "POST",
                url:config.url,
                formData: {
                  [config.key]: {
                    value: base64Image,
                    options: {
                      filename: img.fileName,
                      contentType: "image/jpg",
                    },
                  },
                },
              };
              // request 使用 https://github.com/request/request
              let body = await ctx.Request.request(options);
              if (body) {
                delete img.base64Image;
                delete img.buffer;
                // 必须把 imgUrl 回填
                img.imgUrl = body;
              } else {
                throw new Error("Server error, please try again");
              }
            }
          }
          return ctx;
        } catch (err) {
          ctx.emit("notification", {
            title: "上传失败",
            body: "请检查你的配置以及网络",
            text: "text",
          });
          throw err;
        }
      },
    });
  };
  const commands = (ctx) => [
    {
      label: "",
      key: "",
      name: "",
      async handle(ctx, guiApi) {},
    },
  ];
  return {
    uploader: "bitbw-uploader",
    commands,
    register,
  };
};

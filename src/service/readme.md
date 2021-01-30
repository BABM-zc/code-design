# code-design实现包

包含了api和对应的service实现

api包：仅为纯的api接口不含实现

service包：包含所有的code-design的实现

所有的实现会通过的一个叫DesignBoard的服务进行挂载，我们在view层使用的时候直接，

```
const designBoard: IDesignBoardService = new DesignBoardService()
```

然后就能愉快的使用所有关于code-design目前包含的所有接口能力拉。
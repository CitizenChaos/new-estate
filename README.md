# new-estate

## 关于换肤

### 我想添加类名

有关换肤的**类名**全在`src/theme/themeClassName.scss`中。如果需要添加，请往该文件中添加。

### 我想使用皮肤类名

有关换肤的**类名**全在`src/theme/themeClassName.scss`中。比如`el-button`组件，添加`custom_btn_plain_32`类名就是空心风格、高度 32px 的样式

### 我想添加颜色

有关换肤的**颜色**全在`src/theme/theme.scss`中。目前支持了 5 种颜色：normal、hover、active、disable、error。如果想要添加，请往参数中添加第 6 种颜色。需要注意的是，在`src/theme/themeClassName.scss`和`src/theme/mixin.scss`中需要添加相应的形参来接受。

<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-07-09 15:58:55
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-08-09 14:45:11
-->
# beauty-border

> beautiful card component

## Quick Start
``` javascript
完整引入
import Vue from 'vue'
import beautyBorder from 'beauty-border'

Vue.use(beautyBorder)

<yl-border-1></yl-border-1>

按需引入
import { YlBorder1 } from 'beauty-border'
```

## Demo
![ylborder2](https://github.com/webwangyl/beauty-border/tree/master/src/assets/ylborder2.png)
``` javascript
不指定宽高则按照父元素宽高100%展示
<yl-border-2></yl-border-2>

import { YlBorder2 } from 'beauty-border'
...
export default {
    component: { YlBorder2 },
    ...
}
```

For detailed explanation on how things work, consult the [source code](https://github.com/webwangyl/beauty-border/tree/master).

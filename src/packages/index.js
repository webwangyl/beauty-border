/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-08-09 13:13:51
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-08-09 13:54:10
 */
import YlBorder1 from './YlBorder1'
import YlBorder2 from './YlBorder2'

const components = [
    YlBorder1,
    YlBorder2,
]

const install = function(Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    YlBorder1,
    YlBorder2,
}
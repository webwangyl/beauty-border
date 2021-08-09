<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-07-09 16:31:23
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-08-09 15:26:15
-->

<template>
    <div class="magic-border-container" :style="containerStyle">
        <div class="magic-border-top"></div>
        <div class="magic-border-left"></div>
        <div class="magic-border-bottom">
            <div class="magic-border-bottom-poly" v-for="i in polyList" :key="i"></div>
        </div>
        <div class="magic-border-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'yl-border-1',
    components: {},
    props: {
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        polyNum: {
            type: Number,
            default: 4
        },
        angleColor: {
            type: String,
            default: '#1aabff'
        },
        mainColor: {
            type: String,
            default: '#5089a6'
        },
        polyColor: {
            type: String,
            default: '#0adaff'
        },
    },
    data() {
      return {};
    },
    watch: {},
    computed: {
        polyList() {
            let result = []
            for(let i = 0; i < this.polyNum; i++) {
                result.push(i)
            }
            return result
        },
        containerStyle() {
            return {
                'width': this.width ? this.width + 'px' : '100%',
                'height': this.height ? this.height + 'px' : '100%',
                '--color-angle': this.angleColor,
                '--color-main': this.mainColor,
                '--color-poly': this.polyColor
            }
        }
    },
    methods: {},
    created() {},
    mounted() {},
    destroyed() {}
};
</script>
<style lang="scss" scoped>
$color-angle: var(--color-angle);
$color-main: var(--color-main);
$color-poly: var(--color-poly);
.border_normal {
    position: absolute;
    background: $color-angle;
}
.magic-border-container {
    position: relative;
    clip-path: polygon(20% 0, 100% 0, 100% 75%, 74% 100%, 0 100%, 0 20%);
    padding-left: 10px;
    padding-top: 20px;
    padding-right: 4px;
    padding-bottom: 15px;
}

.magic-border-top {
    top: 0;
    right: 0;
    width: 100%;
    height: 15px;
    clip-path: polygon(85% calc(100% - 2px), 88% 50%, 100% 50%, 100% 100%, 0 100%, 0 calc(100% - 2px));
    @extend .border_normal;
}

.magic-border-left {
    left: 0;
    top: 0;
    width: 8px;
    height: 50%;
    clip-path: polygon(100% 0, 100% 100%, calc(100% - 2px) 100%, calc(100% - 2px) 65%, 0 65%, 0 0);
    @extend .border_normal;
}

.magic-border-bottom {
    bottom: 0;
    left: 10px;
    width: 75%;
    height: 15px;
    padding: 0 15px;
    @extend .border_normal;
}

.magic-border-bottom-poly {
    background: $color-poly;
    width: 35px;
    height: 100%;
    clip-path: polygon(25% 0%, 100% 0%, 75% 60%, 0% 60%);
    display: inline-block;
}

.magic-border-content {
    background: $color-main;
    width: 100%;
    height: 100%;
    border: 2px solid $color-angle;
}
</style>

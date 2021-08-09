<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-07-09 16:31:23
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-08-09 13:11:31
-->

<template>
    <div class="magic-border-container" :style="containerStyle">
        <!-- <div class="angle-left-top"></div>
        <div class="angle-right-bottom"></div> -->
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
            type: String
        },
        height: {
            type: String
        },
        polyNum: {
            type: Number,
            default: 4
        }
    },
    data() {
      return {
          containerStyle: {
              'width': this.width + 'px',
              'height': this.height + 'px'
          }
      };
    },
    watch: {},
    computed: {
        polyList() {
            let result = []
            for(let i = 0; i < this.polyNum; i++) {
                result.push(i)
            }
            return result
        }
    },
    methods: {},
    created() {},
    mounted() {},
    destroyed() {}
};
</script>
<style lang="scss" scoped>
.magic-border-container {
    position: relative;
    width: 350px;
    height: 320px;
    clip-path: polygon(20% 0, 100% 0, 100% 75%, 74% 100%, 0 100%, 0 20%);
    padding-left: 10px;
    padding-top: 20px;
    padding-right: 4px;
    padding-bottom: 15px;
}

.magic-border-top {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 15px;
    background: #1AABFF;
    clip-path: polygon(85% calc(100% - 2px), 88% 50%, 100% 50%, 100% 100%, 0 100%, 0 calc(100% - 2px))
}

.magic-border-left {
    position: absolute;
    left: 0;
    top: 0;
    width: 8px;
    height: 50%;
    background: #1AABFF;
    clip-path: polygon(100% 0, 100% 100%, calc(100% - 2px) 100%, calc(100% - 2px) 65%, 0 65%, 0 0);
}

.magic-border-bottom {
    position: absolute;
    bottom: 0;
    left: 10px;
    width: 75%;
    height: 15px;
    background: #1AABFF;
    padding: 0 15px;
}

.magic-border-bottom-poly {
    background: #0ADAFF;
    width: 35px;
    height: 100%;
    clip-path: polygon(25% 0%, 100% 0%, 75% 60%, 0% 60%);
    display: inline-block;
}

.magic-border-content {
    background: #5089a6;
    width: 100%;
    height: 100%;
    border: 2px solid #1AABFF;
}

.angle-left-top {
    position: absolute;
    height: 48px;
    width: 2px;
    background: rgba(0, 48, 67, 0.9);
    top: 13px;
    left: 20px;
    transform: rotate(49deg);
}

.angle-right-bottom {
    position: absolute;
    height: 86px;
    width: 2px;
    background: #1AABFF;
    right: 31.6px;
    bottom: -1px;
    transform: rotate(50.3deg);
}
</style>

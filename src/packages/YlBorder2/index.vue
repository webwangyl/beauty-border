<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-08-09 13:05:22
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-08-09 13:38:51
-->
<template>
    <div class="container" :style="containerStyle">
        <div class="cover">
            <div class="angle"></div>
            <div class="angle angle-center"></div>
            <div class="angle angle-bottom"></div>
        </div>
        <div class="cover clip-right">
            <div class="angle"></div>
            <div class="angle angle-center"></div>
            <div class="angle angle-bottom"></div>
        </div>
        <div class="ball top left"></div>
        <div class="ball bottom left"></div>
        <div class="ball top right"></div>
        <div class="ball bottom right"></div>
        <div class="drap-container"></div>
        <div class="drap-main">
            <p class="magic-title">{{ title }}</p>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'yl-border-2',
    components: {},
    props: {
        title: {
            type: String,
            default: '',
        },
        height: {
            type: Number,
        },
        width: {
            type: Number,
        },
        lineColor: {
            type: String,
            default: 'rgba(29, 88, 208, 0.5)'
        },
        coverColor: {
            type: String,
            default: '#1dc5fb'
        },
    },
    computed: {
        containerStyle() {
            return {
                '--container-height': this.height ? this.height + 'px' : '100%',
                '--container-width': this.width ? this.width + 'px' : '100%',
                '--line-color': this.lineColor,
                '--cover-color': this.coverColor
            }
        }
    },
    data() {
        return {}
    },
    methods: {},
}
</script>
<style lang="scss" scoped>
$line-main-color: var(--line-color);
$cover-color: var(--cover-color);
$color-white: #fff;
.height {
    height: var(--container-height);
}

.width {
    width: var(--container-width);
}

.full-content {
    @extend .width;
    @extend .height;
}

.container {
    position: relative;
    margin: 10px 0;
    flex: 1;
    color: $color-white;
    @extend .full-content;

    .drap-container {
        position: absolute;
        box-shadow: inset 0 0 40px -10px $cover-color;
        -webkit-clip-path: polygon(
            50px 10px,
            10px 50%,
            50px calc(100% - 10px),
            calc(100% - 50px) calc(100% - 10px),
            calc(100% - 10px) 50%,
            calc(100% - 50px) 10px,
            calc(100% - 60px) 20px,
            calc(100% - 20px) 50%,
            calc(100% - 60px) calc(100% - 20px),
            60px calc(100% - 20px),
            20px 50%,
            60px 20px,
            calc(100% - 60px) 20px,
            calc(100% - 50px) 10px
        );
        clip-path: polygon(
            50px 10px,
            10px 50%,
            50px calc(100% - 10px),
            calc(100% - 50px) calc(100% - 10px),
            calc(100% - 10px) 50%,
            calc(100% - 50px) 10px,
            calc(100% - 60px) 20px,
            calc(100% - 20px) 50%,
            calc(100% - 60px) calc(100% - 20px),
            60px calc(100% - 20px),
            20px 50%,
            60px 20px,
            calc(100% - 60px) 20px,
            calc(100% - 50px) 10px
        );
        @extend .full-content;
    }

    .drap-main {
        background-color: transparent;
        position: absolute;
        padding: 25px 65px;
        @extend .full-content;
    }

    .cover {
        width: 100px;
        position: absolute;
        background-color: $line-main-color;
        -webkit-clip-path: polygon(
            40px 0,
            100% 0,
            100% 2px,
            42px 2px,
            2px 50%,
            42px calc(100% - 2px),
            100% calc(100% - 2px),
            100% 100%,
            40px 100%,
            0 50%,
            40px 0
        );
        clip-path: polygon(
            40px 0,
            100% 0,
            100% 2px,
            42px 2px,
            2px 50%,
            42px calc(100% - 2px),
            100% calc(100% - 2px),
            100% 100%,
            40px 100%,
            0 50%,
            40px 0
        );
        @extend .height;
    }

    .clip-right {
        right: 0;
        transform: rotateZ(180deg);
    }

    .angle {
        position: absolute;
        background-color: $cover-color;
        width: 30px;
        height: 20px;
        left: 30px;
    }

    .angle-bottom {
        bottom: 0;
    }

    .angle-center {
        height: 40px;
        left: 0;
        top: calc(50% - 20px);
    }

    .ball {
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: $cover-color;
        box-shadow: 0 0 4px 1px $cover-color;
    }

    .top {
        top: -1px;
    }

    .left {
        left: 100px;
    }

    .bottom {
        bottom: -1px;
    }

    .right {
        right: 100px;
    }
}
</style>
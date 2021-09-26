<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-09-26 10:03:05
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-26 15:34:25
-->
<template>
  <div class="border" :style="containerStyle">
    <div class="container">
      <div class="main"></div>
      <div class="content" v-if="type === 'center'">
        <div>
          <div
            class="poly"
            v-for="(item, index) in polyList"
            :key="index"
          ></div>
        </div>
        <slot></slot>
      </div>
      <div class="content row" v-else>
        <div class="count">
          <div
            class="poly"
            v-for="(item, index) in polyList"
            :key="index"
          ></div>
          <slot name="left"></slot>
        </div>
        <div class="split" v-if="hasSplit"></div>
        <div class="count">
          <div
            class="poly"
            v-for="(item, index) in polyList"
            :key="index"
          ></div>
          <slot name="right"></slot>
        </div>
      </div>
    </div>
    <div class="aside left"></div>
    <div class="aside right"></div>
  </div>
</template>

<script>
export default {
  name: "yl-border-3",
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    k: {
      type: Number,
      default: 10
    },
    w: {
      type: Number,
      default: 2
    },
    type: {
      type: String,
      default: "side"
    },
    borderColor: {
      type: String,
      default: "blue"
    },
    polyColor: {
      type: String,
    },
    containerColor: {
      type: String,
      default: "rgba(0, 20, 255, 0.5)"
    },
    hasSplit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    containerStyle() {
      return {
        "--border-k": this.k + "px",
        "--border-w": this.w + "px",
        "--border-in": this.k + this.w + "px",
        "--container-k": this.k + 1 + "px",
        "--content-side-padding": this.k + this.w + 10 + "px",
        "--width": this.width ? this.width + "px" : "100%",
        "--height": this.height ? this.height + "px" : "100%",
        "--border-color": this.borderColor,
        "--poly-color": this.polyColor ? this.polyColor : this.borderColor,
        "--container-color": this.containerColor
      };
    },
    polyList() {
      if (this.type === "center") {
        return [1, 2, 3, 4, 5];
      } else {
        return [1, 2, 3];
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$width: var(--width);
$height: var(--height);
$border_k_out: var(--border-k);
$border_w: var(--border-w);
$border_k_in: var(--border-in);
$border_color: var(--border-color);
$poly_color: var(--poly-color);
$container_color: var(--container-color);
$content_side-padding: var(--content-side-padding);
.border {
  position: relative;
  width: $width;
  height: $height;
  .row {
    display: flex;
    .count {
      flex: 1;
    }
    .split {
      width: 1px;
      height: calc(100% - #{$border_k_out} - #{$border_k_out});
      margin-top: #{$border_k_out};
      background: #eee;
    }
  }
  .aside {
    width: $border_k_out;
    height: 40%;
    background: $border_color;
    position: absolute;
    top: 30%;
  }
  .left {
    left: 0;
    -webkit-clip-path: polygon(
      0 #{$border_w},
      calc(100% - #{$border_w}) #{$border_k_out},
      calc(100% - #{$border_w}) calc(100% - #{$border_k_out}),
      0 calc(100% - #{$border_w})
    );
    clip-path: polygon(
      0 #{$border_w},
      calc(100% - #{$border_w}) #{$border_k_out},
      calc(100% - #{$border_w}) calc(100% - #{$border_k_out}),
      0 calc(100% - #{$border_w})
    );
  }
  .right {
    right: 0;
    -webkit-clip-path: polygon(
      0 #{$border_k_out},
      calc(100% - #{$border_w}) #{$border_w},
      calc(100% - #{$border_w}) calc(100% - #{$border_w}),
      0 calc(100% - #{$border_k_out})
    );
    clip-path: polygon(
      #{$border_w} #{$border_k_out},
      100% #{$border_w},
      100% calc(100% - #{$border_w}),
      #{$border_w} calc(100% - #{$border_k_out})
    );
  }
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background: $container_color;
    -webkit-clip-path: polygon(
      0 #{$border_k_out},
      #{$border_k_out} 0,
      calc(100% - #{$border_k_out}) 0%,
      100% #{$border_k_out},
      100% 30%,
      calc(100% - #{$border_k_out}) calc(30% + #{$border_k_out}),
      calc(100% - #{$border_k_out}) calc(70% - #{$border_k_out}),
      100% 70%,
      100% calc(100% - #{$border_k_out}),
      calc(100% - #{$border_k_out}) 100%,
      #{$border_k_out} 100%,
      0% calc(100% - #{$border_k_out}),
      0% 70%,
      #{$border_k_out} calc(70% - #{$border_k_out}),
      #{$border_k_out} calc(30% + #{$border_k_out}),
      0% 30%
    );
    clip-path: polygon(
      0 #{$border_k_out},
      #{$border_k_out} 0,
      calc(100% - #{$border_k_out}) 0%,
      100% #{$border_k_out},
      100% 30%,
      calc(100% - #{$border_k_out}) calc(30% + #{$border_k_out}),
      calc(100% - #{$border_k_out}) calc(70% - #{$border_k_out}),
      100% 70%,
      100% calc(100% - #{$border_k_out}),
      calc(100% - #{$border_k_out}) 100%,
      #{$border_k_out} 100%,
      0% calc(100% - #{$border_k_out}),
      0% 70%,
      #{$border_k_out} calc(70% - #{$border_k_out}),
      #{$border_k_out} calc(30% + #{$border_k_out}),
      0% 30%
    );
    .main {
      width: 100%;
      height: 100%;
      background: $border_color;
      -webkit-clip-path: polygon(
        0 #{$border_k_out},
        #{$border_k_out} 0,
        calc(100% - #{$border_k_out}) 0%,
        100% #{$border_k_out},
        100% 30%,
        calc(100% - #{$border_k_out}) calc(30% + #{$border_k_out}),
        calc(100% - #{$border_k_out}) calc(70% - #{$border_k_out}),
        100% 70%,
        100% calc(100% - #{$border_k_out}),
        calc(100% - #{$border_k_out}) 100%,
        #{$border_k_out} 100%,
        0% calc(100% - #{$border_k_out}),
        0% 70%,
        #{$border_k_out} calc(70% - #{$border_k_out}),
        #{$border_k_out} calc(30% + #{$border_k_out}),
        0% 30%,
        #{$border_w} 30%,
        #{$border_k_in} calc(30% + #{$border_k_out}),
        #{$border_k_in} calc(70% - #{$border_k_out}),
        #{$border_w} 70%,
        #{$border_w} calc(100% - #{$border_k_out}),
        #{$border_k_out} calc(100% - #{$border_w}),
        calc(100% - #{$border_k_out}) calc(100% - #{$border_w}),
        calc(100% - #{$border_w}) calc(100% - #{$border_k_out}),
        calc(100% - #{$border_w}) 70%,
        calc(100% - #{$border_k_in}) calc(70% - #{$border_k_out}),
        calc(100% - #{$border_k_in}) calc(30% + #{$border_k_out}),
        calc(100% - #{$border_w}) 30%,
        calc(100% - #{$border_w}) #{$border_k_out},
        calc(100% - #{$border_k_out}) #{$border_w},
        #{$border_k_out} #{$border_w},
        #{$border_w} #{$border_k_out},
        #{$border_w} 30%,
        0 30%
      );
      clip-path: polygon(
        0 #{$border_k_out},
        #{$border_k_out} 0,
        calc(100% - #{$border_k_out}) 0%,
        100% #{$border_k_out},
        100% 30%,
        calc(100% - #{$border_k_out}) calc(30% + #{$border_k_out}),
        calc(100% - #{$border_k_out}) calc(70% - #{$border_k_out}),
        100% 70%,
        100% calc(100% - #{$border_k_out}),
        calc(100% - #{$border_k_out}) 100%,
        #{$border_k_out} 100%,
        0% calc(100% - #{$border_k_out}),
        0% 70%,
        #{$border_k_out} calc(70% - #{$border_k_out}),
        #{$border_k_out} calc(30% + #{$border_k_out}),
        0% 30%,
        #{$border_w} 30%,
        #{$border_k_in} calc(30% + #{$border_k_out}),
        #{$border_k_in} calc(70% - #{$border_k_out}),
        #{$border_w} 70%,
        #{$border_w} calc(100% - #{$border_k_out}),
        #{$border_k_out} calc(100% - #{$border_w}),
        calc(100% - #{$border_k_out}) calc(100% - #{$border_w}),
        calc(100% - #{$border_w}) calc(100% - #{$border_k_out}),
        calc(100% - #{$border_w}) 70%,
        calc(100% - #{$border_k_in}) calc(70% - #{$border_k_out}),
        calc(100% - #{$border_k_in}) calc(30% + #{$border_k_out}),
        calc(100% - #{$border_w}) 30%,
        calc(100% - #{$border_w}) #{$border_k_out},
        calc(100% - #{$border_k_out}) #{$border_w},
        #{$border_k_out} #{$border_w},
        #{$border_w} #{$border_k_out},
        #{$border_w} 30%,
        0 30%
      );
    }
    .poly {
      width: 20px;
      height: 10px;
      background: $poly_color;
      -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
      margin: 0 10px;
      display: inline-block;
    }
    .content {
      box-sizing: border-box;
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 4px #{$content_side-padding} 4px;
    }
  }
}
</style>

<template>
  <section class="github">
    <div class="wavetext" v-if="addTextNode.length > 0">
      <transition-group name="list" tag="p">
        <p class="text-node" v-for="(node, nIndex) in addTextNode" :key="nIndex + 'item'">{{ node }}</p>
      </transition-group>
    </div>
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop" style></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle" style></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom" style></div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "@/utils";
import { setSession } from "@/common/mutils";
export default {
  name: "Github",
  data() {
    return {
      textNode: [
        "突然间跳到这个页面",
        "心里一阵懵逼",
        "感觉像是404， 这不像回家的路",
        "骚年莫慌",
        "看尽了世间繁华",
        "站在悬崖边缘，看向远方",
        "海的边缘是天，天的边缘是海",
        "人与山，山与海，海与天，奇妙的相逢",
        "呵呵，我想说的是，时间差不多了，掉头成功，回家了"
      ],
      addTextNode: [],
      timer: null
    };
  },
  methods: {
    githubCallback() {
      if (this.$route.query.code) {
        $.get(
          `/oauth/callback?code=${this.$route.query.code}&type=management`
        ).then(res => {
          this.$store.dispatch("USER_MSG", res.data);
          this.$message.success(res.msg);
          this.$router.replace(`/manage`);
        });
      }
    },
    textAnimation() {
      // 文字逐行显示问题， 每隔一定时间向数组中添加一条数据， 知道数据添加完为止
      let count = 0;
      if (this.textNode.length !== this.addTextNode.length) {
        this.timer = setInterval(() => {
          this.addTextNode.push(this.textNode[count]);
          count++;
        }, 1500);
        if (count > this.textNode.length - 1) {
          clearInterval(this.timer);
        }
      } else {
        clearInterval(this.timer);
      }
    }
  },
  mounted() {
    this.githubCallback();
    this.textAnimation();
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
.waveWrapper {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  bottom: -1px;
  background-image: url(../../assets/images/404bg.svg);
  background-repeat: no-repeat;
  background-size: 100%;
}
.bgTop {
  z-index: 15;
  opacity: 0.5;
}
.bgMiddle {
  z-index: 10;
  opacity: 0.75;
}
.bgBottom {
  z-index: 5;
}
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}
.waveTop {
  background-image: url("../../assets/images/wave-top.png");
  background-size: 50% 150px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
  -webkit-animation: move-wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.waveMiddle {
  background-image: url("../../assets/images/wave-mid.png");
  background-size: 50% 190px;
}
.waveAnimation .waveMiddle {
  animation: move_wave 10s linear infinite;
}
.waveBottom {
  background-image: url("../../assets/images/wave-bot.png");
  background-size: 50% 200px;
}
.waveAnimation .waveBottom {
  animation: move_wave 15s linear infinite;
}
.wavetext {
  position: absolute;
  z-index: 99999999;
  width: 40%;
  right: 10%;
  top: 25%;
  color: #676864;
  font-size: 16px;
  font-weight: bold;

  .text-node {
    transition: all 1s;
  }
}
.wavetop {
  margin-bottom: 3%;
}
.wavelx {
  width: 32%;
  float: left;
}
.wavets {
  float: left;
  font-size: 280%;
  width: 62%;
  padding-top: 10%;
  padding-left: 5%;
  padding-bottom: 2%;
}
.wavecz {
  width: 100%;
  font-size: 150%;
  padding-left: 5%;
}
.waveqcz {
  clear: left;
}
.wavegohome {
  margin-top: 5%;
  float: left;
  margin-left: 7%;
}
.waveclose {
  margin-top: 5%;
  float: left;
  margin-left: 7%;
}
.wavegohome a,
.waveclose a {
  margin: 2px;
  color: #ffb957;
  text-decoration: none;
  font-size: 170%;
}
.waveinput {
  border: 2px solid #ffb957;
  padding: 0.2em 1em 0.3em 1em;
  border-radius: 8em;
}
</style>


<style scoped>
/** 插入过程 **/
.list-enter-active {
  transition: all 1.5s;
}
/** 移除过程 **/
.list-leave-active {
  transition: all 1.5s;
}
/*** 开始插入、移除结束的位置变化 ***/
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>

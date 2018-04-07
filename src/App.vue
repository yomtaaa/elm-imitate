<template>
    <div id="wrap">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>

export default {
    data() {
      return {
        show: false,
        loading: true
      }
    },
    beforeCreate() {
        this.show=true;
        var deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth > 1242) deviceWidth = 1242;
        document.documentElement.style.fontSize = deviceWidth / 12.42 + 'px';
    },
    Created() {
        this.show=false;
    }
}
</script>
<style lang="scss">
@import './assets/styles/base.scss';
@import './assets/styles/index.scss';
.el-main {
    position: absolute;
    top: 0;
}
.router-fade-enter-active, .router-fade-leave-active {
	transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
	opacity: 0;
}

</style>


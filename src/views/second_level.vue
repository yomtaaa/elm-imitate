<template>
    <div id="home">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <footer>
            <section>
                <div class="grid-content">
                    <router-link to="/index" class="grid-content-btn"><icon name="elm" scale="3"></icon><span>外卖</span></router-link>
                </div>
                <div class="grid-content">
                    <router-link to="/find" class="grid-content-btn"><icon name="find" scale="3"></icon><span>发现</span></router-link>
                </div>
                <div class="grid-content">
                    <router-link to="/list" class="grid-content-btn"><icon name="list" scale="3"></icon><span>订单</span></router-link>
                </div>
                <div class="grid-content">
                    <router-link to="/user" class="grid-content-btn"><icon name="user" scale="3"></icon><span>我的</span></router-link>
                </div>
            </section>
        </footer>
    </div>
</template>
<script>

</script>
<style lang="scss">

</style>


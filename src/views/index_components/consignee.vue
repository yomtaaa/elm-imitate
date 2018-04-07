<template>
<div class="receiving-address">
    <header>
        <a href="#/index" class="return-index">
            <i class="icon-left-btn"></i>
        </a>
        <h2 class="receiving-address-title">选择收货地址</h2>
        <a href="#" class="receiving-address-title manage">地址管理</a>
    </header>
   <div class="receiving-container">
       <section>
           <div class="search-address">
               <a href="#" class="select-address">广州<i class="icon-more"></i></a>
               <input type="text" placeholder="小区/写字楼/学校 等">
           </div>
           <div class="local-address">
               <span class="title">当前地址</span>
               <p class="specific-address">
                   <a class="specific-address-name">广州城建职业学院</a>
                   <a href="#" class="local-btn"><i class="icon-address"></i>重新定位</a>
               </p>
           </div>
       </section>
       <section v-if="show">
           <div class="local-address harvest-address">
               <span class="title">收货地址</span>
               <div class="add-module">
                    <p class="specific-address">
                        <a class="specific-address-name">广州城建职业学院</a>
                        <a class="specific-address-name specific-address-info">二区 学生公寓 5栋 230</a>
                    </p>
                    <span class="title username-tel">庄梦婷(女生) 13229421760</span>
               </div>
               <a href="#" class="add-address">新增地址</a>
           </div>
       </section>
       <section class="not-added" v-if="!show">
           <img src="../../assets/imgs/not-added.png" alt="您还没有设置地址">
           <a href="#/information" class="add-address-btn">新增地址</a>
       </section>
   </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            show: false
        }
    },
    created() {
        // let oFooter = document.getElementsByTagName('footer')[0];
        // oFooter.style.display = 'none';
    }
}
</script>
<style lang="scss">
</style>

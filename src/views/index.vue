<template>
<div>
    <header>
        <section class="loacl-column">
            <h1><router-link to="/consignee" class="loacl-click"><icon name="local" scale="2"></icon><span id="local-name">{{localname}}</span><i class="el-icon-caret-bottom"></i></router-link></h1>
            <button class="search-button">
                <span><i class="icon-search"></i>搜索商家、商家名称</span>
            </button>
        </section>
    </header>
    <div class="container">
        <div class="banner">
            <img src="../assets/imgs/banner.png">
        </div>
        <div class="quick-menu">
            <menuSlider></menuSlider>
        </div>
        <section class="recommend">
            <h3>推荐商家</h3>
            <div class="recommend-list" v-for="business_info in business_infos">
                <a href="#" class="recommend-list-img">
                    <img :src="'http://cangdu.org:8001/img/'+business_info.image_path">
                </a>
                <div class="recommend-list-info">
                    <h3 class="recommend-name">{{business_info.name}}</h3>
                    <div class="rating">
                        <div class="rating-box">
                            <span class="rating-star"></span>
                            <span class="rating-star rating-star-yellow" v-bind:style="{ width: (business_info.rating*100/5) + '%' }"></span>
                        </div>
                        <span class="bussiness">{{business_info.rating}} 月售{{business_info.recent_order_num}}单</span>
                    </div>
                    <div class="division-info">
                        <span class="division">¥{{business_info.float_minimum_order_amount}}起送 <i class="division-icon">|</i> 配送费¥{{business_info.float_delivery_fee}}</span>
                        <span class="distance">{{business_info.distance}} <i class="division-icon">|</i> {{business_info.order_lead_time}}</span>
                    </div>
                    <div class="actives">
                        <ul class="actives-list">
                            <li><a href="#" v-for="a in business_info.activities"><i class="actives-icon">{{a.icon_name}}</i>{{a.description}}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
            x: 0,
            y: 0,
            localname: "正在识别您的地理位置",
            quick_menu: {
                title: '',
                image_url: ''
            },
            business_infos: [],
            styleObject: {
                width: ''
            }
        }
    },
    methods:{
        /**
        *  获取地理位置
        */
        local(This) {
            var e = document.getElementById('local-name');
            if (navigator.geolocation) {  
                navigator.geolocation.getCurrentPosition(function(pos) {  
                alert(pos.coords.latitude + '  '+pos.coords.longitude);
                alert(This);
                This.localAjax(This,pos);
            }, function(err) {  
                alert('抱歉！您的浏览器无法使用地位功能');
            }, {  
                enableHighAccuracy: true, // 是否获取高精度结果  
                timeout: 5000, //超时,毫秒  
                maximumAge: 0 //可以接受多少毫秒的缓存位置    
            });  
            } else {  
                alert('抱歉！您的浏览器无法使用地位功能');  
            }
        },
        localAjax(This,pos) {
            this.$http.get('http://cangdu.org:8001/v2/pois/'+pos.coords.latitude+','+pos.coords.longitude)
            .then((response) => {
                let index_entry_object1 = JSON.parse(response.bodyText);
                this.localname = index_entry_object1['address'];
            });
        },
        /**
        *  获取推荐商家的店铺信息
        */
        businessAjax() {
            this.$http.get('http://cangdu.org:8001/shopping/restaurants?latitude=113.58&longitude=23.55')
            .then((response) =>{
                let businessText = JSON.parse(response.bodyText);
                this.business_infos = businessText;
                console.log(this.num);
            });
        }
    },
    created() {
        var This = this;
        this.local(This);
        this.businessAjax();
    }
}
</script>
<style lang="scss">

</style>

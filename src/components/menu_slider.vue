<template>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
          <ul class="list-box">
            <li v-for="item in items1">
              <a class="list-menu">
                <i class="list-menu-icon"><img v-bind:src="'https://fuss10.elemecdn.com/'+item.image_url"></i>
                <span class="list-menu-title">{{item['title']}}</span>
              </a>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="list-box">
            <li v-for="item in items2">
              <a class="list-menu">
                <i class="list-menu-icon"><img v-bind:src="'https://fuss10.elemecdn.com/'+item.image_url"></i>
                <span class="list-menu-title">{{item['title']}}</span>
              </a>
            </li>
          </ul>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>

 
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          keyboard: {
            enabled: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        },
        items1:[],
        items2:[]
      }
    },
    methods: {
      /**
         * 获取快捷菜单
         */
        quickMenu: function() {
            this.$http.get('http://cangdu.org:8001/v2/index_entry')
            .then((response) => {
                let page = 10;
                let index_entry_object = JSON.parse(response.bodyText);
                this.items1 = index_entry_object.splice(0,10);
                this.items2 = index_entry_object;
            });
        }
    },
    created() {
      this.quickMenu();
    }
  }
</script>
<style>
.list-box {
  overflow: hidden;
}
.list-box li {
    float: left;
    width: 20%;
    margin-top: .48rem;
}
.list-menu {
  display: block;
  text-align: center;
}
.list-menu-icon {
  display: block;
  width: 1.44rem;
  height: 1.4rem;
  margin: 0 auto;
}
.list-menu-icon img {
  display: block;
  width: 100%;
}
.list-menu-title {
  display: block;
  font-size: 12px;
}
</style>

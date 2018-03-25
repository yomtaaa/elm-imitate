<template>
    <div id="wrap">
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
    /*mounted() {
        var x=document.getElementById("demo");
        function getLocation()
        {
        if (navigator.geolocation)
            {
            navigator.geolocation.getCurrentPosition(showPosition,showError);
            }
        else{x.innerHTML="Geolocation is not supported by this browser.";}
        }

        function showPosition(position)
        {
        lat=position.coords.latitude;
        lon=position.coords.longitude;
        latlon=new google.maps.LatLng(lat, lon)
        mapholder=document.getElementById('mapholder')
        mapholder.style.height='250px';
        mapholder.style.width='500px';

        var myOptions={
        center:latlon,zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
        };
        var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
        var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
        }

        function showError(error)
        {
        switch(error.code) 
            {
            case error.PERMISSION_DENIED:
            x.innerHTML="User denied the request for Geolocation."
            break;
            case error.POSITION_UNAVAILABLE:
            x.innerHTML="Location information is unavailable."
            break;
            case error.TIMEOUT:
            x.innerHTML="The request to get user location timed out."
            break;
            case error.UNKNOWN_ERROR:
            x.innerHTML="An unknown error occurred."
            break;
            }
        }
        getLocation();
    }*/
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


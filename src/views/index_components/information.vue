<template>
<div class="receiving-address information">
    <header>
        <a href="#/consignee" class="return-index">
            <i class="icon-left-btn"></i>
        </a>
        <h2 class="receiving-address-title">新增地址</h2>
    </header>  
    <div class="receiving-container">
        <form action="./" method="post">
            <section class="information-table">
                <table class="information-table-write">
                    <tr>
                        <td>联系人</td>
                        <td><input type="text" placeholder="姓名"></td>
                    </tr>
                    <tr>
                        <td><input type="hidden" value="sex"></td>
                        <td>
                            <input type="button" value="先生">
                            <input type="button" value="女士">
                        </td>
                    </tr>
                    <tr>
                        <td>电话</td>
                        <td><input type="text" placeholder="手机号码"></td>
                    </tr>
                    <tr>
                        <td>地址</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>门牌号</td>
                        <td><input type="text" placeholder="例: 5号楼203室"></td>
                    </tr>
                    <tr>
                        <td>标签</td>
                        <td class="label-underline">
                            <input type="button" value="家">
                            <input type="button" value="公司">
                            <input type="button" value="学校">
                        </td>
                    </tr>
                </table>
            </section>
            <input type="submit" value="保存">
        </form>
   </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">

</style>



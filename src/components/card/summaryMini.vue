<template>
    <div class="row">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4" v-for="(item, index) in summaryMiniData" :key="index">
            <div class="card">
                <div class="card-header p-3 pt-2">
                <div :class="item.clazz">
                    <i class="material-icons opacity-10">{{item.iconName}}</i>
                </div>
                <div class="text-end pt-1">
                    <p class="text-sm mb-0 text-capitalize">{{item.title}}</p>
                    <h4 class="mb-0">{{item.values}}</h4>
                </div>
                </div>
                <hr class="dark horizontal my-0">
                <div class="card-footer p-3">
                    <p class="mb-0" v-html="item.comment">
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['summaryMiniData']
}
</script>

<style>

</style>
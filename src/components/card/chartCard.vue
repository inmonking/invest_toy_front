<template>
    <div class="row mt-4">
        <div class="col-lg-4 col-md-6 mt-4 mb-4" v-for="(item, index) in chartData" :key="index">
            <div class="card z-index-2 ">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                    <div :class="item.chartTagClass">
                        <div class="chart">
                            <canvas id="chart-bars" class="chart-canvas" height="170"></canvas>
                        </div>
                    </div>
                </div>
                <div class="card-body" v-html="item.bodyHtml">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["chartData"]
}
</script>

<style>

</style>
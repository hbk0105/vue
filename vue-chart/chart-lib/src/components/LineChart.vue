<template>
    <div>
        <canvas ref="lineChart" id="lineChart"></canvas>
    </div>
</template>

<script>
export default {
    mounted(){
        const ctx = this.$refs.lineChart;
        const data = {
        labels: ['January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
                }]
        };

        const config = {
            type: 'line',
            data: data,
        };

        new this.$_Chart(ctx,config);
    }
}
</script>

<style>

</style>
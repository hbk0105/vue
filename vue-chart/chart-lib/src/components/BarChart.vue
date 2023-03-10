<template>
  <div>
    <canvas ref="barChart" id="myChart"></canvas>
  </div>
</template>

<script>
export default {
    mounted(){
        const ctx = this.$refs.barChart;

        new this.$_Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                        }]
            },
        options: {
            scales: {
                y: {beginAtZero: true}
            }
        }
        });
    }
}
</script>

<style>

</style>
<template>
  <main>
    <div>
      <h1 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Welcome</h1>
    </div>
  </main>
  <main>
    <hr class="mt-10 mb-10">
    <!-- Display Found Data -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
      <div class="ml-10">
        <h2 class="text-2xl font-bold">List of Clients</h2>
      </div>
      <div class="flex flex-col col-span-2">
        <table class="min-w-full shadow-md rounded">
          <thead class="bg-gray-50 text-xl">
            <tr>
              <th class="p-4 text-left">Name</th>
              <th class="p-4 text-left">Phone number</th>
              <th class="p-4 text-left">City</th>
              <th class="p-4 text-left">Zip Code</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-300">
            <tr v-for="client in queryData" :key="client._id">
              <td class="p-2 text-left">{{ client.firstName + " " + client.lastName }}</td>
              <td class="p-2 text-left">{{ client.phoneNumbers[0].primaryPhone }}</td>
              <td class="p-2 text-left">{{ client.address.city }}</td>
              <td class="p-2 text-left">{{ client.address.zip }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> <br>
    <hr>
    <!-- Display graph-->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
      <div class="ml-10">
        <h2 class="text-2xl font-bold">Clients by Event</h2>
      </div>
      <div id="chart" class="flex flex-col col-span-2">
        <canvas id="myChart"></canvas>
      </div>
    </div>

    <!-- Start of loading animation -->
    <div class="mt-40" v-if="loading">
          <p class="
                  text-6xl
                  font-bold
                  text-center text-gray-500
                  animate-pulse
                ">
            Loading...
          </p>
        </div>
        <!-- End of loading animation -->

     <!-- Start of error alert -->
     <div class="mt-12 bg-red-50" v-if="error">
          <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
            {{ error.title }}
          </h3>
          <p class="p-4 text-lg font-bold text-red-900">
            {{ error.message }}
          </p>
        </div>
        <!-- End of error alert -->
        <br />
  </main>
</template>
<script>
import axios from "axios";
import Chart from 'chart.js/auto';
import _, { map } from 'underscore';

export default {
  components: {
  },
  data() {
    return {
      queryData: [],
      loading: false,
      error: null,
    };
  },
  async mounted() {
    let apiURL = import.meta.env.VITE_ROOT_API + `/primarydata/`;
    axios.get(apiURL).then((resp) => {
      this.queryData = resp.data;
    });
    let apiData = import.meta.env.VITE_ROOT_API + `/eventdata/configKV/`;
    let chartData = await axios.get(apiData)
    let chartDataArray = chartData.data
    console.log(chartDataArray)
    console.log(_.keys(chartDataArray[0]))
    console.log(_.values(chartDataArray[0]))
    var chart = new Chart("myChart", {
      type: "bar",
      data: {
        labels: _.keys(chartDataArray[0]),
        datasets: [{
          label: "Client By Events", // added label for chart 
          data: _.values(chartDataArray[0])
        }],
      },
      options: {
        scales: {
          y: {
            max: 10,
            min: 0
          }
        }
      }
    });
    window.scrollTo(0, 0);
    // Error handling in the application
  },catch(err) { 
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: "Server Response",
            message: err.message,
          };
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          };
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          };
        }
        this.loading = false;
      },
methods: {
  routePush(routeName) {
    this.$router.push({ name: routeName });
  },
}
};
</script>

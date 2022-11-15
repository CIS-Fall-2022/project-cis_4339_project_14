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
    </div>
    <!-- Display graph-->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
      <div class="ml-10">
        <h2 class="text-2xl font-bold">Clients by Event</h2>
      </div>
      <div class="flex flex-col col-span-2">
        <BarChart />
      </div>
    </div>
  </main>
</template>
<script>
import BarChart from './BarChart.vue'
import axios from "axios";

export default {
  components: { BarChart
  },
  data() {
    return {
      queryData: [],
    };
  },
  mounted() {
    let apiURL = import.meta.env.VITE_ROOT_API + `/primarydata/`;
    axios.get(apiURL).then((resp) => {
      this.queryData = resp.data;
    });
    window.scrollTo(0, 0);
  },
  methods: {
    routePush(routeName) {
      this.$router.push({ name: routeName });
    },
  }
};
</script>

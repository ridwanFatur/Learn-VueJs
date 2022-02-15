<template>
  <div>
    <p>Home</p>
    <v-alert type="success">Success This</v-alert>
    <v-alert color="#2A3B4D" dark icon="mdi-firework" dense>
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
      Vivamus quis mi. Quisque ut nisi. Maecenas malesuada.
    </v-alert>
    <v-alert outlined color="purple">
      <div class="text-h6">Lorem Ipsum</div>
      <div>
        Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi,
        condimentum viverra felis nunc et lorem. Duis vel nibh at velit
        scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere,
        tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna
        dolor sagittis lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum,
        tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.
      </div>
    </v-alert>
    <v-alert prominent type="error">
      <v-row align="center">
        <v-col class="grow">
          Nunc nonummy metus. Nunc interdum lacus sit amet orci. Nullam dictum
          felis eu pede mollis pretium. Cras id dui.
        </v-col>
        <v-col class="shrink">
          <v-btn v-on:click="takeAction">Take action</v-btn>
        </v-col>
      </v-row>
    </v-alert>
    <div>
      <div class="text-center mb-4">
        <v-btn color="primary" @click="alert = !alert"> Toggle </v-btn>
      </div>
      <v-alert
        :value="alert"
        color="pink"
        dark
        border="top"
        icon="mdi-home"
        transition="scale-transition"
      >
        Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum.
        In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
        Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod
        vitae, posuere imperdiet, leo. Phasellus nec sem in justo pellentesque
        facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper
        id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
      </v-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
			alert: false
		};
  },
  methods: {
    takeAction: function () {
      console.log("Take Action");
    },
  },
};
</script>

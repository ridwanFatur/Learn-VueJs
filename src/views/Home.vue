<template>
  <div>
    <b-container>

			<code>no-animation</code>&nbsp;
			<code>fade</code>
			<hr/>

      <b-carousel
        controls
        indicators
        img-width="1024"
        img-height="480"
				v-model="slide"
				:interval="1000"
      >
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=10"
          caption="First Slide"
          text="Hello World"
        ></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=11">
          <h1>Second Slide</h1>
        </b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12">
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/2048/960/?image=12"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide
          caption="Blank Image"
          img-blank
          style="background: lightskyblue"
        >
          <p>My Custom slide without any image here!</p>
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=14"
        ></b-carousel-slide>
      </b-carousel>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
			slide: 4
		};
  },
};
</script>
<style scoped></style>

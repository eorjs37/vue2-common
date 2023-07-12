<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      init: [],
      maxParts: 300,
      particles: [],
      w: 0,
      h: 0
    }
  },
  created() {

  },
  mounted() {
    this.canvas = document.querySelector('#canvas');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d');
      this.w = this.canvas.width;
      this.h = this.canvas.height;

      this.ctx.strokeStyle = 'rgba(174,194,224,0.5)';
      this.ctx.lineWidth = 1;
      this.ctx.lineCap = 'round';

      for (let a = 0; a < this.maxParts; a++) {
        this.init.push({
          x: Math.random() * this.w,
          y: Math.random() * this.h,
          l: Math.random() * 1,
          xs: -4 + Math.random() * 4 + 3,
          ys: Math.random() * 10 + 10
        })
      }

      for (var b = 0; b < this.maxParts; b++) {
        this.particles[b] = this.init[b];
      }

      // requestAnimationFrame(this.draw);
      setInterval(this.draw, 38)
    }
  },
  methods: {
    draw() {
      this.ctx.clearRect(0, 0, this.w, this.h);
      for (let c = 0; c < this.particles.length; c++) {
        const p = this.particles[c];
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        this.ctx.stroke();
      }

      this.move();
    },
    move() {
      for (let b = 0; b < this.particles.length; b++) {
        const p = this.particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if (p.x > this.w || p.y > this.h) {
          p.x = Math.random() * this.w;
          p.y = -20;
        }
      }
    }
  }
}
</script>
<style scoped></style>

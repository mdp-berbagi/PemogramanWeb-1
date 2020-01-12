# Catatan UAS
## Vue
Lebih lengkap kunjungi https://vuejs.org/v2/guide/

### Template / Komponen Standar
```
<style>
  /* CSS biaso */
</style>

<template>
  <div>
    <!-- 
      Template Biaso
      KALO NAK AMAN DIV NY JANGAN DI APOS, NOLESLAH HTMLNY DI DLM DIV INILAH
    -->
  </div>
</template>

<script> ... </script>
```

### script 
```
<script>
// contoh import Axios
Import Axios from 'axios'

// contoh import componen
import tableComponent from 'folder/komponenn/nama.vue'

export default {
  // sudah di import jgn lupo tarok di sini
  components: {
    tableComponent
  }

  data: () => ({
    nama: 'Aziz'
  }),
  
  // caro buat method set sm get data tu samo bae
  // kalu nak cepet caro get Data bae
  methods: {
    setData: function() {
      console.log('setData)
    },
    
    getData() {
      console.log('getdata')
    },
  },
  
  mounted() {
    // fungsi yng bejalan kalo web lah jadi nian
  }
}
</script>
```

## Vue Router
Lebih lengkap kunjungi https://router.vuejs.org/guide/

### Pemasangan
```
// Ini komponen
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// dilekatakn di route
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // samo cak `routes: routes`
})

// jangan lupo di pasang di Vue
const app = new Vue({
  router
}).$mount('#app')
```

### Tag
```
<!-- link cak a href='' -->
<router-link to="/foo">Go to Foo</router-link>
<router-link to="/bar">Go to Bar</router-link>

<!-- template yang di tampilkan dari route -->
<router-view></router-view>
```

### Penggunakan Lainya
```
// back
this.$router.go(-1)

// lanjut ke halaman foo
this.$router.push('/foo')
```

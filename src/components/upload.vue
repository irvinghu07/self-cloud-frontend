<template>
  <div>
    <form id="uploadForm" role="form" method="post" enctype=multipart/form-data v-on:submit.prevent="upload">
      <input type="file" id="file" name="file">
      <input type=submit value=Upload>
    </form>
    <p>{{ payload }}</p>
  </div>
</template>

<script>


export default {
  name: "upload",
  data: function () {
    return {
      payload: 'placeholder'
    }
  },
  methods: {
    async upload() {
      let imagefile = document.querySelector('#file');
      // imagefile.files[0].value
      let formData = new FormData()
      formData.append("file", imagefile.files[0]);
      await this.$http.post('/upload/single', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          }
      ).then(resp => console.log(resp.data))
    }
  }
}

</script>

<style scoped>

</style>

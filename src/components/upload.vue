<template>
  <div>
    <form id="uploadForm" action="upload" role="form" method="post" enctype=multipart/form-data>
      <input type="file" id="file" name="file">
      <input type=submit value=Upload>
    </form>
  </div>
</template>

<script>

export default {
  name: "upload",
  data: function () {
    return {}
  },
  methods: {
    async upload() {
      let imagefile = document.querySelector('#file');
      let formData = new FormData().append(imagefile.files[0].value, imagefile.files[0]);
      await this.$http.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          }
      ).then(res => res.data)
    }
  }
}

</script>

<style scoped>

</style>

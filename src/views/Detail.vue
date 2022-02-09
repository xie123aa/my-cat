<template>
  <van-image
      fit="contain"
      :src="this.server_config.url+'/File/download/'+this.fileId"
  />
</template>
<script >

 export default {
   data(){
     return {
       server_config: this.global.server_config,
       fileUrl:'',
       fileId:''
     }
   },
   name: 'Detail',
   created() {
     this.initPicture();
   },

   mounted() {
   },

   methods:{
     initPicture(){
       console.log(this.$route.query.fileId);
       //获取图片
       this.fileId=this.$route.query.fileId
       this.axios.get(this.server_config.url+"/File/getFileList").then(response=>{
         this.files = response.data;
         this.fileUrl=this.files.map(e=>this.server_config.url+'/File/download/'+e.id)
         console.log(this.fileUrl)
         console.log(response.data)
       }).catch(err=>{
         console.log(err);
       });
     }
   }
 }

</script>
<style >
</style>
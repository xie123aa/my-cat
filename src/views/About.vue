<template>
  <div class="about">
    <h1>小猫咪咪</h1>

    <template v-for="item in picList">
    <van-image
        width="20rem"
        height="20rem"
        fit="contain"
        :src="server_config.url+'/File/downloadThumb/'+item.id"  @click="goDetail(item.id)"/>
      <van-divider />

    </template>
    <span class="block" v-for="item in videoList">
        <video width="320" height="240" controls utoplay webkit-playsinline playsinline>
          <source :src="server_config.url+'/File/download/'+item.id" type="video/mp4">
          <source src="/File/download/15" type="video/ogg">
        </video>
      <van-divider />
        </span>
    <van-pagination v-model="page" :page-count="pageCount" mode="simple" @change="handleCurrentChange" />

  </div>
</template>

<script>
export default {
  data() {
    return{
      server_config: this.global.server_config,
      name:"",
      picList:[],
      videoList:[],
      fileList:[],
      page: 1,
      pageSize: 5,
      total: 0,
      pageCount: 0
    }},
  methods:{
    handleClick(row) {
      window.open(this.server_config.url+"/File/download/"+row.id)
    },
    handleCurrentChange(page) {
      let _this = this;
      this.axios.get(this.server_config.url+"/File/getPage?pageNum="+this.page+'&pageSize='+this.pageSize).then(function(response){
        _this.fileList = response.data.list;
        _this.total=response.data.total;
        _this.pageCount = response.data.pages;

        _this.picList = _this.fileList.filter(e => {
          var index = e.name.lastIndexOf(".");
          var ext = e.name.substr(index + 1);
          const imgList = ['png', 'jpg', 'jpeg', 'bmp', 'gif'];
          if (imgList.indexOf(ext) > -1) {
            console.log('是图片');
            return true;
          }
        });
        _this.videoList = _this.fileList.filter(e => !_this.picList.includes(e));
      }).catch(function(err){
        console.log(err);
      });
    },
    handleSizeChange(currentSize) {
      this.pageSize = currentSize;
      this.onCurrentChange(pageSize);
    },
    goDetail(id) {
      console.log(id)
      this.$router.push({
        path: "/detail",
        query: {fileId: id}
      });
    }
  },
  created(){
    this.handleCurrentChange();
  },
}
</script>

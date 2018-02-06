<template>
  <div>
    <div class="header">
      <a href="/home">HOME</a>
    </div>
    <ul>
      <li v-for="post in posts" :key="post._id">
        <h3>{{ post.date}}</h3>
        <h2 @click="getDetail(post._id)"><a>{{ post.title }}</a></h2>
      </li>
    </ul>
  </div>
</template>

<script >
  import axios from 'axios';
  import moment from 'moment';
  import objectidToTimestamp from 'objectid-to-timestamp';

  export default {
    data() {
      return {
        posts: []
      }
    },
    created() {
      this.getPost();
    },
    methods: {
      //获取所有文章
      getPost() {
        axios.get('/api')
        .then(res => {
          this.posts = res.data;
          this.posts = Array.prototype.slice.call(res.data);
          console.log(typeof(this.posts));
          this.posts.forEach(post => {
            post.date = moment(objectidToTimestamp(post._id)).format('YYYY-MM-DD');
          })
          this.posts.reverse();
          console.log(this.posts);
        })
      },
      getDetail(id) {
        this.$router.push({
          name: 'postDetail',
          params: {id: id}
        })
      },
    }
  }
</script>

<style scoped>
  .header {
  text-align: center;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #eaeaea;

}
.header a {
  display: inline-block;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  border-right: 5px solid #eaeaea;
  border-left: 5px solid #eaeaea;
  border-bottom: 1px solid white;
}
.header, h1, h2, h3, h4, h5, h6 {
  font-family: "Montserrat", "Helvetica Neue", "Hiragino Sans GB", "LiHei Pro", Arial, sans-serif;
  font-weight: 400;
  color: #444;
}
 ul {
  list-style-type: none;
  padding: 0;
  margin-top: 4px;
}
/* ul li:first-child {
  margin-top: -30px;
}*/
 ul li {
  position: relative;
  padding: 30px 0 30px;
  border-bottom: 1px solid #e6e6e6;
}
 h3 {
  font-size: 13px;
  color: #999;
  position: absolute;
  left: 0;
  top: 33px;
}
 h2,  h3 {
  letter-spacing: 1px;
  margin: 0;
 text-transform: uppercase;
  font-size: normal;
}
 h2 {
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 1px;
  margin-left: 120px;
}
 h2 a {
  color: #444;
}
 a:hover {
  color: #c8cbe3;
}
</style>

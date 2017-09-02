<template>
  <div class="article">
    <p class="date"><i class="el-icon-date" style="padding-right: 5px;"></i>{{ post.date }}</p>
    <p class="title">{{ post.title }}</p>
    <article class="markdown-body" v-html="content">
    </article>
  </div>
</template>
<script>
  import moment from 'moment';
  import objectToTimestamp from 'objectid-to-timestamp';
  import marked from 'marked';
  import highlight from 'highlight.js';
  import axios from 'axios';
  import 'github-markdown-css';
  import 'highlight.js/styles/atom-one-light.css'

  marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function(code) {
    return highlight.highlightAuto(code).value;
  }
})

  export default {
    data() {
      return {
        post: {}
      }
    },
    created() {
      this.getArticleDetail()
    },
    computed: {
      content() {
        return marked(this.post.content || '');
      }

    },
    methods: {
      getArticleDetail() {
        let id = this.$route.params.id;
        axios.get(`/api/${id}`)
        .then(res => {
          this.post = res.data;
          this.post.date = moment(objectToTimestamp(this.post._id)).format('YYYY-MM-DD');
        })
      }
    }
  }
</script>

<style>
.article {
  padding-bottom: 30px;
}
.article .date{
    font-family: "Montserrat", "Helvetica Neue", "Hiragino Sans GB", "LiHei Pro", Arial, sans-serif;
    font-size: 13px;
    color: #999;
    margin: 0 0 30px;
    letter-spacing: 1px;
}
.title {
  font-size: 32px;
  margin: 0 0 45px;
  letter-spacing: 0.5px;
  color: black;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
}
h1, h2 {
  text-transform: uppercase;
}

</style>


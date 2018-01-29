<template>
    <div>
      <el-input v-model="postTitle" placeholder="文章标题"></el-input>
      <markdown-editor preview-class="markdown-body" v-model="postContent" :configs="configs" ref="markdownEditor"></markdown-editor>
      <div class="btn" style="margin-top: 10px;">
          <el-button @click="publishPost" type="info">{{btnName}}</el-button>
      </div>
    </div>
</template>

<script>
    import 'github-markdown-css'
    import axios from 'axios'
    import { markdownEditor } from 'vue-simplemde';            // 导入markdownEditor组件
    export default {
        data() {
            return {
                postTitle: '',
                postContent: '',                                    // markdown编辑器内容
                btnName: '发表文章',
                configs: {                                    // markdown编辑器配置参数
                    status: false,                            // 禁用底部状态栏
                    initialValue: '发表你的博客',                // 设置初始值
                    renderingConfig: {
                        codeSyntaxHighlighting: true,        // 开启代码高亮
                        highlightingTheme: 'atom-one-light' // 自定义代码高亮主题
                    }
                }
            }
        },
        computed: {
            simplemde() {
                return this.$refs.markdownEditor.simplemde;
            }
        },
        mounted() {
            console.log(this.simplemde);

            this.simplemde.codemirror.on('change',(instance, changeObj) => {
                console.log("value: ", this.simplemde.value());
                console.log("postContent: ", this.postContent);
            })

            if(this.$route.params.id) {
                const id = this.$route.params.id;
                axios.get(`/api/${id}`)
                .then( res => {
                    this.postTitle = res.data.title;
                    this.btnName = '更新文章';
                    console.log("old content: ", res.data.content);
                    this.postContent = res.data.content;
                })
            } else {
                this.postContent = '发表你的博客';
            }
        },
        methods: {
            publishPost: function() {
                const obj = {
                    title: this.postTitle,
                    content: this.postContent,
                    state: 'publish'
                };
                if(this.$route.params.id) {
                    const id = this.$route.params.id;
                    axios.put(`/api/${id}`, {
                        title: this.postTitle,
                        content: this.postContent,
                        state: 'publish'
                    })
                    .then(res => {
                        this.$notify({
                            title: '成功',
                            message: "文章更新成功",
                            type: 'success'
                        });
                        this.$router.push('/admin/adminList');
                    })
                } else {
                    axios.post('/api', {
                        postInformation: obj
                    })
                    .then(res => {
                        this.$notify({
                            title: '成功',
                            message: "文章发布成功",
                            type: 'success'
                        });
                        this.$router.push('/admin/adminList')
                    })
                }

            }


        },
        components: {
            markdownEditor                                    // 声明组件markdownEditor
        }
    }
</script>


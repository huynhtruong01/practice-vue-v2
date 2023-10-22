<template>
    <div v-if="post" class="container">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
    </div>
</template>

<script>
import { postApi } from '../../api'

export default {
    name: 'post-detail',
    async mounted() {
        await this.getPost()
    },
    data() {
        return {
            post: null
        }
    },
    methods: {
        async getPost() {
            try {
                const id = this.$route.params.postId
                if (id) {
                    const post = await postApi.getPost(id)
                    this.post = post
                }
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 450px;
    width: full;
    margin: auto;
    border: 1px solid #EEEEEE;
    padding: 24px 28px;
    border-radius: 4px;
    background-color: #F5F5F5;

    h3,
    p {
        text-align: center;
    }

    h3 {
        margin-bottom: 6px;
    }
}
</style>
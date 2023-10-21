<template>
    <header class="header">
        <div class="container">
            <div class="logo">
                <router-link to="/">Logo</router-link>
            </div>
            <nav>
                <ul class="nav-links">
                    <li v-for="link in links" v-bind:key="link.link">
                        <router-link v-bind:to="link.link">{{ link.name }}</router-link>
                    </li>
                </ul>
            </nav>
            <button class="btn-create">
                <router-link to="/posts/create">+ Create post</router-link>
            </button>
        </div>
    </header>
</template>

<script>
export default {
    name: "header-component",
    data() {
        return {
            links: [
                {
                    name: "Posts",
                    link: "/posts",
                },
                {
                    name: "User",
                    link: "/user",
                },
                {
                    name: "Todos",
                    link: "/todos",
                },
                {
                    name: "Calculator",
                    link: "/calculator",
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
}

.container {
    width: 1200px;
    padding: 16px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-weight: 700;
    font-size: 24px;
    color: #45474b;
}

.nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    li {
        position: relative;

        a {
            padding: 8px 12px;
            font-weight: 500;


            &.active {
                color: #22A699;

                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #22A699;
                }
            }

        }
    }
}

.btn-create {
    background-color: #748e63;
    border-radius: 6px;
    color: #fff;

    a {
        position: relative;
        padding: 8px 16px;
        font-weight: 500;


    }
}
</style>

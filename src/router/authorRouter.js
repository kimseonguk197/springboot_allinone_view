import AuthorCreate from "@/views/author/AuthorCreate.vue";
import AuthorList from "@/views/author/AuthorList.vue";
import AuthorLogin from "@/views/author/AuthorLogin.vue";


export const memberRouter = [
    {
        path: "/author/create",
        name: "AuthorCreate",
        component: AuthorCreate
    },
    {
        path: "/author/login",
        name: "AuthorLogin",
        component: AuthorLogin
    },
    {
        path: "/author/list",
        name: "AuthorList",
        component: AuthorList
    },

]

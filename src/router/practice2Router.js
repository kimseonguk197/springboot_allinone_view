import MemberUrlEncoded from "@/views/practice2/MemberUrlEncoded.vue";
import MemberMultipartImage from "@/views/practice2/MemberMultipartImage.vue";
import MemberMultipartImages from "@/views/practice2/MemberMultipartImages.vue";
import MemberJsonCreate from "@/views/practice2/MemberJsonCreate.vue";
import MemberJsonNested from "@/views/practice2/MemberJsonNested.vue";
import MemberJsonFile from "@/views/practice2/MemberJsonFile.vue";
import MemberJsonList from "@/views/practice2/MemberJsonList.vue";


export const practice2Router = [
    {
        path: "/practice2/url-encoded",
        name: "MemberUrlEncoded",
        component: MemberUrlEncoded
    },
    {
        path: "/practice2/multipart-formdata",
        name: "MemberMultipartImage",
        component: MemberMultipartImage
    },
    {
        path: "/practice2/multipart-formdata-images",
        name: "MemberMultipartImages",
        component: MemberMultipartImages
    },
    {
        path: "/practice2/json",
        name: "MemberJsonCreate",
        component: MemberJsonCreate
    },
    {
        path: "/practice2/json-list",
        name: "MemberJsonList",
        component: MemberJsonList
    },
    {
        path: "/practice2/json-nested",
        name: "MemberJsonNested",
        component: MemberJsonNested
    },
    {
        path: "/practice2/json-file",
        name: "MemberJsonFile",
        component: MemberJsonFile
    },

]

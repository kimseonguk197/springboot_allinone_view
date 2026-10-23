import MemberText from "@/views/practice/MemberText.vue";
import MemberJson from "@/views/practice/MemberJson.vue";
import MemberTextData2 from "@/views/practice/MemberTextData2.vue";


export const practiceRouter = [
    {
        path: "/practice/text",
        name: "MemberText",
        component: MemberText
    },
    {
        path: "/practice/json",
        name: "MemberJson",
        component: MemberJson
    },
    {
        path: "/practice/text-data2",
        name: "MemberTextData2",
        component: MemberTextData2
    },

]

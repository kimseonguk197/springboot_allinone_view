import { createRouter, createWebHistory } from "vue-router";
import { practiceRouter } from "./practiceRouter";
import { memberRouter } from "./authorRouter";
import { orderRouter } from "./postRouter";

// routes에서는 url경로와 화면을 매핑
const routes = [
    ...practiceRouter,
    ...memberRouter,
    ...orderRouter
]

export const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)
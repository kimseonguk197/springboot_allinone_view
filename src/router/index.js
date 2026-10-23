import { createRouter, createWebHistory } from "vue-router";
import { authorRouter } from "./authorRouter";
import { practiceRouter } from "./practiceRouter";

// routes에서는 url경로와 화면을 매핑
const routes = [
    ...authorRouter,
    ...practiceRouter
]

export const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)
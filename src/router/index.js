import { createRouter, createWebHistory } from "vue-router";
import { authorRouter } from "./authorRouter";

// routes에서는 url경로와 화면을 매핑
const routes = [
    ...authorRouter
]

export const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)
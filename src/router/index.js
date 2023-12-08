const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            components: {
                default: Home,
                // LeftSidebar: LeftSidebar 的缩写
                LeftSidebar,
                // 它们与 `<router-view>` 上的 `name` 属性匹配
                RightSidebar,
            },
        },
    ],
})
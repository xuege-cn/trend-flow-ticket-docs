import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "zh-CN",
    title: "趋势交易笔记",
    description: "量价、竞价、分时与弱转强分析笔记",
    base: process.env.BASE_PATH ?? "/",
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
        nav: [
            { text: "分析指南", link: "/如何分析成交量" },
            { text: "量化模型", link: "/量化模型/量化模型" }
        ],
        sidebar: [
            {
                text: "量能分析",
                items: [
                    { text: "成交量分析", link: "/如何分析成交量" },
                    { text: "量比分析", link: "/如何分析量比" },
                    { text: "换手率分析", link: "/如何分析换手率" },
                    { text: "分时量能看强弱", link: "/如何通过分时量能看强弱" }
                ]
            },
            {
                text: "主力行为与强弱转换",
                items: [
                    {
                        text: "早盘竞价判断抢筹",
                        link: "/如何通过早盘竞价量能判断主力抢筹"
                    },
                    {
                        text: "识别主力吸筹与抢筹",
                        link: "/如何识别主力吸筹和抢筹"
                    },
                    {
                        text: "判断个股弱转强",
                        link: "/如何判断个股弱转强"
                    }
                ]
            },
            {
                text: "量化模型",
                items: [
                    { text: "弱转强量化模型", link: "/量化模型/量化模型" },
                    {
                        text: "同花顺选股公式方案",
                        link: "/量化模型/同花顺弱转强选股公式方案"
                    }
                ]
            }
        ],
        outline: {
            level: [2, 3],
            label: "本页目录"
        },
        docFooter: {
            prev: "上一篇",
            next: "下一篇"
        },
        lastUpdated: {
            text: "最后更新"
        },
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档"
                    },
                    modal: {
                        noResultsText: "没有找到相关内容",
                        resetButtonTitle: "清除查询",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                            closeText: "关闭"
                        }
                    }
                }
            }
        },
        socialLinks: []
    },
    markdown: {
        lineNumbers: true
    }
});

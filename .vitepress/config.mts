import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "zh-CN",
    title: "个人知识库",
    description: "趋势交易笔记与广进计划话术",
    base: process.env.BASE_PATH ?? "/",
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
        nav: [
            {
                text: "趋势交易",
                items: [
                    { text: "分析指南", link: "/如何分析成交量" },
                    { text: "量化模型", link: "/量化模型/量化模型" }
                ]
            },
            {
                text: "广进计划",
                items: [
                    { text: "话术总览", link: "/广进计划/" },
                    { text: "行动清单", link: "/广进计划/行动清单" }
                ]
            }
        ],
        sidebar: {
            "/广进计划/": [
                {
                    text: "广进计划 · 话术",
                    items: [
                        { text: "总览", link: "/广进计划/" },
                        {
                            text: "被辞退时不要当场签字",
                            link: "/广进计划/被辞退时不要当场签字"
                        },
                        {
                            text: "辞退补偿 N / N+1 / 2N",
                            link: "/广进计划/辞退补偿N_N+1_2N"
                        },
                        {
                            text: "辞退谈判操作要点",
                            link: "/广进计划/辞退谈判操作要点"
                        },
                        { text: "行动清单", link: "/广进计划/行动清单" }
                    ]
                },
                {
                    text: "辞退补偿 FAQ",
                    items: [
                        {
                            text: "口头辞退有效吗？",
                            link: "/广进计划/口头辞退有效吗"
                        },
                        {
                            text: "协商解除给 N 合理吗？",
                            link: "/广进计划/协商解除给N合理吗"
                        },
                        {
                            text: "业绩不达标能拿 2N 吗？",
                            link: "/广进计划/业绩不达标辞退能拿2N吗"
                        },
                        {
                            text: "N 的计算基数是什么？",
                            link: "/广进计划/N的计算基数是什么"
                        },
                        {
                            text: "没提前 30 天通知有 N+1 吗？",
                            link: "/广进计划/没提前30天通知有N+1吗"
                        }
                    ]
                },
                {
                    text: "加班费 / 工时 FAQ",
                    items: [
                        {
                            text: "年终奖金不能代替加班费",
                            link: "/广进计划/年终奖金不能代替加班费"
                        },
                        {
                            text: "综合工时包薪制怎么应对",
                            link: "/广进计划/合同写综合工时包薪制怎么应对"
                        },
                        {
                            text: "合同没写加班费标准还能主张吗",
                            link: "/广进计划/合同没写加班费标准还能主张吗"
                        },
                        {
                            text: "打卡记录能证明加班吗",
                            link: "/广进计划/打卡记录能证明加班吗"
                        },
                        {
                            text: "考勤记录拿不到怎么办",
                            link: "/广进计划/考勤记录拿不到怎么办"
                        },
                        {
                            text: "在职追讨加班费受时效限制吗",
                            link: "/广进计划/在职期间追讨加班费受时效限制吗"
                        },
                        {
                            text: "离职后多久内必须申请仲裁",
                            link: "/广进计划/离职后多久内必须申请仲裁"
                        },
                        {
                            text: "5 年的加班费都能要回来吗",
                            link: "/广进计划/5年的加班费都能要回来吗"
                        },
                        {
                            text: "离职协议写结清签了还能反悔吗",
                            link: "/广进计划/离职协议写结清签了还能反悔吗"
                        },
                        {
                            text: "补偿打包抵消加班费划算吗",
                            link: "/广进计划/公司用补偿打包抵消加班费划算吗"
                        }
                    ]
                },
                {
                    text: "仲裁与谈判",
                    items: [
                        {
                            text: "劳动仲裁收费与举证责任",
                            link: "/广进计划/劳动仲裁收费吗举证责任在谁"
                        },
                        {
                            text: "谈判时公司态度强硬怎么办",
                            link: "/广进计划/谈判时公司态度强硬怎么办"
                        }
                    ]
                }
            ],
            "/": [
                {
                    text: "趋势交易 · 量能分析",
                    items: [
                        { text: "成交量分析", link: "/如何分析成交量" },
                        { text: "量比分析", link: "/如何分析量比" },
                        { text: "换手率分析", link: "/如何分析换手率" },
                        {
                            text: "分时量能看强弱",
                            link: "/如何通过分时量能看强弱"
                        }
                    ]
                },
                {
                    text: "趋势交易 · 主力行为与强弱转换",
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
                    text: "趋势交易 · 量化模型",
                    items: [
                        { text: "弱转强量化模型", link: "/量化模型/量化模型" },
                        {
                            text: "同花顺选股公式方案",
                            link: "/量化模型/同花顺弱转强选股公式方案"
                        }
                    ]
                }
            ]
        },
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

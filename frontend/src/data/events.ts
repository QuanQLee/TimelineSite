export interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    description: string;  // Markdown 字符串
    icon?: string;        // Heroicons 名称
    cover?: string;  // <—— 关键！（图片 url 可选）当作大背景，比如页面顶部的横幅大图、或者是视觉背景
    image?: string;    // 事件卡片的小配图
}

export const events: TimelineEvent[] = [
    {
        id: 'e1',
        date: '2021-01-01',
        title: '项目启动',
        description: '完成初步需求调研与**团队组建**。',
        icon: 'FlagIcon',
        cover: '/images/my-background.png', // 只要加上 image 字段就行
        image: '/images/my-project.png', // 只要加上 image 字段就行
    },
    {
        id: 'e2',
        date: '2023-12-15',
        title: '版本 1.0 发布',
        description: '上线第一版核心功能：\n\n- 纵向时间轴\n- 事件查看\n- 基础视觉风格',
        icon: 'RocketLaunchIcon',
    },
    {
        id: 'e3',
        date: '2024-05-30',
        title: '前端 v3 发布',
        description: '加入视差背景、主线进度条、Scroll‑Snap 与动态内页。',
        icon: 'SparklesIcon',   // Heroicons 名称，可省
    },
    {
        id: 'e4',
        date: 'YYYY-MM-DD',
        title: '标题',
        description: 'Markdown 文本',
        icon: 'RocketLaunchIcon',   // Heroicons 名称，可省
    },
    {
        id: 'e5',
        date: 'YYYY-MM-DD',
        title: '标题',
        description: 'Markdown 文本',
        icon: 'RocketLaunchIcon',   // Heroicons 名称，可省
        cover: '/assets/parallax.jpg'    // 详情页横幅，可省
    },
    {
        id: 'e6',
        date: 'YYYY-MM-DD',
        title: '标题',
        description: 'Markdown 文本',
        icon: 'RocketLaunchIcon',   // Heroicons 名称，可省
        cover: '/assets/pic.jpg'    // 详情页横幅，可省
    },
    {
        id: 'e7',
        date: 'YYYY-MM-DD',
        title: '标题',
        description: 'Markdown 文本',
        icon: 'RocketLaunchIcon',   // Heroicons 名称，可省
        cover: '/assets/pic.jpg'    // 详情页横幅，可省
    },
    {
        id: 'e8',
        date: 'YYYY-MM-DD',
        title: '标题',
        description: 'Markdown 文本',
        icon: 'RocketLaunchIcon',   // Heroicons 名称，可省
        cover: '/assets/pic.jpg'    // 详情页横幅，可省
    },
    {
        id: 'e9',
        date: 'YYYY-MM-DD',
        title: '标题',
        description: 'Markdown 文本',
        icon: 'RocketLaunchIcon',   // Heroicons 名称，可省
        cover: '/assets/pic.jpg'    // 详情页横幅，可省
    },
    {
        id: 'e10',
        date: 'YYYY-MM-DD',
        title: '标题',
        description: 'Markdown 文本',
        icon: 'RocketLaunchIcon',   // Heroicons 名称，可省
        cover: '/assets/pic.jpg'    // 详情页横幅，可省
    },
    {
        id: 'e11',
        date: 'YYYY-MM-DD',
        title: '标题',
        description: 'Markdown 文本',
        icon: 'RocketLaunchIcon',   // Heroicons 名称，可省
        cover: '/assets/pic.jpg'    // 详情页横幅，可省
    },
    {
        id: 'e12',
        date: 'YYYY-MM-DD',
        title: '标题',
        description: 'Markdown 文本',
        icon: 'RocketLaunchIcon',   // Heroicons 名称，可省
        cover: '/assets/pic.jpg'    // 详情页横幅，可省
    }
];


// 翻译字典
const translations = {
    en: {
        // Navigation
        nav_features: "Features",
        nav_templates: "Templates",
        nav_for_teams: "For Teams",
        nav_resources: "Resources",
        nav_pricing: "Pricing",
        nav_signup: "Sign Up",
        nav_login: "Log In",
        
        // Hero Section
        hero_heading: "One app to replace them all",
        hero_email_placeholder: "Enter your email address",
        hero_get_started: "Get Started",
        
        // Feature Section
        feature_main_heading: "Delightfully simple and deceptively powerful task management",
        feature_main_desc: "30 million+ people organize billions of tasks in Todoist for their work, education, and personal life.",
        feature1_heading: "With you everywhere",
        feature1_text: "Use Todoist's apps, extensions and widgets on any device or platform.",
        feature1_btn: "Download apps",
        feature2_heading: "Make Todoist your",
        feature2_text: "Customize your to-do list with filters, labels, priorities, and more.",
        feature2_btn: "See all features",
        feature3_heading: "Productivity Method",
        feature3_text: "Personal productivity recommendations based on your unique traits and strengths.",
        feature3_btn: "Take the quiz",
        feature4_heading: "There's a template for tha",
        feature4_text: "Hundreds of templates are available to get you started with whatever's on your plate.",
        feature4_btn: "Start with templates",
        feature5_heading: "Connect with your other tool",
        feature5_text: "Link Todoist with your calendar, voice assistant, and 30+ other tools.",
        feature5_btn: "Install integrations",
        
        // Achievements Section
        achievements_heading: "A task manager you can trust for life",
        achievements_desc: "We've been building Todoist for 15 years and 169 days.",
        achievements_link: "We're in it for the long haul.",
        achievements_downloads: "App downloads",
        achievements_tasks: "Tasks completed",
        achievements_colleges: "Colleges",
        achievements_users: "Pro users",
        
        // Footer
        footer_desc: "Join millions of people who organize work and life with Taskify.",
        footer_features: "FEATURES",
        footer_how_it_works: "How It Works",
        footer_for_teams: "For Teams",
        footer_pricing: "Pricing",
        footer_templates: "Templates",
        footer_resources: "RESOURCES",
        footer_download_apps: "Download Apps",
        footer_help_center: "Help Center",
        footer_productivity: "Productivity Methods",
        footer_refer: "Refer a friend",
        footer_integrations: "Integrations",
        footer_partners: "Channel Partners",
        footer_developer: "Developer API",
        footer_status: "Status",
        footer_company: "COMPANY",
        footer_about: "About Us",
        footer_hiring: "We are hiring!",
        footer_blog: "Blog",
        footer_press: "Press",
        footer_twist: "Twist",
        footer_security: "Security",
        footer_privacy: "Privacy",
        footer_terms: "Terms",
        footer_copyright: "© Taskify Inc.",
        
        // Dashboard
        dashboard_projects: "Projects",
        dashboard_this_day: "This Day",
        dashboard_this_week: "This Week",
        dashboard_this_month: "This Month",
        dashboard_this_year: "This Year",
        dashboard_todo: "To do",
        dashboard_in_progress: "In progress",
        dashboard_completed: "Completed",
        dashboard_search: "Search",
        
        // Sidebar
        sidebar_overview: "Overview",
        sidebar_stats: "Stats",
        sidebar_projects: "Projects",
        sidebar_chat: "Chat",
        sidebar_calendar: "Calendar",
        sidebar_settings: "Settings",
        sidebar_logout: "Log out",
        
        // Cookie Banner
        cookie_message: "🍪 We use cookies to enhance your experience. By continuing to use this site, you agree to our",
        cookie_privacy: "Privacy Policy",
        cookie_accept: "Accept",

        // Signup/Login Page
        signup_title: "Sign up",
        signup_username: "User name",
        signup_email: "Email",
        signup_password: "Password",
        signup_submit: "Sign up",
        login_title: "Login",
        login_email: "Enter your email",
        login_password: "Enter password",
        login_submit: "Login",

        // Dashboard Navbar
        dashboard_search_placeholder: "Search",
        dashboard_profile: "Profile",
        dashboard_logout: "Log Out"
    },
    zh: {
        // 导航
        nav_features: "功能特性",
        nav_templates: "模板",
        nav_for_teams: "团队版",
        nav_resources: "资源",
        nav_pricing: "价格",
        nav_signup: "注册",
        nav_login: "登录",
        
        // 主页横幅
        hero_heading: "一个应用替代所有",
        hero_email_placeholder: "请输入您的邮箱地址",
        hero_get_started: "开始使用",
        
        // 功能区
        feature_main_heading: "简单易用且功能强大的任务管理",
        feature_main_desc: "超过3000万人使用 Todoist 管理数十亿个工作、教育和个人生活任务。",
        feature1_heading: "随时随地陪伴您",
        feature1_text: "在任何设备或平台上使用 Todoist 的应用程序、扩展和小部件。",
        feature1_btn: "下载应用",
        feature2_heading: "打造专属 Todoist",
        feature2_text: "使用过滤器、标签、优先级等自定义您的待办事项列表。",
        feature2_btn: "查看所有功能",
        feature3_heading: "生产力方法",
        feature3_text: "根据您的独特特质和优势提供个性化生产力建议。",
        feature3_btn: "参加测试",
        feature4_heading: "总有适合的模板",
        feature4_text: "数百个模板可帮助您开始处理任何事务。",
        feature4_btn: "使用模板",
        feature5_heading: "连接其他工具",
        feature5_text: "将 Todoist 与您的日历、语音助手和30多种其他工具连接。",
        feature5_btn: "安装集成",
        
        // 成就区
        achievements_heading: "值得信赖的终身任务管理器",
        achievements_desc: "我们已经开发 Todoist 15年零169天了。",
        achievements_link: "我们会长期坚持下去。",
        achievements_downloads: "应用下载量",
        achievements_tasks: "已完成任务",
        achievements_colleges: "合作院校",
        achievements_users: "专业版用户",
        
        // 页脚
        footer_desc: "加入数百万使用 Taskify 管理工作和生活的用户。",
        footer_features: "功能特性",
        footer_how_it_works: "工作原理",
        footer_for_teams: "团队版",
        footer_pricing: "价格",
        footer_templates: "模板",
        footer_resources: "资源",
        footer_download_apps: "下载应用",
        footer_help_center: "帮助中心",
        footer_productivity: "生产力方法",
        footer_refer: "推荐好友",
        footer_integrations: "集成",
        footer_partners: "渠道合作伙伴",
        footer_developer: "开发者 API",
        footer_status: "状态",
        footer_company: "公司",
        footer_about: "关于我们",
        footer_hiring: "我们正在招聘！",
        footer_blog: "博客",
        footer_press: "新闻",
        footer_twist: "Twist",
        footer_security: "安全",
        footer_privacy: "隐私",
        footer_terms: "条款",
        footer_copyright: "© Taskify 公司版权所有",
        
        // 仪表板
        dashboard_projects: "项目",
        dashboard_this_day: "今天",
        dashboard_this_week: "本周",
        dashboard_this_month: "本月",
        dashboard_this_year: "今年",
        dashboard_todo: "待办",
        dashboard_in_progress: "进行中",
        dashboard_completed: "已完成",
        dashboard_search: "搜索",
        
        // 侧边栏
        sidebar_overview: "概览",
        sidebar_stats: "统计",
        sidebar_projects: "项目",
        sidebar_chat: "聊天",
        sidebar_calendar: "日历",
        sidebar_settings: "设置",
        sidebar_logout: "退出登录",
        
        // Cookie 横幅
        cookie_message: "🍪 我们使用 Cookie 来增强您的体验。继续使用本网站即表示您同意我们的",
        cookie_privacy: "隐私政策",
        cookie_accept: "接受",

        // 注册/登录页面
        signup_title: "注册",
        signup_username: "用户名",
        signup_email: "邮箱",
        signup_password: "密码",
        signup_submit: "注册",
        login_title: "登录",
        login_email: "请输入您的邮箱",
        login_password: "请输入密码",
        login_submit: "登录",

        // 仪表板导航栏
        dashboard_search_placeholder: "搜索",
        dashboard_profile: "个人资料",
        dashboard_logout: "退出登录"
    }
};

module.exports = translations;

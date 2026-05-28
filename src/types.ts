/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ExperienceData {
  year: number;
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface FanCardData {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  detail: string;
  location: string;
  imageUrl: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface ProjectData {
  title: string;
  tags: string[];
  description: string;
  highlights: string[];
  role: string;
  imageUrl?: string;
}

export interface XHSCardData {
  id: string;
  frameNo: string;
  title: string;
  likes: string;
  topics: string[];
  coverStyle: string; // Tailind gradient color class string for creative cover visuals
  imageUrl?: string;  // Cover image URL representing the post
  link?: string;      // Real Xiaohongshu link
}

export interface TimelineData {
  yearRange: string;
  event: string;
  tag: string;
  location?: string;
}

export const EXPERIENCES: Record<number, ExperienceData> = {
  2024: {
    year: 2024,
    company: "东莞跑力科技有限公司 (RQrun)",
    role: "新媒体运营实习生",
    period: "2024.01 – 2024.08",
    responsibilities: [
      "竞品分析：开展深度市场调研，为决策提供有力支撑。包括对 B 站上 Keep、佳明、高驰等领先品牌及其跑步领域 KOL 开展内容策略与用户表现的详尽剖析，形成极具可行性的洞察报告，明确 RQrun 官方 B 站号的增长演进主路线。",
      "鞋库功能产品打磨：主导针对“鞋库”功能的竞品深度交互分析，采用多平台用户路径矩阵对比（如悦跑圈、Keep、咕咚），梳理痛点并输出针对性界面优化提案。该成果成功被产品团队采纳，将添加跑鞋的交互步骤由 3 步精简为 2 步，用户操作阻力显著下降，大幅提升了核心使用路径流畅度。",
      "主流社媒日常运营：独立掌舵 RQrun 官方微博、知乎、App 内部“读书角”版块的每日内容。精准捕捉时事/跑步热点，高频、高质量撰写极具吸引力的推文及专栏文章。期间知乎更新 75 篇爆款文，累计斩获 46 万阅读量，净增粉丝 3000+；微博更新 85 条，斩获 60 万阅读量，净增粉丝 2000+。",
      "社交视觉设计、排版美化：主理社媒阵地的一切视觉设计产出，高标准设计功能使用引导教程图、跑步干货科普长图、社群活动宣发海报；匠心排版公众号文章，运用精美合理的版式结构极大促进了文字可读性，大幅抬升多触点下的品牌专业观感。"
    ]
  },
  2025: {
    year: 2025,
    company: "北京医渡科技有限公司",
    role: "AI 产品运营实习生 (医渡大模型部门)",
    period: "2025.07 – 2025.12",
    responsibilities: [
      "Workflow 智能体高阶搭建：从 0 到 1 设计并全链路成功交付一系列面向真实医院诊疗及科研场景的 AI 工作流。其中包括主导构建 AI 医院客服助手集群（依托系统化的 Prompt 工程进行多轮对话约束及意图识别路由，深度覆盖智能自诊导诊、便民流程引导及常见患者宣教）；打造问卷智能自动生成助手（能根据短词、病种、医学指南秒级自动输出标准化结构问卷）；设计 Coze 医疗文献追踪智能流，实现全球科研文献自动抓取并在第一时间推至邮箱。",
      "专业医生端培训内容方案输出：以极强的自学力，短时间攻克公司新一代 AI 医疗中台产品技术盲区。独立编制并高标准输出了数十页精细入微的医生端实操培训文档、操作手册与交互演示 PPT，并完成长达 1 小时的模拟全院医生上线培训演练，极大减少产品部署落地的沟通摩擦。",
      "多媒介宣传资料打磨：熟练运用剪映以及多款 AI 影音编辑工具，高水准剪辑并配音制作多项核心功能实演视频，将冰冷的软件系统可视化、情景化展出，成功辅助医院高层以及医护管理人员极速建立系统心智，缩短购买决策周期。",
      "黑客松大赛核心技术支持：作为清华校友会联合智能体搭建 Blackhorse 大赛的官方资深技术支持，全程负责参赛选手的技术解惑。整理、归档选手在平台高阶搭建、API 联通等层面的实际问题，汇总 10+ 篇高维核心诉求定期反哺给产研团队，赋能中台平台稳定性迭代。",
      "医疗 LLM 前沿科研跟进：精读、编译超过 30 篇国际、国内 LLM（大语言模型）在临床医学实操、智能会诊、患者追踪领域的最前沿顶级文献/共识，为产品后续演化探明方向；复盘数据，输出效果评估大模型月度监控追踪。并完成长达 1 小时的全链路演训体验。"
    ]
  },
  2026: {
    year: 2026,
    company: "AIGCLink 社区",
    role: "社区顾问 / AI 增长运营",
    period: "2026",
    responsibilities: [
      "岗位负责小红书、掘金、微信、B站、抖音生态内的公域开发者互动，挖掘、引流高价值合作意向到高活私域。",
      "开发者深度建联：独创性制定多核心维度的优秀项目筛选、评估矩阵，基于自动化 workflow 开展针对目标开发者的评估与全天候分批建联。期间成功触达、深度对话 300+ 独立开发者，转化、邀约 80 余位极富潜力的硬核开发者成片加入社区生态（整体建联转化率高达极佳的 27%）；提出并在微信端、小红书端推广“帮发小红书换社区反向宣传”互推爆款增长包，全程把控沟通质量与上线节奏。",
      "官网活动页面极速搭建 (VibeCoding)：熟练掌握大模型底座进行人工智能辅助代码编写（VibeCoding）。巧用 AIStudio、v0、Cursor 等提效利器，不仅主导社区多个高质量官网落地页面的高阶交互开发，还包括活动介绍、报名快速通道、精彩集锦画廊等模块开发。完美支撑全平台活动发布，打通曝光、留存、报名的全功能链路。",
      "线下线上黑客松、路演大课活动闭环推进：全程负责黑客松预热、百校行线下深度活动的方案统筹、场地联络、海报文案物料跟进、联合宣发、多社群造势以及现场多工种高标准把控。比如主导运营了“OPCLink 百校行 - 北京联合大学站：OpenClaw‘养虾’训练营”；参与北京第八十中学第二课堂宣讲活动，主导社区品牌宣介、结合个人电子商务经验生动主讲 AI 时代下的增长与个人转型实践。"
    ]
  }
};

export const FAN_CARDS: FanCardData[] = [
  {
    id: 1,
    year: "2025",
    title: "清华校友会 Hackathon",
    subtitle: "大赛金牌技术支持",
    detail: "为智能体搭建大赛提供顶尖级别的后台搭建、工作流排障、提示词工程教学，累计贴身解答 50+ 顶尖高校与行业研发选手的深度疑问，赋能大赛完美收官。",
    location: "清华科技园 / 医渡科技",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    year: "2026",
    title: "AIGCLINK 智能筛选 Skill",
    subtitle: "开源质量自动化打分智能体",
    detail: "独树一帜设计基于 AI 的开源库评估算法。仅凭输入的 GitHub Link 即可闪电多维度判定开源星级、商业可能、技术壁垒，大幅降低社区经理的肉眼复核耗时，效率提升足足 3 倍。",
    location: "零克云社区",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    year: "2025",
    title: "Coze 文献 & 小红书多场景工作流",
    subtitle: "多维自动化内容矩阵流",
    detail: "搭建了全球顶尖医学指南与文献实时抓取推手工作流；并结合小红书图文自动拼版模版，将单篇素材耗费时间由常规的半个多小时狠狠压缩到仅需区区 5 分钟，效率暴涨 83%！",
    location: "个人创意技术实验室",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60"
  }
];

export const PROJECTS: ProjectData[] = [
  {
    title: "AIGCLINK 开源项目评分 Skill",
    tags: ["Coze API", "自动化运营", "大模型筛选器", "社区快速建联"],
    description: "开发自动化评估工具，输入 GitHub 链接即可按四维度（AI相关性、应用场景、开源质量、社区价值）自动打分，支持复制作者邮箱后自动填写项目信息至表格。",
    highlights: [
      "日均筛选与录入效率提升 3 倍：日处理项目数量从 10 个提升至 30 个，免除了手工格式化与资料翻检的重复劳动。",
      "触达开发者后的私域转化率达到 27%：通过针对性的项目个性化评价，有效吸引开发者微信添加。"
    ],
    role: "独立设计与核心工作流架构师",
    imageUrl: "https://img.cdn1.vip/i/6a17e249005c9_1779950153.png"
  },
  {
    title: "小红书图片自动生成助手",
    tags: ["图片排版自动化", "Coze 工作流", "英语内容出海", "爆款复刻模型"],
    description: "基于 Coze 平台搭建小红书图文自动化工作流，独立运营英语教学类账号，单篇笔记生产耗时从 30 分钟压缩至 5 分钟（效率提升 83%），实现高频内容输出。",
    highlights: [
      "自动化渲染：根据关键词自动排版生成包含带图封面、英文例句、真实对话的高清图片。",
      "效率提升 83%：仅需少量时间即可维持一个自媒体账号的常态化运营。"
    ],
    role: "全链路设计、工作流开发者与独立主理人",
    imageUrl: "https://img.cdn1.vip/i/6a17e24969c22_1779950153.webp"
  }
];

export const SKILL_ITEMS: string[] = [
  "Python", "SQL", "Coze", "Claude", "AI Studio (Vibe Coding)", "剪映", "Photoshop", "Canva", "数据分析", "Java", "C++", "敏捷项目管理", "新媒体增长", "Prompt 提示词工程", "社区运营"
];

export const XHS_POSTS: XHSCardData[] = [
  {
    id: "post-1",
    frameNo: "01",
    title: "🇫🇷 终于轮到我用这个转场！",
    likes: "1054",
    topics: ["#法国巴黎", "#丝滑转场", "#保姆级攻略", "#浪漫生活"],
    coverStyle: "from-[#F1F8F6] via-[#FFFFFF] to-[#E5D7EB]",
    imageUrl: "https://img.cdn1.vip/i/6a1330d625d46_1779642582.webp",
    link: "http://xhslink.com/o/5sl4OKCZbAj"
  },
  {
    id: "post-2",
    frameNo: "02",
    title: "6000玩四国｜你一定要尝试的邮轮旅行🌊",
    likes: "1098",
    topics: ["#邮轮旅行", "#省钱攻略", "#出境自驾游", "#游学生活"],
    coverStyle: "from-[#D5EAE3] via-[#FFFFFF] to-[#FDD3D5]",
    imageUrl: "https://img.cdn1.vip/i/6a1330d823209_1779642584.webp",
    link: "http://xhslink.com/o/34gBNeZlECm"
  },
  {
    id: "post-3",
    frameNo: "03",
    title: "💬以你的英语水平翻译：猪肉很腥",
    likes: "621",
    topics: ["#地道英语", "#单词积累", "#口语表达", "#日常英语"],
    coverStyle: "from-[#FEE2E2] via-[#FFFFFF] to-[#E0E7FF]",
    imageUrl: "https://img.cdn1.vip/i/6a1335514a5f0_1779643729.webp",
    link: "https://www.xiaohongshu.com/explore/69d66aa5000000001a02bb91?xsec_token=ABIKEvniXtFnyNspkXui1H6SIx2Ddl2i43li8mGt6xIbU=&xsec_source=pc_user"
  },
  {
    id: "post-5",
    frameNo: "04",
    title: "跟着native speaker学习｜看中文翻译成英文",
    likes: "224",
    topics: ["#native思维", "#地道翻译", "#日常口语", "#学英语"],
    coverStyle: "from-[#E0F2FE] via-[#FFFFFF] to-[#ECFDF5]",
    imageUrl: "https://img.cdn1.vip/i/6a133e311ddb0_1779646001.webp",
    link: "https://www.xiaohongshu.com/explore/683307ce000000002100b327?xsec_token=ABuYtUwDbXfBavsaz-jRHEn2tsftudx3sEucEIXU2O5ig=&xsec_source=pc_user"
  },
  {
    id: "post-6",
    frameNo: "05",
    title: "开源！AgentScope可视化Agent平台",
    likes: "103",
    topics: ["#AI工具", "#大模型", "#数据可视化", "#智能化设计", "#开发"],
    coverStyle: "from-[#FEE2E2] via-[#FFFFFF] to-[#E5D7EB]",
    imageUrl: "https://img.cdn1.vip/i/6a151ad264f39_1779768018.webp",
    link: "http://xhslink.com/o/1QWzCttp1x9"
  },
  {
    id: "post-7",
    frameNo: "06",
    title: "开源！DeepSeek专属AI代码助手！",
    likes: "58",
    topics: ["#DeepSeek", "#大模型", "#AI工具", "#代码助手", "#开发"],
    coverStyle: "from-[#F1F8F6] via-[#FFFFFF] to-[#FEF3C7]",
    imageUrl: "https://img.cdn1.vip/i/6a151ad2b32d3_1779768018.webp",
    link: "http://xhslink.com/o/1bK2aad0CHA"
  }
];

export const TIMELINE_ITEMS: TimelineData[] = [
  {
    yearRange: "2026",
    event: "1.AIGCLink社区增长：两个月内新建3个社群（累计1500+人），维护社群质量与活跃度；统筹微信、小红书、B站、抖音全平台私信互动与合作挖掘，日均处理社区消息100+条，累计成功转化合作60+项，转化率20%。\n2.独立开发者建联：通过筛选GitHub上近期快速增长的AI开源项目，搭建自动化Skill实现批量触达与评估，累计触达500+开发者，引入180+人加入社区（转化率36%）；同时策划社区与开发者互推合作，负责洽谈与进度追踪。\n3.社区官网活动页面制作（Vibe Coding）：使用AI Studio、v0等工具，通过Vibe Coding方式快速搭建社区官网落地页，包含活动信息展示、报名入口、照片墙等模块，有效支撑品牌传播与活动曝光。\n4.社区活动统筹：负责线上线下技术分享及黑客松预热活动全流程落地，涵盖方案策划、物料准备、社群宣发至现场组织；主导「OPCLink百校行·北京联合大学站：OpenClaw养虾训练营」；参与北京第八十中学第二课堂宣讲，负责社区宣传及个人经验分享。",
    tag: "AI 社区增长",
    location: "北京"
  },
  {
    yearRange: "2025.07 - 2025.12",
    event: "1. Workflow智能体搭建：从0到1设计并交付医院场景AI工作流，包括：AI客服助手集群（通过提示词工程实现多轮对话与意图识别，覆盖智能导诊、便民服务及患者教育）、问卷自动生成助手（依据关键词与医学指南自动生成结构化问卷）、Coze文献追踪工作流（实现新发表研究的自动抓取与邮箱推送）。\n2. 用户培训内容搭建：快速学习公司AI中台产品，独立输出医生端培训文档、操作手册及PPT，完成1小时模拟医生培训，支撑产品上线前的用户教育流程。\n3. 产品演示视频制作：使用剪映制作产品功能操作演示视频，辅助医院客户理解核心功能与使用路径，提高沟通与学习效率。\n4. 黑客松技术支持：为清华校友会联合举办的智能体搭建Hackathon大赛提供技术支持，负责解答技术问题、记录选手需求并反馈至研发团队，促进平台迭代与选手体验提升。\n5. 大模型医疗文献研究：精读30篇LLM在临床医学领域的前沿文献，向产品研发团队汇报技术趋势与产品方向。\n6. 运营数据复盘：搭建智能体运营数据监控体系，每月复盘用户活跃度、使用频次、智能体生态等核心指标，为产品优化及运营策略调整提供数据支持。",
    tag: "大模型产品运营",
    location: "北京"
  },
  {
    yearRange: "2024.09 - 2025.12",
    event: "求学于英国华威大学 (The University of Warwick)，攻读电子商务与数字分析硕士学位，学位等级：Merit。深度拓展数据挖掘、运营增长逻辑与跨国商业敏捷思维。",
    tag: "硕士求学",
    location: "英国考文垂"
  },
  {
    yearRange: "2024.01 - 2024.08",
    event: "1. 竞品分析：开展市场调研，为公司业务优化提供数据支持：\nB 站调研：分析 Keep、 佳明、高驰等品牌及跑步类 KOL 的内容策略 and 数据表现，形成可行性报告，明确 RQrun future B 站发展方向。\n鞋库分析：主导鞋库功能的竞品交互分析，采用用户路径对比法梳理悦跑圈、Keep、 咕咚等平台差异，结合用户痛点提出优化建议。最终报告被采纳用于产品迭代，优化方案将跑鞋添加路径由原来的三步缩减至两步，提升了用户操作的流畅性和整体体验感。\n2. 运营管理：负责 RQrun 微博、知乎、App 读书角的日常运营，追踪网络热点并撰写文案，提升品牌曝光度与用户互动。在职期间：\n知乎更新 75 篇文章，总阅读量达 46 万次，粉丝增长 3000+人。 微博更新 85 条，总阅读量达 60 万次，粉丝增长 2000+人。\n3. 视觉设计： 负责社交媒体运营相关的视觉内容设计，包括：\n功能使用教程、知识科普、活动海报等图片制作，提高内容吸引力。\n公众号文章排版与美化，优化阅读体验，提升品牌专业度。",
    tag: "新媒体平台增长",
    location: "东莞"
  },
  {
    yearRange: "2020.09 - 2024.06",
    event: "求学于北京林业大学，电子信息科学与技术专业，获工学学士学位，均分：85.19 | 排名：16/69。掌握坚实的电子工程、全栈计算机、Java/C++ 理论基础，极好地构筑了数字与工科跨界基盘。",
    tag: "本科求学",
    location: "北京"
  }
];

export interface CustomSkillData {
  name: string;
  description: string;
  category: string;
}

export const CUSTOM_SKILLS: CustomSkillData[] = [
  // Community Ops
  {
    name: "ai-daily-news",
    description: "AI 周报生成器，搜索本周 AI 新闻，生成 3 条头条 + 5 条快讯的格式化资讯周报，支持多源搜索和日期过滤。",
    category: "Community Ops",
  },
  {
    name: "aigclink-discovery",
    description: "AIGCLINK 开源项目发现工具，定期扫描 GitHub/Gitee/GitCode 发现 AI Agent、LLM、MCP、RAG 等相关开源项目，支持关键词扩展和筛选标准。",
    category: "Community Ops",
  },
  {
    name: "aigclink-outreach",
    description: "AIGCLINK 开源项目作者建联工具，根据项目信息生成个性化邮箱/微信建联文案，支持夸赞词库匹配项目特点。",
    category: "Community Ops",
  },
  // Content Creation
  {
    name: "huashu-design",
    description: "设计类 Skill（详情较大），提供花束/视觉设计相关的专业能力。",
    category: "Content Creation",
  },
  {
    name: "khazix-writer",
    description: "微信公众号写作 Skill，提供专业写作工作流和内容生成能力。",
    category: "Content Creation",
  },
  // Design
  {
    name: "colleague-skill-main",
    description: "技能创建工具，帮助用户从零构建自定义 Skill，包含技能设计器、工作流编排和发布流程。",
    category: "Design",
  },
  {
    name: "frontend-design",
    description: "高质量前端界面创建 Skill，指导生成具有独特美学方向的生产级前端代码，避免通用 AI 风格，注重字体色彩/动效/布局的设计细节。",
    category: "Design",
  },
  {
    name: "guijios-weekly-review",
    description: "周报生成 Skill，支持多格式输入（飞书文档/微信/网页等），生成结构化周报内容，带摘要/亮点/待办等模块。",
    category: "Design",
  },
  {
    name: "guizang-ppt-skill",
    description: "“电子杂志 × 电子墨水”风格横向翻页网页 PPT 生成工具，单 HTML 文件，含 WebGL 流体背景、衬线标题、多模板和翻页动效。",
    category: "Design",
  },
  // News Aggregation
  {
    name: "activity-extractor",
    description: "活动信息提取 Skill，支持活动行/小红书/公众号/纯文本，自动查重并追加写入活动列表 Excel，按日期排序。",
    category: "News Aggregation",
  },
  // Productivity
  {
    name: "aigclink-scoring",
    description: "AIGCLINK 开源项目相关性打分工具（0-100分），评估 GitHub/Gitee/GitCode 项目与社区的相关性，提取项目信息及作者联系方式。",
    category: "Productivity",
  },
  {
    name: "frontend-design",
    description: "高质量前端界面创建 Skill，指导生成具有独特美学方向的生产级前端代码，避免通用 AI 风格，注重字体色彩/动效/布局的设计细节。",
    category: "Productivity",
  },
  // Research
  {
    name: "wechat-group-report",
    description: "微信群聊周报图片生成工具，分析聊天记录并生成手机端分辨率的周报长图（PNG），输出话唠榜、熬夜冠军等统计。",
    category: "Research",
  },
  // Social Analytics
  {
    name: "ppt-master",
    description: "AI 驱动多格式 SVG 内容生成系统，将 PDF/DOCX/URL/Markdown 源文档转换为高质量 SVG 页面并导出 PPTX，支持多角色协作管道。",
    category: "Social Analytics",
  },
];

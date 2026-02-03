import {
    Zap,
    Map,
    Share2,
    CheckCircle2,
    Clock,
    AlertTriangle,
    MousePointer2,
    FileText,
    CalendarDays,
    Sparkles
} from "lucide-react";

export const META = {
    title: "강원 AI | 취향 기반 강원 여행 추천",
    description: "취향만 고르면 AI가 강원 여행 코스를 10초 만에 설계합니다. 저장/공유/일정 정리까지 한 번에.",
};

export const NAV_ITEMS = [
    { name: "기능 소개", href: "#features" },
    { name: "사용법", href: "#how-it-works" },
    { name: "후기", href: "#reviews" },
    { name: "요금제", href: "#pricing" },
    { name: "자주 묻는 질문", href: "#faq" },
];

export const HERO_CONTENT = {
    badge: "강원도 여행, 이제 검색 말고 추천으로",
    headline: "강원 여행 코스,\n10초 만에 완성",
    subHeadline: [
        "취향만 고르면 AI가 숙소·맛집·코스까지 한 번에 설계해요.",
        "저장/공유/일정 정리까지—여행 준비가 가벼워집니다."
    ],
    primaryCta: "앱 설치하기",
    secondaryCta: "도입 문의",
    trustBar: [
        "맞춤 코스 추천",
        "일정 자동 정리",
        "취향 태그 기반",
        "공유 링크"
    ]
};

export const PROBLEM_CONTENT = {
    title: "여행 계획, 왜 이렇게 피곤할까요?",
    items: [
        {
            icon: Clock,
            title: "정보가 너무 많음",
            description: "블로그/지도/영상 넘나들다 시간만 씀"
        },
        {
            icon: Map,
            title: "취향 반영이 어려움",
            description: "“나 같은 사람”에게 맞는 코스 찾기 힘듦"
        },
        {
            icon: AlertTriangle,
            title: "동선이 비효율적",
            description: "막상 가면 이동시간만 늘어남"
        },
        {
            icon: FileText,
            title: "저장/공유가 번거로움",
            description: "링크/메모/캡처가 흩어짐"
        }
    ]
};

export const SOLUTION_CONTENT = {
    title: "강원 AI는 ‘계획’을 자동화합니다",
    description: [
        "당일치기/1박2일/2박3일—기간만 선택하세요.",
        "취향 태그를 고르면, 동선 최적화된 코스를 생성합니다.",
        "마음에 들면 저장하고, 링크로 바로 공유하세요."
    ]
};

export const FEATURES_CONTENT = {
    title: "여행 준비에 필요한 기능만, 딱",
    items: [
        {
            icon: Sparkles,
            title: "취향 태그 추천",
            description: "“힐링/맛집/액티비티/감성숙소” 기반 생성"
        },
        {
            icon: Map,
            title: "동선 최적화",
            description: "이동시간 줄이고, 체력 소모 줄이는 루트"
        },
        {
            icon: CalendarDays,
            title: "날씨/계절 반영",
            description: "바다/산/스키 시즌에 맞게 제안"
        },
        {
            icon: Share2,
            title: "저장 & 공유 링크",
            description: "친구에게 일정 링크로 바로 전달"
        },
        {
            icon: CheckCircle2,
            title: "체크리스트 자동 생성",
            description: "준비물/예약/이동 체크 한 번에"
        }
    ]
};

export const HOW_IT_WORKS_CONTENT = {
    title: "사용법은 3단계면 끝",
    steps: [
        { title: "Step 1", description: "기간 선택" },
        { title: "Step 2", description: "취향 선택" },
        { title: "Step 3", description: "코스 생성 & 저장" }
    ],
    footer: "여행은 가볍게, 기록은 깔끔하게."
};

export const SOCIAL_PROOF_CONTENT = {
    title: "이미 많은 여행자가 이렇게 쓰고 있어요",
    metrics: [
        { label: "추천 정확도", value: "98%" },
        { label: "재사용률", value: "92%" },
        { label: "저장/공유", value: "50k+" }
    ],
    reviews: [
        {
            name: "User A",
            short: "“검색하느라 날린 시간이 사라졌어요.”",
            detail: "주말 1박2일 코스가 바로 나와서 편함"
        },
        {
            name: "User B",
            short: "“동선이 진짜 깔끔해서 덜 지쳤습니다.”",
            detail: "이동시간 줄어 만족"
        },
        {
            name: "User C",
            short: "“친구랑 공유가 쉬워서 약속 잡기 편해요.”",
            detail: "링크 하나로 일정 합의 끝"
        }
    ]
};

export const PRICING_CONTENT = {
    title: "필요한 만큼만 사용하세요",
    plans: [
        {
            name: "Free",
            price: "무료",
            features: ["기본 추천", "저장 3개", "공유 링크"],
            button: "무료로 시작",
            highlight: false
        },
        {
            name: "Plus",
            price: "월 4,900원",
            features: ["무제한 추천", "무제한 저장", "동선 최적화 고급", "체크리스트"],
            button: "Plus로 시작",
            highlight: true
        },
        {
            name: "Team / B2B",
            price: "문의",
            features: ["관광/숙박 제휴용 추천 위젯", "대시보드", "커스텀 추천 로직"],
            button: "도입 문의",
            highlight: false
        }
    ],
    footer: "언제든지 해지할 수 있어요."
};

export const FAQ_CONTENT = {
    title: "자주 묻는 질문",
    items: [
        { q: "추천은 어떤 기준으로 되나요?", a: "취향/기간/이동 동선 중심으로 AI가 최적의 코스를 제안합니다." },
        { q: "저장한 일정은 어디서 보나요?", a: "‘내 일정’ 탭에서 언제든지 확인하고 관리할 수 있습니다." },
        { q: "친구와 공유할 수 있나요?", a: "생성된 코스는 고유 링크로 친구에게 쉽게 공유할 수 있습니다." },
        { q: "결제는 언제든 해지되나요?", a: "네, 구독 플랜은 언제든지 위약금 없이 즉시 해지 가능합니다." },
        { q: "강원 외 지역도 되나요?", a: "현재는 강원도에 집중하고 있으며, 추후 다른 지역으로 확장 예정입니다." },
        { q: "B2B 도입은 어떤 형태인가요?", a: "여행사를 위한 위젯, 지자체용 대시보드, 커스텀 추천 로직 등을 제공합니다." }
    ]
};

export const FINAL_CTA_CONTENT = {
    title: "다음 강원 여행,\n계획부터 바꿔보세요",
    subHeadline: "앱 설치하고 10초 만에 코스를 받아보세요.",
    primaryCta: "앱 설치하기",
    secondaryCta: "도입 문의"
};

export const FOOTER_LINKS = [
    { name: "서비스 소개", href: "#" },
    { name: "개인정보처리방침", href: "#" },
    { name: "이용약관", href: "#" },
    { name: "문의", href: "#" }
];

export const METADATA = {
    TITLE: '프론트엔드 개발자 김소원',
    DESCRIPTION: '프론트엔드 개발자 김소원의 포트폴리오입니다.',
}

export const HERO = {
    TITLE_PRE: '프론트엔드 개발자',
    NAME: '김소원',
    P: '안녕하세요, 저는 사용자 경험을 디자인합니다.\n좋은 제품을 함께 만들고 성장할 곳을 찾고 있습니다.',
}

export const FOOTER = {
    P: '읽어주셔서 감사합니다.',
    CONTACTS: [
        { label: '이메일', value: 'sso626262@naver.com'},
        { label: 'GitHub', value: 'gomx3', link: 'https://github.com/gomx3'}
    ]
}

export const STACKS = [
    {
        label: '프론트엔드',
        data: [
            { src: '/assets/logos/react.svg', name: 'React' },
            { src: "/assets/logos/javascript.svg", name: 'JavaScript' },
            { src: "/assets/logos/typescript.svg", name: 'TypeScript' },
            { src: '/assets/logos/next.svg', name: 'Next.js' },
            { src: "/assets/logos/astro.svg", name: 'Astro' },
        ]
    },
    {
        label: '라이브러리',
        data: [
            { src: '/assets/logos/tailwindcss.svg', name: 'Tailwind CSS' },
            { src: '/assets/logos/styledcomponents.svg', name: 'styled-components' },
            { src: '/assets/logos/zustand.png', name: 'Zustand' },
            { src: '/assets/logos/jotai.png', name: 'Jotai' },
            { src: '/assets/logos/tanstackquery.png', name: 'Tanstack Query' },
            { src: '/assets/logos/chartjs.svg', name: 'Chart.js' },
            { src: '/assets/logos/three.svg', name: 'Three.js' },
            { src: '/assets/logos/motion.png', name: 'Motion' },
            { src: '/assets/logos/gsap.svg', name: 'GSAP' }
        ]
    },
    {
        label: '환경 및 배포',
        data: [
            { src: '/assets/logos/github.svg', name: 'GitHub, GithHub Actions' },
            { src: '/assets/logos/vercel.svg', name: 'Vercel Deploy' },
            { src: '/assets/logos/vite.svg', name: 'Vite' },
            { src: '/assets/logos/github.svg', name: 'pnpm workspace' },
        ]
    },
    {
        label: '디자인 및 협업',
        data: [
            { src: '/assets/logos/figma.svg', name: 'Figma' },
            { src: '/assets/logos/notion.svg', name: 'Notion' },
        ]
    }
]

export const BLOG = {
    link: 'https://kiweelog.netlify.app/',
    posts: [
        { 
            title: 'CSS 길이 단위 이해하기 (상대/절대/뷰포트 단위)', 
            link: 'https://kiweelog.netlify.app/posts/css-length-units/', 
            pubDate: '2025-11-02', 
            thumbnail: 'https://kiweelog.netlify.app/images/css-length-units/thumbnail.png'
        },
        { 
            title: 'Astro·React에서 useGSAP으로 애니메이션 구현하기', 
            link: 'https://kiweelog.netlify.app/posts/astro-react-gsap-guide/', 
            pubDate: '2025-10-11', 
            thumbnail: 'https://kiweelog.netlify.app/images/astro-react-gsap-guide/thumbnail.png'
        },
    ]
}
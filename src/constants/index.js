export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Project',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];



export const myProjects = [
    {
        title: 'HamroByapar',
        desc: 'HamroByapar is a platform designed to connect buyers and sellers in Nepal. It allows sellers to list their products while providing buyers with an easy way to browse and make purchases. The platform also includes a government dashboard to monitor tax collection and user management, ensuring smooth transactions and compliance with regulations.',
        subdesc: 'Built as a unique E-commerce app with React.js, Tailwind CSS, JavaScript, Express.js and PostgreSQL.',
        href: '#',
        texture: '/textures/project/project1.mov',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javaScript.png',
            },
            {
                id: 4,
                name: 'Node.js',
                path: '/assets/nodejs.png',
            },
            {
                id: 5,
                name: 'PostgreSQL',
                path: '/assets/postgresql.png',
            },
        ],
    },


];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.3, -6.5, 0] : [0.25, -7, 0],
    }
};

export const education = [
    {
        id: 1,
        name: 'SEE',
        institution: 'Galaxy Public School',
        duration: '2015 - 2019',
        title:"Completed my SEE from Galaxy Public School, where I acquired a solid foundation in Mathematics, Science, and English. ",
        icon:'/assets/school.svg',
    },
    {
        id:2,
        name:'High School',
        institution:'Trinity Internation College',
        duration: '2019-2021',
        title:"Completed my High School from Trinity International College, where I honed my skills in Mathematics, Science, and English. ",
        icon:'/assets/highSchool.svg',
    },
    {
        id:3,
        name:'Bachelor of Science in Computer Science and Information Technology (Bsc. CSIT)',
        institution:'New Summit College',
        duration: '2022-Present',
        title:"Currently pursuing my Bachelor of Science in Computer Science and Information Technology (Bsc. CSIT) from New Summit College. ",
        icon:'/assets/bachelor.svg',
    }
]
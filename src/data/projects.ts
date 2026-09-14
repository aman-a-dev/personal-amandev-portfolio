export type ProjectsType = {
  badge?: string;
  img: string;
  title: string;
  subTitle: string;
  description: string;
  github: string;
  demo: string;
  teckStack: string[];
  isPrivate: boolean;
};

export const projectsList: ProjectsType[] = [
  {
    badge: "Hot",
    img: "bf",
    title: "BetFinder",
    subTitle: "Full-Stack Rental House Platform",
    description:
      "A modern full-stack rental house platform that helps users discover and list properties with ease. Built with Next.js, TypeScript, Tailwind CSS, Prisma, and Supabase, it features secure authentication, property management, advanced search and filtering, favorites, and a responsive user experience.",
    github: "https://github.com/aman-a-dev/betfinder",
    demo: "https://betfinder-et.vercel.app/",
    teckStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "shadcn/ui",
      "Framer Motion",
    ],
    isPrivate: false,
  },
  {
    badge: "Updated",
    img: "ec",
    title: "ET Care Products",
    subTitle: "Premium Natural Hair & Skin Care Website",
    description: `
    <p>
      A complete redesign and modernization of the ET Care Products website,
      built to showcase premium Ethiopian natural hair and skin care products
      with a faster, more engaging, and mobile-first experience.
    </p>

    <h4>Highlights</h4>
    <ul>
      <li>🌿 Premium landing page with modern product presentation.</li>
      <li>⚡ Optimized performance and significantly faster loading times.</li>
      <li>📱 Fully responsive design for desktop, tablet, and mobile.</li>
      <li>🎨 Elegant UI with smooth animations and improved user experience.</li>
      <li>📰 Blog, About, Contact, and policy pages with SEO-friendly structure.</li>
      <li>🚀 Deployed on Vercel with modern Next.js architecture.</li>
    </ul>

    <p>
      <strong>Tech:</strong>
    </p>
  `,
    github: "https://github.com/aman-a-dev/etcare",
    demo: "https://etcare.vercel.app/",
    teckStack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Framer Motion",
      "GSAP",
      "Lenis",
      "Lucide React",
      "SEO",
      "Vercel",
    ],
    isPrivate: false,
  },
  {
    badge: "Hot",
    img: "hc",
    title: "Hyperchat",
    subTitle: "Real-Time AI Chat Platform",
    description: `
      <p>
        A modern real-time communication platform that combines instant messaging
        with AI-powered conversations to help teams and communities communicate
        more efficiently.
      </p>

      <h4>Highlights</h4>
      <ul>
        <li>💬 Real-time messaging powered by <strong>Ably</strong>.</li>
        <li>🤖 AI assistant for smarter conversations and faster replies.</li>
        <li>🔐 Secure authentication using <strong>Better Auth</strong>.</li>
        <li>⚡ Fast, responsive, and mobile-friendly interface.</li>
        <li>📈 Built with scalability and performance in mind.</li>
      </ul>

      <p>
        <strong>Tech:</strong>
      </p>
    `,
    github: "https://github.com/aman-a-dev/hyper-chat",
    demo: "https://hyperchatai.vercel.app",
    teckStack: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "TypeScript",
      "Prisma ORM",
      "Better Auth",
      "MySQL",
      "Ably",
      "AI Integration",
      "Vercrl",
    ],
    isPrivate: false,
  },

  {
    badge: "New",
    img: "ss",
    title: "Smithshop",
    subTitle: "Gaming Top-up & Digital Marketplace",
    description: `
      <p>
        A full-stack digital marketplace that automates gaming top-ups and social
        media subscriptions, reducing manual work while providing customers with
        fast, secure, and reliable order delivery.
      </p>

      <h4>Highlights</h4>
      <ul>
        <li>🎮 Automated gaming top-up and digital product delivery.</li>
        <li>💳 Secure payment integration using
          <a href="https://chapa.co" target="_blank" rel="noopener noreferrer">
            Chapa
          </a>.
        </li>
        <li>🤖 Telegram bot automation built with <strong>Grammy</strong>.</li>
        <li>👨‍💼 Powerful role-based admin dashboard.</li>
        <li>🔌 External API integrations for seamless order fulfillment.</li>
        <li>📊 Designed for business growth, automation, and scalability.</li>
      </ul>

      <p>
        <strong>Tech:</strong>
      </p>
    `,
    github: "https://github.com/aman-a-dev/smithshop",
    demo: "https://smithshop.vercel.app",
    teckStack: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "TypeScript",
      "Prisma ORM",
      "Better Auth",
      "PostgreSQL",
      "Chapa Payment",
      "Grammy Telegram Bot",
      "API Integration",
      "Vercel",
    ],
    isPrivate: false,
  },
  {
    badge: "",
    img: "re",
    title: "Docnah Real Estate",
    subTitle: "Luxury Real Estate Platform",
    description:
      "A modern and luxurious real estate platform designed to showcase properties with an immersive and premium experience. It features interactive maps, property listings, detailed property pages, advanced search and filtering, smooth animations, responsive design, and an elegant user interface that helps users discover and explore properties effortlessly.",

    github: "https://github.com/aman-a-dev/realestate4",
    demo: "https://realestate-4-et.vercel.app",
    teckStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
    isPrivate: false,
  },
  {
    badge: "New",
    img: "s",
    title: "Online Shop",
    subTitle: "Full-Stack E-Commerce Platform",
    description:
      "A modern full-stack e-commerce platform built for seamless online shopping and store management. It includes a powerful admin panel for managing products, categories, orders, and store content, along with a responsive product listing and shopping experience. The platform also integrates Telegram for customer communication and order management, providing a convenient connection between the store and its customers.",
    github: "https://github.com/aman-a-dev/shop",
    demo: "https://shop-et.vercel.app",
    teckStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "shadcn/ui",
      "Telegram Bot API",
    ],
    isPrivate: true,
  },
  {
    badge: "New",
    img: "lg",
    title: "Leul GFX",
    subTitle: "Portfolio Website for Thumbnail Designer",
    description:
      "A modern portfolio website built for a professional thumbnail designer to showcase creative work, attract potential clients, and present services through a visually engaging and responsive experience.",
    github: "https://github.com/aman-a-dev/thumbnails-portfolio",
    demo: "https://leulgfx.vercel.app/",
    teckStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
    isPrivate: false,
  },

  {
    badge: "",
    img: "ua",
    title: "UltraAI",
    subTitle: "AI Chat, Image & 3D Generator",
    description: `
      <p>
        An all-in-one AI platform that transforms simple prompts into intelligent
        conversations, AI-generated images, and interactive 3D content through
        multiple AI integrations.
      </p>

      <h4>Highlights</h4>
      <ul>
        <li>🤖 AI chatbot with natural conversations.</li>
        <li>🎨 AI image generation from text prompts.</li>
        <li>🧊 Interactive 3D model generation.</li>
        <li>⚡ Fast backend built with Express and Node.js.</li>
        <li>🔗 Multiple AI API integrations in one platform.</li>
      </ul>

      <p>
        <strong>Tech:</strong> 
      </p>
    `,
    github: "https://github.com/aman-a-dev/ultra-ai",
    demo: "https://ultraai-i2q2.onrender.com",
    teckStack: [
      "React.js",
      "Node.js",
      "Tree.js",
      "Express.js",
      "MySQL",
      "AI Integration",
      "Render",
    ],
    isPrivate: false,
  },

  {
    badge: "",
    img: "im",
    title: "InstaMail",
    subTitle: "Temporary Email Service",
    description: `
      <p>
        A privacy-focused temporary email platform that helps users protect
        their personal inbox from spam while instantly receiving verification
        emails and temporary messages.
      </p>

      <h4>Highlights</h4>
      <ul>
        <li>📧 Instant disposable email addresses.</li>
        <li>🛡️ Privacy-first experience.</li>
        <li>💎 Premium subscription support.</li>
        <li>⚡ Real-time inbox updates.</li>
        <li>💳 Payment integration for premium features.</li>
      </ul>

      <p>
        <strong>Tech:</strong>
      </p>
    `,
    github: "https://github.com/aman-a-dev/instaemail",
    demo: "https://instaemail.vercel.app",
    teckStack: [
      "React.js",
      "Tailwind CSS",
      "API Integration",
      "Payment Integration",
    ],
    isPrivate: false,
  },

  {
    badge: "",
    img: "ff",
    title: "FrameFusion",
    subTitle: "Movie Discovery Platform",
    description: `
      <p>
        A modern movie discovery application that helps users explore trending,
        popular, and upcoming movies through live movie APIs with a clean,
        responsive user interface.
      </p>

      <h4>Highlights</h4>
      <ul>
        <li>🎬 Browse trending and popular movies.</li>
        <li>🔎 Powerful search functionality.</li>
        <li>📖 Rich movie details and metadata.</li>
        <li>📱 Fully responsive experience.</li>
        <li>⚡ Live data from external movie APIs.</li>
      </ul>

      <p>
        <strong>Tech:</strong>
      </p>
    `,
    github: "https://github.com/aman-a-dev/framefusion",
    demo: "https://framefusion-2fr2.onrender.com",
    teckStack: ["React.js", "CSS", "API Integration"],
    isPrivate: false,
  },
];

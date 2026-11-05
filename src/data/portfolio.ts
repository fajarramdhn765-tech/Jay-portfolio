export type ProjectStatusType = 'Learning' | 'Prompt Created' | 'In Progress' | 'Prototype' | 'Completed';

export interface LearningTimelineItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  learnings: string[];
  exercises: string[];
}

export type ProjectCategoryType =
  | 'AI & Prompt Engineering'
  | 'Web Development'
  | 'Game Development'
  | 'Android Application'
  | 'Creative Design'
  | 'Deployment & PWA';

export interface ShowcaseWorkItem {
  id: string;
  number: string;
  title: string;
  category: ProjectCategoryType;
  description: string;
  image: string;
  tools: string[];
  keyLearnings: string[];
  status: ProjectStatusType;
  statusDescription: string;
  detailedOverview: string;
  learningObjectives: string[];
  developmentProcess: string;
  skillsGained: string[];
  promptExample?: string;
  demoUrl?: string;
  githubUrl?: string;
  tags?: string[];
  liveUrl?: string;
  longDescription?: string;
}

export type ProjectItem = ShowcaseWorkItem;

export interface SkillItem {
  name: string;
  category: 'core' | 'frontend' | 'tools' | 'design';
  percentage: number;
  level: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  category: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Fajar Ramadhan',
    brandName: 'JAY',
    title: 'Creative Web Developer',
    role: 'Pengembang Web Kreatif',
    location: 'Kp. Cadasari Tengah',
    country: 'Indonesia',
    availability: 'Tersedia untuk Proyek',
    availabilityStatus: 'open_for_hire',
    email: 'fajarramdhn765@gmail.com',
    whatsappNumber: '085811767579',
    whatsappFormatted: '+62 858-1176-7579',
    whatsappUrl: 'https://wa.me/6285811767579?text=Halo%20Fajar%2C%20saya%20tertarik%20dengan%20portofolio%20dan%20perjalanan%20belajar%20Anda.',
    githubUrl: 'https://github.com/fajar-jay',
    linkedinUrl: 'https://linkedin.com/in/fajar-ramadhan-jay',
    cvFileUrl: '/assets/cv/fajar-ramadhan-cv.pdf',
    profileImage: '/assets/aistudio/file_0000000070bc8211be072aa7d2ee41ac_c1f329c1.png',
    bio: 'Saya adalah seorang calon Web Developer dengan ketertarikan mendalam pada teknologi, kreativitas digital, dan AI-assisted development. Terus bereksplorasi dengan rasa ingin tahu tinggi, mempraktikkan kode bersih, dan menyusun ide-ide digital bermakna.',
  },

  hero: {
    kicker: 'HALO, SAYA',
    headline: 'FAJAR RAMADHAN',
    title: 'Creative Web Developer',
    description: 'Saya membangun pengalaman digital modern melalui kode yang bersih, eksplorasi AI, dan pemecahan masalah kreatif.',
    quote: 'Desain yang hebat seharusnya terasa alami dan tak kasat mata.',
    quoteSub: 'Dari eksperimen prompt hingga kode teruji, saya mengubah ide kreatif menjadi kreasi digital nyata.',
    ctaPrimary: 'Lihat Perjalanan & Karya',
    ctaSecondary: 'Ayo Bicara',
    expertise: [
      { id: '01', title: 'Frontend Development', desc: 'Arsitektur responsif & modern' },
      { id: '02', title: 'Desain UI/UX', desc: 'Estetika dark editorial yang intuitif' },
      { id: '03', title: 'Game & App Concepts', desc: 'Mekanik interaktif & logika game' },
      { id: '04', title: 'AI-Assisted Dev', desc: 'Prompt engineering & eksplorasi ChatGPT' },
    ],
  },

  about: {
    kicker: 'DI BALIK KODE',
    headline: 'Membangun Pengalaman Digital yang Memberi Dampak Nyata.',
    paragraphs: [
      'Saya adalah seorang Web Developer dengan ketertarikan mendalam pada teknologi dan inovasi digital. Saya senang mempelajari keterampilan baru, merancang desain website modern, serta mengembangkan pengalaman digital yang kreatif dan interaktif.',
      'Dalam proses belajar, saya memanfaatkan ChatGPT sebagai mentor dan akselerator kreatif—mulai dari membedah konsep logika pemrograman, merancang prompt UI/UX terstruktur, hingga mewujudkan prototipe game dan aplikasi fungsional.',
    ],
    stats: [
      { value: '6+', label: 'Bidang Pembelajaran' },
      { value: '100%', label: 'Dedikasi & Praktik Nyata' },
      { value: 'AI+', label: 'Assisted Workflow' },
      { value: '24/7', label: 'Komitmen Belajar' },
    ],
  },

  techStack: [
    { name: 'HTML5', category: 'Markup' },
    { name: 'CSS3', category: 'Styling' },
    { name: 'JavaScript', category: 'Bahasa' },
    { name: 'TypeScript', category: 'Bahasa' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Tailwind CSS', category: 'Sistem Desain' },
    { name: 'GitHub', category: 'Kontrol Versi' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Server API' },
    { name: 'Figma', category: 'Desain UI/UX' },
    { name: 'Vite', category: 'Build Tool' },
  ],

  learningJourney: {
    kicker: 'MY LEARNING JOURNEY',
    headline: 'Learning, Creating & Building Digital Experiences.',
    description:
      'Every project starts with curiosity. Throughout my learning journey, I have explored web development, AI-assisted creativity, UI/UX design, game concepts, and digital application development with the help of ChatGPT.',
    tagline: 'Learning by Doing. Creating with Purpose.',
    timeline: [
      {
        id: 'timeline-01',
        number: '01',
        title: 'AI & PROMPT ENGINEERING',
        subtitle: 'Memanfaatkan AI sebagai Akselerator Belajar & Brainstorming',
        description: 'Mempelajari cara menyusun prompt AI yang presisi, terstruktur, dan kontekstual untuk mempercepat riset dan implementasi teknis.',
        learnings: [
          'Mengenal penggunaan ChatGPT untuk membantu proses belajar.',
          'Belajar membuat prompt yang terstruktur dan terarah.',
          'Mengembangkan instruksi sistem untuk AI.',
          'Menyusun prompt UI/UX dan arsitektur development.',
          'Menggunakan AI untuk brainstorming ide kreatif dan perbaikan kode.',
        ],
        exercises: [
          'Prompt pembuatan website modern',
          'Prompt desain game arcade',
          'Prompt pembuatan aplikasi Android',
          'Prompt desain visual dan branding',
        ],
      },
      {
        id: 'timeline-02',
        number: '02',
        title: 'WEB DEVELOPMENT & WEBSITE DESIGN',
        subtitle: 'Transformasi Ide Kreatif Menjadi Website Responsif',
        description: 'Learning how to transform creative ideas into modern, responsive, and interactive website experiences.',
        learnings: [
          'Mengenal struktur semantik website modern.',
          'Belajar konsep inti HTML, CSS, dan JavaScript modern.',
          'Memahami prinsip responsive web design di berbagai perangkat.',
          'Mengeksplorasi ekosistem React.js dan TypeScript.',
          'Belajar membuat landing page profesional berkonversi tinggi.',
          'Memahami estetika dan alur UI/UX website modern.',
        ],
        exercises: [
          'Personal Portfolio Website (JAY)',
          'Dark Premium Editorial Portfolio',
          'Modern Landing Page Concept',
          'Website UI Concept & Design System',
        ],
      },
      {
        id: 'timeline-03',
        number: '03',
        title: 'GAME DEVELOPMENT & ARCADE DESIGN',
        subtitle: 'Mekanika Game, Antarmuka Interaktif, & Pengalaman Arcade',
        description: 'Exploring game design, gameplay mechanics, interactive interfaces, and creative arcade experiences with AI-assisted development.',
        learnings: [
          'Mengenal konsep pengembangan game berbasis browser.',
          'Membuat gameplay loops dan mekanika game interaktif.',
          'Mendesain antarmuka game (HUD, health bar, skor, kontrol).',
          'Memahami sistem kontrol keyboard dan input interaksi.',
          'Mengembangkan ide level progresif, karakter, dan animasi visual.',
          'Mengeksplorasi game development berbantuan AI.',
        ],
        exercises: [
          'Snake & Ladder Game: Sistem dadu, pion, tangga, ular, multiplayer 2–4 pemain',
          'Brick Breaker Arcade: Menghancurkan balok dengan paddle & bola, power-up, dan level',
          'Street Fighter Arcade: Pertarungan karakter, combo attack, punch/kick, defense, health bar, timer, versus CPU',
        ],
      },
      {
        id: 'timeline-04',
        number: '04',
        title: 'ANDROID APPLICATION DEVELOPMENT',
        subtitle: 'Perancangan Konsep & Alur Fitur Aplikasi Mobile',
        description: 'Exploring the process of designing an Android calculator application, including interface concepts, functionality requirements, and development planning.',
        learnings: [
          'Mengenal konsep dasar arsitektur aplikasi Android.',
          'Menyusun spesifikasi kebutuhan dan use case aplikasi.',
          'Merancang antarmuka mobile yang ergonomis untuk sentuhan.',
          'Membuat prompt terstruktur untuk pengembangan aplikasi.',
          'Memahami alur fitur, tata kelola state, dan interaksi pengguna.',
        ],
        exercises: [
          'Calculator Android Application: Konsep UI, kebutuhan fungsi matematika, dan rencana pengembangan',
        ],
      },
      {
        id: 'timeline-05',
        number: '05',
        title: 'CREATIVE DESIGN & VISUAL BRANDING',
        subtitle: 'Eksplorasi Visual Digital & Personal Branding',
        description: 'Developing visual creativity through AI-assisted image generation, branding exploration, and modern digital design.',
        learnings: [
          'Mengenal prinsip desain visual digital dan komposisi.',
          'Mengeksplorasi penggunaan AI generator gambar untuk visualisasi aset.',
          'Membuat konsep logo dan identitas visual yang khas.',
          'Mengembangkan desain splash screen dan kartu grafis.',
          'Memahami komposisi warna gelap dengan aksen kontras dan tipografi.',
          'Mengembangkan personal branding yang profesional.',
        ],
        exercises: [
          'Brick Breaker Game Logo & Asset Suite',
          'Street Fighter Arcade Logo & Stage Concept',
          'Professional Portfolio Portrait Composition',
          'Dark Premium Website Visual Concept',
        ],
      },
      {
        id: 'timeline-06',
        number: '06',
        title: 'WEB DEPLOYMENT & PWA EXPLORATION',
        subtitle: 'Publikasi Cloud, Sinkronisasi Git, & PWA',
        description: 'Learning how digital projects can move from development environments to accessible web applications.',
        learnings: [
          'Mengenal alur kerja Git dan kolaborasi GitHub repository.',
          'Belajar menghubungkan project lokal ke remote repository.',
          'Mengeksplorasi automated deployment menggunakan cloud Vercel.',
          'Memahami sinkronisasi project dan konfigurasi build.',
          'Mengenal konsep Progressive Web App (PWA) dan offline capability.',
          'Mempelajari proses publikasi website siap akses publik.',
        ],
        exercises: [
          'Setup repositori Git dan pipeline deploy Vercel',
          'Pemeriksaan build statis Vite (dist)',
          'Eksplorasi manifest & service worker untuk PWA',
        ],
      },
    ],
  },

  showcaseWorks: [
    {
      id: 'work-1',
      number: '01',
      title: 'JAY Dark Premium Portfolio Website',
      category: 'Web Development',
      status: 'Completed',
      statusDescription: 'Karya sudah selesai, diuji responsivitasnya, dan siap diakses online.',
      description: 'Website portofolio personal dengan estetika dark editorial sinematik, arsitektur React 19, TypeScript, Tailwind CSS, dan asisten AI Gemini terintegrasi.',
      image: '/assets/images/project_personal_portfolio_1793854345664.jpg',
      tools: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'ChatGPT', 'Gemini AI', 'Vercel'],
      keyLearnings: [
        'Membangun arsitektur komponen React yang bersih dan modular.',
        'Menerapkan sistem desain warna gelap (#090909) dengan aksen oranye-merah (#FF5A1F).',
        'Mengintegrasikan API Gemini untuk fitur chatbot asistensi portofolio.',
        'Mengonfigurasi deployment ke cloud Vercel.',
      ],
      detailedOverview:
        'Website portofolio ini merupakan karya representasi diri Fajar Ramadhan (JAY) sebagai Creative Web Developer. Dirancang dengan pendekatan dark minimalist editorial, tata letak seimbang 1440px, performa Core Web Vitals tinggi, serta struktur kode yang mudah dirawat.',
      learningObjectives: [
        'Menguasai pembuatan single page application (SPA) dengan React dan Vite.',
        'Menerapkan styling modern dengan Tailwind CSS v4.',
        'Membuat alur navigasi responsif dari mobile hingga desktop.',
      ],
      developmentProcess:
        'Proses diawali dengan menyusun struktur informasi menggunakan bantuan ChatGPT, menguji rancangan warna dan tipografi Outfit + Plus Jakarta Sans, membagi komponen modular (Hero, About, Timeline, Projects, Contact), dan menghubungkan endpoint API server-side.',
      skillsGained: [
        'React State & Hooks',
        'TypeScript Interfaces',
        'Tailwind CSS Theming',
        'Responsive Web Architecture',
      ],
      githubUrl: 'https://github.com/fajar-jay/portfolio-website',
    },
    {
      id: 'work-2',
      number: '02',
      title: 'Snake & Ladder Multiplayer Game Concept',
      category: 'Game Development',
      status: 'Prototype',
      statusDescription: 'Prototipe logika permainan dan antarmuka visual sudah dibuat.',
      description: 'Konsep game papan ular tangga digital dengan sistem giliran, lemparan dadu 3D, koordinat petak 1-100, tangga naik, ular turun, dan dukungan multiplayer 2–4 pemain.',
      image: '/assets/images/arcade_snake_ladder_1793862579133.jpg',
      tools: ['JavaScript Logic', 'HTML5 Canvas Concept', 'ChatGPT Game Mechanics', 'UI HUD Design'],
      keyLearnings: [
        'Membuat state machine giliran pemain (turn-based multiplayer).',
        'Logika matematika lemparan dadu acak (1-6) dan kalkulasi posisi pion.',
        'Kamus pemetaan tangga (naik posisi) dan ular (turun posisi).',
        'Perancangan visual papan petak modern dengan aksen neon.',
      ],
      detailedOverview:
        'Proyek eksplorasi game edukatif yang mengubah permainan klasik Ular Tangga menjadi pengalaman digital modern. Menghadirkan papan petak berkilau, indikator giliran aktif pemain, riwayat lemparan dadu, dan kondisi kemenangan yang adil.',
      learningObjectives: [
        'Memahami algoritma pergerakan karakter berbasis grid.',
        'Menangani state multiplayer lokal secara berurutan.',
        'Mendesain antarmuka game (HUD) yang bersih dan intuitif.',
      ],
      developmentProcess:
        'Menggunakan ChatGPT untuk menyusun logika array 100 petak, menentukan formula deteksi tangga dan ular, merancang prompt visual untuk render papan isometrik, dan memvalidasi siklus giliran antar pemain.',
      skillsGained: [
        'Game State Management',
        'Turn-based Algorithm',
        'Isometric Board Visualization',
        'Math Random Probability',
      ],
      promptExample:
        'Buatkan logika JavaScript untuk game ular tangga 1-100 dengan multiplayer 4 pemain, fungsi rollDice(), pemetaan objek snakes dan ladders, serta penentuan pemenang tepat di angka 100.',
    },
    {
      id: 'work-3',
      number: '03',
      title: 'Brick Breaker Neon Arcade',
      category: 'Game Development',
      status: 'Prototype',
      statusDescription: 'Prototipe mekanik pantulan bola, paddle kontrol, dan deteksi tabrakan balok.',
      description: 'Konsep game arkade retro modern di mana pemain mengendalikan paddle untuk memantulkan bola, memecahkan susunan balok berwarna, mengumpulkan power-up, dan menyelesaikan level.',
      image: '/assets/images/arcade_brick_breaker_1793862579188.jpg',
      tools: ['Physics Simulation', 'Canvas API Concept', 'Arcade Sound FX Concept', 'ChatGPT'],
      keyLearnings: [
        'Konsep deteksi tabrakan 2D (AABB - Axis-Aligned Bounding Box).',
        'Logika vektor pantulan sudut bola berdasarkan titik sentuh paddle.',
        'Sistem skor bertingkat, nyawa (lives), dan transisi level.',
        'Efek visual partikel neon saat balok hancur.',
      ],
      detailedOverview:
        'Eksplorasi pembuatan game aksi refleks arkade. Menguji kemampuan logika fisika sederhana pada peramban, pengaturan kecepatan bola, serta desain antarmuka retro arcade kabinet yang bernuansa neon futuristik.',
      learningObjectives: [
        'Memahami game loop (update state & draw frame).',
        'Menerapkan fisika pantulan dan batas layar permainan.',
        'Mendesain hierarki skor dan level progresif.',
      ],
      developmentProcess:
        'Berkonsultasi dengan ChatGPT untuk memahami matematika pantulan sudut bola pada paddle, menyusun parameter grid balok beraneka warna, dan merancang estetika visual kabinet arkade klasik.',
      skillsGained: [
        'Collision Detection Math',
        'Game Loop Execution',
        'Interactive Physics',
        'Arcade HUD Design',
      ],
      promptExample:
        'Tuliskan konsep kalkulasi sudut pantulan bola pada paddle brick breaker: semakin dekat ke ujung paddle, sudut pantulan semakin tajam. Sertakan struktur array grid balok dan deteksi collision.',
    },
    {
      id: 'work-4',
      number: '04',
      title: 'Street Fighter Arcade Fight Concept & UI',
      category: 'Game Development',
      status: 'Prompt Created',
      statusDescription: 'Konsep game, spesifikasi mekanik pertarungan, dan prompt arsitektur telah selesai dirancang.',
      description: 'Rancangan konsep game pertarungan klasik arcade yang menampilkan sistem health bar dinamis, timer ronde, gerakan combo, pukulan, tendangan, tangkisan, dan mode versus CPU.',
      image: '/assets/images/arcade_street_fighter_1793862578810.jpg',
      tools: ['Combat Mechanics Design', 'Prompt Engineering', 'Sprite State Concepts', 'ChatGPT'],
      keyLearnings: [
        'Menganalisis sistem state karakter (Idle, Walk, Punch, Kick, Block, Hurt, Knockout).',
        'Memahami timing input kombo dan buffer tombol.',
        'Perancangan antarmuka pertarungan arcade (Health bar, gauge meter, round timer).',
        'Algoritma sederhana tingkah laku CPU/AI musuh.',
      ],
      detailedOverview:
        'Dokumentasi perancangan game pertarungan arcade berkecepatan tinggi. Berfokus pada bagaimana menyusun sistem pertarungan yang adil dan responsif, serta merancang grafis antarmuka yang membangkitkan nostalgia arcade era 90-an dengan sentuhan modern.',
      learningObjectives: [
        'Menyusun spesifikasi teknis game pertarungan yang kompleks.',
        'Memahami sistem animasi berbasis state frame.',
        'Merancang arsitektur input listener multipemain lokal.',
      ],
      developmentProcess:
        'Mengembangkan prompt mendalam bersama ChatGPT untuk mendefinisikan tabel damage tiap serangan, durasi invulnerability frame, mekanika tangkisan, serta alur penentuan pemenang dalam format best-of-three rounds.',
      skillsGained: [
        'Fighting Game System Design',
        'Finite State Machine (FSM)',
        'Complex Animation Logic',
        'Technical Requirement Writing',
      ],
      promptExample:
        'Rancang Game Design Document (GDD) untuk web-based fighting game bergaya Street Fighter: sistem 2 pemain, mapping tombol kontrol keyboard, kalkulasi pengurangan health bar, dan logic timer.',
    },
    {
      id: 'work-5',
      number: '05',
      title: 'Android Calculator Application Concept',
      category: 'Android Application',
      status: 'Prototype',
      statusDescription: 'Rancangan tata letak antarmuka, daftar fitur fungsional, dan prototipe logika matematika telah selesai.',
      description: 'Eksplorasi perancangan aplikasi kalkulator Android dengan tata letak tombol ergonomis, riwayat kalkulasi, dukungan operasi aritmatika dasar hingga desimal, dan mode gelap hemat daya.',
      image: '/assets/images/project_dashboard_analytics_1793854328689.jpg',
      tools: ['Android Layout Concept', 'Kotlin / Java Logic Concept', 'Material Design 3', 'ChatGPT'],
      keyLearnings: [
        'Memahami sistem grid dan constraint layout aplikasi mobile.',
        'Menangani penanganan kesalahan aritmatika (misal: pembagian dengan nol).',
        'Pengelolaan state string input angka dan urutan operasi matematika.',
        'Prinsip ukuran tombol ramah sentuhan (touch target minimum 48dp).',
      ],
      detailedOverview:
        'Langkah awal mempelajari ekosistem pengembangan aplikasi mobile Android. Membedah bagaimana fungsi matematika diimplementasikan di balik tombol antarmuka, penanganan orientasi layar, serta kesesuaian dengan pedoman Material Design.',
      learningObjectives: [
        'Memahami siklus hidup (lifecycle) aktivitas aplikasi Android.',
        'Merancang UI kalkulator yang bersih dan mudah ditekan satu tangan.',
        'Mengembangkan logika evaluasi ekspresi matematika bertingkat.',
      ],
      developmentProcess:
        'Menggunakan ChatGPT untuk membedah pembuatan antarmuka GridLayout di Android, merumuskan logika parser ekspresi matematika dengan operator precedence, dan merancang skema warna dark mode kontras tinggi.',
      skillsGained: [
        'Mobile UI Constraints',
        'Mathematical Expression Parsing',
        'Error Handling & Edge Cases',
        'Touch Target Optimization',
      ],
      promptExample:
        'Bagaimana struktur arsitektur pembuatan aplikasi kalkulator Android: buatkan spesifikasi XML Layout tombol 4x5, logic penanganan tombol titik desimal, operator tambah/kurang/kali/bagi, dan layar display riwayat.',
    },
    {
      id: 'work-6',
      number: '06',
      title: 'AI Prompt Engineering & Structured Instruction Suite',
      category: 'AI & Prompt Engineering',
      status: 'Completed',
      statusDescription: 'Dokumentasi pola prompt teruji dan berhasil diterapkan di berbagai karya.',
      description: 'Metodologi perancangan instruksi dan prompt tingkat lanjut untuk memaksimalkan ChatGPT dalam pembuatan kode frontend, ide mekanik game, penyusunan arsitektur sistem, dan perbaikan bug.',
      image: '/assets/images/project_collaborative_app_1793854345964.jpg',
      tools: ['ChatGPT-4 / 3.5', 'Markdown Documentation', 'Few-Shot Prompting', 'Chain-of-Thought'],
      keyLearnings: [
        'Teknik perancangan persona AI yang spesifik (misal: Senior Frontend Engineer).',
        'Penyusunan prompt dengan pembagian konteks, batasan, input, dan ekspektasi output.',
        'Metode debugging kode secara interaktif dengan meminta penjelasan per baris.',
        'Pemanfaatan AI untuk refactoring kode agar lebih bersih dan efisien.',
      ],
      detailedOverview:
        'Dokumentasi komprehensif mengenai bagaimana AI dapat dijadikan rekan kolaborasi nyata dalam belajar pemrograman. Fajar menyusun berbagai pustaka prompt yang terbukti menghasilkan kode berkualitas tinggi, tata letak UI presisi, serta panduan arsitektur sistem yang jelas.',
      learningObjectives: [
        'Menguasai prompt engineering untuk pengembangan perangkat lunak.',
        'Mampu membedah kode kompleks menjadi pertanyaan terarah ke AI.',
        'Meningkatkan kecepatan belajar konsep baru hingga 3x lipat.',
      ],
      developmentProcess:
        'Mencoba puluhan iterasi prompt untuk menemukan struktur paling konsisten, mencatat respons terbaik, dan mengintegrasikan instruksi sistem yang melarang kode asal-asalan demi menjaga standar produksi.',
      skillsGained: [
        'Advanced Prompt Crafting',
        'AI Assisted Debugging',
        'Requirements Engineering',
        'Iterative Refinement',
      ],
      promptExample:
        'Bertindaklah sebagai Senior React Architect. Bantu saya membangun komponen kartu portofolio yang modular dengan Tailwind CSS: berikan struktur data TypeScript, penanganan error gambar fallback, dan efek transisi hover 200ms.',
    },
    {
      id: 'work-7',
      number: '07',
      title: 'Arcade & Digital Studio Visual Branding Suite',
      category: 'Creative Design',
      status: 'Prototype',
      statusDescription: 'Koleksi logo, komposisi warna, dan eksplorasi tipografi untuk proyek digital.',
      description: 'Eksplorasi desain identitas visual untuk game Brick Breaker, Street Fighter Arcade, logo personal JAY, serta konsep splash screen bertema dark premium.',
      image: '/assets/images/project_creative_spatial_1793854328669.jpg',
      tools: ['AI Image Prompting', 'Color Harmony Theory', 'Typography Pairing', 'Figma Concept'],
      keyLearnings: [
        'Penerapan aturan distribusi warna 60-30-10 pada tema gelap.',
        'Perpaduan tipografi berkarakter (Outfit display) dengan font body yang nyaman dibaca.',
        'Pembuatan logo bergaya arcade retro dan logo modern minimalis.',
        'Penggunaan efek pencahayaan rim-light oranye untuk menciptakan nuansa sinematik.',
      ],
      detailedOverview:
        'Eksplorasi visual yang membuktikan bahwa desain yang baik tidak harus rumit, melainkan membutuhkan konsistensi warna, hierarki tipografi yang tegas, serta ruang bernapas (whitespace) yang lega antar elemen.',
      learningObjectives: [
        'Membangun identitas visual terpadu untuk beberapa proyek berbeda.',
        'Mengeksplorasi prompt grafis AI untuk visualisasi aset.',
        'Memahami psikologi warna gelap dan aksen energi hangat.',
      ],
      developmentProcess:
        'Mengeksplorasi moodboard digital, menguji palet warna #090909, #141414, #FF5A1F, dan #F12B19, menyelaraskan rasio sudut lengkung (border radius), serta memastikan keterbacaan teks memenuhi standar WCAG AA.',
      skillsGained: [
        'Brand Identity Design',
        'Color Theory & Contrast',
        'Visual Hierarchy',
        'Design Systems Fundamentals',
      ],
    },
    {
      id: 'work-8',
      number: '08',
      title: 'Vercel Deployment & PWA Pipeline Architecture',
      category: 'Deployment & PWA',
      status: 'Completed',
      statusDescription: 'Pipeline build produksi teruji dengan sukses dan terkonfigurasi untuk Vercel.',
      description: 'Penerapan arsitektur deployment otomatis menggunakan Vercel, optimasi output build Vite, verifikasi routing SPA dengan vercel.json, dan eksplorasi Progressive Web App.',
      image: '/assets/images/project_kinetic_landing_1793854329159.jpg',
      tools: ['Vercel Cloud', 'Git / GitHub', 'Vite Build Engine', 'vercel.json', 'HTTP Headers'],
      keyLearnings: [
        'Menyiapkan berkas vercel.json untuk routing SPA tanpa 404.',
        'Mengonfigurasi public assets agar seluruh gambar disajikan dengan status 200 OK.',
        'Menganalisis hasil bundling file JavaScript dan CSS untuk waktu muat instan.',
        'Konsep Service Worker dan Web App Manifest untuk instalasi aplikasi di smartphone.',
      ],
      detailedOverview:
        'Bagian krusial yang menjembatani antara kode lokal di komputer dengan website yang dapat dibuka oleh siapa saja di seluruh dunia. Menguji kehandalan proses build, caching aset statis, dan kesiapan deploy berkelanjutan.',
      learningObjectives: [
        'Memahami alur kerja CI/CD cloud hosting modern.',
        'Menjamin semua aset visual termuat dengan sempurna di lingkungan produksi.',
        'Mempersiapkan website agar mendukung standar PWA.',
      ],
      developmentProcess:
        'Menyusun struktur folder /public untuk aset statis, menulis konfigurasi vercel.json, menjalankan npm run build secara berkala untuk memverifikasi nol error, serta mengecek header response HTTP.',
      skillsGained: [
        'Cloud Deployment Configuration',
        'Build Optimization',
        'Static Asset Delivery',
        'Production Debugging',
      ],
    },
  ] as ShowcaseWorkItem[],

  projects: [] as ShowcaseWorkItem[],

  learningPhilosophy: {
    kicker: 'MY PHILOSOPHY',
    headline: 'Learning Never Stops. Every Idea Has the Potential to Become Something Great.',
    description:
      'I believe that technology is best learned through practice and exploration. Every prompt, design, experiment, and project teaches me something new. With curiosity, consistency, and the support of AI tools like ChatGPT, I continue developing my skills and turning ideas into meaningful digital creations.',
    tagline: 'Learning by Doing. Creating with Purpose.',
    principles: [
      {
        number: '01',
        title: 'Stay Curious',
        description: 'Always explore new ideas, tools, and technologies with an open mind and a passion to discover how things work.',
      },
      {
        number: '02',
        title: 'Learn by Doing',
        description: 'Turn theoretical knowledge into practical experiments, real code implementations, and creative projects.',
      },
      {
        number: '03',
        title: 'Keep Improving',
        description: 'Learn from every bug, feedback, and process. Continually refine my skills to build better digital experiences.',
      },
    ],
  },

  services: [
    {
      number: '01',
      title: 'PENGEMBANGAN WEB',
      description: 'Membangun website modern, responsif, dan teroptimasi untuk memperkuat identitas brand serta mendorong konversi nyata.',
      deliverables: ['Arsitektur Web Kustom', 'Performa Cepat Lintas Perangkat', 'HTML5 Semantik & Aksesibilitas'],
    },
    {
      number: '02',
      title: 'FRONTEND DEVELOPMENT',
      description: 'Menciptakan antarmuka interaktif dengan kode yang bersih, modular, dan mudah dirawat menggunakan React dan TypeScript.',
      deliverables: ['Pustaka Komponen Modular', 'Manajemen State Dinamis', 'Mikro-interaksi Halus'],
    },
    {
      number: '03',
      title: 'DESAIN UI/UX',
      description: 'Merancang pengalaman digital intuitif dan memikat yang terinspirasi oleh estetika dark minimalist editorial kelas dunia.',
      deliverables: ['Alur Pengguna & Wireframing', 'Prototipe Interaktif Resolusi Tinggi', 'Design Tokens & Panduan Gaya'],
    },
    {
      number: '04',
      title: 'DESAIN LANDING PAGE',
      description: 'Menciptakan landing page profesional berkonversi tinggi untuk kebutuhan bisnis, peluncuran produk inovatif, dan personal branding.',
      deliverables: ['Tata Letak Berorientasi Konversi', 'Skor Core Web Vitals Maksimal', 'Pengalaman Mobile Responsif Penuh'],
    },
  ],

  skills: [
    { name: 'HTML & CSS', category: 'core', percentage: 95, level: 'Sangat Mahir' },
    { name: 'JavaScript', category: 'core', percentage: 90, level: 'Mahir' },
    { name: 'React.js', category: 'frontend', percentage: 92, level: 'Sangat Mahir' },
    { name: 'Next.js', category: 'frontend', percentage: 88, level: 'Kompeten' },
    { name: 'Tailwind CSS', category: 'design', percentage: 96, level: 'Tingkat Ahli' },
    { name: 'Responsive Design', category: 'design', percentage: 94, level: 'Tingkat Ahli' },
    { name: 'Desain UI/UX', category: 'design', percentage: 89, level: 'Kompeten' },
    { name: 'Git & GitHub', category: 'tools', percentage: 91, level: 'Mahir' },
  ],

  contact: {
    headline: 'MARI BANGUN SESUATU YANG LUAR BIASA BERSAMA.',
    description: 'Punya ide proyek menarik atau ingin berkolaborasi dengan web developer yang berdedikasi? Mari berdiskusi dan wujudkan visi digital Anda menjadi kenyataan.',
    locationText: 'Kp. Cadasari Tengah, Indonesia',
    responseTime: 'Biasanya merespons dalam 24 jam',
  },
};

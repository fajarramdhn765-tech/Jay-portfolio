export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

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
  svgIcon: string;
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
    whatsappUrl: 'https://wa.me/6285811767579?text=Halo%20Fajar%2C%20saya%20tertarik%20dengan%20portofolio%20Anda%20dan%20ingin%20berdiskusi%20mengenai%20proyek.',
    githubUrl: 'https://github.com/fajar-jay',
    linkedinUrl: 'https://linkedin.com/in/fajar-ramadhan-jay',
    cvFileUrl: '/assets/cv/fajar-ramadhan-cv.pdf',
    // Foto potret resmi Fajar Ramadhan
    profileImage: '/assets/aistudio/file_0000000070bc8211be072aa7d2ee41ac_c1f329c1.png',
    bio: 'Saya adalah seorang Web Developer dengan ketertarikan mendalam pada teknologi dan inovasi digital. Saya senang mempelajari keterampilan baru, merancang desain website modern, serta mengembangkan pengalaman digital yang kreatif dan interaktif.',
  },

  hero: {
    kicker: 'HALO, SAYA',
    headline: 'FAJAR RAMADHAN',
    title: 'Creative Web Developer',
    description: 'Saya membangun pengalaman digital modern melalui kode yang bersih, desain yang matang, dan teknologi inovatif.',
    quote: 'Desain yang hebat seharusnya terasa alami dan tak kasat mata.',
    quoteSub: 'Dari arsitektur kode hingga tampilan yang presisi, saya menciptakan produk digital yang memikat dan berdampak.',
    ctaPrimary: 'Lihat Karya Saya',
    ctaSecondary: 'Ayo Bicara',
    expertise: [
      { id: '01', title: 'Frontend Development', desc: 'Arsitektur responsif & modern' },
      { id: '02', title: 'Desain UI/UX', desc: 'Estetika dark editorial yang intuitif' },
      { id: '03', title: 'Aplikasi Web', desc: 'Sistem full-stack yang skalabel' },
      { id: '04', title: 'Creative Development', desc: 'Interaksi & animasi dinamis' },
    ],
  },

  about: {
    kicker: 'DI BALIK KODE',
    headline: 'Membangun Pengalaman Digital yang Memberi Dampak Nyata.',
    paragraphs: [
      'Saya adalah seorang Web Developer dengan ketertarikan mendalam pada teknologi dan inovasi digital. Saya senang mempelajari keterampilan baru, merancang desain website modern, serta mengembangkan pengalaman digital yang kreatif dan interaktif.',
      'Berakar pada disiplin rekayasa perangkat lunak dan kepekaan estetika modern, saya berfokus menciptakan antarmuka pengguna yang secepat kilat, aksesibel, dan memikat secara visual. Setiap baris kode dirancang demi performa tinggi dan keanggunan tampilan.',
    ],
    stats: [
      { value: '15+', label: 'Proyek Selesai' },
      { value: '100%', label: 'Standar Kode Bersih' },
      { value: '<0.2s', label: 'Latensi Interaksi' },
      { value: '24/7', label: 'Komunikasi Responsif' },
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

  projects: [
    {
      id: 'proj-1',
      number: '01',
      title: 'AURUM Luxe E-Commerce',
      category: 'Website E-Commerce',
      description: 'Toko online minimalis mewah dengan kurasi editorial eksklusif, transisi keranjang belanja mulus, dan styling dark modern.',
      longDescription: 'Pengalaman belanja digital yang sangat elegan untuk produk wewangian artisanal dan keramik eksklusif. Dilengkapi filter kategori secepat kilat, laci keranjang instan, galeri produk responsif, dan navigasi keyboard yang aksesibel.',
      image: '/assets/images/project_ecommerce_luxe_1793854327698.jpg',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe UI'],
      liveUrl: 'https://demo-aurum-luxe.example.com',
      githubUrl: 'https://github.com/fajar-jay/aurum-ecommerce',
      featured: true,
    },
    {
      id: 'proj-2',
      number: '02',
      title: 'METRICA Analytics Suite',
      category: 'Modern Dashboard UI',
      description: 'Platform visualisasi data keuangan dan telemetri enterprise dengan grafik amber berpendar dan kartu metrik real-time.',
      longDescription: 'Dashboard SaaS berperforma tinggi yang dirancang khusus untuk tim intelijen data bisnis. Mengintegrasikan tabel data tabular, widget ikhtisar KPI dinamis, kurva tren SVG interaktif, dan filter rentang waktu instan.',
      image: '/assets/images/project_dashboard_analytics_1793854328689.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Telemetry Charts'],
      liveUrl: 'https://demo-metrica-suite.example.com',
      githubUrl: 'https://github.com/fajar-jay/metrica-analytics',
      featured: true,
    },
    {
      id: 'proj-3',
      number: '03',
      title: 'OBSIDIAN Architectural Monograph',
      category: 'Portofolio Personal',
      description: 'Portofolio monograf editorial untuk perancang arsitektur dengan tata letak brutalist, grid galeri interior, dan pencahayaan hangat.',
      longDescription: 'Dirancang untuk studio arsitektur minimalis di London. Menggunakan permukaan obsidian yang elegan, pencahayaan latar temaram, galeri foto masonry resolusi tinggi, dan narasi studi kasus yang mendalam.',
      image: '/assets/images/project_personal_portfolio_1793854345664.jpg',
      tags: ['React', 'Editorial Grid', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://demo-obsidian-portfolio.example.com',
      githubUrl: 'https://github.com/fajar-jay/obsidian-portfolio',
      featured: false,
    },
    {
      id: 'proj-4',
      number: '04',
      title: 'QUANTUM Frontier Launchpad',
      category: 'Desain Landing Page',
      description: 'Landing page peluncuran produk hardware kinetik mutakhir dengan aksen oranye menyala dan garis grid arsitektural.',
      longDescription: 'Halaman peluncuran produk sinematik untuk membangun antusiasme pra-rilis perangkat teknologi. Menghadirkan kartu visual bergaya 3D, pemisah grid struktural, lembar spesifikasi interaktif, dan jalur konversi yang jelas.',
      image: '/assets/images/project_kinetic_landing_1793854329159.jpg',
      tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion'],
      liveUrl: 'https://demo-quantum-frontier.example.com',
      githubUrl: 'https://github.com/fajar-jay/quantum-frontier',
      featured: true,
    },
    {
      id: 'proj-5',
      number: '05',
      title: 'AURA Collaborative Canvas',
      category: 'Aplikasi Web',
      description: 'Mesin otomatisasi workflow visual berbasis node interaktif dengan pemantau eksekusi status real-time.',
      longDescription: 'Aplikasi web interaktif yang memungkinkan tim menyusun alur kerja pemrosesan data, pelatihan model AI, dan node deployment API secara visual dengan konektor drag-and-drop dan umpan balik status instan.',
      image: '/assets/images/project_collaborative_app_1793854345964.jpg',
      tags: ['React', 'TypeScript', 'Canvas Node Graph', 'Express API'],
      liveUrl: 'https://demo-aura-canvas.example.com',
      githubUrl: 'https://github.com/fajar-jay/aura-collaborative',
      featured: false,
    },
    {
      id: 'proj-6',
      number: '06',
      title: 'CHROMALUMIN Spatial Lab',
      category: 'Website Kreatif',
      description: 'Website studio kreatif imersif yang memadukan pencahayaan vulkanik hangat, elemen krom cair, dan tipografi avant-garde.',
      longDescription: 'Eksplorasi showcase digital interaktif yang menggabungkan estetika kemewahan mode gelap, isyarat taktil audio-visual yang halus, kartu interaktif cair, dan tata letak editorial yang sepenuhnya responsif.',
      image: '/assets/images/project_creative_spatial_1793854328669.jpg',
      tags: ['Creative Web', 'Three.js / WebGL', 'Tailwind CSS', 'Audio FX'],
      liveUrl: 'https://demo-chromalumin.example.com',
      githubUrl: 'https://github.com/fajar-jay/chromalumin-studio',
      featured: false,
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
    description: 'Punya ide proyek menarik atau ingin berkolaborasi dengan web developer profesional? Mari berdiskusi dan wujudkan visi digital Anda menjadi kenyataan.',
    locationText: 'Kp. Cadasari Tengah, Indonesia',
    responseTime: 'Biasanya merespons dalam 24 jam',
  },
};

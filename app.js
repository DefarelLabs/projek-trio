/**
 * HUJAN COLLECTIVE (RDYNM Workgroup) — Main Application Logic
 * Roster: Rafly, Defarel, Yanda, Nabil, Nadip, Maman, Hujan
 */

(function() {
      // --- 1. INITIAL DATA: TEAM MEMBERS (All 7 names included + toggleable between 7 & 5) ---
      const defaultMembers = [
        {
          id: 'rafly',
          name: 'Rafly',
          code: 'RFL // 01',
          role: 'Lead Systems Architect & Full-Stack Engineer',
          division: 'Architecture & Backend',
          skills: ['TypeScript', 'Go', 'Next.js', 'System Design', 'PostgreSQL'],
          bio: 'Mengarahkan arsitektur sistem ujung-ke-ujung, perancangan skema basis data berkinerja tinggi, serta orkestrasi integrasi antar layanan mikro.',
          isCore5: true,
          active: true,
          accent: '#38BDF8',
          bgGrad: 'from-sky-500/20 to-blue-900/40',
          customPhoto: null
        },
        {
          id: 'defarel',
          name: 'Defarel',
          code: 'DFR // 02',
          role: 'Principal Frontend & Design Systems Engineer',
          division: 'Frontend & Design',
          skills: ['React', 'Tailwind CSS', 'WebGL', 'Micro-Interactions', 'Accessibility'],
          bio: 'Spesialis rekayasa antarmuka presisi tinggi, animasi transisi yang mulus, dan pembuatan pustaka komponen UI yang konsisten di berbagai perangkat.',
          isCore5: true,
          active: true,
          accent: '#34D399',
          bgGrad: 'from-emerald-500/20 to-teal-900/40',
          customPhoto: null
        },
        {
          id: 'yanda',
          name: 'Yanda',
          code: 'YND // 03',
          role: 'Backend & Distributed API Engineer',
          division: 'Architecture & Backend',
          skills: ['Rust', 'Node.js', 'GraphQL', 'Redis', 'Event-Driven'],
          bio: 'Berfokus pada keandalan API berlatensi rendah, keamanan autentikasi, pemrosesan antrean data asinkron, dan optimasi kueri skala besar.',
          isCore5: true,
          active: true,
          accent: '#A78BFA',
          bgGrad: 'from-violet-500/20 to-indigo-900/40',
          customPhoto: null
        },
        {
          id: 'nabil',
          name: 'Nabil',
          code: 'NBL // 04',
          role: 'Product Designer & UI/UX Research Lead',
          division: 'Frontend & Design',
          skills: ['Figma', 'Design Tokens', 'User Flows', 'Prototyping', 'Editorial UI'],
          bio: 'Menerjemahkan kebutuhan bisnis yang kompleks menjadi alur pengalaman pengguna yang jernih, tipografi yang terukur, dan sistem desain yang rapi.',
          isCore5: true,
          active: true,
          accent: '#FBBF24',
          bgGrad: 'from-amber-500/20 to-orange-900/40',
          customPhoto: null
        },
        {
          id: 'nadip',
          name: 'Nadip',
          code: 'NDP // 05',
          role: 'Mobile & Cloud-Native Engineer',
          division: 'Mobile, Cloud & Ops',
          skills: ['Flutter', 'Kotlin', 'Swift', 'Docker', 'Edge Functions'],
          bio: 'Mengembangkan aplikasi lintas platform (iOS & Android) dengan performa setara native serta sinkronisasi data offline-first yang tangguh.',
          isCore5: true,
          active: true,
          accent: '#F472B6',
          bgGrad: 'from-pink-500/20 to-rose-900/40',
          customPhoto: null
        },
        {
          id: 'maman',
          name: 'Maman',
          code: 'MMN // 06',
          role: 'DevOps, Cloud Infrastructure & Security Lead',
          division: 'Mobile, Cloud & Ops',
          skills: ['Kubernetes', 'Terraform', 'CI/CD Pipelines', 'Linux', 'Observability'],
          bio: 'Menjaga stabilitas pipeline rilis otomatis, pemantauan telemetri server real-time, serta pengamanan infrastruktur cloud produksi.',
          isCore5: false,
          active: true,
          accent: '#2DD4BF',
          bgGrad: 'from-teal-500/20 to-cyan-900/40',
          customPhoto: null
        },
        {
          id: 'hujan',
          name: 'Hujan',
          code: 'HJN // 07',
          role: 'Creative Technologist & Quality Assurance Lead',
          division: 'Frontend & Design',
          skills: ['Playwright', 'Automated Testing', 'Three.js', 'Shaders', 'Tech Docs'],
          bio: 'Memadukan eksplorasi visual interaktif dengan pengujian kualitas otomatis ujung-ke-ujung agar setiap rilis bebas dari regresi.',
          isCore5: false,
          active: true,
          accent: '#60A5FA',
          bgGrad: 'from-blue-500/20 to-sky-900/40',
          customPhoto: null
        }
      ];

      // --- 2. INITIAL DATA: PORTFOLIO PROJECTS ---
      const defaultProjects = [
        {
          id: 'proj-1',
          title: 'Petrichor Pulse — Real-Time Treasury & Analytics Engine',
          category: 'Web App & SaaS',
          year: '2026',
          featured: true,
          image: 'assets/project-pulse.jpg',
          shortDesc: 'Platform analitik arus kas dan telemetri finansial real-time dengan latensi sub-50ms untuk tim keuangan korporasi.',
          fullDesc: 'Dirancang untuk memproses ribuan transaksi per detik dengan visualisasi grafik WebGL yang tetap mulus di layar 120Hz. Dilengkapi sistem peringatan anomali otomatis dan ekspor laporan audit instan.',
          archSpec: 'Streaming WebSocket di atas Go + Redis Streams, penyimpanan analitik ClickHouse, dan antarmuka Next.js 15 dengan state terdistribusi.',
          tech: ['TypeScript', 'Next.js', 'Go', 'ClickHouse', 'Tailwind CSS'],
          contributors: ['Rafly', 'Defarel', 'Yanda'],
          link: 'https://pulse.hujancollective.id'
        },
        {
          id: 'proj-2',
          title: 'Pluvial Radar — Smart Urban Mobility & Weather Telemetry',
          category: 'Mobile & IoT',
          year: '2026',
          featured: true,
          image: 'assets/project-radar.jpg',
          shortDesc: 'Aplikasi mobile pemetaan cuaca mikro dan navigasi rute komuter bebas genangan berbasis sensor IoT perkotaan.',
          fullDesc: 'Menggabungkan data curah hujan presisi tinggi dengan kepadatan lalu lintas untuk memberikan rekomendasi rute tercepat bagi komuter di Jabodetabek.',
          archSpec: 'Aplikasi Flutter iOS/Android dengan mesin peta vektor kustom, terhubung ke broker MQTT Rust dan pipeline geospasial PostGIS.',
          tech: ['Flutter', 'Rust', 'PostGIS', 'MQTT', 'Mapbox GL'],
          contributors: ['Nadip', 'Nabil', 'Maman', 'Hujan'],
          link: 'https://radar.hujancollective.id'
        },
        {
          id: 'proj-3',
          title: 'Monolith CAD — Spatial Web & 3D Architectural Configurator',
          category: 'Design System & 3D',
          year: '2025',
          featured: true,
          image: 'assets/project-monolith.jpg',
          shortDesc: 'Editor tata letak arsitektur 3D berbasis browser yang memungkinkan kolaborasi multi-pengguna secara langsung.',
          fullDesc: 'Memungkinkan arsitek dan insinyur meninjau struktur bangunan 3D langsung di peramban web tanpa instalasi perangkat lunak berat, lengkap dengan perhitungan material otomatis.',
          archSpec: 'Dibangun di atas Three.js dan WebGPU dengan sinkronisasi state CRDT (Yjs) untuk kolaborasi real-time bebas konflik.',
          tech: ['Three.js', 'TypeScript', 'WebGPU', 'Yjs CRDT', 'React'],
          contributors: ['Defarel', 'Hujan', 'Nabil', 'Rafly'],
          link: 'https://monolith.hujancollective.id'
        },
        {
          id: 'proj-4',
          title: 'RintikUI — Accessible Dark-First Component Primitives',
          category: 'Design System & 3D',
          year: '2025',
          featured: false,
          image: 'assets/studio-hero.jpg',
          shortDesc: 'Pustaka 45+ komponen antarmuka WAI-ARIA yang ringan, mendukung navigasi keyboard penuh, dan desain bertema gelap.',
          fullDesc: 'Digunakan sebagai fondasi internal di seluruh proyek Hujan Collective dan dirilis sebagai paket open-source tanpa dependensi berlebih.',
          archSpec: 'Zero-runtime CSS variables, dukungan penuh TypeScript strict mode, dan pengujian aksesibilitas otomatis dengan Playwright.',
          tech: ['TypeScript', 'Tailwind CSS', 'Radix Primitives', 'Playwright'],
          contributors: ['Defarel', 'Nabil', 'Hujan'],
          link: 'https://ui.hujancollective.id'
        },
        {
          id: 'proj-5',
          title: 'AwanMesh — Zero-Downtime Deployment & Edge Gateway',
          category: 'Open Source & Infra',
          year: '2025',
          featured: false,
          image: 'assets/project-pulse.jpg',
          shortDesc: 'Orkestrator kontainer ringan dan reverse-proxy otomatis untuk tim engineering yang mengelola klaster multi-region.',
          fullDesc: 'Menyederhanakan proses blue-green deployment, rotasi sertifikat TLS otomatis, dan pembatasan laju trafik (rate-limiting) tingkat lanjut.',
          archSpec: 'Daemon berbasis Go dan eBPF dengan konsumsi memori di bawah 25MB serta integrasi metrik Prometheus bawaan.',
          tech: ['Go', 'Docker', 'Linux eBPF', 'Prometheus', 'Terraform'],
          contributors: ['Maman', 'Yanda', 'Rafly'],
          link: 'https://mesh.hujancollective.id'
        },
        {
          id: 'proj-6',
          title: 'KarsaLMS — Interactive Coding Sandbox & Assessment Platform',
          category: 'Web App & SaaS',
          year: '2024',
          featured: false,
          image: 'assets/project-monolith.jpg',
          shortDesc: 'Platform pembelajaran pemrograman interaktif dengan eksekusi kode terisolasi langsung di dalam browser.',
          fullDesc: 'Digunakan oleh komunitas belajar teknologi untuk mengadakan bootcamp, tantangan algoritma mingguan, dan code review terstruktur.',
          archSpec: 'WebAssembly sandboxed runtime dipadukan dengan backend Node.js dan PostgreSQL untuk penilaian testcase instan.',
          tech: ['WebAssembly', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
          contributors: ['Rafly', 'Yanda', 'Nadip', 'Nabil'],
          link: 'https://karsa.hujancollective.id'
        }
      ];

      // --- 3. INITIAL DATA: SERVICES ---
      const servicesData = [
        {
          code: 'SRV // 01',
          title: 'Full-Stack Web Application & SaaS',
          shortDesc: 'Pembangunan aplikasi web modern, dashboard enterprise, dan produk SaaS dari perancangan skema database hingga rilis produksi.',
          deliverables: ['Arsitektur Frontend & Backend Type-Safe', 'Integrasi Payment & Pihak Ketiga', 'Optimasi SEO & Core Web Vitals'],
          stack: 'Next.js · TypeScript · Go · PostgreSQL'
        },
        {
          code: 'SRV // 02',
          title: 'Mobile App Development (iOS & Android)',
          shortDesc: 'Pengembangan aplikasi mobile lintas platform maupun native yang responsif, hemat baterai, dan mendukung mode offline-first.',
          deliverables: ['Aplikasi iOS & Android Siap Rilis Store', 'Sinkronisasi Real-Time & Push Notifikasi', 'Integrasi Sensor & Geospasial'],
          stack: 'Flutter · Kotlin · Swift · REST/gRPC'
        },
        {
          code: 'SRV // 03',
          title: 'UI/UX Design System & Prototyping',
          shortDesc: 'Perancangan antarmuka produk yang berkarakter, sistem token desain yang terukur, serta prototipe interaktif berstandar industri.',
          deliverables: ['Figma Design System & Dokumentasi', 'Riset Alur Pengguna & Wireframe', 'Komponen UI Siap Pakai (React/Tailwind)'],
          stack: 'Figma · Design Tokens · WCAG AA'
        },
        {
          code: 'SRV // 04',
          title: 'Cloud Architecture, API & DevOps',
          shortDesc: 'Perancangan API terdistribusi berlatensi rendah, migrasi server cloud, serta otomatisasi pipeline CI/CD tanpa waktu henti.',
          deliverables: ['Arsitektur Microservices / Modular Monolith', 'Otomatisasi Docker & Kubernetes', 'Monitoring & Keamanan Infrastruktur'],
          stack: 'Go · Rust · Docker · Terraform · Redis'
        },
        {
          code: 'SRV // 05',
          title: 'Interactive 3D & Creative Frontend',
          shortDesc: 'Pembuatan website peluncuran produk, visualisasi data interaktif, dan pengalaman web 3D berbasis WebGL yang memukau tanpa mengorbankan kecepatan.',
          deliverables: ['Visualisasi 3D & Konfigurator Produk', 'Animasi Scroll & Micro-Interactions', 'Landing Page Kinerja Tinggi'],
          stack: 'Three.js · WebGL · GSAP · Tailwind'
        },
        {
          code: 'SRV // 06',
          title: 'Technical Audit & Code Refactoring',
          shortDesc: 'Evaluasi menyeluruh terhadap performa aplikasi yang sudah berjalan, perbaikan bottleneck database, dan modernisasi kode lama.',
          deliverables: ['Laporan Audit Keamanan & Performa', 'Refactoring Arsitektur & Pengujian Otomatis', 'Pendampingan Tim Engineering Internal'],
          stack: 'Playwright · Profiling · SQL Tuning'
        }
      ];

      // --- STATE MANAGEMENT ---
      let state = {
        brandName: 'HUJAN COLLECTIVE',
        brandCode: 'RDYNM',
        brandMonogram: 'HJN',
        viewMode: 'scroll', // 'scroll' or 'focus'
        activeSection: 'home',
        members: JSON.parse(JSON.stringify(defaultMembers)),
        teamFilterDivision: 'all',
        projFilterCat: 'all',
        projFilterYear: 'all',
        projSearchQuery: '',
        projects: JSON.parse(JSON.stringify(defaultProjects)),
        activeModalProject: null,
        editingMemberId: null,
        tickets: []
      };

      // --- HELPER: BESPOKE ARCHITECTURAL SVG AVATAR GENERATOR ---
      function getMemberAvatarMarkup(member) {
        if (member.customPhoto) {
          return `<img src="${member.customPhoto}" alt="${member.name}" class="w-full h-full object-cover" />`;
        }
        const initials = member.name.slice(0, 2).toUpperCase();
        return `
          <svg viewBox="0 0 120 120" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad-${member.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#181B22" />
                <stop offset="100%" stop-color="#090A0D" />
              </linearGradient>
            </defs>
            <rect width="120" height="120" fill="url(#grad-${member.id})" />
            <circle cx="95" cy="25" r="42" fill="${member.accent}" fill-opacity="0.16" />
            <circle cx="25" cy="95" r="36" fill="${member.accent}" fill-opacity="0.1" />
            <line x1="0" y1="30" x2="120" y2="30" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
            <line x1="0" y1="90" x2="120" y2="90" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
            <line x1="30" y1="0" x2="30" y2="120" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
            <line x1="90" y1="0" x2="90" y2="120" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
            <!-- Geometric Minimalist Portrait Silhouette -->
            <circle cx="60" cy="46" r="16" fill="none" stroke="${member.accent}" stroke-width="2" />
            <path d="M32 102 C32 82, 88 82, 88 102" fill="none" stroke="${member.accent}" stroke-width="2" stroke-linecap="round" />
            <text x="12" y="21" fill="rgba(255,255,255,0.45)" font-family="JetBrains Mono, monospace" font-size="9" font-weight="600">${initials}</text>
            <circle cx="104" cy="16" r="3" fill="${member.accent}" />
          </svg>
        `;
      }

      // --- TOAST HELPER ---
      let toastTimer = null;
      function showToast(msg) {
        const container = document.getElementById('toast-container');
        const text = document.getElementById('toast-message');
        text.textContent = msg;
        container.classList.remove('hidden');
        container.classList.add('flex');
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          container.classList.add('hidden');
          container.classList.remove('flex');
        }, 3200);
      }

      // --- CLIPBOARD HELPER ---
      function copyText(text, label) {
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
              showToast(`${label} disalin: ${text}`);
            }).catch(() => fallbackCopy(text, label));
          } else {
            fallbackCopy(text, label);
          }
        } catch (e) {
          fallbackCopy(text, label);
        }
      }
      function fallbackCopy(text, label) {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        showToast(`${label} disalin: ${text}`);
      }

      // --- RENDER: BRAND IDENTITY ---
      function renderBrandIdentity() {
        document.getElementById('brand-monogram').textContent = state.brandMonogram;
        document.getElementById('brand-name-nav').textContent = state.brandName;
        document.getElementById('brand-code-nav').textContent = state.brandCode;
        document.getElementById('hero-brand-title').textContent = state.brandName + '.';
        document.getElementById('terminal-wg-name').textContent = `"${state.brandName} (${state.brandCode})"`;
        document.querySelectorAll('.brand-name-inline').forEach(el => {
          el.textContent = state.brandName;
        });

        const activeMembers = state.members.filter(m => m.active);
        document.getElementById('hero-badge-roster').textContent = activeMembers.map(m => m.name).join(' · ');
        document.getElementById('metric-members-count').textContent = activeMembers.length + ' Orang';
      }

      // --- RENDER: HOME FEATURED PROJECTS & TEAM STRIP ---
      function renderHomeHighlights() {
        const featuredContainer = document.getElementById('home-featured-projects');
        const featured = state.projects.slice(0, 3);
        document.getElementById('hero-project-count').textContent = String(state.projects.length).padStart(2, '0');

        featuredContainer.innerHTML = featured.map((p, idx) => `
          <article class="group rounded-xl border border-zinc-200/90 dark:border-white/[0.08] bg-white dark:bg-carbon-900 overflow-hidden flex flex-col justify-between hover:border-sky-500/50 transition-all shadow-sm">
            <div>
              <div class="relative aspect-[4/3] overflow-hidden bg-zinc-900 border-b border-zinc-200/80 dark:border-white/[0.06]">
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute top-3 left-3 flex items-center gap-1.5">
                  <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-black/75 text-white backdrop-blur border border-white/15">0${idx + 1} // ${p.year}</span>
                  <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/90 text-zinc-950 font-semibold">${p.category}</span>
                </div>
              </div>
              <div class="p-5">
                <h3 class="font-display font-bold text-lg text-zinc-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors leading-snug">
                  ${p.title}
                </h3>
                <p class="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  ${p.shortDesc}
                </p>
              </div>
            </div>
            <div class="px-5 pb-5 pt-3 border-t border-zinc-100 dark:border-white/[0.05] flex items-center justify-between gap-2">
              <div class="flex flex-wrap gap-1">
                ${p.tech.slice(0, 3).map(t => `<span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">${t}</span>`).join('')}
              </div>
              <button type="button" data-open-proj="${p.id}" class="open-proj-btn font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline shrink-0">
                Preview →
              </button>
            </div>
          </article>
        `).join('');

        // Home Team Strip
        const stripContainer = document.getElementById('home-team-strip');
        const activeMembers = state.members.filter(m => m.active);
        stripContainer.innerHTML = activeMembers.map(m => `
          <button type="button" data-open-member="${m.id}" class="open-member-btn group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-carbon-950 hover:border-sky-500/50 transition text-left">
            <span class="w-2 h-2 rounded-full" style="background:${m.accent}"></span>
            <span class="font-display font-semibold text-xs text-zinc-900 dark:text-white">${m.name}</span>
            <span class="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">${m.role.split('&')[0].trim()}</span>
          </button>
        `).join('');
      }

      // --- RENDER: TEAM SECTION ---
      function renderTeam() {
        const grid = document.getElementById('team-grid');
        const activeMembers = state.members.filter(m => m.active);
        const filtered = activeMembers.filter(m => {
          if (state.teamFilterDivision === 'all') return true;
          return m.division === state.teamFilterDivision;
        });

        document.getElementById('team-showing-count').textContent = filtered.length;

        grid.innerHTML = filtered.map(m => `
          <article class="group rounded-xl border border-zinc-200/90 dark:border-white/[0.08] bg-white dark:bg-carbon-900 p-6 flex flex-col justify-between hover:border-sky-500/50 transition-all shadow-sm relative">
            <div>
              <!-- Top Row: Photo + Name + Role -->
              <div class="flex items-start gap-4 mb-4">
                <div class="relative w-16 h-16 rounded-xl overflow-hidden border border-zinc-300 dark:border-white/15 shrink-0 bg-carbon-950">
                  ${getMemberAvatarMarkup(m)}
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center justify-between gap-2">
                    <span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">${m.code}</span>
                    <button type="button" data-upload-photo="${m.id}" class="upload-photo-btn font-mono text-[10px] text-sky-600 dark:text-sky-400 hover:underline" title="Ganti foto profil ${m.name}">
                      Ganti Foto
                    </button>
                  </div>
                  <h3 class="font-display font-bold text-xl text-zinc-900 dark:text-white mt-1 truncate">${m.name}</h3>
                  <p class="font-mono text-xs text-sky-600 dark:text-sky-400 font-medium leading-snug">${m.role}</p>
                </div>
              </div>

              <!-- Short Description -->
              <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                ${m.bio}
              </p>
            </div>

            <!-- Skills & Edit Trigger -->
            <div class="pt-4 border-t border-zinc-100 dark:border-white/[0.06] space-y-3">
              <div>
                <div class="font-mono text-[10px] text-zinc-400 uppercase mb-1.5">SKILL / KEAHLIAN UTAMA</div>
                <div class="flex flex-wrap gap-1.5">
                  ${m.skills.map(skill => `
                    <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-carbon-950 border border-zinc-200/80 dark:border-white/[0.07] text-zinc-700 dark:text-zinc-300">${skill}</span>
                  `).join('')}
                </div>
              </div>
              <div class="flex items-center justify-between pt-2">
                <span class="font-mono text-[11px] text-zinc-400">${m.division}</span>
                <button type="button" data-open-member="${m.id}" class="open-member-btn font-mono text-xs text-zinc-700 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-400 underline">
                  Edit / Detail →
                </button>
              </div>
            </div>
          </article>
        `).join('');
      }

      // --- RENDER: PROJECTS / PORTFOLIO SECTION ---
      function renderProjects() {
        const grid = document.getElementById('projects-grid');
        const q = state.projSearchQuery.trim().toLowerCase();

        const filtered = state.projects.filter(p => {
          const matchCat = state.projFilterCat === 'all' || p.category === state.projFilterCat;
          const matchYear = state.projFilterYear === 'all' || p.year === state.projFilterYear;
          const matchQuery = !q ||
            p.title.toLowerCase().includes(q) ||
            p.shortDesc.toLowerCase().includes(q) ||
            p.tech.some(t => t.toLowerCase().includes(q)) ||
            p.contributors.some(c => c.toLowerCase().includes(q));
          return matchCat && matchYear && matchQuery;
        });

        document.getElementById('project-showing-count').textContent = filtered.length;
        const resetBtn = document.getElementById('btn-reset-proj-filter');
        if (state.projFilterCat !== 'all' || state.projFilterYear !== 'all' || q) {
          resetBtn.classList.remove('hidden');
        } else {
          resetBtn.classList.add('hidden');
        }

        if (filtered.length === 0) {
          grid.innerHTML = `
            <div class="col-span-full p-10 rounded-xl border border-zinc-200 dark:border-white/10 text-center space-y-3">
              <div class="font-mono text-sm text-zinc-500">Tidak ada proyek yang cocok dengan filter pencarian.</div>
              <button type="button" id="btn-empty-reset" class="px-4 py-2 rounded-lg bg-sky-500 text-zinc-950 font-mono text-xs font-semibold">Tampilkan Semua Proyek</button>
            </div>
          `;
          const emptyBtn = document.getElementById('btn-empty-reset');
          if (emptyBtn) {
            emptyBtn.addEventListener('click', resetProjectFilters);
          }
          return;
        }

        grid.innerHTML = filtered.map(p => `
          <article class="group rounded-xl border border-zinc-200/90 dark:border-white/[0.08] bg-white dark:bg-carbon-900 overflow-hidden flex flex-col justify-between hover:border-sky-500/50 transition-all shadow-sm">
            <div>
              <!-- Thumbnail + Year + Category -->
              <div class="relative aspect-[4/3] overflow-hidden bg-zinc-900 border-b border-zinc-200/80 dark:border-white/[0.06]">
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span class="font-mono text-[11px] px-2.5 py-0.5 rounded bg-black/75 text-white backdrop-blur border border-white/15 font-semibold">${p.year}</span>
                  <span class="font-mono text-[10px] px-2.5 py-0.5 rounded bg-white/90 dark:bg-carbon-950/90 text-zinc-900 dark:text-zinc-200 border border-white/10">${p.category}</span>
                </div>
              </div>

              <!-- Content -->
              <div class="p-5 space-y-3">
                <h3 class="font-display font-bold text-lg text-zinc-900 dark:text-white leading-snug group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  ${p.title}
                </h3>
                <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  ${p.shortDesc}
                </p>

                <!-- Tech Stack -->
                <div class="pt-1">
                  <div class="font-mono text-[10px] text-zinc-400 uppercase mb-1.5">TEKNOLOGI</div>
                  <div class="flex flex-wrap gap-1.5">
                    ${p.tech.map(t => `<span class="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-carbon-950 border border-zinc-200/80 dark:border-white/[0.07] text-zinc-700 dark:text-zinc-300">${t}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Link / Preview -->
            <div class="px-5 py-3.5 bg-zinc-50/80 dark:bg-carbon-950/60 border-t border-zinc-200/70 dark:border-white/[0.06] flex items-center justify-between">
              <span class="font-mono text-[11px] text-zinc-500 truncate max-w-[170px]">${p.link.replace('https://', '')}</span>
              <button type="button" data-open-proj="${p.id}" class="open-proj-btn inline-flex items-center gap-1 font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline">
                <span>Live Preview &amp; Detail</span>
                <span>↗</span>
              </button>
            </div>
          </article>
        `).join('');
      }

      function resetProjectFilters() {
        state.projFilterCat = 'all';
        state.projFilterYear = 'all';
        state.projSearchQuery = '';
        document.getElementById('project-year-select').value = 'all';
        document.getElementById('project-search-input').value = '';
        document.querySelectorAll('.proj-cat-btn').forEach(btn => {
          if (btn.getAttribute('data-proj-cat') === 'all') {
            btn.className = 'proj-cat-btn px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-medium transition';
          } else {
            btn.className = 'proj-cat-btn px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition';
          }
        });
        renderProjects();
      }

      // --- RENDER: SERVICES SECTION ---
      function renderServices() {
        const grid = document.getElementById('services-grid');
        grid.innerHTML = servicesData.map(s => `
          <div class="p-6 rounded-xl border border-zinc-200/90 dark:border-white/[0.08] bg-white dark:bg-carbon-900 flex flex-col justify-between hover:border-sky-500/40 transition-all">
            <div>
              <div class="flex items-center justify-between font-mono text-xs mb-3">
                <span class="text-sky-600 dark:text-sky-400 font-semibold">${s.code}</span>
                <span class="text-[11px] text-zinc-400">PRODUCTION-GRADE</span>
              </div>
              <h3 class="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2">${s.title}</h3>
              <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                ${s.shortDesc}
              </p>
              <ul class="space-y-1.5 mb-5 border-t border-zinc-100 dark:border-white/[0.05] pt-3">
                ${s.deliverables.map(d => `
                  <li class="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                    <span class="text-emerald-500 font-mono">✓</span>
                    <span>${d}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
            <div class="pt-3 border-t border-zinc-100 dark:border-white/[0.06] flex items-center justify-between gap-2">
              <span class="font-mono text-[11px] text-zinc-500">${s.stack}</span>
              <button type="button" data-select-service="${s.title}" class="service-quick-select font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline shrink-0">
                Pilih Layanan →
              </button>
            </div>
          </div>
        `).join('');
      }

      // --- NAVIGATION & VIEW MODE HANDLING ---
      function navigateToSection(sectionId) {
        state.activeSection = sectionId;

        // Update nav active styling
        document.querySelectorAll('.nav-link[data-nav]').forEach(link => {
          const target = link.getAttribute('data-nav');
          if (link.closest('nav')) {
            if (target === sectionId) {
              link.className = 'nav-link px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm';
            } else {
              link.className = 'nav-link px-3 py-1.5 rounded-md text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all';
            }
          }
        });

        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');

        if (state.viewMode === 'focus') {
          document.querySelectorAll('.app-section').forEach(sec => {
            if (sec.getAttribute('data-section') === sectionId) {
              sec.classList.remove('hidden');
            } else {
              sec.classList.add('hidden');
            }
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.querySelectorAll('.app-section').forEach(sec => sec.classList.remove('hidden'));
          const targetEl = document.getElementById(sectionId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }

      // --- MODAL HANDLERS ---
      function openProjectModal(projId) {
        const p = state.projects.find(item => item.id === projId);
        if (!p) return;
        state.activeModalProject = p;
        document.getElementById('modal-proj-year').textContent = p.year;
        document.getElementById('modal-proj-category').textContent = p.category;
        document.getElementById('modal-proj-title').textContent = p.title;
        document.getElementById('modal-proj-desc').textContent = p.fullDesc || p.shortDesc;
        document.getElementById('modal-proj-arch').textContent = p.archSpec || 'Arsitektur modular dengan pengujian otomatis penuh dan pemantauan telemetri produksi.';
        document.getElementById('modal-proj-link').textContent = p.link;
        document.getElementById('modal-proj-visual').innerHTML = `
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" />
        `;
        document.getElementById('modal-proj-tech').innerHTML = p.tech.map(t => `
          <span class="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/80 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">${t}</span>
        `).join('');
        document.getElementById('modal-proj-contributors').innerHTML = (p.contributors || ['Tim Hujan']).map(c => `
          <span class="font-mono text-xs px-2 py-0.5 rounded bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/20">${c}</span>
        `).join('');

        const modal = document.getElementById('project-modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }

      function openMemberModal(memberId) {
        const m = state.members.find(item => item.id === memberId);
        if (!m) return;
        state.editingMemberId = m.id;
        document.getElementById('edit-member-id').value = m.id;
        document.getElementById('edit-member-name').value = m.name;
        document.getElementById('edit-member-role').value = m.role;
        document.getElementById('edit-member-division').value = m.division;
        document.getElementById('edit-member-skills').value = m.skills.join(', ');
        document.getElementById('edit-member-bio').value = m.bio;
        document.getElementById('edit-member-active').checked = m.active;
        document.getElementById('edit-member-avatar-preview').innerHTML = getMemberAvatarMarkup(m);

        const modal = document.getElementById('member-modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }

      // --- COMMAND PALETTE ---
      function renderCommandList(filterText = '') {
        const q = filterText.trim().toLowerCase();
        const items = [
          { label: '01 // Ke Bagian HOME', action: () => navigateToSection('home') },
          { label: '02 // Ke Bagian ABOUT (Visi, Misi, Sejarah)', action: () => navigateToSection('about') },
          { label: '03 // Ke Bagian TEAM (Daftar Anggota)', action: () => navigateToSection('team') },
          { label: '04 // Ke Bagian PROJECTS / PORTFOLIO', action: () => navigateToSection('projects') },
          { label: '05 // Ke Bagian SERVICES (Layanan)', action: () => navigateToSection('services') },
          { label: '06 // Ke Bagian CONTACT (Hubungi Kami)', action: () => navigateToSection('contact') },
          { label: 'Roster // Tampilkan Semua 7 Anggota (Rafly..Hujan)', action: () => applyRosterPreset('all') },
          { label: 'Roster // Tampilkan Formasi 5 Anggota Core', action: () => applyRosterPreset('core5') },
          { label: 'Tema // Toggle Dark / Light Mode', action: () => document.getElementById('btn-theme-toggle').click() },
          ...state.members.map(m => ({
            label: `Anggota // ${m.name} — ${m.role}`,
            action: () => openMemberModal(m.id)
          })),
          ...state.projects.map(p => ({
            label: `Proyek // ${p.title} (${p.year})`,
            action: () => openProjectModal(p.id)
          }))
        ].filter(item => !q || item.label.toLowerCase().includes(q));

        const listEl = document.getElementById('cmd-list');
        listEl.innerHTML = items.map((item, idx) => `
          <button type="button" data-cmd-idx="${idx}" class="cmd-item-btn w-full text-left px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-between">
            <span>${item.label}</span>
            <span class="text-zinc-400">↵</span>
          </button>
        `).join('');

        listEl.querySelectorAll('.cmd-item-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = Number(btn.getAttribute('data-cmd-idx'));
            document.getElementById('cmd-modal').classList.add('hidden');
            document.getElementById('cmd-modal').classList.remove('flex');
            items[idx].action();
          });
        });
      }

      // --- ROSTER PRESET (7 ALL vs 5 CORE) ---
      function applyRosterPreset(mode) {
        state.members.forEach(m => {
          if (mode === 'core5') {
            m.active = m.isCore5;
          } else {
            m.active = true;
          }
        });
        document.querySelectorAll('.roster-preset-btn').forEach(btn => {
          if (btn.getAttribute('data-roster-preset') === mode) {
            btn.className = 'roster-preset-btn px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm transition';
          } else {
            btn.className = 'roster-preset-btn px-3 py-1.5 rounded-md text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition';
          }
        });
        renderBrandIdentity();
        renderHomeHighlights();
        renderTeam();
        showToast(mode === 'core5' ? 'Formasi 5 Anggota Core diaktifkan' : 'Semua 7 Nama Anggota ditampilkan');
      }

      // --- INITIALIZE EVENT LISTENERS ---
      function initEvents() {
        // Navigation links
        document.querySelectorAll('.nav-link[data-nav]').forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-nav');
            navigateToSection(target);
          });
        });

        // Mobile menu toggle
        document.getElementById('btn-mobile-menu').addEventListener('click', () => {
          document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // View mode toggle (Scroll vs Focus)
        document.getElementById('btn-view-mode').addEventListener('click', () => {
          state.viewMode = state.viewMode === 'scroll' ? 'focus' : 'scroll';
          document.getElementById('view-mode-label').textContent = state.viewMode === 'scroll' ? 'Mode: Scroll' : 'Mode: Fokus Tab';
          navigateToSection(state.activeSection);
          showToast(state.viewMode === 'scroll' ? 'Mode Halaman Penuh (Scroll) aktif' : 'Mode Fokus Per Bagian aktif');
        });

        // Theme toggle
        document.getElementById('btn-theme-toggle').addEventListener('click', () => {
          document.documentElement.classList.toggle('dark');
          const isDark = document.documentElement.classList.contains('dark');
          showToast(isDark ? 'Tema Carbon Dark diaktifkan' : 'Tema Warm Paper Light diaktifkan');
        });

        // Cycle roster mode from hero terminal
        document.getElementById('btn-cycle-roster-mode').addEventListener('click', () => {
          const activeCount = state.members.filter(m => m.active).length;
          applyRosterPreset(activeCount > 5 ? 'core5' : 'all');
        });

        // Roster preset buttons in Team section
        document.querySelectorAll('.roster-preset-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            applyRosterPreset(btn.getAttribute('data-roster-preset'));
          });
        });

        // Team division filter buttons
        document.querySelectorAll('.team-filter-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            state.teamFilterDivision = btn.getAttribute('data-team-filter');
            document.querySelectorAll('.team-filter-btn').forEach(b => {
              if (b === btn) {
                b.className = 'team-filter-btn px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-medium transition';
              } else {
                b.className = 'team-filter-btn px-3 py-1.5 rounded-lg text-xs font-mono bg-white/80 dark:bg-carbon-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-white/10 hover:border-sky-500/40 transition';
              }
            });
            renderTeam();
          });
        });

        // Project category filter buttons
        document.querySelectorAll('.proj-cat-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            state.projFilterCat = btn.getAttribute('data-proj-cat');
            document.querySelectorAll('.proj-cat-btn').forEach(b => {
              if (b === btn) {
                b.className = 'proj-cat-btn px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-medium transition';
              } else {
                b.className = 'proj-cat-btn px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition';
              }
            });
            renderProjects();
          });
        });

        // Project year & search filter
        document.getElementById('project-year-select').addEventListener('change', (e) => {
          state.projFilterYear = e.target.value;
          renderProjects();
        });
        document.getElementById('project-search-input').addEventListener('input', (e) => {
          state.projSearchQuery = e.target.value;
          renderProjects();
        });
        document.getElementById('btn-reset-proj-filter').addEventListener('click', resetProjectFilters);

        // Delegated clicks for dynamically rendered cards (Projects, Members, Services)
        document.body.addEventListener('click', (e) => {
          const projBtn = e.target.closest('.open-proj-btn');
          if (projBtn) {
            openProjectModal(projBtn.getAttribute('data-open-proj'));
            return;
          }
          const memberBtn = e.target.closest('.open-member-btn');
          if (memberBtn) {
            openMemberModal(memberBtn.getAttribute('data-open-member'));
            return;
          }
          const uploadBtn = e.target.closest('.upload-photo-btn');
          if (uploadBtn) {
            state.editingMemberId = uploadBtn.getAttribute('data-upload-photo');
            document.getElementById('member-photo-input').click();
            return;
          }
          const srvBtn = e.target.closest('.service-quick-select');
          if (srvBtn) {
            const srvTitle = srvBtn.getAttribute('data-select-service');
            const selectEl = document.getElementById('contact-service');
            for (let i = 0; i < selectEl.options.length; i++) {
              if (selectEl.options[i].value.includes(srvTitle.split(' ')[0])) {
                selectEl.selectedIndex = i;
                break;
              }
            }
            navigateToSection('contact');
            document.getElementById('contact-name').focus();
            showToast(`Layanan "${srvTitle}" dipilih pada Form Kontak`);
            return;
          }
          const socialBtn = e.target.closest('.social-copy-btn');
          if (socialBtn) {
            const url = 'https://' + socialBtn.getAttribute('data-social');
            copyText(url, 'Tautan sosial media');
          }
        });

        // Photo file input handler (FileReader -> DataURL)
        document.getElementById('member-photo-input').addEventListener('change', (e) => {
          const file = e.target.files && e.target.files[0];
          if (!file || !state.editingMemberId) return;
          const reader = new FileReader();
          reader.onload = function(evt) {
            const m = state.members.find(item => item.id === state.editingMemberId);
            if (m) {
              m.customPhoto = evt.target.result;
              renderTeam();
              const previewBox = document.getElementById('edit-member-avatar-preview');
              if (previewBox) previewBox.innerHTML = getMemberAvatarMarkup(m);
              showToast(`Foto profil ${m.name} berhasil diperbarui!`);
            }
          };
          reader.readAsDataURL(file);
        });

        document.getElementById('btn-trigger-photo-upload').addEventListener('click', () => {
          document.getElementById('member-photo-input').click();
        });

        // Member Edit Form Submit
        document.getElementById('member-edit-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const id = document.getElementById('edit-member-id').value;
          let m = state.members.find(item => item.id === id);
          if (!m) {
            m = {
              id: 'member-' + Date.now(),
              code: 'MBR // 0' + (state.members.length + 1),
              isCore5: false,
              accent: '#38BDF8',
              customPhoto: null
            };
            state.members.push(m);
          }
          m.name = document.getElementById('edit-member-name').value.trim();
          m.role = document.getElementById('edit-member-role').value.trim();
          m.division = document.getElementById('edit-member-division').value;
          m.skills = document.getElementById('edit-member-skills').value.split(',').map(s => s.trim()).filter(Boolean);
          m.bio = document.getElementById('edit-member-bio').value.trim();
          m.active = document.getElementById('edit-member-active').checked;

          document.getElementById('member-modal').classList.add('hidden');
          document.getElementById('member-modal').classList.remove('flex');
          renderBrandIdentity();
          renderHomeHighlights();
          renderTeam();
          showToast(`Data anggota ${m.name} berhasil disimpan!`);
        });

        // Add new member button
        document.getElementById('btn-add-member').addEventListener('click', () => {
          state.editingMemberId = 'new-' + Date.now();
          document.getElementById('edit-member-id').value = state.editingMemberId;
          document.getElementById('edit-member-name').value = '';
          document.getElementById('edit-member-role').value = 'Software Engineer';
          document.getElementById('edit-member-skills').value = 'TypeScript, React, Node.js';
          document.getElementById('edit-member-bio').value = 'Anggota spesialis rekayasa perangkat lunak dan kolaborasi produk digital.';
          document.getElementById('edit-member-active').checked = true;
          document.getElementById('edit-member-avatar-preview').innerHTML = '<span class="font-mono text-xs text-zinc-400">NEW</span>';
          const modal = document.getElementById('member-modal');
          modal.classList.remove('hidden');
          modal.classList.add('flex');
        });

        // Close modals
        document.getElementById('btn-close-project-modal').addEventListener('click', () => {
          document.getElementById('project-modal').classList.add('hidden');
          document.getElementById('project-modal').classList.remove('flex');
        });
        document.getElementById('btn-close-member-modal').addEventListener('click', () => {
          document.getElementById('member-modal').classList.add('hidden');
          document.getElementById('member-modal').classList.remove('flex');
        });
        document.getElementById('btn-copy-proj-link').addEventListener('click', () => {
          if (state.activeModalProject) {
            copyText(state.activeModalProject.link, 'Link preview proyek');
          }
        });
        document.getElementById('btn-inquire-similar-proj').addEventListener('click', () => {
          document.getElementById('project-modal').classList.add('hidden');
          document.getElementById('project-modal').classList.remove('flex');
          if (state.activeModalProject) {
            document.getElementById('contact-message').value = `Halo Tim ${state.brandName}, saya tertarik mendiskusikan pembuatan sistem serupa dengan proyek "${state.activeModalProject.title}".`;
          }
          navigateToSection('contact');
          document.getElementById('contact-name').focus();
        });

        // Add project modal
        document.getElementById('btn-add-project').addEventListener('click', () => {
          const modal = document.getElementById('add-project-modal');
          modal.classList.remove('hidden');
          modal.classList.add('flex');
        });
        document.getElementById('btn-close-add-project').addEventListener('click', () => {
          document.getElementById('add-project-modal').classList.add('hidden');
          document.getElementById('add-project-modal').classList.remove('flex');
        });
        document.getElementById('add-project-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const newProj = {
            id: 'proj-' + Date.now(),
            title: document.getElementById('new-proj-title').value.trim(),
            category: document.getElementById('new-proj-cat').value,
            year: document.getElementById('new-proj-year').value,
            featured: true,
            image: 'assets/project-pulse.jpg',
            shortDesc: document.getElementById('new-proj-desc').value.trim(),
            fullDesc: document.getElementById('new-proj-desc').value.trim(),
            archSpec: 'Dirancang dan dikembangkan oleh tim Hujan Collective (RDYNM).',
            tech: document.getElementById('new-proj-tech').value.split(',').map(s => s.trim()).filter(Boolean),
            contributors: ['Rafly', 'Defarel', 'Yanda', 'Nabil', 'Nadip'],
            link: document.getElementById('new-proj-link').value.trim() || 'https://preview.hujancollective.id'
          };
          state.projects.unshift(newProj);
          document.getElementById('add-project-modal').classList.add('hidden');
          document.getElementById('add-project-modal').classList.remove('flex');
          document.getElementById('add-project-form').reset();
          renderHomeHighlights();
          renderProjects();
          showToast(`Proyek "${newProj.title}" berhasil ditambahkan!`);
        });

        // Customizer modal
        document.getElementById('btn-open-customizer').addEventListener('click', () => {
          const modal = document.getElementById('customizer-modal');
          modal.classList.remove('hidden');
          modal.classList.add('flex');
        });
        document.getElementById('btn-close-customizer').addEventListener('click', () => {
          document.getElementById('customizer-modal').classList.add('hidden');
          document.getElementById('customizer-modal').classList.remove('flex');
        });
        document.querySelectorAll('.brand-preset-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const [name, code, mono] = btn.getAttribute('data-brand-preset').split('|');
            state.brandName = name;
            state.brandCode = code;
            state.brandMonogram = mono;
            document.getElementById('custom-brand-input').value = name;
            if (name.includes('MAMAN HUJAN')) {
              applyRosterPreset('core5');
            } else {
              applyRosterPreset('all');
            }
            renderBrandIdentity();
            document.getElementById('customizer-modal').classList.add('hidden');
            document.getElementById('customizer-modal').classList.remove('flex');
            showToast(`Identitas workgroup diubah ke "${name}"`);
          });
        });
        document.getElementById('btn-apply-custom-brand').addEventListener('click', () => {
          const val = document.getElementById('custom-brand-input').value.trim();
          if (val) {
            state.brandName = val.toUpperCase();
            state.brandMonogram = val.slice(0, 3).toUpperCase();
            renderBrandIdentity();
            document.getElementById('customizer-modal').classList.add('hidden');
            document.getElementById('customizer-modal').classList.remove('flex');
            showToast(`Nama workgroup diperbarui menjadi "${state.brandName}"`);
          }
        });

        // Command Palette (⌘K)
        document.getElementById('btn-open-cmd').addEventListener('click', () => {
          const modal = document.getElementById('cmd-modal');
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          renderCommandList('');
          document.getElementById('cmd-input').value = '';
          document.getElementById('cmd-input').focus();
        });
        document.getElementById('btn-close-cmd').addEventListener('click', () => {
          document.getElementById('cmd-modal').classList.add('hidden');
          document.getElementById('cmd-modal').classList.remove('flex');
        });
        document.getElementById('cmd-input').addEventListener('input', (e) => {
          renderCommandList(e.target.value);
        });
        window.addEventListener('keydown', (e) => {
          if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            document.getElementById('btn-open-cmd').click();
          } else if (e.key === 'Escape') {
            ['project-modal', 'member-modal', 'add-project-modal', 'customizer-modal', 'cmd-modal'].forEach(id => {
              const el = document.getElementById(id);
              if (el) {
                el.classList.add('hidden');
                el.classList.remove('flex');
              }
            });
          }
        });

        // Contact form & WhatsApp actions
        document.getElementById('btn-copy-email').addEventListener('click', () => {
          copyText('hello@hujancollective.id', 'Email');
        });
        document.getElementById('btn-copy-email-hero').addEventListener('click', () => {
          copyText('hello@hujancollective.id', 'Email');
        });
        document.getElementById('btn-copy-wa').addEventListener('click', () => {
          copyText('+6281288402026', 'Nomor WhatsApp');
        });

        function triggerWhatsAppChat(customText) {
          const text = customText || `Halo Tim ${state.brandName} (RDYNM), saya ingin berdiskusi mengenai proyek / kolaborasi teknologi.`;
          copyText(text, 'Pesan WhatsApp telah disiapkan &');
        }

        document.getElementById('btn-home-wa').addEventListener('click', () => triggerWhatsAppChat());
        document.getElementById('btn-open-wa-card').addEventListener('click', () => triggerWhatsAppChat());

        document.getElementById('btn-send-wa-direct').addEventListener('click', () => {
          const name = document.getElementById('contact-name').value.trim() || 'Calon Mitra';
          const srv = document.getElementById('contact-service').value;
          const pic = document.getElementById('contact-member-target').value;
          const msg = document.getElementById('contact-message').value.trim() || 'Ingin mendiskusikan kebutuhan pengembangan produk digital.';
          const formatted = `Halo ${state.brandName} (${pic}), saya ${name}. Saya tertarik pada layanan [${srv}]. Detail: ${msg}`;
          triggerWhatsAppChat(formatted);
        });

        document.getElementById('contact-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const name = document.getElementById('contact-name').value.trim();
          const email = document.getElementById('contact-email').value.trim();
          const service = document.getElementById('contact-service').value;
          const target = document.getElementById('contact-member-target').value;
          const message = document.getElementById('contact-message').value.trim();

          if (!name || !email || !message) {
            showToast('Mohon lengkapi Nama, Email, dan Deskripsi Proyek.');
            return;
          }

          const ticketId = 'TKT-' + Math.floor(1000 + Math.random() * 9000);
          state.tickets.unshift({ id: ticketId, name, email, service, target, message, time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) });

          const container = document.getElementById('submitted-tickets-container');
          const list = document.getElementById('submitted-tickets-list');
          container.classList.remove('hidden');
          list.innerHTML = state.tickets.map(t => `
            <div class="p-3 rounded-lg bg-zinc-50 dark:bg-carbon-950 border border-emerald-500/30 text-xs space-y-1">
              <div class="flex items-center justify-between font-mono text-[11px]">
                <span class="text-emerald-600 dark:text-emerald-400 font-bold">${t.id} // ${t.service}</span>
                <span class="text-zinc-400">${t.time} WIB</span>
              </div>
              <div class="font-medium text-zinc-900 dark:text-white">${t.name} (${t.email}) → ${t.target}</div>
              <p class="text-zinc-600 dark:text-zinc-400">${t.message}</p>
            </div>
          `).join('');

          document.getElementById('contact-form').reset();
          showToast(`Tiket diskusi ${ticketId} berhasil dikirim ke tim!`);
        });

        // Live Jakarta Clock
        function updateClock() {
          const now = new Date();
          const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          const el = document.getElementById('live-clock');
          if (el) el.textContent = `JKT UTC+7 // ${timeStr} WIB`;
        }
        updateClock();
        setInterval(updateClock, 1000);
      }

      // --- BOOTSTRAP ---
      renderBrandIdentity();
      renderHomeHighlights();
      renderTeam();
      renderProjects();
      renderServices();
      initEvents();
    })();

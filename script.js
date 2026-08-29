const skills=['Web Development','SEO & SEM','Google Ads','Meta Ads','WordPress','Laravel','Web Analytics','UI & Visual Design','E-commerce'];
const projects=[
  {title:'DesDig — Portal Desa',type:'Full-stack web platform',image:'img/ChatGPT Image 13 Jul 2026, 11.25.13.png',tags:['Laravel','Tailwind','CMS'],featured:true},
  {title:'Resto Digital Mantap',type:'Restaurant management system',image:'img/ChatGPT Image 14 Jul 2026, 12.32.46.png',tags:['QR Order','Dashboard','Analytics']},
  {title:'QR E-Ticketing',type:'Event ticketing platform',image:'img/NEW1 Desain Promosi (11).png',tags:['Web App','QR System','Admin Panel']},
  {title:'eKoperasi',type:'Integrated cooperative platform',image:'img/NEW1 Desain Promosi (9).png',tags:['Web Platform','Responsive','Management']},
  {title:'Premium Voucher',type:'Digital voucher storefront',image:'img/7.png',tags:['Laravel','Tailwind','MySQL']},
  {title:'Topupin',type:'Game top-up & PPOB portal',image:'img/00d2cf2b-a1c0-4ef9-9447-4e1e040c221f.jpg',tags:['Payment Gateway','Laravel','Automation'],url:'https://topup.hackaton.web.id'}
];
const jobs=[
  {year:'2025 — Kini',role:'Project Manager',company:'PT Digiboxy Group Indonesia',note:'Product development, SEO & production management'},
  {year:'2023 — 2025',role:'Digital Marketing Specialist',company:'PT Ambassador Technology',note:'Website, content, Google Ads & e-commerce growth'},
  {year:'2024 — 2025',role:'WordPress & SEO Specialist',company:'PT Alucio Net',note:'Company profile, SEO & paid campaign optimization'},
  {year:'2021 — 2023',role:'Programmer',company:'RSUD Dr. R. Sosodoro Djatikoesoemo',note:'SIMRS, database audit & Android application'},
  {year:'2020',role:'Front-End Developer Intern',company:'BKPSDM Kota Batu',note:'Flutter employee attendance interface'}
];
document.querySelector('#skills').innerHTML=skills.map(x=>`<div class="skill-chip"><span class="skill-dot"></span><span class="text-sm font-semibold">${x}</span></div>`).join('');
document.querySelector('#project-grid').innerHTML=projects.map((p,i)=>`<article class="project-card reveal ${p.featured?'featured':''}"><a href="${p.url||'#contact'}" ${p.url?'target="_blank" rel="noopener"':''} class="group block"><div class="${p.featured?'aspect-[16/8]':'aspect-square'} overflow-hidden"><img src="${p.image}" alt="Tampilan proyek ${p.title}" loading="lazy" class="h-full w-full object-cover"></div><div class="project-overlay absolute inset-0 flex items-end p-5 md:p-7"><div class="w-full"><p class="mb-2 text-xs uppercase tracking-[.16em] text-acid">${String(i+1).padStart(2,'0')} · ${p.type}</p><div class="flex items-end justify-between gap-3"><div><h3 class="font-display text-2xl font-bold md:text-3xl">${p.title}</h3><div class="mt-3 flex flex-wrap gap-2">${p.tags.map(t=>`<span class="rounded-full border border-white/20 px-3 py-1 text-[10px] text-white/65">${t}</span>`).join('')}</div></div><span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-xl text-ink transition-transform group-hover:-rotate-45">↗</span></div></div></div></a></article>`).join('');
document.querySelector('#timeline').innerHTML=jobs.map(j=>`<article class="timeline-row reveal md:grid-cols-[.28fr_1fr]"><p class="text-xs uppercase tracking-[.15em] text-white/35">${j.year}</p><div><h3 class="role font-display text-xl font-bold transition-colors md:text-2xl">${j.role}</h3><p class="mt-1 text-sm text-white/60">${j.company}</p><p class="mt-3 text-sm text-white/35">${j.note}</p></div></article>`).join('');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%4,3)*70}ms`;observer.observe(el)});
const nav=document.querySelector('#nav');addEventListener('scroll',()=>nav.classList.toggle('nav-scrolled',scrollY>30),{passive:true});
document.querySelector('#year').textContent=new Date().getFullYear();

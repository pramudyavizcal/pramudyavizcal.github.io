const skills=['Mobile Apps Development','Web Development','SEO & SEM','Google Ads','Meta Ads','WordPress','Laravel','Web Analytics','UI & Visual Design','E-commerce'];
const projects=[
  {title:'BankGuru - Assistant AI Guru',type:'Full-stack web platform',image:'img/Aplikasi Bank Soal untuk Guru.png',tags:['Laravel','Tailwind','CMS'],featured:true},
  {title:'DesDig — Portal Desa',type:'Full-stack web platform',image:'img/ChatGPT Image 13 Jul 2026, 11.25.13.png',tags:['Laravel','Tailwind','CMS']},
  {title:'Website UMKM',type:'Full-stack web platform',image:'img/ChatGPT Image 21 Sep 2026, 09.41.18.png',tags:['Laravel','Tailwind','CMS']},
  {title:'Website Company Profile',type:'Full-stack web platform',image:'img/ChatGPT Image 21 Sep 2026, 09.42.42.png',tags:['Laravel','Tailwind','CMS']},
  {title:'Website Bisnis Produk',type:'Full-stack web platform',image:'img/ChatGPT Image 21 Sep 2026, 09.41.23.png',tags:['Laravel','Tailwind','CMS']},
  {title:'Website Instansi',type:'Full-stack web platform',image:'img/ChatGPT Image 21 Sep 2026, 09.46.48.png',tags:['Laravel','Tailwind','CMS']},
  {title:'Website Katalog',type:'Full-stack web platform',image:'img/ChatGPT Image 21 Sep 2026, 09.52.18.png',tags:['Laravel','Tailwind','CMS']},
  {title:'Portal Informasi Website Sekolah',type:'Full-stack web platform',image:'img/Source Code Portal Sekolah Modern.png',tags:['Laravel','Tailwind','CMS']},
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

const marketingWorks=[
  {title:'PT Ambassador Technology',category:'seo',label:'SEO & Analytics',description:'Dokumentasi visibilitas amb-tech.com, posisi kata kunci, serta analisis pencarian melalui Semrush dan Google.',folder:'PT Ambassador Technology',files:['Semrush Amb-tech.com.png','Ranking semrush amb-tech.com.png','Ranking position semrush.png','Sentrafotokopi Semrush.png','Analisa Google amb-tech.com.png','Testing Penelusuran.png']},
  {title:'PT Alucio Net',category:'seo',label:'SEO & Analytics',description:'Pemantauan performa domain alucionet dan posisi kata kunci pada dashboard Semrush.',folder:'PT Alucio Net',files:['alucionet Semrush.png','Ranking semrush alucionet.png']},
  {title:'CV Mauah Supermarket',category:'seo',label:'SEO & Analytics',description:'Dokumentasi analisis Google, pemantauan Semrush, dan tampilan website pada hasil pencarian.',folder:'CV Mauah Supermarket',files:['Semrush.png','Halaman1Google.png','Analisa Google.png']},
  {title:'Google Ads · Ambassador',category:'ads',label:'Paid Advertising',description:'Dokumentasi iklan dan kata kunci penelusuran untuk kampanye PT Ambassador Technology.',folder:'PT Ambassador Technology',files:['Iklan(2023.10.11-2025.03.26).png','Iklan(2020.04.11-2025.05.02).png','Kata_kunci_penelusuran(2023.10.11-2025.03.26).png','Kata_kunci_penelusuran(2020.04.11-2025.05.02).png']},
  {title:'Meta Ads · Produk Digital',category:'ads',label:'Paid Advertising',description:'Dokumentasi kampanye produk digital di Meta Ads, termasuk jangkauan, impresi, dan klik tautan.',folder:'Freelance',files:['Meta Ads penjualan produk digital.png','Meta Ads penjualan produk digital2.png']},
  {title:'Tokopedia & Shopee',category:'commerce',label:'E-commerce',description:'Dokumentasi toko, iklan marketplace, serta tinjauan produk bulanan di Tokopedia dan Shopee.',folder:'ecommerce',files:['official store tokopedia.png','ads tokopedia.png','ads sentrafotokopi.png','Star+-seller.png','orvelix store.png','moms kids worksheet.png','tinjauan produk bulanan 1.png','tinjauan produk bulanan 2 shopee.png']},
  {title:'Google Ads Certificates',category:'certification',label:'Sertifikasi',description:'Dokumentasi sertifikat Google Ads dan Google Ads AI. Buka gambar untuk melihat detail sertifikat.',folder:'Freelance',files:['Google ads Certified.png','Google ads AI Certified.png']}
];
const marketingPath=(work,file)=>['digitalmarketing',work.folder,file].map(encodeURIComponent).join('/');
const marketingGrid=document.querySelector('#marketing-grid');
marketingGrid.innerHTML=marketingWorks.map((work,index)=>`<article class="marketing-card reveal" data-category="${work.category}"><button type="button" class="marketing-preview" data-work="${index}" aria-label="Buka galeri ${work.title}, ${work.files.length} gambar"><img src="${marketingPath(work,work.files[0])}" alt="${work.label} — ${work.title}" loading="lazy" width="640" height="400"><span class="marketing-preview-label">${work.files.length} gambar · Lihat detail ↗</span></button><div class="marketing-card-body"><span class="marketing-category">${work.label}</span><h3>${work.title}</h3><p>${work.description}</p></div></article>`).join('');
marketingGrid.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const marketingCount=document.querySelector('#marketing-count');
marketingCount.textContent=`${marketingWorks.length} portofolio ditampilkan`;
document.querySelector('#marketing-filters').addEventListener('click',event=>{
  const button=event.target.closest('[data-category]');
  if(!button)return;
  document.querySelectorAll('.marketing-filter').forEach(filter=>filter.setAttribute('aria-pressed',String(filter===button)));
  let count=0;
  marketingGrid.querySelectorAll('.marketing-card').forEach(card=>{
    card.hidden=button.dataset.category!=='all'&&card.dataset.category!==button.dataset.category;
    if(!card.hidden)count++;
  });
  marketingCount.textContent=`${count} portofolio ditampilkan`;
});
const marketingViewer=document.querySelector('#marketing-viewer');
let activeMarketingWork=0,activeMarketingImage=0;
function showMarketingImage(){
  const work=marketingWorks[activeMarketingWork];
  const file=work.files[activeMarketingImage];
  document.querySelector('#marketing-viewer-title').textContent=work.title;
  const img=document.querySelector('#marketing-viewer-image');
  img.src=marketingPath(work,file);img.alt=`${work.title} — ${file.replace(/\.[^.]+$/,'')}`;
  document.querySelector('#marketing-position').textContent=`${activeMarketingImage+1} / ${work.files.length}`;
}
function stepMarketingImage(direction){
  activeMarketingImage=(activeMarketingImage+direction+marketingWorks[activeMarketingWork].files.length)%marketingWorks[activeMarketingWork].files.length;
  showMarketingImage();
}
marketingGrid.addEventListener('click',event=>{
  const button=event.target.closest('[data-work]');if(!button)return;
  activeMarketingWork=Number(button.dataset.work);activeMarketingImage=0;showMarketingImage();
  marketingViewer.showModal();document.body.classList.add('marketing-dialog-open');
});
document.querySelector('#marketing-close').addEventListener('click',()=>marketingViewer.close());
document.querySelector('#marketing-prev').addEventListener('click',()=>stepMarketingImage(-1));
document.querySelector('#marketing-next').addEventListener('click',()=>stepMarketingImage(1));
marketingViewer.addEventListener('close',()=>document.body.classList.remove('marketing-dialog-open'));
marketingViewer.addEventListener('click',event=>{if(event.target===marketingViewer)marketingViewer.close()});
marketingViewer.addEventListener('keydown',event=>{
  if(event.key==='ArrowLeft'){event.preventDefault();stepMarketingImage(-1)}
  if(event.key==='ArrowRight'){event.preventDefault();stepMarketingImage(1)}
});

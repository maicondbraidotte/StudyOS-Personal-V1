const subjects = [
  {name:"Matemática",icon:"∑",focus:"Raciocínio e resolução",desc:"Fundamentos matemáticos, funções, geometria, estatística e probabilidade."},
  {name:"Física",icon:"⌁",focus:"Leis e fenômenos",desc:"Grandezas, mecânica, energia, termologia, óptica e eletricidade."},
  {name:"Química",icon:"⚗",focus:"Matéria e transformações",desc:"Estrutura atômica, ligações, reações, estequiometria e química orgânica."},
  {name:"Geografia",icon:"◎",focus:"Espaço e sociedade",desc:"Cartografia, natureza, população, economia, geopolítica e Brasil."},
  {name:"História",icon:"◷",focus:"Tempo e processos",desc:"Antiguidade, Idade Média, Modernidade, revoluções e história contemporânea."},
  {name:"Biologia",icon:"❋",focus:"Vida e sistemas",desc:"Citologia, genética, evolução, fisiologia, ecologia e biodiversidade."},
  {name:"Ciência da Computação",icon:"</>",focus:"Formação universitária",desc:"Acompanhar as disciplinas da graduação, praticar programação e desenvolver projetos."},
  {name:"Japonês",icon:"あ",focus:"Idioma e cultura",desc:"Escrita, vocabulário, gramática, leitura e compreensão auditiva."}
];
const phases = [
 {id:"01",months:"JANEIRO — MARÇO",title:"Construção da base",goal:"Recuperar conhecimentos fundamentais, identificar lacunas e desenvolver consistência.",items:["Matemática: operações, frações, potências, equações e funções.","Física: grandezas, unidades e cinemática.","Química: matéria, átomos, elementos e tabela periódica.","História: Antiguidade e Idade Média.","Geografia: cartografia, relevo, clima e hidrografia.","Biologia: células, bioquímica e genética introdutória.","Computação: lógica, algoritmos e estruturas de dados.","Japonês: hiragana, katakana, vocabulário e gramática básica."]},
 {id:"02",months:"ABRIL — JUNHO",title:"Desenvolvimento",goal:"Aprofundar os fundamentos e começar a conectar diferentes assuntos.",items:["Matemática: funções, geometria plana e trigonometria.","Física: dinâmica, leis de Newton e trabalho.","Química: ligações químicas, funções inorgânicas e reações.","História: Renascimento, Idade Moderna e Revoluções.","Geografia: população, urbanização e economia.","Biologia: genética, evolução e classificação dos seres vivos.","Computação: programação, orientação a objetos e banco de dados.","Japonês: partículas, verbos, adjetivos e formação de frases."]},
 {id:"03",months:"JULHO — SETEMBRO",title:"Aprofundamento",goal:"Trabalhar conteúdos intermediários e resolução de problemas.",items:["Matemática: logaritmos, progressões e geometria espacial.","Física: energia, quantidade de movimento e termologia.","Química: estequiometria, soluções e termoquímica.","História: Revolução Industrial, Imperialismo e Guerras Mundiais.","Geografia: geopolítica, industrialização e globalização.","Biologia: fisiologia humana, ecologia e botânica.","Computação: engenharia de software, redes e projetos.","Japonês: leitura, compreensão de textos e gramática intermediária inicial."]},
 {id:"04",months:"OUTUBRO — DEZEMBRO",title:"Consolidação",goal:"Revisar, resolver exercícios mais complexos e avaliar o aprendizado.",items:["Matemática: estatística, probabilidade e revisão geral.","Física: óptica, eletricidade e revisão geral.","Química: química orgânica, eletroquímica e revisão geral.","História: História Contemporânea e Brasil.","Geografia: Brasil, meio ambiente e questões atuais.","Biologia: ecologia, evolução e revisão geral.","Computação: projeto prático integrador e revisão da graduação.","Japonês: revisão geral, leitura e preparação para conteúdos JLPT N5/N4."]}
];
const schedule = [
 {day:"SEGUNDA-FEIRA",sessions:[["Matemática","Teoria, exemplos e resolução de exercícios"],["Ciência da Computação","Conteúdo da graduação e prática de programação"]]},
 {day:"TERÇA-FEIRA",sessions:[["Física","Conceitos, fórmulas e problemas aplicados"],["Japonês","Vocabulário, gramática e leitura"]]},
 {day:"QUARTA-FEIRA",sessions:[["Química","Conceitos, reações e exercícios"],["História","Leitura, linha do tempo e interpretação"]]},
 {day:"SÁBADO",sessions:[["Biologia","Conceitos, esquemas e questões"],["Geografia","Mapas, processos espaciais e atualidades"],["Ciência da Computação","Exercícios, revisão ou projeto"],["Japonês","Escrita, escuta e revisão"]]}
];

const animeThemes = [
 {id:"horimiya",title:"Horimiya",characters:"Izumi Miyamura & Kyouko Hori",names:["Miyamura","Hori"],subtitle:"Slice of life • Escola • Laços cotidianos",symbol:"✿",mood:"Uma atmosfera escolar acolhedora, com tons suaves, cadernos e pequenos detalhes florais.",className:"theme-horimiya",colors:["#f4c5d4","#9bb9d6"],tag:"SCHOOL DAYS"},
 {id:"jjk",title:"Jujutsu Kaisen",characters:"Satoru Gojo",names:["Gojo"],subtitle:"Energia • Mistério • Contraste",symbol:"✧",mood:"Contraste entre azul elétrico, violeta e preto, com uma interface energética e urbana.",className:"theme-jjk",colors:["#71c7ff","#8e7bff"],tag:"CURSED ENERGY"},
 {id:"akira",title:"Akira",characters:"Kaneda",names:["Kaneda"],subtitle:"Neo-Tokyo • Retro-futurismo",symbol:"◈",mood:"Visual industrial inspirado em Neo-Tokyo: vermelho, grafite, sinalização e luzes urbanas.",className:"theme-akira",colors:["#ff654f","#d7a05d"],tag:"NEO TOKYO"},
 {id:"inuyasha",title:"Inuyasha",characters:"Inuyasha",names:["Inuyasha"],subtitle:"Fantasia • Japão feudal • Natureza",symbol:"❀",mood:"Papel de pergaminho, vermelho profundo, verde musgo e referências à natureza e ao Japão feudal.",className:"theme-inuyasha",colors:["#c95e4b","#a4b58b"],tag:"FEUDAL ERA"},
 {id:"kaoru",title:"Kaoru Hana wa Rin to Saku",characters:"Rintaro Tsumugi & Kaoruko Waguri",names:["Rintaro","Kaoruko"],subtitle:"Escola • Flores • Romance cotidiano",symbol:"✿",mood:"Flores delicadas, cadernos, luz natural e uma paleta de sakura com verde de jardim.",className:"theme-kaoru",colors:["#f2b8c8","#9bbf9a"],tag:"BLOOMING DAYS"},
 {id:"otonari",title:"Otonari no Tenshi-sama",characters:"Mahiru Shiina",names:["Mahiru"],subtitle:"Slice of life • Aconchego • Rotina",symbol:"☁",mood:"Creme, azul claro e dourado suave; uma sensação tranquila de fim de tarde e rotina.",className:"theme-otonari",colors:["#d9c7a7","#a8c8df"],tag:"SOFT DAYS"},
 {id:"sao",title:"Sword Art Online",characters:"Kirito & Asuna",names:["Kirito","Asuna"],subtitle:"RPG • Interface digital • Aventura",symbol:"◇",mood:"HUD de RPG, ciano, azul profundo e painéis com aparência de sistema virtual.",className:"theme-sao",colors:["#56d9e8","#6f9dff"],tag:"SYSTEM ONLINE"},
 {id:"kusuriya",title:"Kusuriya no Hitorigoto",characters:"Maomao",names:["Maomao"],subtitle:"Palácio imperial • Ervas • Investigação",symbol:"❀",mood:"Estética inspirada na corte imperial: jade, papel envelhecido, madeira, ervas e notas de boticária.",className:"theme-kusuriya",colors:["#9cb99b","#d2b17c"],tag:"IMPERIAL APOTHECARY"}
];
// IMAGENS DOS PERSONAGENS — troque somente os caminhos abaixo.
// Coloque os arquivos na pasta IMGS (ex.: IMGS/miyamura.jpg).
const CHARACTER_IMAGES = {
 horimiya: ["IMGS/miyamura.jpg", "IMGS/hori.jpg"],
 jjk: ["IMGS/gojo.jpg"],
 akira: ["IMGS/kaneda.jpg"],
 inuyasha: ["IMGS/inuyasha.jpg"],
 kaoru: ["IMGS/rintaro.jpg", "IMGS/kaoruko.jpg"],
 otonari: ["IMGS/mahiru.jpg"],
 sao: ["IMGS/kirito.jpg", "IMGS/asuna.jpg"],
 kusuriya: ["IMGS/maomao.jpg"]
};
const characterDescriptions = {
 horimiya:"Miyamura e Hori — companheiros para uma rotina de estudos leve e equilibrada.",
 jjk:"Gojo — energia e confiança para encarar os desafios mais difíceis.",
 akira:"Kaneda — espírito urbano e determinação para avançar.",
 inuyasha:"Inuyasha — uma jornada de aprendizado com espírito aventureiro.",
 kaoru:"Rintaro e Kaoruko — florescendo passo a passo, como uma nova etapa escolar.",
 otonari:"Mahiru — serenidade, constância e um ambiente acolhedor.",
 sao:"Kirito e Asuna — progresso por níveis, missões e objetivos.",
 kusuriya:"Maomao — curiosidade, observação e investigação em cada assunto."
};

const STORAGE_KEY = "studyos-2027-v1";
const META_KEY = "studyos-2027-v3-meta";
let state = {};
try { state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {}; } catch { state = {}; }
let meta = {};
try { meta = JSON.parse(localStorage.getItem(META_KEY) || "{}") || {}; } catch { meta = {}; }
meta.theme ||= "kaoru";
meta.companion ||= "kaoru";
meta.completedAt ||= {};
meta.annualComplete ||= false;
meta.studySessions ||= [];
meta.monthlyGoal ||= 20;
let selectedWeek = 1;
const $ = s => document.querySelector(s);
let syncTimer = null;
let currentUser = null;
let realtimeChannel = null;
let applyingRemote = false;
let hasPendingLocalChanges = false;
const save = () => {
 localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
 scheduleCloudSync();
};
const saveMeta = () => {
 localStorage.setItem(META_KEY, JSON.stringify(meta));
 scheduleCloudSync();
};
function setSyncStatus(message, stateName="") {
 const el = document.getElementById("syncStatus");
 if (el) { el.textContent = message; el.dataset.state = stateName; }
}
function setAuthMessage(message, error=false) {
 const el = document.getElementById("authMessage");
 if (el) { el.textContent = message; el.classList.toggle("error", error); }
}
function localPayload() { return { state, meta, schemaVersion: 1 }; }
function mergePayload(local, remote) {
 const localState = local?.state && typeof local.state === "object" ? local.state : {};
 const remoteState = remote?.state && typeof remote.state === "object" ? remote.state : {};
 const localMeta = local?.meta && typeof local.meta === "object" ? local.meta : {};
 const remoteMeta = remote?.meta && typeof remote.meta === "object" ? remote.meta : {};
 const sessions = new Map();
 [...(localMeta.studySessions || []), ...(remoteMeta.studySessions || [])].forEach(session => {
   if (session && session.id != null) sessions.set(String(session.id), session);
 });
 return {
   schemaVersion: 1,
   state: { ...localState, ...remoteState },
   meta: {
     ...localMeta, ...remoteMeta,
     completedAt: { ...(localMeta.completedAt || {}), ...(remoteMeta.completedAt || {}) },
     studySessions: [...sessions.values()],
     annualComplete: !!(localMeta.annualComplete || remoteMeta.annualComplete),
     theme: remoteMeta.theme || localMeta.theme || "kaoru",
     companion: remoteMeta.companion || localMeta.companion || "kaoru",
     monthlyGoal: remoteMeta.monthlyGoal || localMeta.monthlyGoal || 20
   }
 };
}
function persistPayload(payload) {
 applyingRemote = true;
 state = payload?.state && typeof payload.state === "object" ? payload.state : {};
 meta = payload?.meta && typeof payload.meta === "object" ? payload.meta : {};
 meta.theme ||= "kaoru"; meta.companion ||= "kaoru"; meta.completedAt ||= {};
 meta.annualComplete ||= false; meta.studySessions ||= []; meta.monthlyGoal ||= 20;
 localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
 localStorage.setItem(META_KEY, JSON.stringify(meta));
 applyingRemote = false;
 refreshAll();
}
function scheduleCloudSync() {
 if (applyingRemote || !currentUser) return;
 hasPendingLocalChanges = true;
 setSyncStatus(navigator.onLine ? "ALTERAÇÕES PENDENTES" : "OFFLINE · SALVO NESTE DISPOSITIVO", "pending");
 clearTimeout(syncTimer);
 syncTimer = setTimeout(syncToCloud, 900);
}
async function syncToCloud() {
 if (!currentUser || !navigator.onLine || !window.studyosSupabase) return;
 setSyncStatus("SINCRONIZANDO…", "pending");
 const { error } = await window.studyosSupabase.from("studyos_data").upsert({
   user_id: currentUser.id, data: localPayload(), updated_at: new Date().toISOString()
 }, { onConflict: "user_id" });
 if (error) { console.error("StudyOS sync:", error); setSyncStatus("ERRO AO SINCRONIZAR", "error"); }
 else { hasPendingLocalChanges = false; setSyncStatus("SINCRONIZADO", "ok"); }
}
async function loadCloudData() {
 if (!currentUser) return;
 setSyncStatus("CARREGANDO DADOS…", "pending");
 const { data, error } = await window.studyosSupabase.from("studyos_data").select("data").eq("user_id", currentUser.id).maybeSingle();
 if (error) { console.error("StudyOS load:", error); setSyncStatus("FALHA AO CARREGAR", "error"); setAuthMessage("Não foi possível carregar seus dados. Confira a tabela studyos_data e as políticas RLS.", true); return; }
 if (data?.data && Object.keys(data.data).length) {
   const merged = mergePayload(localPayload(), data.data);
   persistPayload(merged);
   await syncToCloud();
 } else {
   await syncToCloud();
 }
}
function subscribeToCloud() {
 if (realtimeChannel) window.studyosSupabase.removeChannel(realtimeChannel);
 realtimeChannel = window.studyosSupabase.channel(`studyos-${currentUser.id}`)
  .on("postgres_changes", { event: "*", schema: "public", table: "studyos_data", filter: `user_id=eq.${currentUser.id}` }, payload => {
    if (payload.new?.data && !hasPendingLocalChanges) { persistPayload(payload.new.data); setSyncStatus("SINCRONIZADO", "ok"); }
  }).subscribe();
}
function showAuthenticated(user) {
 currentUser = user;
 document.getElementById("authGate")?.classList.add("hidden");
 document.getElementById("accountEmail").textContent = user.email || "";
 document.getElementById("logoutBtn").hidden = false;
 loadCloudData().then(subscribeToCloud);
}
async function initAuth() {
 const config = window.STUDYOS_SUPABASE_CONFIG || {};
 const authGate = document.getElementById("authGate");
 if (!window.supabase?.createClient || !config.url || !config.anonKey || config.anonKey.includes("COLE_SUA")) {
   authGate.classList.remove("hidden");
   setAuthMessage("Configure a URL e a chave publishable/anon no arquivo supabase-config.js para ativar o login.", true);
   setSyncStatus("CONFIGURAÇÃO NECESSÁRIA", "error");
   document.getElementById("authForm").addEventListener("submit", e => e.preventDefault());
   return;
 }
 window.studyosSupabase = window.supabase.createClient(config.url, config.anonKey, {
   auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
 });
 const client = window.studyosSupabase;
 document.getElementById("authForm").addEventListener("submit", async e => {
   e.preventDefault();
   const email = document.getElementById("authEmail").value.trim();
   const password = document.getElementById("authPassword").value;
   const button = document.getElementById("loginBtn"); button.disabled = true;
   setAuthMessage("Entrando…");
   const { data, error } = await client.auth.signInWithPassword({ email, password });
   button.disabled = false;
   if (error) setAuthMessage(error.message, true);
   else if (data.user) { showAuthenticated(data.user); setAuthMessage("Login realizado."); }
 });
 document.getElementById("signupBtn").addEventListener("click", async () => {
   const email = document.getElementById("authEmail").value.trim();
   const password = document.getElementById("authPassword").value;
   if (!email || password.length < 6) return setAuthMessage("Informe um e-mail válido e uma senha com pelo menos 6 caracteres.", true);
   setAuthMessage("Criando conta…");
   const { data, error } = await client.auth.signUp({ email, password });
   if (error) setAuthMessage(error.message, true);
   else if (data.session && data.user) { showAuthenticated(data.user); setAuthMessage("Conta criada com sucesso."); }
   else setAuthMessage("Conta criada. Verifique seu e-mail para confirmar o cadastro e depois entre.");
 });
 document.getElementById("resetPasswordBtn").addEventListener("click", async () => {
   const email = document.getElementById("authEmail").value.trim();
   if (!email) return setAuthMessage("Informe seu e-mail para receber o link de recuperação.", true);
   const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: location.origin });
   setAuthMessage(error ? error.message : "Se o e-mail estiver cadastrado, você receberá um link de recuperação.", !!error);
 });
 document.getElementById("logoutBtn").addEventListener("click", async () => { await client.auth.signOut(); location.reload(); });
 client.auth.onAuthStateChange((_event, session) => {
   if (session?.user && !currentUser) showAuthenticated(session.user);
   else if (!session?.user) { currentUser = null; authGate.classList.remove("hidden"); document.getElementById("logoutBtn").hidden = true; setSyncStatus("DESCONECTADO", ""); }
 });
 const { data: { session } } = await client.auth.getSession();
 if (session?.user) showAuthenticated(session.user);
 else { authGate.classList.remove("hidden"); setSyncStatus("AGUARDANDO LOGIN", ""); }
 window.addEventListener("online", syncToCloud);
 document.addEventListener("visibilitychange", () => { if (!document.hidden && currentUser) syncToCloud(); });
}
const taskId = (week,day,idx) => `w${week}-${day}-${idx}`;
const allTaskEntries = () => Object.entries(state).filter(([k,v])=>/^w\d+-\d+-\d+$/.test(k) && v === true);
function weekStats(week){let total=0,done=0;schedule.forEach((d,di)=>d.sessions.forEach((s,si)=>{total++;if(state[taskId(week,di,si)])done++}));return{total,done}}
function theme(){return animeThemes.find(t=>t.id===meta.theme)||animeThemes[4]}
function applyTheme(){
 const t=theme();
 document.body.className=t.className;
 document.documentElement.style.setProperty("--accent",t.colors[0]);
 document.documentElement.style.setProperty("--accent2",t.colors[1]);
 $("#activeThemeLabel").textContent=`TEMA ATIVO · ${t.title.toUpperCase()}`;
 $("#companionSymbol").textContent=t.symbol;
 $("#companionTitle").textContent=t.title;
 $("#companionEyebrow").textContent=`COMPANHEIRO ATIVO · ${t.tag}`;
 $("#companionDescription").textContent=characterDescriptions[t.id];
}
function renderWeekOptions(){const select=$("#weekNumber");select.innerHTML="";for(let i=1;i<=52;i++){let o=document.createElement("option");o.value=i;o.textContent=`Semana ${String(i).padStart(2,"0")}`;select.append(o)}select.value=selectedWeek}
function renderWeekly(){
 const root=$("#weeklySchedule");root.innerHTML="";
 schedule.forEach((day,di)=>{
  const card=document.createElement("article");card.className="day-card";
  const completed=day.sessions.filter((_,si)=>state[taskId(selectedWeek,di,si)]).length;
  card.innerHTML=`<div class="day-card-head"><h3>${day.day}</h3><span>${completed}/${day.sessions.length} CONCLUÍDAS</span></div>`;
  day.sessions.forEach((s,si)=>{
   const id=taskId(selectedWeek,di,si),done=!!state[id],row=document.createElement("label");row.className=`session ${done?"done":""}`;
   row.innerHTML=`<input type="checkbox" ${done?"checked":""} aria-label="Concluir ${s[0]}"><span class="session-info"><b>${s[0]}</b><small>${s[1]}</small></span><span class="session-time">50 MIN</span>`;
   row.querySelector("input").addEventListener("change",e=>{
    state[id]=e.target.checked;
    if(e.target.checked) meta.completedAt[id]=new Date().toISOString(); else delete meta.completedAt[id];
    save();saveMeta();refreshAll();
   });
   card.append(row);
  });root.append(card);
 });
 const st=weekStats(selectedWeek);$("#weekDone").textContent=`${st.done}/${st.total}`;
}
function renderDashboard(){
 const st=weekStats(selectedWeek),pct=Math.round(st.done/st.total*100);
 const completed=allTaskEntries().length;
 const xp=completed*25;
 const level=Math.floor(xp/100)+1,within=xp%100;
 const levelNames=["INICIANTE","ESTUDANTE","DISCIPLINADO","PESQUISADOR","ESPECIALISTA","MESTRE"];
 $("#xpValue").textContent=`${xp} XP`;
 $("#xpBar").style.width=within+"%";
 $("#levelName").textContent=`NÍVEL ${String(level).padStart(2,"0")} · ${levelNames[Math.min(level-1,levelNames.length-1)]}`;
 $("#xpNext").textContent=`${100-within} XP PARA O PRÓXIMO NÍVEL`;
 $("#doneCount").innerHTML=`${st.done}<span class="stat-unit"> / ${st.total}</span>`;
 $("#overallPercent").textContent=`${pct}%`;
 $("#overallBar").style.width=pct+"%";
 $("#overallCaption").textContent=pct===100?"Todas as sessões desta semana concluídas":`${st.total-st.done} sessões restantes nesta semana`;
 $("#dashboardWeek").innerHTML="";
 schedule.forEach((d,di)=>{let done=d.sessions.filter((_,si)=>state[taskId(selectedWeek,di,si)]).length;let el=document.createElement("div");el.className="week-day";el.innerHTML=`<div class="week-day-top"><b>${d.day.replace("-FEIRA","").replace("-"," ")}</b><small>${done}/${d.sessions.length}</small></div><div class="mini-progress"><i style="width:${done/d.sessions.length*100}%"></i></div>`;$("#dashboardWeek").append(el)});
 $("#phaseList").innerHTML=phases.map(p=>`<div class="phase-row"><span class="phase-date">${p.id} / 04</span><div><b>${p.title}</b><p>${p.months}</p></div><span class="phase-state">2027</span></div>`).join("");
 applyTheme();
}
function renderAnnual(){ $("#annualPhases").innerHTML=phases.map(p=>`<article class="annual-card"><div class="annual-card-top"><span class="phase-index">CICLO ${p.id}</span><span class="tiny-tag">${p.months}</span></div><h3>${p.title}</h3><p>${p.goal}</p><ul>${p.items.map(x=>`<li>${x}</li>`).join("")}</ul></article>`).join("")}
function renderSubjects(){$("#subjectGrid").innerHTML=subjects.map(s=>`<article class="subject-card"><div class="subject-icon">${s.icon}</div><h3>${s.name}</h3><p>${s.desc}</p><div class="subject-focus">${s.focus.toUpperCase()}</div></article>`).join("")}
function characterAvatar(themeId, name, index=0){
 const src=(CHARACTER_IMAGES[themeId]||[])[index]||"";
 return `<div class="character-avatar avatar-${themeId}">${src?`<img src="${src}" alt="${name}" onerror="this.style.display='none'">`:''}<span class="avatar-glow"></span><span class="avatar-hair"></span><span class="avatar-face"></span><span class="avatar-body"></span><span class="avatar-initial">${name.slice(0,1)}</span><small>${name}</small></div>`;
}
function renderGallery(){
 const root=$("#animeGallery");root.innerHTML="";
 animeThemes.forEach(t=>{
  const active=meta.theme===t.id;
  const card=document.createElement("article");card.className=`anime-card ${active?"selected":""}`;
  card.innerHTML=`<div class="anime-card-top"><span class="anime-card-symbol">${t.symbol}</span><span class="tiny-tag">${t.tag}</span></div><div class="avatar-row">${t.names.map((n,i)=>characterAvatar(t.id,n,i)).join("")}</div><div class="anime-card-info"><h3>${t.title}</h3><p class="anime-subtitle">${t.subtitle}</p><p class="anime-mood">${t.mood}</p><div class="anime-card-bottom"><span class="character-names">${t.characters}</span><button class="theme-select">${active?"TEMA ATIVO":"ATIVAR TEMA"}</button></div></div>`;
  card.querySelector("button").addEventListener("click",()=>{meta.theme=t.id;meta.companion=t.id;saveMeta();refreshAll()});
  root.append(card);
 });
}
const achievements = [
 {id:"first",icon:"✦",name:"First Step",desc:"Conclua sua primeira sessão de estudos.",test:()=>allTaskEntries().length>=1,progress:()=>`${Math.min(allTaskEntries().length,1)} / 1`},
 {id:"consistency",icon:"◷",name:"Consistency",desc:"Registre estudos em 7 dias diferentes.",test:()=>new Set(Object.values(meta.completedAt).map(d=>String(d).slice(0,10))).size>=7,progress:()=>`${Math.min(new Set(Object.values(meta.completedAt).map(d=>String(d).slice(0,10))).size,7)} / 7 dias`},
 {id:"scholar",icon:"∑",name:"Scholar",desc:"Conclua 50 sessões de estudos.",test:()=>allTaskEntries().length>=50,progress:()=>`${Math.min(allTaskEntries().length,50)} / 50 sessões`},
 {id:"knowledge",icon:"⌘",name:"Knowledge Seeker",desc:"Conclua ao menos uma sessão em cada uma das 8 disciplinas.",test:()=>subjects.every(s=>allTaskEntries().some(([k])=>{const m=k.match(/^w\d+-(\d+)-(\d+)$/);return m && schedule[+m[1]].sessions[+m[2]][0]===s.name})),progress:()=>`${new Set(allTaskEntries().map(([k])=>{const m=k.match(/^w\d+-(\d+)-(\d+)$/);return m?schedule[+m[1]].sessions[+m[2]][0]:null}).filter(Boolean)).size} / 8 disciplinas`},
 {id:"perfect",icon:"★",name:"Perfect Week",desc:"Complete as 10 sessões de uma mesma semana.",test:()=>Array.from({length:52},(_,i)=>weekStats(i+1).done===10).some(Boolean),progress:()=>`${Array.from({length:52},(_,i)=>weekStats(i+1).done===10).some(Boolean)?"10 / 10":"0 / 10"} sessões na semana`},
 {id:"level",icon:"⬡",name:"Rising Star",desc:"Alcance 10 níveis de experiência.",test:()=>Math.floor(allTaskEntries().length*25/100)+1>=10,progress:()=>`${Math.min(Math.floor(allTaskEntries().length*25/100)+1,10)} / 10 níveis`},
 {id:"final",icon:"♜",name:"The Final Boss",desc:"Marque seu plano anual de 2027 como concluído.",test:()=>!!meta.annualComplete,progress:()=>meta.annualComplete?"Plano anual concluído":"Aguardando conclusão do ciclo"}
];
function achievementStatus(){return achievements.map(a=>({...a,unlocked:a.test(),detail:a.progress()}))}
function renderAchievements(){
 const list=achievementStatus(),unlocked=list.filter(a=>a.unlocked).length;
 $("#achievementCount").textContent=`${unlocked} / ${list.length}`;
 $("#achievementBar").style.width=`${unlocked/list.length*100}%`;
 $("#achievementGrid").innerHTML=list.map(a=>`<article class="achievement-card ${a.unlocked?"unlocked":"locked"}"><div class="achievement-icon">${a.unlocked?a.icon:"🔒"}</div><div class="achievement-content"><div class="achievement-status">${a.unlocked?"DESBLOQUEADA":"BLOQUEADA"}</div><h3>${a.name}</h3><p>${a.desc}</p><small>${a.detail}</small></div></article>`).join("");
 $("#achievementPreview").innerHTML=list.filter(a=>a.unlocked).slice(0,4).map(a=>`<div class="achievement-mini"><span>${a.icon}</span><div><b>${a.name}</b><small>DESBLOQUEADA</small></div></div>`).join("") || `<p class="empty-achievements">Suas primeiras conquistas aparecerão aqui. Complete uma sessão para começar.</p>`;
 $("#annualCompleteBtn").textContent=meta.annualComplete?"Plano anual concluído ✓":"Marcar plano anual como concluído";
 $("#annualCompleteBtn").disabled=!!meta.annualComplete;
}

// CALENDÁRIO, HISTÓRICO E TEMPORIZADOR
let calendarMonth=0, historyRange='week', timerMode='pomodoro', timerRunning=false, timerRemaining=1500, timerElapsed=0, timerInterval=null, pomodoroCycle=0, timerPhase='focus', currentSessionStarted=null;
const pad=n=>String(n).padStart(2,'0');
const fmtDate=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const totalSeconds=()=>meta.studySessions.reduce((a,s)=>a+(s.duration||0),0);
const fmtHours=secs=>`${Math.floor(secs/3600)}h ${pad(Math.floor(secs%3600/60))}min`;
function addStudySession(subject,duration,mode){if(duration<60)return;meta.studySessions.push({id:Date.now()+Math.random(),date:fmtDate(new Date()),subject,duration:Math.round(duration),mode,completedAt:new Date().toISOString()});saveMeta();renderCalendar();renderHistory();}
function renderCalendar(){const y=2027,m=calendarMonth,first=new Date(y,m,1),days=new Date(y,m+1,0).getDate(),offset=first.getDay();const sessions=meta.studySessions.filter(s=>s.date.startsWith(`${y}-${pad(m+1)}`));const byDay={};sessions.forEach(s=>{const d=Number(s.date.slice(-2));(byDay[d]||=[]).push(s)});$('#calendarMonth').textContent=first.toLocaleDateString('pt-BR',{month:'long',year:'numeric'});$('#calendarGrid').innerHTML='';for(let i=0;i<offset;i++){const blank=document.createElement('div');blank.className='calendar-empty';$('#calendarGrid').append(blank)}for(let d=1;d<=days;d++){const list=byDay[d]||[],mins=list.reduce((a,s)=>a+s.duration,0),cell=document.createElement('div');cell.className=`calendar-day ${list.length?'studied':''}`;cell.innerHTML=`<b>${d}</b>${list.length?`<span>${list.length} sessão${list.length>1?'ões':''}</span><small>${(mins/3600).toFixed(1)}h</small>`:'<small>—</small>'}`;$('#calendarGrid').append(cell)}const monthSecs=sessions.reduce((a,s)=>a+s.duration,0),goal=Number(meta.monthlyGoal)||20;$('#calHours').textContent=`${(totalSeconds()/3600).toFixed(1)}h` ;$('#calSessions').textContent=meta.studySessions.length;$('#monthlyGoal').value=goal;$('#monthProgress').textContent=`${(monthSecs/3600).toFixed(1)}h / ${goal}h na meta`}
function renderHistory(){const now=new Date(),range=$('#historyRange')?.value||'week';let from=new Date(now);if(range==='day')from.setHours(0,0,0,0);if(range==='week')from.setDate(now.getDate()-6);if(range==='month')from=new Date(now.getFullYear(),now.getMonth(),1);let arr=meta.studySessions.filter(s=>range==='all'||new Date(s.completedAt)>=from).sort((a,b)=>b.completedAt.localeCompare(a.completedAt));$('#historyHours').textContent=fmtHours(arr.reduce((a,s)=>a+s.duration,0));$('#historyCount').textContent=`${arr.length} sessões`;$('#sessionHistory').innerHTML=arr.length?arr.map(s=>`<div class="history-row"><div><b>${s.subject}</b><small>${new Date(s.completedAt).toLocaleString('pt-BR')} · ${s.mode==='pomodoro'?'Pomodoro':'Livre'}</small></div><strong>${fmtHours(s.duration)}</strong></div>`).join(''):'<p class="empty-achievements">Nenhuma sessão registrada neste período.</p>';const days=[];for(let i=6;i>=0;i--){let d=new Date();d.setDate(d.getDate()-i);let key=fmtDate(d),secs=arr.filter(s=>s.date===key).reduce((a,s)=>a+s.duration,0);days.push({label:d.toLocaleDateString('pt-BR',{weekday:'short'}).replace('.',''),secs})}$('#consistencyChart').innerHTML=days.map(d=>`<div class="consistency-day"><div class="bar-wrap"><i style="height:${Math.min(100,d.secs/7200*100)}%"></i></div><b>${d.secs?Math.round(d.secs/60)+'m':'—'}</b><small>${d.label}</small></div>`).join('')}
function setTimerMode(mode){timerMode=mode;timerRunning=false;clearInterval(timerInterval);timerPhase='focus';timerElapsed=0;timerRemaining=Number($('#focusMinutes').value||25)*60;document.querySelectorAll('.timer-mode').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));$('#timerPhase').textContent=mode==='free'?'CRONÔMETRO LIVRE':'TEMPO DE FOCO · CICLO 1 DE 4';$('#timerHint').textContent=mode==='free'?'Inicie e conclua manualmente para salvar o tempo estudado.':'25 min de foco + 5 min de pausa. Após 4 ciclos, pausa longa de 15 min.';updateTimer()}
function updateTimer(){let secs=timerMode==='free'?timerElapsed:timerRemaining;$('#timerDisplay').textContent=`${pad(Math.floor(secs/60))}:${pad(secs%60)}`;let max=timerMode==='free'?Math.max(timerElapsed,1):(timerPhase==='focus'?Number($('#focusMinutes').value||25)*60:(pomodoroCycle%4===0?900:300));$('#timerProgress').style.width=`${Math.min(100,(timerMode==='free'?timerElapsed%max:1-timerRemaining/max)*100)}%`;$('#pomodoroCount').textContent=`${'● '.repeat(pomodoroCycle%4)}${'○ '.repeat(4-pomodoroCycle%4)} · ${pomodoroCycle%4}/4 ciclos concluídos`}
function startTimer(){if(timerRunning)return;timerRunning=true;if(!currentSessionStarted)currentSessionStarted=Date.now();timerInterval=setInterval(()=>{if(timerMode==='free'){timerElapsed++;updateTimer();return}timerRemaining--;updateTimer();if(timerRemaining<=0){if(timerPhase==='focus'){const subject=$('#timerSubject').value;addStudySession(subject,Number($('#focusMinutes').value||25)*60,'pomodoro');pomodoroCycle++;timerPhase='break';timerRemaining=pomodoroCycle%4===0?900:300;$('#timerPhase').textContent=pomodoroCycle%4===0?'PAUSA LONGA · 15 MIN':'PAUSA · 5 MIN';$('#timerHint').textContent='Ciclo de foco concluído e registrado automaticamente. Aproveite a pausa.'}else{timerPhase='focus';timerRemaining=Number($('#focusMinutes').value||25)*60;$('#timerPhase').textContent=`TEMPO DE FOCO · CICLO ${pomodoroCycle%4+1} DE 4`;$('#timerHint').textContent='Pausa encerrada. Pronto para o próximo ciclo.'} }},1000);$('#timerStart').textContent='Pausar'}
function pauseTimer(){timerRunning=false;clearInterval(timerInterval);$('#timerStart').textContent='Continuar'}
function resetTimer(){pauseTimer();timerElapsed=0;timerPhase='focus';timerRemaining=Number($('#focusMinutes').value||25)*60;currentSessionStarted=null;$('#timerStart').textContent='Iniciar';$('#timerPhase').textContent=timerMode==='free'?'CRONÔMETRO LIVRE':'TEMPO DE FOCO · CICLO 1 DE 4';updateTimer()}
function finishTimer(){if(timerMode==='free'&&timerElapsed>=60)addStudySession($('#timerSubject').value,timerElapsed,'free');else if(timerMode==='pomodoro'&&timerPhase==='focus'){let spent=Number($('#focusMinutes').value||25)*60-timerRemaining;if(spent>=60)addStudySession($('#timerSubject').value,spent,'pomodoro')}resetTimer();}
function initTracking(){const sel=$('#timerSubject');sel.innerHTML=subjects.map(s=>`<option>${s.name}</option>`).join('');$('#monthlyGoal').value=meta.monthlyGoal;$('#monthlyGoal').addEventListener('change',e=>{meta.monthlyGoal=Math.max(1,Number(e.target.value)||20);saveMeta();renderCalendar()});$('#prevMonth').addEventListener('click',()=>{calendarMonth=Math.max(0,calendarMonth-1);renderCalendar()});$('#nextMonth').addEventListener('click',()=>{calendarMonth=Math.min(11,calendarMonth+1);renderCalendar()});$('#historyRange').addEventListener('change',renderHistory);document.querySelectorAll('.timer-mode').forEach(b=>b.addEventListener('click',()=>setTimerMode(b.dataset.mode)));$('#timerStart').addEventListener('click',()=>timerRunning?pauseTimer():startTimer());$('#timerReset').addEventListener('click',resetTimer);$('#timerFinish').addEventListener('click',finishTimer);$('#focusMinutes').addEventListener('change',()=>{if(!timerRunning&&timerMode==='pomodoro'){timerRemaining=Number($('#focusMinutes').value||25)*60;updateTimer()}});renderCalendar();renderHistory();setTimerMode('pomodoro')}

function refreshAll(){renderWeekly();renderDashboard();renderGallery();renderAchievements();renderCalendar?.();renderHistory?.();applyTheme()}
function showView(name){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===name));document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===name));const labels={dashboard:"VISÃO GERAL",weekly:"ROTINA SEMANAL",calendar:"CALENDÁRIO",history:"HISTÓRICO",timer:"CRONÔMETRO / POMODORO",annual:"PLANO ANUAL",subjects:"DISCIPLINAS",gallery:"GALERIA ANIME",achievements:"CONQUISTAS"};$("#crumb").textContent=labels[name]||"STUDYOS";}
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.goto)));
$("#weekNumber").addEventListener("change",e=>{selectedWeek=Number(e.target.value);renderWeekly();renderDashboard();renderAchievements()});
$("#annualCompleteBtn").addEventListener("click",()=>{meta.annualComplete=true;saveMeta();renderAchievements()});
renderWeekOptions();renderAnnual();renderSubjects();initTracking();refreshAll();initAuth();

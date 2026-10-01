const scenes=[...document.querySelectorAll(".scene")];let current=0;
const memories=[
["photo1.jpg","The one I would keep forever. ♡"],
["photo2.jpg","That smile deserves its own scrapbook page. 🥹"],
["photo3.jpg","A little piece of our story. ✨"],
["photo4.jpg","Spider-Man found his competition. 😂❤️"],
["photo5.jpg","Handsome Juji being handsome. Obviously. 🤎"]
];let mi=0;
const reasons=[
"That adorable doggy laugh. 🥹",
"Your determination and how hard you work for the things you care about. 🤍",
"That beautiful husky voice that makes me melt. 🎧",
"Your smile. Especially the fresh toothy one. 😭❤️",
"Your ridiculous sense of humour. You make ordinary moments hilarious. 😂",
"Your tall height, big hands and… okay, your entire physique. 😌",
"Because you're my Juji. Somehow, out of everyone, you're my person. 🫶"
];let ri=0;
const chaos=[
"Watching reels while we're literally on a video call. 📱😭",
"Not answering me when I'm asking you a QUESTION. Sir???",
"Ragebaiting me until I get mad and then acting innocent. 😭",
"Arguing with me purely because you enjoy pissing me off. 🤨",
"Showering approximately 50 times a day. 🚿😂",
"“Not all men.” — your national anthem.",
"“Kyaa hua mere bache ko?” — and suddenly I forget why I was mad. 🥹"
];let ci=0;
const envelopeMessages=[
"Those all-night conversations are some of my favourite memories. The kind where we look at the clock and somehow it's morning. 🌙❤️",
"I still remember how happy your chocolates made me. It was such a small thing, but it stayed with me. 🍫🥹",
"Imagine Bumble accidentally introducing me to my favourite person. What are the odds? 🫶",
"⚠️ CLASSIFIED: contains conversations that are absolutely not appropriate for this innocent little website. 😈🤭"
];
const letterParts=[
"Dearest Dr. Junaid Ali Faisal,",
"You're a dream come true to me. 🥹❤️ Your presence in my life feels as important as breathing.",
"Your beautiful husky voice, that fresh toothy smile 😭, your angel-like face, your tall height, those big hands, and that physique… sir, please. 😩❤️",
"You still make my heart flutter with every flirty comment, every “kyaa hua mere bache ko?” and every little moment that somehow makes an ordinary day feel special. 🦋",
"I adore your determination, your hard work, your ridiculous sense of humour, and especially that adorable doggy laugh. 🥹",
"I'm so blessed to have your hand in mine. 🤍 I hope we make it all the way to the end, because I don't want to teach myself how to live without you.",
"So here's to more midnight conversations, more laughter, more arguments just because you're annoying 😭, more memories, more chocolates, and a lifetime of being each other's favourite headache. 🫶",
"I love you to infinity and beyond, my handsome Prince. 👑❤️✨"
];

function nextScene(){if(current>=scenes.length-1)return;scenes[current].classList.remove("active");scenes[current].classList.add("exit");current++;setTimeout(()=>{scenes[current].classList.remove("exit");scenes[current].classList.add("active")},80);sprinkleHearts(8);if(current===6)startLetter();}
function nextMemory(){if(mi===memories.length-1){nextScene();return;}mi++;const p=document.getElementById("polaroid"),img=document.getElementById("memoryImg"),cap=document.getElementById("memoryCaption");p.style.transform="translateX(-50%) rotate(-7deg) scale(.92)";img.style.opacity=0;setTimeout(()=>{img.src=memories[mi][0];cap.textContent=memories[mi][1];document.getElementById("memoryCounter").textContent=`memory ${mi+1} / 5`;p.style.transform="translateX(-50%) rotate(3deg) scale(1)";img.style.opacity=1},220);}
function nextReason(){ri=(ri+1)%reasons.length;document.getElementById("reasonText").textContent=reasons[ri];document.getElementById("reasonNo").textContent=String(ri+1).padStart(2,"0");document.getElementById("reasonCount").textContent=`tap for evidence • ${ri+1} / ${reasons.length}`;sprinkleHearts(5);}
function nextChaos(){ci=(ci+1)%chaos.length;const b=document.getElementById("chatBubble");b.animate([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:400});b.textContent=chaos[ci];}
function openEnvelope(btn,i){document.querySelectorAll(".envelope").forEach(x=>x.classList.remove("opened"));btn.classList.add("opened");const r=document.getElementById("envelopeReveal");r.textContent=envelopeMessages[i];r.animate([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:450});sprinkleHearts(4);}
function startLetter(){const box=document.getElementById("letterText"),next=document.getElementById("letterNext");box.innerHTML="";next.classList.add("hidden");letterParts.forEach((part,i)=>{const p=document.createElement("p");p.textContent="";box.appendChild(p);setTimeout(()=>typeLine(p,part),i*750)});setTimeout(()=>next.classList.remove("hidden"),letterParts.length*750+1600);}
function typeLine(el,text){let i=0;const t=setInterval(()=>{el.textContent+=text[i++]||"";if(i>=text.length)clearInterval(t)},15);}
const music=document.getElementById("bgMusic"),musicBtn=document.getElementById("musicBtn");let musicStarted=false;
function startMusic(){if(!musicStarted){music.play().then(()=>{musicStarted=true}).catch(()=>{})}}document.body.addEventListener("click",startMusic,{once:true});
musicBtn.addEventListener("click",e=>{e.stopPropagation();if(music.paused)music.play();else music.pause();musicBtn.textContent=music.paused?"♫̸":"♫"});
function blowCandle(c){if(c.classList.contains("out"))return;c.classList.add("out");sprinkleHearts(8);const left=document.querySelectorAll(".candle:not(.out)").length;document.getElementById("candleHint").textContent=left?`${left} candle${left===1?"":"s"} left… ♡`:"Wish made. ❤️";if(!left)setTimeout(showFinale,650);}
function showFinale(){document.getElementById("finalBefore").classList.add("hidden");document.getElementById("finalReveal").classList.remove("hidden");const f=document.getElementById("flash");f.animate([{opacity:0},{opacity:.8},{opacity:0}],{duration:900});confetti();sprinkleHearts(40);}
function sprinkleHearts(n){const box=document.getElementById("hearts");for(let i=0;i<n;i++){const h=document.createElement("span");h.className="heart-float";h.textContent=["♡","♥","✦","❤"][Math.floor(Math.random()*4)];h.style.left=Math.random()*100+"%";h.style.animationDuration=3+Math.random()*3+"s";h.style.fontSize=12+Math.random()*18+"px";box.appendChild(h);setTimeout(()=>h.remove(),6500)}}
function confetti(){const box=document.getElementById("confetti");for(let i=0;i<100;i++){const p=document.createElement("span");p.className="confetti-piece";p.textContent=["♥","✦","•","♡"][Math.floor(Math.random()*4)];p.style.left=Math.random()*100+"%";p.style.animationDelay=Math.random()*.6+"s";p.style.fontSize=8+Math.random()*12+"px";p.style.color=["#ff9bc5","#ffd6e7","#fff","#cdb7ff"][Math.floor(Math.random()*4)];box.appendChild(p);setTimeout(()=>p.remove(),4200)}}
for(let i=0;i<110;i++){const s=document.createElement("span");s.className="star";s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";s.style.animationDelay=Math.random()*3+"s";document.getElementById("stars").appendChild(s)}

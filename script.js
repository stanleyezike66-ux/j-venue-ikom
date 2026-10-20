
(()=>{
const WA="2347066827515"; // hotel WhatsApp: 234 + number without the leading 0
const $=id=>document.getElementById(id),$$=s=>document.querySelectorAll(s);
const wa = t => window.open("https://wa.me/2348139026300?text=" + encodeURIComponent(t), "_blank");
$("yr").textContent=new Date().getFullYear();
/* header + nav */
const hd=$("hd"),tog=$("tog"),links=$("links");
const sc=()=>hd.classList.toggle("sc",scrollY>40);addEventListener("scroll",sc,{passive:true});sc();
const shut=()=>{links.classList.remove("open");tog.classList.remove("open");tog.setAttribute("aria-expanded","false")};
tog.onclick=()=>{const o=links.classList.toggle("open");tog.classList.toggle("open",o);tog.setAttribute("aria-expanded",o)};
links.querySelectorAll("a").forEach(a=>a.onclick=shut);
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=e.target.id;links.querySelectorAll("a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+i))}}),{rootMargin:"-45% 0px -50% 0px"});
$$("section[id]").forEach(s=>so.observe(s));
/* reveal */
const ro=new IntersectionObserver((es,o)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach(e=>ro.observe(e));
/* pictures: if one is missing, show a coloured placeholder instead of a broken icon */
const bad=i=>{if("opt" in i.dataset){i.style.display="none";return}i.style.display="none";const p=i.parentElement;p.classList.add("ph");if(!p.dataset.l)p.dataset.l=i.alt};
$$("img").forEach(i=>{i.addEventListener("error",()=>bad(i));if(i.complete&&!i.naturalWidth&&i.getAttribute("src"))bad(i)});
/* lightbox */
const lb=$("lb"),shutLb=()=>{lb.classList.remove("open");document.body.style.overflow=""};
$$(".gi").forEach(b=>b.onclick=()=>{const i=b.querySelector("img");if(i.style.display==="none")return;$("lbi").src=i.src;$("lbi").alt=i.alt;$("lbc").textContent=b.dataset.c;lb.classList.add("open");document.body.style.overflow="hidden"});
$("lbx").onclick=shutLb;lb.onclick=e=>{if(e.target===lb)shutLb()};addEventListener("keydown",e=>{if(e.key==="Escape")shutLb()});
/* restaurant button -> WhatsApp */
$$("[data-wa]").forEach(a=>a.onclick=e=>{e.preventDefault();wa(a.dataset.wa)});
/* booking: room list is built from the room cards, so names and prices always match */
const rt=$("rt");
$$(".room").forEach(r=>{const o=document.createElement("option");o.value=r.dataset.id;o.textContent=r.dataset.name+" (₦"+r.dataset.price+"/night)";rt.appendChild(o)});
$$("[data-pick]").forEach(a=>a.addEventListener("click",()=>{rt.value=a.dataset.pick}));
const d=new Date(),today=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const ci=$("ci"),co=$("co");ci.min=co.min=today;
ci.onchange=()=>{co.min=ci.value||today;if(co.value&&co.value<=ci.value)co.value=""};
const bn=$("bn");
$("bf").onsubmit=e=>{e.preventDefault();
if(co.value<=ci.value){bn.textContent="Check-out date must be after check-in date.";bn.style.color="#e07a5f";return}
bn.style.color="";
wa("Hello J Venue, I would like to make a booking.\n\nName: "+$("nm").value+"\nPhone: "+$("ph").value+"\nEmail: "+$("em").value+"\nRoom: "+rt.options[rt.selectedIndex].text+"\nGuests: "+$("gu").value+"\nCheck-in: "+ci.value+"\nCheck-out: "+co.value);
bn.textContent="Opening WhatsApp to send your booking request...";
e.target.reset();ci.min=co.min=today};
/* contact */
$("cf").onsubmit=e=>{e.preventDefault();
wa("Hello J Venue,\n\nName: "+$("cn").value+"\nEmail: "+$("ce").value+"\n\n"+$("cm").value);
$("cn2").textContent="Opening WhatsApp...";e.target.reset()};
})();


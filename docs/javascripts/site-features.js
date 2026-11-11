(() => {
  "use strict";
  const BASE=new URL("/nu-cse-notes-store/",location.origin), BOOKMARK_KEY="nuCseSiteBookmarksV1", RECENT_KEY="nuCseRecentSearchesV1";
  const BACKUP_KEYS=["nuCseSemesterCgpaV2",BOOKMARK_KEY,RECENT_KEY,"__palette"];
  const $=(s,r=document)=>r.querySelector(s);
  const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k)||"null")??d;}catch(_){return d;}};
  const write=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true;}catch(_){return false;}};
  const safeURL=v=>{try{const u=new URL(v,location.href);return u.origin===location.origin&&u.pathname.startsWith(BASE.pathname)?u.href:null;}catch(_){return null;}};
  function page(){const title=$(".md-content h1")?.textContent?.trim()||document.title.replace(/\s+-\s+NU CSE Notes Store$/,"");const u=new URL(location.href);u.hash="";u.search="";return{title,url:u.href};}
  function bookmarks(){const v=read(BOOKMARK_KEY,[]);return Array.isArray(v)?v.filter(x=>x&&safeURL(x.url)):[];}
  function setBookmarks(v){write(BOOKMARK_KEY,v);updateBookmarks();}
  function updateBookmarks(){
    const items=bookmarks(),current=page(),exists=items.some(x=>x.url===current.url),toggle=$("#site-bookmark-current"),count=$("#site-utility-bookmarks-count"),list=$("#site-utility-bookmarks"),text=$("#site-utility-bookmarks-count-text");
    if(toggle){toggle.textContent=exists?"Remove bookmark":"Bookmark this page";toggle.setAttribute("aria-pressed",String(exists));}
    if(count)count.textContent=String(items.length);if(text)text.textContent=items.length+" saved page"+(items.length===1?"":"s");
    if(list){list.replaceChildren();items.forEach(item=>{const row=document.createElement("div");row.className="site-bookmark-item";const a=document.createElement("a");a.href=safeURL(item.url)||BASE.href;a.textContent=item.title||"Saved page";const b=document.createElement("button");b.type="button";b.textContent="Remove";b.addEventListener("click",()=>setBookmarks(bookmarks().filter(x=>x.url!==item.url)));row.append(a,b);list.appendChild(row);});}
  }
  function openSearch(){const trigger=$('label[for="__search"]')||$(".md-header__button[for='__search']");if(trigger)trigger.click();const input=$("#__search");if(input)input.focus();}
  function createUtility(){
    if($("#site-utility"))return;
    const u=document.createElement("div");u.id="site-utility";u.className="site-utility";
    u.innerHTML='<button type="button" id="site-search-open" class="site-utility-button" title="Global search (Ctrl+K)">⌕ <span>Search</span></button><button type="button" id="site-bookmark-current" class="site-utility-button" aria-pressed="false">Bookmark this page</button><button type="button" id="site-bookmarks-open" class="site-utility-button" aria-expanded="false">My bookmarks <span id="site-utility-bookmarks-count">0</span></button><button type="button" id="site-install-app" class="site-utility-button" hidden>Install app</button><section id="site-utility-panel" class="site-utility-panel" hidden aria-label="Saved bookmarks"><div class="site-utility-panel-heading"><strong>My bookmarks</strong><button type="button" id="site-utility-close" aria-label="Close bookmarks">×</button></div><p id="site-utility-bookmarks-count-text"></p><div id="site-utility-bookmarks"></div><a id="site-manage-bookmarks" href="#">Manage bookmarks and backup</a></section>';
    document.body.appendChild(u);$("#site-manage-bookmarks").href=new URL("tools/bookmarks/",BASE).href;
    $("#site-search-open").addEventListener("click",openSearch);
    $("#site-bookmark-current").addEventListener("click",()=>{const p=page(),items=bookmarks();setBookmarks(items.some(x=>x.url===p.url)?items.filter(x=>x.url!==p.url):[{...p,savedAt:new Date().toISOString()},...items].slice(0,200));});
    const panel=$("#site-utility-panel"),opener=$("#site-bookmarks-open"),toggle=show=>{panel.hidden=!show;opener.setAttribute("aria-expanded",String(show));};
    opener.addEventListener("click",()=>toggle(panel.hidden));$("#site-utility-close").addEventListener("click",()=>toggle(false));updateBookmarks();
  }
  function renderBookmarksPage(){
    const target=$("#site-bookmark-list");if(!target)return;const items=bookmarks();target.replaceChildren();
    items.forEach(item=>{const row=document.createElement("p"),a=document.createElement("a"),b=document.createElement("button");a.href=safeURL(item.url)||BASE.href;a.textContent=item.title||"Saved page";b.type="button";b.className="md-button";b.textContent="Remove";b.addEventListener("click",()=>{setBookmarks(bookmarks().filter(x=>x.url!==item.url));renderBookmarksPage();});row.className="site-bookmark-page-row";row.append(a,b);target.appendChild(row);});
    const c=$("#site-bookmark-count"),e=$("#site-bookmark-empty");if(c)c.textContent=items.length+" saved page"+(items.length===1?"":"s");if(e)e.hidden=items.length>0;
  }
  function setupLibrary(){
    const grid=$("#notes-library-grid");if(!grid)return;const search=$("#library-search"),subject=$("#library-subject"),type=$("#library-type"),count=$("#library-count"),empty=$("#library-empty"),cards=Array.from(grid.querySelectorAll("li"));
    function apply(){const q=(search.value||"").toLowerCase().trim(),s=subject.value,t=type.value;let visible=0;cards.forEach(card=>{const m=card.querySelector(".library-tags"),hay=(card.textContent+" "+(m?.dataset.search||"")).toLowerCase(),ok=(!q||hay.includes(q))&&(s==="all"||m?.dataset.subject===s)&&(t==="all"||m?.dataset.type===t);card.hidden=!ok;if(ok)visible++;});count.textContent="Showing "+visible+" of "+cards.length+" resources";empty.hidden=visible>0;}
    search.addEventListener("input",apply);subject.addEventListener("change",apply);type.addEventListener("change",apply);apply();
  }
  function setupBackup(){
    const exp=$("#site-export-data"),imp=$("#site-import-data"),status=$("#site-backup-status");if(!exp||!imp)return;
    exp.addEventListener("click",()=>{const data={};BACKUP_KEYS.forEach(k=>{const v=localStorage.getItem(k);if(v!==null)data[k]=v;});const blob=new Blob([JSON.stringify({schemaVersion:1,site:"NU CSE Notes Store",exportedAt:new Date().toISOString(),data},null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="nu-cse-notes-store-backup-"+new Date().toISOString().slice(0,10)+".json";a.click();URL.revokeObjectURL(url);status.textContent="Backup exported. Keep the JSON file somewhere safe.";});
    imp.addEventListener("change",async()=>{const file=imp.files?.[0];if(!file)return;try{const p=JSON.parse(await file.text());if(p.schemaVersion!==1||!p.data||typeof p.data!=="object")throw new Error("Unsupported backup format.");if(!confirm("Import this backup? Matching local app data will be replaced."))return;BACKUP_KEYS.forEach(k=>{if(Object.prototype.hasOwnProperty.call(p.data,k))localStorage.setItem(k,String(p.data[k]));});status.textContent="Backup imported. Reloading...";location.reload();}catch(e){status.textContent="Could not import backup: "+e.message;}finally{imp.value="";}});
  }
  function setupPWA(){
    const m=document.createElement("link");m.rel="manifest";m.href=new URL("manifest.webmanifest",BASE).href;document.head.appendChild(m);
    const icon=document.createElement("link");icon.rel="icon";icon.type="image/svg+xml";icon.href=new URL("assets/icons/app-icon.svg",BASE).href;document.head.appendChild(icon);
    const color=document.createElement("meta");color.name="theme-color";color.content="#173f35";document.head.appendChild(color);
    if("serviceWorker"in navigator&&location.protocol==="https:")navigator.serviceWorker.register(new URL("service-worker.js",BASE).href,{scope:BASE.pathname}).catch(()=>{});
    const install=$("#site-install-app");window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();window.__nuCseInstallPrompt=e;if(install)install.hidden=false;});
    install?.addEventListener("click",async()=>{const p=window.__nuCseInstallPrompt;if(!p)return;p.prompt();await p.userChoice;window.__nuCseInstallPrompt=null;install.hidden=true;});
    window.addEventListener("appinstalled",()=>{if(install)install.hidden=true;});
  }
  function setupShortcuts(){
    document.addEventListener("keydown",e=>{const tag=e.target?.tagName?.toLowerCase(),typing=tag==="input"||tag==="textarea"||e.target?.isContentEditable;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openSearch();}else if(e.key==="/"&&!typing&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault();openSearch();}else if(e.key==="Escape"){const p=$("#site-utility-panel");if(p&&!p.hidden){p.hidden=true;$("#site-bookmarks-open")?.setAttribute("aria-expanded","false");}}});
    const input=$("#__search");if(input){input.addEventListener("change",()=>saveSearch(input));input.addEventListener("keydown",e=>{if(e.key==="Enter")saveSearch(input);});}
  }
  function saveSearch(input){const q=input.value.trim();if(q.length<2)return;const old=read(RECENT_KEY,[]),next=[q,...(Array.isArray(old)?old:[]).filter(x=>x!==q)].slice(0,8);write(RECENT_KEY,next);}
  function init(){createUtility();renderBookmarksPage();setupLibrary();setupBackup();setupPWA();setupShortcuts();window.addEventListener("storage",()=>{updateBookmarks();renderBookmarksPage();});}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
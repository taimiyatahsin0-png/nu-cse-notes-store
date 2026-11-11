"use strict";
const PREFIX="nu-cse-notes-store-",VERSION="v1",SHELL=PREFIX+"shell-"+VERSION,PAGES=PREFIX+"pages-"+VERSION,BASE=new URL("./",self.location.href);
const CORE=["./","./offline/","./tools/cgpa-calculator/","./tools/notes-library/","./tools/formula-sheets/","./tools/bookmarks/"].map(p=>new URL(p,BASE).href);
self.addEventListener("install",event=>event.waitUntil((async()=>{const c=await caches.open(SHELL);await c.addAll(CORE);await self.skipWaiting();})()));
self.addEventListener("activate",event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==SHELL&&k!==PAGES).map(k=>caches.delete(k)));await self.clients.claim();})()));
self.addEventListener("fetch",event=>{
 const req=event.request;if(req.method!=="GET")return;const url=new URL(req.url);if(url.origin!==self.location.origin||!url.href.startsWith(BASE.href))return;
 if(req.mode==="navigate"){event.respondWith((async()=>{const c=await caches.open(PAGES);try{const r=await fetch(req);if(r&&r.ok)c.put(req,r.clone());return r;}catch(_){return(await c.match(req))||(await caches.match(req))||(await caches.match(new URL("offline/",BASE).href));}})());return;}
 event.respondWith((async()=>{const hit=await caches.match(req);if(hit)return hit;try{const r=await fetch(req);if(r&&r.ok){const c=await caches.open(PAGES);c.put(req,r.clone());}return r;}catch(_){return new Response("This resource is not available offline yet.",{status:503,headers:{"Content-Type":"text/plain; charset=utf-8"}});}})());
});
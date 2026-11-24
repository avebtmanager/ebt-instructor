/* EBT Instructor · service worker: la app abre sin internet; los datos se sincronizan con la base cuando hay conexión. */
var CACHE='ei-shell-202611232050';
var SHELL=['./','./index.html','./app.js','./config.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(SHELL);}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE&&k.indexOf('ei-')===0;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){
  var req=e.request;if(req.method!=='GET')return;var url=new URL(req.url);
  if(url.hostname.indexOf('supabase.co')>=0)return;
  if(url.origin===location.origin){
    e.respondWith(fetch(req).then(function(r){if(r&&r.ok){var cp=r.clone();caches.open(CACHE).then(function(c){c.put(req,cp);});}return r;}).catch(function(){return caches.match(req,{ignoreSearch:true}).then(function(m){return m||caches.match('./index.html');});}));
    return;
  }
  if(url.hostname==='cdnjs.cloudflare.com'||url.hostname==='cdn.jsdelivr.net'){
    e.respondWith(caches.open(CACHE).then(function(c){return c.match(req).then(function(m){var net=fetch(req).then(function(r){if(r&&(r.ok||r.type==='opaque'))c.put(req,r.clone());return r;}).catch(function(){return m;});return m||net;});}));
  }
});

'use strict';
const fs=require('node:fs');const assert=require('node:assert/strict');const vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');const script=fs.readFileSync('script.js','utf8');const availability=fs.readFileSync('availability.js','utf8');const gallery=fs.readFileSync('phase2-gallery.js','utf8');
for(const [name,src] of [['script.js',script],['availability.js',availability],['phase2-gallery.js',gallery]]){new vm.Script(src,{filename:name});console.log('PASS syntax',name)}
for(const id of ['availability-form','availability-city','availability-date','availability-time','availability-duration'])assert.match(html,new RegExp('id="'+id+'"'));
for(const path of ['phase2.css','phase2-gallery.js','availability.js'])assert.ok(html.includes(path),'Missing asset '+path);
const keys=[...html.matchAll(/data-i="([^"]+)"/g)].map(m=>m[1]);for(const key of keys)assert.ok(script.includes('"'+key+'":'),'Missing translation '+key);
for(const lang of ['pt','fr','en','nl','es'])assert.ok(script.includes('"'+lang+'": {'),'Missing locale '+lang);
assert.match(availability,/encodeURIComponent\(message\)/);assert.match(availability,/reportValidity\(\)/);assert.match(gallery,/Escape/);assert.match(gallery,/touchend/);assert.match(html,/rel="canonical"/);
console.log('PASS booking fields, asset links, '+keys.length+' translation references, locale presence, gallery controls, canonical metadata');

import{A as s,f as d,G as u}from"./vendor.16c312a1.js";const c=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const e of i.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&o(e)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};c();const a=async()=>{let t=new s;document.body.style.margin="0",t.renderer.view.style.position="absolute",t.renderer.view.style.display="block",t.renderer.resize(window.innerWidth,window.innerHeight);const l=new d.BlurFilter;l.blur=1.5;for(let n=0;n<window.innerWidth/50;n+=1)for(let o=0;o<window.innerHeight/50;o+=1){let r=n*50,i=o*50,e=new u;n%2==0&&o%2==0?(e.beginFill(7373434),e.endFill(),e.lineStyle(5,6815675,1),e.bezierCurveTo(0,25,50,25,50,50),e.bezierCurveTo(50,25,0,25,50,0),e.bezierCurveTo(10,20,50,30,0,50)):n%2==0?(e.lineStyle(5,4408218,1),e.bezierCurveTo(25,0,25,30,50,50),e.bezierCurveTo(50,0,25,30,0,50)):o%2==0?(e.lineStyle(5,8919325,1),e.bezierCurveTo(25,0,25,50,50,50),e.bezierCurveTo(25,0,25,50,50,0)):(e.lineStyle(5,16761088,1),e.bezierCurveTo(50,25,0,25,0,50),e.bezierCurveTo(0,25,50,25,50,0)),e.x=r,e.y=i,t.stage.addChild(e)}t.stage.filters=[l],window.addEventListener("resize",n=>{t.renderer.resize(window.innerWidth,window.innerHeight)}),document.body.appendChild(t.view)};a();

import{r as t,q as V,o as v,i as p,a as e,w as s,aj as i,x as f,u as b,h as x,t as g,F}from"./index-fc3fba16.js";import{V as T,a as m}from"./VRadioGroup-12603a07.js";import{V as _}from"./VForm-21db8aa9.js";const h={__name:"SignToMinistry",setup(k){const u=t(""),n=t(""),r=t(""),{sendForm:c}=V(),d=t({required:o=>!!o||"Обязательно.",counter:o=>o.length<=50||"Максимум 50 символов"});return(o,a)=>(v(),p(F,null,[e(_,{class:"ma-2"},{default:s(()=>[e(i,{label:"Cфера вашей деятельности",modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=l=>u.value=l),variant:"outlined",class:"ma-2",counter:"",maxlength:"50",rules:[d.value.counter]},null,8,["modelValue","rules"]),e(i,{label:"Предпочтения по служению",modelValue:n.value,"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),variant:"outlined",class:"ma-2",counter:"",maxlength:"50",rules:[d.value.counter]},null,8,["modelValue","rules"]),e(T,{modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=l=>r.value=l),class:"my-1",label:"Как ответить Вам на заполненную анкету?",density:"comfortable",color:"success","hide-details":""},{default:s(()=>[e(m,{label:"What's App",value:"WhatsApp"}),e(m,{label:"Telegram",value:"Telegram"}),e(m,{label:"По телефону",value:"По телефону"})]),_:1},8,["modelValue"])]),_:1}),e(g,null,{default:s(()=>[e(f,{block:"",variant:"outlined",onClick:a[3]||(a[3]=l=>b(c)("ministry",{action:u.value,choice:n.value,answer:r.value},"Записаться на консультацию"))},{default:s(()=>[x(" Записаться на консультацию ")]),_:1})]),_:1})],64))}};export{h as _};

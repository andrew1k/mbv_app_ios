import{r as N,ax as M,ay as w,az as C,aA as P,I as S,o as f,c as _,w as l,V as g,a as t,a3 as d,h as u,a5 as s,T as B,l as r,a8 as m,m as v,i as y,j as b,F as D}from"./index-fc3fba16.js";const F=["href"],T=["href"],A={__name:"UserPage",props:{id:{type:String}},setup(x){const V=x,a=N({});M(async()=>{const o=await w(C(P,"users",V.id));o.exists()&&(a.value=o.data())});const k=S(()=>{var e;const o=new Date((e=a.value)==null?void 0:e.birthDate),c=new Date;return c.getFullYear()-o.getFullYear()-(c.getMonth()<o.getMonth()||c.getMonth()===o.getMonth()&&c.getDate()<o.getDate())});return(o,c)=>(f(),_(g,{rounded:"0",variant:"text"},{default:l(()=>[t(g,{class:"ma-2 text-mono"},{default:l(()=>[t(d,{class:"ma-0 py-0"},{default:l(()=>{var e,n,h,p;return[u(s(((e=a.value)==null?void 0:e.firstName)+" "+((n=a.value)==null?void 0:n.secondName))+" ",1),t(B,{icon:(h=a.value)!=null&&h.verificationPerson?"mdi-check-decagram":"mdi-check-decagram-outline",color:(p=a.value)!=null&&p.verificationPerson?"green":"red",size:"x-small"},null,8,["icon","color"]),t(r,null,{default:l(()=>{var i;return[u(s(((i=a.value)==null?void 0:i.birthDate)+" => ")+" ",1),m("b",null,s(k.value),1)]}),_:1}),t(r,null,{default:l(()=>{var i;return[u(s((i=a.value)==null?void 0:i.personGender),1)]}),_:1})]}),_:1}),t(d,{class:"ma-0 py-0"},{default:l(()=>{var e,n;return[m("a",{href:`mailto:${(e=a.value)==null?void 0:e.email}`},s((n=a.value)==null?void 0:n.email),9,F)]}),_:1}),t(d,{class:"ma-0 py-0"},{default:l(()=>{var e,n;return[m("a",{href:`phone:+7${(e=a.value)==null?void 0:e.phoneNumber}`},"+7"+s((n=a.value)==null?void 0:n.phoneNumber),9,T)]}),_:1}),t(v),t(d,{class:"ma-0 py-0"},{default:l(()=>[u(" Семья "),t(r,null,{default:l(()=>{var e;return[u(" Статус отношений: "+s((e=a.value)==null?void 0:e.familyStatus),1)]}),_:1}),t(r,null,{default:l(()=>{var e;return[u(" Дети: "+s((e=a.value)==null?void 0:e.childrenStatus),1)]}),_:1})]),_:1}),t(v),t(d,{class:"ma-0 py-0"},{default:l(()=>[u(" Церковь "),t(r,null,{default:l(()=>{var e;return[u(" Церковный Уровень: "),m("b",null,s((e=a.value)==null?void 0:e.churchLevel),1)]}),_:1}),t(r,null,{default:l(()=>{var e;return[u(" Членство церкви: "+s((e=a.value)!=null&&e.churchMembership?"да":"нет"),1)]}),_:1}),t(r,null,{default:l(()=>{var e;return[u(" Верифицирован в приложении: "+s((e=a.value)!=null&&e.verificationPerson?"да":"нет"),1)]}),_:1}),t(r,null,{default:l(()=>{var e,n;return[u(" Дата крещения: "+s((e=a.value)!=null&&e.baptismDate?(n=a.value)==null?void 0:n.baptismDate:"нет"),1)]}),_:1}),t(r,null,{default:l(()=>{var e;return[u(" Пройденные шаги: "+s((e=a.value)==null?void 0:e.stepsPassed),1)]}),_:1}),t(r,null,{default:l(()=>{var e;return[u(" Команды служений: "+s((e=a.value)==null?void 0:e.servTeam),1)]}),_:1})]),_:1}),t(v),t(d,null,{default:l(()=>[u(" Комментарии: "),(f(!0),y(D,null,b(a.value.adminComments,(e,n)=>(f(),_(r,{key:n},{default:l(()=>[u(s(e),1)]),_:2},1024))),128))]),_:1}),t(v),t(d,null,{default:l(()=>[u(" Записан на мероприятия: "),(f(!0),y(D,null,b(a.value.signedEvents,(e,n)=>(f(),_(r,{key:n},{default:l(()=>[u(s(e),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}};export{A as default};

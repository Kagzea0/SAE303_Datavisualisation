var e=globalThis,a={},r={},t=e.parcelRequire30ab;null==t&&((t=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){r[e]=a},e.parcelRequire30ab=t),t.register;var i=t("2RVy2"),n=t("cX88K");(0,i.Chart).register(i.Colors,i.BarController,i.BarElement,i.CategoryScale,i.LinearScale,i.Legend),async function(){let e=await (0,n.getAquisitionsByYear)();new i.Chart(document.getElementById("acquisitions"),{type:"bar",options:{animation:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}}},data:{labels:e.map(e=>e.year),datasets:[{label:"Acquisitions by year",data:e.map(e=>e.count)}]}})}();
//# sourceMappingURL=index.b918c16a.js.map

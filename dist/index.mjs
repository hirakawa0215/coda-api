import t from"axios";function e(t,e){try{var r=t()}catch(t){return e(t)}return r&&r.then?r.then(void 0,e):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var r=function(e){t.defaults.baseURL="https://coda.io/apis/v1beta1",t.defaults.headers.common.Authorization="Bearer "+e};r.prototype.request=function(r,o,n){void 0===o&&(o={}),void 0===n&&(n="GET");try{return Promise.resolve(e(function(){var e=["POST","PUT","PATCH"].includes(n.toUpperCase())?{url:r,method:n,data:o}:{url:r,method:n,params:o};return Promise.resolve(t(e))},function(t){console.error(t)}))}catch(t){return Promise.reject(t)}},r.prototype.deleteWithBody=function(r,o){void 0===o&&(o={});try{return Promise.resolve(e(function(){return Promise.resolve(t({url:r,method:"DELETE",data:o}))},function(t){console.error(t)}))}catch(t){return Promise.reject(t)}};var o=function(t,e){this.API=t,Object.assign(this,e)};o.prototype.listSections=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+e.id+"/sections",t)).then(function(t){return t.data.items.map(function(t){return new u(Object.assign({},t,{docId:e.id}))})})}catch(t){return Promise.reject(t)}},o.prototype.getSection=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+e.id+"/sections/"+t)).then(function(t){return new u(Object.assign({},t.data,{docId:e.id}))})}catch(t){return Promise.reject(t)}},o.prototype.listFolders=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+e.id+"/folders",t)).then(function(t){return t.data.items.map(function(t){return new a(Object.assign({},t,{docId:e.id}))})})}catch(t){return Promise.reject(t)}},o.prototype.getFolder=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+e.id+"/folders/"+t)).then(function(t){return new a(Object.assign({},t.data,{docId:e.id}))})}catch(t){return Promise.reject(t)}},o.prototype.listTables=function(){try{var t=this;return Promise.resolve(t.API.request("/docs/"+t.id+"/tables")).then(function(e){return e.data.items.map(function(e){return new c(t.API,Object.assign({},e,{docId:t.id}))})})}catch(t){return Promise.reject(t)}},o.prototype.getTable=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+e.id+"/tables/"+t)).then(function(t){return new c(e.API,Object.assign({},t.data,{docId:e.id}))})}catch(t){return Promise.reject(t)}},o.prototype.listControls=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+e.id+"/controls",t)).then(function(t){return t.data.items.map(function(t){return new d(Object.assign({},t,{docId:e.id}))})})}catch(t){return Promise.reject(t)}},o.prototype.getControl=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+e.id+"/controls/"+t)).then(function(t){return new d(Object.assign({},t.data,{docId:e.id}))})}catch(t){return Promise.reject(t)}};var n=function(t){Object.assign(this,t)},s=function(t){if(!Array.isArray(t))throw new Error("`rows` must be an array");if(!t.length)throw new Error("Must include at least one row when calling `insertRows`");return t.map(function(t){if(Array.isArray(t)){if(t.some(function(t){return t.hasOwnProperty("column")&&t.hasOwnProperty("value")}))return{cells:t};throw new Error("A row must either be an array of objects for each column, or else one object of column/value pairs..")}var e=[];return Object.keys(t).forEach(function(r){e.push({column:r,value:t[r]})}),{cells:e}})},i=function(t,e){this.API=t,Object.assign(this,e)};i.prototype.listValues=function(){var t=this,e=[];return Object.keys(this.values).forEach(function(r){e.push({column:r,value:t.values[r]})}),e},i.prototype.update=function(t){try{var e=s([t]);return Promise.resolve(this.API.request("/docs/"+this.docId+"/tables/"+this.tableId+"/rows/"+this.id,{row:e[0]},"PUT")).then(function(t){return 202===t.status})}catch(t){return Promise.reject(t)}},i.prototype.delete=function(){try{return Promise.resolve(this.API.request("/docs/"+this.docId+"/tables/"+this.tableId+"/rows/"+this.id,{},"DELETE")).then(function(t){return 202===t.status})}catch(t){return Promise.reject(t)}};var c=function(t,e){this.API=t,Object.assign(this,e)};c.prototype.listColumns=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+e.docId+"/tables/"+e.id+"/columns",t)).then(function(t){return t.data.items.map(function(t){return new n(Object.assign({},t,{docId:e.docId,tableId:e.id}))})})}catch(t){return Promise.reject(t)}},c.prototype.getColumn=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+e.docId+"/tables/"+e.id+"/columns/"+t)).then(function(t){return new n(Object.assign({},t.data,{docId:e.docId,tableId:e.id}))})}catch(t){return Promise.reject(t)}},c.prototype.listRows=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+e.docId+"/tables/"+e.id+"/rows",t)).then(function(t){return t.data.items.map(function(t){return new i(e.API,Object.assign({},t,{docId:e.docId,tableId:e.id}))})})}catch(t){return Promise.reject(t)}},c.prototype.listRowsPaginatedByToken=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+e.docId+"/tables/"+e.id+"/rows",t)).then(function(t){var r=t.data;return{items:r.items.map(function(t){return new i(e.API,Object.assign({},t,{docId:e.docId,tableId:e.id}))}),token:r.nextPageToken}})}catch(t){return Promise.reject(t)}},c.prototype.getRow=function(t,e){try{var r=this;return Promise.resolve(r.API.request("/docs/"+r.docId+"/tables/"+r.id+"/rows/"+t,e)).then(function(t){return new i(r.API,Object.assign({},t.data,{docId:r.docId,tableId:r.id}))})}catch(t){return Promise.reject(t)}},c.prototype.insertRows=function(t,e){void 0===t&&(t=[]),void 0===e&&(e=[]);try{var r=s(t);return Promise.resolve(this.API.request("/docs/"+this.docId+"/tables/"+this.id+"/rows",{rows:r,keyColumns:e},"POST")).then(function(t){return 202===t.status})}catch(t){return Promise.reject(t)}},c.prototype.updateRow=function(t,e){try{var r=s([e]);return Promise.resolve(this.API.request("/docs/"+this.docId+"/tables/"+this.id+"/rows/"+t,{row:r[0]},"PUT")).then(function(t){return 202===t.status})}catch(t){return Promise.reject(t)}},c.prototype.deleteRow=function(t){try{return Promise.resolve(this.API.request("/docs/"+this.docId+"/tables/"+this.id+"/rows/"+t,{},"DELETE")).then(function(t){return 202===t.status})}catch(t){return Promise.reject(t)}},c.prototype.deleteRows=function(t){try{return Promise.resolve(this.API.deleteWithBody("/docs/"+this.docId+"/tables/"+this.id+"/rows",{rowIds:t})).then(function(t){return 202===t.status})}catch(t){return Promise.reject(t)}};var u=function(t){Object.assign(this,t)},a=function(t){Object.assign(this,t)},d=function(t){Object.assign(this,t)},h=function(t){this.API=new r(t)};h.prototype.whoAmI=function(){try{return Promise.resolve(this.API.request("/whoami")).then(function(t){return t.data})}catch(t){return Promise.reject(t)}},h.prototype.listDocs=function(t){void 0===t&&(t={});try{var e=this;return Promise.resolve(e.API.request("/docs",t)).then(function(t){return t.data.items.map(function(t){return new o(e.API,t)})})}catch(t){return Promise.reject(t)}},h.prototype.getDoc=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+t)).then(function(t){return new o(e.API,t.data)})}catch(t){return Promise.reject(t)}},h.prototype.listSections=function(t,e){try{return Promise.resolve(this.API.request("/docs/"+t+"/sections",e)).then(function(e){return e.data.items.map(function(e){return new u(Object.assign({},e,{docId:t}))})})}catch(t){return Promise.reject(t)}},h.prototype.getSection=function(t,e){try{return Promise.resolve(this.API.request("/docs/"+t+"/sections/"+e)).then(function(e){return new u(Object.assign({},e.data,{docId:t}))})}catch(t){return Promise.reject(t)}},h.prototype.listFolders=function(t,e){try{return Promise.resolve(this.API.request("/docs/"+t+"/folders",e)).then(function(e){return e.data.items.map(function(e){return new a(Object.assign({},e,{docId:t}))})})}catch(t){return Promise.reject(t)}},h.prototype.getFolder=function(t,e){try{return Promise.resolve(this.API.request("/docs/"+t+"/folders/"+e)).then(function(e){return new a(Object.assign({},e.data,{docId:t}))})}catch(t){return Promise.reject(t)}},h.prototype.listTables=function(t){try{var e=this;return Promise.resolve(e.API.request("/docs/"+t+"/tables")).then(function(r){return r.data.items.map(function(r){return new c(e.API,Object.assign({},r,{docId:t}))})})}catch(t){return Promise.reject(t)}},h.prototype.getTable=function(t,e){try{var r=this;return Promise.resolve(r.API.request("/docs/"+t+"/tables/"+e)).then(function(e){return new c(r.API,Object.assign({},e.data,{docId:t}))})}catch(t){return Promise.reject(t)}},h.prototype.listColumns=function(t,e,r){try{return Promise.resolve(this.API.request("/docs/"+t+"/tables/"+e+"/columns",r)).then(function(r){return r.data.items.map(function(r){return new n(Object.assign({},r,{docId:t,tableId:e}))})})}catch(t){return Promise.reject(t)}},h.prototype.getColumn=function(t,e,r){try{return Promise.resolve(this.API.request("/docs/"+t+"/tables/"+e+"/columns/"+r)).then(function(r){return new n(Object.assign({},r.data,{docId:t,tableId:e}))})}catch(t){return Promise.reject(t)}},h.prototype.listRows=function(t,e,r){try{var o=this;return Promise.resolve(o.API.request("/docs/"+t+"/tables/"+e+"/rows",r)).then(function(r){return r.data.items.map(function(r){return new i(o.API,Object.assign({},r,{docId:t,tableId:e}))})})}catch(t){return Promise.reject(t)}},h.prototype.getRow=function(t,e,r,o){try{var n=this;return Promise.resolve(n.API.request("/docs/"+t+"/tables/"+e+"/rows/"+r,o)).then(function(r){return new i(n.API,Object.assign({},r.data,{docId:t,tableId:e}))})}catch(t){return Promise.reject(t)}},h.prototype.insertRows=function(t,e,r,o){void 0===r&&(r=[]),void 0===o&&(o=[]);try{var n=s(r);return Promise.resolve(this.API.request("/docs/"+t+"/tables/"+e+"/rows",{rows:n,keyColumns:o},"POST")).then(function(t){return 202===t.status})}catch(t){return Promise.reject(t)}},h.prototype.updateRow=function(t,e,r,o){try{var n=s([o]);return Promise.resolve(this.API.request("/docs/"+t+"/tables/"+e+"/rows/"+r,{row:n[0]},"PUT")).then(function(t){return 202===t.status})}catch(t){return Promise.reject(t)}},h.prototype.deleteRow=function(t,e,r){try{return Promise.resolve(this.API.request("/docs/"+t+"/tables/"+e+"/rows/"+r,{},"DELETE")).then(function(t){return 202===t.status})}catch(t){return Promise.reject(t)}},h.prototype.deleteRows=function(t,e,r){try{return Promise.resolve(this.API.deleteWithBody("/docs/"+t+"/tables/"+e+"/rows",{rowIds:r})).then(function(t){return 202===t.status})}catch(t){return Promise.reject(t)}},h.prototype.listControls=function(t,e){try{return Promise.resolve(this.API.request("/docs/"+t+"/controls",e)).then(function(e){return e.data.items.map(function(e){return new d(Object.assign({},e,{docId:t}))})})}catch(t){return Promise.reject(t)}},h.prototype.getControl=function(t,e){try{return Promise.resolve(this.API.request("/docs/"+t+"/controls/"+e)).then(function(e){return new d(Object.assign({},e.data,{docId:t}))})}catch(t){return Promise.reject(t)}};export default h;
//# sourceMappingURL=index.mjs.map

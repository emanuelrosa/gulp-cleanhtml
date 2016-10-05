
var str = "Elit integer porta a eros, lacus, tempor ut hac enim est, pulvinar urna lorem elit! Penatibus quis placerat! Porta dolor nec, sed? Nisi tincidunt pulvinar rhoncus rhoncus? Nascetur! Scelerisque, nascetur auctor cum pellentesque, ac sit dictumst! Sagittis dignissim }} {{. Diam";

var mapObj = {
   elit: "----------",
   integer: "----------",
   porta: "----------",
   '}} {{' : '}}{{',
};

var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
str = str.replace(re, function(matched){
  return mapObj[matched.toLowerCase()];
});

console.log(str);
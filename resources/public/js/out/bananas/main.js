// Compiled by ClojureScript 0.0-2913 {}
goog.provide('bananas.main');
goog.require('cljs.core');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
goog.require('goog.history.Html5History');
goog.require('reagent.core');
bananas.main.state = reagent.core.atom.call(null,(0));
bananas.main.inc_com = (function inc_com(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,bananas.main.state,cljs.core.inc);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),[cljs.core.str("Click"),cljs.core.str(cljs.core.deref.call(null,bananas.main.state))].join('')], null)], null);
});
bananas.main.init = (function init(){
reagent.core.render.call(null,bananas.main.inc_com.call(null),document.getElementById("root"));

return alert("HALLO!");
});
goog.exportSymbol('bananas.main.init', bananas.main.init);

// Compiled by ClojureScript 0.0-2913 {}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('reagent.debug');
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
reagent.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"className",new cljs.core.Keyword(null,"for","for",-1323786319),"htmlFor",new cljs.core.Keyword(null,"charset","charset",-1063822193),"charSet"], null);
reagent.impl.template.hiccup_tag_QMARK_ = (function hiccup_tag_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function valid_tag_QMARK_(x){
return (reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x));
});
reagent.impl.template.to_js_val = (function to_js_val(v){
if((typeof v === 'string') || (typeof v === 'number')){
return v;
} else {
if((function (){var G__5753 = v;
if(G__5753){
var bit__4658__auto__ = (G__5753.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4658__auto__) || (G__5753.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})()){
return cljs.core.name.call(null,v);
} else {
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs.core.clj__GT_js.call(null,v);
} else {
if(cljs.core.ifn_QMARK_.call(null,v)){
return (function() { 
var G__5754__delegate = function (args){
return cljs.core.apply.call(null,v,args);
};
var G__5754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5755__i = 0, G__5755__a = new Array(arguments.length -  0);
while (G__5755__i < G__5755__a.length) {G__5755__a[G__5755__i] = arguments[G__5755__i + 0]; ++G__5755__i;}
  args = new cljs.core.IndexedSeq(G__5755__a,0);
} 
return G__5754__delegate.call(this,args);};
G__5754.cljs$lang$maxFixedArity = 0;
G__5754.cljs$lang$applyTo = (function (arglist__5756){
var args = cljs.core.seq(arglist__5756);
return G__5754__delegate(args);
});
G__5754.cljs$core$IFn$_invoke$arity$variadic = G__5754__delegate;
return G__5754;
})()
;
} else {
return v;

}
}
}
}
});
reagent.impl.template.undash_prop_name = (function undash_prop_name(n){
var or__3984__auto__ = reagent.impl.template.attr_aliases.call(null,n);
if(cljs.core.truth_(or__3984__auto__)){
return or__3984__auto__;
} else {
return reagent.impl.util.dash_to_camel.call(null,n);
}
});
reagent.impl.template.cached_prop_name = reagent.impl.util.memoize_1.call(null,reagent.impl.template.undash_prop_name);
reagent.impl.template.convert_prop_value = (function convert_prop_value(x){
if(typeof x === 'string'){
return x;
} else {
if(typeof x === 'number'){
return x;
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__5758 = o;
(G__5758[reagent.impl.template.cached_prop_name.call(null,k)] = reagent.impl.template.to_js_val.call(null,v));

return G__5758;
}),{},x);
} else {
return reagent.impl.template.to_js_val.call(null,x);

}
}
}
});
reagent.impl.template.set_id_class = (function set_id_class(props,p__5759){
var vec__5761 = p__5759;
var id = cljs.core.nth.call(null,vec__5761,(0),null);
var class$ = cljs.core.nth.call(null,vec__5761,(1),null);
var pid = (props["id"]);
(props["id"] = ((cljs.core.some_QMARK_.call(null,pid))?pid:id));

if(cljs.core.some_QMARK_.call(null,class$)){
var old = (props["className"]);
return (props["className"] = ((cljs.core.some_QMARK_.call(null,old))?[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join(''):class$));
} else {
return null;
}
});
reagent.impl.template.convert_props = (function convert_props(props,id_class){
if((cljs.core.empty_QMARK_.call(null,props)) && ((id_class == null))){
return null;
} else {
var objprops = cljs.core.reduce_kv.call(null,(function (o,k,v){
var pname_5762 = reagent.impl.template.cached_prop_name.call(null,k);
(o[pname_5762] = reagent.impl.template.convert_prop_value.call(null,v));

return o;
}),{},props);
if(cljs.core.some_QMARK_.call(null,id_class)){
reagent.impl.template.set_id_class.call(null,objprops,id_class);
} else {
}

return objprops;
}
});
reagent.impl.template.input_unmount = (function input_unmount(this$){
return (this$["cljsInputValue"] = null);
});
reagent.impl.template.input_set_value = (function input_set_value(this$){
var temp__4130__auto__ = (this$["cljsInputValue"]);
if((temp__4130__auto__ == null)){
return null;
} else {
var value = temp__4130__auto__;
(this$["cljsInputDirty"] = false);

var node = (this$["getDOMNode"])();
if(cljs.core.not_EQ_.call(null,value,(node["value"]))){
return (node["value"] = value);
} else {
return null;
}
}
});
reagent.impl.template.input_handle_change = (function input_handle_change(this$,on_change,e){
var res = on_change.call(null,e);
if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_later.call(null,((function (res){
return (function (){
return reagent.impl.template.input_set_value.call(null,this$);
});})(res))
);
}

return res;
});
reagent.impl.template.input_render_setup = (function input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__3972__auto__ = (jsprops["hasOwnProperty"])("onChange");
if(cljs.core.truth_(and__3972__auto__)){
return (jsprops["hasOwnProperty"])("value");
} else {
return and__3972__auto__;
}
})())){
var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
(this$["cljsInputValue"] = value);

delete jsprops["value"];

var G__5765 = jsprops;
(G__5765["defaultValue"] = value);

(G__5765["onChange"] = ((function (G__5765,v,value,on_change){
return (function (p1__5763_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__5763_SHARP_);
});})(G__5765,v,value,on_change))
);

return G__5765;
} else {
return (this$["cljsInputValue"] = null);
}
});
reagent.impl.template.input_component_QMARK_ = (function input_component_QMARK_(x){
return ((x === "input")) || ((x === "textarea"));
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"component-function","component-function",654728922),(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
reagent.impl.template.reagent_input = (function reagent_input(argv,comp,jsprops,first_child){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class.call(null,reagent.impl.template.input_spec);
} else {
}

return reagent.impl.template.reagent_input_class.call(null,argv,comp,jsprops,first_child);
});
reagent.impl.template.parse_tag = (function parse_tag(hiccup_tag){
var vec__5767 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__5767,(0),null);
var id = cljs.core.nth.call(null,vec__5767,(1),null);
var class$ = cljs.core.nth.call(null,vec__5767,(2),null);
var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);
if(cljs.core.truth_(tag)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown tag: '"),cljs.core.str(hiccup_tag),cljs.core.str("'")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"tag","tag",350170304,null)))].join('')));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,(cljs.core.truth_((function (){var or__3984__auto__ = id;
if(cljs.core.truth_(or__3984__auto__)){
return or__3984__auto__;
} else {
return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
reagent.impl.template.fn_to_class = (function fn_to_class(f){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected a function, not "),cljs.core.str(cljs.core.pr_str.call(null,f))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"component-function","component-function",654728922),f);
var res = reagent.impl.component.create_class.call(null,withrender);
var wrapf = reagent.impl.util.cached_react_class.call(null,res);
reagent.impl.util.cache_react_class.call(null,f,wrapf);

return wrapf;
});
reagent.impl.template.as_class = (function as_class(tag){
var temp__4128__auto__ = reagent.impl.util.cached_react_class.call(null,tag);
if((temp__4128__auto__ == null)){
return reagent.impl.template.fn_to_class.call(null,tag);
} else {
var cached_class = temp__4128__auto__;
return cached_class;
}
});
reagent.impl.template.get_key = (function get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return null;
}
});
reagent.impl.template.reag_element = (function reag_element(tag,v){
var c = reagent.impl.template.as_class.call(null,tag);
var jsprops = {"argv": v};
var key_5772 = (function (){var temp__4128__auto__ = (function (){var G__5770 = cljs.core.meta.call(null,v);
var G__5770__$1 = (((G__5770 == null))?null:reagent.impl.template.get_key.call(null,G__5770));
return G__5770__$1;
})();
if((temp__4128__auto__ == null)){
return reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else {
var k = temp__4128__auto__;
return k;
}
})();
var G__5771_5773 = key_5772;
var G__5771_5774__$1 = (((G__5771_5773 == null))?null:(jsprops["key"] = G__5771_5773));

return (React["createElement"])(c,jsprops);
});
reagent.impl.template.cached_parse = reagent.impl.util.memoize_1.call(null,reagent.impl.template.parse_tag);
reagent.impl.template.native_element = (function native_element(tag,argv){
if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
var vec__5778 = reagent.impl.template.cached_parse.call(null,tag);
var comp = cljs.core.nth.call(null,vec__5778,(0),null);
var id_class = cljs.core.nth.call(null,vec__5778,(1),null);
var props = cljs.core.nth.call(null,argv,(1),null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));
var jsprops = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),id_class);
var first_child = ((hasprops)?(2):(1));
if(reagent.impl.template.input_component_QMARK_.call(null,comp)){
return reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input,argv,comp,jsprops,first_child], null),cljs.core.meta.call(null,argv)));
} else {
var p = (function (){var temp__4128__auto__ = (function (){var G__5779 = cljs.core.meta.call(null,argv);
var G__5779__$1 = (((G__5779 == null))?null:reagent.impl.template.get_key.call(null,G__5779));
return G__5779__$1;
})();
if((temp__4128__auto__ == null)){
return jsprops;
} else {
var key = temp__4128__auto__;
var G__5780 = (((jsprops == null))?{}:jsprops);
(G__5780["key"] = key);

return G__5780;
}
})();
return reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
} else {
return null;
}
});
reagent.impl.template.vec_to_elem = (function vec_to_elem(v){
if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Hiccup form should not be empty"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))].join('')));
}

var tag = cljs.core.nth.call(null,v,(0));
if(reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Hiccup form: "),cljs.core.str(cljs.core.pr_str.call(null,v))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-tag?","valid-tag?",1243064160,null),new cljs.core.Symbol(null,"tag","tag",350170304,null))))].join('')));
}

var temp__4128__auto__ = reagent.impl.template.native_element.call(null,tag,v);
if((temp__4128__auto__ == null)){
return reagent.impl.template.reag_element.call(null,tag,v);
} else {
var ne = temp__4128__auto__;
return ne;
}
});
reagent.impl.template.seq_ctx = {};
reagent.impl.template.warn_on_deref = (function warn_on_deref(x){
if(cljs.core.truth_((reagent.impl.template.seq_ctx["warned"]))){
return null;
} else {
if(typeof console !== 'undefined'){
console.log("Warning: Reactive deref not supported in seq in ",cljs.core.pr_str.call(null,x));
} else {
}

return (reagent.impl.template.seq_ctx["warned"] = true);
}
});
reagent.impl.template.as_element = (function as_element(x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return reagent.impl.template.expand_seq.call(null,x);
} else {
var s = reagent.ratom.capture_derefed.call(null,(function (){
return reagent.impl.template.expand_seq.call(null,x);
}),reagent.impl.template.seq_ctx);
if(cljs.core.truth_(reagent.ratom.captured.call(null,reagent.impl.template.seq_ctx))){
reagent.impl.template.warn_on_deref.call(null,x);
} else {
}

return s;
}

} else {
return x;

}
}
}
});
reagent.impl.template.expand_seq = (function expand_seq(s){
var a = cljs.core.into_array.call(null,s);
var n__4871__auto___5781 = a.length;
var i_5782 = (0);
while(true){
if((i_5782 < n__4871__auto___5781)){
(a[i_5782] = reagent.impl.template.as_element.call(null,(a[i_5782])));

var G__5783 = (i_5782 + (1));
i_5782 = G__5783;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.make_element = (function make_element(argv,comp,jsprops,first_child){
if((cljs.core.count.call(null,argv) === (first_child + (1)))){
return (React["createElement"])(comp,jsprops,reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child)));
} else {
return (React["createElement"]).apply(null,cljs.core.reduce_kv.call(null,(function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
}),[comp,jsprops],argv));
}
});

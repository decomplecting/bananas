// Compiled by ClojureScript 0.0-2913 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_5787 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5787;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4571__auto__,writer__4572__auto__,opt__4573__auto__){
return cljs.core._write.call(null,writer__4572__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__5791__delegate = function (x,p__5788){
var map__5790 = p__5788;
var map__5790__$1 = ((cljs.core.seq_QMARK_.call(null,map__5790))?cljs.core.apply.call(null,cljs.core.hash_map,map__5790):map__5790);
var validator = cljs.core.get.call(null,map__5790__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__5790__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__5791 = function (x,var_args){
var p__5788 = null;
if (arguments.length > 1) {
var G__5792__i = 0, G__5792__a = new Array(arguments.length -  1);
while (G__5792__i < G__5792__a.length) {G__5792__a[G__5792__i] = arguments[G__5792__i + 1]; ++G__5792__i;}
  p__5788 = new cljs.core.IndexedSeq(G__5792__a,0);
} 
return G__5791__delegate.call(this,x,p__5788);};
G__5791.cljs$lang$maxFixedArity = 1;
G__5791.cljs$lang$applyTo = (function (arglist__5793){
var x = cljs.core.first(arglist__5793);
var p__5788 = cljs.core.rest(arglist__5793);
return G__5791__delegate(x,p__5788);
});
G__5791.cljs$core$IFn$_invoke$arity$variadic = G__5791__delegate;
return G__5791;
})()
;
atom = function(x,var_args){
var p__5788 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__5794 = null;
if (arguments.length > 1) {
var G__5795__i = 0, G__5795__a = new Array(arguments.length -  1);
while (G__5795__i < G__5795__a.length) {G__5795__a[G__5795__i] = arguments[G__5795__i + 1]; ++G__5795__i;}
G__5794 = new cljs.core.IndexedSeq(G__5795__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__5794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.peek_at = (function peek_at(a,path){
var _STAR_ratom_context_STAR_5797 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core.get_in.call(null,cljs.core.deref.call(null,a),path);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5797;
}});

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom,setf,reaction){
this.path = path;
this.ratom = ratom;
this.setf = setf;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path,self__.setf], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,self__.ratom,oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,self__.ratom,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,self__.ratom,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,self__.path,writer,opts);

cljs.core._write.call(null,writer," ");

cljs.core.pr_writer.call(null,self__.ratom,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path)));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x,y));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,reagent.ratom.peek_at.call(null,self__.ratom,self__.path),x,y,more));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.setf == null)){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
} else {
return self__.setf.call(null,new_value);
}
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
} else {
if((self__.reaction == null)){
self__.reaction = reagent.ratom.make_reaction.call(null,((function (this$__$1){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$__$1))
);
} else {
}

return cljs.core.deref.call(null,self__.reaction);
}
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)) && (cljs.core._EQ_.call(null,self__.setf,other.setf));
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4571__auto__,writer__4572__auto__,opt__4573__auto__){
return cljs.core._write.call(null,writer__4572__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom,setf,reaction){
return (new reagent.ratom.RCursor(path,ratom,setf,reaction));
});

reagent.ratom.cursor = (function() {
var cursor = null;
var cursor__2 = (function (path,ra){
return (new reagent.ratom.RCursor(path,ra,null,null));
});
var cursor__4 = (function (path,ra,setf,args){
return (new reagent.ratom.RCursor(path,ra,(new reagent.impl.util.partial_ifn(setf,args,null)),null));
});
cursor = function(path,ra,setf,args){
switch(arguments.length){
case 2:
return cursor__2.call(this,path,ra);
case 4:
return cursor__4.call(this,path,ra,setf,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cursor.cljs$core$IFn$_invoke$arity$2 = cursor__2;
cursor.cljs$core$IFn$_invoke$arity$4 = cursor__4;
return cursor;
})()
;

reagent.ratom.IDisposable = (function (){var obj5799 = {};
return obj5799;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3972__auto__ = this$;
if(and__3972__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3972__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4628__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3984__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4628__auto__)]);
if(or__3984__auto__){
return or__3984__auto__;
} else {
var or__3984__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3984__auto____$1){
return or__3984__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj5801 = {};
return obj5801;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3972__auto__ = this$;
if(and__3972__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3972__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4628__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3984__auto__ = (reagent.ratom.run[goog.typeOf(x__4628__auto__)]);
if(or__3984__auto__){
return or__3984__auto__;
} else {
var or__3984__auto____$1 = (reagent.ratom.run["_"]);
if(or__3984__auto____$1){
return or__3984__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj5803 = {};
return obj5803;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3972__auto__ = this$;
if(and__3972__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3972__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4628__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3984__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4628__auto__)]);
if(or__3984__auto__){
return or__3984__auto__;
} else {
var or__3984__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3984__auto____$1){
return or__3984__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3972__auto__ = k;
if(and__3972__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3972__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4628__auto__ = (((k == null))?null:k);
return (function (){var or__3984__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4628__auto__)]);
if(or__3984__auto__){
return or__3984__auto__;
} else {
var or__3984__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3984__auto____$1){
return or__3984__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv.call(null,(function (_,key,f){
f.call(null,key,obs,oldval,newval);

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3972__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3972__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3972__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3984__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3984__auto__)){
return or__3984__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__5804_5816 = cljs.core.seq.call(null,derefed);
var chunk__5805_5817 = null;
var count__5806_5818 = (0);
var i__5807_5819 = (0);
while(true){
if((i__5807_5819 < count__5806_5818)){
var w_5820 = cljs.core._nth.call(null,chunk__5805_5817,i__5807_5819);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5820)){
} else {
cljs.core.add_watch.call(null,w_5820,this$__$1,reagent.ratom._handle_change);
}

var G__5821 = seq__5804_5816;
var G__5822 = chunk__5805_5817;
var G__5823 = count__5806_5818;
var G__5824 = (i__5807_5819 + (1));
seq__5804_5816 = G__5821;
chunk__5805_5817 = G__5822;
count__5806_5818 = G__5823;
i__5807_5819 = G__5824;
continue;
} else {
var temp__4126__auto___5825 = cljs.core.seq.call(null,seq__5804_5816);
if(temp__4126__auto___5825){
var seq__5804_5826__$1 = temp__4126__auto___5825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5804_5826__$1)){
var c__4771__auto___5827 = cljs.core.chunk_first.call(null,seq__5804_5826__$1);
var G__5828 = cljs.core.chunk_rest.call(null,seq__5804_5826__$1);
var G__5829 = c__4771__auto___5827;
var G__5830 = cljs.core.count.call(null,c__4771__auto___5827);
var G__5831 = (0);
seq__5804_5816 = G__5828;
chunk__5805_5817 = G__5829;
count__5806_5818 = G__5830;
i__5807_5819 = G__5831;
continue;
} else {
var w_5832 = cljs.core.first.call(null,seq__5804_5826__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_5832)){
} else {
cljs.core.add_watch.call(null,w_5832,this$__$1,reagent.ratom._handle_change);
}

var G__5833 = cljs.core.next.call(null,seq__5804_5826__$1);
var G__5834 = null;
var G__5835 = (0);
var G__5836 = (0);
seq__5804_5816 = G__5833;
chunk__5805_5817 = G__5834;
count__5806_5818 = G__5835;
i__5807_5819 = G__5836;
continue;
}
} else {
}
}
break;
}

var seq__5808_5837 = cljs.core.seq.call(null,self__.watching);
var chunk__5809_5838 = null;
var count__5810_5839 = (0);
var i__5811_5840 = (0);
while(true){
if((i__5811_5840 < count__5810_5839)){
var w_5841 = cljs.core._nth.call(null,chunk__5809_5838,i__5811_5840);
if(cljs.core.contains_QMARK_.call(null,derefed,w_5841)){
} else {
cljs.core.remove_watch.call(null,w_5841,this$__$1);
}

var G__5842 = seq__5808_5837;
var G__5843 = chunk__5809_5838;
var G__5844 = count__5810_5839;
var G__5845 = (i__5811_5840 + (1));
seq__5808_5837 = G__5842;
chunk__5809_5838 = G__5843;
count__5810_5839 = G__5844;
i__5811_5840 = G__5845;
continue;
} else {
var temp__4126__auto___5846 = cljs.core.seq.call(null,seq__5808_5837);
if(temp__4126__auto___5846){
var seq__5808_5847__$1 = temp__4126__auto___5846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5808_5847__$1)){
var c__4771__auto___5848 = cljs.core.chunk_first.call(null,seq__5808_5847__$1);
var G__5849 = cljs.core.chunk_rest.call(null,seq__5808_5847__$1);
var G__5850 = c__4771__auto___5848;
var G__5851 = cljs.core.count.call(null,c__4771__auto___5848);
var G__5852 = (0);
seq__5808_5837 = G__5849;
chunk__5809_5838 = G__5850;
count__5810_5839 = G__5851;
i__5811_5840 = G__5852;
continue;
} else {
var w_5853 = cljs.core.first.call(null,seq__5808_5847__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_5853)){
} else {
cljs.core.remove_watch.call(null,w_5853,this$__$1);
}

var G__5854 = cljs.core.next.call(null,seq__5808_5847__$1);
var G__5855 = null;
var G__5856 = (0);
var G__5857 = (0);
seq__5808_5837 = G__5854;
chunk__5809_5838 = G__5855;
count__5810_5839 = G__5856;
i__5811_5840 = G__5857;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__5812_5858 = cljs.core.seq.call(null,self__.watching);
var chunk__5813_5859 = null;
var count__5814_5860 = (0);
var i__5815_5861 = (0);
while(true){
if((i__5815_5861 < count__5814_5860)){
var w_5862 = cljs.core._nth.call(null,chunk__5813_5859,i__5815_5861);
cljs.core.remove_watch.call(null,w_5862,this$__$1);

var G__5863 = seq__5812_5858;
var G__5864 = chunk__5813_5859;
var G__5865 = count__5814_5860;
var G__5866 = (i__5815_5861 + (1));
seq__5812_5858 = G__5863;
chunk__5813_5859 = G__5864;
count__5814_5860 = G__5865;
i__5815_5861 = G__5866;
continue;
} else {
var temp__4126__auto___5867 = cljs.core.seq.call(null,seq__5812_5858);
if(temp__4126__auto___5867){
var seq__5812_5868__$1 = temp__4126__auto___5867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5812_5868__$1)){
var c__4771__auto___5869 = cljs.core.chunk_first.call(null,seq__5812_5868__$1);
var G__5870 = cljs.core.chunk_rest.call(null,seq__5812_5868__$1);
var G__5871 = c__4771__auto___5869;
var G__5872 = cljs.core.count.call(null,c__4771__auto___5869);
var G__5873 = (0);
seq__5812_5858 = G__5870;
chunk__5813_5859 = G__5871;
count__5814_5860 = G__5872;
i__5815_5861 = G__5873;
continue;
} else {
var w_5874 = cljs.core.first.call(null,seq__5812_5868__$1);
cljs.core.remove_watch.call(null,w_5874,this$__$1);

var G__5875 = cljs.core.next.call(null,seq__5812_5868__$1);
var G__5876 = null;
var G__5877 = (0);
var G__5878 = (0);
seq__5812_5858 = G__5875;
chunk__5813_5859 = G__5876;
count__5814_5860 = G__5877;
i__5815_5861 = G__5878;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches.call(null,a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
self__.on_set.call(null,oldval,newval);
} else {
}

return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if(cljs.core.empty_QMARK_.call(null,self__.watches)){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__3984__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3984__auto__)){
return or__3984__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__5512__auto___5879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(249),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__5512__auto___5879))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3984__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3984__auto__)){
return or__3984__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4571__auto__,writer__4572__auto__,opt__4573__auto__){
return cljs.core._write.call(null,writer__4572__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__5880){
var map__5882 = p__5880;
var map__5882__$1 = ((cljs.core.seq_QMARK_.call(null,map__5882))?cljs.core.apply.call(null,cljs.core.hash_map,map__5882):map__5882);
var derefed = cljs.core.get.call(null,map__5882__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__5882__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__5882__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__5882__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__5880 = null;
if (arguments.length > 1) {
var G__5883__i = 0, G__5883__a = new Array(arguments.length -  1);
while (G__5883__i < G__5883__a.length) {G__5883__a[G__5883__i] = arguments[G__5883__i + 1]; ++G__5883__i;}
  p__5880 = new cljs.core.IndexedSeq(G__5883__a,0);
} 
return make_reaction__delegate.call(this,f,p__5880);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__5884){
var f = cljs.core.first(arglist__5884);
var p__5880 = cljs.core.rest(arglist__5884);
return make_reaction__delegate(f,p__5880);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

(ns bananas.views.layout
  (:require [hiccup.page :refer :all]))

(defn common [body]
  (html5
   [:head]
   [:body
    body]))


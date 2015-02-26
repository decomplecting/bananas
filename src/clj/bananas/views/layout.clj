(ns bananas.views.layout
  (:require [hiccup.page :refer :all]
            [hiccup.element :refer [javascript-tag]]))

(defn common [body]
  (html5
   [:head
    (include-js "//fb.me/react-0.12.1.js"
                "js/out/goog/base.js"
                "js/app.js")]
   [:body
    body
    [:div {:id "root"}]
    (javascript-tag "goog.require('bananas.main');")
    (javascript-tag "bananas.main.init();")]))

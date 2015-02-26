(ns bananas.main
  (:require [reagent.core :as r :refer [atom]])
  (:import [goog.history Html5History]
           [goog Uri]
           [goog.history EventType]))

(def state (atom 0))



(defn inc-com []
  [:div
   [:h1 @state]
   [:button {:on-click #(swap! state inc)} "click"]])



(defn ^:export init []
  (r/render (inc-com) (.getElementById js/document "root"))
  (js/alert "HALLO!"))

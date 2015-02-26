(ns bananas.main
  (:require [reagent.core :as r :refer [atom]])
  (:import [goog.history Html5History]
           [goog Uri]
           [goog.history EventType]))

(def state (atom 0))

(defn inc-com []
  [:div {:on-click #(swap! state inc)}
   [:h1 (str "Click" @state)]
   ])



(defn ^:export init []
  (r/render (inc-com) (.getElementById js/document "root"))
  (js/alert "HALLO!"))

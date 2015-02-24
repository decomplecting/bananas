(ns bananas.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [bananas.views.layout :as layout]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))
(def home
  (layout/common
   [:div
   (for [x (range 5)]
     [:h3 (str "Hello " x)])]))

(defroutes app-routes
  (GET "/" [] home)
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))

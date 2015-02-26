(ns bananas.routes.home
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [bananas.views.layout :as layout]
            [prone.debug :refer [debug]]))
  (def home
    (layout/common
     [:div
       (for [x (range 5)]
         [:h3 (str "Hello " x)])]))

(layout/common "foo")

  (defroutes app-routes
    (GET "/" [] home)
    (GET "/debug" [] (debug))
    (route/not-found "Not Found"))
(loop)

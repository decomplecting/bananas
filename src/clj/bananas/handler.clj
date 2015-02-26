(ns bananas.handler
  (:require [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [bananas.routes.home :refer [app-routes]]))


(def app
  (wrap-defaults app-routes site-defaults))


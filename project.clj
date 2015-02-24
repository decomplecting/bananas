(defproject bananas "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.3.1"]
                 [ring/ring-defaults "0.1.2"]
                 [hiccup "1.0.5"]
                 [garden "1.2.5"]
                 [org.clojure/clojurescript "0.0-2913"]]
  :plugins [[lein-ring "0.8.13"]
            [lein-cljsbuild "1.0.5"]]
  :ring {:handler bananas.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]]}})

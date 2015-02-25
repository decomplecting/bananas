(defproject bananas "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.3.1"]
                 [ring/ring-defaults "0.1.2"]
                 [ring/ring-json "0.3.1"]
                 [reagent "0.5.0-alpha"]
                 [hiccup "1.0.5"]
                 [garden "1.2.5"]
                 [org.clojure/clojurescript "0.0-2913"]]
  :source-paths ["src/clj" "src/cljs"]
  :plugins [[lein-ring "0.8.13"]
            [lein-cljsbuild "1.0.5"]]
  :ring {:handler bananas.handler/app}
  :cljsbuild
  {:builds
   [{:id "dev"
     :source-paths ["src/cljs"]
     :compiler
     {:optimizations :none
      :output-to "resources/public/js/app.js"
      :output-dir "resources/public/js/out"}}]}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]]}})

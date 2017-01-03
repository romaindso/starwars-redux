# react-pwa-experiments

Some experiments with [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)  
[Demo here](https://romaindso.github.io/react-pwa-experiments) (Works better in local mode because no https restriction)

## Progressive Web App checklist

 * [x] Responsive design
 * [x] Offline capacity . The App Shell (UI skeleton) is cached with service workers
 * [x] Installable - Allows users to "keep" apps they find most useful on their home screen without the hassle of an app store.
 * [x] Discoverable - Is identifiable as an "application" thanks to W3C manifest and service worker registration scope, allowing search engines to find it.
 * [x] Linkable - Easily share via URL, does not require complex installation.

#### Todo
* [ ] Switch to Material Design for a better App-like style
* [ ] Deploy on github pages with HTTPS
* [ ] Fresh - Always up-to-date thanks to the service worker update process.
* [ ] Re-engageable with push notifications
* [ ] ...

## Run the app
Clone this project, then run in your console :
```bash
$ npm install
```

Run the app
```bash
$ npm start
```
By default the app is available on [http://localhost:3000](http://localhost:3000)

#### Offline use-case
On first load, the service worker is registered and cache some static resources (check with the console).  
Hit F5 to reload the page, now all request URLs are intercepted by the service worker and being logged to the console.  
Go offline with Devtools and reload the page again. The App Shell is loaded offline thanks to SW and the cache API.

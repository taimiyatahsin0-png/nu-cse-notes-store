---
description: "Learn how to install NU CSE Notes Store and use previously visited pages while offline."
---

# Offline Access

NU CSE Notes Store supports installation as a Progressive Web App (PWA) on compatible browsers. The service worker caches the application shell and pages you visit so that they can be available offline later.

## Install the website

1. Open the website in a supported browser.
2. Use the browser's **Install app** option when it appears, or choose **Add to Home screen** on supported mobile browsers.
3. Launch the installed app from your home screen or application menu.

## Use pages offline

- Open important notes, formula sheets and tools while connected to the internet at least once.
- The service worker stores visited same-origin pages and essential assets.
- The offline page is shown when a requested page is not available in the cache.
- External resources, including third-party CDN content, may still require an internet connection.

## Important limitations

- Offline access is not guaranteed for a page that has never been opened online.
- PDF files and large resources may need to be opened once online before they are available offline.
- Browser storage can be cleared automatically when device storage is low.
- Local bookmarks and calculator data stay on this device and are not cloud-synchronised.

[Open the Smart Notes Library](tools/notes-library.md) · [Open Formula Sheets](tools/formula-sheets.md)

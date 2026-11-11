---
description: "View your locally saved NU CSE Notes Store bookmarks and export or restore your personal browser data."
---

# My Library

Your bookmarks and preferences are stored locally in this browser. They are not uploaded to a server and do not automatically sync to another device.

<div class="personal-library-panel">
  <h2>Saved bookmarks</h2>
  <p id="site-bookmark-count" role="status">Loading bookmarks...</p>
  <div id="site-bookmark-list"></div>
  <p id="site-bookmark-empty" hidden>No bookmarks yet. Open a notes page and select “Bookmark this page”.</p>
</div>

<div class="personal-library-panel">
  <h2>Backup and restore</h2>
  <p>Export a JSON backup to keep a copy of your saved CGPA results, bookmarks and site preferences. Store the file somewhere safe. Importing a backup replaces the matching local app data in this browser.</p>
  <div class="library-action-row">
    <button type="button" class="md-button md-button--primary" id="site-export-data">Export my data</button>
    <label class="md-button" for="site-import-data">Import backup</label>
    <input type="file" id="site-import-data" accept="application/json,.json" hidden>
  </div>
  <p id="site-backup-status" role="status" aria-live="polite"></p>
</div>

## Local storage notes

- Data belongs to this browser profile on this device.
- Private/incognito sessions may clear data when closed.
- Clearing browser site data can permanently remove saved information.
- Export a backup before changing browsers or devices.

# Journey / Evidence Board Photos

Drop your photos in this folder (hackathons, graduation, projects, anything).

## How to pin a photo to the board

1. Save the image here, e.g. `graduation.jpg` (roughly square crops look best; keep files under ~300 KB if you can).
2. Import + export it in `src/assets/index.js`:

   ```js
   import graduation from "./journey/graduation.jpg";
   // ...add `graduation` to the export list
   ```

3. In `src/constants/index.js`, import it at the top and swap it into the matching moment:

   ```js
   { caption: "Graduation day", date: "2025", blurb: "Made it official.", image: graduation },
   ```

Cards with `image: null` show a red "EVIDENCE PENDING" stamp until you replace them.
To add more moments, just add more objects to the `journeyMoments` array — the red string re-routes automatically.

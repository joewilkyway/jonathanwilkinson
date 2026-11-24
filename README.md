# Electronic engineering portfolio

This site is published by GitHub Pages from the `main` branch. GitHub Pages uses
Jekyll to turn Markdown files into blog posts; no HTML is needed to write them.
Changes committed to `main` are published after the Pages build completes.

## Write a post

1. On GitHub, open the repository's **Code** tab and choose **Add file > Create new file**.
2. Name the file `_posts/YYYY-MM-DD-your-title.md`, replacing the date and title.
   For example: `_posts/2026-11-24-my-first-project.md`. Use today's date or an
   earlier date; future-dated posts are omitted until the site is rebuilt after
   their date arrives.
3. Paste the following into the editor and replace the example text:

   ```markdown
   ---
   layout: post
   title: "My first project"
   ---

   Write your introduction here.

   ## What I made

   Describe your project here.

   ![A description of the photo](../images/project.jpg)
   ```

4. Upload a photo as described below, or delete the image line if you do not
   need one. Choose **Commit changes** and commit to `main`.

The lines between `---` tell Jekyll how to publish the post. Keep them at the
very top of the file. The post appears automatically in the homepage's Journal
section, newest first. To edit a post later, open its file under `_posts`, click
the pencil icon, and commit your changes.

Markdown supports headings (`## Heading`), **bold** (`**bold**`), lists (`- item`),
and links (`[link text](https://example.com)`). GitHub's editor has a Preview
tab so you can check your writing before committing.

## Add a photo to a post

1. Open the `images` folder on GitHub and choose **Add file > Upload files**.
2. Drag and drop your photo onto the upload area and commit it to `main`. Use a
   simple filename without spaces, such as `project.jpg`.
3. In the post, add `![Description of the photo](../images/project.jpg)`,
   replacing the description and filename. Filenames are case-sensitive.

All repository files and posts are public. Do not upload anything private.

## Customize the portfolio

- Edit `index.html` to update the introduction, interests, and contact link.
- The three projects on the homepage are **concepts**, not claims of completed
  work. Replace them with your own projects, descriptions, and links.
- Adjust colours and styling in `style.css`.
- `baseurl` in `_config.yml` is set for this repository's project-site address.
  Update it if the repository is renamed or a custom domain is configured.

Bootstrap and the optional Google Fonts are loaded from CDNs; the page uses
system fonts if the fonts are unavailable.

## Publishing

In the repository's **Settings > Pages**, choose **Deploy from a branch**,
then select `main` and `/ (root)`. Jekyll must process the files, so opening
`index.html` directly in a browser does not produce the finished site.

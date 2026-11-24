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
   featured: true
   description: "A short introduction to my project."
   image: /images/project.jpg
   tags: [Electronics, Prototyping]
   ---

   Write your introduction here.

   ## What I made

   Describe your project here.

   ![A description of the photo](../images/project.jpg)
   ```

4. Upload a photo as described below, or delete the `image:` line and the image
   line in the post if you do not need one. Choose **Commit changes** and commit
   to `main`.

The lines between `---` tell Jekyll how to publish the post. Keep them at the
very top of the file. Every post appears automatically on the Journals page,
newest first. To edit a post later, open its file under `_posts`, click the
pencil icon, and commit your changes.

## Choose selected work and tile details

The homepage's Selected Work section shows posts with `featured: true` in their
top section. Change it to `featured: false`, or remove the line, to show a post
only on the Journals page. You can feature as many posts as you like; they
appear newest first.

The optional `description:` is the short text shown on the tile. If omitted, the
first paragraph of the post is used. The optional `image:` selects a tile photo
from the `images` folder, and `tags:` adds labels below the description. If you
omit `image:`, the tile uses a built-in illustration instead. These fields can be
added to existing posts too, between the `---` lines at the top.

The taped journal spotlight at the top of the homepage picks from **all published
posts** at random on each page load, independently of `featured`. It uses the
same image and description fields as the tiles. The same post can be picked
again; with only one post, that post is always shown. If JavaScript is disabled,
the latest post is shown instead.

Markdown supports headings (`## Heading`), **bold** (`**bold**`), lists (`- item`),
and links (`[link text](https://example.com)`). GitHub's editor has a Preview
tab so you can check your writing before committing.

### Notebook-style posts

Ordinary Markdown gets the notebook styling automatically:

- Start a paragraph with `>` for a highlighted note.
- Use backticks for `inline code`, or wrap multiple lines in triple backticks for
  a code block.
- Use `-` or `1.` for lists, `---` on its own line for a hand-drawn divider,
  and Markdown tables for measurements.
- Add images using the format below; they get a paper frame automatically.

The GitHub editor's preview may look different from the published site.

## Add a photo to a post

1. Open the `images` folder on GitHub and choose **Add file > Upload files**.
2. Drag and drop your photo onto the upload area and commit it to `main`. Use a
   simple filename without spaces, such as `project.jpg`.
3. In the post, add `![Description of the photo](../images/project.jpg)`,
   replacing the description and filename. Filenames are case-sensitive.

All repository files and posts are public. Do not upload anything private.

## Customize the portfolio

- Edit `index.html` to update the introduction, interests, and contact link.
- Edit the name label in both `index.html` and `journals.html` to change the
  notebook-style header.
- Feature journal posts to choose the projects displayed on the homepage.
- Adjust colours and styling in `style.css`.
- To add your portrait, upload a square photo to `images`, then replace
  `/images/portrait-placeholder.svg` in `index.html` with its path (for example
  `/images/me.jpg`). Update the image's `alt` text and the caption below it too.
  The frame, shadow and corner tape are applied automatically.
- `baseurl` in `_config.yml` is set for this repository's project-site address.
  Update it if the repository is renamed or a custom domain is configured.

Bootstrap and the optional Google Fonts are loaded from CDNs; the page uses
system fonts if the fonts are unavailable.

## Publishing

In the repository's **Settings > Pages**, choose **Deploy from a branch**,
then select `main` and `/ (root)`. Jekyll must process the files, so opening
`index.html` directly in a browser does not produce the finished site.

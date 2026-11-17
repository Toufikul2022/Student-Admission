/**
 * Hero photos for inner pages. To change one, upload a new file to
 * public/images/pages/ with a NEW name and update src, width and height here.
 * "cutout" = transparent background (shown standing on a maple leaf);
 * otherwise the photo is shown in a rounded frame with a leaf behind one corner.
 */
export type PageImage = { src: string; width: number; height: number; cutout: boolean; alt: string };

export const pageImages = {
  "find-university": {
    "src": "/images/pages/find-university-1ea55bd5.webp",
    "width": 1024,
    "height": 1055,
    "cutout": true,
    "alt": "Smiling student in glasses holding a Canadian flag and notebooks"
  },
  "programs": {
    "src": "/images/pages/programs-bfe727ff.webp",
    "width": 1100,
    "height": 693,
    "cutout": true,
    "alt": "Graduate in cap and gown, seen from behind, waving a Canadian flag"
  },
  "study-in-canada": {
    "src": "/images/pages/study-in-canada-5183d380.webp",
    "width": 1400,
    "height": 1050,
    "cutout": false,
    "alt": "Graduate raising a Canadian flag under a Study in Canada banner, overlooking mountains, lakes and forest"
  },
  "study-guides": {
    "src": "/images/pages/study-guides-d77b7f5b.webp",
    "width": 1400,
    "height": 933,
    "cutout": false,
    "alt": "Three smiling students with backpacks and Canadian flags on a tree-lined campus path"
  },
  "contact": {
    "src": "/images/pages/contact-9cc05f61.webp",
    "width": 1400,
    "height": 788,
    "cutout": false,
    "alt": "Group of smiling international students holding Canadian flags in front of a red wall"
  }
} satisfies Record<string, PageImage>;

export type PageImageKey = keyof typeof pageImages;

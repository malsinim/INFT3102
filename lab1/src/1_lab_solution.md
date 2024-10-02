---
layout: layouts/default.njk
---
# Lab 1 
---
#### References

-   [10+ must use static site Generators ](https://dev.to/themeselection/static-site-generator-1fp4)
-   [What are the pros & cons of EJS for Node.js Templating?](https://www.geeksforgeeks.org/what-are-the-pros-cons-of-ejs-for-node-js-templating/#what-is-ejs)
-   [5 templating languages to use instead of HTML](https://betterprogramming.pub/templating-languages-to-use-instead-of-html-eb3682443958)
-   [Pros and Cons of Popular JavaScript Templating Engines](https://codechronicle.medium.com/pros-and-cons-of-popular-javascript-templating-engines-e5d1e3d4504f)
-   [Comparing JavaScript Templating Engines: Jade, Mustache, Dust and More](https://medium.com/@jack.yin/comparing-javascript-templating-engines-jade-mustache-dust-and-more-6a4469ac716a)
-   [Our top 12 SSG picks for 2024](https://hygraph.com/blog/top-12-ssgs#1-nextjs)
-   [What is Front Matter and how is it used to create dynamic webpages](https://dpericich.medium.com/what-is-front-matter-and-how-is-it-used-to-create-dynamic-webpages-9d8dc053b457)
   
  
---

#### Templating languages and their pros and cons 

---
##### EJS 

EJS also known as Embedded JavaScript is a templating language that lets developers generate dynamic pages. 
It is also recommended for students that are just starting to get into templating languages. 

- **Pros**
    - Helps to make dynamic pages (if that is what is needed).
    - Active community support around EJS.
    - Ease of integration, more so for developers that are already familiar with JS.

- **Cons** 
    - Negative impact when mixing logic with presentation (leads to JavaScript code that is hard to maintain and read).
    - Limited features (as compared to other templating languages). 
    - Low performance (due to complex logic inside templates). 

---
##### Mustache

Mustache.js is known for being simple and also how it provides a logic-less syntax. 

- **Pros**
    - Easy to learn and use.
    - Multi-language support.
    - Templates are logic-less (ensuring clean, maintainable and readable templates)

- **Cons** 
    - The fact that theres limited logic might be unsuitable for more complex applications.
    - Less features as compared to other engines. 

---
##### Nunjucks
Nunjucks is a templating language for JavaScript. Uses block inheritance, asynchronous control and more. 

- **Pros**
    - Concise and clean variable and loop controls.
    - Supports custom tags.
    - Can seamlessly integrate with Node.js and other server side JavScript frameworks. 
    - White space control.
    - Fast performance. 
    - Good for separating logic from the presentation. 

- **Cons**
    - Learning curve for beginners. 
    - Not updated as frequently as other templating engines.
    - Not suited for simple projects. 
    - Fewer documentation and resources as it is not as popular as compared to other templating languages. 

---

###### I will be using Nunjucks or EJS for my assignment depending on the assignment needs or if the scope of the project changes in the future. 

---

###### There are many other SSG applications other than 11ty. Some of the popular ones are: Next.js, Hugo, Gatsby, Jekyll, Astro Build, Nuxt.js, VuePress, VitePress, Docusaurus, Gridsome, Slate, MkDocs, etc. 

---

- **Next.js Pros and Cons**
    - Pros : Automatic routing, Buildin CSS, TypeScript support, hybrid static and server rendering, better performance, better data fetching. 
    - Cons : Less plugins, limited community support. 

---

- **Hugo Pros and Cons**
    - Pros : Allows multi languages, Utilizes Markdown, good performance, extremely user friendly. 
    - Cons : Does not have plugin support therefore limits customization. 

---

- **Gatsby Pros and Cons**
    - Pros : Rapid development, optimized to load pages as fast as possible, easy to understand documentation.
    - Cons : Cannot handle dynamic server-side rendering features. 

---

- **Jekyll Pros and Cons**
    - Pros : Availability of tutorials and guides, Liquid templating, Permalinks, Sass options, extensive plugins. 
    - Cons : Cannot handle dynamic server-side rendering features.

---

###### We use a configuration file to customize how Eleventy processes and builds the website.

###### Here's the code used for it in the ```eleventy.config.js``` file :

```JS
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/public");
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };

```
---
###### The watch and serve configurations are worth looking into. 
---
###### Front matter refers to the section of a file that gives context about the content of the file. It is used to assign a website to a layout or template, basically tells it how to display that particular webpage. 

###### Here's an example how front matter looks in a Markdown file:

```markdown
---
title: "My Rad Nunjucks Blog Post"
date: "2024-09-14"
author: "Malsini Masachchige"
tags:
  - web development frameworks
  - markdown
  - front matter
category: "examples"
layout: "posts"
---
```
---


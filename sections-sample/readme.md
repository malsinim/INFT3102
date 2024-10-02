# Commands

    npx @11ty/eleventy --serve

# Important Links

https://www.11ty.dev/docs/

# Data

https://www.11ty.dev/docs/data-global/

The contents of the file _data/questions.json is available to the templates keyed to "questions" 

# Pagination

https://www.11ty.dev/docs/pages-from-data/

In order to create one page per question, we use the following template at questions/question.njk (the extension indicates which templating langauge we use)

    pagination:
      data: questions
      size: 1
      alias: question

Then the "contents" of this page becomes:

    {{ question.question | safe }}

(safe is a Nunjucks filter) https://mozilla.github.io/nunjucks/templating.html#safe

# Collections

https://www.11ty.dev/docs/collections/

I chose to use the following pagination option to add all pages to collections (optional)

    addAllPagesToCollections: true

This allows me to use the following iterator on my index.html page:

    {% for question in collections.questions %}

(useful for displaying links to all pages)

# Layouts

https://www.11ty.dev/docs/layouts/

The important part about layouts is that it has access to the data from your front matter

This means "home" will be defined when navigating to questions/question.njk but not index.html (as the home variable is specified in the front matter for only the first file)

It would likely be better to use different layout files for different parts of the application

# Computed Data

https://www.11ty.dev/docs/data-computed/

Only if you want to use "dynamic" data in the front matter, like I wanted to use the question title to create the url

    permalink: "questions/{{ question.title | slugify }}/"
    eleventyComputed:
      title: "{{ question.title }}"

# Ignore

https://www.11ty.dev/docs/ignores/

If you have files you don't want processed (like a certain readme.md) use the .eleventyignore file and list the files to ignore

    readme.md



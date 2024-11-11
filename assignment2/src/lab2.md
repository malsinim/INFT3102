---
layout: layouts/default.liquid
title: Lab 2
---

## Lab 2: Technology Choices for Headless CMS Implementation

---

### Objective
The objective for this lab is to research 5 headless CMS systems, namely, Strapi, Contentful, Sanity, Prismic, and Ghost to determine which CMS works best to create and maintain a website. 

---

### What is a headless CMS?
A headless CMS, is a content management system that provides user-friendly frontend environment for creating and managing content. 

Headless CMS's separate the content's front end from its backend, and makes content accessible via an API so that content can be displayed on any device. 

---

### Strapi

#### Overview: 
- Strapi is a headless CMS that can be used to build websites, mobile apps. eCommerece platforms and APIs.
- Strapi is a free open-source headless CMS that connects a website's front end and back end using an API. 

#### Features
- Compatible with databases such as MongoDB, PostgreSQL, and many others. 
- Websites powered by Strapi is designed to scale automatically to handle heavy traffic. 

#### Pros
1. **Easy to use and versatile**: Strapi is super easy to use because it's extremely user-friendly. That's not all, Strapi is highly
   customizable with through plugins, while also allowing you to create content without the need for coding.  
2. **Open-Source and free**: Strapi is available for free. 
3. **Scalable** : Strapi is able to quickly scale up to manage heav traffic loads in your webiste.
4. **Reduces development time**: Strapi features an admin section with a user friendly UI for content management which greatly reduces development time.
5. **Accesible plugins**: Strapi provides many plugins that can enchance an existing or new application.

#### Cons:
1. **Limited TypeScript support**: Strapi does not natively support TypeScript. But TypeScript can be used by using a plugin from the npm repositories. 
2. **Constant updates**: Strapi has constant updates so it is important to be mindful of the changes. 
3. **Is not entirely free**: Strapi offers a paid version to its users with extra features.  
4. **Manual migration**: The platform does not support automating content migrations. 

#### Conclusion: 
Strapi is a headless CMS which is a great tool for building APIs.

---

### Contentful

#### Overview: 
- Contentful is a composable content platform which means that with it, you can create, managem distribute content to many platforms (websites. mobile apps, and IoT devices). 

#### Features
- Has a starter template which is a pre-built set of files and directory structures that act as a basic starter point for new projects. 
- Offers powerful localozation features. 
- Webhooks in Contentful notifies you about events in your space, like when an entry is published, updated or deleted. 
- Contenful CLI is a tool that can be used to manage Contenful spaces, content models, data, and other functionalities without the need to use their web interface. 

#### Pros
1. **Extendable interface**: Conteful's interface can be customizable through extensions, which make it developer friendly. 
2. **Structured content model**: Developers are able to define content types that match their specific project needs. 
3. **Media management**: Contentful supports integrations with Bynder, Cloudinary, and Dropbox to handle images, videos and other media types.
4. **Migration tools**: The platform provides APIs and CLI tools to automate content migrations. 

#### Cons:
1. **Limitations with API**: Contentful GraphQL API does not suuport deep nested queries, which makes it hard to retrieve data.
2. **API rate limits**: Affects performance for high traffic applications. 
3. **Data import challenges**: Writing queries to filter large datasets can be challenging.

#### Conclusion: 
A typical use case for Contentful is managing content for an e-commerece site. 

---

### Ghost

#### Overview: 
- Ghost refers to themselves as "The Creator Economy Platform". It is an open source headless CMS built on Node.js. 

#### Features
- There is a Custom Redirects feature in Ghost CMS, which allows you to manage custom 301, and 302 redirects, to redirect old urls to new locations due to updates in your content structure. 
- With Ghost, you can create content in markdown format.
- Ghost has a CLI to manage installations. 

#### Pros
1. **SQLite and MySQL support**: Ghost offers support for both SQLite and MySQL databases. 
2. **Markdown support** Ghost uses markdown for content creation, which makes writing content much easier. 
3. **Bloat free**: Ghost provides only whats neccessary to your project. Which leads to better performance, cleaner code. 
4. **Built in SEO tools**: Ghost provides built in SEO features such as clean HTML markup, XML site maps, and canonical tags to make SEO optimization easy.  

#### Cons:
1. **Limited website functionality**: Ghost is designed for blogging and is not suited to build complex, dynamic layouts. 
2. **Limited multi-language support**: Ghost does not directly support the creation of multilingual content and you would have to rely on third part integrations. 

#### Conclusion: 
A common use case for Ghost is running blogs. 

---

### Sanity

#### Overview: 
- Sanity provides developers with tools they need to create and manage their websites or applications. Sanity's flexibilty and its various features make content creation and management more efficient. 

#### Features
- Sanity Studio is the open-source and real time collaborative editing environment that Sanity provides for content creation and management. 
- Supports queries from a CDN using GraphQL, webhooks.
- Provides document version control. 
- Is API driven.
- Has an image processor to upload and edit images. 
- Custom integrations with third part services such as OAuth providers are also supported. 

#### Advantages
1. **Fast loading experince**: Sanity delivers content for a smooth experience. 
2. **Easy to use editing interface**: The editor for content creation and management is easy to use.
3. **Seamless video support**: Sanity provides seamless video integration across devices. 
4. **Scalable**: Scalable to meet the needs of your website/applications. 
5. **Supportive community**: Sanity has a friendly and supportive community. 

#### Disadvantages:
1. **Time-consuming Development**: Sanity's takes longer compared to some alternatives.
2. **Relies heavily on manual input**: Requires more manual setup than automated options.
3. **Higher maintenance needs**: Sanity requires more maintenance.
4. **Limited built-in editing tools**: Lacks some intuitive, user-friendly editing features.
5. **Expensive for large data**: It can be costly to manage large sets of data. 

#### Conclusion: 
Sanity CMS is flexible and customizable when it comes to content creation and maintains strong performance. 

---

### Prismic

#### Overview: 
- Prismic is a CMS that allows developers to create and manage content via an intuitive user interface. Primismic is API driven, meaning that it allows you to deliver your content through an API to any device or platform. 

#### Features
- Provides a user friendly interface for creating and managing content. 
- Has a great text editor to format your text without the need to write HTML code. 
- Images are optimized to deliver to any device. 

#### Advantages
1. **User friendly**: Prismic provides a flexible, user friendly and fast way to manage content. 
2. **Content versioning, live previews and managebale scheduling**.
3. **Simple integration**: Easy integrations for third party services. 
4. **Documentation**: Well written documentation. 
5. **Hosted in the cloud**: No need to maintain infrastuctre. 
6. **Reusable components**: Prismic has a feature knowns as "Slices" that allows resuable coding components for page builders. 

#### Disadvantages:
1. **Costly**: While Prismic does have a free tier, this has limited features and storage, therefore, paid plans can be costly depending on the size of your website and the traffic it gets. 
2. **No support for customzing and extending its features.**

#### Conclusion: 
Prismic is a good headless CMS that does hosting, image optimization, has reusable slices, provides customer support, making Prismic an efficient and reliable platform for building websites. 

---

### References

-   [What is Strapi and Why You Should Use it?](https://www.valuecoders.com/blog/technologies/what-is-strapi/#:~:text=Strapi%20is%20a%20free%20and,and%20delivering%20content%20through%20APIs.)
-   [Ghost vs. Contentful: Choosing the Right Headless CMS for Your Team](https://buttercms.com/blog/ghost-vs-contentful/#core-features-of-contentful)
-  [Sanity.io - The Most Popular Headless CMS Platform in 2023](https://staticmania.com/blog/sanity-cms-features-with-review)
-  [Prismic Reviews with Details](https://staticmania.com/blog/prismic-cms-reviews) 
   
---

### Strapi Implementation 

---

<figure>
    <img src="/public/img/example1.png" width="810" height="410"
         alt="Movie Collection">
     <figcaption>My Movie Collection, with its fields</figcaption>
</figure>

<figure>
    <img src="/public/img/example2.png" width="810" height="410"
         alt="Movie Entries">
     <figcaption>All the entries I've added to my Movie collection</figcaption>
</figure>

<figure>
    <img src="/public/img/example3.png" width="810" height="410"
         alt="Movie.js">
     <figcaption>Movie.js is a JavaScript file I created to grab data from the generated Strapi API, onto my site.</figcaption>
</figure>

<figure>
    <img src="/public/img/example4.png" width="810" height="300"
         alt="horrorMovies.js code snippet">
     <figcaption>This is a code sinppet from my horrorMovies.liquid file, which iterates through a paginated list of horror movies, displaying each as a card with an image, title, and description taken from the API </figcaption>
</figure>

---

### Prismic Implementation 

<figure>
    <img src="/public/img/example5.png" width="810" height="200"
         alt="Movie Collection">
     <figcaption>Movie is a content type I've initialized in Prismic with the fields, name, image and description</figcaption>
</figure>

<figure>
    <img src="/public/img/example6.png" width="810" height="250"
         alt="Movie Entries">
     <figcaption>All the entries I've added to my Movie collection</figcaption>
</figure>

<figure>
    <img src="/public/img/example7.png" width="810" height="410"
         alt="movie.js">
     <figcaption>movie.js is a JavaScript file I created to grab data from Prismic to my front end.</figcaption>
</figure>

<figure>
    <img src="/public/img/example8.png" width="810" height="300"
         alt="horrorMovies.js code snippet">
     <figcaption>This is a code sinppet from my horrorMovies.liquid file, which iterates through a paginated list of horror movies, displaying each as a card with an image, title, and description taken from the API </figcaption>
</figure>


---

### Why I chose Strapi as the headless CMS for this project, and for the future

I found Strapi to have a better UI for content creation and management, also, Strapi had more options when it came to customizing data types. Setting up and running my website using Strapi was easy because of the documentation in their website. Overall, I had a nice time using Strapi to create content and attaching it to my front end. 




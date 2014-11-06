## Vazco SlideDeck

### Demo

[vazco-slide-deck.meteor.com](http://vazco-slide-deck.meteor.com)

demo login: **slidedeck@vazco.eu**
demo password: **vazco123**

Remember that demo version is only for one user to be logged in at the same time so in this version of the page it is possible that you will interrupt each other.

## Usage

### Adding Slides

In ````client/slides```` you can add your slides. These are standard Meteor templates. Remember to add names with the ````vslide```` prefix and number (next in order) for example vslide1, vslide2 ... vslide23 etc.

For the tutorial purpose, we're attaching some demo slides.

### Running Live Slide Deck

When you start your presentation as an admin only you can switch the slides, but everyone who have the slideshow url will see slides changes live. The url:

```
http://vazco-slide-deck.meteor.com/slideshow

```

You can test it on mobile devices too.

### Styling

All styling you will find in ````client/slides/slides.styl```` We use Stylus here, but you can write standard css in this file too. (We also use simple but very elastic and useful grid system : [jeet.gs](http://jeet.gs)). There are some predefined classes in the demo slides. But you can add yours. For example:

```
.container
    center(1200px)
    .my-css-class
        cf()
        col(5/23)
        +below(486px)
            stack()
    .my-other-class
        cf()
        col(18/23)
        +below(486px)
            stack()

```

We have a centered and responsive container with max 1200px width and custom, responsive 23 column based grid in a row. You can define another grid in a second row etc. (you can set col(1999/9999999) too) We also have a simple naming convention for media queries. More: [Rupture](https://github.com/jenius/rupture) Here for example all blocks will be stacked below 486px. This is realy simple and readable. Read more: [jeet.gs](http://jeet.gs)

There is also Autoprefixer implemented so you don't have to write css prefixes. It is also up to date all the time in sync with [CanIUse.com](http://caniuse.com)

### Using Markdown

You can use markdown. Just use it like (spaces are important here): Markdown blocks can be different Meteor templates, it will be more legible.

```
{{#markdown}}
* list 1
* list 2

__strong__
{{/markdown}}
```

### Using Markdown with code highlighter

```
{{#markdown}}
    ```css
    .test {
        color: red;
    }
    ```

    ```javascript
    (fundtion () {
        var variable = 'variable';
    })();
    ```

    ```bash
    $ meteor list
    ```
{{/markdown}}
```

### Admin login

You should create  ````settings.json```` file and run meteor ````meteor --settings settings.json```` or deploy it with ````meteor deploy --settings settings.json your-domain.meteor.com````

Example settings.json:

```
{
    "admin": {
        "username": "admin",
        "email": "admin@mail.com",
        "password": "password"
    }
}
```

This file should be in .gitignore file. Only with this you will be able to login and run live presentation.

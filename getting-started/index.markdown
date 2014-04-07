---
layout: default
title: Getting Started
sections:
  - title: Installation
    slug: installation
  - title: Included Files
    slug: included-files
  - title: Configuration
    slug: configuration
---

<section class="doc-section installation" id="installation">

## Installation

First, just clone Melody within your SASS directory

{% highlight bash %}
git clone git@github.com:melodycss/melody.git melody
{% endhighlight %}

If you're already using git for your project, you can add the Melody repository as a git submodule

{% highlight bash %}
git submodule add git@github.com:melodycss/melody.git melody
{% endhighlight %}

Then, import the Melody stylesheet at the top of your main SASS stylesheet

{% highlight SASS %}
@import melody/melody
{% endhighlight %}

</section>

<section class="doc-section included-files" id="included-files">

## Included Files

{% highlight sass %}
melody
  |_melody.sass
  |modules
    |_config.sass
    |_grid.sass
    |_mixins.sass
    |_reset.sass
    |_type.sass
{% endhighlight %}

</section>

<section class="doc-section configuration" id="configuration">

## Configuration

All the variables required for configuring Melody are found within `_config.sass`.

#### Fonts

Four variables, defining the font stacks used throughout the site. Some sensible defaults are provided.

{% highlight sass %}
$primary: "Georgia", "Times New Roman", serif
$secondary: "Helvetica Neue", "Helvetica", "Arial", sans-serif
$heading: "Georgia", "Times New Roman", serif
$mono: "Courier New", "Inconsolata", monospace
{% endhighlight %}

#### Grid

Variables for configuring layouts

{% highlight sass %}
// The maximum width of the .container element
// (usually used as a wrapper around the page content)
$container_width: 42em

// Sets the baseline size used throughout
$baseline: 1.5em

// If true, sets a background-image on the body
// showing the baseline to ensure correct vertical flow
$show_baseline: false

// If true, increases the font size at the defined breakpoints
$type_scaling: false
{% endhighlight %}

#### Breakpoints

{% highlight sass %}
$bp_medium: 36em
$bp_large: 48em
{% endhighlight %}

#### Colors

{% highlight sass %}
// The base text color
$dark: #282828

// Used in the default styles for accent colors
$shade: rgba($dark, .05)
{% endhighlight %}

</section>
---
layout: default
title: Typography
sections:
  - title: Headings
    slug: headings
  - title: Quotes
    slug: quotes
  - title: Lists
    slug: lists
---

At the heart of all good CSS is structured typography. Melody includes the following elements, styled and ready to go.

Where possible, they follow the HTML output by [Markdown](http://daringfireball.net/projects/markdown/syntax) parsers.

<section class="doc-section headings" id="headings">
## Headings

# Heading 1
<h1 class="alt">Heading 1 Alternate</h1>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<h1>Heading 1</h1>
<h1 class="alt">Heading 1</h1>
{% endhighlight %}
</div>

## Heading 2
<h2 class="alt">Heading 2 Alternate</h2>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<h2>Heading 2</h2>
<h2 class="alt">Heading 2</h2>
{% endhighlight %}
</div>

### Heading 3
<h3 class="alt">Heading 3 Alternate</h3>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<h3>Heading 3</h3>
<h3 class="alt">Heading 3</h3>
{% endhighlight %}
</div>

#### Heading 4
<h4 class="alt">Heading 4 Alternate</h4>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<h4>Heading 4</h4>
<h4 class="alt">Heading 4</h4>
{% endhighlight %}
</div>

##### Heading 5
<h5 class="alt">Heading 5 Alternate</h5>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<h5>Heading 5</h5>
<h5 class="alt">Heading 5</h5>
{% endhighlight %}
</div>

###### Heading 6
<h6 class="alt">Heading 6 Alternate</h6>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<h6>Heading 6</h6>
<h6 class="alt">Heading 6</h6>
{% endhighlight %}
</div>
</section>

<section class="doc-section quotes" id="quotes">
## Quotes

#### Basic Blockquote

> Sucking at something is the first step to becoming sorta good at something.
  <cite>Jake the Dog, Adventure Time</cite>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<blockquote>
  <p>
    Sucking at something is the first step to becoming sorta good at something.
    <cite>Jake the Dog, Adventure Time</cite>
  </p>
</blockquote>
{% endhighlight %}

</div>

#### Pull Quote

<blockquote class="pull">
  <p>
    Sucking at something is the first step to becoming sorta good at something.
    <cite>Jake the Dog, Adventure Time</cite>
  </p>
</blockquote>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<blockquote class="pull">
  <p>
    Sucking at something is the first step to becoming sorta good at something.
    <cite>Jake the Dog, Adventure Time</cite>
  </p>
</blockquote>
{% endhighlight %}

</div>
</section>

<section class="doc-section lists" id="lists">

## Lists

#### Bullets

* Item One
* Item Two
* Item Three
    * Nested Item One
    * Nested Item Two
* Item Four

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>
    Item Three
    <ul>
      <li>Nested Item One</li>
      <li>Nested Item Two</li>
    </ul>
  </li>
  <li>Item Four</li>
</ul>
{% endhighlight %}

</div>

#### Numbered

1. Item One
2. Item Two
3. Item Three
    1. Nested Item One
    2. Nested Item Two
4. Item Four

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<ol>
  <li>Item One</li>
  <li>Item Two</li>
  <li>
    Item Three
    <ol>
      <li>Nested Item One</li>
      <li>Nested Item Two</li>
    </ol>
  </li>
  <li>Item Four</li>
</ol>
{% endhighlight %}

</div>

</section>

<section class="doc-section figures" id="figures">

## Figures

#### Basic

<figure>
  <img src="http://www.placecage.com/300/200" alt="Nicholas Cage">
  <figcaption>
    <p>
      Check out that tash yo!
      <cite><a href="http://placecage.com">placecage.com</a></cite>
    </p>
  </figcaption>
</figure>

<div class="split-code">

  <h6>HTML</h6>

{% highlight html %}
<figure>
  <img src="http://www.placecage.com/300/200" alt="Nicholas Cage">
  <figcaption>
    <p>
      Check out that tash yo!
      <cite><a href="http://placecage.com">placecage.com</a></cite>
    </p>
  </figcaption>
</figure>
{% endhighlight %}

</div>

#### Full Width

<figure class="full-width">
  <img src="http://www.placecage.com/300/200" alt="Nicholas Cage">
  <figcaption>
    <p>
      Check out that tash yo!
      <cite><a href="http://placecage.com">placecage.com</a></cite>
    </p>
  </figcaption>
</figure>

<div class="split-code">

  <h6>HTML</h6>

{% highlight html %}
<figure class="full-width">
  <img src="http://www.placecage.com/300/200" alt="Nicholas Cage">
  <figcaption>
    <p>
      Check out that tash yo!
      <cite><a href="http://placecage.com">placecage.com</a></cite>
    </p>
  </figcaption>
</figure>
{% endhighlight %}

</div>

</section>
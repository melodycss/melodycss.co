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

At the heart of all good CSS is structured typography. Melody includes the following elements, styled and ready to go

<section class="doc-section headings" id="headings">
## Headings

# h1

## h2

### h3

#### h4

##### h5

###### h6
</section>

<section class="doc-section quotes" id="quotes">
## Quotes

#### Basic Blockquote

> Sucking at something is the first step to becoming sorta good at something.
  <cite>Jake the Dog, Adventure Time</cite>

{% highlight html %}
<blockquote>
  <p>
    Sucking at something is the first step to becoming sorta good at something.
    <cite>Jake the Dog, Adventure Time</cite>
  </p>
</blockquote>
{% endhighlight %}

#### Pull Quote

<blockquote class="pull">
  <p>
    Sucking at something is the first step to becoming sorta good at something.
    <cite>Jake the Dog, Adventure Time</cite>
  </p>
</blockquote>

{% highlight html %}
<blockquote class="pull">
  <p>
    Sucking at something is the first step to becoming sorta good at something.
    <cite>Jake the Dog, Adventure Time</cite>
  </p>
</blockquote>
{% endhighlight %}
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

#### Numbered

1. Item One
2. Item Two
3. Item Three
    1. Nested Item One
    2. Nested Item Two
4. Item Four

</section>
---
layout: default
title: Layouts
sections:
  - title: Splits
    slug: splits
  - title: Flexible Grids
    slug: grids
---

Melody includes simple layut mixins, which when applied to the *parent*, arrange all its children in the specified layout. Any elements can be used, and layout styles are applied using `:nth-child` selectors, keeping your markup semantic and clean.

<section class="doc-section splits" id="splits">
## Split

A mixin for providing a two column layout based on simple ratios

#### Golden Ratio

<section class="golden-ratio-split-example">
  <aside>The Left Side</aside>
  <article>The Right Side</article>
</section>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<section class="golden-ratio-split-example">
  <aside>The Left Side</aside>
  <article>The Right Side</article>
</section>
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SCSS</h6>
{% highlight scss %}
.golden-ratio-split-example {
  @mixin split(1, 1.618)
}
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SASS</h6>
{% highlight sass %}
.golden-ratio-split-example
  +split(1, 1.618)
{% endhighlight %}

</div>

#### Quarters

<section class="quarters-split-example">
  <article>The Left Side</article>
  <aside>The Right Side</aside>
</section>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<section class="quarters-split-example">
  <article>The Left Side</article>
  <aside>The Right Side</aside>
</section>
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SCSS</h6>
{% highlight scss %}
.quarters-split-example {
  @mixin split(3, 1)
}
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SASS</h6>
{% highlight sass %}
.quarters-split-example
  +split(3, 1)
{% endhighlight %}

</div>

#### Multiple Rows

The `split` mixin works on multiple rows as well. Take this golden ratio example with 6 divs:

<section class="golden-ratio-multi-row-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</section>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<section class="golden-ratio-multi-row-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</section>
{% endhighlight %}
</div>

<div class="split-code">

  <h6>SCSS</h6>
{% highlight scss %}
.golden-ratio-multi-row-example {
  @mixin split(1, 1.618)
}
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SASS</h6>
{% highlight sass %}
.golden-ratio-multi-row-example
  +split(1, 1.618)
{% endhighlight %}

</div>
</section>

<section class="doc-section grids" id="grids">
## Flexible Grids

Arrange elements into a grid of equal-sized columns, based on the breakpoints `$bp_medium` and `$bp_large` provided in `_config.sass`.

<div class="grid-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<div class="grid-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SCSS</h6>
{% highlight scss %}
.grid-example {
  @mixin grid(4, 2, 1)
}
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SASS</h6>
{% highlight sass %}
.grid-example
  +grid(4, 2, 1)
{% endhighlight %}

</div>


The above arranges the divs within `.grid-example` into a grid layout, with 1 column by default, 2 columns at screen sizes above `$bp_medium`, and 4 columns at screen sizes above `$bp_large`.
</section>
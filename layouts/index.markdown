---
layout: default
title: Layouts
sections:
  - title: Splits
    slug: splits
  - title: Flexible Grids
    slug: grids
---

Melody includes simple layout mixins, which when applied to the *parent*, arrange all its children in the specified layout. Any elements can be used, and layout styles are applied using `:nth-child` selectors, keeping your markup semantic and clean.

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
  @include split(1, 1.618);
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
  @include split(3, 1);
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

The `split` mixin automatically works across multiple rows, and takes an optional third parameter, defining the breakpoint above which the split occurs. Take this golden ratio example with 6 divs, and a much smaller breakpoint:

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
  @include split(1, 2.618, 24em);
}
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SASS</h6>
{% highlight sass %}
.golden-ratio-multi-row-example
  +split(1, 2.618, 24em)
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
  @include grid(1, 2, 4);
}
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SASS</h6>
{% highlight sass %}
.grid-example
  +grid(1, 2, 4)
{% endhighlight %}

</div>

The above arranges the divs within `.grid-example` into a grid layout, with 1 column by default, 2 columns at screen sizes above `$bp_medium`, and 4 columns at screen sizes above `$bp_large`.

You can also override the medium and large breakpoints, by specifying them as 4th and 5th arguments respectively:

<div class="grid-mq-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<div class="grid-mq-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SCSS</h6>
{% highlight scss %}
.grid-mq-example {
  @include grid(2, 3, 6, 64em, 96em);
}
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SASS</h6>
{% highlight sass %}
.grid-mq-example
  +grid(2, 3, 6, 64em, 96em)
{% endhighlight %}

</div>
</section>

<section class="doc-section rows" id="rows">
## Rows

When building grids, you may want to modify specific rows within your grid. You can style the first and last rows using the `first-row()` and `last-row()` mixins. The syntax matches that of the `grid()` mixin:

<div class="row-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<div class="row-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SCSS</h6>
{% highlight scss %}
.row-example {
  @include grid(1, 2, 3);

  @include first-row(1, 2, 3) {
    background: #ECCC87;
    color: #2B303B;
  }

  @include last-row(1, 2, 3) {
    background: #57ADB9;
  }
}
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SASS</h6>
{% highlight sass %}
.row-example
  +grid(1, 2, 3)

  +first-row(1, 2, 3)
    background: #ECCC87
    color: #2B303B

  +last-row(1, 2, 3)
    background: #57ADB9
{% endhighlight %}

</div>

As well as targeting the first and last rows of your grid, you can also target specific rows using the `nth-row()` and `nth-last-row()` mixins. Add the number of the row to target as an additional parameter before the columns:

<div class="row-example-two">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<div class="row-example-two">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SCSS</h6>
{% highlight scss %}
.row-example-two {
  @include grid(1, 2, 3);

  @include nth-row(2, 1, 2, 3) {
    background: #ECCC87;
    color: #2B303B;
  }

  @include nth-last-row(2, 1, 2, 3) {
    background: #57ADB9;
  }
}
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SASS</h6>
{% highlight sass %}
.row-example-two
  +grid(1, 2, 3)

  +nth-row(2, 1, 2, 3)
    background: #ECCC87
    color: #2B303B

  +nth-last-row(2, 1, 2, 3)
    background: #57ADB9
{% endhighlight %}

</div>
</section>

<section class="doc-section columns" id="columns">
## Columns

There are also mixins for targeting columns, following the syntax of the row mixins:

<div class="column-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>

<div class="split-code">

  <h6>HTML</h6>
{% highlight html %}
<div class="row-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SCSS</h6>
{% highlight scss %}
.column-example {
  @include grid(2, 4, 6);

  @include first-column(2, 4, 6) {
    background: #ECCC87;
    color: #2B303B;
  }

  @include nth-column(3, 2, 4, 6) {
    background: #2B303B;
  }

  @include last-column(2, 4, 6) {
    background: #57ADB9;
  }
}
{% endhighlight %}

</div>

<div class="split-code">

  <h6>SASS</h6>
{% highlight sass %}
.column-example
  +grid(2, 4, 6)

  +first-column(2, 4, 6)
    background: #ECCC87
    color: #2B303B

  +nth-column(3, 2, 4, 6)
    background: #2B303B

  +last-column(2, 4, 6)
    background: #57ADB9
{% endhighlight %}

</div>
</section>

<section class="doc-section notes">

<div class="split-note">

  <h6>NOTE</h6>
  <div>
    <p>
      All the examples on this page use the following SASS rules for display purposes.
    </p>
    <p>
      Other than that defined below, all CSS rules applied are within the mixin(s) that the example describes.
    </p>
  </div>

  <h6></h6>

{% highlight sass %}
.example
  margin-bottom: $baseline

  @for $i from 1 through 12
    & > :nth-child(#{$i})
      background: rgba($red, (1 - (.05 * $i)))
      color: white
      text-align: center
      padding: $baseline
{% endhighlight %}

</div>

</section>
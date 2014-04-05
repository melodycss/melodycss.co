---
layout: default
title: Layouts
sections:
  - title: Splits
    slug: splits
  - title: Flexible Grids
    slug: grids
---

<section class="doc-section splits" id="splits">
#### Split

A mixin for providing a two column layout based on simple ratios

###### Golden Ratio

<div class="golden-ratio-split-example">
  <div>The Left Side</div>
  <div>The Right Side</div>
</div>

{% highlight html %}
<div class="golden-ratio-split-example">
  <div>The Left Side</div>
  <div>The Right Side</div>
</div>
{% endhighlight %}

<div class="split-code">
  <div>
    <h4>SCSS</h4>
{% highlight scss %}
.golden-ratio-split-example {
  @mixin split(1, 1.618)
}
{% endhighlight %}
  </div>
  <div>
    <h4>SASS</h4>
{% highlight sass %}
.golden-ratio-split-example
  +split(1, 1.618)
{% endhighlight %}
  </div>
</div>

###### Quarters

<div class="quarters-split-example">
  <div>The Left Side</div>
  <div>The Right Side</div>
</div>

{% highlight html %}
<div class="quarters-split-example">
  <div>The Left Side</div>
  <div>The Right Side</div>
</div>
{% endhighlight %}

<div class="split-code">
  <div>
    <h4>SCSS</h4>
{% highlight scss %}
.quarters-split-example {
  @mixin split(3, 1)
}
{% endhighlight %}
  </div>
  <div>
    <h4>SASS</h4>
{% highlight sass %}
.quarters-split-example
  +split(3, 1)
{% endhighlight %}
  </div>
</div>

</section>

<section class="doc-section grids" id="grids">
#### Flexible Grids

Arrange elements into a grid of equal-sized columns, based on the breakpoints `$bp_medium` and `$bp_large` provided in `_config.sass`.

<div class="grid-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>

{% highlight html %}
<div class="grid-example">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
{% endhighlight %}

<div class="split-code">
  <div>
    <h4>SCSS</h4>
{% highlight scss %}
.grid-example {
  @mixin grid(4, 2, 1)
}
{% endhighlight %}
  </div>
  <div>
    <h4>SASS</h4>
{% highlight sass %}
.grid-example
  +grid(4, 2, 1)
{% endhighlight %}
  </div>
</div>


The above arranges the divs within `.grid-example` into a grid layout, with 1 column by default, 2 columns at screen sizes above `$bp_medium`, and 4 columns at screen sizes above `$bp_large`.
</section>
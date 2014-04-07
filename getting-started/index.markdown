---
layout: default
title: Getting Started
sections:
  - title: Installation
    slug: installation
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
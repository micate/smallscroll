a small jQuery scroll plugin.

usage for example:

structure
<pre lang="html">
&lt;div class="mod-scroll"&gt;
    &lt;div class="scroll-element"&gt;
    a lot of content / image list etc.
    &lt;/div&gt;
&lt;/div>
</pre>

style
<pre lang="css">
.mod-scroll {
    height: 200px;
    overflow: hidden;
    position: relative;
}
.mod-scroll .scroll-element {
    position: relative;
}
</pre>

<pre lang="javascript">
$('.mod-scroll').smallscroll({
    element: '.scroll-element',
    upButton: '.scroll-arrow-up',
    downButton: '.scroll-arrow-down',
    step: 164
});
</pre>

step can also passed by callback:

<pre lang="javascript">
$('.mod-scroll').smallscroll({
    element: '.scroll-element',
    upButton: '.scroll-arrow-up',
    downButton: '.scroll-arrow-down',
    step: function() {
        return this.element.find('>.item-list:first').outerHeight(true);
    }
});
</pre>
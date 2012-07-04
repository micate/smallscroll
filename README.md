a small jQuery scroll plugin.

usage for example:

<pre lang="javascript">
$('.article').smallscroll({
    element: '.article_container',
    upButton: '.page_arrow_toparrow',
    downButton: '.page_arrow_botarrow',
    step: 164
});
</pre>

step can also passed by callback:

<pre lang="javascript">
$('.article').smallscroll({
    element: '.article_container',
    upButton: '.page_arrow_toparrow',
    downButton: '.page_arrow_botarrow',
    step: function() {
        return this.element.find('>.pastevent_list:first').outerHeight(true);
    }
});
</pre>

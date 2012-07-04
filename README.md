a small jQuery scroll plugin.

usage for example:

<code lang="javascript">
$('.article').smallscroll({
    element: '.article_container',
    upButton: '.page_arrow_toparrow',
    downButton: '.page_arrow_botarrow',
    step: 164
});
</code>

step can also passed by callback:

<code lang="javascript">
$('.article').smallscroll({
    element: '.article_container',
    upButton: '.page_arrow_toparrow',
    downButton: '.page_arrow_botarrow',
    step: function() {
        return this.element.find('>.pastevent_list:first').outerHeight(true);
    }
});
</code>

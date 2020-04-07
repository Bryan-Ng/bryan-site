//Grid resizing for projects and research portfolio pages from @andybarefoot
    //calculating the number of rows from grid item
    function resizeGridItem(item){
        grid = document.getElementsByClassName("grid")[0];
        rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
        item.style.gridRowEnd = "span "+rowSpan;
    }
    //loop to resize all items in the grid
    function resizeAllGridItems(){
        allItems = document.getElementsByClassName("item");
        for(x=0;x<allItems.length;x++){
           resizeGridItem(allItems[x]);
        }
     }
    //resize all items after page loads
    window.onload = resizeAllGridItems();
    //resizes width of columns when browser is resized
    window.addEventListener("resize", resizeAllGridItems);
    //resizes grid for loaded images
    allItems = document.getElementsByClassName("item");
        for(x=0;x<allItems.length;x++){
        imagesLoaded( allItems[x], resizeInstance);
    }
    function resizeInstance(instance){
        item = instance.elements[0];
        resizeGridItem(item);
    }

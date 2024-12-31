const path = require('path');

window.navigationStack = [];
window.navigationStackPointer = -1;

window.openPage = (pageName, ...args)=>
{
    const newPage = document.createElement(pageName);


    if(newPage.initialize)
    {
        newPage.initialize(...args);
    }   

    window.navigationStack.forEach((page)=>{ page.style.display = "none";});

    newPage.style.display = "flex";
    newPage.style.flexDirection = "column";
    newPage.style.height = "100%";
    
    document.body.appendChild(newPage);

   
    window.navigationStack.length = window.navigationStackPointer + 1;

    window.navigationStack.push(newPage);
    window.navigationStackPointer++;

    const headerComponent = newPage.querySelector("header-component");
    
    if(headerComponent)
    {
        if(window.navigationStackPointer <= 0)
        {
            headerComponent.hideBackButton();
        }
        else
        {
            headerComponent.showBackButton();
        }
    }


}

window.goBack = ()=>
{
    if(window.navigationStackPointer !== -1)
    {
        window.navigationStack[window.navigationStackPointer].style.display = "none";
        window.navigationStackPointer--;
        window.navigationStack[window.navigationStackPointer].style.display = "flex";
    }

    const headerComponent = window.navigationStack[window.navigationStackPointer].querySelector("header-component");
    
    if(headerComponent)
    {
        if(window.navigationStackPointer <= 0)
        {
            headerComponent.hideBackButton();
        }
        else
        {
            headerComponent.showBackButton();
        }
    }
    
}

window.clearAndOpenPage = (pageName, ...args)=>
{
    window.openPage(pageName, ...args);
    
    window.navigationStack[0] = window.navigationStack[window.navigationStackPointer]
    window.navigationStack.length = 1;
    window.navigationStackPointer = 0;
}

window.goNext = ()=>
{
    if(window.navigationStackPointer < (window.navigationStack.length -1))
    {
        window.navigationStack[window.navigationStackPointer].style.display = "none";
        window.navigationStackPointer++;
        window.navigationStack[window.navigationStackPointer].style.display = "flex";
        initializeStyles();
    }

    const headerComponent = document.querySelector('header-component');
    if(window.navigationStackPointer <= 0)
    {
        headerComponent.hideBackButton();
    }
    else
    {
        headerComponent.showBackButton();
    }
}

window.removePage = (page) => 
{
    const index = window.navigationStack.indexOf(page);
    if (index > -1) 
    {
        window.navigationStack[index].style.display = "none";
        window.navigationStack.splice(index, 1);
        window.navigationStackPointer--;
        window.navigationStack[window.navigationStackPointer].style.display = "flex";

        const headerComponent = window.navigationStack[window.navigationStackPointer].querySelector("header-component");
    
        if(headerComponent)
        {
            if(window.navigationStackPointer <= 0)
            {
                headerComponent.hideBackButton();
            }
            else
            {
                headerComponent.showBackButton();
            }
        }
    }
};







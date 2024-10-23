document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(buttonSelect) {
            const tabTarget = buttonSelect.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            allButtonsRemove();
            allTabsRemove();
            tab.classList.add('shows__list--is--active');
            buttonSelect.target.classList.add('shows__tabs__button--is--active');
        })
    }
})

function allButtonsRemove () {
    const buttonsContainer = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttonsContainer.length; i++) {
        buttonsContainer[i].classList.remove('shows__tabs__button--is--active');
    }
}

function allTabsRemove() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}
const tooltips = document.querySelectorAll('.tooltip');

function prepareTooltip(el) {
    const aElement = document.createElement('a');
    const spanElement = document.createElement('span');

    const tooltipUrl = el.dataset.url;
    const tooltipType = el.dataset.tooltipType;
    const tooltipContent = el.dataset.tooltipContent;

    aElement.href = tooltipUrl;
    aElement.textContent = el.textContent;

    spanElement.classList.add('tooltip__box')

    if (tooltipType === 'text') {
        createTooltipText(spanElement, tooltipContent)
    } else {
        createTooltipImage(spanElement, tooltipContent)
    }

    el.textContent = '';
    el.appendChild(aElement);
    el.appendChild(spanElement);
}

function createTooltipText(element, content) {
    element.textContent = content;
    element.classList.add('tooltip__box--text');
}

function createTooltipImage(element, content) {
    const imgElement = document.createElement('img');
    imgElement.classList.add('tooltip__image');
    imgElement.src = content;
    element.appendChild(imgElement);
    element.classList.add('tooltip__box--image');
}

tooltips.forEach(prepareTooltip);


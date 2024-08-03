const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];

const articleElement = document.querySelector('.article__list');
const ulElement = document.createElement('ul');
articleElement.appendChild(ulElement);

function createElements(element) {
    const liElement = document.createElement('li');
    liElement.dataset.id = element.id;

    const aElement = document.createElement('a');
    aElement.href = element.link;
    aElement.innerText = element.text;
    liElement.appendChild(aElement);

    return liElement;
}

list.forEach(function (element) {
    if(element.parentId === null) {
        const newList = createElements(element);
        ulElement.appendChild(newList);
    } 
});

const articleLiElement = articleElement.querySelectorAll('li');

articleLiElement.forEach(function(element) {
    const id = Number(element.dataset.id);
    const children = list.filter(function(item) {
        return item.parentId === id;
    });

    if(children.length > 0) {
        const nestedUlElement = document.createElement('ul');
        children.forEach(function(child) {
            const nestedLi = createElements(child);
            nestedUlElement.appendChild(nestedLi);
        });
        element.appendChild(nestedUlElement);
    }
});
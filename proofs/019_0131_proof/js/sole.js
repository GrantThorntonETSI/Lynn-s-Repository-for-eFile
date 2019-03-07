var link = document.querySelector('link[rel="import"]#sole');

// Clone the <template> in the import.
var template = link.import.querySelector('template');
var clone = document.importNode(template.content, true);

document.querySelector('#container').appendChild(clone);

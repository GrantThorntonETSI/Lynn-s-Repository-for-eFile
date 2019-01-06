var link = document.querySelector('link[rel="import"]#corp');

// Clone the <template> in the import.
var template = link.import.querySelector('template');
var clone = document.importNode(template.content, true);

document.querySelector('#container').appendChild(clone);

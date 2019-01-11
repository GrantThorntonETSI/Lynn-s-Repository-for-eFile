var link = document.querySelector('link[rel="import"]#corpforeignbahamas');

// Clone the <template> in the import.
var template = link.import.querySelector('template');
var clone = document.importNode(template.content, true);

document.querySelector('#containerforeign').appendChild(clone);

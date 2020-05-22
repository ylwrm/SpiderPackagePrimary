const div = document.createElement('div');
document.body.appendChild(div);
let table: SpiderTable|undefined = new SpiderTable();
table.init(div);
table = undefined;

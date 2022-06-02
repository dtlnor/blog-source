import fastglob from 'fast-glob';
import fs from 'fs';

/** @type {{icons: Record<String, {name: String}>}} */
const ijmapOriginal = await fetch(
    'https://fastly.jsdelivr.net/npm/mdui@1/src/icons/material-icons/MaterialIcons-Regular.ijmap'
).then(r => r.json());
/** @type {Map<String, Number>} */
const ijmap = new Map(
    Object
        .entries(ijmapOriginal.icons)
        .map(
            ([k, v]) => [v.name.toLowerCase().split(' ').join('_'), parseInt(k, 16)]
        )
);
const icons = Array.from(
    (await Promise.all(
        fastglob
            .sync('../transparentlc.github.io/**/*.{html,js,css}')
            .map(
                async e => Array.from(
                    (await fs.promises.readFile(e, {encoding: 'utf-8'})).matchAll(/<i class="(?:.+? )?mdui-icon(?: .+?)?">(.+?)<\/i>/g)
                ).map(e => e[1])
            )
    )).reduce((acc, cur) => cur.forEach(e => acc.add(e)) || acc, new Set)
);
console.log(icons.map(e => [e, ijmap.get(e).toString(16)]));

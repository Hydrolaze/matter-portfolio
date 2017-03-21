var header = {
    name: 'header',
    href: 'http://www.sunyhakas.com',
    iconType: 'image',
    iconSrc: 'rasters/Sunyhakas-header.png',
    $: $('header')
};

$(document).ready(function () {

    grow(1, map[0]);

});

function grow(set, root) {

    var mapLen = parseInt(map[set].length);
    root.tree = $('<div class="tree"></div>');
    $('#frame').append(root.tree);
    root.tree.width((mapLen * config.iconWidth) + ((mapLen - 1) * config.iconSpacing)).height(config.treeHeight).css({
            'left': ($('#frame').width() / 2) - (root.tree.width() / 2) + 'px',
            'top': root.$.offset().top + root.$.height() + config.margin + 'px'
        });

    var stem = $('<div class="line"></div>');
    root.tree.append(stem);
    stem.width(config.lineWidth).height((config.treeHeight / 2) - (config.lineWidth / 2))
        .css({
            'left': (root.tree.width() / 2) - (config.lineWidth / 2) + 'px',
            'top': '0'
        });

    var bar = $('<div class="line"></div>');
    root.tree.append(bar);
    bar.width(((mapLen - 1) * config.iconWidth) + ((mapLen - 1) * config.iconSpacing) + config.lineWidth).height(config.lineWidth).css({
        'left': (config.iconWidth / 2) - (config.lineWidth / 2) + 'px',
        'top': (config.treeHeight / 2) - (config.lineWidth / 2) + 'px'
    });


    var branches = [];
    for (i in map[set]) {
        branches[i] = $('<div class="line"></div>');
        root.tree.append(branches[i]);
        branches[i].width(config.lineWidth).height((config.treeHeight / 2) - (config.lineWidth / 2))
            .css({
                'left': (config.iconWidth / 2) - (config.lineWidth / 2) + (i * (config.iconWidth + config.iconSpacing)) + 'px',
                'top': (config.treeHeight / 2) + (config.lineWidth / 2) + 'px'
            });
        var leaf = initLeaf(map[set][i], root.tree);
        leaf.css({
                'left': root.tree.offset().left + (i * (config.iconWidth + config.iconSpacing)) + 'px',
                'top': root.tree.offset().top + root.tree.height() + config.margin + 'px'
            });
    };

}

function initLeaf(obj, tree) {

    var leaf = $('<a class="leaf" href="' + obj.href + '"></a>');
    $('#frame').append(leaf);
    leaf.width(config.iconWidth);
    
    var icon;
    if (obj.iconType == 'image') {
        icon = $('<img src="' + obj.iconSrc + '" alt="' + name + '">');
    } else {
        console.error("An icon was initialised with an invalid iconType attribute");
    }
    leaf.append(icon);
    icon.width(config.iconWidth).height(config.iconWidth);
    
    leaf.append('<p class="name">' + obj.name + '</p>')
    return leaf;

}

var config = {
    treeHeight: 100,
    margin: 10,
    iconWidth: 100,
    iconSpacing: 50,
    lineWidth: 3
};

var main = [
    {
        name: "aaron's page",
        href: 'pages/aaron/index.html',
        iconType: 'image',
        iconSrc: 'vectors/AA.svg'
    },
    {
        name: "amanda's page",
        href: 'pages/amanda/index.html',
        iconType: 'image',
        iconSrc: 'vectors/AM.svg'
    },
    {
        name: "tim's page",
        href: 'pages/tim/index.html',
        iconType: 'image',
        iconSrc: 'vectors/TI.svg'
    },
    {
        name: "portfolio",
        href: 'pages/portfolio/index.html',
        iconType: 'image',
        iconSrc: 'vectors/P.svg'
    }
];

var map = [
    header,
    main
];
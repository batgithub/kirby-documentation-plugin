<?php

Kirby::plugin('baptiste/kirby-documentation-plugin', [
    'blueprints' => [
        'pages/documentation'  => __DIR__ . '/blueprints/pages/documentation.yml',
        'pages/documentation-post'  => __DIR__ . '/blueprints/pages/documentation-post.yml',
    ],
    'templates' => [
        'documentation'  => __DIR__ . '/templates/documentation.php',
    ],
    'snippets' => [
        'header'  => __DIR__ . '/snippets/header.php',
    ]
]);
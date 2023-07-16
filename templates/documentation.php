<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?= css('/media/plugins/baptiste/kirby-documentation-plugin/styles/main.css') ?>
</head>
<body>
    <header>
        <a href="">
            <?= $page->website_logo()->toFile() ?>
        </a>
        <nav>
            <div>
                <a href=""></a>
            </div>
        </nav>
    </header>
    <main>
        <section>
            <h1 class="text-xl"><?= $page->title() ?>/h1>
            <p>Version kirby -</p>
        </section>
        <section>
            <?php foreach($page->children() as $item): ?>
                <?php snippet('modules/post', ['item'=>$item]) ?>
            <?php endforeach;  ?>
        </section>

    </main>
</body>
</html>
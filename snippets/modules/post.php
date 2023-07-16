<article>
    <div><?= $item->published_date()->toDate() ?></div>
    <h2><?= $item->title() ?></h2>
    zef
    <div>
        <?= $item->text()->kt() ?>
    </div>
</article>
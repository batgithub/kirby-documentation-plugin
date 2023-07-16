<article>
    <div><?= $item->published_date()->toDate() ?></div>
    <h2></h2>
    <div>
        <?= $item->text()->kt() ?>
    </div>
</article>
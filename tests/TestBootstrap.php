<?php declare(strict_types=1);

use Shopware\Core\TestBootstrapper;

$loader = (new TestBootstrapper())
    ->addCallingPlugin()
    ->addActivePlugins('TwoMoonsSlider')
    ->bootstrap()
    ->getClassLoader();

$loader->addPsr4('TwoMoonsSlider\\Tests\\', __DIR__);
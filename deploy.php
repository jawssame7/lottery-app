<?php
namespace Deployer;

require 'recipe/laravel.php';

// Config

set('repository', 'git@github.com:jawssame7/lottery-app.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('conoha-deployer')
    ->set('remote_user', 'deployer')
    ->set('deploy_path', '~/workspace/lottery-app')
    ->set('branch', 'master')
    ->set('writable_mode', 'chmod');

// Hooks

after('deploy:failed', 'deploy:unlock');
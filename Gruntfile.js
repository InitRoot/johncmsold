module.exports = function (grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Копируем файлы из исходников
        copy: {
            distributive: {
                files: [
                    {
                        expand: true,
                        src: [
                            '**/**',
                            '.htaccess',
                            'files/.htaccess',

                            '!files/cache/**/*',
                            'files/cache/.htaccess',
                            '!files/downloads/files/**/*',
                            'files/downloads/files/index.php',

                            '!system/config/database.local.php',
                            '!system/config/system.local.php',

                            '!system/vendor/container-interop/container-interop/docs/**',
                            '!system/vendor/container-interop/container-interop/composer.json',

                            '!system/vendor/erusev/parsedown/test/**',
                            '!system/vendor/erusev/parsedown/composer.json',
                            '!system/vendor/erusev/parsedown/phpunit.xml.dist',

                            '!system/vendor/geshi/geshi/src/geshi/*',
                            'system/vendor/geshi/geshi/src/geshi/css.php',
                            'system/vendor/geshi/geshi/src/geshi/html5.php',
                            'system/vendor/geshi/geshi/src/geshi/javascript.php',
                            'system/vendor/geshi/geshi/src/geshi/php.php',
                            'system/vendor/geshi/geshi/src/geshi/sql.php',
                            'system/vendor/geshi/geshi/src/geshi/xml.php',
                            '!system/vendor/geshi/geshi/src/contrib/**',
                            '!system/vendor/geshi/geshi/src/docs/**',
                            '!system/vendor/geshi/geshi/build.properties.dist',
                            '!system/vendor/geshi/geshi/build.xml',
                            '!system/vendor/geshi/geshi/composer.json',

                            '!system/vendor/verot/class.upload.php/test/**',
                            '!system/vendor/verot/class.upload.php/composer.json',

                            '!system/vendor/zendframework/zend-i18n/doc/**',
                            '!system/vendor/zendframework/zend-i18n/CHANGELOG.md',
                            '!system/vendor/zendframework/zend-i18n/composer.json',
                            '!system/vendor/zendframework/zend-i18n/CONDUCT.md',
                            '!system/vendor/zendframework/zend-i18n/CONTRIBUTING.md',
                            '!system/vendor/zendframework/zend-i18n/mkdocs.yml',

                            '!system/vendor/zendframework/zend-servicemanager/benchmarks/**',
                            '!system/vendor/zendframework/zend-servicemanager/doc/**',
                            '!system/vendor/zendframework/zend-servicemanager/CHANGELOG.md',
                            '!system/vendor/zendframework/zend-servicemanager/CONDUCT.md',
                            '!system/vendor/zendframework/zend-servicemanager/CONTRIBUTING.md',
                            '!system/vendor/zendframework/zend-servicemanager/composer.json',
                            '!system/vendor/zendframework/zend-servicemanager/phpbench.json',
                            '!system/vendor/zendframework/zend-servicemanager/phpcs.xml',
                            '!system/vendor/zendframework/zend-servicemanager/mkdocs.yml',

                            '!system/vendor/zendframework/zend-stdlib/benchmarks/**',
                            '!system/vendor/zendframework/zend-stdlib/doc/**',
                            '!system/vendor/zendframework/zend-stdlib/CHANGELOG.md',
                            '!system/vendor/zendframework/zend-stdlib/CONDUCT.md',
                            '!system/vendor/zendframework/zend-stdlib/CONTRIBUTING.md',
                            '!system/vendor/zendframework/zend-stdlib/composer.json',
                            '!system/vendor/zendframework/zend-stdlib/mkdocs.yml',
                            '!system/vendor/zendframework/zend-stdlib/phpcs.xml',

                            '!dist/**',
                            '!distributive/**',
                            '!node_modules/**',
                            '!Gruntfile.js',
                            '!package.json',
                            '!composer.*'
                        ],
                        dest: 'distributive/'
                    }
                ]
            },
            lng_id: {
                files: [
                    {
                        expand: true,
                        src: [
                            'admin/locale/id/**',
                            'album/locale/id/**',
                            'downloads/locale/id/**',
                            'forum/locale/id/**',
                            'guestbook/locale/id/**',
                            'help/locale/id/**',
                            'library/locale/id/**',
                            'mail/locale/id/**',
                            'news/locale/id/**',
                            'profile/locale/id/**',
                            'registration/locale/id/**',
                            'system/locale/id/**',
                            'users/locale/id/**'
                        ],
                        dest: 'distributive/'
                    }
                ]
            },
            lng_pl: {
                files: [
                    {
                        expand: true,
                        src: [
                            'admin/locale/pl/**',
                            'album/locale/pl/**',
                            'downloads/locale/pl/**',
                            'forum/locale/pl/**',
                            'guestbook/locale/pl/**',
                            'help/locale/pl/**',
                            'library/locale/pl/**',
                            'mail/locale/pl/**',
                            'news/locale/pl/**',
                            'profile/locale/pl/**',
                            'registration/locale/pl/**',
                            'system/locale/pl/**',
                            'users/locale/pl/**'
                        ],
                        dest: 'distributive/'
                    }
                ]
            },
            lng_ru: {
                files: [
                    {
                        expand: true,
                        src: [
                            'admin/locale/ru/**',
                            'album/locale/ru/**',
                            'downloads/locale/ru/**',
                            'forum/locale/ru/**',
                            'guestbook/locale/ru/**',
                            'help/locale/ru/**',
                            'library/locale/ru/**',
                            'mail/locale/ru/**',
                            'news/locale/ru/**',
                            'profile/locale/ru/**',
                            'registration/locale/ru/**',
                            'system/locale/ru/**',
                            'users/locale/ru/**'
                        ],
                        dest: 'distributive/'
                    }
                ]
            },
            lng_vi: {
                files: [
                    {
                        expand: true,
                        src: [
                            'admin/locale/vi/**',
                            'album/locale/vi/**',
                            'downloads/locale/vi/**',
                            'forum/locale/vi/**',
                            'guestbook/locale/vi/**',
                            'help/locale/vi/**',
                            'library/locale/vi/**',
                            'mail/locale/vi/**',
                            'news/locale/vi/**',
                            'profile/locale/vi/**',
                            'registration/locale/vi/**',
                            'system/locale/vi/**',
                            'users/locale/vi/**'
                        ],
                        dest: 'distributive/'
                    }
                ]
            }
        },

        // Очищаем папки и удаляем файлы
        clean: {
            dist: ['dist'],
            distributive: ['distributive']
        },

        // Сжимаем файлы
        compress: {
            dist: {
                options: {
                    archive: 'dist/johncms-<%= pkg.version %>.zip'
                },

                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'distributive/',
                        src: ['**']
                    }
                ]
            },
            lng_id: {
                options: {
                    archive: 'dist/locales/id.zip'
                },

                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'distributive/',
                        src: ['**']
                    }
                ]
            },
            lng_pl: {
                options: {
                    archive: 'dist/locales/pl.zip'
                },

                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'distributive/',
                        src: ['**']
                    }
                ]
            },
            lng_ru: {
                options: {
                    archive: 'dist/locales/ru.zip'
                },

                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'distributive/',
                        src: ['**']
                    }
                ]
            },
            lng_vi: {
                options: {
                    archive: 'dist/locales/vi.zip'
                },

                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'distributive/',
                        src: ['**']
                    }
                ]
            }
        },

        exec: {
            // Компилируем .mo файлы
            compile_mo: {
                command: 'msgfmt -o admin/locale/id/default.mo admin/locale/id/default.po' +
                '& msgfmt -o admin/locale/pl/default.mo admin/locale/pl/default.po' +
                '& msgfmt -o admin/locale/ru/default.mo admin/locale/ru/default.po' +
                '& msgfmt -o admin/locale/vi/default.mo admin/locale/vi/default.po' +

                '& msgfmt -o album/locale/id/default.mo album/locale/id/default.po' +
                '& msgfmt -o album/locale/pl/default.mo album/locale/pl/default.po' +
                '& msgfmt -o album/locale/ru/default.mo album/locale/ru/default.po' +
                '& msgfmt -o album/locale/vi/default.mo album/locale/vi/default.po' +

                '& msgfmt -o downloads/locale/id/default.mo downloads/locale/id/default.po' +
                '& msgfmt -o downloads/locale/pl/default.mo downloads/locale/pl/default.po' +
                '& msgfmt -o downloads/locale/ru/default.mo downloads/locale/ru/default.po' +
                '& msgfmt -o downloads/locale/vi/default.mo downloads/locale/vi/default.po' +

                '& msgfmt -o forum/locale/id/default.mo forum/locale/id/default.po' +
                '& msgfmt -o forum/locale/pl/default.mo forum/locale/pl/default.po' +
                '& msgfmt -o forum/locale/ru/default.mo forum/locale/ru/default.po' +
                '& msgfmt -o forum/locale/vi/default.mo forum/locale/vi/default.po' +

                '& msgfmt -o guestbook/locale/id/default.mo guestbook/locale/id/default.po' +
                '& msgfmt -o guestbook/locale/pl/default.mo guestbook/locale/pl/default.po' +
                '& msgfmt -o guestbook/locale/ru/default.mo guestbook/locale/ru/default.po' +
                '& msgfmt -o guestbook/locale/vi/default.mo guestbook/locale/vi/default.po' +

                '& msgfmt -o help/locale/id/default.mo help/locale/id/default.po' +
                '& msgfmt -o help/locale/pl/default.mo help/locale/pl/default.po' +
                '& msgfmt -o help/locale/ru/default.mo help/locale/ru/default.po' +
                '& msgfmt -o help/locale/vi/default.mo help/locale/vi/default.po' +

                '& msgfmt -o library/locale/id/default.mo library/locale/id/default.po' +
                '& msgfmt -o library/locale/pl/default.mo library/locale/pl/default.po' +
                '& msgfmt -o library/locale/ru/default.mo library/locale/ru/default.po' +
                '& msgfmt -o library/locale/vi/default.mo library/locale/vi/default.po' +

                '& msgfmt -o mail/locale/id/default.mo mail/locale/id/default.po' +
                '& msgfmt -o mail/locale/pl/default.mo mail/locale/pl/default.po' +
                '& msgfmt -o mail/locale/ru/default.mo mail/locale/ru/default.po' +
                '& msgfmt -o mail/locale/vi/default.mo mail/locale/vi/default.po' +

                '& msgfmt -o news/locale/id/default.mo news/locale/id/default.po' +
                '& msgfmt -o news/locale/pl/default.mo news/locale/pl/default.po' +
                '& msgfmt -o news/locale/ru/default.mo news/locale/ru/default.po' +
                '& msgfmt -o news/locale/vi/default.mo news/locale/vi/default.po' +

                '& msgfmt -o profile/locale/id/default.mo profile/locale/id/default.po' +
                '& msgfmt -o profile/locale/pl/default.mo profile/locale/pl/default.po' +
                '& msgfmt -o profile/locale/ru/default.mo profile/locale/ru/default.po' +
                '& msgfmt -o profile/locale/vi/default.mo profile/locale/vi/default.po' +

                '& msgfmt -o registration/locale/id/default.mo registration/locale/id/default.po' +
                '& msgfmt -o registration/locale/pl/default.mo registration/locale/pl/default.po' +
                '& msgfmt -o registration/locale/ru/default.mo registration/locale/ru/default.po' +
                '& msgfmt -o registration/locale/vi/default.mo registration/locale/vi/default.po' +

                '& msgfmt -o system/locale/id/system.mo system/locale/id/system.po' +
                '& msgfmt -o system/locale/pl/system.mo system/locale/pl/system.po' +
                '& msgfmt -o system/locale/ru/system.mo system/locale/ru/system.po' +
                '& msgfmt -o system/locale/vi/system.mo system/locale/vi/system.po' +

                '& msgfmt -o users/locale/id/default.mo users/locale/id/default.po' +
                '& msgfmt -o users/locale/pl/default.mo users/locale/pl/default.po' +
                '& msgfmt -o users/locale/ru/default.mo users/locale/ru/default.po' +
                '& msgfmt -o users/locale/vi/default.mo users/locale/vi/default.po',
                stdout: false,
                stderr: true
            }
        },

        // Обновляем зависимости
        devUpdate: {
            main: {
                options: {
                    updateType: 'force',
                    semver: false
                }
            }
        }
    });

    // Загружаем нужные модули
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-dev-update');

    // Общая задача
    grunt.registerTask('default', []);

    grunt.registerTask('distributive', [
        'clean:dist',
        'copy:distributive',
        'compress:dist',
        'clean:distributive'
    ]);

    grunt.registerTask('makemo', [
        'exec:compile_mo'
    ]);

    grunt.registerTask('locales', [
        'clean:dist',

        'copy:lng_id',
        'compress:lng_id',
        'clean:distributive',

        'copy:lng_pl',
        'compress:lng_pl',
        'clean:distributive',

        'copy:lng_ru',
        'compress:lng_ru',
        'clean:distributive',

        'copy:lng_vi',
        'compress:lng_vi',
        'clean:distributive'
    ]);

    // Обновление Dev Dependencies
    grunt.registerTask('upd', [
        'devUpdate:main'
    ]);
};

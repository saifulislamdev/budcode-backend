const projectInfos = [
  {
    id: 11,
    name: 'HowToCook',
    creator: 'joybiswas',
    description: "程序员在家做饭方法指南。Programmer's guide about how to cook at home (Chinese only).",
    skills: [ 'JavaScript', 'Shell' ],
    tags: [ 'chinese', 'cookbook', 'cooking', 'dishes', 'recipes' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Anduin2017/HowToCook'
      }
    ]
  },
  {
    id: 12,
    name: 'the bread code',
    creator: 'patrick',
    description: 'Learn how to master the art of baking the programmer way.',
    skills: [ 'Shell' ],
    tags: [
      'baking',    'bread',
      'cooking',   'dough',
      'recipe',    'recipes',
      'sourdough', 'yeast'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hendricius/the-bread-code'
      }
    ]
  },
  {
    id: 13,
    name: 'pizza dough',
    creator: 'techlead',
    description: 'This recipe is dedicated to helping you make the best possible pizza dough for Neapolitan pizza.',
    skills: [ 'JavaScript', 'CSS', 'HTML', 'Shell' ],
    tags: [
      'baking',
      'cooking',
      'neapolitan pizza',
      'pizza',
      'pizza dough',
      'recipe',
      'yeast'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hendricius/pizza-dough'
      }
    ]
  },
  {
    id: 14,
    name: 'recipes',
    creator: 'tanzilbaraskar',
    description: 'Application for managing recipes, planning meals, building shopping lists and much much more!',
    skills: [
      'HTML',      'JavaScript',
      'Python',    'TypeScript',
      'Vue',       'CSS',
      'Shell',     'Dockerfile',
      'Batchfile', 'C'
    ],
    tags: [
      'cookbook',     'cooking',
      'django',       'docker',
      'food',         'markdown',
      'meal planner', 'recipe',
      'recipes',      'selfhosted',
      'shopping'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/TandoorRecipes/recipes'
      }
    ]
  },
  {
    id: 15,
    name: 'cooking',
    creator: 'johndoe',
    description: '👨‍🍳 更易上手的前端构建工具',
    skills: [ 'JavaScript', 'Makefile', 'Shell' ],
    tags: [ 'build', 'cooking', 'react', 'vue', 'webpack' ],
    links: [ { type: 'GitHub', link: 'https://github.com/ElemeFE/cooking' } ]
  },
  {
    id: 16,
    name: 'showcase recipe search',
    creator: 'abdulimtiaz',
    description: 'Instantly search 2M cooking recipes using Typesense Search (an open source alternative to Algolia / ElasticSearch)  ⚡ 🥘 🔍',
    skills: [ 'JavaScript', 'HTML', 'Ruby', 'SCSS' ],
    tags: [
      'instantsearch',
      'typesense',
      'typesense instantsearch adapter',
      'typesense showcase'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/typesense/showcase-recipe-search'
      }
    ]
  },
  {
    id: 17,
    name: 'fpga_readings',
    creator: 'tanviryouhana',
    description: 'Recipe for FPGA cooking',
    skills: [ 'Verilog', 'Tcl', 'C++', 'Makefile', 'C', 'Shell' ],
    tags: [ 'fpga', 'hls', 'rtl', 'verilog', 'vivado hls', 'xilinx' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/lastweek/fpga_readings'
      }
    ]
  },
  {
    id: 18,
    name: 'docker dnsmasq',
    creator: 'mdrislam30',
    description: "My dnsmasq brings all the boys to the yard, and they're like, it's smaller than yours! -- @andyshinn",
    skills: [ 'Dockerfile' ],
    tags: [
      'cooking',
      'dwayne johnson',
      'kelis rogers',
      'masks',
      'milkshakes',
      'mission impossible',
      'the day the earth stood still'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/4km3/docker-dnsmasq'
      }
    ]
  },
  {
    id: 19,
    name: 'meanrecipe',
    creator: 'joma',
    description: 'Get a consensus recipe for your next meal. :cookie: :cake:',
    skills: [ 'Go', 'Python' ],
    tags: [
      'clustering',
      'cooking',
      'food',
      'food recommendation',
      'machine learning',
      'recipes'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/schollz/meanrecipe' }
    ]
  },
  {
    id: 20,
    name: 'gym cooking',
    creator: 'techlead',
    description: 'gym-cooking: Code for "Too many cooks: Bayesian inference for coordinating multi-agent collaboration", Winner of the CogSci 2020 Computational Modeling Prize in High Cognition, and a NeurIPS 2020 CoopAI Workshop Best Paper.',
    skills: [ 'Python', 'Shell' ],
    tags: [
      'machine learning',
      'multiagent reinforcement learning',
      'reinforcement learning'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rosewang2008/gym-cooking'
      }
    ]
  },
  {
    id: 21,
    name: 'nyum',
    creator: 'bob',
    description: 'A simple Pandoc-powered static site generator for your recipe collection – it effortlessly turns a set of Markdown-formatted recipes into a lightweight, responsive, searchable website.',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'Shell', 'Awk' ],
    tags: [
      'cookbook',
      'cooking',
      'food',
      'pandoc',
      'pandoc template',
      'recipe collection',
      'recipe website',
      'recipes',
      'static site generator',
      'static website'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/doersino/nyum' } ]
  },
  {
    id: 22,
    name: 'yummy phoenix graphql',
    creator: 'bob',
    description: 'Cooking recipe sharing app built with Phoenix, React, GraphQL and Kubernetes',
    skills: [
      'Elixir',
      'TypeScript',
      'Shell',
      'JavaScript',
      'CSS',
      'HTML',
      'Dockerfile'
    ],
    tags: [
      'absinthe',
      'elixir',
      'google cloud platform',
      'graphql',
      'javascript',
      'kubernetes',
      'phoenix',
      'react',
      'starter kit'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/MatthieuSegret/yummy-phoenix-graphql'
      }
    ]
  },
  {
    id: 23,
    name: 'Grimgrains',
    creator: 'techlead',
    description: 'Plant-based cooking website',
    skills: [ 'HTML', 'C', 'CSS', 'JavaScript', 'Shell' ],
    tags: [ 'c99', 'static site generator' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hundredrabbits/Grimgrains'
      }
    ]
  },
  {
    id: 24,
    name: 'Cook It Android XML Template',
    creator: 'frankniu',
    description: 'Android xml layout for Cooking/Recipe App.',
    skills: [ 'Java' ],
    tags: [
      'android xml layout',
      'android xml template',
      'cooking',
      'recipe',
      'shopping'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/dytlabs/Cook-It-Android-XML-Template'
      }
    ]
  },
  {
    id: 25,
    name: 'ingredients',
    creator: 'janedoe',
    description: 'Extract recipe ingredients from any recipe website on the internet.',
    skills: [ 'Go' ],
    tags: [ 'cooking', 'extractor', 'ingredients', 'recipes', 'tagging' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/schollz/ingredients'
      }
    ]
  },
  {
    id: 26,
    name: 'EnRecipes',
    creator: 'tanzilbaraskar',
    description: 'EnRecipes is an open source, privacy-friendly digital cookbook that lets you create, manage and share your recipes.',
    skills: [ 'Vue', 'TypeScript', 'SCSS', 'JavaScript' ],
    tags: [
      'android',       'chef',
      'chef cookbook', 'chef resource',
      'cookbook',      'cooking',
      'food',          'hybrid application',
      'javascript',    'meal planner',
      'nativescript',  'open source',
      'opensource',    'privacy',
      'recipe',        'recipe manager'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/vishnuraghavb/EnRecipes'
      }
    ]
  },
  {
    id: 27,
    name: 'cooking app flutter',
    creator: 'techlead',
    description: ':octocat:  Example app build with Flutter',
    skills: [ 'Dart', 'Objective-C', 'Ruby', 'Java' ],
    tags: [
      'android',
      'cooking',
      'dart',
      'flutter',
      'ios',
      'mobile',
      'mobile app'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/oscarcpozas/cooking-app-flutter'
      }
    ]
  },
  {
    id: 28,
    name: 'Recipes',
    creator: 'abdulimtiaz',
    description: 'A super minimal recipe website built on Markdown',
    skills: [ 'JavaScript', 'CSS', 'Hack', 'PHP' ],
    tags: [ 'cooking', 'javascript', 'markdown', 'recipes', 'website' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jeffThompson/Recipes'
      }
    ]
  },
  {
    id: 29,
    name: 'CookingForBlockheads',
    creator: 'saif',
    description: 'Minecraft Mod. Adds a cooking book and multiblock kitchens that only shows recipes you can make with what you currently have in your inventory.',
    skills: [ 'Java' ],
    tags: [ 'fabricmc mod', 'forge mod', 'minecraft mod' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ModdingForBlockheads/CookingForBlockheads'
      }
    ]
  },
  {
    id: 30,
    name: 'CQL Formatting and Usage Wiki',
    creator: 'mehedishohag',
    description: 'A collaborative workspace for the development of CQL formatting conventions and usage patterns for artifact development. The home of Cooking with CQL Examples, visit the wiki for more.',
    skills: [ 'HTML', 'XSLT' ],
    tags: [
      'clinical decision support',
      'clinical quality improvement',
      'clinical quality measurement',
      'cql',
      'fhir'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/cqframework/CQL-Formatting-and-Usage-Wiki'
      }
    ]
  },
  {
    id: 31,
    name: 'pesto',
    creator: 'joma',
    description: 'Cooking recipe description language',
    skills: [ 'Haskell', 'CSS' ],
    tags: [ 'cooking', 'recipe app' ],
    links: [ { type: 'GitHub', link: 'https://github.com/PromyLOPh/pesto' } ]
  },
  {
    id: 32,
    name: 'font chef',
    creator: 'janedoe',
    description: 'A font cooking library',
    skills: [ 'C', 'C++', 'CMake' ],
    tags: [ 'c', 'cpp', 'font baking' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/mobius3/font-chef' }
    ]
  },
  {
    id: 33,
    name: 'anymeal',
    creator: 'patrick',
    description: 'AnyMeal is a free and open source recipe management software developed using SQLite3 and Qt5. It can manage a cookbook with more than 250,000 MealMaster recipes, thereby allowing to import, export, search, display, edit, and print them. AnyMeal is available for GNU/Linux and Microsoft Windows. ',
    skills: [ 'C++', 'Shell', 'M4', 'LLVM', 'NSIS', 'Makefile', 'Roff' ],
    tags: [ 'cooking', 'cooking recipes', 'recipe' ],
    links: [ { type: 'GitHub', link: 'https://github.com/wedesoft/anymeal' } ]
  },
  {
    id: 34,
    name: 'Undercooked',
    creator: 'tanviryouhana',
    description: '🍴🍅 Fan-made cooking game! 🍔🥣',
    skills: [ 'C#' ],
    tags: [ 'fanmade', 'game', 'overcooked', 'unity' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/daltonbr/Undercooked'
      }
    ]
  },
  {
    id: 35,
    name: 'gmbt',
    creator: 'anvinhtr',
    description: 'Build automation tool designed to speed up testing and cooking Gothic & Gothic 2 NotR mods',
    skills: [ 'C#', 'NSIS', 'HTML', 'D', 'PowerShell' ],
    tags: [
      'build tool',
      'gothic',
      'gothic1',
      'gothic2',
      'modding',
      'modding gothic',
      'modding tools'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Szmyk/gmbt' } ]
  },
  {
    id: 36,
    name: 'metric cooking',
    creator: 'joybiswas',
    description: 'Browser script that annotates US cooking units with their metric equivalent (e.g. 1 3/4 cups sugar [350 g])',
    skills: [ 'JavaScript', 'M4', 'Makefile' ],
    tags: [
      'browser extension',
      'chrome extension',
      'cooking',
      'firefox addon',
      'javascript',
      'recipes',
      'units of measure'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/falk-hueffner/metric-cooking'
      }
    ]
  },
  {
    id: 37,
    name: 'wES',
    creator: 'techlead',
    description: 'wES is set of open source Java ElasticSearch client and toolkits; Compact, yet highly customizable and powerful.',
    skills: [
      'Java',
      'FreeMarker',
      'Vue',
      'JavaScript',
      'CSS',
      'HTML',
      'Batchfile'
    ],
    tags: [
      'cooking',
      'elasticsearch',
      'elasticsearch client',
      'retrofit2',
      'spring boot',
      'vuejs2'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/DataSays/wES' } ]
  },
  {
    id: 38,
    name: 'recipes parser',
    creator: 'joma',
    description: 'Natural language parser for recipes and lists of ingredients, units and quantity',
    skills: [ 'TypeScript' ],
    tags: [
      'cooking',
      'ingredient',
      'ingredients',
      'ingredients list',
      'parser',
      'recipes',
      'recipes parser'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Charlie85270/recipes-parser'
      }
    ]
  },
  {
    id: 39,
    name: 'CooKingXSS',
    creator: 'frankniu',
    description: 'XSS Cookie Stealer | PROOF OF CONCEPT',
    skills: [ 'Python', 'PHP' ],
    tags: [ 'cookie', 'python', 'security', 'xss' ],
    links: [ { type: 'GitHub', link: 'https://github.com/A1S0N/CooKingXSS' } ]
  },
  {
    id: 40,
    name: 'MenuGen',
    creator: 'frankniu',
    description: 'An intelligent generator of well-balanced meals.',
    skills: [ 'JavaScript', 'Python', 'CSS', 'HTML', 'PHP' ],
    tags: [
      'balanced meals',
      'cooking',
      'food',
      'generator',
      'genetic algorithm',
      'machine learning',
      'meals',
      'morphology',
      'nutritional',
      'scraping',
      'taste'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/PLNech/MenuGen' } ]
  },
  {
    id: 41,
    name: 'Countdown',
    creator: 'techlead',
    description: 'Set your countdown timer with optional alarm sounds and start, pause, and reset as you wish. The app is written in SwiftUI 2 and it is perfect for everyday activities such as cooking meals, taking quizzes, giving speeches, playing sports, or practicing music.',
    skills: [ 'Swift' ],
    tags: [ 'ios', 'ios swift', 'swift', 'swiftui' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/leonardobilia/Countdown'
      }
    ]
  },
  {
    id: 42,
    name: 'nutrifacts.js',
    creator: 'patrick',
    description: 'A library to calculate nutrition facts, smartly. No third party services or remote DBs involved.',
    skills: [ 'TypeScript' ],
    tags: [
      'cooking',
      'food',
      'health',
      'nodejs',
      'nutrition',
      'nutritionfacts'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/marcellobarile/nutrifacts.js'
      }
    ]
  },
  {
    id: 43,
    name: 'LibreRecipes',
    creator: 'tanviryouhana',
    description: 'An OpenSource crowd-sourced cooking recipes website',
    skills: [ 'HTML', 'CSS', 'Python', 'JavaScript' ],
    tags: [
      'flask',
      'python',
      'python3',
      'recipes online',
      'recipes website'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Anarbb/LibreRecipes'
      }
    ]
  },
  {
    id: 44,
    name: 'paneer tikka masala',
    creator: 'zealptl',
    description: 'A Code Kata using a cooking recipe to make an Indian curry, Paneer Tikka Masala (grilled and marinated cottage cheese in a tomato and cream gravy).',
    skills: [ 'Java' ],
    tags: [
      'codekata',
      'completablefuture',
      'completablefuture api',
      'java15'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/c-guntur/paneer-tikka-masala'
      }
    ]
  },
  {
    id: 45,
    name: 'recipe_flavored_markdown',
    creator: 'mdrislam30',
    description: 'Recipe-flavored markdown: make recipes easy to create and maintain!',
    skills: [ 'Dart', 'Shell' ],
    tags: [
      'cookbook',
      'cooking',
      'ingredient',
      'ingredients',
      'markdown',
      'recipe',
      'recipe book',
      'recipes'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/definitelyokay/recipe_flavored_markdown'
      }
    ]
  },
  {
    id: 46,
    name: 'OnionBot API',
    creator: 'joybiswas',
    description: 'An assistive stove-top cooking device with machine vision - for domestic automation research',
    skills: [ 'Python' ],
    tags: [
      'auto ml',
      'computer vision',
      'cooking',
      'domestic automation',
      'python',
      'raspberry pi'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/onionbot/OnionBot-API'
      }
    ]
  },
  {
    id: 47,
    name: 'recipeyak',
    creator: 'anvinhtr',
    description: ':curry: Application to automate the selection of meals and creation of shopping lists.',
    skills: [
      'TypeScript',
      'Python',
      'JavaScript',
      'HTML',
      'SCSS',
      'Shell',
      'Dockerfile',
      'HCL'
    ],
    tags: [
      'cooking',
      'django',
      'django rest framework',
      'docker',
      'meal plans',
      'oauth',
      'reactjs',
      'recipe manager'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/recipeyak/recipeyak'
      }
    ]
  },
  {
    id: 48,
    name: 'Recipe Generation from Food Image',
    creator: 'refatmonjur',
    description: 'An Application for Generating a cooking recipe consist of title, ingredients and instructions from an food image using Deep Learning.',
    skills: [ 'Python', 'HTML', 'CSS', 'JavaScript', 'Procfile' ],
    tags: [
      'application',        'cooking',
      'css',                'deep learning',
      'development',        'dishes',
      'facebook',           'final project',
      'final year project', 'flask',
      'flask application',  'food',
      'food images',        'html',
      'ingredients',        'inverse cooking',
      'machine learning',   'project',
      'recipe generation',  'recipes'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/navassherif98/Recipe-Generation-from-Food-Image'
      }
    ]
  },
  {
    id: 49,
    name: 'RecipeParser',
    creator: 'janedoe',
    description: 'Turn recipes into markdown files!',
    skills: [ 'Python' ],
    tags: [ 'baking', 'cookbook', 'cooking', 'food', 'recipes' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Brooke-white/RecipeParser'
      }
    ]
  },
  {
    id: 50,
    name: 'Recipes',
    creator: 'akbarhaider',
    description: 'Recipeify monorepo (API, Client, Scraper)',
    skills: [ 'JavaScript', 'Python', 'HTML', 'SCSS', 'Dockerfile', 'Shell' ],
    tags: [
      'ant design',    'auth0',
      'cooking',       'docker',
      'elasticsearch', 'express',
      'mongodb',       'node js',
      'react',         'recipes',
      'recombee'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/recipeify/Recipes' }
    ]
  },
  {
    id: 51,
    name: 'godot',
    creator: 'joybiswas',
    description: 'Godot Engine – Multi-platform 2D and 3D game engine',
    skills: [
      'C++',           'C#',
      'C',             'GLSL',
      'Java',          'Python',
      'Objective-C++', 'JavaScript',
      'GDScript',      'Shell',
      'Objective-C',   'Kotlin',
      'PowerShell',    'AIDL',
      'Makefile',      'CMake',
      'GAP'
    ],
    tags: [
      'game development',
      'game engine',
      'gamedev',
      'godot',
      'godotengine',
      'multi platform',
      'open source'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/godotengine/godot' }
    ]
  },
  {
    id: 52,
    name: 'pixijs',
    creator: 'janedoe',
    description: 'The HTML5 Creation Engine: Create beautiful digital content with the fastest, most flexible 2D WebGL renderer.',
    skills: [ 'TypeScript', 'JavaScript', 'PLSQL', 'GLSL' ],
    tags: [
      'canvas',
      'canvas2d',
      'data visualization',
      'game',
      'glsl',
      'javascript',
      'pixi',
      'pixijs',
      'renderer',
      'rendering',
      'rendering 2d graphics',
      'rendering engine',
      'webgl'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/pixijs/pixijs' } ]
  },
  {
    id: 53,
    name: 'phaser',
    creator: 'tanviryouhana',
    description: 'Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.',
    skills: [ 'JavaScript', 'TypeScript', 'GLSL' ],
    tags: [
      'canvas',
      'facebook instant games',
      'game development',
      'game frameworks',
      'gamedev',
      'html5 game development',
      'javascript',
      'phaser',
      'phaser development',
      'phaserjs',
      'webgl'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/photonstorm/phaser' }
    ]
  },
  {
    id: 54,
    name: 'open source ios apps',
    creator: 'janedoe',
    description: ':iphone: Collaborative List of Open-Source iOS Apps',
    skills: [ 'Swift', 'Ruby', 'Shell' ],
    tags: [
      'app',                  'apple',
      'apple tv',             'apple watch',
      'awesome',              'cocoapods',
      'example',              'game',
      'ios',                  'ipad',
      'iphone',               'list',
      'objective c',          'react native',
      'reactive programming', 'reactiveswift',
      'swift',                'swiftui',
      'tvos',                 'watchos'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/dkhamsing/open-source-ios-apps'
      }
    ]
  },
  {
    id: 55,
    name: 'libgdx',
    creator: 'mehedishohag',
    description: 'Desktop/Android/HTML5/iOS Java game development framework',
    skills: [
      'Java',     'C++',
      'C',        'SWIG',
      'GLSL',     'CSS',
      'Assembly', 'CMake',
      'Ragel',    'OpenEdge ABL',
      'Lua',      'Shell',
      'HTML'
    ],
    tags: [
      '2d',        '3d',
      'android',   'cross platform',
      'framework', 'game',
      'html5',     'ios',
      'java',      'libgdx',
      'linux',     'macosx',
      'windows'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/libgdx/libgdx' } ]
  },
  {
    id: 56,
    name: 'You Dont Need JavaScript',
    creator: 'johndoe',
    description: 'CSS is powerful, you can do a lot of things without JS.',
    skills: [ 'CSS' ],
    tags: [
      'accordion',  'burger menu',
      'carousel',   'counter',
      'css',        'font',
      'game',       'hacktoberfest',
      'javascript', 'popover',
      'textfield',  'tooltip',
      'treeview'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/you-dont-need/You-Dont-Need-JavaScript'
      }
    ]
  },
  {
    id: 57,
    name: 'Babylon.js',
    creator: 'tanzilbaraskar',
    description: 'Babylon.js is a powerful, beautiful, simple, and open game and rendering engine packed into a friendly JavaScript framework.',
    skills: [
      'TypeScript',
      'JavaScript',
      'HLSL',
      'Roff',
      'SCSS',
      'HTML',
      'CSS'
    ],
    tags: [
      '3d',
      'babylon',
      'game development',
      'game engine',
      'game engine 3d',
      'typescript',
      'webaudio',
      'webgl',
      'webgl2',
      'webgpu',
      'webvr',
      'webxr'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/BabylonJS/Babylon.js'
      }
    ]
  },
  {
    id: 58,
    name: 'cocos2d x',
    creator: 'mdrislam30',
    description: 'Cocos2d-x is a suite of open-source, cross-platform, game-development tools used by millions of developers all over the world.',
    skills: [
      'C++',             'Lua',
      'C',               'Objective-C++',
      'Java',            'Python',
      'Objective-C',     'CMake',
      'GLSL',            'PLSQL',
      'Shell',           'Makefile',
      'Csound Document', 'PowerShell',
      'Batchfile',       'AIDL',
      'HTML'
    ],
    tags: [
      'android',     'c plus plus',
      'cocos2d',     'cocos2d x',
      'game engine', 'ios',
      'linx',        'lua',
      'metal',       'windows'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/cocos2d/cocos2d-x' }
    ]
  },
  {
    id: 59,
    name: 'shap',
    creator: 'mehedishohag',
    description: 'A game theoretic approach to explain the output of any machine learning model.',
    skills: [
      'Jupyter Notebook',
      'Python',
      'C++',
      'JavaScript',
      'Cuda',
      'PowerShell',
      'Batchfile',
      'HTML'
    ],
    tags: [
      'deep learning',
      'explainability',
      'gradient boosting',
      'interpretability',
      'machine learning',
      'shap',
      'shapley'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/slundberg/shap' } ]
  },
  {
    id: 60,
    name: 'bevy',
    creator: 'refatmonjur',
    description: 'A refreshingly simple data-driven game engine built in Rust',
    skills: [ 'Rust', 'Shell', 'GLSL' ],
    tags: [
      'bevy',
      'game engine',
      'gamedev',
      'hacktoberfest',
      'open source',
      'rust'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/bevyengine/bevy' } ]
  },
  {
    id: 61,
    name: 'Mindustry',
    creator: 'tufayelahmed',
    description: 'The automation tower defense game',
    skills: [ 'Java', 'GLSL', 'JavaScript', 'Shell', 'Ruby', 'Batchfile' ],
    tags: [
      'android',
      'desktop',
      'game',
      'java',
      'mindustry',
      'mobile game',
      'multiplatform',
      'rts',
      'sandbox game',
      'tower defense'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Anuken/Mindustry' } ]
  },
  {
    id: 62,
    name: 'wechat_jump_game',
    creator: 'tufayelahmed',
    description: '微信《跳一跳》Python 辅助',
    skills: [ 'Python', 'Makefile' ],
    tags: [ 'adb', 'python', 'wechat app' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/wangshub/wechat_jump_game'
      }
    ]
  },
  {
    id: 63,
    name: 'OpenEmu',
    creator: 'tufayelahmed',
    description: '🕹 Retro video game emulation for macOS',
    skills: [
      'Swift',
      'Objective-C',
      'C',
      'Rich Text Format',
      'C++',
      'AppleScript',
      'SourcePawn',
      'Pawn',
      'PHP',
      'Shell',
      'CUE'
    ],
    tags: [
      'emulation',
      'emulator',
      'macos',
      'objective c',
      'openemu',
      'retrogaming'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/OpenEmu/OpenEmu' } ]
  },
  {
    id: 64,
    name: 'awesome python applications',
    creator: 'bob',
    description: '💿 Free software that works great, and also happens to be open-source Python. ',
    skills: [ 'Jupyter Notebook' ],
    tags: [
      'application',  'audio',
      'education',    'game',
      'graphics',     'gui',
      'productivity', 'python',
      'science',      'video'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/mahmoud/awesome-python-applications'
      }
    ]
  },
  {
    id: 65,
    name: '3d game shaders for beginners',
    creator: 'akbarhaider',
    description: '🎮 A step-by-step guide to implementing SSAO, depth of field, lighting, normal mapping, and more for your 3D game.',
    skills: [ 'C++', 'GLSL', 'PLSQL', 'Shell' ],
    tags: [
      '3d',               '3d graphics',
      'game development', 'gamedev',
      'glsl',             'glsl shader',
      'glsl shaders',     'godot',
      'graphics',         'graphics programming',
      'hlsl',             'indiedev',
      'opengl',           'panda3d',
      'shader',           'shaders',
      'unity',            'unity3d',
      'vulkan',           'webgl'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/lettier/3d-game-shaders-for-beginners'
      }
    ]
  },
  {
    id: 66,
    name: 'lila',
    creator: 'zealptl',
    description: '♞ lichess.org: the forever free, adless and open source chess server ♞',
    skills: [
      'Scala',  'TypeScript',
      'SCSS',   'JavaScript',
      'Java',   'CSS',
      'Python', 'HTML',
      'Shell',  'Ruby'
    ],
    tags: [
      'chess',
      'free software',
      'functional programming',
      'game',
      'lichess',
      'non profit',
      'play framework',
      'scala',
      'type safe',
      'typescript'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/lichess-org/lila' } ]
  },
  {
    id: 67,
    name: 'OpenRA',
    creator: 'patrick',
    description: 'Open Source real-time strategy game engine for early Westwood games such as Command & Conquer: Red Alert written in C# using SDL and OpenGL. Runs on Windows, Linux, *BSD and Mac OS X.',
    skills: [
      'C#',         'Lua',
      'Shell',      'Objective-C',
      'GLSL',       'NSIS',
      'PowerShell', 'Makefile',
      'Fluent',     'Batchfile',
      'Python',     'XSLT'
    ],
    tags: [
      'command and conquer',
      'cross platform',
      'csharp',
      'dotnet',
      'dune 2000',
      'engine',
      'game',
      'game engine',
      'hacktoberfest',
      'openra',
      'real time strategy',
      'red alert',
      'rts',
      'strategy game engine',
      'tiberian dawn'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/OpenRA/OpenRA' } ]
  },
  {
    id: 68,
    name: 'openage',
    creator: 'justinsiu',
    description: 'Free (as in freedom) open source clone of the Age of Empires II engine :rocket:',
    skills: [
      'Python', 'C++',
      'Cython', 'CMake',
      'QML',    'Makefile',
      'GLSL',   'CSS',
      'C',      'Objective-C++',
      'Shell',  'Nix'
    ],
    tags: [
      'age of empires',
      'c plus plus',
      'clone',
      'cmake',
      'cpp',
      'cpp17',
      'engine',
      'entity component system',
      'game',
      'game development',
      'game engine',
      'linux',
      'multiplayer',
      'nyan',
      'openage',
      'opengl',
      'python',
      'qt',
      'rts engine'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/SFTtech/openage' } ]
  },
  {
    id: 69,
    name: 'OpenRCT2',
    creator: 'saif',
    description: 'An open source re-implementation of RollerCoaster Tycoon 2 🎢',
    skills: [
      'C++',       'C',
      'CMake',     'Java',
      'Shell',     'XC',
      'NSIS',      'Objective-C++',
      'Python',    'Roff',
      'GLSL',      'Nix',
      'C#',        'PHP',
      'Batchfile'
    ],
    tags: [
      'c',              'c plus plus',
      'cmake',          'cpp',
      'discord',        'game',
      'hacktoberfest',  'linux',
      'msbuild',        'multiplayer',
      'opengl',         'openrct2',
      'roller coaster', 'roller coaster tycoon',
      'sdl2',           'server',
      'simulation',     'visual studio',
      'windows',        'xcode'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/OpenRCT2/OpenRCT2' }
    ]
  },
  {
    id: 70,
    name: 'OpenDiablo2',
    creator: 'zealptl',
    description: 'An open source re-implementation of Diablo 2',
    skills: [ 'Go', 'Shell', 'Kaitai Struct', 'Batchfile', 'JavaScript' ],
    tags: [
      '2d',          'arpg',
      'diablo',      'diablo2',
      'engine',      'game',
      'game engine', 'games',
      'go',          'golang',
      'open source'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/OpenDiablo2/OpenDiablo2'
      }
    ]
  },
  {
    id: 71,
    name: 'pyxel',
    creator: 'mehedishohag',
    description: 'A retro game engine for Python',
    skills: [
      'Rust',
      'Python',
      'Makefile',
      'Inno Setup',
      'Starlark',
      'VBScript'
    ],
    tags: [
      '8bit',
      'fantasy console',
      'game development',
      'game engine',
      'gamedev',
      'gameengine',
      'pico 8',
      'python',
      'pyxel',
      'tic 80'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/kitao/pyxel' } ]
  },
  {
    id: 72,
    name: 'osu',
    creator: 'saif',
    description: 'rhythm is just a *click* away!',
    skills: [ 'C#', 'Ruby', 'PowerShell', 'Shell', 'GLSL' ],
    tags: [ 'beatmap parser', 'game', 'hacktoberfest', 'osu', 'rhythm' ],
    links: [ { type: 'GitHub', link: 'https://github.com/ppy/osu' } ]
  },
  {
    id: 73,
    name: 'Craft',
    creator: 'patrick',
    description: 'A simple Minecraft clone written in C using modern OpenGL (shaders).',
    skills: [ 'C', 'Python', 'GLSL', 'CMake' ],
    tags: [
      'c',
      'game',
      'glsl',
      'minecraft',
      'multiplayer',
      'opengl',
      'sqlite'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/fogleman/Craft' } ]
  },
  {
    id: 74,
    name: 'habitica',
    creator: 'akbarhaider',
    description: 'A habit tracker app which treats your goals like a Role Playing Game.',
    skills: [
      'JavaScript',   'CSS',
      'Vue',          'SCSS',
      'CoffeeScript', 'HTML',
      'Dockerfile',   'Handlebars',
      'Python',       'Procfile'
    ],
    tags: [
      'css',      'express',
      'habitica', 'hacktoberfest',
      'html',     'javascript',
      'mongodb',  'node',
      'nodejs',   'vue',
      'vuejs'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/HabitRPG/habitica' }
    ]
  },
  {
    id: 75,
    name: 'warriorjs',
    creator: 'saif',
    description: '🏰 An exciting game of programming and Artificial Intelligence',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [
      'ai',
      'artificial intelligence',
      'battle',
      'epic',
      'game',
      'javascript',
      'js',
      'learn',
      'nodejs',
      'sharpen',
      'skills',
      'test',
      'warrior',
      'warriorjs'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/olistic/warriorjs' }
    ]
  },
  {
    id: 76,
    name: 'tiled',
    creator: 'saif',
    description: 'Flexible level editor',
    skills: [
      'C++',
      'XSLT',
      'Java',
      'Python',
      'QML',
      'C',
      'CMake',
      'QMake',
      'Objective-C++'
    ],
    tags: [
      'c plus plus',   'editor',
      'game',          'game development',
      'hacktoberfest', 'java',
      'level',         'level editor',
      'map editor',    'qbs',
      'qmake',         'qt',
      'qt framework',  'tile',
      'tilesets'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/mapeditor/tiled' } ]
  },
  {
    id: 77,
    name: 'basic computer games',
    creator: 'joybiswas',
    description: 'An updated version of the classic "Basic Computer Games" book, with well-written examples in a variety of common MEMORY SAFE, SCRIPTING programming languages. See https://coding-horror.github.io/basic-computer-games/',
    skills: [
      'C#',                'JavaScript',
      'Java',              'BASIC',
      'Python',            'Perl',
      'Ruby',              'Rust',
      'Visual Basic .NET', 'Kotlin',
      'HTML',              'C',
      'D',                 'Pascal',
      'Elm',               'Lua',
      'CSS',               'Shell',
      'Go'
    ],
    tags: [ 'basic', 'basic computer games', 'classic game' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/coding-horror/basic-computer-games'
      }
    ]
  },
  {
    id: 78,
    name: 'MonoGame',
    creator: 'akbarhaider',
    description: 'One framework for creating powerful cross-platform games.',
    skills: [
      'C#',
      'HLSL',
      'Rich Text Format',
      'Smalltalk',
      'XSLT',
      'Kotlin',
      'Shell',
      'Batchfile'
    ],
    tags: [
      'cross platform',
      'csharp',
      'dotnet',
      'game engine',
      'game framework',
      'gamedev',
      'graphics',
      'hacktoberfest',
      'monogame',
      'open source',
      'xna'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/MonoGame/MonoGame' }
    ]
  },
  {
    id: 79,
    name: 'devilution',
    creator: 'tanviryouhana',
    description: 'Diablo devolved - magic behind the 1996 computer game',
    skills: [ 'C++', 'C', 'Makefile', 'Shell' ],
    tags: [ 'devilution', 'diablo', 'game', 'hellfire' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/diasurgical/devilution'
      }
    ]
  },
  {
    id: 80,
    name: 'amethyst',
    creator: 'abdulimtiaz',
    description: 'Data-oriented and data-driven game engine written in Rust',
    skills: [ 'Rust', 'GLSL', 'Shell', 'CSS', 'JavaScript', 'Makefile' ],
    tags: [ 'engine', 'game engine', 'gamedev', 'hacktoberfest', 'rust' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/amethyst/amethyst' }
    ]
  },
  {
    id: 81,
    name: 'open source flash',
    creator: 'joybiswas',
    description: 'Petition to open source Flash and Shockwave spec',
    skills: [ 'ActionScript' ],
    tags: [
      'actionscript',
      'adobe',
      'flash',
      'flash player',
      'game',
      'open',
      'petition',
      'shockwave',
      'source'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/open-source-flash/open-source-flash'
      }
    ]
  },
  {
    id: 82,
    name: 'engine',
    creator: 'johndoe',
    description: 'Fast and lightweight JavaScript game engine built on WebGL and glTF',
    skills: [ 'JavaScript', 'HTML', 'GLSL', 'CSS' ],
    tags: [
      'game development',
      'game engine',
      'gamedev',
      'gltf',
      'javascript',
      'nodejs',
      'typescript',
      'virtual reality',
      'webgl',
      'webgl2',
      'webgpu',
      'webxr'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/playcanvas/engine' }
    ]
  },
  {
    id: 83,
    name: 'minetest',
    creator: 'zealptl',
    description: 'Minetest is an open source voxel game engine with easy modding and game creation',
    skills: [
      'C++',      'Lua',
      'C',        'CMake',
      'GLSL',     'Shell',
      'Java',     'Python',
      'Makefile', 'Dockerfile'
    ],
    tags: [
      'c plus plus',
      'cpp11',
      'game engine',
      'lua',
      'minetest',
      'voxel',
      'voxel engine'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/minetest/minetest' }
    ]
  },
  {
    id: 84,
    name: 'Cataclysm DDA',
    creator: 'anvinhtr',
    description: 'Cataclysm - Dark Days Ahead. A turn-based survival game set in a post-apocalyptic world.',
    skills: [
      'C++',       'Python',
      'Java',      'CMake',
      'Makefile',  'Shell',
      'C',         'PowerShell',
      'HTML',      'CodeQL',
      'jq',        'JavaScript',
      'R',         'Perl',
      'Batchfile', 'Dockerfile',
      'Gnuplot',   'Modelica'
    ],
    tags: [ 'c plus plus', 'cataclysm', 'game', 'hacktoberfest', 'zombies' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/CleverRaven/Cataclysm-DDA'
      }
    ]
  },
  {
    id: 85,
    name: 'citybound',
    creator: 'janedoe',
    description: 'A work-in-progress, open-source, multi-player city simulation game.',
    skills: [ 'Rust', 'JavaScript', 'TypeScript', 'Less', 'HTML' ],
    tags: [ 'actor model', 'city', 'game', 'rust', 'simulation' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/citybound/citybound'
      }
    ]
  },
  {
    id: 86,
    name: 'chinese dos games',
    creator: 'patrick',
    description: '🎮 Chinese DOS games collections.',
    skills: [ 'Python' ],
    tags: [ 'dos', 'game' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rwv/chinese-dos-games'
      }
    ]
  },
  {
    id: 87,
    name: 'entt',
    creator: 'akbarhaider',
    description: 'Gaming meets modern C++ - a fast and reliable entity component system (ECS) and much more',
    skills: [ 'C++', 'CMake', 'Python', 'C', 'Shell', 'Starlark' ],
    tags: [
      'architectural patterns',
      'cpp',
      'cpp17',
      'cpp20',
      'data oriented',
      'data oriented design',
      'ecs',
      'ecs framework',
      'entity component system',
      'entt',
      'game dev',
      'game development',
      'game engine',
      'game programming',
      'gamedev',
      'header only',
      'modern cpp',
      'no dependencies',
      'production ready',
      'reflection'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/skypjack/entt' } ]
  },
  {
    id: 88,
    name: 'abstreet',
    creator: 'akbarhaider',
    description: 'Transportation planning and traffic simulation software for creating cities friendlier to walking, biking, and public transit',
    skills: [
      'Rust',       'Shell',
      'Python',     'HTML',
      'TypeScript', 'GLSL',
      'Go',         'Makefile',
      'CSS',        'Batchfile'
    ],
    tags: [
      'game',
      'openstreetmap',
      'seattle',
      'simulation',
      'traffic simulation'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/a-b-street/abstreet'
      }
    ]
  },
  {
    id: 89,
    name: 'githug',
    creator: 'abdulimtiaz',
    description: 'Git your game on!',
    skills: [ 'Shell', 'Ruby', 'Dockerfile', 'JavaScript', 'Makefile' ],
    tags: [ 'git' ],
    links: [ { type: 'GitHub', link: 'https://github.com/Gazler/githug' } ]
  },
  {
    id: 90,
    name: 'ebiten',
    creator: 'abdulimtiaz',
    description: 'A dead simple 2D game library for Go',
    skills: [ 'Go', 'Objective-C', 'C', 'Shell', 'Dockerfile' ],
    tags: [
      'ebiten',
      'game',
      'game 2d',
      'game development',
      'game engine',
      'game engine 2d',
      'game library',
      'go',
      'golang',
      'golang library'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/hajimehoshi/ebiten' }
    ]
  },
  {
    id: 91,
    name: 'DeepLearningFlappyBird',
    creator: 'janedoe',
    description: 'Flappy Bird hack using Deep Reinforcement Learning (Deep Q-learning).',
    skills: [ 'Python' ],
    tags: [ 'deep learning', 'deep reinforcement learning', 'game' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/yenchenlin/DeepLearningFlappyBird'
      }
    ]
  },
  {
    id: 92,
    name: 'flame',
    creator: 'frankniu',
    description: 'A minimalist Flutter game engine',
    skills: [ 'Dart', 'HTML', 'Shell' ],
    tags: [
      'dart',
      'flame',
      'flutter',
      'game',
      'game engine',
      'hacktoberfest'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/flame-engine/flame' }
    ]
  },
  {
    id: 93,
    name: 'SerpentAI',
    creator: 'abdulimtiaz',
    description: 'Game Agent Framework. Helping you create AIs / Bots that learn to play any game you own!',
    skills: [ 'Python' ],
    tags: [
      'artificial intelligence',
      'computer vision',
      'deep learning',
      'framework',
      'machine learning',
      'python',
      'video games'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/SerpentAI/SerpentAI'
      }
    ]
  },
  {
    id: 94,
    name: 'Airtest',
    creator: 'tufayelahmed',
    description: 'UI Automation Framework for Games and Apps',
    skills: [ 'Python', 'HTML', 'JavaScript', 'CSS', 'Shell' ],
    tags: [
      'android',
      'automated testing',
      'automation',
      'game',
      'ios',
      'test automation',
      'test framework',
      'unity3d',
      'windows'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/AirtestProject/Airtest'
      }
    ]
  },
  {
    id: 95,
    name: 'GameNetworkingSockets',
    creator: 'akbarhaider',
    description: 'Reliable & unreliable messages over UDP.  Robust message fragmentation & reassembly.  P2P networking / NAT traversal.  Encryption.',
    skills: [ 'C++', 'C', 'CMake', 'Python', 'Shell', 'Roff', 'Batchfile' ],
    tags: [
      'game development',
      'networking',
      'peer to peer',
      'realtime messaging',
      'reliable messages'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ValveSoftware/GameNetworkingSockets'
      }
    ]
  },
  {
    id: 96,
    name: 'Hilo',
    creator: 'joybiswas',
    description: 'A Cross-end HTML5 Game development solution developed by Alibaba Group',
    skills: [ 'JavaScript', 'ActionScript', 'HTML', 'CSS', 'Shell', 'Java' ],
    tags: [ 'canvas', 'game', 'hilo', 'webgl' ],
    links: [ { type: 'GitHub', link: 'https://github.com/hiloteam/Hilo' } ]
  },
  {
    id: 97,
    name: 'devilutionX',
    creator: 'akbarhaider',
    description: 'Diablo build for modern operating systems',
    skills: [
      'C++',        'Java',
      'CMake',      'Python',
      'C',          'Shell',
      'HTML',       'Batchfile',
      'Dockerfile', 'Objective-C',
      'Ruby'
    ],
    tags: [
      'debian',
      'devilution',
      'diablo',
      'game',
      'hacktober',
      'hacktoberfest',
      'homebrew'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/diasurgical/devilutionX'
      }
    ]
  },
  {
    id: 98,
    name: 'ET',
    creator: 'zealptl',
    description: 'Unity3D Client And C# Server Framework',
    skills: [ 'C#', 'CMake', 'C', 'C++', 'Batchfile', 'Shell', 'Emacs Lisp' ],
    tags: [
      'actor',   'c sharp',
      'game',    'game engine',
      'meta',    'metaverse',
      'mmo',     'mmorpg',
      'netcore', 'server',
      'unity',   'unity3d'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/egametang/ET' } ]
  },
  {
    id: 99,
    name: 'flexboxfroggy',
    creator: 'johndoe',
    description: 'A game for learning CSS flexbox 🐸',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [ 'css', 'flexbox', 'flexbox froggy', 'game' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/thomaspark/flexboxfroggy'
      }
    ]
  },
  {
    id: 100,
    name: 'Entitas CSharp',
    creator: 'justinsiu',
    description: 'Entitas is a super fast Entity Component System (ECS) Framework specifically made for C# and Unity',
    skills: [ 'C#', 'Shell' ],
    tags: [
      'c sharp',
      'design pattern',
      'design patterns',
      'ecs',
      'entitas',
      'entitas csharp',
      'entity',
      'entity component',
      'entity component system',
      'entity framework',
      'game',
      'game development',
      'game engine',
      'gamedev',
      'paradigm',
      'paradigmshift',
      'performance',
      'tdd',
      'test driven development',
      'unity'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/sschmid/Entitas-CSharp'
      }
    ]
  },
  {
    id: 101,
    name: 'shapez.io',
    creator: 'frankniu',
    description: 'shapez.io is an open source base building game inspired by factorio! Available on web & steam.',
    skills: [
      'JavaScript',
      'SCSS',
      'Python',
      'HTML',
      'Dockerfile',
      'Batchfile',
      'Shell'
    ],
    tags: [
      'game',
      'game 2d',
      'game development',
      'gamedev',
      'games',
      'javascript game'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/tobspr/shapez.io' } ]
  },
  {
    id: 102,
    name: 'Provenance',
    creator: 'janedoe',
    description: 'iOS & tvOS multi-emulator frontend, supporting various Atari, Bandai, NEC, Nintendo, Sega, SNK and Sony console systems… Get Started:  https://wiki.provenance-emu.com  | ',
    skills: [
      'C',
      'C++',
      'Swift',
      'Objective-C',
      'Shell',
      'Makefile',
      'POV-Ray SDL',
      'Pascal',
      'Assembly',
      'Objective-C++',
      'Pawn',
      'HTML',
      'NASL',
      'CMake',
      'Roff',
      'M4',
      'TeX',
      'SourcePawn',
      'GLSL',
      'Metal',
      'JavaScript',
      'Awk',
      'Batchfile',
      'PHP',
      'DIGITAL Command Language',
      'Yacc',
      'Python',
      'Ruby',
      'Module Management System',
      'CSS',
      'Tcl',
      'Lua',
      'Scheme',
      'sed'
    ],
    tags: [
      'atari',          'catalyst',
      'emulation',      'emulator',
      'game',           'gameboy',
      'gameboyadvance', 'genesis',
      'ios',            'macos',
      'n64',            'nes',
      'nintendo',       'objective c',
      'playstation',    'retrogaming',
      'sega',           'snes',
      'swift',          'tvos'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Provenance-Emu/Provenance'
      }
    ]
  },
  {
    id: 103,
    name: 'OpenSC2K',
    creator: 'techlead',
    description: 'OpenSC2K - An Open Source remake of Sim City 2000 by Maxis',
    skills: [ 'JavaScript', 'TypeScript', 'HTML', 'CSS' ],
    tags: [
      '2000',        'city',
      'electron',    'game',
      'javascript',  'maxis',
      'opensc2k',    'phaser',
      'phaser game', 'phaser3',
      'phaserjs',    'remake',
      'sc2k',        'sim',
      'simcity',     'simcity 2000',
      'typescript',  'webgl'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/nicholas-ochoa/OpenSC2K'
      }
    ]
  },
  {
    id: 104,
    name: 'GameNetworkingResources',
    creator: 'johndoe',
    description: 'A Curated List of Game Network Programming Resources',
    skills: [ 'C' ],
    tags: [
      'awesome',             'awesome list',
      'cpp',                 'csharp',
      'game development',    'game networking',
      'game programming',    'gamedev',
      'gameplay networking', 'javascript',
      'multiplayer',         'netcode',
      'network',             'network programming',
      'networking',          'replication',
      'unity',               'unity3d',
      'unreal engine',       'unreal engine 4'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ThusWroteNomad/GameNetworkingResources'
      }
    ]
  },
  {
    id: 105,
    name: 'Hearthstone Deck Tracker',
    creator: 'patrick',
    description: 'A deck tracker and deck manager for Hearthstone on Windows',
    skills: [ 'C#', 'PowerShell', 'Batchfile', 'JavaScript' ],
    tags: [
      'c sharp',
      'card',
      'deck',
      'deck tracker',
      'game',
      'hdt',
      'hearthsim',
      'hearthstone',
      'hearthstone deck tracker',
      'opponent',
      'overlay'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/HearthSim/Hearthstone-Deck-Tracker'
      }
    ]
  },
  {
    id: 106,
    name: 'agones',
    creator: 'akbarhaider',
    description: 'Dedicated Game Server Hosting and Scaling for Multiplayer Games on Kubernetes',
    skills: [
      'Go',         'C++',
      'JavaScript', 'C#',
      'CSS',        'HTML',
      'Makefile',   'Shell',
      'HCL',        'SCSS',
      'Rust',       'Dockerfile',
      'CMake',      'Python',
      'C',          'Smarty',
      'Batchfile'
    ],
    tags: [
      'agones',
      'dedicated game servers',
      'dedicated gameservers',
      'game development',
      'game server',
      'go',
      'golang',
      'kubernetes',
      'multiplayer'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/googleforgames/agones'
      }
    ]
  },
  {
    id: 107,
    name: 'open project 1',
    creator: 'tanzilbaraskar',
    description: 'Unity Open Project #1: Chop Chop',
    skills: [ 'C#', 'ShaderLab', 'HLSL' ],
    tags: [ 'game', 'open source', 'unity' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/UnityTechnologies/open-project-1'
      }
    ]
  },
  {
    id: 108,
    name: 'react game kit',
    creator: 'joma',
    description: 'Component library for making games with React  & React Native',
    skills: [ 'JavaScript' ],
    tags: [
      'component tree',
      'game',
      'matter',
      'physics bodies',
      'physics engine',
      'react',
      'reactjs',
      'sprite animation',
      'spritesheet',
      'tilemap'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/FormidableLabs/react-game-kit'
      }
    ]
  },
  {
    id: 109,
    name: 'baritone',
    creator: 'techlead',
    description: 'google maps for block game',
    skills: [ 'Java', 'Dockerfile' ],
    tags: [
      'astar',
      'astar algorithm',
      'astar pathfinding',
      'forgegradle',
      'gradle',
      'impact',
      'java',
      'minecraft',
      'pathfinding'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/cabaletta/baritone' }
    ]
  },
  {
    id: 110,
    name: 'leaf',
    creator: 'tanzilbaraskar',
    description: 'A game server framework in Go (golang)',
    skills: [ 'Go' ],
    tags: [ 'game framework', 'game server', 'go', 'golang', 'leaf' ],
    links: [ { type: 'GitHub', link: 'https://github.com/name5566/leaf' } ]
  },
  {
    id: 111,
    name: 'gameboy.live',
    creator: 'mehedishohag',
    description: '🕹️ A basic gameboy emulator with terminal "Cloud Gaming" support',
    skills: [ 'Go', 'HTML', 'Shell' ],
    tags: [ 'ascii', 'emulator', 'game', 'gameboy', 'ternimal' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/HFO4/gameboy.live' }
    ]
  },
  {
    id: 112,
    name: 'cuberite',
    creator: 'tanzilbaraskar',
    description: 'A lightweight, fast and extensible game server for Minecraft',
    skills: [
      'C++',        'Lua',
      'HTML',       'CMake',
      'C',          'Shell',
      'Makefile',   'CSS',
      'JavaScript', 'Batchfile',
      'QMake'
    ],
    tags: [
      'android',  'c plus plus',
      'cuberite', 'linux',
      'lua',      'minecraft',
      'plugins',  'raspberry pi',
      'server',   'windows'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/cuberite/cuberite' }
    ]
  },
  {
    id: 113,
    name: 'openmw',
    creator: 'tufayelahmed',
    description: 'OpenMW is an open-source open-world RPG game engine that supports playing Morrowind. Main repo and issue tracker can be found here: https://gitlab.com/OpenMW/openmw/',
    skills: [
      'C++',        'CMake',
      'Lua',        'C',
      'GLSL',       'TeX',
      'Shell',      'Python',
      'PowerShell', 'Makefile'
    ],
    tags: [
      'c plus plus',
      'foss',
      'morrowind',
      'open source',
      'openmw',
      'rpg engine',
      'tes'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/OpenMW/openmw' } ]
  },
  {
    id: 114,
    name: 'piston',
    creator: 'joybiswas',
    description: 'A modular game engine written in Rust',
    skills: [ 'Rust', 'Shell' ],
    tags: [ 'modular game engine', 'piston', 'rust' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/PistonDevelopers/piston'
      }
    ]
  },
  {
    id: 115,
    name: 'OpenTTD',
    creator: 'mdrislam30',
    description: 'OpenTTD is an open source simulation game based upon Transport Tycoon Deluxe',
    skills: [
      'C++',           'C',
      'CMake',         'Squirrel',
      'Objective-C++', 'HTML',
      'Objective-C',   'Python',
      'Awk',           'Batchfile',
      'JavaScript',    'Shell',
      'Dockerfile'
    ],
    tags: [ 'game', 'isometric', 'openttd', 'sandbox', 'simulation' ],
    links: [ { type: 'GitHub', link: 'https://github.com/OpenTTD/OpenTTD' } ]
  },
  {
    id: 116,
    name: 'Playnite',
    creator: 'techlead',
    description: 'Video game library manager with support for wide range of 3rd party libraries and game emulation support, providing one unified interface for your games.',
    skills: [ 'C#', 'PowerShell', 'HTML', 'Python', 'Batchfile' ],
    tags: [
      'csharp', 'gaming',
      'gog',    'launcher',
      'origin', 'steam',
      'uplay',  'wpf'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/JosefNemec/Playnite'
      }
    ]
  },
  {
    id: 117,
    name: 'Urho3D',
    creator: 'akbarhaider',
    description: 'Cross-platform 2D and 3D game engine',
    skills: [
      'C++',         'AngelScript',
      'Lua',         'CMake',
      'HLSL',        'GLSL',
      'MAXScript',   'Kotlin',
      'Shell',       'ActionScript',
      'Batchfile',   'HTML',
      'Objective-C', 'Mustache',
      'SCSS'
    ],
    tags: [
      'angelscript',
      'cross platform',
      'game development',
      'game engine',
      'lua',
      'open source',
      'urho3d'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/urho3d/Urho3D' } ]
  },
  {
    id: 118,
    name: 'melonJS',
    creator: 'johndoe',
    description: 'a fresh & lightweight javascript game engine',
    skills: [ 'JavaScript', 'CSS', 'HTML', 'GLSL', 'Shell' ],
    tags: [
      '2d game engine',   'canvas2d',
      'chrome',           'cordova',
      'es6',              'firefox',
      'game development', 'game engine',
      'gamedev',          'html5',
      'html5 canvas',     'javascript',
      'melonjs',          'tiled',
      'web3',             'webaudio',
      'webgl',            'webgl2',
      'webkit'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/melonjs/melonJS' } ]
  },
  {
    id: 119,
    name: 'pixel',
    creator: 'patrick',
    description: 'A hand-crafted 2D game library in Go',
    skills: [ 'Go' ],
    tags: [
      'game engine',
      'gamedev',
      'gamedev library',
      'go',
      'golang',
      'graphics',
      'library',
      'window'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/faiface/pixel' } ]
  },
  {
    id: 120,
    name: 'magnum',
    creator: 'bob',
    description: 'Lightweight and modular C++11 graphics middleware for games and data visualization',
    skills: [
      'C++',        'C',
      'CMake',      'GLSL',
      'Shell',      'Objective-C',
      'Batchfile',  'Python',
      'JavaScript', 'Objective-C++',
      'HTML',       'CSS',
      'Ruby',       'Makefile'
    ],
    tags: [
      '3d',          'android',
      'c plus plus', 'c plus plus 11',
      'cmake',       'emscripten',
      'game',        'game engine',
      'gamedev',     'glfw',
      'graphics',    'graphics engine',
      'ios',         'magnum',
      'opengl',      'sdl',
      'spir v',      'vulkan',
      'webassembly', 'webgl'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/mosra/magnum' } ]
  },
  {
    id: 121,
    name: 'wesnoth',
    creator: 'justinsiu',
    description: 'An open source, turn-based strategy game with a high fantasy theme.',
    skills: [
      'C++',           'Lua',
      'Python',        'Emacs Lisp',
      'Shell',         'CMake',
      'Perl',          'C',
      'Vim script',    'TypeScript',
      'Objective-C++', 'NSIS',
      'PHP',           'Makefile',
      'JavaScript',    'HTML',
      'CSS',           'sed',
      'Dockerfile',    'Objective-C',
      'Batchfile'
    ],
    tags: [
      'fantasy',
      'free',
      'game',
      'opensource',
      'strategy game',
      'turn based strategy'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/wesnoth/wesnoth' } ]
  },
  {
    id: 122,
    name: 'Grasscutter',
    creator: 'anvinhtr',
    description: 'A server software reimplementation for a certain anime game.',
    skills: [ 'Java', 'Batchfile', 'Python' ],
    tags: [ 'java', 'kcp', 'server' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Grasscutters/Grasscutter'
      }
    ]
  },
  {
    id: 123,
    name: 'cellnet',
    creator: 'zealptl',
    description: 'High performance, simple, extensible golang open source network library',
    skills: [ 'Go', 'Shell', 'Batchfile', 'Smarty' ],
    tags: [
      'game',
      'golang',
      'networking',
      'protobuf',
      'rpc',
      'server',
      'socket',
      'tcp server'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/davyxu/cellnet' } ]
  },
  {
    id: 124,
    name: 'stride',
    creator: 'refatmonjur',
    description: 'Stride Game Engine (formerly Xenko)',
    skills: [
      'C#',               'Assembly',
      'C++',              'C',
      'HLSL',             'Less',
      'Rich Text Format', 'HTML',
      'JavaScript',       'Python',
      'Batchfile',        'Lex',
      'Objective-C',      'GLSL',
      'CSS',              'Shell',
      'PowerShell',       'Mathematica'
    ],
    tags: [
      'csharp',
      'direct3d',
      'game development',
      'game engine',
      'gamedev',
      'multi platform',
      'stride',
      'vulkan',
      'xenko'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/stride3d/stride' } ]
  },
  {
    id: 125,
    name: 'Games',
    creator: 'joybiswas',
    description: 'Games: Create interesting games by pure python.',
    skills: [ 'Python' ],
    tags: [
      'classic game',
      'flappy bird',
      'game',
      'game 2d',
      'game development',
      'games',
      'pygame',
      'pygame games',
      'python',
      'tank game'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/CharlesPikachu/Games'
      }
    ]
  },
  {
    id: 126,
    name: 'egret core',
    creator: 'mehedishohag',
    description: 'Egret is a brand new open mobile game and application engine which allows you to quickly build mobile games and apps on Android,iOS and Windows.',
    skills: [ 'JavaScript', 'TypeScript', 'HTML', 'GLSL', 'EJS' ],
    tags: [
      'egret',
      'game engine',
      'html5 canvas',
      'html5 game',
      'javascript',
      'typescript',
      'webgl'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/egret-labs/egret-core'
      }
    ]
  },
  {
    id: 127,
    name: 'mgba',
    creator: 'janedoe',
    description: 'mGBA Game Boy Advance Emulator',
    skills: [
      'C',        'C++',
      'CMake',    'Python',
      'GLSL',     'Objective-C',
      'Assembly', 'Shell',
      'Makefile', 'GDB'
    ],
    tags: [
      'game boy',
      'game boy advance',
      'game boy color',
      'game boy emulator',
      'gameboy',
      'gameboy advance',
      'gameboy advance emulator',
      'gameboy color emulator',
      'gameboy emulator',
      'gba',
      'mgba'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/mgba-emu/mgba' } ]
  },
  {
    id: 128,
    name: 'gameplay',
    creator: 'patrick',
    description: 'Open-source, cross-platform, C++ game engine for creating 2D/3D games.',
    skills: [
      'C++',   'Objective-C++',
      'GLSL',  'QMake',
      'CMake', 'Batchfile',
      'Shell', 'Makefile',
      'Java',  'C',
      'HTML'
    ],
    tags: [
      'c plus plus',
      'cross platform',
      'engine',
      'open source',
      'vulkan'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/gameplay3d/gameplay'
      }
    ]
  },
  {
    id: 129,
    name: 'Fyrox',
    creator: 'joybiswas',
    description: '3D and 2D game engine written in Rust',
    skills: [ 'Rust', 'GLSL' ],
    tags: [ '2d', '3d', 'engine', 'gui', 'rust', 'rust lang' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/FyroxEngine/Fyrox' }
    ]
  },
  {
    id: 130,
    name: 'GDevelop',
    creator: 'joma',
    description: ':video_game: GDevelop is an open-source, cross-platform game engine designed to be used by everyone.',
    skills: [
      'JavaScript', 'C++',
      'TypeScript', 'C',
      'CMake',      'CSS',
      'HTML',       'Shell',
      'Batchfile',  'Dockerfile'
    ],
    tags: [
      '2d game',           '2d game engine',
      'c plus plus',       'game',
      'game 2d',           'game development',
      'game engine',       'gamedev',
      'gamemaker',         'gdevelop',
      'hacktoberfest',     'html5',
      'html5 game engine', 'javascript',
      'web app'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/4ian/GDevelop' } ]
  },
  {
    id: 131,
    name: 'GameFramework',
    creator: 'frankniu',
    description: 'This is literally a game framework, based on Unity game engine. It encapsulates commonly used game modules during development, and, to a large degree, standardises the process, enhances the development speed and ensures the product quality.',
    skills: [ 'C#' ],
    tags: [
      'game development',
      'game frameworks',
      'game modules',
      'unity',
      'unity3d'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/EllanJiang/GameFramework'
      }
    ]
  },
  {
    id: 132,
    name: 'endless sky',
    creator: 'joma',
    description: 'Space exploration, trading, and combat game.',
    skills: [ 'C++', 'Shell', 'Python', 'Roff', 'C', 'PowerShell' ],
    tags: [ '2d game', 'game', 'role playing game', 'space game' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/endless-sky/endless-sky'
      }
    ]
  },
  {
    id: 133,
    name: 'cute_headers',
    creator: 'patrick',
    description: 'Collection of cross-platform one-file C/C++ libraries with no dependencies, primarily used for games',
    skills: [ 'C', 'Objective-C', 'CMake', 'C++', 'Makefile', 'PostScript' ],
    tags: [
      'audio',
      'c',
      'collision',
      'collision detection',
      'compression',
      'cross platform',
      'game',
      'header',
      'library',
      'math',
      'opengl',
      'png'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/RandyGaul/cute_headers'
      }
    ]
  },
  {
    id: 134,
    name: 'NoahGameFrame',
    creator: 'bob',
    description: 'A fast, scalable, distributed game server engine/framework for C++, include the actor library, network library, can be used as a  real time multiplayer game engine ( MMO RPG/MOBA ), which support C#/Lua script/ Unity3d, Cocos2dx and plan to support Unreal.',
    skills: [
      'C++',
      'C',
      'C#',
      'Assembly',
      'Ada',
      'Pascal',
      'CMake',
      'Java',
      'HTML',
      'DIGITAL Command Language',
      'Makefile',
      'Lua',
      'Roff',
      'Shell',
      'Batchfile',
      'CLIPS',
      'Perl',
      'SAS',
      'M4',
      'Module Management System',
      'Dockerfile'
    ],
    tags: [
      'architecture',
      'game',
      'game development',
      'game engine',
      'game server',
      'gamedev',
      'gameserver',
      'mmo',
      'mmorpg',
      'server architecture',
      'unity',
      'unity3d'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ketoo/NoahGameFrame'
      }
    ]
  },
  {
    id: 135,
    name: 'sherlock',
    creator: 'tufayelahmed',
    description: '🔎 Hunt down social media accounts by username across social networks',
    skills: [ 'Python', 'Dockerfile' ],
    tags: [
      'cli',
      'hacktoberfest',
      'information gathering',
      'linux',
      'macos',
      'osint',
      'python3',
      'reconnaissance',
      'redteam',
      'sherlock',
      'tools',
      'windows'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/sherlock-project/sherlock'
      }
    ]
  },
  {
    id: 136,
    name: 'hosts',
    creator: 'abdulimtiaz',
    description: '🔒 Consolidating and extending hosts files from several well-curated sources. Optionally pick extensions for porn, social media, and other categories.',
    skills: [ 'Python', 'Batchfile', 'Nix', 'Dockerfile' ],
    tags: [
      'ad blocker',      'anti virus',
      'curated sources', 'gambling filter',
      'hosts',           'malware',
      'porn filter',     'pornblocker',
      'privacy',         'protection',
      'python',          'ransomware',
      'security',        'social media filter',
      'trojans',         'unified hosts'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/StevenBlack/hosts' }
    ]
  },
  {
    id: 137,
    name: 'monica',
    creator: 'justinsiu',
    description: 'Personal CRM. Remember everything about your friends, family and business relationships.',
    skills: [
      'PHP',
      'Vue',
      'Blade',
      'Shell',
      'Dockerfile',
      'Makefile',
      'Procfile'
    ],
    tags: [
      'crm',
      'family',
      'friends',
      'hacktoberfest',
      'laravel',
      'php',
      'prm',
      'social'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/monicahq/monica' } ]
  },
  {
    id: 138,
    name: 'diaspora',
    creator: 'tanzilbaraskar',
    description: 'A privacy-aware, distributed, open source social network.',
    skills: [
      'Ruby',     'JavaScript',
      'Haml',     'Gherkin',
      'SCSS',     'Handlebars',
      'Shell',    'Dockerfile',
      'Procfile'
    ],
    tags: [
      'decentralized',
      'distributed',
      'federated',
      'hacktoberfest',
      'rails',
      'ruby',
      'social network'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/diaspora/diaspora' }
    ]
  },
  {
    id: 139,
    name: 'social analyzer',
    creator: 'joma',
    description: "API, CLI, and Web App for analyzing and finding a person's profile in +1000 social media \\ websites",
    skills: [ 'JavaScript', 'HTML', 'Python', 'Shell', 'Dockerfile' ],
    tags: [
      'analysis',       'analyzer',
      'cli',            'information gathering',
      'javascript',     'nodejs',
      'nodejs cli',     'osint',
      'pentest',        'pentesting',
      'person profile', 'profile',
      'python',         'reconnaissance',
      'security tools', 'social analyzer',
      'social media',   'sosint',
      'username'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/qeeqbox/social-analyzer'
      }
    ]
  },
  {
    id: 140,
    name: 'w3 goto world',
    creator: 'saif',
    description: '🍅 Git/AWS/Google 镜像 ,SS/SSR/VMESS节点,WireGuard,IPFS, DeepWeb,Capitalism 、行业研究报告的知识储备库',
    skills: [ 'Python' ],
    tags: [
      'aploium',         'capitalism',
      'country',         'education',
      'free ss account', 'git',
      'mirror site',     'mirrors',
      'psychology',      'read',
      'social',          'speeder',
      'ss',              'ssr',
      'taiwan',          'tunsafe',
      'vpn',             'wireguard'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hoochanlon/w3-goto-world'
      }
    ]
  },
  {
    id: 141,
    name: 'nakama',
    creator: 'mdrislam30',
    description: 'Distributed server for social and realtime games and apps.',
    skills: [
      'Go',         'Lua',
      'TypeScript', 'HTML',
      'Shell',      'SCSS',
      'Yacc',       'Dockerfile',
      'Python',     'JavaScript',
      'Makefile'
    ],
    tags: [
      'backend',
      'backend as a service',
      'chat server',
      'game framework',
      'game server',
      'multiplayer',
      'nakama',
      'realtime',
      'realtime games',
      'social',
      'unity engine',
      'unreal engine'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/heroiclabs/nakama' }
    ]
  },
  {
    id: 142,
    name: 'humhub',
    creator: 'techlead',
    description: 'HumHub is an Open Source Enterprise Social Network. Easy to install, intuitive to use and extendable with countless freely available modules.',
    skills: [ 'PHP', 'JavaScript', 'Less', 'CSS', 'HTML', 'Batchfile', 'Hack' ],
    tags: [
      'awesome',
      'enterprise social networks',
      'humhub',
      'php',
      'social network',
      'social networking',
      'social networks',
      'yii2'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/humhub/humhub' } ]
  },
  {
    id: 143,
    name: 'kratos',
    creator: 'bob',
    description: 'Next-gen identity server (think Auth0, Okta, Firebase) with Ory-hardened authentication, MFA, FIDO2, profile management, identity schemas, social sign in, registration, account recovery, passwordless. Golang, headless, API-only - without templating or theming headaches.',
    skills: [
      'Go',
      'TypeScript',
      'Mustache',
      'Shell',
      'Makefile',
      'JavaScript',
      'Jsonnet'
    ],
    tags: [
      'hacktoberfest',
      'identity',
      'identity management',
      'login',
      'profile management',
      'registration',
      'user',
      'user management',
      'user profile',
      'user profiles',
      'users'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ory/kratos' } ]
  },
  {
    id: 144,
    name: 'socialite',
    creator: 'zealptl',
    description: 'Laravel wrapper around OAuth 1 & OAuth 2 libraries.',
    skills: [ 'PHP' ],
    tags: [ 'laravel', 'oauth' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/laravel/socialite' }
    ]
  },
  {
    id: 145,
    name: 'Badges4 README.md Profile',
    creator: 'refatmonjur',
    description: '👩‍💻👨‍💻 Improve your README.md profile with these amazing badges.',
    skills: [ 'Markdown' ],
    tags: [
      'awesome',
      'badge',
      'badges',
      'collection',
      'github',
      'github profile',
      'github profile readme',
      'icon',
      'icons',
      'profile',
      'readme',
      'readme profile',
      'shield',
      'shields',
      'social',
      'uri'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/alexandresanlim/Badges4-README.md-Profile'
      }
    ]
  },
  {
    id: 146,
    name: 'serenata de amor',
    creator: 'frankniu',
    description: '🕵 Artificial Intelligence for social control of public administration',
    skills: [
      'Python',
      'Elm',
      'HTML',
      'Dockerfile',
      'JavaScript',
      'CSS',
      'Shell'
    ],
    tags: [
      'artificial intelligence',
      'civic tech',
      'data science',
      'machine learning',
      'open data',
      'politics'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/okfn-brasil/serenata-de-amor'
      }
    ]
  },
  {
    id: 147,
    name: 'share.js',
    creator: 'johndoe',
    description: '一键分享到微博、QQ空间、QQ好友、微信、腾讯微博、豆瓣、Facebook、Twitter、Linkedin、Google+、点点等',
    skills: [ 'JavaScript', 'CSS' ],
    tags: [ 'share', 'social' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/overtrue/share.js' }
    ]
  },
  {
    id: 148,
    name: 'patchwork',
    creator: 'johndoe',
    description: 'A decentralized messaging and sharing app built on top of Secure Scuttlebutt (SSB).',
    skills: [ 'JavaScript', 'HTML' ],
    tags: [
      'decentralized',
      'decentralized messaging',
      'electron',
      'javascript',
      'linux',
      'macos',
      'nodejs',
      'off grid',
      'offline',
      'p2p',
      'scuttlebutt',
      'server',
      'social',
      'social network',
      'ssb',
      'windows'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ssbc/patchwork' } ]
  },
  {
    id: 149,
    name: 'rrssb',
    creator: 'mehedishohag',
    description: ':arrow_right_hook: Ridiculously Responsive Social Sharing Buttons',
    skills: [ 'HTML', 'JavaScript', 'CSS' ],
    tags: [
      'facebook',
      'rrssb',
      'sharing',
      'social buttons',
      'social shares',
      'twitter'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/kni-labs/rrssb' } ]
  },
  {
    id: 150,
    name: 'stringer',
    creator: 'joybiswas',
    description: 'A self-hosted, anti-social RSS reader.',
    skills: [
      'Ruby',
      'CSS',
      'HTML',
      'JavaScript',
      'Dockerfile',
      'Shell',
      'Procfile'
    ],
    tags: [ 'feed reader', 'feedjira', 'rss', 'rss reader', 'ruby' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/stringer-rss/stringer'
      }
    ]
  },
  {
    id: 151,
    name: 'seeker',
    creator: 'justinsiu',
    description: 'Accurately Locate Smartphones using Social Engineering ',
    skills: [
      'CSS',
      'HTML',
      'JavaScript',
      'Python',
      'PHP',
      'Shell',
      'Dockerfile'
    ],
    tags: [
      'accuracy',
      'altitude',
      'geolocation',
      'latitude',
      'longitude',
      'reconnaissance',
      'system information'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/thewhiteh4t/seeker' }
    ]
  },
  {
    id: 152,
    name: 'hybridauth',
    creator: 'mdrislam30',
    description: 'Open source social sign on PHP Library. HybridAuth goal is to act as an abstract api between your application and various social apis and identities providers such as Facebook, Twitter and Google.',
    skills: [ 'PHP', 'HTML' ],
    tags: [
      'facebook',
      'google',
      'hybridauth',
      'php',
      'social login',
      'social networks',
      'twitter'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hybridauth/hybridauth'
      }
    ]
  },
  {
    id: 153,
    name: 'project_mern_memories',
    creator: 'tufayelahmed',
    description: `This is a code repository for the corresponding video tutorial. Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called "Memories" and it is a simple social media app that allows users to post interesting events that happened in their lives.`,
    skills: [ 'JavaScript', 'HTML' ],
    tags: [ 'expressjs', 'mongodb', 'nodejs', 'reactjs', 'redux' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/adrianhajdin/project_mern_memories'
      }
    ]
  },
  {
    id: 154,
    name: 'react native share',
    creator: 'bob',
    description: 'Social share, sending simple data to other apps.',
    skills: [
      'Java',
      'Objective-C',
      'JavaScript',
      'TypeScript',
      'C#',
      'CSS',
      'Ruby',
      'Starlark'
    ],
    tags: [
      'android',
      'bridge',
      'intent',
      'ios',
      'react',
      'react native',
      'share',
      'uwp'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/react-native-share/react-native-share'
      }
    ]
  },
  {
    id: 155,
    name: 'bootstrap social',
    creator: 'akbarhaider',
    description: ':couple: Social Sign-In Buttons for Bootstrap',
    skills: [ 'HTML', 'JavaScript' ],
    tags: [ 'bootstrap', 'css', 'social buttons' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/lipis/bootstrap-social'
      }
    ]
  },
  {
    id: 156,
    name: 'SocialFish',
    creator: 'akbarhaider',
    description: 'Phishing Tool & Information Collector ',
    skills: [ 'CSS', 'HTML', 'Python' ],
    tags: [
      'educational',
      'pentest',
      'pentesting',
      'phishing',
      'python',
      'undead'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/UndeadSec/SocialFish'
      }
    ]
  },
  {
    id: 157,
    name: 'laravel auth',
    creator: 'saif',
    description: 'Laravel 8 with user authentication, registration with email confirmation, social media authentication, password recovery, and captcha protection. Uses offical [Bootstrap 4](http://getbootstrap.com). This also makes full use of Controllers for the routes, templates for the views, and makes use of middleware for routing. The project can be stood up in minutes.',
    skills: [ 'PHP', 'Blade', 'Shell', 'Vue' ],
    tags: [
      'authentication',
      'dropzonejs',
      'google maps',
      'gravatar api',
      'laravel',
      'laravel framework',
      'localization',
      'registration',
      'roles',
      'social authentication',
      'socialite',
      'socialite logins',
      'two step authentication',
      'user management',
      'user profile',
      'users'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jeremykenedy/laravel-auth'
      }
    ]
  },
  {
    id: 158,
    name: 'MonkeyKing',
    creator: 'bob',
    description: 'MonkeyKing helps you to post messages to Chinese Social Networks.',
    skills: [ 'Swift', 'PHP', 'Shell', 'Ruby', 'Objective-C' ],
    tags: [ 'alipay', 'qq', 'wechat', 'weibo' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/nixzhu/MonkeyKing' }
    ]
  },
  {
    id: 159,
    name: 'free gophers pack',
    creator: 'frankniu',
    description: '✨ This pack of 100+ gopher pictures and elements will help you to build own design of almost anything related to Go Programming Language: presentations, posts in blogs or social media, courses, videos and many, many more.',
    skills: [ 'Go' ],
    tags: [
      'blog',          'character',
      'course',        'education',
      'emoji',         'free',
      'go',            'golang',
      'gopher',        'gophers',
      'goroutine',     'illustration',
      'illustrations', 'mascot',
      'png',           'presentation',
      'raster',        'social media',
      'svg',           'vector'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/MariaLetta/free-gophers-pack'
      }
    ]
  },
  {
    id: 160,
    name: 'clairvoyant',
    creator: 'anvinhtr',
    description: 'Software designed to identify and monitor social/historical cues for short term stock movement',
    skills: [ 'Python' ],
    tags: [
      'backtesting trading strategies',
      'machine learning',
      'portfolio simulation',
      'stock market',
      'support vector machines'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/anfederico/clairvoyant'
      }
    ]
  },
  {
    id: 161,
    name: 'flaskbb',
    creator: 'joma',
    description: 'A classic Forum Software in Python using Flask.',
    skills: [ 'Python', 'HTML', 'JavaScript', 'SCSS', 'Makefile', 'Mako' ],
    tags: [ 'flask', 'flaskbb', 'forum', 'python', 'social' ],
    links: [ { type: 'GitHub', link: 'https://github.com/flaskbb/flaskbb' } ]
  },
  {
    id: 162,
    name: 'plus',
    creator: 'johndoe',
    description: '💝The Plus (ThinkSNS+) is a powerful, easy-to-develop social system built with Laravel.',
    skills: [
      'PHP',        'Vue',
      'JavaScript', 'Blade',
      'CSS',        'Less',
      'SCSS',       'Shell',
      'HTML'
    ],
    tags: [
      'app',      'component',
      'composer', 'docker',
      'laravel',  'php',
      'powerful', 'psr',
      'sns',      'social',
      'think',    'thinksns',
      'user',     'web'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/slimkit/plus' } ]
  },
  {
    id: 163,
    name: 'bootcamp',
    creator: 'tufayelahmed',
    description: 'An enterprise social network',
    skills: [ 'CSS', 'Python', 'HTML', 'JavaScript', 'Shell', 'Dockerfile' ],
    tags: [ 'django', 'python', 'social network' ],
    links: [ { type: 'GitHub', link: 'https://github.com/vitorfs/bootcamp' } ]
  },
  {
    id: 164,
    name: 'pump.io',
    creator: 'patrick',
    description: 'Social server with an ActivityStreams API',
    skills: [ 'JavaScript', 'Pug', 'CSS', 'HTML', 'Shell', 'Dockerfile' ],
    tags: [
      'activitystreams',
      'decentralization',
      'federation',
      'javascript',
      'nodejs',
      'pump io',
      'social',
      'social network'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/pump-io/pump.io' } ]
  },
  {
    id: 165,
    name: 'react share',
    creator: 'techlead',
    description: 'Social media share buttons and share counts for React',
    skills: [ 'TypeScript', 'JavaScript' ],
    tags: [
      'react',
      'react component',
      'share counts',
      'sharing',
      'social media'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/nygardk/react-share'
      }
    ]
  },
  {
    id: 166,
    name: 'sharer.js',
    creator: 'frankniu',
    description: ':on: :bookmark: Create your own social share buttons. No jquery.',
    skills: [ 'JavaScript' ],
    tags: [
      'facebook',
      'hackernews',
      'javascript',
      'okru',
      'pinterest',
      'reddit',
      'share buttons',
      'social network',
      'telegram',
      'twitter',
      'vanilla',
      'vanilla javascript',
      'vanillajs',
      'whatsapp'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ellisonleao/sharer.js'
      }
    ]
  },
  {
    id: 167,
    name: 'flutter_twitter_clone',
    creator: 'tanzilbaraskar',
    description: 'Fully functional Twitter clone built in  flutter framework using Firebase realtime database and storage',
    skills: [ 'Dart', 'Ruby', 'Swift', 'Java', 'Objective-C' ],
    tags: [
      'firebase auth',
      'firebase realtime database',
      'firebase storage',
      'flutter',
      'flutter app',
      'flutter apps',
      'social',
      'social app',
      'twitter',
      'twitter clone'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/TheAlphamerc/flutter_twitter_clone'
      }
    ]
  },
  {
    id: 168,
    name: 'ssb server',
    creator: 'joma',
    description: 'The gossip and replication server for Secure Scuttlebutt - a distributed social network',
    skills: [ 'JavaScript' ],
    tags: [ 'gossip', 'javascript', 'scuttlebot', 'scuttlebutt' ],
    links: [ { type: 'GitHub', link: 'https://github.com/ssbc/ssb-server' } ]
  },
  {
    id: 169,
    name: 'OctoBot',
    creator: 'joma',
    description: 'Cryptocurrency trading bot for TA, arbitrage and social trading with an advanced web interface',
    skills: [ 'Python', 'Cython', 'Roff', 'Dockerfile', 'Makefile', 'Shell' ],
    tags: [
      'arbitrage',
      'backtesting',
      'bitcoin',
      'bitcoin trading bot',
      'cryptocurrency',
      'cryptocurrency trading bot',
      'deep learning',
      'exchange',
      'machine learning',
      'octobot',
      'python',
      'social trading',
      'technical analysis',
      'telegram',
      'trading',
      'trading bot',
      'tradingview'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Drakkar-Software/OctoBot'
      }
    ]
  },
  {
    id: 170,
    name: 'macro_pack',
    creator: 'abdulimtiaz',
    description: 'macro_pack is a tool by @EmericNasi used to automatize obfuscation and generation of Office documents, VB scripts, shortcuts, and other formats for pentest, demo, and social engineering assessments. The goal of macro_pack is to simplify exploitation, antimalware bypass, and automatize the process from malicious macro and script generation to final document generation. It also provides a lot of helpful features useful for redteam or security research. ',
    skills: [ 'Python', 'Batchfile' ],
    tags: [
      'macros',
      'meterpreter',
      'msoffice',
      'obfuscation',
      'pentest',
      'redteam',
      'social engineering',
      'vba'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/sevagas/macro_pack' }
    ]
  },
  {
    id: 171,
    name: 'FlutterSocialAppUIKit',
    creator: 'frankniu',
    description: 'Flutter representation of a Social App Concept.',
    skills: [ 'Dart', 'Ruby', 'Swift', 'HTML', 'Kotlin', 'Objective-C' ],
    tags: [
      'android',
      'flutter',
      'ios',
      'mobile',
      'social media',
      'ui',
      'uikit'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/JideGuru/FlutterSocialAppUIKit'
      }
    ]
  },
  {
    id: 172,
    name: 'AspNet.Security.OAuth.Providers',
    creator: 'patrick',
    description: 'OAuth 2.0 social authentication providers for ASP.NET Core',
    skills: [ 'C#', 'PowerShell', 'Shell', 'CMake', 'Batchfile', 'Lua' ],
    tags: [ 'aspnetcore', 'oauth2', 'social authentication' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers'
      }
    ]
  },
  {
    id: 173,
    name: 'Elgg',
    creator: 'tanzilbaraskar',
    description: 'A social networking engine in PHP/MySQL',
    skills: [ 'PHP', 'JavaScript', 'CSS', 'HTML', 'Hack' ],
    tags: [
      'elgg',
      'framework',
      'hacktoberfest',
      'php',
      'social networking engine'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Elgg/Elgg' } ]
  },
  {
    id: 174,
    name: 'jekyll seo tag',
    creator: 'saif',
    description: "A Jekyll plugin to add metadata tags for search engines and social networks to better index and display your site's content.",
    skills: [ 'Ruby', 'HTML', 'Shell' ],
    tags: [
      'jekyll',
      'jekyll plugin',
      'json ld',
      'open graph',
      'search engine optimization',
      'seo',
      'social media'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jekyll/jekyll-seo-tag'
      }
    ]
  },
  {
    id: 175,
    name: 'Peergos',
    creator: 'mehedishohag',
    description: 'A p2p, secure file storage, social network and application protocol',
    skills: [ 'Java', 'HTML', 'Shell', 'Batchfile' ],
    tags: [
      'decentralized',
      'documents',
      'encrypted',
      'encryption',
      'end to end encryption',
      'ipfs',
      'ipld',
      'java',
      'libp2p',
      'p2p',
      'peer to peer',
      'photos',
      'post quantum',
      'privacy',
      'scwp',
      'security',
      'self certifying web protocol',
      'social network',
      'storage',
      'web4'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Peergos/Peergos' } ]
  },
  {
    id: 176,
    name: 'SocialCount',
    creator: 'anvinhtr',
    description: 'Unmaintained (see the README): Simple barebones project to show share counts from various social networks.',
    skills: [ 'JavaScript', 'CSS', 'HTML', 'Ruby' ],
    tags: [ 'facebook', 'third party javascript', 'twitter', 'widget' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/filamentgroup/SocialCount'
      }
    ]
  },
  {
    id: 177,
    name: 'movim',
    creator: 'bob',
    description: 'Movim - Decentralized social platform',
    skills: [ 'JavaScript', 'PHP', 'Smarty', 'CSS', 'Shell' ],
    tags: [
      'chat',
      'instant messaging',
      'movim',
      'php',
      'social network',
      'xmpp'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/movim/movim' } ]
  },
  {
    id: 178,
    name: 'SocialBox Termux',
    creator: 'janedoe',
    description: 'SocialBox is a Bruteforce Attack Framework [ Facebook , Gmail , Instagram ,Twitter ] , Coded By Belahsan Ouerghi Edit By samsesh for termux on android',
    skills: [ 'Shell' ],
    tags: [
      'android',
      'brute force',
      'bruteforce',
      'bruteforce attack framework',
      'bruteforce attacks',
      'cracking',
      'facebook',
      'hack',
      'hacking',
      'hacking tool',
      'hacking tools',
      'instagram',
      'kali linux',
      'linux',
      'socialbox termux',
      'terminal',
      'termux',
      'termux hacking',
      'thelinuxchoice',
      'twitter'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/samsesh/SocialBox-Termux'
      }
    ]
  },
  {
    id: 179,
    name: 'devzat',
    creator: 'tufayelahmed',
    description: 'The devs are over here at devzat, chat over SSH!',
    skills: [ 'Go', 'Shell' ],
    tags: [
      'chat',
      'devchat',
      'developer chat',
      'devzat',
      'slack',
      'social',
      'ssh',
      'ssh chat',
      'unicorns'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/quackduck/devzat' } ]
  },
  {
    id: 180,
    name: 'Tusky',
    creator: 'refatmonjur',
    description: 'An Android client for the microblogging server Mastodon',
    skills: [ 'Kotlin', 'Java' ],
    tags: [
      'android',
      'fediverse',
      'java',
      'kotlin',
      'mastodon',
      'social',
      'social network',
      'tusky'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/tuskyapp/Tusky' } ]
  },
  {
    id: 181,
    name: 'Cloakify',
    creator: 'zealptl',
    description: 'CloakifyFactory - Data Exfiltration & Infiltration In Plain Sight; Convert any filetype into list of everyday strings, using Text-Based Steganography; Evade DLP/MLS Devices, Defeat Data Whitelisting Controls, Social Engineering of Analysts, Evade AV Detection',
    skills: [ 'Python' ],
    tags: [
      'av evasion',    'cipher',
      'cryptography',  'data exfiltration',
      'dlp',           'exfiltration',
      'hacking',       'hacking tool',
      'hacking tools', 'infosec',
      'pentest',       'pentest tool',
      'pentest tools', 'pentesting',
      'privacy',       'red team',
      'security',      'security tools',
      'steganography', 'stego'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/TryCatchHCF/Cloakify'
      }
    ]
  },
  {
    id: 182,
    name: 'vue social sharing',
    creator: 'frankniu',
    description: 'A renderless Vue.js component for sharing links to social networks, compatible with SSR',
    skills: [ 'JavaScript', 'CSS', 'Smarty', 'HTML' ],
    tags: [
      'hacktoberfest',
      'nuxtjs',
      'renderless components',
      'social',
      'social network',
      'social networks',
      'social shares',
      'ssr',
      'vue',
      'vue component',
      'vue components',
      'vuejs',
      'vuejs components',
      'vuejs2'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/nicolasbeauvais/vue-social-sharing'
      }
    ]
  },
  {
    id: 183,
    name: 'voten',
    creator: 'mehedishohag',
    description: 'The code that powers voten.co',
    skills: [ 'PHP', 'Vue', 'HTML', 'JavaScript' ],
    tags: [
      'bookmarking',
      'community',
      'forum',
      'laravel',
      'php',
      'reddit',
      'reddit alternative',
      'social',
      'social bookmarking',
      'social network',
      'vuejs',
      'websocket'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/voten-co/voten' } ]
  },
  {
    id: 184,
    name: 'easylist',
    creator: 'abdulimtiaz',
    description: "EasyList filter subscription (EasyList, EasyPrivacy, EasyList Cookie, Fanboy's Social/Annoyances/Notifications Blocking List)",
    skills: [ 'Python' ],
    tags: [
      'adblock',
      'adblock list',
      'adblock plus',
      'adblocker',
      'adblocking',
      'easylist',
      'filterlist',
      'ublock',
      'ublock origin'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/easylist/easylist' }
    ]
  },
  {
    id: 185,
    name: 'snscrape',
    creator: 'saif',
    description: 'A social networking service scraper in Python',
    skills: [ 'Python' ],
    tags: [ 'python', 'scraper', 'social media', 'social network' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/JustAnotherArchivist/snscrape'
      }
    ]
  },
  {
    id: 186,
    name: 'socialite',
    creator: 'mehedishohag',
    description: ':octocat: Socialite is an OAuth2 Authentication tool. It is inspired by laravel/socialite, you can easily use it without Laravel.',
    skills: [ 'PHP' ],
    tags: [
      'alipay',    'baidu',
      'dingtalk',  'douban',
      'douyin',    'facebook',
      'feishu',    'google',
      'laravel',   'linkedin',
      'login',     'oauth',
      'oauth2',    'oauth2 authentication',
      'qq',        'social login',
      'socialite', 'taobao',
      'wechat',    'weibo'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/overtrue/socialite' }
    ]
  },
  {
    id: 187,
    name: 'Vynchronize',
    creator: 'tufayelahmed',
    description: 'Watch videos with friends online with the new real time video synchronization platform',
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [
      'nodejs',
      'realtime',
      'single page app',
      'social',
      'socket io',
      'synchronization',
      'video player',
      'watch synchronized videos',
      'web sockets'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/kyle8998/Vynchronize'
      }
    ]
  },
  {
    id: 188,
    name: 'real world onion sites',
    creator: 'akbarhaider',
    description: 'This is a list of substantial, commercial-or-social-good mainstream websites which provide onion services.',
    skills: [ 'Python', 'Shell', 'Makefile' ],
    tags: [ 'onion routing', 'onion sites', 'tor' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/alecmuffett/real-world-onion-sites'
      }
    ]
  },
  {
    id: 189,
    name: 'react awesome button',
    creator: 'frankniu',
    description: 'React button component. Awesome button is a 3D UI, progress, social and share enabled, animated at 60fps, light weight, performant, production ready react UI button component. 🖥️ 📱 ',
    skills: [ 'JavaScript', 'CSS' ],
    tags: [
      '60fps',     'animated',
      'animation', 'button',
      'component', 'progress',
      'react',     'share',
      'social'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rcaferati/react-awesome-button'
      }
    ]
  },
  {
    id: 190,
    name: 'socialify',
    creator: 'patrick',
    description: '💞 Socialify your project. 🌐 Share with the world!',
    skills: [ 'TypeScript', 'CSS', 'JavaScript', 'Shell' ],
    tags: [
      'badges',
      'github',
      'hacktoberfest',
      'sharing',
      'social',
      'social image'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/wei/socialify' } ]
  },
  {
    id: 191,
    name: 'react native really awesome button',
    creator: 'refatmonjur',
    description: 'React Native button component. Awesome Button is a 3D at 60fps, progress enabled, social ready, extendable, production ready component that renders an awesome animated set of UI buttons. 📱 ',
    skills: [ 'JavaScript' ],
    tags: [
      'animated',
      'button',
      'component',
      'progress',
      'react',
      'react native',
      'share',
      'social'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rcaferati/react-native-really-awesome-button'
      }
    ]
  },
  {
    id: 192,
    name: 'django rest framework social oauth2',
    creator: 'joybiswas',
    description: 'python-social-auth and oauth2 support for django-rest-framework',
    skills: [ 'Python' ],
    tags: [
      'django',
      'django rest framework',
      'oauth2',
      'python',
      'python social auth'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/RealmTeam/django-rest-framework-social-oauth2'
      }
    ]
  },
  {
    id: 193,
    name: 'bookwyrm',
    creator: 'joybiswas',
    description: 'Social reading and reviewing, decentralized with ActivityPub',
    skills: [
      'Python',
      'HTML',
      'JavaScript',
      'SCSS',
      'Shell',
      'Dockerfile',
      'CSS'
    ],
    tags: [
      'activitypub',
      'books',
      'bookwyrm',
      'decentralization',
      'federation',
      'openlibrary',
      'reading',
      'social media'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bookwyrm-social/bookwyrm'
      }
    ]
  },
  {
    id: 194,
    name: 'react dates',
    creator: 'bob',
    description: 'An easily internationalizable, mobile-friendly datepicker library for the web',
    skills: [ 'JavaScript', 'SCSS' ],
    tags: [
      'calendar',
      'datepicker',
      'dates',
      'react',
      'react component',
      'react dates'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/react-dates/react-dates'
      }
    ]
  },
  {
    id: 195,
    name: 'FSCalendar',
    creator: 'frankniu',
    description: 'A fully customizable iOS calendar library, compatible with Objective-C and Swift',
    skills: [ 'Objective-C', 'Swift', 'Ruby' ],
    tags: [
      'calendar',
      'carthage',
      'cocoapods',
      'ios',
      'library',
      'objective c',
      'swift'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/WenchaoD/FSCalendar'
      }
    ]
  },
  {
    id: 196,
    name: 'tui.calendar',
    creator: 'justinsiu',
    description: '🍞📅A JavaScript calendar that has everything you need.',
    skills: [ 'JavaScript', 'Handlebars', 'Stylus', 'TypeScript' ],
    tags: [
      'calendar',      'daily',
      'frontend',      'fullcalendar',
      'javascript',    'jquery',
      'jquery plugin', 'milestone',
      'monthly',       'schedule',
      'task',          'weekly'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/nhn/tui.calendar' } ]
  },
  {
    id: 197,
    name: 'CalendarView',
    creator: 'refatmonjur',
    description: 'Android上一个优雅、万能自定义UI、仿iOS、支持垂直、水平方向切换、支持周视图、自定义周起始、性能高效的日历控件，支持热插拔实现的UI定制！支持标记、自定义颜色、农历、自定义月视图各种显示模式等。Canvas绘制，速度快、占用内存低，你真的想不到日历居然还可以如此优雅！An elegant, highly customized and high-performance Calendar Widget on Android.',
    skills: [ 'Java' ],
    tags: [
      'android',
      'calendar',
      'calendar api',
      'calendar component',
      'calendar view',
      'calendar widget',
      'calendarview'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/huanghaibin-dev/CalendarView'
      }
    ]
  },
  {
    id: 198,
    name: 'pickadate.js',
    creator: 'joybiswas',
    description: 'The mobile-friendly, responsive, and lightweight jQuery date & time input picker.',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [ 'calendar', 'date', 'picker', 'time' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/amsul/pickadate.js' }
    ]
  },
  {
    id: 199,
    name: 'react native calendars',
    creator: 'patrick',
    description: 'React Native Calendar Components 🗓️ 📆 ',
    skills: [
      'TypeScript',
      'JavaScript',
      'Objective-C',
      'Java',
      'CSS',
      'Ruby',
      'Starlark'
    ],
    tags: [
      'android',
      'calendar',
      'hacktoberfest',
      'ios',
      'react native',
      'ui components'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/wix/react-native-calendars'
      }
    ]
  },
  {
    id: 200,
    name: 'JTAppleCalendar',
    creator: 'janedoe',
    description: 'The Unofficial Apple iOS Swift Calendar View. Swift calendar Library. iOS calendar Control. 100% Customizable',
    skills: [ 'Swift', 'Objective-C', 'Ruby' ],
    tags: [
      'calendar',
      'ios',
      'jtapplecalendar',
      'swift',
      'weekview',
      'year calendar',
      'year view'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/patchthecode/JTAppleCalendar'
      }
    ]
  },
  {
    id: 201,
    name: 'git stats',
    creator: 'zealptl',
    description: '🍀 Local git statistics including GitHub-like contributions calendars.',
    skills: [ 'HTML', 'JavaScript', 'Shell' ],
    tags: [
      'calendar',
      'contributions calendar',
      'gitstats',
      'hacktoberfest',
      'statistics'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/IonicaBizau/git-stats'
      }
    ]
  },
  {
    id: 202,
    name: 'material calendarview',
    creator: 'tanviryouhana',
    description: "A Material design back port of Android's CalendarView",
    skills: [ 'Java' ],
    tags: [ 'android', 'calendar', 'java', 'material' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/prolificinteractive/material-calendarview'
      }
    ]
  },
  {
    id: 203,
    name: 'PermissionsKit',
    creator: 'joma',
    description: 'Ask permissions with ready-use interface. You can check status permission and if it has been requested before. Support SwiftUI.',
    skills: [ 'Swift', 'Ruby' ],
    tags: [
      'calendar',      'camera',
      'dialog',        'interface',
      'ios',           'location',
      'notification',  'permission',
      'permissionkit', 'permissions',
      'photo gallery', 'reminder',
      'request',       'scope',
      'sparrow',       'sppermissions',
      'ui',            'wizard',
      'xcode'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/sparrowcode/PermissionsKit'
      }
    ]
  },
  {
    id: 204,
    name: 'tutanota',
    creator: 'frankniu',
    description: 'Tutanota is an email service with a strong focus on security and privacy that lets you encrypt emails, contacts and calendar entries on all your devices.',
    skills: [
      'TypeScript',  'JavaScript',
      'C',           'Java',
      'Swift',       'HTML',
      'Objective-C', 'Ruby',
      'NSIS',        'Groovy',
      'Shell'
    ],
    tags: [
      'email',
      'encryption',
      'javascript',
      'mithril',
      'privacy',
      'security',
      'tutanota'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/tutao/tutanota' } ]
  },
  {
    id: 205,
    name: 'react infinite calendar',
    creator: 'johndoe',
    description: '✨ Infinite scrolling date-picker built with React, with localization, range selection, themes, keyboard support, and more.',
    skills: [ 'JavaScript', 'CSS' ],
    tags: [
      'calendar',
      'component',
      'date',
      'datepicker',
      'infinite',
      'infinite scroll',
      'range',
      'react'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/clauderic/react-infinite-calendar'
      }
    ]
  },
  {
    id: 206,
    name: 'apps script samples',
    creator: 'anvinhtr',
    description: 'Apps Script samples for Google Workspace products.',
    skills: [ 'JavaScript', 'HTML', 'Gosu', 'Shell' ],
    tags: [
      'adminsdk',
      'apps script',
      'calendar',
      'classroom',
      'cloud',
      'drive',
      'google apps script',
      'google workspace',
      'gsuite',
      'samples'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/googleworkspace/apps-script-samples'
      }
    ]
  },
  {
    id: 207,
    name: 'CVCalendar',
    creator: 'janedoe',
    description: 'A custom visual calendar for iOS 8+ written in Swift (>= 4.0).',
    skills: [ 'Swift', 'Ruby', 'Objective-C' ],
    tags: [
      'calendar',
      'calendar component',
      'calendar view',
      'calendarview',
      'custom view',
      'cvcalendar',
      'ios',
      'swift',
      'swift3',
      'swift4'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/CVCalendar/CVCalendar'
      }
    ]
  },
  {
    id: 208,
    name: 'Android Week View',
    creator: 'joybiswas',
    description: 'Android Week View is an android library to display calendars (week view or day view) within the app. It supports custom styling.',
    skills: [ 'Java' ],
    tags: [ 'android', 'calendar', 'calendar view', 'custom view' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/alamkanak/Android-Week-View'
      }
    ]
  },
  {
    id: 209,
    name: 'bootstrap calendar',
    creator: 'saif',
    description: 'Full view calendar with year, month, week and day views based on templates with Twitter Bootstrap.',
    skills: [ 'JavaScript', 'HTML', 'Less', 'CSS', 'Hack' ],
    tags: [ 'calendar', 'event management', 'twitter bootstrap' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Serhioromano/bootstrap-calendar'
      }
    ]
  },
  {
    id: 210,
    name: 'CalendarView',
    creator: 'tanviryouhana',
    description: 'A highly customizable calendar library for Android, powered by RecyclerView.',
    skills: [ 'Kotlin' ],
    tags: [
      'calendar',
      'calendarview',
      'date',
      'datepicker',
      'daterange',
      'daterangepicker'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/kizitonwose/CalendarView'
      }
    ]
  },
  {
    id: 211,
    name: 'MeetingBar',
    creator: 'patrick',
    description: '🇺🇦 Your next meeting always before your eyes in the macOS menu bar',
    skills: [ 'Swift' ],
    tags: [
      'calendar',
      'google meet',
      'macos',
      'macos calendar',
      'meetings',
      'microsoft teams',
      'swift',
      'zoom'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/leits/MeetingBar' } ]
  },
  {
    id: 212,
    name: 'rome',
    creator: 'tanviryouhana',
    description: ':calendar: Customizable date (and time) picker. Opt-in UI, no jQuery!',
    skills: [ 'JavaScript', 'HTML', 'CSS', 'Stylus' ],
    tags: [ 'calendar', 'component', 'front end', 'javascript', 'vanilla' ],
    links: [ { type: 'GitHub', link: 'https://github.com/bevacqua/rome' } ]
  },
  {
    id: 213,
    name: 'Simple Calendar',
    creator: 'janedoe',
    description: 'A simple calendar with events, customizable widgets and no ads.',
    skills: [ 'Kotlin' ],
    tags: [
      'android',
      'android development',
      'calendar',
      'freedom',
      'kotlin',
      'open source'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/SimpleMobileTools/Simple-Calendar'
      }
    ]
  },
  {
    id: 214,
    name: 'CLNDR',
    creator: 'frankniu',
    description: ':calendar: a jQuery calendar plugin that uses HTML templates',
    skills: [ 'JavaScript', 'HTML' ],
    tags: [ 'calendar', 'jquery plugin' ],
    links: [ { type: 'GitHub', link: 'https://github.com/kylestetz/CLNDR' } ]
  },
  {
    id: 215,
    name: 'JTCalendar',
    creator: 'bob',
    description: 'A customizable calendar view for iOS.',
    skills: [ 'Objective-C', 'Ruby' ],
    tags: [ 'calendar', 'ios' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jonathantribouharet/JTCalendar'
      }
    ]
  },
  {
    id: 216,
    name: 'SuperCalendar',
    creator: 'mdrislam30',
    description: '@Deprecated android 自定义日历控件  支持左右无限滑动 周月切换 标记日期显示 自定义显示效果跳转到指定日期',
    skills: [ 'Java' ],
    tags: [ 'android', 'calendar', 'calendar view' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/MagicMashRoom/SuperCalendar'
      }
    ]
  },
  {
    id: 217,
    name: 'date',
    creator: 'joma',
    description: 'A date and time library based on the C++11/14/17 <chrono> header',
    skills: [ 'C++', 'Objective-C++', 'CMake', 'Shell', 'C' ],
    tags: [
      'calendar',
      'date',
      'datetime',
      'iana database',
      'time',
      'timezone',
      'timezone library'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/HowardHinnant/date' }
    ]
  },
  {
    id: 218,
    name: 'Radicale',
    creator: 'bob',
    description: 'A simple CalDAV (calendar) and CardDAV (contact) server.',
    skills: [ 'Python', 'JavaScript', 'HTML', 'Dockerfile' ],
    tags: [ 'caldav', 'carddav', 'icalendar', 'python' ],
    links: [ { type: 'GitHub', link: 'https://github.com/Kozea/Radicale' } ]
  },
  {
    id: 219,
    name: 'angular calendar',
    creator: 'tanzilbaraskar',
    description: 'A flexible calendar component for angular 12.0+ that can display events on a month, week or day view.',
    skills: [ 'TypeScript', 'HTML', 'SCSS', 'CSS', 'JavaScript', 'Shell' ],
    tags: [ 'angular', 'calendar', 'calendar component' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/mattlewis92/angular-calendar'
      }
    ]
  },
  {
    id: 220,
    name: 'rrule',
    creator: 'tanviryouhana',
    description: 'JavaScript library for working with recurrence rules for calendar dates as defined in the iCalendar RFC and more.',
    skills: [ 'TypeScript', 'JavaScript' ],
    tags: [
      'calendar',
      'icalendar rfc',
      'jakubroztocil',
      'javascript',
      'library',
      'python dateutil',
      'recurrence rules',
      'rfc',
      'rrule',
      'typescript'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jakubroztocil/rrule'
      }
    ]
  },
  {
    id: 221,
    name: 'react calendar',
    creator: 'techlead',
    description: 'Ultimate calendar for your React app.',
    skills: [ 'JavaScript', 'Less', 'HTML', 'Shell' ],
    tags: [ 'calendar', 'date', 'date picker', 'month picker', 'react' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/wojtekmaj/react-calendar'
      }
    ]
  },
  {
    id: 222,
    name: 'cal heatmap',
    creator: 'mdrislam30',
    description: 'Cal-Heatmap is a javascript module to create calendar heatmap to visualize time series data',
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [ 'calendar heatmap', 'd3js', 'javascript', 'series data' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/wa0x6e/cal-heatmap' }
    ]
  },
  {
    id: 223,
    name: 'CalendarKit',
    creator: 'tufayelahmed',
    description: '📅 Calendar for Apple platforms in Swift',
    skills: [ 'Swift', 'Ruby' ],
    tags: [
      'calendar',
      'calendarkit',
      'catalyst',
      'cocoapods',
      'ios',
      'ios calendar',
      'ios lib',
      'ios swift',
      'ios ui',
      'macos',
      'swift',
      'swift package manager'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/richardtop/CalendarKit'
      }
    ]
  },
  {
    id: 224,
    name: 'wx_calendar',
    creator: 'tufayelahmed',
    description: '微信小程序－日历组件 📅',
    skills: [ 'JavaScript' ],
    tags: [ 'calendar', 'wxapp' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/treadpit/wx_calendar'
      }
    ]
  },
  {
    id: 225,
    name: 'time',
    creator: 'tanviryouhana',
    description: 'Building a better date/time library for Swift',
    skills: [ 'Swift' ],
    tags: [
      'calendar',
      'calendar api',
      'calendars',
      'date',
      'date formatting',
      'date time',
      'dates',
      'datetime',
      'swift',
      'swift library',
      'time',
      'timezone'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/davedelong/time' } ]
  },
  {
    id: 226,
    name: 'calendar heatmap',
    creator: 'abdulimtiaz',
    description: "A d3 heatmap for representing time series data similar to github's contribution chart",
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [ 'd3', 'data visualization', 'heatmap', 'javascript' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/DKirwan/calendar-heatmap'
      }
    ]
  },
  {
    id: 227,
    name: 'air datepicker',
    creator: 'zealptl',
    description: 'Lightweight, dependency-free JavaScript datepicker.',
    skills: [ 'JavaScript', 'SCSS', 'HTML', 'EJS' ],
    tags: [ 'calendar', 'datepicker', 'javascript', 'timepicker' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/t1m0n/air-datepicker'
      }
    ]
  },
  {
    id: 228,
    name: 'khal',
    creator: 'saif',
    description: ':calendar: CLI calendar application',
    skills: [ 'Python', 'Awk' ],
    tags: [ 'calendar', 'icalendar', 'python', 'terminal' ],
    links: [ { type: 'GitHub', link: 'https://github.com/pimutils/khal' } ]
  },
  {
    id: 229,
    name: 'chrono',
    creator: 'justinsiu',
    description: 'Date and time library for Rust',
    skills: [ 'Rust', 'Shell', 'Makefile' ],
    tags: [ 'calendar', 'date', 'rust', 'time' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/chronotope/chrono' }
    ]
  },
  {
    id: 230,
    name: 'devextreme reactive',
    creator: 'tanviryouhana',
    description: 'Business React components for Bootstrap and Material-UI',
    skills: [ 'TypeScript', 'JavaScript', 'SCSS', 'CSS', 'HTML' ],
    tags: [
      'bootstrap',
      'calendar',
      'charts',
      'datagrid',
      'material design',
      'material ui',
      'react',
      'react components',
      'scheduler'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/DevExpress/devextreme-reactive'
      }
    ]
  },
  {
    id: 231,
    name: 'calendar.vim',
    creator: 'mdrislam30',
    description: 'A calendar application for Vim',
    skills: [ 'Vim script' ],
    tags: [ 'calendar', 'google calendar', 'vim' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/itchyny/calendar.vim'
      }
    ]
  },
  {
    id: 232,
    name: 'gantt schedule timeline calendar',
    creator: 'mehedishohag',
    description: 'Gantt Gantt Gantt Timeline Schedule Calendar [ javascript gantt, js gantt, projects gantt, timeline, scheduler, gantt timeline, reservation timeline, react gantt, angular gantt, vue gantt, svelte gantt, booking manager ]',
    skills: [ 'TypeScript', 'JavaScript' ],
    tags: [
      'angular gantt',    'angular scheduler',
      'angular timeline', 'booking',
      'calendar',         'gantt',
      'gantt timeline',   'javascript gantt',
      'js gantt',         'js scheduler',
      'js timeline',      'react gantt',
      'react scheduler',  'react timeline',
      'reservation',      'schedule',
      'scheduler',        'timeline',
      'timeline editor',  'vue gantt'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/neuronetio/gantt-schedule-timeline-calendar'
      }
    ]
  },
  {
    id: 233,
    name: 'sms backup plus',
    creator: 'johndoe',
    description: 'Backup Android SMS, MMS and call log to Gmail / Gcal / IMAP',
    skills: [ 'Java', 'HTML', 'CSS' ],
    tags: [
      'android',
      'android backup',
      'automatic backups',
      'calendar',
      'gmail inbox',
      'imap server',
      'java',
      'mms',
      'restore',
      'sms',
      'sms backup'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jberkel/sms-backup-plus'
      }
    ]
  },
  {
    id: 234,
    name: 'widget',
    creator: 'janedoe',
    description: 'A set of widgets based on jQuery&&javascript. 一套基于jquery或javascript的插件库 ：轮播、标签页、滚动条、下拉框、对话框、搜索提示、城市选择(城市三级联动)、日历等',
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [
      'calendar',
      'carousel',
      'javascript',
      'jquery',
      'plugins',
      'slider',
      'widget'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/mumuy/widget' } ]
  },
  {
    id: 235,
    name: 'timex',
    creator: 'refatmonjur',
    description: 'A complete date/time library for Elixir projects.',
    skills: [ 'Elixir' ],
    tags: [ 'calendar', 'datetime', 'elixir' ],
    links: [ { type: 'GitHub', link: 'https://github.com/bitwalker/timex' } ]
  },
  {
    id: 236,
    name: 'CosmoCalendar',
    creator: 'tanzilbaraskar',
    description: '📅 CosmoCalendar is a fully customizable calendar with a wide variety of features and displaying modes. ',
    skills: [ 'Java' ],
    tags: [ 'calendar', 'calendar dialog', 'calendarview', 'customizable' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ApplikeySolutions/CosmoCalendar'
      }
    ]
  },
  {
    id: 237,
    name: 'CompactCalendarView',
    creator: 'zealptl',
    description: 'An android library which provides a compact calendar view much like the one used in google calenders.',
    skills: [ 'Java' ],
    tags: [
      'android',
      'android library',
      'android ui',
      'animation',
      'calendar',
      'compactcalendarview',
      'java'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/SundeepK/CompactCalendarView'
      }
    ]
  },
  {
    id: 238,
    name: 'QBox',
    creator: 'techlead',
    description: ':cat2:  RxJava+Retrofit+Okhttp+Glide + A life tool App, contains modules: news; jokes; constellation fortune; LED; weather; calendar; two-dimensional code, and more ...  小秋魔盒是一个生活工具  App，主要功能有：新闻资讯；微信精选美文；笑话趣图；星座运势；LED字幕；天气；日历；二维码；手电筒；老黄历。在开发中尽可能多的用了目前比较流行的框架和库。',
    skills: [ 'Java' ],
    tags: [
      'android',   'calendar',
      'glide',     'qbox',
      'retrofit',  'rxjava',
      'takephoto', 'weather',
      'zxing'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/OCNYang/QBox' } ]
  },
  {
    id: 239,
    name: 'Twake',
    creator: 'tanviryouhana',
    description: 'Twake is a secure open source collaboration platform to improve organizational productivity. ',
    skills: [
      'TypeScript', 'JavaScript',
      'PHP',        'SCSS',
      'CSS',        'Twig',
      'HTML',       'Less',
      'Dockerfile', 'Shell'
    ],
    tags: [
      'calendar',
      'chat',
      'collaboration',
      'drive',
      'file sharing',
      'kanban',
      'kanban board',
      'teamwork',
      'tool'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/linagora/Twake' } ]
  },
  {
    id: 240,
    name: 'Etar Calendar',
    creator: 'janedoe',
    description: 'Android open source calendar',
    skills: [ 'Java', 'Kotlin', 'Makefile', 'Shell' ],
    tags: [ 'android', 'calendar', 'material design' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Etar-Group/Etar-Calendar'
      }
    ]
  },
  {
    id: 241,
    name: 'bloom',
    creator: 'johndoe',
    description: 'The simplest way to de-Google your life and business: Inbox, Calendar, Files, Contacts & much more',
    skills: [
      'Rust',       'Vue',
      'TypeScript', 'JavaScript',
      'HTML',       'Makefile',
      'Dockerfile', 'CSS',
      'Shell',      'SCSS',
      'C'
    ],
    tags: [
      'analytics',    'automation',
      'bloom',        'calendar',
      'chat',         'cloud',
      'drive',        'files',
      'inbox',        'messaging',
      'privacy',      'productivity',
      'rust',         'self hosted',
      'self hosting', 'vue',
      'vuejs',        'workspace'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/skerkour/bloom' } ]
  },
  {
    id: 242,
    name: 'OutlookGoogleCalendarSync',
    creator: 'patrick',
    description: 'Sync your Outlook and Google calendars',
    skills: [ 'C#', 'CSS', 'Batchfile' ],
    tags: [
      'calendar',
      'google',
      'oauth2',
      'outlook',
      'portable',
      'sync',
      'synchronization',
      'two way',
      'windows'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/phw198/OutlookGoogleCalendarSync'
      }
    ]
  },
  {
    id: 243,
    name: 'github contributions',
    creator: 'tufayelahmed',
    description: ':octocat: A tool that generates a repository which being pushed into your GitHub account creates a nice contributions calendar.',
    skills: [ 'HTML', 'JavaScript', 'CSS', 'Dockerfile' ],
    tags: [ 'contributions calendar', 'hacktoberfest', 'mad science' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/IonicaBizau/github-contributions'
      }
    ]
  },
  {
    id: 244,
    name: 'simple_calendar',
    creator: 'joma',
    description: 'A wonderfully simple calendar gem for Rails',
    skills: [ 'Ruby', 'HTML', 'SCSS', 'Shell' ],
    tags: [
      'calendar',
      'custom calendar',
      'meeting',
      'month',
      'ruby',
      'week calendar'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/excid3/simple_calendar'
      }
    ]
  },
  {
    id: 245,
    name: 'period',
    creator: 'saif',
    description: 'Complex period comparisons',
    skills: [ 'PHP' ],
    tags: [
      'calculations',
      'calendar',
      'date',
      'period',
      'schedule',
      'time'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/spatie/period' } ]
  },
  {
    id: 246,
    name: 'sogo',
    creator: 'tanviryouhana',
    description: 'SOGo is a very fast and scalable modern collaboration suite (groupware). It offers calendaring, address book management, and a full-featured Webmail client along with resource sharing and permission handling. It also makes use of documented standards (IMAP, CalDAV, CardDAV, etc.) and thereby provides native connectivity (without plugins) to many clients such as Microsoft Outlook, Apple iCal, the iPhone, Mozilla Lightning, and a plethora of mobile devices.',
    skills: [
      'Objective-C',      'JavaScript',
      'SCSS',             'C',
      'Rich Text Format', 'HTML',
      'Shell',            'Java',
      'Makefile',         'Perl',
      'Python',           'CSS',
      'PHP',              'PLSQL'
    ],
    tags: [ 'angularjs material', 'groupware', 'objective c', 'sogo' ],
    links: [ { type: 'GitHub', link: 'https://github.com/inverse-inc/sogo' } ]
  },
  {
    id: 247,
    name: 'table_calendar',
    creator: 'refatmonjur',
    description: 'Highly customizable, feature-packed calendar widget for Flutter',
    skills: [ 'Dart', 'HTML', 'Swift', 'Kotlin', 'Objective-C' ],
    tags: [
      'calendar',
      'calendar view',
      'date',
      'flutter',
      'flutter package',
      'flutter plugin',
      'table',
      'table calendar',
      'widget'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/aleksanderwozniak/table_calendar'
      }
    ]
  },
  {
    id: 248,
    name: 'Calendar',
    creator: 'refatmonjur',
    description: 'Android日历 仿小米 华为 滴答清单 365日历（农历），周视图 月视图 平滑滚动 节假日 五六行周切换 week or month calendar',
    skills: [ 'Java' ],
    tags: [ 'calendar', 'chinese', 'lunar' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/xiaojianglaile/Calendar'
      }
    ]
  },
  {
    id: 249,
    name: 'Horizontal Calendar',
    creator: 'mehedishohag',
    description: 'A material horizontal calendar view for Android based on RecyclerView',
    skills: [ 'Java' ],
    tags: [
      'android',
      'androidview',
      'calendar',
      'datepicker',
      'horizontal',
      'material',
      'recyclerview'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Mulham-Raee/Horizontal-Calendar'
      }
    ]
  },
  {
    id: 250,
    name: 'opening hours',
    creator: 'bob',
    description: 'Query and format a set of opening hours',
    skills: [ 'PHP' ],
    tags: [ 'calendar', 'opening hours', 'php', 'schedule', 'shop' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/spatie/opening-hours'
      }
    ]
  },
  {
    id: 251,
    name: 'leantime',
    creator: 'anvinhtr',
    description: 'Leantime is a lean project management system for innovators. Designed to help you manage your projects from ideation to delivery.',
    skills: [ 'PHP', 'JavaScript', 'CSS', 'HTML', 'Less' ],
    tags: [
      'agile',           'calendar',
      'gantt',           'hacktoberfest',
      'kanban',          'kanban boards',
      'lean',            'php',
      'productivity',    'project management',
      'retrospective',   'scrum',
      'sql',             'startups',
      'task management', 'timesheets'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Leantime/leantime' }
    ]
  },
  {
    id: 252,
    name: 'laydate',
    creator: 'tufayelahmed',
    description: '一款被广泛使用的高级 Web 日历组件，完全开源无偿且颜值与功能兼备，足以应对日期相关的各种业务场景',
    skills: [ 'JavaScript', 'CSS' ],
    tags: [ 'calendar', 'date', 'datepicker', 'datetime', 'laydate', 'time' ],
    links: [ { type: 'GitHub', link: 'https://github.com/layui/laydate' } ]
  },
  {
    id: 253,
    name: 'recurr',
    creator: 'bob',
    description: 'PHP library for working with recurrence rules (RRULE); meant to help with recurring calendar events.',
    skills: [ 'PHP' ],
    tags: [ 'php', 'recurrence', 'recurrence rules', 'recurring events' ],
    links: [ { type: 'GitHub', link: 'https://github.com/simshaun/recurr' } ]
  },
  {
    id: 254,
    name: 'vdirsyncer',
    creator: 'zealptl',
    description: '📇 Synchronize calendars and contacts.',
    skills: [ 'Python', 'Shell', 'Makefile' ],
    tags: [
      'caldav',   'calendar',
      'carddav',  'cli',
      'contacts', 'icalendar',
      'pim',      'python',
      'sync',     'synchronisation',
      'tasks',    'todo',
      'vcard',    'vevent',
      'vobject',  'vtodo',
      'webdav'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/pimutils/vdirsyncer'
      }
    ]
  },
  {
    id: 255,
    name: 'django scheduler',
    creator: 'saif',
    description: 'A calendaring app for Django.',
    skills: [ 'Python', 'HTML', 'CSS', 'JavaScript' ],
    tags: [ 'calendaring', 'event calendar' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/llazzaro/django-scheduler'
      }
    ]
  },
  {
    id: 256,
    name: 'github spray',
    creator: 'tanzilbaraskar',
    description: ':octocat: Draw on your GitHub contribution graph ░▒▓█',
    skills: [ 'JavaScript' ],
    tags: [
      'calendar',   'cli',
      'cli app',    'contribution',
      'github',     'graffiti',
      'graph',      'heatmap',
      'javascript', 'npm package',
      'pixel art'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Annihil/github-spray'
      }
    ]
  },
  {
    id: 257,
    name: 'python o365',
    creator: 'tufayelahmed',
    description: 'A simple python library to interact with Microsoft Graph and Office 365 API',
    skills: [ 'Python', 'Shell' ],
    tags: [
      'addressbook',          'calendar',
      'calendars',            'email',
      'excel',                'graph',
      'mailbox',              'microsoft',
      'microsoft api',        'microsoft graph api',
      'microsoft teams',      'oauth',
      'oauth authentication', 'office 365 rest api',
      'onedrive',             'outlook',
      'planner',              'python',
      'sharepoint'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/O365/python-o365' } ]
  },
  {
    id: 258,
    name: 'iCal',
    creator: 'tanzilbaraskar',
    description: 'iCal-creator for PHP',
    skills: [ 'PHP', 'JavaScript', 'Makefile', 'CSS', 'Dockerfile' ],
    tags: [
      'calendar',
      'composer',
      'hacktoberfest',
      'ical',
      'ics',
      'php',
      'rfc 5545'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/markuspoerschke/iCal'
      }
    ]
  },
  {
    id: 259,
    name: 'DuckieTV',
    creator: 'bob',
    description: 'A web application built with AngularJS to track your favorite tv-shows with semi-automagic torrent integration',
    skills: [ 'JavaScript', 'HTML', 'CSS', 'PHP', 'Batchfile' ],
    tags: [
      'angular',        'angularjs',
      'automation',     'calendar',
      'chrome',         'chrome extension',
      'episodes',       'javascript',
      'js',             'nwjs',
      'phonegap',       'qbittorrent',
      'remote control', 'search engine',
      'series',         'series database',
      'torrent client', 'trakt',
      'tv',             'utorrent'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/SchizoDuckie/DuckieTV'
      }
    ]
  },
  {
    id: 260,
    name: 'tensorflow',
    creator: 'tanviryouhana',
    description: 'An Open Source Machine Learning Framework for Everyone',
    skills: [
      'C++',              'Python',
      'MLIR',             'Starlark',
      'HTML',             'Go',
      'C',                'Java',
      'Jupyter Notebook', 'Shell',
      'Dockerfile',       'Objective-C++',
      'Objective-C',      'CMake',
      'Smarty',           'Swift',
      'Batchfile',        'C#',
      'SourcePawn',       'Ruby',
      'Perl',             'LLVM',
      'JavaScript',       'Pawn',
      'Roff',             'Cython',
      'Makefile',         'Vim Snippet'
    ],
    tags: [
      'deep learning',
      'deep neural networks',
      'distributed',
      'machine learning',
      'ml',
      'neural network',
      'python',
      'tensorflow'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/tensorflow/tensorflow'
      }
    ]
  },
  {
    id: 261,
    name: 'transformers',
    creator: 'akbarhaider',
    description: '🤗 Transformers: State-of-the-art Machine Learning for Pytorch, TensorFlow, and JAX.',
    skills: [
      'Python',   'Cuda',
      'Shell',    'Dockerfile',
      'C++',      'C',
      'Makefile', 'Jsonnet'
    ],
    tags: [
      'bert',
      'deep learning',
      'flax',
      'hacktoberfest',
      'jax',
      'language model',
      'language models',
      'machine learning',
      'model hub',
      'natural language processing',
      'nlp',
      'nlp library',
      'pretrained models',
      'python',
      'pytorch',
      'pytorch transformers',
      'seq2seq',
      'speech recognition',
      'tensorflow',
      'transformer'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/huggingface/transformers'
      }
    ]
  },
  {
    id: 262,
    name: 'scikit learn',
    creator: 'johndoe',
    description: 'scikit-learn: machine learning in Python',
    skills: [ 'Python', 'Cython', 'C++', 'Shell', 'C', 'Makefile' ],
    tags: [
      'data analysis',
      'data science',
      'machine learning',
      'python',
      'statistics'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/scikit-learn/scikit-learn'
      }
    ]
  },
  {
    id: 263,
    name: 'ML For Beginners',
    creator: 'anvinhtr',
    description: '12 weeks, 26 lessons, 52 quizzes, classic Machine Learning for all',
    skills: [
      'Jupyter Notebook',
      'Python',
      'HTML',
      'Vue',
      'JavaScript',
      'Dockerfile',
      'CSS'
    ],
    tags: [
      'data science',
      'education',
      'machine learning',
      'machine learning algorithms',
      'machinelearning',
      'machinelearning python',
      'ml',
      'python',
      'r',
      'scikit learn',
      'scikit learn python'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/microsoft/ML-For-Beginners'
      }
    ]
  },
  {
    id: 264,
    name: 'handson ml',
    creator: 'abdulimtiaz',
    description: 'A series of Jupyter notebooks that walk you through the fundamentals of Machine Learning and Deep Learning in python using Scikit-Learn and TensorFlow.',
    skills: [ 'Jupyter Notebook', 'Python', 'Dockerfile', 'Shell', 'Makefile' ],
    tags: [
      'deep learning',
      'distributed',
      'jupyter notebook',
      'machine learning',
      'ml',
      'neural network',
      'python',
      'scikit learn',
      'tensorflow'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/ageron/handson-ml' }
    ]
  },
  {
    id: 265,
    name: 'ML From Scratch',
    creator: 'joma',
    description: 'Machine Learning From Scratch. Bare bones NumPy implementations of machine learning models and algorithms with a focus on accessibility. Aims to cover everything from linear regression to deep learning.',
    skills: [ 'Python' ],
    tags: [
      'data mining',
      'data science',
      'deep learning',
      'deep reinforcement learning',
      'genetic algorithm',
      'machine learning',
      'machine learning from scratch'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/eriklindernoren/ML-From-Scratch'
      }
    ]
  },
  {
    id: 266,
    name: 'C Plus Plus',
    creator: 'techlead',
    description: 'Collection of various algorithms in mathematics, machine learning, computer science and physics implemented in C++ for educational purposes.',
    skills: [ 'C++', 'CMake', 'Dockerfile' ],
    tags: [
      'algorithm',
      'algorithm competitions',
      'algorithms',
      'algorithms implemented',
      'artificial intelligence algorithms',
      'computer science',
      'cpp',
      'data structures',
      'educational',
      'hacktoberfest',
      'instructor materials',
      'interview preparation',
      'interview questions',
      'machine learning',
      'machine learning algorithms',
      'mathematics',
      'search',
      'sort'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/TheAlgorithms/C-Plus-Plus'
      }
    ]
  },
  {
    id: 267,
    name: 'homemade machine learning',
    creator: 'akbarhaider',
    description: '🤖 Python examples of popular machine learning algorithms with interactive Jupyter demos and math being explained',
    skills: [ 'Jupyter Notebook', 'Python' ],
    tags: [
      'algorithm',
      'jupyter',
      'jupyter notebook',
      'machine learning',
      'machine learning algorithms',
      'machinelearning',
      'python'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/trekhleb/homemade-machine-learning'
      }
    ]
  },
  {
    id: 268,
    name: 'netron',
    creator: 'tanzilbaraskar',
    description: 'Visualizer for neural network, deep learning, and machine learning models',
    skills: [ 'JavaScript', 'Python', 'HTML', 'Shell', 'CSS', 'Makefile' ],
    tags: [
      'ai',               'caffe',
      'caffe2',           'coreml',
      'darknet',          'deep learning',
      'deeplearning',     'keras',
      'machine learning', 'machinelearning',
      'ml',               'mxnet',
      'neural network',   'onnx',
      'paddle',           'pytorch',
      'tensorflow',       'tensorflow lite',
      'torch',            'visualizer'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/lutzroeder/netron' }
    ]
  },
  {
    id: 269,
    name: 'Paddle',
    creator: 'joma',
    description: 'PArallel Distributed Deep LEarning: Machine Learning Framework from Industrial Practice （『飞桨』核心框架，深度学习&机器学习高性能单机、分布式训练和跨平台部署）',
    skills: [
      'C++',        'Python',
      'Cuda',       'CMake',
      'Shell',      'C',
      'Batchfile',  'Go',
      'MLIR',       'Java',
      'Dockerfile', 'R'
    ],
    tags: [
      'deep learning',
      'distributed training',
      'efficiency',
      'machine learning',
      'neural network',
      'paddlepaddle',
      'python',
      'scalability'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/PaddlePaddle/Paddle'
      }
    ]
  },
  {
    id: 270,
    name: 'shap',
    creator: 'mdrislam30',
    description: 'A game theoretic approach to explain the output of any machine learning model.',
    skills: [
      'Jupyter Notebook',
      'Python',
      'C++',
      'JavaScript',
      'Cuda',
      'PowerShell',
      'Batchfile',
      'HTML'
    ],
    tags: [
      'deep learning',
      'explainability',
      'gradient boosting',
      'interpretability',
      'machine learning',
      'shap',
      'shapley'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/slundberg/shap' } ]
  },
  {
    id: 271,
    name: 'rasa',
    creator: 'mdrislam30',
    description: '💬   Open source machine learning framework to automate text- and voice-based conversations: NLU, dialogue management, connect to Slack, Facebook, and more - Create chatbots and voice assistants',
    skills: [
      'Python',
      'Makefile',
      'Dockerfile',
      'Shell',
      'HCL',
      'HTML',
      'Jinja'
    ],
    tags: [
      'bot',
      'bot framework',
      'botkit',
      'bots',
      'chatbot',
      'chatbots',
      'chatbots framework',
      'conversation driven development',
      'conversational agents',
      'conversational ai',
      'conversational bots',
      'machine learning',
      'machine learning library',
      'mitie',
      'natural language processing',
      'nlp',
      'nlu',
      'rasa',
      'spacy',
      'wit'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/RasaHQ/rasa' } ]
  },
  {
    id: 272,
    name: 'LightGBM',
    creator: 'joybiswas',
    description: 'A fast, distributed, high performance gradient boosting (GBT, GBDT, GBRT, GBM or MART) framework based on decision tree algorithms, used for ranking, classification and many other machine learning tasks.',
    skills: [
      'C++',        'Python',
      'R',          'Cuda',
      'C',          'Shell',
      'CMake',      'SWIG',
      'PowerShell', 'M4'
    ],
    tags: [
      'data mining',       'decision trees',
      'distributed',       'gbdt',
      'gbm',               'gbrt',
      'gradient boosting', 'kaggle',
      'lightgbm',          'machine learning',
      'microsoft',         'parallel',
      'python',            'r'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/microsoft/LightGBM' }
    ]
  },
  {
    id: 273,
    name: 'C',
    creator: 'abdulimtiaz',
    description: 'Collection of various algorithms in mathematics, machine learning, computer science, physics, etc implemented in C for educational purposes.',
    skills: [ 'C', 'CMake', 'Makefile', 'Dockerfile' ],
    tags: [
      'algorithm challenges',
      'algorithm competitions',
      'algorithms',
      'c',
      'community driven',
      'computer science',
      'data structures',
      'datastructures',
      'education',
      'educational',
      'hacktoberfest',
      'interview',
      'interview questions',
      'learn to code',
      'machine learning',
      'machine learning algorithms',
      'mathematics',
      'search',
      'sort'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/TheAlgorithms/C' } ]
  },
  {
    id: 274,
    name: 'ml agents',
    creator: 'tanzilbaraskar',
    description: 'The Unity Machine Learning Agents Toolkit (ML-Agents) is an open-source project that enables games and simulations to serve as environments for training intelligent agents using deep reinforcement learning and imitation learning.',
    skills: [
      'C#',
      'Python',
      'Jupyter Notebook',
      'ShaderLab',
      'Shell',
      'Batchfile',
      'Dockerfile',
      'Smalltalk',
      'C'
    ],
    tags: [
      'deep learning',
      'deep reinforcement learning',
      'machine learning',
      'neural networks',
      'reinforcement learning',
      'unity',
      'unity3d'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Unity-Technologies/ml-agents'
      }
    ]
  },
  {
    id: 275,
    name: 'imgaug',
    creator: 'joybiswas',
    description: 'Image augmentation for machine learning experiments.',
    skills: [ 'Python', 'Shell' ],
    tags: [
      'affine transformation',
      'augment images',
      'augmentation',
      'bounding boxes',
      'contrast',
      'crop',
      'deep learning',
      'heatmap',
      'image augmentation',
      'images',
      'keypoints',
      'machine learning',
      'polygon',
      'segmentation maps'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/aleju/imgaug' } ]
  },
  {
    id: 276,
    name: 'predictionio',
    creator: 'tufayelahmed',
    description: 'PredictionIO, a machine learning server for developers and ML engineers.',
    skills: [
      'Scala',
      'Shell',
      'Python',
      'HTML',
      'Dockerfile',
      'Java',
      'Smarty'
    ],
    tags: [ 'big data', 'predictionio', 'scala' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/apache/predictionio'
      }
    ]
  },
  {
    id: 277,
    name: 'onnx',
    creator: 'tanviryouhana',
    description: 'Open standard for machine learning interoperability',
    skills: [
      'C++',
      'Python',
      'C',
      'CMake',
      'Jupyter Notebook',
      'Shell',
      'PowerShell',
      'Batchfile'
    ],
    tags: [
      'deep learning',
      'deep neural networks',
      'dnn',
      'keras',
      'machine learning',
      'ml',
      'mxnet',
      'neural network',
      'onnx',
      'pytorch',
      'scikit learn',
      'tensorflow'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/onnx/onnx' } ]
  },
  {
    id: 278,
    name: 'ChatterBot',
    creator: 'joma',
    description: 'ChatterBot is a machine learning, conversational dialog engine for creating chat bots',
    skills: [ 'Python' ],
    tags: [
      'bot',
      'chatbot',
      'chatterbot',
      'conversation',
      'language',
      'machine learning',
      'python'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/gunthercox/ChatterBot'
      }
    ]
  },
  {
    id: 279,
    name: 'mlflow',
    creator: 'johndoe',
    description: 'Open source platform for the machine learning lifecycle',
    skills: [
      'Python', 'JavaScript',
      'Java',   'R',
      'Scala',  'CSS',
      'Shell',  'Dockerfile',
      'HTML',   'Mako',
      'TSQL'
    ],
    tags: [
      'ai',
      'apache spark',
      'machine learning',
      'ml',
      'mlflow',
      'model management'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/mlflow/mlflow' } ]
  },
  {
    id: 280,
    name: 'ML NLP',
    creator: 'mdrislam30',
    description: '此项目是机器学习(Machine Learning)、深度学习(Deep Learning)、NLP面试中常考到的知识点和代码实现，也是作为一个算法工程师必会的理论基础知识。',
    skills: [ 'Jupyter Notebook', 'Python', 'Shell' ],
    tags: [ 'deep learning', 'machine learning', 'nlp' ],
    links: [ { type: 'GitHub', link: 'https://github.com/NLP-LOVE/ML-NLP' } ]
  },
  {
    id: 281,
    name: 'python machine learning book',
    creator: 'anvinhtr',
    description: 'The "Python Machine Learning (1st edition)"  book code repository and info resource',
    skills: [ 'Jupyter Notebook', 'Python', 'TeX', 'HTML', 'CSS' ],
    tags: [
      'data mining',
      'data science',
      'logistic regression',
      'machine learning',
      'machine learning algorithms',
      'neural network',
      'python',
      'scikit learn'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rasbt/python-machine-learning-book'
      }
    ]
  },
  {
    id: 282,
    name: 'kubeflow',
    creator: 'mdrislam30',
    description: 'Machine Learning Toolkit for Kubernetes',
    skills: [
      'Jsonnet',    'TypeScript',
      'Python',     'Go',
      'JavaScript', 'HTML',
      'CSS',        'Dockerfile',
      'Makefile',   'SCSS',
      'Pug',        'PowerShell',
      'Shell'
    ],
    tags: [
      'google kubernetes engine',
      'jupyter',
      'kubeflow',
      'kubernetes',
      'machine learning',
      'minikube',
      'ml',
      'notebook',
      'tensorflow'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/kubeflow/kubeflow' }
    ]
  },
  {
    id: 283,
    name: 'nni',
    creator: 'tanviryouhana',
    description: 'An open source AutoML toolkit for automate machine learning lifecycle, including feature engineering, neural architecture search, model compression and hyper-parameter tuning.',
    skills: [
      'Python',
      'TypeScript',
      'JavaScript',
      'SCSS',
      'Shell',
      'CSS',
      'HTML',
      'Dockerfile'
    ],
    tags: [
      'automated machine learning',
      'automl',
      'bayesian optimization',
      'data science',
      'deep learning',
      'deep neural network',
      'distributed',
      'feature engineering',
      'feature extraction',
      'hyperparameter optimization',
      'hyperparameter tuning',
      'machine learning',
      'machine learning algorithms',
      'model compression',
      'nas',
      'neural architecture search',
      'neural network',
      'python',
      'pytorch',
      'tensorflow'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/microsoft/nni' } ]
  },
  {
    id: 284,
    name: 'numpy ml',
    creator: 'anvinhtr',
    description: 'Machine learning, in numpy',
    skills: [ 'Python' ],
    tags: [
      'attention',
      'bayesian inference',
      'gaussian mixture models',
      'gaussian processes',
      'good turing smoothing',
      'gradient boosting',
      'hidden markov models',
      'knn',
      'lstm',
      'machine learning',
      'mfcc',
      'neural networks',
      'reinforcement learning',
      'resnet',
      'topic modeling',
      'vae',
      'wavenet',
      'wgan gp',
      'word2vec'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/ddbourgin/numpy-ml' }
    ]
  },
  {
    id: 285,
    name: 'dlib',
    creator: 'mdrislam30',
    description: 'A toolkit for making real world machine learning and data analysis applications in C++',
    skills: [
      'C++',   'Python',
      'CMake', 'Cuda',
      'C',     'XSLT',
      'Java',  'Makefile',
      'Shell', 'Batchfile',
      'Perl',  'MATLAB'
    ],
    tags: [
      'c plus plus',
      'computer vision',
      'deep learning',
      'dlib',
      'machine learning',
      'machine learning library',
      'python'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/davisking/dlib' } ]
  },
  {
    id: 286,
    name: 'turicreate',
    creator: 'zealptl',
    description: 'Turi Create simplifies the development of custom machine learning models.',
    skills: [
      'C++',           'Python',
      'JavaScript',    'Swift',
      'Objective-C++', 'Objective-C',
      'Cython',        'CSS',
      'CMake',         'Shell',
      'C',             'SCSS',
      'HTML',          'Dockerfile',
      'Makefile'
    ],
    tags: [ 'deep learning', 'machine learning', 'python' ],
    links: [ { type: 'GitHub', link: 'https://github.com/apple/turicreate' } ]
  },
  {
    id: 287,
    name: 'mit deep learning book pdf',
    creator: 'tanviryouhana',
    description: 'MIT Deep Learning Book in PDF format (complete and parts) by Ian Goodfellow, Yoshua Bengio and Aaron Courville',
    skills: [ 'Java' ],
    tags: [
      'book',            'chapter',
      'clear',           'deep learning',
      'deeplearning',    'excercises',
      'good',            'learning',
      'lecture notes',   'linear algebra',
      'machine',         'machine learning',
      'mit',             'neural network',
      'neural networks', 'pdf',
      'print',           'printable',
      'thinking'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/janishar/mit-deep-learning-book-pdf'
      }
    ]
  },
  {
    id: 288,
    name: 'deep learning drizzle',
    creator: 'patrick',
    description: 'Drench yourself in Deep Learning, Reinforcement Learning, Machine Learning, Computer Vision, and NLP by learning from these exciting lectures!!',
    skills: [ 'HTML', 'Python' ],
    tags: [
      'artificial intelligence algorithms',
      'artificial neural networks',
      'bayesian statistics',
      'computer vision',
      'deep learning',
      'deep neural networks',
      'deep reinforcement learning',
      'explainable ai',
      'geometric deep learning',
      'graph neural networks',
      'machine learning',
      'medical imaging',
      'natural language processing',
      'optimization',
      'pattern recognition',
      'probabilistic graphical models',
      'probability',
      'reinforcement learning',
      'speech recognition',
      'visual recognition'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/kmario23/deep-learning-drizzle'
      }
    ]
  },
  {
    id: 289,
    name: 'PySimpleGUI',
    creator: 'mdrislam30',
    description: "Launched in 2018. It's 2022 and PySimpleGUI is actively developed & supported. Create complex windows simply. Supports tkinter, Qt, WxPython, Remi (in browser). Create GUI applications trivially with a full set of widgets. Multi-Window applications are also simple. 3.4 to 3.11 supported. 325+ Demo programs & Cookbook for rapid start. Extensive documentation.  Examples for Machine Learning(OpenCV Integration,  Chatterbot), Rainmeter-like Desktop Widgets, Matplotlib + Pyplot integration, add GUI to command line scripts, PDF & Image Viewer. For both beginning and advanced programmers. docs -  PySimpleGUI.org GitHub - PySimpleGUI.com. The Minecraft of GUIs - simple to complex... does them all.",
    skills: [ 'Python', 'HTML', 'CSS', 'JavaScript', 'Makefile', 'Batchfile' ],
    tags: [
      'beginner friendly', 'datavisualization',
      'games',             'gui',
      'gui framework',     'gui programming',
      'gui window',        'popup window',
      'progress meter',    'pyside2',
      'pysimplegui',       'python',
      'qt',                'qt gui',
      'remi',              'systemtray',
      'tkinter',           'tkinter gui',
      'tkinter python',    'wxpython'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/PySimpleGUI/PySimpleGUI'
      }
    ]
  },
  {
    id: 290,
    name: 'bullet3',
    creator: 'abdulimtiaz',
    description: 'Bullet Physics SDK: real-time collision detection and multi-physics simulation for VR, games, visual effects, robotics, machine learning etc.',
    skills: [
      'C++',    'C',
      'CMake',  'Lua',
      'Python', 'Batchfile',
      'Shell',  'Makefile'
    ],
    tags: [
      'computer animation',
      'game development',
      'kinematics',
      'pybullet',
      'reinforcement learning',
      'robotics',
      'simulation',
      'simulator',
      'virtual reality'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bulletphysics/bullet3'
      }
    ]
  },
  {
    id: 291,
    name: 'best of ml python',
    creator: 'tanzilbaraskar',
    description: '🏆 A ranked list of awesome machine learning Python libraries. Updated weekly.',
    skills: [ 'Python' ],
    tags: [
      'automl',              'awesome',
      'best of',             'data analysis',
      'data science',        'data visualization',
      'data visualizations', 'deep learning',
      'jax',                 'keras',
      'machine learning',    'ml',
      'nlp',                 'python',
      'python library',      'pytorch',
      'scikit learn',        'tensorflow',
      'transformer'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ml-tooling/best-of-ml-python'
      }
    ]
  },
  {
    id: 292,
    name: 'MLAlgorithms',
    creator: 'refatmonjur',
    description: 'Minimal and clean examples of machine learning algorithms implementations',
    skills: [ 'Python', 'Dockerfile' ],
    tags: [
      'deep learning',
      'machine learning',
      'machine learning algorithms',
      'neural networks',
      'python'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rushter/MLAlgorithms'
      }
    ]
  },
  {
    id: 293,
    name: 'tpot',
    creator: 'patrick',
    description: 'A Python Automated Machine Learning tool that optimizes machine learning pipelines using genetic programming.',
    skills: [ 'Python', 'Jupyter Notebook', 'Shell' ],
    tags: [
      'automated machine learning',
      'automation',
      'automl',
      'data science',
      'feature engineering',
      'gradient boosting',
      'hyperparameter optimization',
      'machine learning',
      'model selection',
      'parameter tuning',
      'python',
      'random forest',
      'scikit learn',
      'xgboost'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/EpistasisLab/tpot' }
    ]
  },
  {
    id: 294,
    name: 'ludwig',
    creator: 'zealptl',
    description: 'Data-centric declarative deep learning framework',
    skills: [ 'Python', 'Dockerfile' ],
    tags: [
      'computer vision',
      'data centric',
      'data science',
      'datascience',
      'deep',
      'deep learning',
      'deeplearning',
      'learning',
      'machine',
      'machine learning',
      'machinelearning',
      'ml',
      'natural language',
      'natural language processing',
      'neural network',
      'python',
      'pytorch'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ludwig-ai/ludwig' } ]
  },
  {
    id: 295,
    name: 'pattern',
    creator: 'janedoe',
    description: 'Web mining module for Python, with tools for scraping, natural language processing, machine learning, network analysis and visualization.',
    skills: [ 'Python', 'JavaScript', 'HTML' ],
    tags: [
      'machine learning',
      'natural language processing',
      'network analysis',
      'python',
      'sentiment analysis',
      'web mining',
      'wordnet'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/clips/pattern' } ]
  },
  {
    id: 296,
    name: 'mlcourse.ai',
    creator: 'frankniu',
    description: 'Open Machine Learning Course',
    skills: [ 'Python', 'HTML', 'Shell', 'Batchfile' ],
    tags: [
      'algorithms',       'data analysis',
      'data science',     'docker',
      'ipynb',            'kaggle inclass',
      'machine learning', 'math',
      'matplotlib',       'numpy',
      'pandas',           'plotly',
      'python',           'scikit learn',
      'scipy',            'seaborn',
      'vowpal wabbit'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Yorko/mlcourse.ai' }
    ]
  },
  {
    id: 297,
    name: 'vowpal_wabbit',
    creator: 'joma',
    description: 'Vowpal Wabbit is a machine learning system which pushes the frontier of machine learning with techniques such as online, hashing, allreduce, reductions, learning2search, active, and interactive learning.  ',
    skills: [
      'C++',              'PLSQL',
      'C#',               'Python',
      'Jupyter Notebook', 'CMake',
      'Java',             'Perl',
      'C',                'Shell',
      'R',                'Makefile',
      'HTML',             'Scala',
      'Batchfile',        'Ruby',
      'CSS',              'Handlebars',
      'ANTLR',            'JavaScript',
      'Tcl'
    ],
    tags: [
      'active learning',
      'c plus plus',
      'contextual bandits',
      'cpp',
      'learning to search',
      'machine learning',
      'online learning',
      'reinforcement learning'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/VowpalWabbit/vowpal_wabbit'
      }
    ]
  },
  {
    id: 298,
    name: 'machinelearning',
    creator: 'janedoe',
    description: 'ML.NET is an open source and cross-platform machine learning framework for .NET.',
    skills: [
      'C#',         'C++',
      'PowerShell', 'Shell',
      'CMake',      'C',
      'F#',         'Batchfile',
      'Ruby',       'Assembly'
    ],
    tags: [ 'algorithms', 'dotnet', 'machine learning', 'ml' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/dotnet/machinelearning'
      }
    ]
  },
  {
    id: 299,
    name: 'cortex',
    creator: 'refatmonjur',
    description: 'Production infrastructure for machine learning at scale',
    skills: [ 'Go', 'Python', 'Shell', 'Jinja', 'Dockerfile', 'Makefile' ],
    tags: [ 'infrastructure', 'machine learning' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/cortexlabs/cortex' }
    ]
  },
  {
    id: 300,
    name: 'machine learning yearning cn',
    creator: 'zealptl',
    description: 'Machine Learning Yearning 中文版 - 《机器学习训练秘籍》 - Andrew Ng 著',
    skills: [ 'CSS', 'JavaScript', 'HTML', 'Ruby' ],
    tags: [ 'book', 'deep learning', 'machine learning' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/deeplearning-ai/machine-learning-yearning-cn'
      }
    ]
  },
  {
    id: 301,
    name: 'machine learning course',
    creator: 'tanviryouhana',
    description: ':speech_balloon: Machine Learning Course with Python: ',
    skills: [ 'Python', 'Jupyter Notebook', 'Shell' ],
    tags: [
      'algorithms',
      'artificial intelligence',
      'machine learning',
      'machine learning algorithms',
      'python'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/instillai/machine-learning-course'
      }
    ]
  },
  {
    id: 302,
    name: 'amazon sagemaker examples',
    creator: 'johndoe',
    description: 'Example 📓 Jupyter notebooks that demonstrate how to build, train, and deploy machine learning models using 🧠 Amazon SageMaker. ',
    skills: [
      'Jupyter Notebook',
      'Python',
      'Roff',
      'Shell',
      'Dockerfile',
      'HTML',
      'R',
      'Java',
      'C',
      'Batchfile',
      'Makefile',
      'jq'
    ],
    tags: [
      'aws',
      'data science',
      'deep learning',
      'examples',
      'inference',
      'jupyter notebook',
      'machine learning',
      'mlops',
      'reinforcement learning',
      'sagemaker',
      'training'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/aws/amazon-sagemaker-examples'
      }
    ]
  },
  {
    id: 303,
    name: 'facets',
    creator: 'justinsiu',
    description: 'Visualizations for machine learning datasets',
    skills: [
      'Jupyter Notebook',
      'HTML',
      'TypeScript',
      'Python',
      'Starlark',
      'JavaScript'
    ],
    tags: [ 'data visualization', 'machine learning' ],
    links: [ { type: 'GitHub', link: 'https://github.com/PAIR-code/facets' } ]
  },
  {
    id: 304,
    name: 'guess',
    creator: 'justinsiu',
    description: '🔮 Libraries & tools for enabling Machine Learning driven user-experiences on the web',
    skills: [ 'TypeScript', 'JavaScript', 'Smarty' ],
    tags: [
      'hacktoberfest',
      'machine learning',
      'performance',
      'prefetch',
      'prerender',
      'web performance'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/guess-js/guess' } ]
  },
  {
    id: 305,
    name: 'machine_learning_examples',
    creator: 'bob',
    description: 'A collection of machine learning examples and tutorials.',
    skills: [ 'Python' ],
    tags: [
      'data science',
      'deep learning',
      'machine learning',
      'natural language processing',
      'python',
      'reinforcement learning'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/lazyprogrammer/machine_learning_examples'
      }
    ]
  },
  {
    id: 306,
    name: 'gradio',
    creator: 'janedoe',
    description: 'Create UIs for your machine learning model in Python in 3 minutes',
    skills: [
      'Python',
      'HTML',
      'CSS',
      'Svelte',
      'TypeScript',
      'JavaScript',
      'Shell',
      'Dockerfile',
      'Jupyter Notebook'
    ],
    tags: [
      'data analysis',
      'data science',
      'data visualization',
      'deep learning',
      'deploy',
      'gradio',
      'gradio interface',
      'interface',
      'machine learning',
      'models',
      'python',
      'python notebook',
      'ui',
      'ui components'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/gradio-app/gradio' }
    ]
  },
  {
    id: 307,
    name: 'mindsdb',
    creator: 'mehedishohag',
    description: 'In-Database Machine Learning',
    skills: [ 'Python', 'Smarty', 'Mako' ],
    tags: [
      'artificial intelligence',
      'automl',
      'clickhouse',
      'explainable ai',
      'explainable ml',
      'hacktoberfest',
      'machine learning',
      'machine learning api',
      'mariadb',
      'ml',
      'mysql',
      'postgresql',
      'pytorch',
      'singlestore',
      'snowflake'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/mindsdb/mindsdb' } ]
  },
  {
    id: 308,
    name: 'pymc',
    creator: 'joma',
    description: 'Probabilistic Programming in Python: Bayesian Modeling and Probabilistic Machine Learning with Aesara',
    skills: [ 'Python', 'Makefile', 'Batchfile', 'Shell', 'Dockerfile' ],
    tags: [
      'aesara',
      'bayesian inference',
      'hacktoberfest',
      'mcmc',
      'probabilistic programming',
      'python',
      'statistical analysis',
      'variational inference'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/pymc-devs/pymc' } ]
  },
  {
    id: 309,
    name: 'angel',
    creator: 'techlead',
    description: 'A Flexible and Powerful Parameter Server for large-scale machine learning',
    skills: [
      'Java',
      'Scala',
      'Terra',
      'Shell',
      'Jupyter Notebook',
      'Dockerfile',
      'CSS',
      'Batchfile'
    ],
    tags: [
      'high dimensional',
      'machine learning',
      'model',
      'online learning',
      'parameter server',
      'scala',
      'spark',
      'spark streaming'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Angel-ML/angel' } ]
  },
  {
    id: 310,
    name: 'machinelearning',
    creator: 'saif',
    description: 'My blogs and code for machine learning. http://cnblogs.com/pinard',
    skills: [ 'Jupyter Notebook', 'Python', 'Java' ],
    tags: [
      'algorithms',
      'machinelearning',
      'reinforcementlearning',
      'scikit learn'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ljpzzz/machinelearning'
      }
    ]
  },
  {
    id: 311,
    name: 'catboost',
    creator: 'tanviryouhana',
    description: 'A fast, scalable, high performance Gradient Boosting on Decision Trees library, used for ranking, classification, regression and other machine learning tasks for Python, R, Java, C++. Supports computation on CPU and GPU.',
    skills: [
      'C',
      'Python',
      'C++',
      'Makefile',
      'Assembly',
      'Fortran',
      'Cython',
      'Cuda',
      'Scala',
      'R',
      'NASL',
      'TeX',
      'Roff',
      'Java',
      'Ragel',
      'SWIG',
      'HTML',
      'JavaScript',
      'C#',
      'Shell',
      'Starlark',
      'DIGITAL Command Language',
      'TypeScript',
      'CMake',
      'Rust',
      'SourcePawn',
      'Batchfile',
      'Smarty',
      'PowerShell',
      'MATLAB',
      'Clean',
      'CSS',
      'Pawn',
      'Perl',
      'Io',
      'M4',
      'Dockerfile',
      'PHP',
      'Jinja'
    ],
    tags: [
      'big data',             'catboost',
      'categorical features', 'coreml',
      'cuda',                 'data mining',
      'data science',         'decision trees',
      'gbdt',                 'gbm',
      'gpu',                  'gpu computing',
      'gradient boosting',    'kaggle',
      'machine learning',     'python',
      'r',                    'tutorial'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/catboost/catboost' }
    ]
  },
  {
    id: 312,
    name: 'python machine learning book 2nd edition',
    creator: 'tanzilbaraskar',
    description: 'The "Python Machine Learning (2nd edition)" book code repository and info resource',
    skills: [ 'Jupyter Notebook', 'Python', 'HTML', 'Shell', 'CSS' ],
    tags: [
      'data science',
      'deep learning',
      'machine learning',
      'python',
      'scikit learn',
      'tensorflow'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rasbt/python-machine-learning-book-2nd-edition'
      }
    ]
  },
  {
    id: 313,
    name: 'industry machine learning',
    creator: 'janedoe',
    description: 'A curated list of applied machine learning and data science notebooks and libraries across different industries (by @firmai)',
    skills: [ 'Jupyter Notebook' ],
    tags: [
      'data science',
      'datascience',
      'example',
      'firmai',
      'jupyter notebook',
      'machine learning',
      'practical machine learning',
      'python'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/firmai/industry-machine-learning'
      }
    ]
  },
  {
    id: 314,
    name: 'auto sklearn',
    creator: 'tanzilbaraskar',
    description: 'Automated Machine Learning with scikit-learn',
    skills: [ 'Python', 'Shell', 'Dockerfile', 'Makefile' ],
    tags: [
      'automated machine learning',
      'automl',
      'bayesian optimization',
      'hyperparameter optimization',
      'hyperparameter search',
      'hyperparameter tuning',
      'meta learning',
      'metalearning',
      'scikit learn',
      'smac'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/automl/auto-sklearn'
      }
    ]
  },
  {
    id: 315,
    name: 'Machine Learning',
    creator: 'refatmonjur',
    description: ':zap:机器学习实战（Python3）：kNN、决策树、贝叶斯、逻辑回归、SVM、线性回归、树回归',
    skills: [ 'Python' ],
    tags: [
      'adaboost',
      'adaboost algorithm',
      'decision tree',
      'knn',
      'logistic',
      'machine learning',
      'navie bayes algorithm',
      'python',
      'python3',
      'regression',
      'smo',
      'svm'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Jack-Cherish/Machine-Learning'
      }
    ]
  },
  {
    id: 316,
    name: 'doccano',
    creator: 'joybiswas',
    description: 'Open source annotation tool for machine learning practitioners.',
    skills: [
      'Python',
      'Vue',
      'TypeScript',
      'JavaScript',
      'Shell',
      'Dockerfile',
      'CSS'
    ],
    tags: [
      'annotation tool',
      'data labeling',
      'dataset',
      'datasets',
      'machine learning',
      'natural language processing',
      'nuxt',
      'nuxtjs',
      'python',
      'text annotation',
      'vue',
      'vuejs'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/doccano/doccano' } ]
  },
  {
    id: 317,
    name: 'tensorflow_cookbook',
    creator: 'joma',
    description: 'Code for Tensorflow Machine Learning Cookbook',
    skills: [ 'Jupyter Notebook', 'Python' ],
    tags: [
      'classification',      'cnn',
      'genetic algorithm',   'kmeans clustering',
      'linear regression',   'machine learning',
      'neural network',      'nlp',
      'ode',                 'packtpub',
      'regression',          'rnn',
      'svm',                 'tensorboard',
      'tensorflow',          'tensorflow algorithms',
      'tensorflow cookbook'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/nfmcclure/tensorflow_cookbook'
      }
    ]
  },
  {
    id: 318,
    name: 'Swift AI',
    creator: 'mdrislam30',
    description: 'The Swift machine learning library.',
    skills: [ 'Swift' ],
    tags: [
      'artificial intelligence',
      'deep learning',
      'ios',
      'machine learning',
      'macos',
      'ocr',
      'swift'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Swift-AI/Swift-AI' }
    ]
  },
  {
    id: 319,
    name: 'h2o 3',
    creator: 'justinsiu',
    description: 'H2O is an Open Source, Distributed, Fast & Scalable Machine Learning Platform: Deep Learning, Gradient Boosting (GBM) & XGBoost, Random Forest, Generalized Linear Modeling (GLM with Elastic Net), K-Means, PCA, Generalized Additive Models (GAM), RuleFit, Support Vector Machine (SVM), Stacked Ensembles, Automatic Machine Learning (AutoML), etc.',
    skills: [
      'Jupyter Notebook',
      'Java',
      'HTML',
      'Python',
      'R',
      'CSS',
      'TeX',
      'Shell',
      'Groovy',
      'JavaScript',
      'Makefile',
      'HCL',
      'Sass',
      'Batchfile',
      'Dockerfile',
      'CoffeeScript',
      'Scala',
      'HiveQL',
      'Emacs Lisp',
      'Smarty',
      'PHP',
      'DIGITAL Command Language',
      'Ruby'
    ],
    tags: [
      'automl',          'big data',
      'data science',    'deep learning',
      'distributed',     'ensemble learning',
      'gbm',             'gpu',
      'h2o',             'hadoop',
      'java',            'machine learning',
      'multi threading', 'naive bayes',
      'opensource',      'pca',
      'python',          'r',
      'random forest',   'spark'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/h2oai/h2o-3' } ]
  },
  {
    id: 320,
    name: 'imbalanced learn',
    creator: 'justinsiu',
    description: ' A Python Package to Tackle the Curse of Imbalanced Datasets in Machine Learning',
    skills: [ 'Python', 'Shell', 'TeX', 'Makefile' ],
    tags: [
      'data analysis',
      'data science',
      'machine learning',
      'python',
      'statistics'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/scikit-learn-contrib/imbalanced-learn'
      }
    ]
  },
  {
    id: 321,
    name: 'machine learning for trading',
    creator: 'abdulimtiaz',
    description: 'Code for Machine Learning for Algorithmic Trading, 2nd edition.',
    skills: [ 'Jupyter Notebook', 'Python', 'JavaScript', 'Shell' ],
    tags: [
      'artificial intelligence',
      'data science',
      'deep learning',
      'finance',
      'investment',
      'investment strategies',
      'machine learning',
      'ml4t workflow',
      'synthetic data',
      'trading',
      'trading agent',
      'trading strategies'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/stefan-jansen/machine-learning-for-trading'
      }
    ]
  },
  {
    id: 322,
    name: 'alluxio',
    creator: 'bob',
    description: 'Alluxio, data orchestration for analytics and machine learning in the cloud',
    skills: [
      'Java',       'TypeScript',
      'Go',         'Shell',
      'C++',        'Mustache',
      'Ruby',       'Python',
      'SCSS',       'Dockerfile',
      'JavaScript', 'C',
      'Makefile',   'Roff',
      'Handlebars', 'HTML'
    ],
    tags: [
      'alluxio',
      'data analysis',
      'data orchestration',
      'hadoop',
      'memory speed',
      'presto',
      'spark',
      'tensorflow',
      'virtual distributed filesystem'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Alluxio/alluxio' } ]
  },
  {
    id: 323,
    name: 'pycaret',
    creator: 'tanviryouhana',
    description: 'An open-source, low-code machine learning library in Python',
    skills: [ 'Jupyter Notebook', 'Python', 'Dockerfile' ],
    tags: [
      'anomaly detection',
      'citizen data scientists',
      'classification',
      'clustering',
      'data science',
      'gpu',
      'machine learning',
      'ml',
      'nlp',
      'pycaret',
      'python',
      'regression',
      'time series'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/pycaret/pycaret' } ]
  },
  {
    id: 324,
    name: 'ml5 library',
    creator: 'johndoe',
    description: 'Friendly machine learning for the web! 🤖 ',
    skills: [ 'JavaScript', 'Shell' ],
    tags: [
      'deep learning',
      'imagenet',
      'javascript',
      'lstm',
      'machine learning',
      'neural network',
      'p5js',
      'p5xjs'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/ml5js/ml5-library' }
    ]
  },
  {
    id: 325,
    name: 'smile',
    creator: 'joybiswas',
    description: 'Statistical Machine Intelligence & Learning Engine',
    skills: [
      'Java',             'Scilab',
      'HTML',             'Scala',
      'Jupyter Notebook', 'Terra',
      'Kotlin',           'Clojure',
      'Shell',            'Nunjucks',
      'CSS',              'JavaScript',
      'SuperCollider',    'Harbour',
      'Objective-C++'
    ],
    tags: [
      'classification',
      'clustering',
      'computer algebra system',
      'data science',
      'dataframe',
      'deep learning',
      'genetic algorithm',
      'graph',
      'interpolation',
      'linear algebra',
      'machine learning',
      'manifold learning',
      'multidimensional scaling',
      'nearest neighbor search',
      'nlp',
      'regression',
      'statistics',
      'visualization',
      'wavelet'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/haifengl/smile' } ]
  },
  {
    id: 326,
    name: 'PRMLT',
    creator: 'mdrislam30',
    description: 'Matlab code of machine learning algorithms in book PRML',
    skills: [ 'MATLAB' ],
    tags: [
      'algorithms',
      'machine learning',
      'machine learning algorithms',
      'matlab',
      'prml'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/PRML/PRMLT' } ]
  },
  {
    id: 327,
    name: 'serving',
    creator: 'joma',
    description: 'A flexible, high-performance serving system for machine learning models',
    skills: [ 'C++', 'Starlark', 'Python', 'Shell', 'C', 'Dockerfile' ],
    tags: [
      'cpp',
      'deep learning',
      'deep neural networks',
      'machine learning',
      'ml',
      'neural network',
      'python',
      'serving',
      'tensorflow'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/tensorflow/serving' }
    ]
  },
  {
    id: 328,
    name: 'sktime',
    creator: 'joma',
    description: 'A unified framework for machine learning with time series',
    skills: [ 'Python', 'Jupyter Notebook', 'Shell', 'Makefile', 'Dockerfile' ],
    tags: [
      'data mining',
      'data science',
      'forecasting',
      'machine learning',
      'scikit learn',
      'time series',
      'time series analysis',
      'time series classification',
      'time series regression'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/alan-turing-institute/sktime'
      }
    ]
  },
  {
    id: 329,
    name: 'Data Analysis and Machine Learning Projects',
    creator: 'frankniu',
    description: 'Repository of teaching materials, code, and data for my data analysis and machine learning projects.',
    skills: [ 'Jupyter Notebook', 'Python' ],
    tags: [
      'data analysis',
      'data science',
      'evolutionary algorithm',
      'ipython notebook',
      'machine learning',
      'python'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rhiever/Data-Analysis-and-Machine-Learning-Projects'
      }
    ]
  },
  {
    id: 330,
    name: 'gpdb',
    creator: 'justinsiu',
    description: 'Greenplum Database - Massively Parallel PostgreSQL for Analytics. An open-source massively parallel data platform for analytics, machine learning and AI.',
    skills: [
      'C',          'C++',        'PLpgSQL',
      'Python',     'Perl',       'Yacc',
      'Makefile',   'Gherkin',    'Shell',
      'Ruby',       'Lex',        'M4',
      'HTML',       'CMake',      'Roff',
      'JavaScript', 'Batchfile',  'Fortran',
      'XS',         'Emacs Lisp', 'DTrace',
      'Assembly',   'sed',        'Awk',
      'GDB',        'NASL',       'XSLT',
      'PowerShell', 'SCSS'
    ],
    tags: [
      'analytics',
      'data warehouse',
      'database',
      'gpdb',
      'greenplum database',
      'htap',
      'mpp',
      'postgresql'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/greenplum-db/gpdb' }
    ]
  },
  {
    id: 331,
    name: 'svgo',
    creator: 'tanviryouhana',
    description: '⚙️ Node.js tool for optimizing SVG files',
    skills: [ 'JavaScript', 'TypeScript' ],
    tags: [
      'cli',
      'javascript',
      'minification',
      'nodejs',
      'optimization',
      'svg',
      'svgo'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/svg/svgo' } ]
  },
  {
    id: 332,
    name: 'ncnn',
    creator: 'joma',
    description: 'ncnn is a high-performance neural network inference framework optimized for the mobile platform',
    skills: [
      'C++',       'C',
      'GLSL',      'Python',
      'CMake',     'Shell',
      'Batchfile', 'SWIG'
    ],
    tags: [
      'android',
      'arm neon',
      'artificial intelligence',
      'caffe',
      'darknet',
      'deep learning',
      'high preformance',
      'inference',
      'ios',
      'keras',
      'mlir',
      'mxnet',
      'ncnn',
      'neural network',
      'onnx',
      'pytorch',
      'riscv',
      'simd',
      'tensorflow',
      'vulkan'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Tencent/ncnn' } ]
  },
  {
    id: 333,
    name: 'prepack',
    creator: 'akbarhaider',
    description: 'A JavaScript bundle optimizer.',
    skills: [ 'JavaScript', 'HTML', 'CSS', 'Shell' ],
    tags: [ 'javascript', 'optimization' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/facebookarchive/prepack'
      }
    ]
  },
  {
    id: 334,
    name: 'Marlin',
    creator: 'refatmonjur',
    description: 'Marlin is an optimized firmware for RepRap 3D printers based on the Arduino platform. | Many commercial 3D printers come with Marlin installed. Check with your vendor if you need source code for your specific machine.',
    skills: [
      'C++',        'C',
      'Python',     'Shell',
      'JavaScript', 'Makefile',
      'HTML',       'Assembly',
      'OpenSCAD',   'CSS',
      'CMake',      'G-code',
      'GDB',        'NASL',
      'Dockerfile'
    ],
    tags: [
      '3d printing',
      'arduino',
      'atmel',
      'avr',
      'esp32',
      'firmware',
      'hacktoberfest',
      'reprap',
      'stmicro'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/MarlinFirmware/Marlin'
      }
    ]
  },
  {
    id: 335,
    name: 'timescaledb',
    creator: 'tanzilbaraskar',
    description: 'An open-source time-series SQL database optimized for fast ingest and complex queries.  Packaged as a PostgreSQL extension.',
    skills: [
      'C',         'PLpgSQL',
      'CMake',     'Shell',
      'Ruby',      'Python',
      'Perl',      'SmPL',
      'Batchfile', 'Emacs Lisp'
    ],
    tags: [
      'analytics',
      'database',
      'financial analysis',
      'iot',
      'postgres',
      'postgresql',
      'sql',
      'time series',
      'time series database',
      'timescaledb',
      'tsdb'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/timescale/timescaledb'
      }
    ]
  },
  {
    id: 336,
    name: 'annoy',
    creator: 'joybiswas',
    description: 'Approximate Nearest Neighbors in C++/Python optimized for memory usage and loading/saving to disk',
    skills: [
      'C++',   'Python',
      'Lua',   'Go',
      'C',     'SWIG',
      'CMake'
    ],
    tags: [
      'approximate nearest neighbor search',
      'c plus plus',
      'golang',
      'locality sensitive hashing',
      'lua',
      'nearest neighbor search',
      'python'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/spotify/annoy' } ]
  },
  {
    id: 337,
    name: 'tpot',
    creator: 'mdrislam30',
    description: 'A Python Automated Machine Learning tool that optimizes machine learning pipelines using genetic programming.',
    skills: [ 'Python', 'Jupyter Notebook', 'Shell' ],
    tags: [
      'automated machine learning',
      'automation',
      'automl',
      'data science',
      'feature engineering',
      'gradient boosting',
      'hyperparameter optimization',
      'machine learning',
      'model selection',
      'parameter tuning',
      'python',
      'random forest',
      'scikit learn',
      'xgboost'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/EpistasisLab/tpot' }
    ]
  },
  {
    id: 338,
    name: 'annotated_deep_learning_paper_implementations',
    creator: 'patrick',
    description: '🧑‍🏫 50! Implementations/tutorials of deep learning papers with side-by-side notes 📝; including transformers (original, xl, switch, feedback, vit, ...), optimizers (adam, adabelief, ...), gans(cyclegan, stylegan2, ...), 🎮 reinforcement learning (ppo, dqn), capsnet, distillation, ... 🧠',
    skills: [ 'Jupyter Notebook', 'Python', 'Makefile' ],
    tags: [
      'deep learning',
      'deep learning tutorial',
      'gan',
      'machine learning',
      'neural networks',
      'optimizers',
      'pytorch',
      'reinforcement learning',
      'transformer',
      'transformers'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/labmlai/annotated_deep_learning_paper_implementations'
      }
    ]
  },
  {
    id: 339,
    name: 'soar',
    creator: 'joma',
    description: 'SQL Optimizer And Rewriter',
    skills: [ 'Go', 'Shell', 'Makefile' ],
    tags: [
      'advisor',      'auditor',
      'command line', 'database',
      'indexing',     'mysql',
      'optimizer',    'rewrite',
      'sql',          'suggestion',
      'syntax'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/XiaoMi/soar' } ]
  },
  {
    id: 340,
    name: 'Stacer',
    creator: 'janedoe',
    description: 'Linux System Optimizer and Monitoring - https://oguzhaninan.github.io/Stacer-Web',
    skills: [ 'C++', 'CMake', 'QMake', 'Shell', 'C' ],
    tags: [
      'desktop application',
      'linux',
      'monitoring',
      'optimizer',
      'stacer',
      'system',
      'system information',
      'ubuntu'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/oguzhaninan/Stacer' }
    ]
  },
  {
    id: 341,
    name: 'ImageOptim',
    creator: 'tufayelahmed',
    description: 'GUI image optimizer for Mac',
    skills: [
      'HTML',  'Objective-C',
      'C',     'Makefile',
      'PHP',   'JavaScript',
      'Shell', 'CSS',
      'Ruby'
    ],
    tags: [
      'accelerator',
      'gui',
      'image optimization',
      'imageoptim',
      'mac app',
      'minification',
      'performace'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ImageOptim/ImageOptim'
      }
    ]
  },
  {
    id: 342,
    name: 'awesome wpo',
    creator: 'saif',
    description: ':pencil: A curated list of Web Performance Optimization. Everyone can contribute here!',
    skills: [ 'JavaScript', 'CSS' ],
    tags: [ 'awesome', 'awesome list', 'list', 'webperf', 'webperformance' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/davidsonfellipe/awesome-wpo'
      }
    ]
  },
  {
    id: 343,
    name: 'DeepSpeed',
    creator: 'mdrislam30',
    description: 'DeepSpeed is a deep learning optimization library that makes distributed training and inference easy, efficient, and effective.',
    skills: [ 'Python', 'Cuda', 'C++', 'Shell', 'C', 'Dockerfile' ],
    tags: [
      'billion parameters',
      'data parallelism',
      'deep learning',
      'gpu',
      'inference',
      'machine learning',
      'model parallelism',
      'pipeline parallelism',
      'pytorch'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/microsoft/DeepSpeed'
      }
    ]
  },
  {
    id: 344,
    name: 'closure compiler',
    creator: 'bob',
    description: 'A JavaScript checker and optimizer.',
    skills: [ 'Java', 'JavaScript', 'Starlark', 'Shell', 'HTML' ],
    tags: [
      'closure compiler',
      'javascript',
      'optimization',
      'typechecking'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/google/closure-compiler'
      }
    ]
  },
  {
    id: 345,
    name: 'optuna',
    creator: 'tufayelahmed',
    description: 'A hyperparameter optimization framework',
    skills: [ 'Python', 'Jsonnet', 'Shell', 'Dockerfile', 'Mako' ],
    tags: [
      'distributed',
      'hacktoberfest',
      'hyperparameter optimization',
      'machine learning',
      'parallel',
      'python'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/optuna/optuna' } ]
  },
  {
    id: 346,
    name: 'Android Image Cropper',
    creator: 'akbarhaider',
    description: 'Image Cropping Library for Android, optimized for Camera / Gallery.',
    skills: [ 'Java', 'Shell' ],
    tags: [ 'android', 'android image cropper', 'cropper' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ArthurHub/Android-Image-Cropper'
      }
    ]
  },
  {
    id: 347,
    name: 'zephyr',
    creator: 'refatmonjur',
    description: 'Primary Git Repository for the Zephyr Project. Zephyr is a new generation, scalable, optimized, secure RTOS for multiple hardware architectures.',
    skills: [
      'C',          'Python',
      'CMake',      'Assembly',
      'Perl',       'Shell',
      'SmPL',       'C++',
      'SourcePawn', 'Verilog',
      'Tcl',        'Smalltalk',
      'Cadence',    'EmberScript',
      'Haskell',    'VBA',
      'PLSQL',      'Batchfile'
    ],
    tags: [
      'embedded',
      'iot',
      'mcu',
      'microcontroller',
      'real time',
      'rtos'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/zephyrproject-rtos/zephyr'
      }
    ]
  },
  {
    id: 348,
    name: 'BayesianOptimization',
    creator: 'anvinhtr',
    description: 'A Python implementation of global optimization with gaussian processes.',
    skills: [ 'Python' ],
    tags: [
      'bayesian optimization',
      'gaussian processes',
      'optimization',
      'python',
      'simple'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/fmfn/BayesianOptimization'
      }
    ]
  },
  {
    id: 349,
    name: 'gifify',
    creator: 'joybiswas',
    description: '😻 Convert any video file to an optimized animated GIF.',
    skills: [ 'JavaScript' ],
    tags: [
      'ffmpeg',      'gif',
      'gifify',      'gifsicle',
      'imagemagick', 'mp4',
      'nodejs',      'screencast',
      'video'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/vvo/gifify' } ]
  },
  {
    id: 350,
    name: 'gonum',
    creator: 'joma',
    description: 'Gonum is a set of numeric libraries for the Go programming language. It contains libraries for matrices, statistics, optimization, and more',
    skills: [
      'Go',       'Fortran',
      'Assembly', 'TeX',
      'Shell',    'MATLAB',
      'Ragel',    'Makefile'
    ],
    tags: [
      'data analysis',
      'go',
      'golang',
      'graph',
      'matrix',
      'scientific computing',
      'statistics'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/gonum/gonum' } ]
  },
  {
    id: 351,
    name: 'tokenizers',
    creator: 'joybiswas',
    description: '💥 Fast State-of-the-Art Tokenizers optimized for Research and Production',
    skills: [
      'Rust',
      'Python',
      'TypeScript',
      'Jupyter Notebook',
      'JavaScript',
      'CSS',
      'Makefile',
      'Shell',
      'Batchfile'
    ],
    tags: [
      'bert',
      'gpt',
      'language model',
      'natural language processing',
      'natural language understanding',
      'nlp',
      'transformers'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/huggingface/tokenizers'
      }
    ]
  },
  {
    id: 352,
    name: 'EasyDarwin',
    creator: 'zealptl',
    description: 'open source、high performance、industrial rtsp streaming server,a lot of optimization on streaming relay,KeyFrame cache,RESTful,and web management,also EasyDarwin support distributed load balancing,a simple streaming media cloud platform architecture.高性能开源RTSP流媒体服务器，基于go语言研发，维护和优化：RTSP推模式转发、RTSP拉模式转发、录像、检索、回放、关键帧缓存、秒开画面、RESTful接口、WEB后台管理、分布式负载均衡，基于EasyDarwin构建出了一套基础的流媒体云视频平台架构！',
    skills: [ 'Go', 'JavaScript', 'Vue', 'HTML', 'CSS', 'Shell' ],
    tags: [
      'easycamera',
      'easycms',
      'easydarwin',
      'rtsp annouce',
      'rtsp relay',
      'rtsp server'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/EasyDarwin/EasyDarwin'
      }
    ]
  },
  {
    id: 353,
    name: 'tinydb',
    creator: 'mdrislam30',
    description: 'TinyDB is a lightweight document oriented database optimized for your happiness :)',
    skills: [ 'Python' ],
    tags: [ 'database', 'documentdb', 'json', 'nosql', 'python' ],
    links: [ { type: 'GitHub', link: 'https://github.com/msiemens/tinydb' } ]
  },
  {
    id: 354,
    name: 'mace',
    creator: 'tanzilbaraskar',
    description: 'MACE is a deep learning inference framework optimized for mobile heterogeneous computing platforms.',
    skills: [
      'C++',      'Python',
      'C',        'CMake',
      'Starlark', 'Jinja',
      'Shell',    'Dockerfile',
      'HTML',     'Smarty'
    ],
    tags: [
      'deep learning',
      'hvx',
      'machine learning',
      'neon',
      'neural network',
      'opencl'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/XiaoMi/mace' } ]
  },
  {
    id: 355,
    name: 'OpenBLAS',
    creator: 'bob',
    description: 'OpenBLAS is an optimized BLAS library based on GotoBLAS2 1.13 BSD version. ',
    skills: [
      'C',        'Fortran',
      'Assembly', 'Makefile',
      'CMake',    'C++',
      'Perl',     'TeX',
      'Python',   'Meson',
      'MATLAB',   'Shell',
      'R',        'Raku',
      'PHP'
    ],
    tags: [ 'blas', 'lapack', 'lapacke' ],
    links: [ { type: 'GitHub', link: 'https://github.com/xianyi/OpenBLAS' } ]
  },
  {
    id: 356,
    name: 'FirebaseUI Android',
    creator: 'saif',
    description: 'Optimized UI components for Firebase',
    skills: [ 'Java', 'Kotlin', 'Python', 'Shell' ],
    tags: [ 'android', 'firebase', 'ui' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/firebase/FirebaseUI-Android'
      }
    ]
  },
  {
    id: 357,
    name: 'incubator pagespeed ngx',
    creator: 'mehedishohag',
    description: 'Automatic PageSpeed optimization module for Nginx',
    skills: [ 'C++', 'Shell', 'Dockerfile', 'Makefile' ],
    tags: [ 'pagespeed' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/apache/incubator-pagespeed-ngx'
      }
    ]
  },
  {
    id: 358,
    name: 'sitespeed.io',
    creator: 'patrick',
    description: 'Sitespeed.io is an open source tool that helps you monitor, analyze and optimize your website speed and performance, based on performance best practices advices from the coach and collecting browser metrics using the Navigation Timing API, User Timings and Visual Metrics (FirstVisualChange, SpeedIndex & LastVisualChange). ',
    skills: [
      'JavaScript', 'Pug',
      'SCSS',       'Shell',
      'Dockerfile', 'HTML',
      'Ruby',       'CSS'
    ],
    tags: [
      'metrics',
      'monitoring',
      'perfmatters',
      'performance analysis',
      'performance dashboard',
      'performance metrics',
      'sitespeed',
      'web',
      'webperf'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/sitespeedio/sitespeed.io'
      }
    ]
  },
  {
    id: 359,
    name: 'cloud custodian',
    creator: 'saif',
    description: 'Rules engine for cloud security, cost optimization, and governance, DSL in yaml for policies to query, filter, and take actions on resources',
    skills: [
      'Python',     'Go',
      'HCL',        'Jinja',
      'Shell',      'Makefile',
      'Dockerfile', 'PowerShell',
      'Smarty'
    ],
    tags: [
      'aws',
      'azure',
      'cloud',
      'cloud computing',
      'compliance',
      'gcp',
      'lambda',
      'management',
      'rules engine',
      'serverless'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/cloud-custodian/cloud-custodian'
      }
    ]
  },
  {
    id: 360,
    name: 'booster',
    creator: 'abdulimtiaz',
    description: '🚀Optimizer for mobile applications',
    skills: [ 'Kotlin', 'Java', 'JavaScript' ],
    tags: [
      'android',
      'bytecode manipulation',
      'gradle plugin',
      'optimizer',
      'static analysis'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/didi/booster' } ]
  },
  {
    id: 361,
    name: 'clean css',
    creator: 'frankniu',
    description: 'Fast and efficient CSS optimizer for node.js and the Web',
    skills: [ 'JavaScript' ],
    tags: [
      'clean css',
      'css',
      'css optimizations',
      'css optimizer',
      'minification',
      'optimization'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/clean-css/clean-css'
      }
    ]
  },
  {
    id: 362,
    name: 'cvxpy',
    creator: 'bob',
    description: 'A Python-embedded modeling language for convex optimization problems.',
    skills: [ 'C++', 'Python', 'C', 'Makefile', 'Shell', 'SWIG', 'CMake' ],
    tags: [ 'cvxpy', 'modeling language', 'optimization', 'python' ],
    links: [ { type: 'GitHub', link: 'https://github.com/cvxpy/cvxpy' } ]
  },
  {
    id: 363,
    name: 'DALI',
    creator: 'joybiswas',
    description: 'A GPU-accelerated library containing highly optimized building blocks and an execution engine for data processing to accelerate deep learning training and inference applications.',
    skills: [ 'C++', 'Python', 'Cuda', 'CMake', 'C', 'Shell', 'Dockerfile' ],
    tags: [
      'audio processing',   'data augmentation',
      'data processing',    'deep learning',
      'fast data pipeline', 'gpu',
      'gpu tensorflow',     'image augmentation',
      'image processing',   'machine learning',
      'mxnet',              'neural network',
      'paddle',             'python',
      'pytorch'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/NVIDIA/DALI' } ]
  },
  {
    id: 364,
    name: 'server',
    creator: 'akbarhaider',
    description: 'The Triton Inference Server provides an optimized cloud and edge inferencing solution. ',
    skills: [
      'Python',
      'Shell',
      'C++',
      'CMake',
      'Roff',
      'Smarty',
      'Dockerfile'
    ],
    tags: [
      'cloud',
      'datacenter',
      'deep learning',
      'edge',
      'gpu',
      'inference',
      'machine learning'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/triton-inference-server/server'
      }
    ]
  },
  {
    id: 365,
    name: 'csso',
    creator: 'refatmonjur',
    description: 'CSS minifier with structural optimizations',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [ 'css', 'css minifier', 'fast', 'minifier', 'usage data' ],
    links: [ { type: 'GitHub', link: 'https://github.com/css/csso' } ]
  },
  {
    id: 366,
    name: 'Optimizing Swift Build Times',
    creator: 'refatmonjur',
    description: 'Collection of advice on optimizing compile times of Swift projects.',
    skills: [ 'Swift' ],
    tags: [ 'build time', 'compile', 'compile time', 'swift', 'time' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/fastred/Optimizing-Swift-Build-Times'
      }
    ]
  },
  {
    id: 367,
    name: 'TNN',
    creator: 'saif',
    description: 'TNN: developed by Tencent Youtu Lab and Guangying Lab, a uniform deep learning inference framework for mobile、desktop and server. TNN is distinguished by several outstanding features, including its cross-platform capability, high performance, model compression and code pruning. Based on ncnn and Rapidnet, TNN further strengthens the support and performance optimization for mobile devices, and also draws on the advantages of good extensibility and high performance from existed open source efforts. TNN has been deployed in multiple Apps from Tencent, such as Mobile QQ, Weishi, Pitu, etc. Contributions are welcome to work in collaborative with us and make TNN a better framework. ',
    skills: [
      'C++',           'C',
      'Objective-C++', 'Python',
      'Assembly',      'Cuda',
      'Metal',         'Shell',
      'CMake',         'Objective-C',
      'Batchfile',     'Makefile',
      'Java',          'Dockerfile',
      'SourcePawn'
    ],
    tags: [
      'coreml',         'deep learning',
      'face detection', 'hairsegmentaion',
      'inference',      'mnn',
      'ncnn',           'ocr',
      'openvino',       'pytorch',
      'tengine',        'tensorflow',
      'tensorrt'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Tencent/TNN' } ]
  },
  {
    id: 368,
    name: 'js lingui',
    creator: 'tanviryouhana',
    description: '🌍📖 A readable, automated, and optimized (5 kb) internationalization for JavaScript',
    skills: [ 'TypeScript', 'JavaScript' ],
    tags: [
      'i18n',
      'icu',
      'internationalization',
      'intl',
      'javascript',
      'localization',
      'messageformat',
      'react',
      'react components',
      'react native',
      'translation'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/lingui/js-lingui' } ]
  },
  {
    id: 369,
    name: 'aws lambda power tuning',
    creator: 'johndoe',
    description: 'AWS Lambda Power Tuning is an open-source tool that can help you visualize and fine-tune the memory/power configuration of Lambda functions. It runs in your own AWS account - powered by AWS Step Functions - and it supports three optimization strategies: cost, speed, and balanced.',
    skills: [ 'JavaScript', 'HCL', 'Shell' ],
    tags: [
      'aws',
      'aws lambda',
      'cloud',
      'cost',
      'lambda',
      'performance',
      'serverless',
      'stepfunctions'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/alexcasalboni/aws-lambda-power-tuning'
      }
    ]
  },
  {
    id: 370,
    name: 'ihp',
    creator: 'joma',
    description: '🔥 The fastest way to build type safe web apps. IHP is a new batteries-included web framework optimized for longterm productivity and programmer happiness',
    skills: [
      'Haskell', 'JavaScript',
      'CSS',     'Nix',
      'HTML',    'Shell',
      'Python',  'Makefile',
      'PLpgSQL'
    ],
    tags: [
      'framework',
      'hacktoberfest',
      'haskell',
      'html',
      'mvc',
      'nix',
      'postgresql'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/digitallyinduced/ihp'
      }
    ]
  },
  {
    id: 371,
    name: 'ImageOptim CLI',
    creator: 'janedoe',
    description: 'Make optimisation of images part of your automated build process',
    skills: [ 'TypeScript', 'AppleScript', 'JavaScript' ],
    tags: [
      'advpng',     'compress',
      'gifsicle',   'image optimisation',
      'imagealpha', 'imageoptim',
      'jpegmini',   'jpegoptim',
      'jpegtran',   'optimize',
      'optipng',    'performance',
      'pngcrush',   'pngout',
      'pngquant',   'site speed',
      'webperf'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/JamieMason/ImageOptim-CLI'
      }
    ]
  },
  {
    id: 372,
    name: 'meshoptimizer',
    creator: 'mdrislam30',
    description: 'Mesh optimization library that makes meshes smaller and faster to render',
    skills: [ 'C++', 'JavaScript', 'Makefile', 'CMake', 'Python' ],
    tags: [
      'compression',
      'gltf',
      'gpu',
      'mesh processing',
      'optimization',
      'simplification'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/zeux/meshoptimizer' }
    ]
  },
  {
    id: 373,
    name: 'scikit opt',
    creator: 'techlead',
    description: 'Genetic Algorithm, Particle Swarm Optimization, Simulated Annealing, Ant Colony Optimization Algorithm,Immune Algorithm, Artificial Fish Swarm Algorithm, Differential Evolution and TSP(Traveling salesman) ',
    skills: [ 'Python', 'Shell' ],
    tags: [
      'ant colony algorithm',
      'artificial intelligence',
      'fish swarms',
      'genetic algorithm',
      'heuristic algorithms',
      'immune',
      'immune algorithm',
      'optimization',
      'particle swarm optimization',
      'pso',
      'simulated annealing',
      'travelling salesman problem',
      'tsp'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/guofei9987/scikit-opt'
      }
    ]
  },
  {
    id: 374,
    name: 'Crunch',
    creator: 'patrick',
    description: 'Insane(ly slow but wicked good) PNG image optimization',
    skills: [ 'Python', 'HTML', 'Shell', 'Makefile' ],
    tags: [
      'compression',
      'image',
      'image compression',
      'image processing',
      'image quality',
      'images',
      'lossy',
      'lossy compression',
      'macos',
      'png',
      'png compression',
      'pngquant',
      'zopflipng'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/chrissimpkins/Crunch'
      }
    ]
  },
  {
    id: 375,
    name: 'bcrypt.js',
    creator: 'abdulimtiaz',
    description: 'Optimized bcrypt in plain JavaScript with zero dependencies.',
    skills: [ 'JavaScript' ],
    tags: [ 'authentication', 'bcrypt', 'javascript' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/dcodeIO/bcrypt.js' }
    ]
  },
  {
    id: 376,
    name: 'compress',
    creator: 'bob',
    description: 'Optimized Go Compression Packages',
    skills: [ 'Go', 'Assembly', 'Shell', 'Batchfile' ],
    tags: [
      'compression',
      'decompression',
      'deflate',
      'go',
      'golang',
      'gzip',
      'snappy',
      'zip',
      'zstandard',
      'zstd'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/klauspost/compress' }
    ]
  },
  {
    id: 377,
    name: 'oj',
    creator: 'akbarhaider',
    description: 'Optimized JSON',
    skills: [ 'C', 'Ruby', 'RPC', 'Shell' ],
    tags: [
      'c',
      'json',
      'json parser',
      'marshaller',
      'oj gem',
      'rails',
      'ruby',
      'ruby json parser'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ohler55/oj' } ]
  },
  {
    id: 378,
    name: 'openj9',
    creator: 'tufayelahmed',
    description: "Eclipse OpenJ9: A Java Virtual Machine for OpenJDK that's optimized for small footprint, fast start-up, and high throughput.   Builds on Eclipse OMR (https://github.com/eclipse/omr) and combines with the Extensions for OpenJDK for OpenJ9 repo.",
    skills: [
      'Java',       'C++',        'C',
      'Assembly',   'M4',         'CMake',
      'Ruby',       'Makefile',   'Groovy',
      'Perl',       'FreeMarker', 'Shell',
      'Batchfile',  'HTML',       'Gherkin',
      'Dockerfile', 'Pascal',     'Python',
      'Pawn',       'sed',        'PHP',
      'Monkey C',   'Jasmin'
    ],
    tags: [
      'compiler',
      'eclipse openj9',
      'garbage collector',
      'gc',
      'hacktoberfest',
      'interpreter',
      'java',
      'jit',
      'jvm',
      'runtime',
      'virtual machine'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/eclipse-openj9/openj9'
      }
    ]
  },
  {
    id: 379,
    name: 'nlp architect',
    creator: 'frankniu',
    description: 'A model library for exploring state-of-the-art deep learning topologies and techniques for optimizing Natural Language Processing neural networks',
    skills: [
      'Python',
      'Jupyter Notebook',
      'Perl',
      'JavaScript',
      'CSS',
      'Makefile',
      'Shell',
      'Dockerfile',
      'HTML'
    ],
    tags: [
      'bert',
      'deep learning',
      'deeplearning',
      'dynet',
      'nlp',
      'nlu',
      'pytorch',
      'quantization',
      'tensorflow',
      'transformers'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/IntelLabs/nlp-architect'
      }
    ]
  },
  {
    id: 380,
    name: 'HElib',
    creator: 'tanviryouhana',
    description: 'HElib is an open-source software library that implements homomorphic encryption. It supports the BGV scheme with bootstrapping and the Approximate Number CKKS scheme. HElib also includes optimizations for efficient homomorphic evaluation, focusing on effective use of ciphertext packing techniques and on the Gentry-Halevi-Smart optimizations.',
    skills: [
      'C++',
      'CMake',
      'Shell',
      'Objective-C',
      'Python',
      'Makefile',
      'Sage',
      'C'
    ],
    tags: [
      'bgv',
      'crypto',
      'crypto library',
      'cryptography',
      'encryption',
      'encryption library',
      'helib',
      'privacy by design',
      'privacy enhancing technologies'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/homenc/HElib' } ]
  },
  {
    id: 381,
    name: 'pytorch a2c ppo acktr gail',
    creator: 'techlead',
    description: 'PyTorch implementation of Advantage Actor Critic (A2C), Proximal Policy Optimization (PPO), Scalable trust-region method for deep reinforcement learning using Kronecker-factored approximation (ACKTR) and Generative Adversarial Imitation Learning (GAIL).',
    skills: [ 'Python', 'Jupyter Notebook' ],
    tags: [
      'a2c',
      'acktr',
      'actor critic',
      'advantage actor critic',
      'ale',
      'atari',
      'continuous control',
      'deep learning',
      'deep reinforcement learning',
      'hessian',
      'kfac',
      'kronecker factored approximation',
      'mujoco',
      'natural gradients',
      'ppo',
      'proximal policy optimization',
      'pytorch',
      'reinforcement learning',
      'roboschool',
      'second order'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ikostrikov/pytorch-a2c-ppo-acktr-gail'
      }
    ]
  },
  {
    id: 382,
    name: 'awesome android complete reference',
    creator: 'mdrislam30',
    description: 'Awesome Android references for everything like best practices, performance optimization, etc.',
    skills: [ 'Java' ],
    tags: [
      'android application',
      'android architecture',
      'android development',
      'android guide',
      'android library',
      'android networking',
      'android performance',
      'android references',
      'android ui',
      'awesome',
      'best practices',
      'blogs',
      'mvp architecture',
      'tutorial',
      'tutorials'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/amitshekhariitbhu/awesome-android-complete-reference'
      }
    ]
  },
  {
    id: 383,
    name: 'auto cpufreq',
    creator: 'tanviryouhana',
    description: 'Automatic CPU speed & power optimizer for Linux',
    skills: [ 'Python', 'Shell' ],
    tags: [
      'automatic',  'battery',
      'boost',      'cli',
      'cpu',        'daemon',
      'frequency',  'governor',
      'laptop',     'linux',
      'management', 'monitor',
      'monitoring', 'power',
      'speed',      'tool',
      'turbo'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/AdnanHodzic/auto-cpufreq'
      }
    ]
  },
  {
    id: 384,
    name: 'serve',
    creator: 'bob',
    description: 'Serve, optimize and scale PyTorch models in production',
    skills: [ 'Java', 'Python', 'Shell', 'Dockerfile', 'Mustache' ],
    tags: [
      'cpu',
      'deep learning',
      'docker',
      'gpu',
      'kubernetes',
      'machine learning',
      'metrics',
      'mlops',
      'optimization',
      'pytorch',
      'serving'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/pytorch/serve' } ]
  },
  {
    id: 385,
    name: 'optaplanner',
    creator: 'mdrislam30',
    description: 'AI constraint solver in Java to optimize the vehicle routing problem, employee rostering, task assignment, maintenance scheduling, conference scheduling and other planning problems.',
    skills: [
      'Java',       'JavaScript',
      'FreeMarker', 'CSS',
      'Groovy',     'HTML',
      'Shell',      'Batchfile',
      'XSLT'
    ],
    tags: [
      'artificial intelligence',
      'branch and bound',
      'constraint programming',
      'constraint satisfaction problem',
      'constraint solver',
      'constraints',
      'employee rostering',
      'java',
      'local search',
      'mathematical optimization',
      'metaheuristics',
      'optimization',
      'rostering',
      'scheduling',
      'simulated annealing',
      'solver',
      'tabu search',
      'traveling salesman',
      'traveling salesman problem',
      'vehicle routing problem'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/kiegroup/optaplanner'
      }
    ]
  },
  {
    id: 386,
    name: 'meta tags',
    creator: 'frankniu',
    description: 'Search Engine Optimization (SEO) for Ruby on Rails applications.',
    skills: [ 'Ruby', 'HTML', 'Shell' ],
    tags: [
      'meta tags',
      'opengraph',
      'opengraph tags',
      'rails',
      'ruby',
      'search engine optimization',
      'seo',
      'seo meta',
      'seotools',
      'twitter cards',
      'webmasters'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/kpumuk/meta-tags' } ]
  },
  {
    id: 387,
    name: 'react pwa',
    creator: 'zealptl',
    description: 'An upgradable boilerplate for Progressive web applications (PWA) with server side rendering, build with SEO in mind and achieving max page speed and optimized user experience.',
    skills: [
      'TypeScript',
      'JavaScript',
      'Shell',
      'SCSS',
      'Dockerfile',
      'CSS'
    ],
    tags: [
      'babel',       'code splitting',
      'es7',         'expressjs',
      'hot reload',  'hsts',
      'hstspreload', 'javascript',
      'pwa',         'pwa apps',
      'react',       'reactpwa',
      'seo',         'srcset',
      'ssr',         'webpack4'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Atyantik/react-pwa' }
    ]
  },
  {
    id: 388,
    name: 'webpackmonitor',
    creator: 'joybiswas',
    description: 'A tool for monitoring webpack optimization metrics through the development process',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [ 'analyzer', 'monitoring', 'optimization', 'plugin', 'webpack' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/webpackmonitor/webpackmonitor'
      }
    ]
  },
  {
    id: 389,
    name: 'quicktemplate',
    creator: 'akbarhaider',
    description: 'Fast, powerful, yet easy to use template engine for Go. Optimized for speed, zero memory allocations in hot paths. Up to 20x faster than html/template',
    skills: [ 'Go' ],
    tags: [ 'fast', 'golang', 'template engine' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/valyala/quicktemplate'
      }
    ]
  },
  {
    id: 390,
    name: 'pytorch optimizer',
    creator: 'refatmonjur',
    description: 'torch-optimizer -- collection of optimizers for Pytorch',
    skills: [ 'Python', 'Makefile' ],
    tags: [
      'accsgd',        'adabelief',
      'adabound',      'adamod',
      'apollo',        'diffgrad',
      'hacktoberfest', 'lamb',
      'lookahead',     'novograd',
      'optimizer',     'pytorch',
      'sgdp',          'shampoo',
      'swats',         'yogi'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jettify/pytorch-optimizer'
      }
    ]
  },
  {
    id: 391,
    name: 'ceres solver',
    creator: 'mehedishohag',
    description: 'A large scale non-linear optimization library',
    skills: [ 'C++', 'CMake', 'Python', 'C', 'Starlark', 'Shell' ],
    tags: [
      'bfgs',
      'bundle adjustment',
      'c plus plus',
      'computer vision',
      'conjugate gradient',
      'gauss newton',
      'l bfgs',
      'levenberg marquardt',
      'nonlinear least squares',
      'nonlinear optimization algorithms',
      'nonlinear programming',
      'numerical optimization',
      'structure from motion',
      'trust region'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ceres-solver/ceres-solver'
      }
    ]
  },
  {
    id: 392,
    name: 'scikit optimize',
    creator: 'techlead',
    description: 'Sequential model-based optimization with a  `scipy.optimize` interface',
    skills: [ 'Python', 'Shell', 'Makefile' ],
    tags: [
      'bayesian optimization',
      'bayesopt',
      'binder',
      'hacktoberfest',
      'hyperparameter',
      'hyperparameter optimization',
      'hyperparameter search',
      'hyperparameter tuning',
      'machine learning',
      'optimization',
      'scientific computing',
      'scientific visualization',
      'scikit learn',
      'sequential recommendation',
      'visualization'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/scikit-optimize/scikit-optimize'
      }
    ]
  },
  {
    id: 393,
    name: 'u2f zero',
    creator: 'janedoe',
    description: 'U2F USB token optimized for physical security, affordability, and style',
    skills: [ 'C', 'Python', 'Shell', 'Assembly', 'XSLT', 'Makefile' ],
    tags: [ 'hardware', 'security', 'u2f' ],
    links: [ { type: 'GitHub', link: 'https://github.com/conorpp/u2f-zero' } ]
  },
  {
    id: 394,
    name: 'coq_nvim',
    creator: 'patrick',
    description: 'Fast as FUCK nvim completion. SQLite, concurrent scheduler, hundreds of hours of optimization.',
    skills: [
      'Python',
      'Lua',
      'PLpgSQL',
      'Vim script',
      'Dockerfile',
      'Batchfile'
    ],
    tags: [ 'completion', 'neovim', 'neovim plugin' ],
    links: [ { type: 'GitHub', link: 'https://github.com/ms-jpq/coq_nvim' } ]
  },
  {
    id: 395,
    name: 'soot',
    creator: 'saif',
    description: 'Soot - A Java optimization framework',
    skills: [
      'Java',  'TeX',
      'HTML',  'XSLT',
      'Limbo', 'Perl',
      'Shell', 'Makefile',
      'Julia', 'CSS'
    ],
    tags: [
      'analysis framework',
      'bytecode',
      'java',
      'java optimization framework',
      'jimple',
      'optimization',
      'soot',
      'static analysis'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/soot-oss/soot' } ]
  },
  {
    id: 396,
    name: 'Pretrained Language Model',
    creator: 'zealptl',
    description: "Pretrained language model and its related optimization techniques developed by Huawei Noah's Ark Lab.",
    skills: [ 'Python', 'Shell', 'C++', 'Dockerfile', 'Cython' ],
    tags: [
      'knowledge distillation',
      'large scale distributed',
      'model compression',
      'pretrained models',
      'quantization'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/huawei-noah/Pretrained-Language-Model'
      }
    ]
  },
  {
    id: 397,
    name: 'g2o',
    creator: 'justinsiu',
    description: 'g2o: A General Framework for Graph Optimization',
    skills: [
      'C++',      'CMake',
      'C',        'Python',
      'Yacc',     'Lex',
      'Shell',    'Batchfile',
      'Makefile'
    ],
    tags: [ 'c plus plus', 'g2o', 'graph optimization', 'slam' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/RainerKuemmerle/g2o'
      }
    ]
  },
  {
    id: 398,
    name: 'image optimizer',
    creator: 'justinsiu',
    description: 'Easily optimize images using PHP',
    skills: [ 'PHP' ],
    tags: [
      'gif',
      'image',
      'jpeg',
      'optimizer',
      'performance',
      'php',
      'png'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/spatie/image-optimizer'
      }
    ]
  },
  {
    id: 399,
    name: 'laravel page speed',
    creator: 'akbarhaider',
    description: 'Package to optimize your site automatically which results in a 35%+ optimization',
    skills: [ 'PHP', 'CSS', 'HTML', 'JavaScript' ],
    tags: [
      'blade template',
      'laravel',
      'laravel 5 package',
      'laravel blade minify',
      'laravel package',
      'minify html',
      'page speed'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/renatomarinho/laravel-page-speed'
      }
    ]
  },
  {
    id: 400,
    name: 'hyperas',
    creator: 'zealptl',
    description: 'Keras + Hyperopt: A very simple wrapper for convenient hyperparameter optimization',
    skills: [ 'Python', 'TeX' ],
    tags: [ 'hyperopt', 'hyperparameter optimization', 'keras' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/maxpumperla/hyperas'
      }
    ]
  },
  {
    id: 401,
    name: 'micromatch',
    creator: 'janedoe',
    description: "Highly optimized wildcard and glob matching library. Faster, drop-in replacement to minimatch and multimatch. Used by webpack, babel core, yarn, jest, taro, bulma, browser-sync, documentation.js, stylelint, nyc, ava, and many others! Please follow micromatch's author: https://github.com/jonschlinkert",
    skills: [ 'JavaScript' ],
    tags: [
      'bash',               'extended glob',
      'extglob',            'glob',
      'glob matching',      'glob pattern',
      'globbing',           'globby',
      'javascript',         'matcher',
      'micromatch',         'minimatch',
      'multimatch',         'node',
      'node glob',          'regex',
      'regular expression', 'tidelift',
      'wildcard',           'wildmat'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/micromatch/micromatch'
      }
    ]
  },
  {
    id: 402,
    name: 'joplin',
    creator: 'joma',
    description: 'Joplin - an open source note taking and to-do application with synchronisation capabilities for Windows, macOS, Linux, Android and iOS.',
    skills: [
      'TypeScript',  'JavaScript',
      'HTML',        'CSS',
      'Mustache',    'Handlebars',
      'Shell',       'Java',
      'Objective-C', 'SCSS',
      'Ruby',        'Starlark',
      'C',           'Swift',
      'Batchfile'
    ],
    tags: [
      'android',         'dropbox',
      'electron',        'enex files',
      'evernote',        'javascript',
      'joplin',          'nextcloud',
      'nodejs',          'note taking',
      'onedrive',        'react native',
      'synchronisation', 'web clipper',
      'webdav'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/laurent22/joplin' } ]
  },
  {
    id: 403,
    name: 'notable',
    creator: 'joma',
    description: "The Markdown-based note-taking app that doesn't suck.",
    skills: [ 'TypeScript' ],
    tags: [
      'cross platform',
      'electron',
      'linux',
      'mac',
      'markdown',
      'note',
      'react',
      'windows'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/notable/notable' } ]
  },
  {
    id: 404,
    name: 'vnote',
    creator: 'patrick',
    description: 'A pleasant note-taking platform.',
    skills: [
      'C++',
      'JavaScript',
      'CSS',
      'QMake',
      'HTML',
      'Python',
      'Shell',
      'Batchfile'
    ],
    tags: [
      'editor',
      'markdown',
      'mathjax',
      'note',
      'note taking',
      'uml',
      'vim',
      'vnote'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/vnotex/vnote' } ]
  },
  {
    id: 405,
    name: 'laverna',
    creator: 'tanviryouhana',
    description: 'Laverna is a JavaScript note taking application with Markdown editor and encryption support. Consider it like open source alternative to Evernote.',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [
      'laverna',
      'note taking',
      'peer to peer',
      'socket io',
      'webrtc',
      'websocket'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Laverna/laverna' } ]
  },
  {
    id: 406,
    name: 'paperwork',
    creator: 'refatmonjur',
    description: 'Paperwork - OpenSource note-taking & archiving alternative to Evernote, Microsoft OneNote & Google Keep',
    skills: [ 'Shell', 'Makefile' ],
    tags: [
      'docker',
      'documents',
      'evernote',
      'google keep',
      'microsoft onenote',
      'notebook',
      'notes',
      'opensource',
      'paperwork',
      'privacy'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/paperwork/paperwork'
      }
    ]
  },
  {
    id: 407,
    name: 'nb',
    creator: 'joma',
    description: 'CLI and local web plain text note‑taking, bookmarking, and archiving with linking, tagging, filtering, search, Git versioning & syncing, Pandoc conversion, + more, in a single portable script.',
    skills: [ 'Shell', 'Go', 'Makefile' ],
    tags: [
      'archiving',        'bash',
      'bookmark manager', 'bookmarks',
      'cli',              'command line',
      'git',              'knowledge base',
      'markdown',         'note taking',
      'notebook',         'notes',
      'notes app',        'pandoc',
      'productivity',     'shell',
      'sync',             'vim',
      'vscode',           'zettelkasten'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/xwmx/nb' } ]
  },
  {
    id: 408,
    name: 'Omni Notes',
    creator: 'tanzilbaraskar',
    description: 'Open source note-taking application for Android',
    skills: [ 'Java', 'HTML', 'Kotlin', 'SCSS' ],
    tags: [
      'android',    'crowdin',
      'evernote',   'free',
      'google',     'google keep',
      'java',       'note taking',
      'notebook',   'notes',
      'omni notes', 'open source',
      'play store'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/federicoiosue/Omni-Notes'
      }
    ]
  },
  {
    id: 409,
    name: 'orgzly android',
    creator: 'techlead',
    description: 'Outliner for taking notes and managing to-do lists',
    skills: [ 'Kotlin', 'Java' ],
    tags: [
      'android',
      'mobile',
      'notes',
      'org mode',
      'orgzly',
      'outliner',
      'productivity',
      'tasks',
      'todo'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/orgzly/orgzly-android'
      }
    ]
  },
  {
    id: 410,
    name: 'GitJournal',
    creator: 'justinsiu',
    description: 'Mobile first Note Taking integrated with Git',
    skills: [
      'Dart',  'Shell',
      'Swift', 'Objective-C',
      'CMake', 'Ruby',
      'C++',   'HTML',
      'Java',  'Makefile',
      'C'
    ],
    tags: [
      'git',
      'google keep',
      'journal',
      'knowledge graph',
      'knowledge management',
      'markdown',
      'memex',
      'note taking',
      'notes',
      'notes app'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/GitJournal/GitJournal'
      }
    ]
  },
  {
    id: 411,
    name: 'neuron',
    creator: 'joybiswas',
    description: 'Future-proof note-taking and publishing based on Zettelkasten',
    skills: [ 'Haskell', 'Nix', 'Shell' ],
    tags: [ 'blog', 'note taking', 'static site', 'zettelkasten' ],
    links: [ { type: 'GitHub', link: 'https://github.com/srid/neuron' } ]
  },
  {
    id: 412,
    name: 'notea',
    creator: 'frankniu',
    description: '📒 Self hosted note taking app stored on S3',
    skills: [ 'TypeScript', 'JavaScript', 'Dockerfile' ],
    tags: [ 'docker', 'markdown', 'minio', 'note taking', 's3' ],
    links: [ { type: 'GitHub', link: 'https://github.com/QingWei-Li/notea' } ]
  },
  {
    id: 413,
    name: 'notes',
    creator: 'abdulimtiaz',
    description: ':pencil: Simple delightful note taking, with more unix and less lock-in.',
    skills: [ 'Shell', 'Roff', 'Makefile' ],
    tags: [
      'markdown',
      'note taking',
      'notes',
      'productivity',
      'shell script',
      'sync',
      'unix',
      'zsh'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/pimterry/notes' } ]
  },
  {
    id: 414,
    name: 'crossnote',
    creator: 'tufayelahmed',
    description: '📝 An interesting markdown note taking application',
    skills: [ 'JavaScript', 'TypeScript', 'HTML', 'Nix', 'CSS' ],
    tags: [ 'git', 'markdown', 'note', 'notebook', 'notebooks', 'notes' ],
    links: [ { type: 'GitHub', link: 'https://github.com/0xGG/crossnote' } ]
  },
  {
    id: 415,
    name: 'MarkNote',
    creator: 'joma',
    description: '📑MarkNote: An open sourced markdown note-taking application for Android, support many features for markdown notes, mathjax, table, list etc.',
    skills: [ 'Java' ],
    tags: [
      'android',
      'app',
      'markdown editor',
      'material design',
      'need help',
      'note taking app'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Shouheng88/MarkNote'
      }
    ]
  },
  {
    id: 416,
    name: 'SwiftnessX',
    creator: 'tanzilbaraskar',
    description: 'A cross-platform note-taking & target-tracking app for penetration testers.',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [
      'bug bounty',
      'checklist',
      'electronjs',
      'penetration testing',
      'security tools'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ehrishirajsharma/SwiftnessX'
      }
    ]
  },
  {
    id: 417,
    name: 'notes',
    creator: 'mdrislam30',
    description: 'Note-taking application, write down your thoughts.',
    skills: [
      'C++',
      'Objective-C++',
      'QMake',
      'Shell',
      'Inno Setup',
      'CSS',
      'Makefile'
    ],
    tags: [ 'c plus plus', 'cross platform', 'notes', 'qt', 'qt5' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/nuttyartist/notes' }
    ]
  },
  {
    id: 418,
    name: 'fromscratch',
    creator: 'mehedishohag',
    description: 'Autosaving Scratchpad. A simple but smart note-taking app',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [
      'desktop',
      'electron',
      'fromscratch',
      'linux',
      'macos',
      'windows'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Kilian/fromscratch' }
    ]
  },
  {
    id: 419,
    name: 'bangle io',
    creator: 'anvinhtr',
    description: 'A web only WYSIWYG note taking app that saves notes locally in markdown format.',
    skills: [
      'TypeScript',
      'JavaScript',
      'CSS',
      'Prolog',
      'HTML',
      'Handlebars',
      'Shell'
    ],
    tags: [
      'knowledge graph',
      'local first',
      'markdown',
      'markdown notes',
      'note taker',
      'notes',
      'pwa',
      'react',
      'webworkers',
      'wysiwyg'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bangle-io/bangle-io'
      }
    ]
  },
  {
    id: 420,
    name: 'VSCodeNotebook',
    creator: 'techlead',
    description: '📝 Use VS Code as a reliable note-taking/journal application',
    skills: [ 'Python' ],
    tags: [
      'journal',
      'note taking',
      'notebook',
      'notes',
      'visual studio code',
      'vscode'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/aviaryan/VSCodeNotebook'
      }
    ]
  },
  {
    id: 421,
    name: 'Heimer',
    creator: 'justinsiu',
    description: 'Heimer is a simple cross-platform mind map, diagram, and note-taking tool written in Qt.',
    skills: [
      'C++',        'CMake',
      'Shell',      'Starlark',
      'HTML',       'Python',
      'Dockerfile', 'Perl',
      'Batchfile'
    ],
    tags: [
      'cplusplus',   'cplusplus 17',
      'diagram',     'editor',
      'flowchart',   'learning',
      'linux app',   'mind mapping',
      'mindmap',     'note taking',
      'optimizer',   'productivity',
      'qt',          'qt5',
      'qt6',         'studying',
      'windows app'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/juzzlin/Heimer' } ]
  },
  {
    id: 422,
    name: 'bangle.dev',
    creator: 'tanzilbaraskar',
    description: 'Collection of higher level rich text editing tools. It powers the local only note taking app https://bangle.io',
    skills: [ 'JavaScript', 'TypeScript', 'CSS', 'Shell', 'Prolog' ],
    tags: [
      'draftjs',
      'editor',
      'prosemirror',
      'react',
      'rich text editor',
      'text editor',
      'wysiwyg',
      'wysiwyg editor'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bangle-io/bangle.dev'
      }
    ]
  },
  {
    id: 423,
    name: 'context note',
    creator: 'joma',
    description: 'A note-taking chrome extension: taking notes on the web with their context.',
    skills: [ 'Vue', 'TypeScript', 'CSS' ],
    tags: [
      'chrome extension',
      'context',
      'note taking',
      'notebook',
      'productivity',
      'tag',
      'vite',
      'vue3 typescript'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/betterRunner/context-note'
      }
    ]
  },
  {
    id: 424,
    name: 'WizNotePlus',
    creator: 'saif',
    description: 'A community-driven cross-platform note-taking client.',
    skills: [
      'C++',         'JavaScript',
      'Objective-C', 'Objective-C++',
      'CMake',       'Inno Setup',
      'HTML',        'CSS',
      'Shell',       'C',
      'Python',      'Qt Script',
      'POV-Ray SDL', 'Dockerfile',
      'PowerShell',  'QMake',
      'Makefile'
    ],
    tags: [ 'note taking' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/altairwei/WizNotePlus'
      }
    ]
  },
  {
    id: 425,
    name: 'zk',
    creator: 'akbarhaider',
    description: 'A plain text note-taking assistant',
    skills: [ 'Go', 'Makefile' ],
    tags: [ 'cli', 'notes', 'second brain', 'wiki', 'zettelkasten' ],
    links: [ { type: 'GitHub', link: 'https://github.com/mickael-menu/zk' } ]
  },
  {
    id: 426,
    name: 'DailyNotes',
    creator: 'frankniu',
    description: 'App for taking notes and tracking tasks on a daily basis',
    skills: [
      'Vue',
      'Python',
      'TypeScript',
      'HTML',
      'JavaScript',
      'Mako',
      'Dockerfile',
      'Shell'
    ],
    tags: [ 'docker', 'flask', 'typescript', 'vue' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/m0ngr31/DailyNotes' }
    ]
  },
  {
    id: 427,
    name: 'Notzz App',
    creator: 'joybiswas',
    description: '📝 A Simple Note-Taking App built to demonstrate the use of Modern Android development tools - (Kotlin, Coroutines, State Flow, Hilt-Dependency Injection, Jetpack DataStore, Architecture Components, MVVM, Room, Material Design Components).',
    skills: [ 'Kotlin' ],
    tags: [
      'android',
      'android app',
      'android architecture',
      'android development',
      'android studio',
      'android ui',
      'architecture',
      'couroutine',
      'datastore android',
      'hacktoberfest',
      'hilt android',
      'jetpack navigation',
      'kotlin android',
      'kotlin coroutines',
      'material design',
      'mvvm android',
      'recyclerview',
      'room database',
      'room persistence library',
      'stateflow'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/TheCodeMonks/Notzz-App'
      }
    ]
  },
  {
    id: 428,
    name: 'noteless',
    creator: 'bob',
    description: 'A Markdown-based note-taking app for mobile devices.',
    skills: [ 'Dart', 'CSS', 'Swift', 'Kotlin', 'Objective-C' ],
    tags: [
      'android',
      'asciimath',
      'attachments',
      'flutter',
      'hacktoberfest',
      'katex',
      'markdown',
      'mermaid diagrams',
      'note',
      'note taking'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/redsolver/noteless' }
    ]
  },
  {
    id: 429,
    name: 'jotsy',
    creator: 'akbarhaider',
    description: 'Jotsy is a self-hosted, free and open-source note taking app with a goal of simplicity in mind',
    skills: [ 'Rust', 'HTML', 'JavaScript', 'CSS', 'Dockerfile' ],
    tags: [
      'bootstrap',
      'css',
      'javascript',
      'notes app',
      'rust',
      'self hosted',
      'skytable',
      'web app'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ohsayan/jotsy' } ]
  },
  {
    id: 430,
    name: 'wreeto_official',
    creator: 'anvinhtr',
    description: 'Wreeto is an open source note-taking, knowledge management and wiki system.',
    skills: [ 'JavaScript', 'Ruby', 'HTML', 'SCSS', 'Shell', 'Dockerfile' ],
    tags: [
      'docker',
      'knowledge management',
      'note taking',
      'notes',
      'notetaking applications',
      'rails',
      'rails framework',
      'research',
      'ruby',
      'wiki'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/chrisvel/wreeto_official'
      }
    ]
  },
  {
    id: 431,
    name: 'Scarlet Notes',
    creator: 'refatmonjur',
    description: 'Simple yet powerful rich note taking android application, with a lot of flexibilty of usage',
    skills: [ 'Kotlin', 'Java' ],
    tags: [ 'android', 'app' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/BijoySingh/Scarlet-Notes'
      }
    ]
  },
  {
    id: 432,
    name: 'flutter keep',
    creator: 'saif',
    description: 'A note-taking app built with Flutter + Firebase',
    skills: [
      'Dart',        'Ruby',
      'TypeScript',  'Shell',
      'HTML',        'JavaScript',
      'Kotlin',      'Swift',
      'Objective-C'
    ],
    tags: [ 'firebase', 'firestore', 'flutter', 'note taking' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/xinthink/flutter-keep'
      }
    ]
  },
  {
    id: 433,
    name: 'neuron.nvim',
    creator: 'refatmonjur',
    description: 'Make neovim the best note taking application',
    skills: [ 'Lua' ],
    tags: [
      'asynchronous',
      'lua',
      'markdown',
      'neovim',
      'neovim plugin',
      'notes',
      'plenary',
      'wiki',
      'zettelkasten'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/oberblastmeister/neuron.nvim'
      }
    ]
  },
  {
    id: 434,
    name: 'notes app',
    creator: 'abdulimtiaz',
    description: 'Note Taking App made with Flutter with Sqlite as database..',
    skills: [
      'Dart',        'C++',
      'CMake',       'Ruby',
      'HTML',        'Swift',
      'C',           'Kotlin',
      'Objective-C'
    ],
    tags: [ 'flutter', 'flutter apps', 'flutter ui', 'sqlite' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/bimsina/notes-app' }
    ]
  },
  {
    id: 435,
    name: 'zonote',
    creator: 'johndoe',
    description: 'Cross-platform desktop note-taking app. Sticky notes with Markdown and Tabs. All in one .txt file.',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [
      'desktop',
      'electron',
      'markdown',
      'note taking',
      'offline',
      'sticky notes',
      'tabs'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/zonetti/zonote' } ]
  },
  {
    id: 436,
    name: 'obsidian alfred',
    creator: 'justinsiu',
    description: 'Alfred workflow for Obsidian note-taking app. Open vaults and files in Obsidian.',
    skills: [ 'Makefile' ],
    tags: [ 'alfred workflow', 'obsidian' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hauselin/obsidian-alfred'
      }
    ]
  },
  {
    id: 437,
    name: 'Deer',
    creator: 'tanviryouhana',
    description: ':pencil2:A modern, fast, beautiful note taking app, built on Electron and React',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [
      'cross platform', 'electron',
      'javascript',     'js',
      'linux',          'macos',
      'note taking',    'notes',
      'notes app',      'productivity',
      'react',          'redux',
      'windows'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/abahmed/Deer' } ]
  },
  {
    id: 438,
    name: 'taskopen',
    creator: 'saif',
    description: 'Tool for taking notes and open urls with taskwarrior',
    skills: [ 'Perl', 'Shell', 'Makefile' ],
    tags: [ 'nim', 'taskwarrior' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/jschlatow/taskopen' }
    ]
  },
  {
    id: 439,
    name: 'flutter notes app',
    creator: 'johndoe',
    description: 'A notes taking app written in Flutter',
    skills: [ 'Dart', 'Objective-C', 'Java' ],
    tags: [ 'android', 'dark theme', 'dart', 'flutter', 'notes', 'sqflite' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/roshanrahman/flutter-notes-app'
      }
    ]
  },
  {
    id: 440,
    name: 'obsidian vimrc support',
    creator: 'tanviryouhana',
    description: 'A plugin for the Obsidian.md note-taking software',
    skills: [ 'TypeScript', 'JavaScript' ],
    tags: [ 'obsidian plugin' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/esm7/obsidian-vimrc-support'
      }
    ]
  },
  {
    id: 441,
    name: 'Opus',
    creator: 'tanviryouhana',
    description: 'minimal note-taking app',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [ 'electron', 'note taking', 'writing' ],
    links: [ { type: 'GitHub', link: 'https://github.com/pacocoursey/Opus' } ]
  },
  {
    id: 442,
    name: 'brainstorm',
    creator: 'techlead',
    description: 'Project-brainstorm is a multi-purpose note-taking application which excells at free writing, prototyping, task lists and cheat sheets',
    skills: [ 'CSS', 'JavaScript', 'Less', 'HTML', "Cap'n Proto" ],
    tags: [ 'markdown', 'meteorjs', 'notes' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Azeirah/brainstorm' }
    ]
  },
  {
    id: 443,
    name: 'yi note',
    creator: 'tufayelahmed',
    description: 'YiNote browser extension - online video note taking tool',
    skills: [ 'JavaScript', 'SCSS', 'HTML', 'CSS' ],
    tags: [
      'bookmarks',
      'chrome extension',
      'elearning',
      'evernote',
      'firefox addon',
      'googledocs',
      'javascript',
      'mooc',
      'note taking',
      'onenote',
      'online video',
      'productivity',
      'youtube'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/shuowu/yi-note' } ]
  },
  {
    id: 444,
    name: 'tnote',
    creator: 'patrick',
    description: ':clipboard: A command line note taking app so simple that even your grandparents will love it!',
    skills: [ 'Python' ],
    tags: [
      'command line tool',
      'linux',
      'macos',
      'note taking',
      'python',
      'windows'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/tasdikrahman/tnote' }
    ]
  },
  {
    id: 445,
    name: 'Notepad',
    creator: 'janedoe',
    description: 'A simple, bare-bones, no-frills note taking app for Android.',
    skills: [ 'Java', 'Kotlin' ],
    tags: [ 'android', 'notepad' ],
    links: [ { type: 'GitHub', link: 'https://github.com/farmerbb/Notepad' } ]
  },
  {
    id: 446,
    name: 'SublimeNotebook',
    creator: 'johndoe',
    description: '📝 Make Sublime Text your favorite note taking/journal application',
    skills: [ 'Python' ],
    tags: [
      'diary',
      'diary application',
      'dropbox',
      'git diary',
      'git journal',
      'git notebook',
      'journal',
      'note taking',
      'notebook',
      'notes',
      'simple',
      'sublime text',
      'sublime text 3'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/aviaryan/SublimeNotebook'
      }
    ]
  },
  {
    id: 447,
    name: 'MicroPad Core',
    creator: 'anvinhtr',
    description: 'µPad (MicroPad) is an open digital note taking app',
    skills: [ 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Python' ],
    tags: [ 'hacktoberfest', 'notebook', 'notepad', 'notes' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/MicroPad/MicroPad-Core'
      }
    ]
  },
  {
    id: 448,
    name: 'mininote',
    creator: 'joma',
    description: '📔 A simple, self-hosted, encrypted Markdown note-taking editor',
    skills: [ 'Vue', 'JavaScript', 'HTML', 'CSS', 'Dockerfile' ],
    tags: [
      'devtools',
      'hacktoberfest',
      'markdown',
      'nodejs',
      'note taking',
      'notes',
      'self hosted',
      'vuejs',
      'wiki'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/muety/mininote' } ]
  },
  {
    id: 449,
    name: 'pervane',
    creator: 'joybiswas',
    description: 'Plain text file based note taking and knowledge base building tool, markdown editor, simple browser IDE.',
    skills: [ 'JavaScript', 'CSS', 'HTML', 'Python', 'Dockerfile', 'Shell' ],
    tags: [
      'ag',           'code',
      'code editor',  'demo',
      'editor',       'file',
      'file browser', 'flask',
      'ide',          'knowledge',
      'markdown',     'markdown editor',
      'md',           'python',
      'search',       'server'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/hakanu/pervane' } ]
  },
  {
    id: 450,
    name: 'em',
    creator: 'zealptl',
    description: 'A beautiful, minimalistic note-taking app for personal sensemaking.',
    skills: [
      'TypeScript',
      'JavaScript',
      'CSS',
      'HTML',
      'Handlebars',
      'Shell'
    ],
    tags: [
      'knowledge management',
      'note taking',
      'outliner',
      'sensemaking',
      'tools for thought'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/cybersemics/em' } ]
  },
  {
    id: 451,
    name: 'my notes',
    creator: 'patrick',
    description: 'Simple and fast note-taking in Chrome with Google Drive support.',
    skills: [ 'TypeScript', 'CSS', 'HTML', 'JavaScript' ],
    tags: [
      'chrome',
      'chrome extension',
      'extension',
      'google drive sync',
      'new tab',
      'newtab',
      'note taking',
      'note taking app',
      'notes',
      'notes app',
      'typescript'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/penge/my-notes' } ]
  },
  {
    id: 452,
    name: 'notable',
    creator: 'akbarhaider',
    description: 'Notable - a simple note taking application',
    skills: [
      'Go',
      'JavaScript',
      'HTML',
      'Shell',
      'Makefile',
      'Python',
      'CSS',
      'Dockerfile'
    ],
    tags: [ 'golang', 'linux', 'macos', 'notes', 'security' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/jmcfarlane/notable' }
    ]
  },
  {
    id: 453,
    name: 'tiddlyresearch',
    creator: 'patrick',
    description: 'Local and Anki-compatible note-taking tool based on TiddlyWiki',
    skills: [ 'HTML' ],
    tags: [
      'anki',       'brain',
      'knowledge',  'local',
      'management', 'notes',
      'research',   'srs',
      'tiddly',     'tiddlywiki',
      'wiki'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/postkevone/tiddlyresearch'
      }
    ]
  },
  {
    id: 454,
    name: 'node easy notes app',
    creator: 'tufayelahmed',
    description: 'A simple Note-Taking app built using Node.js, Express and Mongoose',
    skills: [ 'JavaScript' ],
    tags: [ 'express', 'mongodb', 'mongoose', 'node', 'rest api' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/callicoder/node-easy-notes-app'
      }
    ]
  },
  {
    id: 455,
    name: 'sublimeless_zk',
    creator: 'abdulimtiaz',
    description: 'A note taking app, Markdown editor, and text browser, featuring ID based wiki style links, and #tags, intended for zettelkasten method users. Loaded with tons of features like sophisticated tag search, note transclusion, support for note templates, bibliography support, etc. to make working in your Zettelkasten a joy 😄',
    skills: [ 'Python', 'Shell', 'Batchfile' ],
    tags: [
      'markdown',
      'markdown editor',
      'note taking',
      'wiki',
      'zettelkasten'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/renerocksai/sublimeless_zk'
      }
    ]
  },
  {
    id: 456,
    name: 'Codex',
    creator: 'tanviryouhana',
    description: 'A free note-taking software for programmers and Computer Science students',
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [
      'codex',
      'compsci',
      'computer science',
      'cs',
      'electron',
      'notebook',
      'notes',
      'notetaker',
      'notetaking',
      'notetaking applications',
      'programming'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/jcv8000/Codex' } ]
  },
  {
    id: 457,
    name: 'NoteTaker',
    creator: 'akbarhaider',
    description: 'A simple note taking app for macOS and iOS which uses Realm and CloudKit for syncing',
    skills: [ 'Swift', 'Objective-C', 'HTML' ],
    tags: [ 'cloudkit', 'ios', 'ios app', 'macos', 'macosx', 'swift' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/insidegui/NoteTaker'
      }
    ]
  },
  {
    id: 458,
    name: 'AlephNote',
    creator: 'techlead',
    description: 'Lightweight note taking client for Simplenote or Standard Notes (or simply local storage)',
    skills: [ 'C#', 'Batchfile', 'PowerShell' ],
    tags: [
      'desktop',      'nextcloud',
      'note',         'notes',
      'portable',     'simplenote',
      'standalone',   'standardfile',
      'standardnote', 'sync',
      'wpf'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Mikescher/AlephNote'
      }
    ]
  },
  {
    id: 459,
    name: 'VSNotes',
    creator: 'frankniu',
    description: 'Simple VS Code extension for plain text note taking.',
    skills: [ 'JavaScript' ],
    tags: [ 'note taking', 'notes', 'vscode', 'vscode extension' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/patleeman/VSNotes' }
    ]
  },
  {
    id: 460,
    name: 'zeta note',
    creator: 'patrick',
    description: 'Markdown LSP server for easy note-taking with cross-references and diagnostics.',
    skills: [ 'Rust', 'Shell' ],
    tags: [ 'language server', 'lsp', 'markdown', 'note taking', 'notes' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/artempyanykh/zeta-note'
      }
    ]
  },
  {
    id: 461,
    name: 'yana',
    creator: 'saif',
    description: 'Powerful note-taking app with nested documents, full-text search, rich-text editor, code snippet editor and more',
    skills: [ 'TypeScript', 'HTML' ],
    tags: [
      'app',
      'free',
      'notebook',
      'notes',
      'organization',
      'productivity',
      'scalable',
      'search',
      'yana'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/lukasbach/yana' } ]
  },
  {
    id: 462,
    name: 'benotes',
    creator: 'tanviryouhana',
    description: 'An open source self hosted notes and bookmarks taking web app.',
    skills: [
      'PHP',
      'Vue',
      'JavaScript',
      'SCSS',
      'Dockerfile',
      'Blade',
      'Shell',
      'Procfile'
    ],
    tags: [ 'bookmarks', 'laravel', 'lumen', 'notes', 'php', 'vue' ],
    links: [ { type: 'GitHub', link: 'https://github.com/fr0tt/benotes' } ]
  },
  {
    id: 463,
    name: 'notes cli',
    creator: 'tufayelahmed',
    description: 'Small markdown note taking CLI app playing nicely with your favorite editor and other CLI tools',
    skills: [ 'Go', 'Shell', 'Ruby' ],
    tags: [ 'command line tool', 'markdown', 'memo', 'note taking', 'notes' ],
    links: [ { type: 'GitHub', link: 'https://github.com/rhysd/notes-cli' } ]
  },
  {
    id: 464,
    name: 'Memento',
    creator: 'akbarhaider',
    description: 'Memento is a simple note taking app for Android',
    skills: [ 'Java', 'Python' ],
    tags: [ 'android', 'android application', 'note taking' ],
    links: [ { type: 'GitHub', link: 'https://github.com/yaa110/Memento' } ]
  },
  {
    id: 465,
    name: 'Notelin',
    creator: 'joybiswas',
    description: 'Note-taking app  for Android written in Kotlin',
    skills: [ 'Kotlin', 'Java' ],
    tags: [ 'android', 'kotlin', 'kotlin android', 'mvp' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ImangazalievM/Notelin'
      }
    ]
  },
  {
    id: 466,
    name: 'fiber note',
    creator: 'frankniu',
    description: 'A networked note-taking app, open and self-hosted, inspired by roam-research, obsidian and others.',
    skills: [ 'Ruby', 'TypeScript', 'HTML', 'JavaScript', 'CSS' ],
    tags: [
      'note taking',
      'obsidian',
      'prosemirror',
      'rails',
      'roamresearch'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/namiwang/fiber-note'
      }
    ]
  },
  {
    id: 467,
    name: 'Swiftness',
    creator: 'johndoe',
    description: 'A note-taking macOS app for penetration-testers.',
    skills: [ 'Swift' ],
    tags: [
      'bugbounty',
      'macos',
      'security tools',
      'vulnerability management'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ehrishirajsharma/Swiftness'
      }
    ]
  },
  {
    id: 468,
    name: 'RxTool',
    creator: 'joma',
    description: 'Android开发人员不得不收集的工具类集合 | 支付宝支付 | 微信支付（统一下单） | 微信分享 | Zip4j压缩（支持分卷压缩与加密） | 一键集成UCrop选择圆形头像 | 一键集成二维码和条形码的扫描与生成 | 常用Dialog | WebView的封装可播放视频 | 仿斗鱼滑动验证码 | Toast封装 | 震动 | GPS | Location定位 | 图片缩放 | Exif 图片添加地理位置信息（经纬度） | 蛛网等级 | 颜色选择器 | ArcGis | VTPK | 编译运行一下说不定会找到惊喜',
    skills: [ 'Kotlin', 'Java' ],
    tags: [
      'alipay',       'barcode',
      'dialog',       'java',
      'likeview',     'netspeed',
      'progressbar',  'qrcode',
      'seat',         'share',
      'shoppingview', 'sidebar',
      'toast',        'tools',
      'utils',        'wechatpay',
      'wxpay',        'zip4j'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Tamsiree/RxTool' } ]
  },
  {
    id: 469,
    name: 'ARKit CoreLocation',
    creator: 'justinsiu',
    description: 'Combines the high accuracy of AR with the scale of GPS data.',
    skills: [ 'Swift', 'Ruby', 'Objective-C' ],
    tags: [
      'arkit',
      'augmented reality',
      'corelocation',
      'gps data',
      'north calibration'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ProjectDent/ARKit-CoreLocation'
      }
    ]
  },
  {
    id: 470,
    name: 'open location code',
    creator: 'abdulimtiaz',
    description: `Open Location Code is a library to generate short codes, called "plus codes", that can be used as digital addresses where street addresses don't exist.`,
    skills: [
      'Java',     'JavaScript',
      'Go',       'C++',
      'C',        'Dart',
      'HTML',     'Python',
      'VBA',      'Rust',
      'PLpgSQL',  'Ruby',
      'Starlark', 'Shell',
      'CSS',      'Makefile'
    ],
    tags: [
      'c',                'cplusplus',
      'dart',             'geo',
      'golang',           'gps',
      'java',             'javascript',
      'latitude',         'longitude',
      'openlocationcode', 'pluscode',
      'python',           'ruby',
      'rust',             'street address'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/google/open-location-code'
      }
    ]
  },
  {
    id: 471,
    name: 'traccar',
    creator: 'mdrislam30',
    description: 'Traccar GPS Tracking System',
    skills: [ 'Java', 'Python', 'Shell', 'Inno Setup' ],
    tags: [ 'gps', 'gps tracking', 'hacktoberfest', 'java', 'traccar' ],
    links: [ { type: 'GitHub', link: 'https://github.com/traccar/traccar' } ]
  },
  {
    id: 472,
    name: 'X TRACK',
    creator: 'joma',
    description: 'A GPS bicycle speedometer that supports offline maps and track recording ',
    skills: [
      'C',          'C++',
      'Python',     'JavaScript',
      'Assembly',   'CMake',
      'CSS',        'Ruby',
      'Shell',      'Makefile',
      'Handlebars', 'Processing',
      'Batchfile',  'HTML'
    ],
    tags: [
      'bicycle',
      'gps',
      'gps tracking',
      'gpx',
      'lvgl',
      'mcu',
      'mvp',
      'offline maps',
      'speedometer'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/FASTSHIFT/X-TRACK' }
    ]
  },
  {
    id: 473,
    name: 'OpenMower',
    creator: 'joybiswas',
    description: "Let's upgrade cheap off-the-shelf robotic mowers to modern, smart RTK GPS based lawn mowing robots!",
    skills: [ 'HTML', 'C', 'C++', 'Gnuplot', 'Shell' ],
    tags: [
      'arduino',      'gps',
      'landscaping',  'lawn mower',
      'path finding', 'raspberry pi',
      'robomow',      'robot',
      'robotics',     'ros',
      'rtk'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ClemensElflein/OpenMower'
      }
    ]
  },
  {
    id: 474,
    name: 'Meshtastic device',
    creator: 'justinsiu',
    description: 'Device code for the Meshtastic ski/hike/fly/customizable open GPS radio',
    skills: [
      'C++',
      'C',
      'Assembly',
      'Python',
      'Shell',
      'Batchfile',
      'Dockerfile'
    ],
    tags: [
      'esp32',
      'gps',
      'heltec',
      'hiking',
      'lora',
      'mesh networks',
      'meshtastic',
      'nrf52',
      'ttgo',
      'ttgo tbeam'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/meshtastic/Meshtastic-device'
      }
    ]
  },
  {
    id: 475,
    name: 'gpslogger',
    creator: 'tanzilbaraskar',
    description: ':satellite: Lightweight GPS Logging Application For Android. ',
    skills: [ 'Java', 'CSS', 'JavaScript', 'HTML', 'Shell', 'PHP' ],
    tags: [
      'android',
      'android sdk',
      'dropbox',
      'gps',
      'gpslogger',
      'intellij',
      'java',
      'logging',
      'satellite'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/mendhak/gpslogger' }
    ]
  },
  {
    id: 476,
    name: 'LocoKit',
    creator: 'johndoe',
    description: 'Location, motion, and activity recording framework for iOS',
    skills: [ 'Swift', 'C', 'Ruby', 'Objective-C' ],
    tags: [
      'corelocation',
      'coremotion',
      'framework',
      'gps',
      'ios',
      'location',
      'swift'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/sobri909/LocoKit' } ]
  },
  {
    id: 477,
    name: 'phpgeo',
    creator: 'refatmonjur',
    description: 'Simple Yet Powerful Geo Library for PHP',
    skills: [ 'PHP', 'Makefile' ],
    tags: [
      'area calculator',
      'coordinates',
      'distance calculation',
      'douglas peucker',
      'ellipsoid',
      'geofence',
      'gps',
      'location',
      'php',
      'polyline',
      'simplify',
      'tracks',
      'vincenty'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/mjaschen/phpgeo' } ]
  },
  {
    id: 478,
    name: 'ESP32 Paxcounter',
    creator: 'zealptl',
    description: 'Wifi & BLE driven passenger flow metering with cheap ESP32 boards',
    skills: [ 'C++', 'C', 'JavaScript', 'Python', 'Java' ],
    tags: [
      'arduino',          'bme680',
      'corona warn app',  'covid 19',
      'dcf77',            'esp32',
      'gps',              'gps tracker',
      'gps tracking',     'heltec',
      'lopy',             'lora',
      'lorawan',          'macaddr',
      'platformio',       'pycom',
      'thethingsnetwork', 'ttgo',
      'ttn',              'wifi'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/cyberman54/ESP32-Paxcounter'
      }
    ]
  },
  {
    id: 479,
    name: 'gnss sdr',
    creator: 'mdrislam30',
    description: 'GNSS-SDR, an open-source software-defined GNSS receiver',
    skills: [
      'C++',    'C',
      'CMake',  'MATLAB',
      'Python', 'Shell',
      'Cuda',   'Csound'
    ],
    tags: [
      'c plus plus',
      'galileo',
      'glonass',
      'gnss',
      'gnss sdr',
      'gnuradio',
      'gps',
      'rtl sdr',
      'sdr',
      'signal processing',
      'software defined radio'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/gnss-sdr/gnss-sdr' }
    ]
  },
  {
    id: 480,
    name: 'shiny',
    creator: 'janedoe',
    description: 'A Xamarin Framework for Backgrounding & Device Hardware Services',
    skills: [ 'C#', 'PowerShell', 'Shell' ],
    tags: [
      'android',
      'ble',
      'bluetoothle',
      'geofences',
      'gps',
      'ios',
      'notifications',
      'sensors',
      'xamarin'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/shinyorg/shiny' } ]
  },
  {
    id: 481,
    name: 'china dictatorship',
    creator: 'techlead',
    description: `反中共政治宣传库。`,
    skills: [
      'HTML',                'Assembly',       'Shell',
      'JavaScript',          'Python',         'C',
      'xBase',               'Makefile',       'ActionScript',
      'OpenEdge ABL',        'LilyPond',       'Java',
      'Perl',                'LLVM',           'Common Lisp',
      'HyPhy',               'Objective-C',    'Scheme',
      'Limbo',               'Objective-J',    'Pascal',
      'Smali',               'Witcher Script', 'PostScript',
      'Jasmin',              'Fortran',        'Beef',
      'Apex',                'Mathematica',    'MAXScript',
      'Omgrofl',             'XSLT',           'VHDL',
      'q',                   'Curry',          'Roff',
      'Visual Basic .NET',   'Ruby',           'Q#',
      'Dart',                'Csound',         'C++',
      'COBOL',               'Mercury',        'Erlang',
      'Solidity',            'Yacc',           'VBA',
      'Zig',                 'Cuda',           'Oz',
      'Modula-2',            'D',              'Brainfuck',
      'Pug',                 'NWScript',       'Ada',
      'Processing',          'CoffeeScript',   'Nemerle',
      'AGS Script',          'Verilog',        'Fantom',
      'Lua',                 'eC',             'Dogescript',
      'RPGLE',               'CSS',            'SAS',
      'TeX',                 'Haxe',           'Cool',
      'Elixir',              'PLSQL',          'TSQL',
      'Modula-3',            'Ballerina',      'Standard ML',
      'GAML',                'BlitzBasic',     'LSL',
      'Go',                  'Batchfile',      'Golo',
      'Lasso',               'Vala',           'Smalltalk',
      'LOLCODE',             'Pony',           'Agda',
      'ABAP',                'Forth',          'Svelte',
      'Classic ASP',         'MATLAB',         'DTrace',
      'PureScript',          'HolyC',          'ColdFusion',
      'F*',                  'VBScript',       'Slim',
      'Scala',               'Genie',          'GDScript',
      'OCaml',               'Euphoria',       'Elm',
      'Pike',                'Idris',          'TypeScript',
      'Vim script',          'Haml',           'Gosu',
      'Prolog',              'Clean',          'BASIC',
      'Promela',             'Ceylon',         'Haskell',
      'Moocode',             'Raku',           'PureBasic',
      'J',                   'Awk',            'SCSS',
      'Red',                 'Less',           'ATS',
      'ooc',                 'sed',            'Rust',
      'Emacs Lisp',          'Zeek',           'XQuery',
      'C#',                  'Genero',         'Kotlin',
      'Rebol',               'AutoIt',         'DM',
      'Stylus',              'Sass',           'XProc',
      'REXX',                'AspectJ',        'Factor',
      'Game Maker Language', 'AppleScript',    'Berry',
      'Reason',              'Racket',         'PHP',
      'NewLisp',             'Hack',           'PigLatin',
      'LiveScript',          'PowerShell',     'Chapel',
      'Clojure',             'V',              'E',
      'Julia',               'Fancy',          'Self',
      'Fennel',              'GLSL',           'Hy',
      'Ioke',                'SuperCollider',  'Groovy',
      'Io',                  'Tea',            'APL',
      'Nit',                 'Swift',          'Squirrel',
      'Logtalk',             'R',              'Nu',
      'mIRC Script',         'MoonScript',     'Opa',
      'Nim',                 'AutoHotkey',     'Boo',
      'Eiffel',              'Arc',            'Shen',
      'Crystal',             'M',              'Ring',
      'Turing',              'Tcl',            'HiveQL',
      'M4'
    ],
    tags: [
      '996',
      'censorship',
      'censorship circumvention',
      'china',
      'china dictatorship',
      'chinese communist party',
      'covid 19',
      'covid 19 china',
      'dictator',
      'dictatorship',
      'falun gong',
      'gfw',
      'great firewall',
      'human rights',
      'shadowsocks',
      'socks5',
      'tiananmen',
      'totalitarian',
      'xi jinping',
      'xinjiang'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/cirosantilli/china-dictatorship'
      }
    ]
  },
  {
    id: 482,
    name: 'AndrOBD',
    creator: 'zealptl',
    description: 'Android OBD diagnostics with any ELM327 adapter',
    skills: [ 'Java', 'HTML', 'Shell', 'Batchfile' ],
    tags: [
      'accelerometer',
      'android',
      'android obd diagnostics',
      'bluetooth',
      'chart',
      'dashboard',
      'diagnostics',
      'elm327',
      'gps',
      'measurement',
      'mqtt',
      'obd',
      'plugin',
      'recording',
      'serial',
      'translation',
      'usb',
      'vehicle',
      'wifi'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/fr3ts0n/AndrOBD' } ]
  },
  {
    id: 483,
    name: 'gpxpy',
    creator: 'tanzilbaraskar',
    description: 'gpx-py is a python GPX parser. GPX (GPS eXchange Format) is an XML based file format for GPS tracks.',
    skills: [ 'Python', 'Makefile' ],
    tags: [ 'gps', 'gpx', 'gpx library', 'python', 'python3' ],
    links: [ { type: 'GitHub', link: 'https://github.com/tkrajina/gpxpy' } ]
  },
  {
    id: 484,
    name: 'LocationManager',
    creator: 'tanzilbaraskar',
    description: "Simplify getting user's location for Android",
    skills: [ 'Java' ],
    tags: [
      'android',
      'google play services',
      'gps',
      'location picker',
      'location services',
      'locationmanager',
      'network'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/yayaa/LocationManager'
      }
    ]
  },
  {
    id: 485,
    name: 'map matching',
    creator: 'patrick',
    description: 'The map matching functionality is now located in the main repository https://github.com/graphhopper/graphhopper#map-matching',
    skills: [ 'Java', 'JavaScript', 'CSS', 'HTML' ],
    tags: [
      'geospatial',
      'gps',
      'java',
      'map matching',
      'openstreetmap',
      'tracking'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/graphhopper/map-matching'
      }
    ]
  },
  {
    id: 486,
    name: 'MockGPS',
    creator: 'refatmonjur',
    description: 'Android application to fake GPS',
    skills: [ 'Java', 'HTML' ],
    tags: [ 'android application', 'mock location' ],
    links: [ { type: 'GitHub', link: 'https://github.com/Hilaver/MockGPS' } ]
  },
  {
    id: 487,
    name: 'gnss ins sim',
    creator: 'johndoe',
    description: 'Open-source GNSS + inertial navigation, sensor fusion simulator.  Motion trajectory generator, sensor models, and navigation ',
    skills: [ 'Python', 'C', 'CMake' ],
    tags: [
      'gnss',
      'gps',
      'imu',
      'inertial navigation systems',
      'integrated navigation'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Aceinna/gnss-ins-sim'
      }
    ]
  },
  {
    id: 488,
    name: 'exifr',
    creator: 'patrick',
    description: '📷 The fastest and most versatile JS EXIF reading library.',
    skills: [ 'JavaScript', 'HTML', 'CSS', 'TypeScript' ],
    tags: [
      'exif',        'gps',
      'heic',        'icc',
      'iptc',        'jfif',
      'jpg',         'metadata',
      'orientation', 'parser',
      'photo',       'png',
      'tiff',        'xmp'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/MikeKovarik/exifr' }
    ]
  },
  {
    id: 489,
    name: 'GPXSee',
    creator: 'techlead',
    description: 'GPS log file viewer and analyzer with support for GPX, TCX, KML, FIT, IGC, NMEA, SLF, SML, LOC, GPI, GeoJSON and OziExplorer files.',
    skills: [ 'C++', 'NSIS', 'C', 'QMake', 'Shell' ],
    tags: [
      'analyzer',         'fit',
      'garmin img',       'geojson',
      'geotagged photos', 'geotiff',
      'gps',              'gpx',
      'igc',              'kml',
      'mbtiles',          'nmea',
      'oziexplorer',      'rmaps',
      'slf',              'tcx',
      'tms',              'viewer',
      'wms',              'wmts'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/tumic0/GPXSee' } ]
  },
  {
    id: 490,
    name: 'NeoGPS',
    creator: 'joybiswas',
    description: 'NMEA and ublox GPS parser for Arduino, configurable to use as few as 10 bytes of RAM',
    skills: [ 'C++', 'C' ],
    tags: [ 'arduino', 'gps', 'nmea' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/SlashDevin/NeoGPS' }
    ]
  },
  {
    id: 491,
    name: 'traccar web',
    creator: 'akbarhaider',
    description: 'Traccar GPS Tracking System',
    skills: [ 'JavaScript', 'CSS', 'HTML', 'Python', 'Shell' ],
    tags: [ 'gps', 'gps tracking', 'hacktoberfest', 'javascript', 'traccar' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/traccar/traccar-web'
      }
    ]
  },
  {
    id: 492,
    name: 'gps',
    creator: 'akbarhaider',
    description: 'Guided Policy Search',
    skills: [ 'Python', 'C++', 'CMake', 'Protocol Buffer', 'Shell' ],
    tags: [
      'deep learning',
      'deep reinforcement learning',
      'reinforcement learning',
      'reinforcement learning algorithms',
      'robotics'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/cbfinn/gps' } ]
  },
  {
    id: 493,
    name: 'fmm',
    creator: 'refatmonjur',
    description: 'Fast map matching, an open source framework in C++',
    skills: [
      'C++',
      'Jupyter Notebook',
      'CMake',
      'Python',
      'JavaScript',
      'HTML',
      'SWIG',
      'CSS',
      'Dockerfile',
      'Shell'
    ],
    tags: [
      'fmm',
      'gis',
      'gps',
      'map match',
      'map matching',
      'match',
      'openstreetmap',
      'parrallel map matching',
      'python',
      'road network',
      'shapefile',
      'stmatch',
      'trajectory'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/cyang-kth/fmm' } ]
  },
  {
    id: 494,
    name: 'traccar client android',
    creator: 'refatmonjur',
    description: 'Traccar Client for Android',
    skills: [ 'Kotlin', 'Python' ],
    tags: [ 'android', 'gps', 'gps tracking', 'java', 'traccar client' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/traccar/traccar-client-android'
      }
    ]
  },
  {
    id: 495,
    name: 'Multi_Sensor_Fusion',
    creator: 'joybiswas',
    description: 'Multi-Sensor Fusion (GNSS, IMU, Camera) 多源多传感器融合定位 GPS/INS组合导航  PPP/INS紧组合',
    skills: [ 'C++', 'Python', 'CMake', 'Shell' ],
    tags: [
      'camera',     'fusion',
      'gnss',       'gps',
      'imu',        'multi sensor',
      'navigation', 'ppp',
      'vio',        'vision'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/2013fangwentao/Multi_Sensor_Fusion'
      }
    ]
  },
  {
    id: 496,
    name: 'comma2k19',
    creator: 'justinsiu',
    description: 'A driving dataset for the development and validation of fused pose estimators and mapping algorithms',
    skills: [ 'Jupyter Notebook', 'Python', 'Dockerfile' ],
    tags: [ 'dataset', 'glonass', 'gnss', 'gps', 'mapping', 'slam' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/commaai/comma2k19' }
    ]
  },
  {
    id: 497,
    name: 'pynmea2',
    creator: 'justinsiu',
    description: 'Python library for parsing the NMEA 0183 protocol (GPS)',
    skills: [ 'Python', 'Makefile' ],
    tags: [
      'gps',
      'gps data',
      'nmea parser',
      'nmea protocol',
      'nmea sentences',
      'nmea0183',
      'pynmea2',
      'python'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Knio/pynmea2' } ]
  },
  {
    id: 498,
    name: 'exifr',
    creator: 'refatmonjur',
    description: 'EXIF Reader',
    skills: [ 'Ruby' ],
    tags: [ 'exif data extraction', 'gps', 'image', 'jpeg', 'ruby', 'tiff' ],
    links: [ { type: 'GitHub', link: 'https://github.com/remvee/exifr' } ]
  },
  {
    id: 499,
    name: 'ARCore Location',
    creator: 'mdrislam30',
    description: 'Allows items to be placed within the AR world with real-world GPS coordinates using ARCore.',
    skills: [ 'Java' ],
    tags: [
      'android library',
      'annotations',
      'arcore',
      'arcore android',
      'arcore location',
      'augmented reality',
      'geolocation',
      'gps coordinates',
      'location based'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/appoly/ARCore-Location'
      }
    ]
  },
  {
    id: 500,
    name: 'navit',
    creator: 'joma',
    description: 'The open source (GPL v2) turn-by-turn navigation software for many OS',
    skills: [
      'C',           'C++',
      'Java',        'Perl',
      'Shell',       'CMake',
      'QML',         'XSLT',
      'Objective-C', 'Python',
      'PHP',         'Yacc',
      'Roff',        'HTML',
      'Smarty',      'M4',
      'Ruby',        'QMake',
      'JavaScript',  'Makefile'
    ],
    tags: [
      'android',
      'c',
      'gps',
      'gpsd',
      'hacktoberfest',
      'navigation',
      'navit',
      'openstreetmap'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/navit-gps/navit' } ]
  },
  {
    id: 501,
    name: 'iOS Open GPX Tracker',
    creator: 'zealptl',
    description: 'GPS Tracker app for iOS + WatchOS. Log your tracks without limits and share them; Open source GPX tracker app written in Swift',
    skills: [ 'Swift', 'HTML', 'C', 'Ruby' ],
    tags: [
      'gpx',
      'gpx files',
      'ios',
      'ios app',
      'ios swift',
      'iphone',
      'offline maps',
      'osm',
      'xcode'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/merlos/iOS-Open-GPX-Tracker'
      }
    ]
  },
  {
    id: 502,
    name: 'kr_autonomous_flight',
    creator: 'tufayelahmed',
    description: 'KR (KumarRobotics) autonomous flight system for GPS-denied quadrotors',
    skills: [ 'C++', 'Python', 'CMake', 'Shell', 'Dockerfile', 'C' ],
    tags: [
      'autonomous flight',
      'autonomous navigation',
      'autonomous quadcoptor',
      'autonomous uav',
      'ros',
      'uav'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/KumarRobotics/kr_autonomous_flight'
      }
    ]
  },
  {
    id: 503,
    name: 'mad location manager',
    creator: 'mehedishohag',
    description: 'Mad Location Manager is a library for GPS and Accelerometer data "fusion" with Kalman filter ',
    skills: [ 'Java', 'C++', 'Objective-C', 'Swift', 'C', 'QMake', 'Shell' ],
    tags: [
      'android',
      'android library',
      'geohash',
      'geohash algorithm',
      'gps tracking',
      'java',
      'kalman',
      'kalman filter',
      'maddevs',
      'noise filtering',
      'tracking application'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/maddevsio/mad-location-manager'
      }
    ]
  },
  {
    id: 504,
    name: 'SIM7000 LTE Shield',
    creator: 'bob',
    description: 'LTE CAT-M/NB-IoT Arduino-compatible shield with GNSS and temperature sensor. Library supports SIMCom 2G/3G/4G LTE/CAT-M/NB-IoT',
    skills: [ 'C++', 'C' ],
    tags: [
      'arduino',
      'arduino ide',
      'cellular',
      'gnss',
      'gps',
      'iot',
      'low power',
      'lte',
      'microcontroller',
      'nb iot'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/botletics/SIM7000-LTE-Shield'
      }
    ]
  },
  {
    id: 505,
    name: 'nvim gps',
    creator: 'refatmonjur',
    description: 'Simple statusline component that shows what scope you are working inside',
    skills: [ 'Scheme', 'Lua', 'Vim script' ],
    tags: [
      'lua',
      'neovim',
      'neovim plugin',
      'nvim',
      'nvim plugin',
      'nvim treesitter',
      'treesitter'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/SmiteshP/nvim-gps' }
    ]
  },
  {
    id: 506,
    name: 'OpenTracks',
    creator: 'bob',
    description: 'OpenTracks is a sport tracking application that completely respects your privacy.',
    skills: [ 'Java', 'Shell', 'Ruby' ],
    tags: [
      'android',
      'bluetooth low energy',
      'gps',
      'heartrate',
      'offline',
      'outdoor',
      'privacy',
      'sport',
      'tracking'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/OpenTracksApp/OpenTracks'
      }
    ]
  },
  {
    id: 507,
    name: 'NaveGo',
    creator: 'bob',
    description: 'NaveGo: an open-source MATLAB/GNU Octave toolbox for processing integrated navigation systems and performing inertial sensors analysis.',
    skills: [ 'MATLAB' ],
    tags: [
      'allan variance',
      'gnss',
      'gnss systems',
      'gnu octave',
      'gnu octave toolbox',
      'gps',
      'imu',
      'inertial sensors',
      'integrated navigation',
      'lidar',
      'lidar slam',
      'matlab toolbox',
      'navego',
      'navigation',
      'sensors simulation',
      'simulation framework'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/rodralez/NaveGo' } ]
  },
  {
    id: 508,
    name: 'GPRS_C_SDK',
    creator: 'saif',
    description: 'Ai-Thinker A9/A9G GPRS (with GPS(A9G)) module C development SDK',
    skills: [
      'C',         'C++',
      'Makefile',  'Smarty',
      'Ruby',      'CMake',
      'Shell',     'Perl',
      'Python',    'Objective-C',
      'Batchfile'
    ],
    tags: [
      '8955',      'a9',
      'a9g',       'ai thinker',
      'aithinker', 'c',
      'gprs',      'gps',
      'gsm',       'pudding',
      'rda',       'rda8955',
      'sdk'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Ai-Thinker-Open/GPRS_C_SDK'
      }
    ]
  },
  {
    id: 509,
    name: 'ulogger server',
    creator: 'akbarhaider',
    description: 'μlogger • web viewer for tracks uploaded with μlogger mobile client',
    skills: [
      'JavaScript',
      'PHP',
      'CSS',
      'PLpgSQL',
      'Shell',
      'Dockerfile',
      'Hack'
    ],
    tags: [ 'geolocation', 'gps', 'viewer', 'web' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bfabiszewski/ulogger-server'
      }
    ]
  },
  {
    id: 510,
    name: 'laika',
    creator: 'janedoe',
    description: 'Simple Python GNSS processing library',
    skills: [ 'Python' ],
    tags: [ 'glonass', 'gnss', 'gps', 'hacktoberfest', 'rtklib' ],
    links: [ { type: 'GitHub', link: 'https://github.com/commaai/laika' } ]
  },
  {
    id: 511,
    name: 'Trail Sense',
    creator: 'zealptl',
    description: "An Android app that uses your phone's sensors to assist with wilderness treks or survival situations.",
    skills: [ 'Kotlin', 'Python', 'Batchfile' ],
    tags: [
      'altimeter',  'altitude',
      'android',    'backpacking',
      'barometer',  'beacons',
      'camping',    'compass',
      'gps',        'hiking',
      'moon',       'navigation',
      'sensors',    'sunset',
      'survival',   'survival situations',
      'weather',    'weather forecasting',
      'wilderness'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/kylecorry31/Trail-Sense'
      }
    ]
  },
  {
    id: 512,
    name: 'gpmf parser',
    creator: 'mdrislam30',
    description: 'Parser for GPMF™ formatted telemetry data used within GoPro® cameras.',
    skills: [ 'C', 'CMake', 'Shell', 'Dockerfile' ],
    tags: [
      'accelerometer',
      'gopro',
      'gopro camera',
      'gps',
      'gryo',
      'mp4 video',
      'sdk',
      'sensor data',
      'telemetry'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/gopro/gpmf-parser' }
    ]
  },
  {
    id: 513,
    name: 'Beagle_SDR_GPS',
    creator: 'joma',
    description: 'KiwiSDR: BeagleBone web-accessible shortwave receiver and software-defined GPS',
    skills: [
      'C++',          'C',
      'JavaScript',   'Verilog',
      'Shell',        'CSS',
      'Makefile',     'SCSS',
      'Less',         'Assembly',
      'Perl',         'SystemVerilog',
      'Tcl',          'HTML',
      'MATLAB',       'CMake',
      'Pascal',       'PHP',
      'OpenEdge ABL', 'sed'
    ],
    tags: [
      '14 bit adc',    'beagle',
      'cape',          'fpga',
      'gps',           'hf',
      'open source',   'pcb',
      'sdr',           'shortwave',
      'verilog',       'vlf',
      'web interface'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jks-prv/Beagle_SDR_GPS'
      }
    ]
  },
  {
    id: 514,
    name: 'gpsbabel',
    creator: 'mdrislam30',
    description: 'GPSBabel: convert, manipulate, and transfer data from GPS programs or GPS receivers. Open Source and supported on MacOS, Windows, Linux, and more. Pointy clicky GUI or a command line version...',
    skills: [
      'C++',
      'C',
      'Shell',
      'HTML',
      'CMake',
      'QMake',
      'Perl',
      'Makefile',
      'PowerShell',
      'Qt Script',
      'Roff',
      'Gnuplot',
      'XSLT',
      'Tcl',
      'AGS Script',
      'Batchfile',
      'Arc',
      'Dockerfile',
      'DIGITAL Command Language',
      'M4',
      'JavaScript'
    ],
    tags: [ 'gpsbabel', 'hacktoberfest', 'linux', 'macos' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/GPSBabel/gpsbabel' }
    ]
  },
  {
    id: 515,
    name: 'Overland iOS',
    creator: 'akbarhaider',
    description: '📌 GPS logger for iOS devices',
    skills: [ 'Objective-C', 'Ruby' ],
    tags: [
      'corelocation',
      'gps',
      'gps tracker',
      'gpslogger',
      'hacktoberfest',
      'ios',
      'trip'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/aaronpk/Overland-iOS'
      }
    ]
  },
  {
    id: 516,
    name: 'GPS_IMU_Kalman_Filter',
    creator: 'saif',
    description: 'Fusing GPS, IMU and Encoder sensors for accurate state estimation.',
    skills: [ 'C++', 'C', 'CMake' ],
    tags: [
      'autonomous agents',
      'autonomous vehicles',
      'ekf localization',
      'gps ins',
      'kalman filter',
      'state estimation'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/karanchawla/GPS_IMU_Kalman_Filter'
      }
    ]
  },
  {
    id: 517,
    name: 'maps',
    creator: 'zealptl',
    description: '🌍🌏🌎 The whole world fits inside your cloud!',
    skills: [ 'JavaScript', 'PHP', 'Vue', 'SCSS', 'Makefile', 'Hack', 'CSS' ],
    tags: [
      'gps',         'gpx',
      'graphhopper', 'hacktoberfest',
      'location',    'map',
      'mapbox',      'maps',
      'nextcloud',   'nextcloud app',
      'osrm',        'photos',
      'routing',     'tracking'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/nextcloud/maps' } ]
  },
  {
    id: 518,
    name: 'guidanceSteering',
    creator: 'tanviryouhana',
    description: 'Guidance Steering (AutoTrack) for Farming Simulator 22.',
    skills: [ 'Lua', 'PowerShell', 'Batchfile' ],
    tags: [
      'farming simulator',
      'farmingsimulator',
      'fs19',
      'fs22',
      'gps',
      'guidance steering',
      'lua'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/stijnwop/guidanceSteering'
      }
    ]
  },
  {
    id: 519,
    name: 'disco4g',
    creator: 'patrick',
    description: '4G/LTE softmod for the Parrot Disco',
    skills: [ 'Shell' ],
    tags: [
      '4g',            'airplane',
      'cellular',      'disco',
      'drone',         'e3372',
      'glympse',       'gps',
      'huawei',        'longrange',
      'lte',           'mobile',
      'network',       'parrot',
      'parrot disco',  'rc',
      'skycontroller', 'softmod',
      'tracker',       'zerotier'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/uavpal/disco4g' } ]
  },
  {
    id: 520,
    name: 'RxGps',
    creator: 'anvinhtr',
    description: 'Finding current location cannot be easier on Android !',
    skills: [ 'Java', 'Shell' ],
    tags: [
      'android', 'geocoding',
      'gps',     'location',
      'play',    'reactive',
      'rx',      'rxjava',
      'rxjava2', 'services'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/florent37/RxGps' } ]
  },
  {
    id: 521,
    name: 'Meshtastic Android',
    creator: 'akbarhaider',
    description: 'Android companion application for the Meshtastic ski/hike/fly/Signal-chat GPS radio',
    skills: [ 'Kotlin', 'AIDL' ],
    tags: [ 'android', 'gps', 'lora', 'meshtastic' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/meshtastic/Meshtastic-Android'
      }
    ]
  },
  {
    id: 522,
    name: 'gps',
    creator: 'justinsiu',
    description: 'your dependencies have arrived',
    skills: [ 'Go' ],
    tags: [ 'golang', 'library', 'package manager' ],
    links: [ { type: 'GitHub', link: 'https://github.com/sdboyer/gps' } ]
  },
  {
    id: 523,
    name: 'telegram nearby map',
    creator: 'abdulimtiaz',
    description: 'Discover the location of nearby Telegram users 📡🌍',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [
      'discover',   'gps',
      'locate',     'location',
      'map',        'nearby',
      'node',       'nodejs',
      'openlayers', 'osm',
      'privacy',    'tdlib',
      'telegram',   'trilateration'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/tejado/telegram-nearby-map'
      }
    ]
  },
  {
    id: 524,
    name: 'exiftool vendored.js',
    creator: 'bob',
    description: 'Fast, cross-platform Node.js access to ExifTool',
    skills: [ 'TypeScript', 'Perl', 'JavaScript' ],
    tags: [
      'cross platform', 'exif',
      'exiftool',       'gps',
      'image',          'images',
      'metadata',       'metadata extraction',
      'movies',         'nodejs',
      'photo',          'photographs',
      'photography',    'photos',
      'video',          'videos'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/photostructure/exiftool-vendored.js'
      }
    ]
  },
  {
    id: 525,
    name: 'LuaTelemetry',
    creator: 'tufayelahmed',
    description: 'FrSky SmartPort(S.Port), D-series, F.Port and TBS Crossfire telemetry on all Taranis and Horus transmitters',
    skills: [ 'Lua', 'Shell', 'C' ],
    tags: [
      'betaflight',
      'crossfire',
      'flight controller',
      'flight mode',
      'frsky',
      'gps',
      'horus',
      'horus transmitters',
      'inav',
      'lua',
      'lua telemetry',
      'quadcopter',
      'radar',
      'smartport',
      'taranis',
      'taranis x9d',
      'tbs crossfire telemetry',
      'telemetry',
      'transmitter',
      'uav'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/teckel12/LuaTelemetry'
      }
    ]
  },
  {
    id: 526,
    name: 'StaticMapping',
    creator: 'saif',
    description: 'Use LiDAR to map the static world',
    skills: [ 'C++', 'CMake', 'Shell', 'Cuda', 'Python', 'MATLAB' ],
    tags: [ 'gps', 'icp', 'imu', 'lidar', 'lidar point cloud', 'slam' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/EdwardLiuyc/StaticMapping'
      }
    ]
  },
  {
    id: 527,
    name: 'ublox',
    creator: 'zealptl',
    description: 'A driver for ublox gps',
    skills: [ 'C++', 'C', 'CMake', 'Python' ],
    tags: [ 'gps', 'ros', 'ros driver', 'ublox', 'ublox gps' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/KumarRobotics/ublox'
      }
    ]
  },
  {
    id: 528,
    name: 'HCKalmanFilter',
    creator: 'justinsiu',
    description: 'HCKalmanFilter is Swift implementation of Kalman filter algorithm intended to solve problem with GPS tracking',
    skills: [ 'Swift', 'Ruby' ],
    tags: [
      'gps correction',
      'gps tracker',
      'gps tracking',
      'ios',
      'kalman',
      'kalman filter',
      'kalman filtering',
      'swift'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Hypercubesoft/HCKalmanFilter'
      }
    ]
  },
  {
    id: 529,
    name: 'skylift',
    creator: 'mdrislam30',
    description: 'Wi-Fi Geolocation Spoofing with the ESP8266',
    skills: [ 'Jupyter Notebook', 'Python', 'C++', 'C' ],
    tags: [
      'arduino',
      'beacon broadcasting',
      'beacon frames',
      'esp8266',
      'geolocation',
      'geolocation spoofing',
      'gps',
      'spoof locations',
      'spoofing geolocation services',
      'wi fi',
      'wifi geolocation services'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/adamhrv/skylift' } ]
  },
  {
    id: 530,
    name: 'Google Maps 2018',
    creator: 'janedoe',
    description: 'Google maps, directions, markers, clusters, custom icons, real-time gps updates (like uber) and more',
    skills: [ 'Java' ],
    tags: [
      'android',
      'android google maps sdk',
      'directions api',
      'google maps android'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/mitchtabian/Google-Maps-2018'
      }
    ]
  },
  {
    id: 531,
    name: 'GPSLogger',
    creator: 'frankniu',
    description: 'A GPS logger for Android mobile devices',
    skills: [ 'Java' ],
    tags: [
      'accuracy',  'altitude',
      'android',   'basicairdata',
      'gps',       'gps logger',
      'gpslogger', 'gpx',
      'kml',       'logger'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/BasicAirData/GPSLogger'
      }
    ]
  },
  {
    id: 532,
    name: 'micropyGPS',
    creator: 'bob',
    description: 'A Full Featured GPS NMEA-0183  sentence parser for use with Micropython and the PyBoard embedded platform',
    skills: [ 'Python' ],
    tags: [ 'gps', 'gps library', 'micropython', 'python', 'python3' ],
    links: [ { type: 'GitHub', link: 'https://github.com/inmcm/micropyGPS' } ]
  },
  {
    id: 533,
    name: 'lwgps',
    creator: 'patrick',
    description: 'Lightweight GPS NMEA parser for embedded systems',
    skills: [ 'C', 'CMake' ],
    tags: [
      'embedded systems',
      'gps',
      'gps nmea parser',
      'nmea',
      'nmea parser',
      'nmea0183'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/MaJerle/lwgps' } ]
  },
  {
    id: 534,
    name: 'Hitrava',
    creator: 'anvinhtr',
    description: 'Convert your Huawei Health sport activities and import them in Strava.',
    skills: [ 'Python', 'Batchfile' ],
    tags: [
      'band',   'fitness',
      'gps',    'gt',
      'health', 'honor',
      'huawei', 'import',
      'magic',  'smartwatch',
      'sport',  'sports',
      'strava', 'tcx',
      'watch'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/CTHRU/Hitrava' } ]
  },
  {
    id: 535,
    name: 'node geo tz',
    creator: 'bob',
    description: 'A node.js module to find the timezone based on gps coordinates',
    skills: [ 'TypeScript' ],
    tags: [ 'datetime', 'javascript', 'timezone' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/evansiroky/node-geo-tz'
      }
    ]
  },
  {
    id: 536,
    name: 'react geolocated',
    creator: 'saif',
    description: 'React Higher-Order Component for using Geolocation API',
    skills: [ 'JavaScript', 'TypeScript' ],
    tags: [ 'geolocation', 'geolocation api', 'gps', 'react', 'react hoc' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/no23reason/react-geolocated'
      }
    ]
  },
  {
    id: 537,
    name: 'mocs',
    creator: 'joma',
    description: 'My Own Car System, a Go & Qt application for your car',
    skills: [ 'JavaScript', 'QML', 'Go', 'QMake' ],
    tags: [ 'car', 'go', 'gps', 'map', 'qt', 'rpi' ],
    links: [ { type: 'GitHub', link: 'https://github.com/akhenakh/mocs' } ]
  },
  {
    id: 538,
    name: 'Look4Sat',
    creator: 'frankniu',
    description: 'Open-source satellite tracker and pass predictor for Android, inspired by Gpredict',
    skills: [ 'Kotlin' ],
    tags: [
      'amsat',              'android',
      'gpredict',           'gps',
      'ham radio',          'hamlib',
      'hamradio',           'kotlin',
      'nasa',               'radio',
      'satcom',             'satellite',
      'satellite imagery',  'satellite prediction',
      'satellite tracking', 'satellites',
      'sdr',                'space',
      'spacex',             'starlink'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/rt-bishop/Look4Sat' }
    ]
  },
  {
    id: 539,
    name: 'ulogger android',
    creator: 'mehedishohag',
    description: 'μlogger • android application for real-time collection and publishing of geolocation data ',
    skills: [ 'Java' ],
    tags: [ 'android application', 'gps', 'location', 'logger' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bfabiszewski/ulogger-android'
      }
    ]
  },
  {
    id: 540,
    name: 'geolocation',
    creator: 'refatmonjur',
    description: 'Flutter geolocation plugin for Android and iOS.',
    skills: [ 'Dart', 'Kotlin', 'Swift', 'Ruby', 'Objective-C' ],
    tags: [
      'flutter',
      'flutter plugin',
      'geocoder',
      'geolocation',
      'gps',
      'location'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/loup-v/geolocation' }
    ]
  },
  {
    id: 541,
    name: 'gopro utils',
    creator: 'saif',
    description: 'Tools to parse metadata from GoPro Hero 5 & 6 cameras',
    skills: [ 'Go' ],
    tags: [ 'gopro', 'gps', 'telemetry' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/stilldavid/gopro-utils'
      }
    ]
  },
  {
    id: 542,
    name: 'wger',
    creator: 'akbarhaider',
    description: 'Self hosted FLOSS fitness/workout, nutrition and weight tracker written with Django',
    skills: [
      'Python',
      'HTML',
      'JavaScript',
      'CSS',
      'Dockerfile',
      'Smarty',
      'Shell',
      'SCSS'
    ],
    tags: [ 'django', 'fitness', 'gym', 'python', 'self hosted', 'workout' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/wger-project/wger' }
    ]
  },
  {
    id: 543,
    name: 'tapiriik',
    creator: 'joybiswas',
    description: 'tapiriik keeps your fitness in sync',
    skills: [ 'Python', 'HTML', 'JavaScript', 'CSS', 'Shell' ],
    tags: [ 'fitness', 'health', 'sync', 'tapiriik' ],
    links: [ { type: 'GitHub', link: 'https://github.com/cpfair/tapiriik' } ]
  },
  {
    id: 544,
    name: 'elevate',
    creator: 'saif',
    description: 'A sport app to "Elevate" your training experience and goals! Track your fitness and progressions over time. Analyse deeper your activities. And more...',
    skills: [
      'TypeScript',
      'HTML',
      'SCSS',
      'JavaScript',
      'CSS',
      'Dockerfile',
      'Shell'
    ],
    tags: [
      'angular',
      'chrome',
      'cycling',
      'electron',
      'running',
      'strava',
      'swim',
      'webextension'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/thomaschampagne/elevate'
      }
    ]
  },
  {
    id: 545,
    name: 'personal dashboard',
    creator: 'anvinhtr',
    description: ':bar_chart: Programmatically collecting and reporting various stats about myself daily',
    skills: [ 'Go', 'Makefile', 'Dockerfile' ],
    tags: [ 'dashboard', 'fitness', 'metrics', 'social' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ahmetb/personal-dashboard'
      }
    ]
  },
  {
    id: 546,
    name: 'react native health',
    creator: 'abdulimtiaz',
    description: 'A React Native package to interact with Apple HealthKit',
    skills: [
      'Objective-C',
      'JavaScript',
      'Java',
      'TypeScript',
      'Ruby',
      'Starlark'
    ],
    tags: [
      'apple healthkit',
      'fitness',
      'health',
      'healthkit',
      'ios',
      'react native'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/agencyenterprise/react-native-health'
      }
    ]
  },
  {
    id: 547,
    name: 'bodyweight fitness android',
    creator: 'bob',
    description: 'Bodyweight Fitness (Android)',
    skills: [ 'Kotlin', 'Java' ],
    tags: [
      'android',
      'app',
      'bodyweight',
      'fitness',
      'java',
      'kotlin',
      'mobile'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/mazurio/bodyweight-fitness-android'
      }
    ]
  },
  {
    id: 548,
    name: 'react native fitness',
    creator: 'tufayelahmed',
    description: ' A React Native module to interact with Apple Healthkit and Google Fit.',
    skills: [ 'Java', 'Objective-C', 'JavaScript', 'Ruby' ],
    tags: [
      'android',
      'apple health',
      'fitness',
      'google fit',
      'ios',
      'react native'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/OvalMoney/react-native-fitness'
      }
    ]
  },
  {
    id: 549,
    name: 'Hitrava',
    creator: 'patrick',
    description: 'Convert your Huawei Health sport activities and import them in Strava.',
    skills: [ 'Python', 'Batchfile' ],
    tags: [
      'band',   'fitness',
      'gps',    'gt',
      'health', 'honor',
      'huawei', 'import',
      'magic',  'smartwatch',
      'sport',  'sports',
      'strava', 'tcx',
      'watch'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/CTHRU/Hitrava' } ]
  },
  {
    id: 550,
    name: 'RxFit',
    creator: 'saif',
    description: '🏃Reactive Fitness API Library for Android and RxJava',
    skills: [ 'Java' ],
    tags: [
      'android',
      'fit',
      'google fit',
      'google play services',
      'googleapiclient',
      'rxjava',
      'rxjava2'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/patloew/RxFit' } ]
  },
  {
    id: 551,
    name: 'VRWorkout',
    creator: 'johndoe',
    description: 'High-intensity virtual reality workout game',
    skills: [ 'GDScript', 'GAP', 'HTML', 'GLSL' ],
    tags: [
      'fitness',
      'godot engine',
      'htc vive',
      'oculus quest',
      'oculus rift',
      'virtual reality'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/mgschwan/VRWorkout' }
    ]
  },
  {
    id: 552,
    name: 'gymnasticon',
    creator: 'frankniu',
    description: 'Make obsolete and/or proprietary exercise bikes work with popular cycling training apps like Zwift, TrainerRoad, Rouvy and more.',
    skills: [ 'JavaScript', 'Shell' ],
    tags: [
      'ant plus',
      'bike',
      'bluetooth',
      'cycling',
      'cycling power',
      'fitness',
      'flywheel',
      'garmin',
      'peloton',
      'raspberry pi',
      'reverse engineering',
      'schwinn',
      'wahoo',
      'zwift'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ptx2/gymnasticon' } ]
  },
  {
    id: 553,
    name: 'choochoo',
    creator: 'mehedishohag',
    description: 'Training Diary',
    skills: [ 'Python', 'JavaScript', 'Shell', 'HTML', 'Awk' ],
    tags: [
      'bokeh',            'database',
      'diary',            'docker image',
      'fitness',          'jupyter',
      'jupyter notebook', 'monitoring data',
      'pandas',           'postgresql',
      'python',           'series data',
      'sports',           'sqlalchemy',
      'sqlite',           'sqlite3',
      'statistics',       'time series'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/andrewcooke/choochoo'
      }
    ]
  },
  {
    id: 554,
    name: 'deep algotrading',
    creator: 'frankniu',
    description: 'A resource for learning about deep learning techniques from regression to LSTM and Reinforcement Learning using financial data and the fitness functions of algorithmic trading',
    skills: [ 'Jupyter Notebook', 'Python' ],
    tags: [
      'deep learning',
      'lstm',
      'neural network',
      'policy gradient',
      'reinforcement learning',
      'tensorflow'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/LiamConnell/deep-algotrading'
      }
    ]
  },
  {
    id: 555,
    name: 'FitTrack',
    creator: 'refatmonjur',
    description: 'Concept of a fitness app.',
    skills: [ 'Swift', 'Ruby' ],
    tags: [ 'animation', 'cocoapods', 'concept', 'ios', 'swift', 'yalantis' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Yalantis/FitTrack' }
    ]
  },
  {
    id: 556,
    name: 'OutRun',
    creator: 'janedoe',
    description: 'OutRun is an open-source, privacy oriented, outdoor fitness tracker.',
    skills: [ 'Swift', 'Ruby' ],
    tags: [ 'fitness', 'ios', 'swift' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/timfraedrich/OutRun'
      }
    ]
  },
  {
    id: 557,
    name: 'fastnfitness',
    creator: 'frankniu',
    description: 'FastNFitness Android app: Body, Cardio and Fitness tracking.',
    skills: [ 'Java' ],
    tags: [
      'bodybuilding',
      'fitness',
      'fitness app',
      'fitness goals',
      'fitness tracker',
      'weight tracking',
      'weightlifting'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/brodeurlv/fastnfitness'
      }
    ]
  },
  {
    id: 558,
    name: 'BodyProgress',
    creator: 'saif',
    description: 'Simple workout and progress tracking app for fitness freaks with Widget support.',
    skills: [ 'Swift' ],
    tags: [
      'coredata',
      'exercise',
      'swift',
      'swiftui',
      'widgetkit',
      'workouts'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/karthironald/BodyProgress'
      }
    ]
  },
  {
    id: 559,
    name: 'fitness_Android',
    creator: 'zealptl',
    description: 'Android健身app，在普通健身app的基础上加入了社交功能（类似KEEP、FEEL、轻+、减约、薄荷等） 毕设项目',
    skills: [ 'Java' ],
    tags: [
      'android',
      'androidstudio',
      'fitness',
      'fitness android',
      'server'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/djzhao627/fitness_Android'
      }
    ]
  },
  {
    id: 560,
    name: 'quantified self',
    creator: 'akbarhaider',
    description: 'Compare files from various activity trackers',
    skills: [ 'TypeScript', 'HTML', 'CSS', 'Shell', 'SCSS', 'JavaScript' ],
    tags: [
      'comparison',
      'fit',
      'fitness',
      'hacktoberfest',
      'hacktoberfest2020',
      'hacktoberfest2021',
      'heart rate',
      'heartbeat',
      'quantified self',
      'tcx',
      'tcx parser'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jimmykane/quantified-self'
      }
    ]
  },
  {
    id: 561,
    name: 'bodyweight fitness ios',
    creator: 'janedoe',
    description: 'Bodyweight Fitness (iOS)',
    skills: [ 'Swift', 'Ruby' ],
    tags: [ 'app', 'bodyweight', 'fitness', 'ios', 'mobile', 'swift' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/mazurio/bodyweight-fitness-ios'
      }
    ]
  },
  {
    id: 562,
    name: 'strava',
    creator: 'johndoe',
    description: 'PHP Class for the Strava API (v3) ',
    skills: [ 'PHP' ],
    tags: [ 'api client', 'cycling', 'fitness', 'strava' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/iamstuartwilson/strava'
      }
    ]
  },
  {
    id: 563,
    name: 'Stayfit',
    creator: 'joybiswas',
    description: ':iphone: :runner: :apple: Fitness application that’s used to keep track of your physical fitness data, daily calorie count, invite friends to work out together and ultimately get healthy.',
    skills: [ 'Java' ],
    tags: [
      'android',            'animation',
      'calorie calculator', 'calorie counter',
      'calories',           'calories tracker',
      'fitness',            'fitness app',
      'food',               'food classification',
      'food products',      'maps',
      'restaurant',         'restaurant menu',
      'search',             'sensors',
      'sms',                'voice recognition',
      'voice to text',      'wasabeef'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rahulmaddineni/Stayfit'
      }
    ]
  },
  {
    id: 564,
    name: 'fitly',
    creator: 'anvinhtr',
    description: 'Self hosted web analytics for endurance athletes',
    skills: [ 'Python', 'CSS', 'Shell', 'Dockerfile' ],
    tags: [
      'dash',
      'dash plotly',
      'dashboards',
      'data visualization',
      'fitness',
      'fitness tracker',
      'fitness tracking',
      'plotly',
      'plotly dash',
      'python'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ethanopp/fitly' } ]
  },
  {
    id: 565,
    name: 'hsac fitnesse fixtures',
    creator: 'saif',
    description: 'An environment to define and run integration tests. It contains Fitnesse fixture (base) classes and a baseline FitNesse installation.',
    skills: [
      'Java',
      'HTML',
      'CSS',
      'JavaScript',
      'Dockerfile',
      'Shell',
      'FreeMarker'
    ],
    tags: [
      'fitnesse fixture',
      'fixtures',
      'hsac fitnesse fixtures',
      'integration testing',
      'rest',
      'selenium',
      'soap'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/fhoeben/hsac-fitnesse-fixtures'
      }
    ]
  },
  {
    id: 566,
    name: 'GabLogics Fitness App',
    creator: 'justinsiu',
    description: 'Fitness application: https://gablogics.netlify.app/',
    skills: [ 'CSS', 'HTML', 'JavaScript', 'PHP' ],
    tags: [
      'calories',
      'calories tracker',
      'fitness',
      'fitness app',
      'gym',
      'spring',
      'spring boot'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/gabrieldim/GabLogics-Fitness-App'
      }
    ]
  },
  {
    id: 567,
    name: 'phormatics',
    creator: 'refatmonjur',
    description: 'Using A.I. and computer vision to build a virtual personal fitness trainer. (Most Startup-Viable Hack - HackNYU2018)',
    skills: [ 'Jupyter Notebook', 'Python', 'JavaScript', 'CSS' ],
    tags: [
      'artificial intelligence',
      'camera',
      'classification',
      'computer vision',
      'data science',
      'estimation',
      'fitness',
      'flask',
      'human',
      'keras',
      'model',
      'neural network',
      'opencv',
      'pose',
      'python',
      'recognition',
      'tensorflow',
      'webrtc'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jrobchin/phormatics'
      }
    ]
  },
  {
    id: 568,
    name: 'calories in',
    creator: 'joma',
    description: 'A web-based meal plan editor for people who prepare all of their food.',
    skills: [ 'TypeScript', 'HTML', 'Shell' ],
    tags: [ 'calories', 'fitness', 'meal planner', 'nutrition' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/vangelov/calories-in'
      }
    ]
  },
  {
    id: 569,
    name: 'FLEXS',
    creator: 'anvinhtr',
    description: 'Fitness landscape exploration sandbox for biological sequence design.',
    skills: [ 'Jupyter Notebook', 'Python', 'Makefile' ],
    tags: [
      'bayesian optimization',
      'benchmarking',
      'computational biology',
      'deep learning',
      'deep reinforcement learning',
      'machine learning',
      'protein design'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/samsinai/FLEXS' } ]
  },
  {
    id: 570,
    name: 'acme_fitness_demo',
    creator: 'akbarhaider',
    description: 'Deploys ACME Fitness application  across different environments',
    skills: [ 'Python' ],
    tags: [ 'docker', 'docker compose', 'kubernetes' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/vmwarecloudadvocacy/acme_fitness_demo'
      }
    ]
  },
  {
    id: 571,
    name: 'Fitness',
    creator: 'tufayelahmed',
    description: ' Flutter 仿微博客户端！A Weibo client application developed with Flutter, which supports both Android and iOS.',
    skills: [ 'Dart' ],
    tags: [ 'fitness', 'flutter weibo', 'wechat', 'weibo' ],
    links: [ { type: 'GitHub', link: 'https://github.com/Sky24n/Fitness' } ]
  },
  {
    id: 572,
    name: 'fitness ui',
    creator: 'joybiswas',
    description: 'A fitness app interface built with Flutter',
    skills: [ 'Dart', 'Ruby', 'Swift', 'Kotlin', 'Objective-C' ],
    tags: [ 'app', 'clone ui', 'dart', 'fitness', 'fitness app', 'flutter' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/feMoraes0/fitness-ui'
      }
    ]
  },
  {
    id: 573,
    name: 'SmartSpin2k',
    creator: 'anvinhtr',
    description: 'Transform your spin bike into a Smart Trainer!',
    skills: [ 'C++', 'HTML', 'C', 'CSS', 'Python', 'CMake' ],
    tags: [
      '3d printing', 'arduino',
      'bike',        'ble',
      'bluetooth',   'bluetooth low energy',
      'cycling',     'electronics',
      'esp32',       'exercise',
      'fitness',     'hardware',
      'meter',       'platformio',
      'power',       'spin',
      'spin bikes',  'stepper motor',
      'zwift'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/doudar/SmartSpin2k' }
    ]
  },
  {
    id: 574,
    name: 'flutter',
    creator: 'tufayelahmed',
    description: 'Flutter fitness/workout app for wger',
    skills: [
      'Dart',
      'Ruby',
      'HTML',
      'Shell',
      'Swift',
      'Kotlin',
      'Objective-C'
    ],
    tags: [ 'dart', 'fitness', 'flutter', 'gym', 'wger', 'workout' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/wger-project/flutter'
      }
    ]
  },
  {
    id: 575,
    name: 'one punch fitness',
    creator: 'joybiswas',
    description: 'A "One Punch Man"-inspired workout app!',
    skills: [ 'OCaml', 'JavaScript' ],
    tags: [
      'android', 'anime',
      'expo',    'ios',
      'js',      'jsx',
      'mobile',  'ocaml',
      'react',   'react native',
      'reason',  'reasonml'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/FiberJW/one-punch-fitness'
      }
    ]
  },
  {
    id: 576,
    name: 'easy fit',
    creator: 'joybiswas',
    description: 'Parse your .FIT files easily, directly from JS',
    skills: [ 'JavaScript' ],
    tags: [ 'es6 javascript', 'fitness', 'sports', 'wearables' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/pierremtb/easy-fit' }
    ]
  },
  {
    id: 577,
    name: 'data',
    creator: 'techlead',
    description: 'Empowering Fitness',
    skills: [ 'JavaScript' ],
    tags: [ 'fitness', 'open data', 'opendata' ],
    links: [ { type: 'GitHub', link: 'https://github.com/everkinetic/data' } ]
  },
  {
    id: 578,
    name: 'sds dust sensors arduino library',
    creator: 'mdrislam30',
    description: 'Library for Nova Fitness SDS dust sensors family (SDS011, SDS021)',
    skills: [ 'C++', 'C' ],
    tags: [
      'arduino',
      'dust sensor',
      'esp8266',
      'nodemcu',
      'nodemcu arduino',
      'pm10',
      'pm25',
      'sds',
      'sds011',
      'sds021',
      'sensor'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/lewapek/sds-dust-sensors-arduino-library'
      }
    ]
  },
  {
    id: 579,
    name: 'zwift workout file reference',
    creator: 'akbarhaider',
    description: 'Reference documentation for the Zwift workout file format',
    skills: [ 'Python', 'Makefile' ],
    tags: [
      'cycling',
      'documentation',
      'fitness',
      'indoor',
      'training',
      'xml',
      'zwift',
      'zwo'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/h4l/zwift-workout-file-reference'
      }
    ]
  },
  {
    id: 580,
    name: 'ha_strava',
    creator: 'refatmonjur',
    description: 'Pipe your Activity Data from Strava directly into Home Assistant',
    skills: [ 'Python' ],
    tags: [
      'custom component',
      'fitness',
      'fitness tracker',
      'hass',
      'home assistant',
      'strava',
      'strava data'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/codingcyclist/ha_strava'
      }
    ]
  },
  {
    id: 581,
    name: 'connectstats',
    creator: 'tufayelahmed',
    description: 'iOS Apps and utilities to analyse your fitness data from Garmin or Strava',
    skills: [
      'Objective-C', 'C++',
      'Swift',       'HTML',
      'Python',      'C',
      'Ruby',        'PHP',
      'CSS',         'Shell'
    ],
    tags: [
      'fitness',
      'garmin connect',
      'healthkit',
      'ipad app',
      'iphone app',
      'statistics',
      'strava'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/roznet/connectstats'
      }
    ]
  },
  {
    id: 582,
    name: 'MyFitness',
    creator: 'refatmonjur',
    description: ' MyFitness是一款开源的运动健身App，它可以帮助你对运动进行记录，运动的方式有健走，跑步和骑行',
    skills: [ 'Objective-C', 'HTML', 'Swift', 'C', 'Ruby' ],
    tags: [ 'fitness app', 'objective c', 'open source', 'sport' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/RickwangF/MyFitness'
      }
    ]
  },
  {
    id: 583,
    name: 'miscale2garmin',
    creator: 'akbarhaider',
    description: 'Mi Body Composition Scale 2 Garmin Connect',
    skills: [ 'Python', 'C++', 'Shell' ],
    tags: [
      'ble',                  'bluetooth',
      'bluetooth low energy', 'body composition',
      'esp32',                'fitness',
      'garmin',               'garmin connect',
      'iot',                  'mqtt',
      'raspberry',            'raspberry pi',
      'raspberrypi',          'scale',
      'usb',                  'usb bluetooth',
      'wifi',                 'xiaomi'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/RobertWojtowicz/miscale2garmin'
      }
    ]
  },
  {
    id: 584,
    name: 'huawei lpv2',
    creator: 'tanzilbaraskar',
    description: 'A pure Python implementation of Huawei BLE Link Protocol v2',
    skills: [ 'Python' ],
    tags: [ 'bluetooth low energy', 'fitness', 'huawei devices', 'python' ],
    links: [ { type: 'GitHub', link: 'https://github.com/zyv/huawei-lpv2' } ]
  },
  {
    id: 585,
    name: 'data at hand mobile',
    creator: 'joybiswas',
    description: 'Mobile application for exploring fitness data using both speech and touch interaction.',
    skills: [
      'TypeScript',
      'Swift',
      'Java',
      'Objective-C',
      'JavaScript',
      'Ruby',
      'Starlark'
    ],
    tags: [
      'fitbit',
      'fitness tracker',
      'mobile app',
      'multimodal interactions',
      'navigation',
      'smartphones',
      'speech',
      'visual data',
      'visualization'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/umdsquare/data-at-hand-mobile'
      }
    ]
  },
  {
    id: 586,
    name: 'quantifier',
    creator: 'joybiswas',
    description: 'A quantified-self app that tracks various fitness & productivity metrics.',
    skills: [ 'Ruby', 'Haml', 'HTML', 'SCSS', 'JavaScript', 'Shell', 'Sass' ],
    tags: [
      'bcycle',          'beeminder',
      'googlefit',       'habit tracking',
      'pocket',          'pocketapp',
      'productivity',    'quantified self',
      'quizlet',         'stackoverflow',
      'time management', 'trello',
      'typeracer'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/tsubery/quantifier' }
    ]
  },
  {
    id: 587,
    name: 'MuscleBook',
    creator: 'abdulimtiaz',
    description: '[ABANDONED] Muscle Book is an iOS workout tracker for strength training and body building.',
    skills: [
      'Swift',
      'C',
      'Objective-C',
      'C++',
      'Makefile',
      'M4',
      'Ruby',
      'Shell'
    ],
    tags: [ 'abandoned', 'fitness', 'ios', 'swift' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/cfilipov/MuscleBook'
      }
    ]
  },
  {
    id: 588,
    name: 'evolutionary serverless architectures with safe deployments',
    creator: 'janedoe',
    description: 'A sample implementation of an evolutionary architecture for a serverless application using safe deployments, automatically computing the fitness function at deployment time, with the possibility to rollback back if fitness is not improving.',
    skills: [ 'JavaScript' ],
    tags: [
      'aws',
      'aws apigateway',
      'aws lambda',
      'canary deployment',
      'cloudformation',
      'evolutionary architecture',
      'linear',
      'serverless',
      'serverless application model'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/danilop/evolutionary-serverless-architectures-with-safe-deployments'
      }
    ]
  },
  {
    id: 589,
    name: 'PolarHeartRateApplication',
    creator: 'tufayelahmed',
    description: 'Android Application that display Polar heart rate connected by bluetooth',
    skills: [ 'Java' ],
    tags: [ 'android application', 'bluetooth', 'fitness' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/marcolivierarsenault/PolarHeartRateApplication'
      }
    ]
  },
  {
    id: 590,
    name: 'exercises.json',
    creator: 'techlead',
    description: 'Open Public Domain Exercise Dataset in JSON format',
    skills: [ 'TypeScript', 'JavaScript' ],
    tags: [ 'exercises', 'fitness', 'open datasets', 'public domain' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/wrkout/exercises.json'
      }
    ]
  },
  {
    id: 591,
    name: 'hms health demo java',
    creator: 'akbarhaider',
    description: 'HMS Health demo code provides demo programs for your reference or usage. Developers can access the Huawei Health Platform and obtain sports & health data by integrating HUAWEI Health.',
    skills: [ 'Java' ],
    tags: [ 'fitness', 'health', 'health data', 'hms', 'huawei', 'sports' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/HMS-Core/hms-health-demo-java'
      }
    ]
  },
  {
    id: 592,
    name: 'one rep max',
    creator: 'bob',
    description: 'To some extent: A ClojureScript app for tracking workout data. But mostly: Some guy on the internet trying his hand at ClojureScript.',
    skills: [ 'Clojure', 'Shell', 'Ruby' ],
    tags: [
      'clojurescript',
      'exercise',
      'fitness',
      'mongohq',
      'single page app',
      'weightlifting',
      'workout'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jasonrudolph/one-rep-max'
      }
    ]
  },
  {
    id: 593,
    name: 'rn fitness tracker',
    creator: 'abdulimtiaz',
    description: 'React Native module to interact with Google Fit and Apple Healthkit.',
    skills: [ 'TypeScript', 'Objective-C', 'Java', 'C#', 'Ruby' ],
    tags: [ 'android', 'google fit', 'healthkit', 'ios', 'react native' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/kilohealth/rn-fitness-tracker'
      }
    ]
  },
  {
    id: 594,
    name: 'traindown',
    creator: 'bob',
    description: 'Public site',
    skills: [ 'HTML', 'CSS', 'Go', 'Makefile' ],
    tags: [
      'exercise',
      'fitness',
      'fitness tracker',
      'fitness tracking',
      'trainee',
      'trainer',
      'training'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/traindown/traindown'
      }
    ]
  },
  {
    id: 595,
    name: 'health blockchain',
    creator: 'tanviryouhana',
    description: 'A blockchain for fitness data demo',
    skills: [ 'CSS', 'JavaScript', 'Swift', 'Shell', 'HTML' ],
    tags: [
      'blockchain',
      'blockchain demos',
      'bluemix',
      'fitness',
      'health',
      'node js',
      'watson'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/IBM-Cloud/health-blockchain'
      }
    ]
  },
  {
    id: 596,
    name: 'garmin_health',
    creator: 'bob',
    description: 'Python 3.x library to access Garmin Connect Health API',
    skills: [ 'Python', 'Makefile' ],
    tags: [
      'fitness',
      'fitness tracker',
      'garmin',
      'garmin api',
      'garmin connect',
      'garmin watch',
      'python',
      'python3'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/tchellomello/garmin_health'
      }
    ]
  },
  {
    id: 597,
    name: 'streprogen',
    creator: 'joybiswas',
    description: 'The Python strength program generator.',
    skills: [ 'Python', 'HTML', 'TeX', 'Shell' ],
    tags: [ 'fitness', 'health', 'program', 'strength', 'training' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/tommyod/streprogen' }
    ]
  },
  {
    id: 598,
    name: 'gofit',
    creator: 'zealptl',
    description: 'Fitbit API data export to InfluxDB',
    skills: [ 'Go', 'Shell' ],
    tags: [ 'fitbit', 'fitness', 'grafana', 'health', 'influxdb' ],
    links: [ { type: 'GitHub', link: 'https://github.com/timatooth/gofit' } ]
  },
  {
    id: 599,
    name: 'bitcoin',
    creator: 'tanzilbaraskar',
    description: 'Bitcoin Core integration/staging tree',
    skills: [
      'C++',        'Python',
      'C',          'M4',
      'Shell',      'Makefile',
      'Sage',       'CMake',
      'Assembly',   'Scheme',
      'HTML',       'Objective-C++',
      'Dockerfile', "Cap'n Proto",
      'Java',       'QMake',
      'Batchfile'
    ],
    tags: [
      'bitcoin',
      'c plus plus',
      'cryptocurrency',
      'cryptography',
      'p2p'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/bitcoin/bitcoin' } ]
  },
  {
    id: 600,
    name: 'ccxt',
    creator: 'saif',
    description: 'A JavaScript / Python / PHP cryptocurrency trading API with support for more than 100 bitcoin/altcoin exchanges',
    skills: [ 'JavaScript', 'PHP', 'Python', 'Shell', 'Dockerfile', 'HTML' ],
    tags: [
      'altcoin',     'api',
      'arbitrage',   'bitcoin',
      'bot',         'btc',
      'crypto',      'cryptocurrency',
      'e commerce',  'eth',
      'ethereum',    'exchange',
      'invest',      'library',
      'market data', 'merchant',
      'strategy',    'trade',
      'trading'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ccxt/ccxt' } ]
  },
  {
    id: 601,
    name: 'ZeroNet',
    creator: 'tufayelahmed',
    description: 'ZeroNet - Decentralized websites using Bitcoin crypto and BitTorrent network',
    skills: [
      'JavaScript',
      'Python',
      'CSS',
      'CoffeeScript',
      'HTML',
      'Dockerfile',
      'Batchfile'
    ],
    tags: [
      'anonymity',
      'anticensorship',
      'bitcoin',
      'bittorrent',
      'decentralized',
      'internet freedom',
      'p2p',
      'python',
      'realtime',
      'tor',
      'torrent',
      'web'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/HelloZeroNet/ZeroNet'
      }
    ]
  },
  {
    id: 602,
    name: 'freqtrade',
    creator: 'tufayelahmed',
    description: 'Free, open source crypto trading bot',
    skills: [
      'Python',
      'Jinja',
      'Shell',
      'Jupyter Notebook',
      'Dockerfile',
      'HTML',
      'PowerShell',
      'Gnuplot'
    ],
    tags: [
      'algorithmic trading',
      'bitcoin',
      'cryptocurrencies',
      'cryptocurrency',
      'freqtrade',
      'python',
      'telegram bot',
      'trade',
      'trading bot'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/freqtrade/freqtrade'
      }
    ]
  },
  {
    id: 603,
    name: 'gekko',
    creator: 'joma',
    description: 'A bitcoin trading bot written in node - https://gekko.wizb.it/',
    skills: [ 'JavaScript', 'Vue', 'HTML', 'Dockerfile', 'Shell' ],
    tags: [
      'bitcoin',
      'exchange',
      'gekko',
      'trading bot',
      'trading strategies'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/askmike/gekko' } ]
  },
  {
    id: 604,
    name: 'abu',
    creator: 'tufayelahmed',
    description: '阿布量化交易系统(股票，期权，期货，比特币，机器学习) 基于python的开源量化交易，量化投资架构',
    skills: [ 'Python', 'Shell' ],
    tags: [
      'algorithmic trading',
      'bitcoin',
      'machine learning',
      'matplotlib',
      'numpy',
      'pandas',
      'quant',
      'quantitative trading',
      'stock',
      'trade',
      'trading'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/bbfamily/abu' } ]
  },
  {
    id: 605,
    name: 'solana',
    creator: 'abdulimtiaz',
    description: 'Web-Scale Blockchain for fast, secure, scalable, decentralized apps and marketplaces.',
    skills: [
      'Rust',     'TypeScript',
      'Shell',    'SCSS',
      'C',        'JavaScript',
      'Python',   'CSS',
      'Makefile', 'Dockerfile',
      'HTML',     'C++'
    ],
    tags: [
      'bitcoin',
      'blockchain',
      'ledger',
      'performance blockchain',
      'rust',
      'rustc',
      'solana'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/solana-labs/solana' }
    ]
  },
  {
    id: 606,
    name: 'lbry sdk',
    creator: 'bob',
    description: 'The LBRY SDK for building decentralized, censorship resistant, monetized, digital content apps.',
    skills: [ 'Python', 'Shell', 'Makefile', 'PowerShell' ],
    tags: [
      'bitcoin',
      'bittorrent',
      'blockchain',
      'cryptocurrency',
      'decentralized',
      'dht',
      'kademlia',
      'lbry',
      'p2p',
      'protocol',
      'python'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/lbryio/lbry-sdk' } ]
  },
  {
    id: 607,
    name: 'blockchain',
    creator: 'janedoe',
    description: 'A simple Blockchain in Python',
    skills: [ 'C#', 'Python', 'JavaScript', 'Dockerfile' ],
    tags: [ 'bitcoin', 'blockchain', 'cryptocurrency', 'flask', 'python' ],
    links: [ { type: 'GitHub', link: 'https://github.com/dvf/blockchain' } ]
  },
  {
    id: 608,
    name: 'blockchain_guide',
    creator: 'saif',
    description: 'Introduce blockchain related technologies, from theory to practice with bitcoin, ethereum and hyperledger.',
    skills: [ 'Go' ],
    tags: [
      'bitcoin',
      'blockchain',
      'book',
      'distributed ledger',
      'distributed system',
      'ethereum',
      'fintech',
      'hyperledger',
      'technology'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/yeasy/blockchain_guide'
      }
    ]
  },
  {
    id: 609,
    name: 'lnd',
    creator: 'tanviryouhana',
    description: 'Lightning Network Daemon ⚡️',
    skills: [ 'Go', 'Shell', 'Makefile', 'Dockerfile' ],
    tags: [
      'bitcoin',
      'blockchain',
      'cryptocurrency',
      'cryptography',
      'lightning',
      'lightning network',
      'micropayments',
      'payments',
      'peer to peer',
      'protocol'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/lightningnetwork/lnd'
      }
    ]
  },
  {
    id: 610,
    name: 'electrum',
    creator: 'saif',
    description: 'Electrum Bitcoin Wallet',
    skills: [
      'Python',     'Shell',
      'kvlang',     'Ruby',
      'Dockerfile', 'NSIS',
      'Java',       'Makefile',
      'GLSL'
    ],
    tags: [
      'bitcoin',
      'bitcoin wallet',
      'electrum',
      'lightning',
      'lightning network',
      'python'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/spesmilo/electrum' }
    ]
  },
  {
    id: 611,
    name: 'blackbird',
    creator: 'bob',
    description: 'Blackbird Bitcoin Arbitrage: a long/short market-neutral strategy',
    skills: [ 'C++', 'CMake', 'Makefile', 'Shell', 'C', 'Dockerfile' ],
    tags: [
      'arbitrage',
      'bitcoin',
      'c plus plus',
      'market neutrality',
      'trading bot'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/butor/blackbird' } ]
  },
  {
    id: 612,
    name: 'StockSharp',
    creator: 'mdrislam30',
    description: 'Algorithmic trading and quantitative trading open source platform to develop trading robots (stock markets, forex, crypto, bitcoins, and options).',
    skills: [ 'C#' ],
    tags: [
      'algorithmic trading engine',
      'backtesting',
      'bitcoins',
      'broker',
      'brokers',
      'c sharp',
      'crypto',
      'cryptocurrency',
      'finance',
      'fixprotocol',
      'forex',
      'hft trading',
      'interactive brokers',
      'markets',
      'quantitative finance',
      'stocks',
      'trading',
      'trading platform',
      'trading robots',
      'trading strategies'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/StockSharp/StockSharp'
      }
    ]
  },
  {
    id: 613,
    name: 'btcd',
    creator: 'techlead',
    description: 'An alternative full node bitcoin implementation written in Go (golang)',
    skills: [ 'Go', 'Shell', 'Makefile', 'Dockerfile' ],
    tags: [ 'bitcoin', 'btcd', 'hacktoberfest' ],
    links: [ { type: 'GitHub', link: 'https://github.com/btcsuite/btcd' } ]
  },
  {
    id: 614,
    name: 'bitcoinjs lib',
    creator: 'patrick',
    description: 'A javascript Bitcoin library for node.js and browsers.',
    skills: [ 'TypeScript', 'JavaScript' ],
    tags: [
      'bitcoin',
      'bitcoinjs',
      'bitcoinjs lib',
      'browserify',
      'javascript',
      'nodejs'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bitcoinjs/bitcoinjs-lib'
      }
    ]
  },
  {
    id: 615,
    name: 'bitcoinj',
    creator: 'mdrislam30',
    description: 'A library for working with Bitcoin',
    skills: [ 'Java', 'CSS', 'Shell' ],
    tags: [
      'bech32',     'bip141',
      'bip143',     'bip144',
      'bip173',     'bip32',
      'bip37',      'bip70',
      'bitcoin',    'bitcoinj',
      'blockchain', 'java',
      'library',    'segwit',
      'taproot'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/bitcoinj/bitcoinj' }
    ]
  },
  {
    id: 616,
    name: 'bisq',
    creator: 'saif',
    description: 'A decentralized bitcoin exchange network',
    skills: [
      'Java',        'Shell',
      'CSS',         'Makefile',
      'Batchfile',   'Roff',
      'Dockerfile',  'AppleScript',
      'Python',      'Procfile',
      'Vim Snippet'
    ],
    tags: [ 'bisq', 'bitcoin', 'exchange', 'java', 'p2p' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/bisq-network/bisq' }
    ]
  },
  {
    id: 617,
    name: 'Crypto Signal',
    creator: 'tufayelahmed',
    description: 'Github.com/CryptoSignal - #1 Quant Trading & Technical Analysis Bot - 3,100+ stars, 900+ forks',
    skills: [ 'Python', 'Dockerfile', 'Makefile' ],
    tags: [
      'abenezer mamo',      'algorithmic trading',
      'binance',            'binance api',
      'bitcoin',            'bittrex api',
      'coinbase',           'coinbase api',
      'coinbase pro',       'crypto',
      'crypto signal',      'cryptosignal',
      'cryptotrading',      'ethereum',
      'gdax',               'mamo',
      'technical analysis', 'trading',
      'trading bot',        'trading strategies'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/CryptoSignal/Crypto-Signal'
      }
    ]
  },
  {
    id: 618,
    name: 'jesse',
    creator: 'techlead',
    description: 'An advanced crypto trading bot written in Python',
    skills: [ 'Python', 'HTML', 'Shell', 'Dockerfile' ],
    tags: [
      'algo trading',   'algorithmic trading',
      'bitcoin',        'bot',
      'crypto',         'crypto bot',
      'cryptocurrency', 'etherum',
      'framework',      'jesse',
      'python',         'trade',
      'trading',        'trading algorithms',
      'trading bot',    'trading strategies'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/jesse-ai/jesse' } ]
  },
  {
    id: 619,
    name: 'tribeca',
    creator: 'anvinhtr',
    description: 'A high frequency, market making cryptocurrency trading platform in node.js',
    skills: [ 'TypeScript', 'HTML', 'JavaScript' ],
    tags: [
      'bitcoin',
      'cryptocurrency',
      'docker',
      'exchange',
      'hft',
      'hft trading',
      'market maker',
      'trade',
      'trading',
      'trading bot'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/michaelgrosner/tribeca'
      }
    ]
  },
  {
    id: 620,
    name: 'alpha_vantage',
    creator: 'janedoe',
    description: 'A python wrapper for Alpha Vantage API for financial data.',
    skills: [ 'Python' ],
    tags: [
      'alpha vantage',
      'alphavantage',
      'api wrapper',
      'bitcoin',
      'cryptocurrency',
      'finance',
      'financial data',
      'json',
      'pandas',
      'python',
      'stock'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/RomelTorres/alpha_vantage'
      }
    ]
  },
  {
    id: 621,
    name: 'btcpayserver',
    creator: 'bob',
    description: 'Accept Bitcoin payments. Free, open-source & self-hosted, Bitcoin payment processor. ',
    skills: [
      'C#',
      'HTML',
      'CSS',
      'JavaScript',
      'Shell',
      'Dockerfile',
      'PowerShell'
    ],
    tags: [
      'bitcoin',
      'bitcoin payment gateway',
      'bitcoin payment processor',
      'lightning network',
      'payment gateway',
      'payments',
      'self hosted',
      'wallet'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/btcpayserver/btcpayserver'
      }
    ]
  },
  {
    id: 622,
    name: 'wallet',
    creator: 'joybiswas',
    description: 'Bitpay Wallet (formerly Copay) is a secure Bitcoin and other crypto currencies wallet platform for both desktop and mobile devices.',
    skills: [
      'TypeScript',
      'HTML',
      'SCSS',
      'JavaScript',
      'Inno Setup',
      'Shell'
    ],
    tags: [
      'bitcoin',
      'bitpay',
      'blockchain',
      'copay',
      'hardware wallet',
      'wallet',
      'wallet service'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/bitpay/wallet' } ]
  },
  {
    id: 623,
    name: 'blockchain_go',
    creator: 'tanzilbaraskar',
    description: 'A simplified blockchain implementation in Golang',
    skills: [ 'Go' ],
    tags: [ 'bitcoin', 'blockchain', 'cryptocurrency', 'golang' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Jeiwan/blockchain_go'
      }
    ]
  },
  {
    id: 624,
    name: 'squeezer',
    creator: 'johndoe',
    description: 'Squeezer Framework - Build serverless dApps',
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [
      'bitcoin',
      'blockchain',
      'dapp',
      'dapps',
      'ethereum',
      'serverless',
      'squeezer'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/SqueezerIO/squeezer'
      }
    ]
  },
  {
    id: 625,
    name: 'cointop',
    creator: 'tanviryouhana',
    description: 'A fast and lightweight interactive terminal based UI application for tracking cryptocurrencies 🚀',
    skills: [ 'Go', 'Makefile', 'Python', 'Dockerfile', 'Nix', 'Shell' ],
    tags: [
      'bitcoin',        'blockchain',
      'cli',            'coin',
      'coingecko',      'coinmarketcap',
      'command line',   'console',
      'cryptocurrency', 'digital currency',
      'ethereum',       'go',
      'golang',         'holdings',
      'homebrew',       'linux',
      'macos',          'monitoring',
      'portfolio',      'terminal'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/cointop-sh/cointop' }
    ]
  },
  {
    id: 626,
    name: 'bitcoin wallet',
    creator: 'frankniu',
    description: 'Bitcoin Wallet app for your Android device. Standalone Bitcoin node, no centralized backend required.',
    skills: [ 'Java' ],
    tags: [
      'android',
      'bech32',
      'bitcoin',
      'bitcoin wallet',
      'bitcoinj',
      'blockchain',
      'java',
      'p2p',
      'segwit'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bitcoin-wallet/bitcoin-wallet'
      }
    ]
  },
  {
    id: 627,
    name: 'Krypto trading bot',
    creator: 'mehedishohag',
    description: 'Self-hosted crypto trading bot (automated high frequency market making) written in C++',
    skills: [
      'C++',
      'TypeScript',
      'C',
      'Makefile',
      'Shell',
      'Assembly',
      'HTML',
      'Dockerfile'
    ],
    tags: [
      'binance',          'bitcoin',
      'bitfinex',         'bitmex',
      'bob marley',       'bot platform',
      'coinbase',         'cryptocurrency',
      'exchange',         'hitbtc',
      'kraken',           'kucoin',
      'market data',      'market maker',
      'skate or die',     'trade',
      'trading',          'trading bot',
      'trading platform', 'trading strategies'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ctubio/Krypto-trading-bot'
      }
    ]
  },
  {
    id: 628,
    name: 'lbrycrd',
    creator: 'bob',
    description: 'The blockchain that provides the digital content namespace for the LBRY protocol',
    skills: [
      'C++',           'Python',
      'C',             'M4',
      'Makefile',      'Shell',
      'Java',          'Sage',
      'Assembly',      'CMake',
      'HTML',          'Dockerfile',
      'Objective-C++', 'QMake'
    ],
    tags: [
      'bitcoin',
      'blockchain',
      'c plus plus',
      'cryptocurrency',
      'decentralized',
      'lbry'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/lbryio/lbrycrd' } ]
  },
  {
    id: 629,
    name: 'Superalgos',
    creator: 'refatmonjur',
    description: 'Free, open-source crypto trading bot, automated bitcoin / cryptocurrency trading software, algorithmic trading bots. Visually design your crypto trading bot, leveraging an integrated charting system, data-mining, backtesting, paper trading, and multi-server crypto bot deployments.',
    skills: [
      'JavaScript',
      'CSS',
      'HTML',
      'Dockerfile',
      'Shell',
      'Ruby',
      'Batchfile'
    ],
    tags: [
      'algorithmic trading',
      'algotrading',
      'bitcoin trading',
      'bitcoin trading bots',
      'crypto',
      'crypto trading',
      'crypto trading bots',
      'crypto trading strategies',
      'cryptocurrencies',
      'cryptocurrency',
      'cryptocurrency trading bots',
      'free',
      'open source',
      'quantitative trading',
      'trading',
      'trading algorithms',
      'trading bot',
      'trading platform',
      'trading strategies',
      'trading systems'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Superalgos/Superalgos'
      }
    ]
  },
  {
    id: 630,
    name: 'bcoin',
    creator: 'janedoe',
    description: 'Javascript bitcoin library for node.js and browsers',
    skills: [ 'JavaScript', 'Shell', 'HTML' ],
    tags: [ 'bitcoin', 'cryptocurrency', 'mining', 'wallet' ],
    links: [ { type: 'GitHub', link: 'https://github.com/bcoin-org/bcoin' } ]
  },
  {
    id: 631,
    name: 'stacks blockchain',
    creator: 'tanviryouhana',
    description: 'The Stacks 2.0 blockchain implementation',
    skills: [
      'Rust',
      'TypeScript',
      'Clarity',
      'Shell',
      'Dockerfile',
      'Mustache',
      'Roff',
      'JavaScript'
    ],
    tags: [
      'apps',
      'bitcoin',
      'blockchain',
      'blockstack',
      'decentralized',
      'dns',
      'identity',
      'rust',
      'serverless',
      'storage'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/stacks-network/stacks-blockchain'
      }
    ]
  },
  {
    id: 632,
    name: 'bitcoin on nodejs',
    creator: 'joybiswas',
    description: '《Node.js区块链开发》，注：新版代码已开源！请star支持哦-^-：',
    skills: [ 'JavaScript', 'CSS' ],
    tags: [
      'bitcoin',
      'blockchain',
      'cryptocurrency',
      'ebook',
      'gitbook',
      'nodejs'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/imfly/bitcoin-on-nodejs'
      }
    ]
  },
  {
    id: 633,
    name: 'Learning Bitcoin from the Command Line',
    creator: 'tanviryouhana',
    description: 'A complete course for learning Bitcoin programming and usage from the command',
    skills: [
      'Jupyter Notebook',
      'C',
      'Python',
      'Java',
      'Go',
      'Rust',
      'Shell',
      'JavaScript'
    ],
    tags: [
      'bitcoin',
      'bitcoin scripts',
      'bitcoin setup',
      'blockchain',
      'cli',
      'controlling bitcoin transactions',
      'multisig',
      'p2sh',
      'raw transactions',
      'sending bitcoin transactions',
      'sending coins',
      'transaction'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/BlockchainCommons/Learning-Bitcoin-from-the-Command-Line'
      }
    ]
  },
  {
    id: 634,
    name: 'cryptocurrency icons',
    creator: 'akbarhaider',
    description: 'A set of icons for all the main cryptocurrencies and altcoins, in a range of styles and sizes.',
    skills: [ 'JavaScript' ],
    tags: [
      'altcoin',              'altcoins',
      'bitcoin',              'cc0',
      'coin',                 'crypto',
      'cryptocurrencies',     'cryptocurrency',
      'cryptocurrency icons', 'cryptocurrency ticker',
      'erc20',                'erc20 tokens',
      'erc721',               'ethereum',
      'flat icons',           'icon',
      'icon pack',            'icon set',
      'icons',                'svg icons'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/spothq/cryptocurrency-icons'
      }
    ]
  },
  {
    id: 635,
    name: 'binance trader',
    creator: 'bob',
    description: '💰 Cryptocurrency Trading Bot for Binance (Experimental)',
    skills: [ 'Python', 'Dockerfile' ],
    tags: [
      'arbitrage',
      'binance',
      'bitcoin',
      'btc',
      'cryptocurrency',
      'trade'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/yasinkuyu/binance-trader'
      }
    ]
  },
  {
    id: 636,
    name: 'blockchain tutorial',
    creator: 'zealptl',
    description: ':ear_of_rice: A step-by-step blockchain tutorial in simplified Chinese',
    skills: [ 'Go', 'Makefile', 'CSS' ],
    tags: [
      'bitcoin',
      'blockchain',
      'blockchain tutorial',
      'cryptocurrency',
      'tutorial'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/liuchengxu/blockchain-tutorial'
      }
    ]
  },
  {
    id: 637,
    name: 'lnbook',
    creator: 'refatmonjur',
    description: 'Mastering the Lightning Network (LN)',
    skills: [
      'AsciiDoc',
      'Shell',
      'HTML',
      'Dockerfile',
      'Python',
      'Makefile',
      'XSLT',
      'CSS'
    ],
    tags: [
      'bitcoin',
      'blockchain',
      'blockchains',
      'c lightning',
      'lightning network',
      'ln',
      'lnd',
      'p2p',
      'payments',
      'peer'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/lnbook/lnbook' } ]
  },
  {
    id: 638,
    name: 'awesome blockchain',
    creator: 'frankniu',
    description: '⚡️Curated list of resources for the development and applications of blockchain.',
    skills: [ 'Go', 'JavaScript', 'C++', 'Solidity' ],
    tags: [
      'awesome',            'awesome list',
      'bitcoin',            'blockchain',
      'bulletproofs',       'digital currency',
      'dpos',               'eos',
      'eosio',              'ethereum',
      'fabric',             'iota',
      'ipfs',               'mastering bitcoin',
      'mastering ethereum', 'monero',
      'pbft',               'pos',
      'pow',                'white paper'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/yjjnls/awesome-blockchain'
      }
    ]
  },
  {
    id: 639,
    name: 'freqtrade strategies',
    creator: 'abdulimtiaz',
    description: 'Free trading strategies for Freqtrade bot',
    skills: [ 'Python' ],
    tags: [
      'bitcoin',
      'cryptocurrency',
      'freqtrade strategies',
      'trading',
      'trading bot',
      'trading strategies'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/freqtrade/freqtrade-strategies'
      }
    ]
  },
  {
    id: 640,
    name: 'SimpleCoin',
    creator: 'akbarhaider',
    description: 'Just a really simple, insecure and incomplete implementation of a blockchain for a cryptocurrency made in Python as educational material. In other words, a simple Bitcoin clone.',
    skills: [ 'Python' ],
    tags: [ 'bitcoin', 'blockchain', 'cryptocurrency', 'python' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/cosme12/SimpleCoin' }
    ]
  },
  {
    id: 641,
    name: 'coinbasepro python',
    creator: 'akbarhaider',
    description: 'The unofficial Python client for the Coinbase Pro API',
    skills: [ 'Python', 'Dockerfile' ],
    tags: [
      'bitcoin',         'cbpro',
      'coinbase',        'coinbasepro',
      'coinbasepro api', 'ethereum',
      'exchange',        'libaray',
      'orderbook',       'python client',
      'trading',         'websocket client',
      'wrapper'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/danpaquin/coinbasepro-python'
      }
    ]
  },
  {
    id: 642,
    name: 'umbrel',
    creator: 'tanviryouhana',
    description: 'A beautiful personal server OS for Raspberry Pi or any Linux distro for self-hosting everything',
    skills: [ 'HTML', 'Shell', 'JavaScript', 'Python', 'CSS' ],
    tags: [
      'bitcoin',      'bitcoin node',
      'docker',       'full node',
      'lightning',    'lightning node',
      'lnd',          'raspberry pi',
      'raspberrypi',  'self hosted',
      'self hosting', 'selfhosted',
      'umbrel'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/getumbrel/umbrel' } ]
  },
  {
    id: 643,
    name: 'rotki',
    creator: 'mehedishohag',
    description: 'A portfolio tracking, analytics, accounting and tax reporting application that protects your privacy',
    skills: [
      'Python',     'Vue',
      'TypeScript', 'Shell',
      'JavaScript', 'PowerShell',
      'HTML',       'Dockerfile',
      'Makefile',   'SCSS',
      'Perl'
    ],
    tags: [
      'accounting',
      'analytics',
      'bitcoin',
      'blockchain',
      'cryptocurrencies',
      'cryptocurrency exchanges',
      'cryptocurrency portfolio',
      'cryptocurrency portfolio tracking',
      'ethereum',
      'hacktoberfest',
      'portfolio tracker',
      'tax',
      'tax reporting',
      'tracking'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/rotki/rotki' } ]
  },
  {
    id: 644,
    name: 'mop',
    creator: 'janedoe',
    description: 'Stock market tracker for hackers.',
    skills: [ 'Go', 'Makefile', 'Ruby' ],
    tags: [
      'bitcoin',
      'cryptocurrency',
      'finance',
      'go',
      'golang',
      'stock market',
      'stocks',
      'terminal',
      'trading'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/mop-tracker/mop' } ]
  },
  {
    id: 645,
    name: 'BlueWallet',
    creator: 'frankniu',
    description: 'Bitcoin thin client for iOS & Android. Built with React Native ',
    skills: [
      'JavaScript', 'TypeScript',
      'Swift',      'Objective-C',
      'C++',        'Java',
      'Shell',      'Ruby',
      'Starlark',   'C'
    ],
    tags: [
      'bitcoin',
      'bitcoinjs',
      'blockchain',
      'cryptocurrency',
      'react native',
      'reactnative'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/BlueWallet/BlueWallet'
      }
    ]
  },
  {
    id: 646,
    name: 'coinmon',
    creator: 'justinsiu',
    description: '💰  The cryptocurrency price tool on CLI. 🖥',
    skills: [ 'JavaScript', 'Dockerfile' ],
    tags: [
      'bitcoin',
      'btc',
      'cli',
      'command line',
      'crypto',
      'cryptocurrency',
      'ethereum',
      'javascript',
      'nodejs',
      'price tracker',
      'ticker'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/bichenkk/coinmon' } ]
  },
  {
    id: 647,
    name: 'bolts',
    creator: 'frankniu',
    description: 'BOLT: Basis of Lightning Technology (Lightning Network Specifications)',
    skills: [ 'Markdown', 'Python', 'Shell' ],
    tags: [
      'bitcoin',
      'blockchain',
      'cryptocurrency',
      'cryptography',
      'lightning',
      'lightning network',
      'protocol'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/lightning/bolts' } ]
  },
  {
    id: 648,
    name: 'trading vue js',
    creator: 'techlead',
    description: '💹  Hackable charting lib for traders. You can draw literally ANYTHING on top of candlestick charts. [Not Maintained]',
    skills: [ 'JavaScript', 'Vue', 'HTML' ],
    tags: [
      'algo trading',
      'bitcoin',
      'candlestick charts',
      'charts',
      'crypto',
      'financial analysis',
      'finviz',
      'overlays',
      'reactive',
      'trading',
      'visualization',
      'vue',
      'vuejs'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/tvjsx/trading-vue-js'
      }
    ]
  },
  {
    id: 649,
    name: 'OctoBot',
    creator: 'techlead',
    description: 'Cryptocurrency trading bot for TA, arbitrage and social trading with an advanced web interface',
    skills: [ 'Python', 'Cython', 'Roff', 'Dockerfile', 'Makefile', 'Shell' ],
    tags: [
      'arbitrage',
      'backtesting',
      'bitcoin',
      'bitcoin trading bot',
      'cryptocurrency',
      'cryptocurrency trading bot',
      'deep learning',
      'exchange',
      'machine learning',
      'octobot',
      'python',
      'social trading',
      'technical analysis',
      'telegram',
      'trading',
      'trading bot',
      'tradingview'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Drakkar-Software/OctoBot'
      }
    ]
  },
  {
    id: 650,
    name: 'ipynb_playground',
    creator: 'mehedishohag',
    description: 'Various ipython notebooks',
    skills: [ 'Jupyter Notebook', 'HTML' ],
    tags: [ 'bitcoin', 'blockchain', 'perceptron', 'python' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/julienr/ipynb_playground'
      }
    ]
  },
  {
    id: 651,
    name: 'WalletWasabi',
    creator: 'mehedishohag',
    description: 'Open-source, non-custodial, privacy focused Bitcoin wallet for Windows, Linux, and Mac. Built-in Tor, CoinJoin, and coin control features.',
    skills: [ 'C#', 'HTML', 'CSS', 'Smalltalk', 'PowerShell', 'Shell', 'SCSS' ],
    tags: [
      'bitcoin',        'bitcoin wallet',
      'coin',           'coinjoin',
      'cross platform', 'dotnet',
      'nbitcoin',       'privacy',
      'tor',            'wabisabi',
      'wallet',         'wasabi',
      'wasabi wallet',  'zerolink'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/zkSNACKs/WalletWasabi'
      }
    ]
  },
  {
    id: 652,
    name: 'wallet core',
    creator: 'abdulimtiaz',
    description: 'Cross-platform, cross-blockchain wallet library.',
    skills: [
      'C++',         'C',
      'Swift',       'Kotlin',
      'HTML',        'Ruby',
      'Python',      'CMake',
      'Shell',       'TypeScript',
      'Dockerfile',  'Java',
      'Objective-C'
    ],
    tags: [
      'bitcoin',
      'blockchain',
      'cross platform',
      'crypto',
      'cryptocurrency',
      'ethereum'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/trustwallet/wallet-core'
      }
    ]
  },
  {
    id: 653,
    name: 'ta4j',
    creator: 'anvinhtr',
    description: 'A Java library for technical analysis.',
    skills: [ 'Java' ],
    tags: [
      'bitcoin',
      'ethereum',
      'forex',
      'java',
      'java library',
      'litecoin',
      'ripple',
      'stocks',
      'ta4j',
      'tachnical analysis',
      'technical analysis',
      'trading',
      'trading algorithms',
      'trading strategies'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ta4j/ta4j' } ]
  },
  {
    id: 654,
    name: 'cointrol',
    creator: 'saif',
    description: '฿ Bitcoin trading bot with a real-time dashboard for Bitstamp.',
    skills: [ 'Python', 'CoffeeScript', 'HTML', 'CSS' ],
    tags: [
      'automation',
      'bitcoin',
      'bitstamp',
      'bot',
      'cryptocurrencies',
      'jakubroztocil',
      'python',
      'speculation',
      'trade',
      'trading',
      'trading bot',
      'transaction'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jakubroztocil/cointrol'
      }
    ]
  },
  {
    id: 655,
    name: 'cryptofeed',
    creator: 'saif',
    description: 'Cryptocurrency Exchange Websocket Data Feed Handler',
    skills: [ 'Python', 'Cython' ],
    tags: [
      'asyncio',          'binance',
      'bitcoin',          'btc',
      'coinbase',         'coinbase api',
      'crypto',           'cryptocurrencies',
      'cryptocurrency',   'ethereum',
      'exchange',         'ftx exchange',
      'influxdb',         'market data',
      'python',           'trading',
      'trading platform', 'websocket',
      'websockets'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/bmoscon/cryptofeed' }
    ]
  },
  {
    id: 656,
    name: 'Bitcoin.org',
    creator: 'tufayelahmed',
    description: 'Bitcoin.org Website',
    skills: [
      'HTML',       'SCSS',
      'JavaScript', 'Less',
      'Ruby',       'Shell',
      'Makefile',   'CSS'
    ],
    tags: [ 'bitcoin', 'blockchain', 'cryptocurrency', 'p2p' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bitcoin-dot-org/Bitcoin.org'
      }
    ]
  },
  {
    id: 657,
    name: 'exchange core',
    creator: 'anvinhtr',
    description: 'Ultra-fast matching engine written in Java based on LMAX Disruptor, Eclipse Collections, Real Logic Agrona, OpenHFT, LZ4 Java, and Adaptive Radix Trees.',
    skills: [ 'Java', 'Gherkin' ],
    tags: [
      'bitcoin',
      'cryptocurrency',
      'cryptocurrency exchanges',
      'exchange',
      'exchange api',
      'forex trading',
      'hft',
      'hft trading',
      'java',
      'lmax disruptor',
      'lock free',
      'low latency',
      'matching algorithm',
      'matching engine',
      'order book',
      'stock exchange',
      'stock market',
      'stock trading',
      'trading api',
      'trading platform'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/mzheravin/exchange-core'
      }
    ]
  },
  {
    id: 658,
    name: 'pycoin',
    creator: 'saif',
    description: 'Python-based Bitcoin and alt-coin utility library.',
    skills: [ 'Python', 'Shell', 'Makefile' ],
    tags: [ 'altcoins', 'bip32', 'bitcoin', 'python', 'segwit' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/richardkiss/pycoin' }
    ]
  },
  {
    id: 659,
    name: 'BlockSci',
    creator: 'frankniu',
    description: 'A high-performance tool for blockchain science and exploration',
    skills: [ 'C++', 'Python', 'CMake', 'Jupyter Notebook', 'Shell' ],
    tags: [ 'analysis', 'bitcoin', 'blockchain', 'blocksci' ],
    links: [ { type: 'GitHub', link: 'https://github.com/citp/BlockSci' } ]
  },
  {
    id: 660,
    name: 'qtum',
    creator: 'tanviryouhana',
    description: 'Qtum Core Wallet',
    skills: [
      'C++',       'Python',
      'C',         'Shell',
      'M4',        'Makefile',
      'Assembly',  'CSS',
      'CMake',     'Java',
      'Sage',      'HTML',
      'Scheme',    'Objective-C++',
      'Batchfile', 'Perl',
      'QMake'
    ],
    tags: [
      'bitcoin',
      'c plus plus',
      'cryptocurrency',
      'cryptography',
      'ethereum',
      'p2p',
      'qtum'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/qtumproject/qtum' } ]
  },
  {
    id: 661,
    name: 'exonum',
    creator: 'patrick',
    description: 'An extensible open-source framework for creating private/permissioned blockchain applications',
    skills: [ 'Rust', 'Python', 'JavaScript', 'Shell' ],
    tags: [
      'bitcoin',
      'blockchain',
      'byzantine',
      'consensus algorithm',
      'cryptography',
      'database',
      'p2p',
      'rust'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/exonum/exonum' } ]
  },
  {
    id: 662,
    name: 'blockstack browser',
    creator: 'frankniu',
    description: 'The Blockstack Browser',
    skills: [
      'JavaScript', 'CSS',
      'Swift',      'C#',
      'HTML',       'Shell',
      'Batchfile',  'Dockerfile',
      'Ruby'
    ],
    tags: [
      'apps',       'bitcoin',
      'blockchain', 'blockstack',
      'browser',    'decentralized',
      'identity',   'javascript',
      'macos',      'react',
      'serverless', 'storage'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/stacks-network/blockstack-browser'
      }
    ]
  },
  {
    id: 663,
    name: 'MikaLendingBot',
    creator: 'frankniu',
    description: 'Automated lending on Cryptocurrency exchanges Poloniex and Bitfinex',
    skills: [ 'Python', 'JavaScript', 'HTML', 'Dockerfile', 'Shell' ],
    tags: [
      'bitcoin',
      'bitfinex',
      'bot',
      'lending',
      'lending strategies',
      'poloniex',
      'poloniex lending bot'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/BitBotFactory/MikaLendingBot'
      }
    ]
  },
  {
    id: 664,
    name: 'bitcoin abc',
    creator: 'joma',
    description: 'This a mirror of the official Bitcoin-ABC repository.  Please see README.md',
    skills: [
      'C++',        'Python',
      'JavaScript', 'C',
      'CMake',      'Shell',
      'Makefile',   'PHP',
      'TypeScript', 'Java',
      'Sage',       'M4',
      'Assembly',   'HTML',
      'Ruby',       'Objective-C++',
      'Perl',       'CSS',
      'Kotlin',     'Dockerfile',
      'PowerShell', 'QMake'
    ],
    tags: [ 'bitcoin', 'bitcoin abc', 'bitcoin cash' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Bitcoin-ABC/bitcoin-abc'
      }
    ]
  },
  {
    id: 665,
    name: 'BitVision',
    creator: 'tufayelahmed',
    description: 'Terminal dashboard for trading Bitcoin, predicting price movements, and losing all your money',
    skills: [ 'JavaScript', 'Python' ],
    tags: [
      'bitcoin',
      'bitcoin price',
      'bitcoin price prediction',
      'machine learning',
      'technical analysis',
      'trading',
      'trading bot',
      'trading systems'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/shobrook/BitVision' }
    ]
  },
  {
    id: 666,
    name: 'bit',
    creator: 'janedoe',
    description: 'Bitcoin made easy.',
    skills: [ 'Python', 'Shell' ],
    tags: [
      'bitcoin',
      'cryptocurrencies',
      'libraries',
      'payments',
      'python'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ofek/bit' } ]
  },
  {
    id: 667,
    name: 'node binance trader',
    creator: 'joybiswas',
    description: '💰 Cryptocurrency Trading Strategy & Portfolio Management Development Framework for Binance. 🤖',
    skills: [
      'TypeScript',
      'JavaScript',
      'Dockerfile',
      'Shell',
      'HTML',
      'Procfile'
    ],
    tags: [
      'auto trader',
      'binance',
      'bitcoin',
      'cryptocurrency',
      'cryptocurrency trading',
      'nodejs',
      'portfolio',
      'trading bot'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bitcoinvsalts/node-binance-trader'
      }
    ]
  },
  {
    id: 668,
    name: 'eclair',
    creator: 'mdrislam30',
    description: 'A scala implementation of the Lightning Network.',
    skills: [ 'Scala', 'Shell', 'Java', 'Batchfile', 'Dockerfile', 'Procfile' ],
    tags: [
      'bitcoin',
      'blockchain',
      'cryptocurrency',
      'eclair',
      'lightning',
      'lightning network',
      'payments'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ACINQ/eclair' } ]
  },
  {
    id: 669,
    name: 'aeternity',
    creator: 'refatmonjur',
    description: 'æternity blockchain - scalable blockchain for the people - smart contracts, state channels, names, tokens',
    skills: [
      'Erlang',
      'Makefile',
      'Mustache',
      'Shell',
      'Batchfile',
      'Dockerfile',
      'JavaScript',
      'Nix'
    ],
    tags: [
      'aeternity',
      'bitcoin',
      'blockchain',
      'crypto',
      'cryptocurrency',
      'cryptography',
      'erlang',
      'ethereum',
      'mining',
      'scaling',
      'smart contracts',
      'testnet'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/aeternity/aeternity'
      }
    ]
  },
  {
    id: 670,
    name: 'web3',
    creator: 'joybiswas',
    description: 'Making sense of web3 & crypto. Introduction to key concepts and ideas. Rigorous, constructive analysis of key claims pro and con. A look at the deeper hopes and aspirations.',
    skills: [ 'HTML', 'JavaScript', 'TypeScript', 'CSS' ],
    tags: [
      'awesome',
      'awesome list',
      'bitcoin',
      'blockchain',
      'cryptocurrency',
      'ethereum',
      'technosolutionism',
      'web3'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/life-itself/web3' } ]
  },
  {
    id: 671,
    name: 'raspibolt',
    creator: 'tanviryouhana',
    description: 'RaspiBolt v3: Bitcoin & Lightning full node on a Raspberry Pi',
    skills: [ 'Markdown', 'Shell', 'SCSS' ],
    tags: [ 'bitcoin', 'cryptocurrency', 'lightning', 'raspberry pi' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/raspibolt/raspibolt'
      }
    ]
  },
  {
    id: 672,
    name: 'webpack',
    creator: 'akbarhaider',
    description: 'A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.',
    skills: [
      'JavaScript',
      'TypeScript',
      'WebAssembly',
      'CSS',
      'CoffeeScript',
      'HTML',
      'Less',
      'Pug',
      'Shell'
    ],
    tags: [
      'amd',                 'build tool',
      'commonjs',            'compiler',
      'es2015',              'es6',
      'esm',                 'javascript',
      'javascript compiler', 'javascript modules',
      'loaders',             'module bundler',
      'plugins',             'web',
      'web performance',     'webpack'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/webpack/webpack' } ]
  },
  {
    id: 673,
    name: 'glide',
    creator: 'saif',
    description: 'An image loading and caching library for Android focused on smooth scrolling',
    skills: [ 'Java', 'Shell' ],
    tags: [ 'android', 'disk cache', 'gif', 'glide', 'imageloader' ],
    links: [ { type: 'GitHub', link: 'https://github.com/bumptech/glide' } ]
  },
  {
    id: 674,
    name: 'dive',
    creator: 'janedoe',
    description: 'A tool for exploring each layer in a docker image',
    skills: [ 'Go', 'Makefile', 'Shell', 'Dockerfile' ],
    tags: [ 'cli', 'docker', 'docker image', 'explorer', 'inspector', 'tui' ],
    links: [ { type: 'GitHub', link: 'https://github.com/wagoodman/dive' } ]
  },
  {
    id: 675,
    name: 'carbon',
    creator: 'techlead',
    description: ':black_heart: Create and share beautiful images of your source code',
    skills: [ 'JavaScript', 'Shell' ],
    tags: [
      'beautiful',
      'carbon',
      'education',
      'github gist',
      'javascript',
      'presentation',
      'sharing',
      'snippets',
      'tweet'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/carbon-app/carbon' }
    ]
  },
  {
    id: 676,
    name: 'Hover',
    creator: 'mdrislam30',
    description: 'A collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on. Easily apply to your own elements, modify or just use for inspiration. Available in CSS, Sass, and LESS.',
    skills: [ 'CSS', 'HTML', 'JavaScript' ],
    tags: [ 'css', 'css effects', 'sass' ],
    links: [ { type: 'GitHub', link: 'https://github.com/IanLunn/Hover' } ]
  },
  {
    id: 677,
    name: 'SDWebImage',
    creator: 'tufayelahmed',
    description: 'Asynchronous image downloader with cache support as a UIImageView category',
    skills: [ 'Objective-C', 'C', 'Ruby', 'Swift' ],
    tags: [
      'cache',       'carthage',
      'cocoapods',   'gif',
      'image',       'ios',
      'jpeg',        'macos',
      'objective c', 'png',
      'sdwebimage',  'swift',
      'watchos',     'webp'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/SDWebImage/SDWebImage'
      }
    ]
  },
  {
    id: 678,
    name: 'waifu2x',
    creator: 'zealptl',
    description: 'Image Super-Resolution for Anime-Style Art',
    skills: [
      'Lua',
      'HTML',
      'Shell',
      'JavaScript',
      'Python',
      'CSS',
      'Ruby',
      'Dockerfile'
    ],
    tags: [ 'super resolution', 'torch', 'waifu2x' ],
    links: [ { type: 'GitHub', link: 'https://github.com/nagadomi/waifu2x' } ]
  },
  {
    id: 679,
    name: 'etcher',
    creator: 'akbarhaider',
    description: 'Flash OS images to SD cards & USB drives, safely and easily.',
    skills: [ 'TypeScript', 'Makefile', 'JavaScript', 'Shell', 'CSS', 'HTML' ],
    tags: [ 'cross platform', 'etcher', 'sd cards', 'usb drives' ],
    links: [ { type: 'GitHub', link: 'https://github.com/balena-io/etcher' } ]
  },
  {
    id: 680,
    name: 'sharp',
    creator: 'joybiswas',
    description: 'High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, AVIF and TIFF images. Uses the libvips library.',
    skills: [ 'JavaScript', 'C++', 'Python', 'Shell', 'C', 'HTML' ],
    tags: [
      'avif',        'crop',
      'exif',        'icc',
      'image',       'image processing',
      'javascript',  'jpeg',
      'libvips',     'nodejs',
      'performance', 'png',
      'resize',      'sharp',
      'svg',         'tiff',
      'webp'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/lovell/sharp' } ]
  },
  {
    id: 681,
    name: 'PhotoSwipe',
    creator: 'tanviryouhana',
    description: 'JavaScript image gallery for mobile and desktop, modular, framework independent',
    skills: [ 'JavaScript', 'CSS', 'TypeScript' ],
    tags: [ 'gallery', 'image', 'javascript', 'lightbox' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/dimsemenov/PhotoSwipe'
      }
    ]
  },
  {
    id: 682,
    name: 'Kingfisher',
    creator: 'mehedishohag',
    description: 'A lightweight, pure-Swift library for downloading and caching images from the web.',
    skills: [ 'Swift', 'Objective-C', 'Ruby' ],
    tags: [
      'cache',
      'filters',
      'image',
      'image processor',
      'ios',
      'kingfisher',
      'macos',
      'swift',
      'xcode'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/onevcat/Kingfisher' }
    ]
  },
  {
    id: 683,
    name: 'ShareX',
    creator: 'joma',
    description: 'ShareX is a free and open source program that lets you capture or record any area of your screen and share it with a single press of a key. It also allows uploading images, text or other types of files to many supported destinations you can choose from.',
    skills: [ 'C#', 'Inno Setup', 'CSS', 'PowerShell' ],
    tags: [
      'capture',        'color picker',
      'csharp',         'dropbox',
      'file sharing',   'file upload',
      'ftp',            'gif',
      'gif recorder',   'image annotation',
      'imgur',          'ocr',
      'productivity',   'region capture',
      'screen capture', 'screen recorder',
      'screenshot',     'share',
      'sharex',         'url shortener'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ShareX/ShareX' } ]
  },
  {
    id: 684,
    name: 'pytorch image models',
    creator: 'joma',
    description: 'PyTorch image models, scripts, pretrained weights -- ResNet, ResNeXT, EfficientNet, EfficientNetV2, NFNet, Vision Transformer, MixNet, MobileNet-V3/V2, RegNet, DPN, CSPNet, and more',
    skills: [ 'Python', 'Shell' ],
    tags: [
      'augmix',
      'cnn classification',
      'distributed training',
      'dual path networks',
      'efficientnet',
      'efficientnet training',
      'imagenet classifier',
      'mixnet',
      'mnasnet',
      'mobile deep learning',
      'mobilenet v2',
      'mobilenetv3',
      'nfnets',
      'normalization free training',
      'pretrained models',
      'pretrained weights',
      'pytorch',
      'randaugment',
      'resnet',
      'vision transformer models'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rwightman/pytorch-image-models'
      }
    ]
  },
  {
    id: 685,
    name: 'labelImg',
    creator: 'abdulimtiaz',
    description: '🖍️ LabelImg is a graphical image annotation tool and label object bounding boxes in images',
    skills: [ 'Python', 'Shell', 'Makefile' ],
    tags: [
      'annotations',
      'deep learning',
      'detection',
      'image classification',
      'imagenet',
      'python2',
      'python3',
      'recognition',
      'tools'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/tzutalin/labelImg' }
    ]
  },
  {
    id: 686,
    name: 'pytorch CycleGAN and pix2pix',
    creator: 'mehedishohag',
    description: 'Image-to-Image Translation in PyTorch',
    skills: [ 'Python', 'Jupyter Notebook', 'Shell', 'MATLAB', 'TeX' ],
    tags: [
      'computer graphics',
      'computer vision',
      'cyclegan',
      'deep learning',
      'gan',
      'gans',
      'generative adversarial network',
      'image generation',
      'image manipulation',
      'pix2pix',
      'pytorch'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/junyanz/pytorch-CycleGAN-and-pix2pix'
      }
    ]
  },
  {
    id: 687,
    name: 'dropzone',
    creator: 'zealptl',
    description: "Dropzone is an easy to use drag'n'drop library. It supports image previews and shows nice progress bars.",
    skills: [ 'JavaScript', 'SCSS', 'HTML' ],
    tags: [
      'drag and drop',
      'dropzone',
      'file upload',
      'javascript',
      'javascript library'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/dropzone/dropzone' }
    ]
  },
  {
    id: 688,
    name: 'lazysizes',
    creator: 'techlead',
    description: 'High performance and SEO friendly lazy loader for images (responsive and normal), iframes and more, that detects any visibility changes triggered through user interaction, CSS or JavaScript without configuration.',
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [
      'javascript',
      'lazy evaluation',
      'lazyload',
      'lazysizes',
      'performance',
      'responsive images'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/aFarkas/lazysizes' }
    ]
  },
  {
    id: 689,
    name: 'react native vector icons',
    creator: 'joma',
    description: 'Customizable Icons for React Native with support for image source and full styling.',
    skills: [
      'JavaScript',
      'Shell',
      'Objective-C',
      'Java',
      'CSS',
      'Smarty',
      'Ruby',
      'HTML'
    ],
    tags: [ 'icon', 'icon pack', 'react native', 'ui' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/oblador/react-native-vector-icons'
      }
    ]
  },
  {
    id: 690,
    name: 'CircleImageView',
    creator: 'bob',
    description: 'A circular ImageView for Android',
    skills: [ 'Java' ],
    tags: [ 'android', 'imageview', 'widget' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hdodenhof/CircleImageView'
      }
    ]
  },
  {
    id: 691,
    name: 'docker slim',
    creator: 'justinsiu',
    description: "DockerSlim (docker-slim): Don't change anything in your Docker container image and minify it by up to 30x (and for compiled languages even more) making it secure too! (free and open source)",
    skills: [ 'Go', 'Shell', 'Makefile', 'Dockerfile' ],
    tags: [
      'apparmor',
      'containers',
      'docker',
      'go',
      'golang',
      'hacktoberfest',
      'minify images',
      'seccomp',
      'seccomp profile',
      'security'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/docker-slim/docker-slim'
      }
    ]
  },
  {
    id: 692,
    name: 'VirtualXposed',
    creator: 'tanzilbaraskar',
    description: 'A simple app to use Xposed without root, unlock the bootloader or modify system image, etc.',
    skills: [ 'Java', 'C++', 'AIDL', 'C', 'Makefile', 'Starlark' ],
    tags: [ 'android', 'aop', 'hook', 'non root', 'xposed' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/android-hacker/VirtualXposed'
      }
    ]
  },
  {
    id: 693,
    name: 'Luban',
    creator: 'joybiswas',
    description: 'Luban(鲁班)—Image compression with efficiency very close to WeChat Moments/可能是最接近微信朋友圈的图片压缩算法',
    skills: [ 'Java' ],
    tags: [ 'android', 'image compression', 'luban' ],
    links: [ { type: 'GitHub', link: 'https://github.com/Curzibn/Luban' } ]
  },
  {
    id: 694,
    name: 'distroless',
    creator: 'saif',
    description: '🥑  Language focused docker images, minus the operating system.  ',
    skills: [ 'Starlark', 'Go', 'Python', 'Shell', 'Makefile' ],
    tags: [ 'bazel', 'docker' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/GoogleContainerTools/distroless'
      }
    ]
  },
  {
    id: 695,
    name: 'digital_video_introduction',
    creator: 'patrick',
    description: 'A hands-on introduction to video technology: image, video, codec (av1, vp9, h265) and more (ffmpeg encoding).',
    skills: [ 'Jupyter Notebook', 'Shell' ],
    tags: [
      'adaptive streaming', 'arithmetic coding',
      'audio',              'av1',
      'bitstream',          'codec',
      'compression',        'dash',
      'ffmpeg',             'frame types',
      'guide',              'h264',
      'h265',               'handson',
      'hls',                'learning',
      'tutorial',           'video',
      'video codec',        'vp9'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/leandromoreira/digital_video_introduction'
      }
    ]
  },
  {
    id: 696,
    name: 'image',
    creator: 'frankniu',
    description: 'PHP Image Manipulation',
    skills: [ 'PHP' ],
    tags: [
      'gd',
      'image',
      'imagick',
      'intervention',
      'laravel',
      'manipulation',
      'php',
      'thumbnail',
      'watermark'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Intervention/image' }
    ]
  },
  {
    id: 697,
    name: 'imgaug',
    creator: 'bob',
    description: 'Image augmentation for machine learning experiments.',
    skills: [ 'Python', 'Shell' ],
    tags: [
      'affine transformation',
      'augment images',
      'augmentation',
      'bounding boxes',
      'contrast',
      'crop',
      'deep learning',
      'heatmap',
      'image augmentation',
      'images',
      'keypoints',
      'machine learning',
      'polygon',
      'segmentation maps'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/aleju/imgaug' } ]
  },
  {
    id: 698,
    name: 'terminalizer',
    creator: 'tanzilbaraskar',
    description: '🦄 Record your terminal and generate animated gif images or share a web player',
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [
      'animated',     'bash',
      'bash profile', 'capture',
      'colors',       'command line',
      'font',         'generate',
      'gif',          'powershell',
      'pty',          'record',
      'render',       'repeat',
      'shell',        'shot',
      'terminal',     'theme',
      'tty',          'zsh'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/faressoft/terminalizer'
      }
    ]
  },
  {
    id: 699,
    name: 'smartcrop.js',
    creator: 'refatmonjur',
    description: 'Content aware image cropping',
    skills: [
      'JavaScript',
      'HTML',
      'Shell',
      'Dockerfile',
      'Vim script',
      'TypeScript'
    ],
    tags: [ 'image processing', 'javascript', 'nodejs', 'smartcrop' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jwagner/smartcrop.js'
      }
    ]
  },
  {
    id: 700,
    name: 'first order model',
    creator: 'patrick',
    description: 'This repository contains the source code for the paper First Order Motion Model for Image Animation ',
    skills: [ 'Jupyter Notebook', 'Python', 'Dockerfile' ],
    tags: [
      'deep learning',
      'generative model',
      'image animation',
      'motion retargeting'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/AliaksandrSiarohin/first-order-model'
      }
    ]
  },
  {
    id: 701,
    name: 'Matisse',
    creator: 'refatmonjur',
    description: ':fireworks: A well-designed local image and video selector for Android',
    skills: [ 'Java' ],
    tags: [
      'android',
      'android image picker',
      'android image selector',
      'android library',
      'video selector'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/zhihu/Matisse' } ]
  },
  {
    id: 702,
    name: 'primitive',
    creator: 'frankniu',
    description: 'Reproducing images with geometric primitives.',
    skills: [ 'Go', 'Python' ],
    tags: [ 'art', 'go', 'graphics', 'primitives' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/fogleman/primitive' }
    ]
  },
  {
    id: 703,
    name: 'jib',
    creator: 'techlead',
    description: '🏗 Build container images for your Java applications.',
    skills: [ 'Java', 'Shell', 'HTML', 'Batchfile', 'JavaScript' ],
    tags: [
      'containers',
      'docker',
      'docker registry',
      'gradle',
      'gradle plugin',
      'java',
      'jib',
      'kubernetes',
      'maven',
      'maven plugin',
      'microservices',
      'oci'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/GoogleContainerTools/jib'
      }
    ]
  },
  {
    id: 704,
    name: 'trivy',
    creator: 'zealptl',
    description: 'Scanner for vulnerabilities in container images, file systems, and Git repositories, as well as for configuration issues',
    skills: [
      'Go',
      'Smarty',
      'Shell',
      'Open Policy Agent',
      'Makefile',
      'Mustache',
      'Dockerfile'
    ],
    tags: [
      'containers',
      'devsecops',
      'docker',
      'go',
      'golang',
      'hacktoberfest',
      'iac',
      'infrastructure as code',
      'kubernetes',
      'misconfiguration',
      'security',
      'security tools',
      'vulnerability',
      'vulnerability detection',
      'vulnerability scanners'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/aquasecurity/trivy' }
    ]
  },
  {
    id: 705,
    name: 'nsfw_data_scraper',
    creator: 'joma',
    description: 'Collection of scripts to aggregate image data for the purposes of training an NSFW Image Classifier',
    skills: [ 'Shell', 'Jupyter Notebook', 'Dockerfile' ],
    tags: [
      'content moderation',
      'deep learning',
      'machine learning',
      'nsfw',
      'nsfw classifier',
      'pornography'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/alex000kim/nsfw_data_scraper'
      }
    ]
  },
  {
    id: 706,
    name: 'uCrop',
    creator: 'johndoe',
    description: 'Image Cropping Library for Android',
    skills: [ 'Java', 'C++', 'Makefile' ],
    tags: [
      'android',  'animation',
      'crop',     'image',
      'java',     'photo',
      'rotation', 'scale'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Yalantis/uCrop' } ]
  },
  {
    id: 707,
    name: 'libfacedetection',
    creator: 'patrick',
    description: 'An open source library for face detection in images. The face detection speed can reach 1000FPS. ',
    skills: [
      'C++',
      'CMake',
      'Python',
      'Kotlin',
      'Objective-C',
      'Objective-C++',
      'Shell',
      'Java'
    ],
    tags: [ 'arm', 'cnn', 'face detection' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ShiqiYu/libfacedetection'
      }
    ]
  },
  {
    id: 708,
    name: 'Real ESRGAN',
    creator: 'joybiswas',
    description: 'Real-ESRGAN aims at developing Practical Algorithms for General Image/Video Restoration.',
    skills: [ 'Python' ],
    tags: [
      'amine',
      'denoise',
      'esrgan',
      'image restoration',
      'jpeg compression',
      'pytorch',
      'real esrgan',
      'super resolution'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/xinntao/Real-ESRGAN'
      }
    ]
  },
  {
    id: 709,
    name: 'cropperjs',
    creator: 'anvinhtr',
    description: 'JavaScript image cropper.',
    skills: [ 'JavaScript', 'SCSS', 'CSS', 'Shell' ],
    tags: [
      'cropper',
      'cropperjs',
      'image cropper',
      'image processing',
      'javascript'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/fengyuanchen/cropperjs'
      }
    ]
  },
  {
    id: 710,
    name: 'watchtower',
    creator: 'saif',
    description: 'A process for automating Docker container base image updates. ',
    skills: [ 'Go', 'Shell', 'Dockerfile' ],
    tags: [
      'automation',
      'continuous delivery',
      'devops',
      'docker',
      'hacktoberfest',
      'notifications',
      'receive notifications',
      'registry',
      'update checker',
      'watchtower'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/containrrr/watchtower'
      }
    ]
  },
  {
    id: 711,
    name: 'clip as service',
    creator: 'mehedishohag',
    description: 'Embed images and sentences into fixed-length vectors with CLIP',
    skills: [ 'Python', 'Shell', 'EJS' ],
    tags: [
      'bert',
      'bert as service',
      'clip as service',
      'clip model',
      'cross modal retrieval',
      'cross modality',
      'deep learning',
      'multi modality',
      'neural search',
      'onnx',
      'openai',
      'pytorch',
      'sentence encoding'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jina-ai/clip-as-service'
      }
    ]
  },
  {
    id: 712,
    name: 'kaniko',
    creator: 'abdulimtiaz',
    description: 'Build Container Images In Kubernetes',
    skills: [ 'Go', 'Shell', 'Dockerfile', 'Python', 'Makefile', 'Starlark' ],
    tags: [ 'containers', 'developer tools', 'docker', 'kubernetes' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/GoogleContainerTools/kaniko'
      }
    ]
  },
  {
    id: 713,
    name: 'albumentations',
    creator: 'anvinhtr',
    description: 'Fast image augmentation library and an easy-to-use wrapper around other libraries. Documentation:  https://albumentations.ai/docs/ Paper about the library: https://www.mdpi.com/2078-2489/11/2/125',
    skills: [ 'Python', 'Shell', 'Dockerfile' ],
    tags: [
      'augmentation',
      'deep learning',
      'detection',
      'fast augmentations',
      'image augmentation',
      'image classification',
      'image processing',
      'image segmentation',
      'machine learning',
      'object detection',
      'python',
      'segmentation'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/albumentations-team/albumentations'
      }
    ]
  },
  {
    id: 714,
    name: 'PySimpleGUI',
    creator: 'frankniu',
    description: "Launched in 2018. It's 2022 and PySimpleGUI is actively developed & supported. Create complex windows simply. Supports tkinter, Qt, WxPython, Remi (in browser). Create GUI applications trivially with a full set of widgets. Multi-Window applications are also simple. 3.4 to 3.11 supported. 325+ Demo programs & Cookbook for rapid start. Extensive documentation.  Examples for Machine Learning(OpenCV Integration,  Chatterbot), Rainmeter-like Desktop Widgets, Matplotlib + Pyplot integration, add GUI to command line scripts, PDF & Image Viewer. For both beginning and advanced programmers. docs -  PySimpleGUI.org GitHub - PySimpleGUI.com. The Minecraft of GUIs - simple to complex... does them all.",
    skills: [ 'Python', 'HTML', 'CSS', 'JavaScript', 'Makefile', 'Batchfile' ],
    tags: [
      'beginner friendly', 'datavisualization',
      'games',             'gui',
      'gui framework',     'gui programming',
      'gui window',        'popup window',
      'progress meter',    'pyside2',
      'pysimplegui',       'python',
      'qt',                'qt gui',
      'remi',              'systemtray',
      'tkinter',           'tkinter gui',
      'tkinter python',    'wxpython'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/PySimpleGUI/PySimpleGUI'
      }
    ]
  },
  {
    id: 715,
    name: 'caire',
    creator: 'abdulimtiaz',
    description: 'Content aware image resize library',
    skills: [ 'Go', 'Shell', 'Makefile' ],
    tags: [
      'computer vision',
      'content aware resize',
      'content aware scaling',
      'edge detection',
      'face detection',
      'golang',
      'image processing',
      'image resize',
      'machine learning',
      'seam carving'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/esimov/caire' } ]
  },
  {
    id: 716,
    name: 'awesome raspberry pi',
    creator: 'abdulimtiaz',
    description: '📝 A curated list of awesome Raspberry Pi tools, projects, images and resources',
    skills: [ 'Shell', 'Makefile', 'Ruby' ],
    tags: [
      'awesome',
      'awesome list',
      'list',
      'raspberry pi',
      'resources',
      'rpi'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/thibmaek/awesome-raspberry-pi'
      }
    ]
  },
  {
    id: 717,
    name: 'neural doodle',
    creator: 'refatmonjur',
    description: "Turn your two-bit doodles into fine artworks with deep neural networks, generate seamless textures from photos, transfer style from one image to another, perform example-based upscaling, but wait... there's more! (An implementation of Semantic Style Transfer.)",
    skills: [ 'Python', 'Shell' ],
    tags: [
      'deep learning',
      'deep neural networks',
      'image generation',
      'image manipulation',
      'image processing'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/alexjc/neural-doodle'
      }
    ]
  },
  {
    id: 718,
    name: 'Pillow',
    creator: 'zealptl',
    description: 'The friendly PIL fork (Python Imaging Library)',
    skills: [
      'Python',
      'C',
      'HTML',
      'PostScript',
      'Shell',
      'Makefile',
      'CMake',
      'Gnuplot'
    ],
    tags: [
      'c',
      'cross platform',
      'image',
      'image processing',
      'pil',
      'pillow',
      'python',
      'python 3'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/python-pillow/Pillow'
      }
    ]
  },
  {
    id: 719,
    name: 'glide transformations',
    creator: 'abdulimtiaz',
    description: 'An Android transformation library providing a variety of image transformations for Glide.',
    skills: [ 'Java', 'Kotlin' ],
    tags: [
      'android',
      'android library',
      'glide',
      'image processing',
      'java',
      'kotlin'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/wasabeef/glide-transformations'
      }
    ]
  },
  {
    id: 720,
    name: 'react native snap carousel',
    creator: 'justinsiu',
    description: 'Swiper/carousel component for React Native featuring previews, multiple layouts, parallax images, performant handling of huge numbers of items, and more. Compatible with Android & iOS.',
    skills: [ 'JavaScript', 'Objective-C', 'Ruby', 'Java', 'Starlark' ],
    tags: [
      'advanced effects',
      'carousel',
      'flatlist based',
      'infinite scroll',
      'parallax effect',
      'swiper'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/meliorence/react-native-snap-carousel'
      }
    ]
  },
  {
    id: 721,
    name: 'pix2pix',
    creator: 'tufayelahmed',
    description: 'Image-to-image translation with conditional adversarial nets',
    skills: [ 'Lua', 'Python', 'MATLAB', 'TeX', 'Shell' ],
    tags: [
      'computer graphics',
      'computer vision',
      'dcgan',
      'deep learning',
      'gan',
      'generative adversarial network',
      'image generation',
      'image manipulation',
      'image to image translation',
      'pix2pix'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/phillipi/pix2pix' } ]
  },
  {
    id: 722,
    name: 'R.swift',
    creator: 'saif',
    description: 'Strong typed, autocompleted resources like images, fonts and segues in Swift projects',
    skills: [ 'Swift', 'Ruby', 'Shell' ],
    tags: [
      'autocompletion',
      'code generator',
      'ios',
      'resources',
      'swift',
      'tvos',
      'watchos',
      'xcode'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/mac-cain13/R.swift' }
    ]
  },
  {
    id: 723,
    name: 'deep learning for image processing',
    creator: 'patrick',
    description: 'deep learning for image processing including classification and object-detection etc.',
    skills: [ 'Python', 'HTML' ],
    tags: [
      'bilibili',
      'classification',
      'deep learning',
      'object detection',
      'pytorch',
      'segmentation',
      'tensorflow2'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/WZMIAOMIAO/deep-learning-for-image-processing'
      }
    ]
  },
  {
    id: 724,
    name: 'labelme',
    creator: 'johndoe',
    description: 'Image Polygonal Annotation with Python (polygon, rectangle, circle, line, point and image-level flag annotation).',
    skills: [ 'Python', 'Dockerfile' ],
    tags: [
      'annotations',
      'classification',
      'computer vision',
      'deep learning',
      'image annotation',
      'instance segmentation',
      'python',
      'semantic segmentation',
      'video annotation'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/wkentaro/labelme' } ]
  },
  {
    id: 725,
    name: 'dom to image',
    creator: 'tanviryouhana',
    description: 'Generates an image from a DOM node using HTML5 canvas',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [
      'canvas', 'css',
      'dom',    'html',
      'image',  'javascript',
      'raster', 'render',
      'svg',    'vector'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/tsayen/dom-to-image'
      }
    ]
  },
  {
    id: 726,
    name: 'fine uploader',
    creator: 'janedoe',
    description: 'Multiple file upload plugin with image previews, drag and drop, progress bars. S3 and Azure support, image scaling, form support, chunking, resume, pause, and tons of other features.',
    skills: [ 'JavaScript', 'HTML', 'CSS', 'Makefile', 'TypeScript' ],
    tags: [
      'api',
      'dropzone',
      'file upload',
      'files',
      'fineuploader',
      'javascript',
      'javascript library',
      'standalone',
      'vanilla javascript',
      'vanilla js',
      'web development'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/FineUploader/fine-uploader'
      }
    ]
  },
  {
    id: 727,
    name: 'coil',
    creator: 'abdulimtiaz',
    description: 'Image loading for Android backed by Kotlin Coroutines.',
    skills: [ 'Kotlin', 'Shell' ],
    tags: [
      'android',
      'androidx',
      'coroutines',
      'image loader',
      'images',
      'kotlin',
      'kotlin coroutines',
      'okhttp',
      'okio'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/coil-kt/coil' } ]
  },
  {
    id: 728,
    name: 'Hitomi Downloader',
    creator: 'anvinhtr',
    description: ':cake: Desktop utility to download images/videos/music/text from various websites, and more.',
    skills: [ 'Python', 'HTML', 'Batchfile' ],
    tags: [
      'bilibili',   'downloader',
      'exhentai',   'gui',
      'hitomi',     'manga',
      'nhentai',    'pixiv',
      'pornhub',    'torrent',
      'twitter',    'youtube',
      'youtube dl'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/KurtBestor/Hitomi-Downloader'
      }
    ]
  },
  {
    id: 729,
    name: 'google images download',
    creator: 'patrick',
    description: "Python Script to download hundreds of images from 'Google Images'. It is a ready-to-run code!",
    skills: [ 'Python' ],
    tags: [
      'color filter',      'command line',
      'command line tool', 'download images',
      'google images',     'image database',
      'image dataset',     'image download',
      'image gallery',     'image processing',
      'image scraper',     'image search',
      'python',            'python script',
      'terminal'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hardikvasa/google-images-download'
      }
    ]
  },
  {
    id: 730,
    name: 'PaddleHub',
    creator: 'tanzilbaraskar',
    description: 'Awesome pre-trained models toolkit based on PaddlePaddle.(300+ models including Image, Text, Audio and Video with Easy Inference & Serving deployment)',
    skills: [ 'Python', 'Shell' ],
    tags: [
      'ai models',
      'awesome',
      'deep learning',
      'model',
      'nlp',
      'paddlehub',
      'pre trained',
      'vision'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/PaddlePaddle/PaddleHub'
      }
    ]
  },
  {
    id: 731,
    name: 'ImageOptim',
    creator: 'mehedishohag',
    description: 'GUI image optimizer for Mac',
    skills: [
      'HTML',  'Objective-C',
      'C',     'Makefile',
      'PHP',   'JavaScript',
      'Shell', 'CSS',
      'Ruby'
    ],
    tags: [
      'accelerator',
      'gui',
      'image optimization',
      'imageoptim',
      'mac app',
      'minification',
      'performace'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ImageOptim/ImageOptim'
      }
    ]
  },
  {
    id: 732,
    name: 'react native image picker',
    creator: 'abdulimtiaz',
    description: ':sunrise_over_mountains: A React Native module that allows you to use native UI to select media from the device library or directly from the camera.',
    skills: [
      'Java',
      'Objective-C',
      'TypeScript',
      'Ruby',
      'JavaScript',
      'Starlark'
    ],
    tags: [ 'image picker', 'picker', 'react native' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/react-native-image-picker/react-native-image-picker'
      }
    ]
  },
  {
    id: 733,
    name: 'vue lazyload',
    creator: 'zealptl',
    description: 'A Vue.js plugin for lazyload your Image or Component in your application.',
    skills: [ 'JavaScript', 'Shell', 'TypeScript' ],
    tags: [ 'lazyload', 'vue', 'vue lazyload' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hilongjw/vue-lazyload'
      }
    ]
  },
  {
    id: 734,
    name: 'robotgo',
    creator: 'joybiswas',
    description: 'RobotGo, Go Native cross-platform GUI automation  @vcaesar',
    skills: [ 'Go', 'C', 'Objective-C', 'HTML', 'Dockerfile' ],
    tags: [
      'automation', 'c',
      'go',         'golang',
      'hook',       'image',
      'mouse',      'opencv',
      'robot',      'robotgo',
      'rpa',        'window'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/go-vgo/robotgo' } ]
  },
  {
    id: 735,
    name: 'subsampling scale image view',
    creator: 'justinsiu',
    description: 'Android library (AAR). Highly configurable, easily extendable deep zoom view for displaying huge images without loss of detail. Perfect for photo galleries, maps, building plans etc.',
    skills: [ 'Java' ],
    tags: [
      'android',
      'android lib',
      'android library',
      'android libs',
      'deep zoom images',
      'large images',
      'pan',
      'scale',
      'zoom gestures',
      'zoom images'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/davemorrissey/subsampling-scale-image-view'
      }
    ]
  },
  {
    id: 736,
    name: 'AppImageKit',
    creator: 'anvinhtr',
    description: 'Package desktop applications as AppImages that run on common Linux-based operating systems, such as RHEL, CentOS, openSUSE, SLED, Ubuntu, Fedora, debian and derivatives. Join #AppImage on irc.libera.chat',
    skills: [ 'C', 'Shell', 'CMake' ],
    tags: [
      'appimage',
      'applications',
      'deployment',
      'linux',
      'linux app',
      'packaging'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/AppImage/AppImageKit'
      }
    ]
  },
  {
    id: 737,
    name: 'fancybox',
    creator: 'frankniu',
    description: 'jQuery lightbox script for displaying images, videos and more. Touch enabled, responsive and fully customizable. ',
    skills: [ 'JavaScript', 'CSS' ],
    tags: [
      'fancybox',
      'gallery',
      'jquery',
      'lightbox',
      'modal',
      'responsive',
      'touch'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/fancyapps/fancybox' }
    ]
  },
  {
    id: 738,
    name: 'docker node',
    creator: 'mdrislam30',
    description: 'Official Docker Image for Node.js :whale: :turtle: :rocket: ',
    skills: [ 'Dockerfile', 'Shell', 'JavaScript' ],
    tags: [
      'docker',
      'docker image',
      'docker node',
      'dockerfile',
      'node',
      'nodejs'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/nodejs/docker-node' }
    ]
  },
  {
    id: 739,
    name: 'ImageMagick',
    creator: 'zealptl',
    description: '🧙‍♂️ ImageMagick 7',
    skills: [
      'C',
      'HTML',
      'C++',
      'Makefile',
      'XS',
      'Shell',
      'Roff',
      'M4',
      'Perl',
      'Tcl',
      'DIGITAL Command Language',
      'CSS'
    ],
    tags: [
      'convert',
      'hacktoberfest',
      'image',
      'imagemagick',
      'magick',
      'resize'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ImageMagick/ImageMagick'
      }
    ]
  },
  {
    id: 740,
    name: 'lozad.js',
    creator: 'joybiswas',
    description: '🔥  Highly performant, light ~1kb and configurable lazy loader in pure JS with no dependencies for responsive images, iframes and more',
    skills: [ 'JavaScript' ],
    tags: [
      'hacktoberfest',
      'html',
      'images',
      'javascript',
      'lazy loading',
      'lazyload',
      'performance'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ApoorvSaxena/lozad.js'
      }
    ]
  },
  {
    id: 741,
    name: 'ImageAI',
    creator: 'joybiswas',
    description: 'A python library built to empower developers to build applications and systems  with self-contained Computer Vision capabilities',
    skills: [ 'Python' ],
    tags: [
      'ai practice recommendations',
      'algorithm',
      'artificial intelligence',
      'artificial neural networks',
      'densenet',
      'detection',
      'gpu',
      'image prediction',
      'image recognition',
      'imageai',
      'inceptionv3',
      'machine learning',
      'object detection',
      'offline capable',
      'prediction',
      'python',
      'python3',
      'squeezenet',
      'video'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/OlafenwaMoses/ImageAI'
      }
    ]
  },
  {
    id: 742,
    name: 'czkawka',
    creator: 'abdulimtiaz',
    description: 'Multi functional app to find duplicates, empty folders, similar images etc.',
    skills: [ 'Rust', 'Fluent', 'Python', 'Shell', 'Dockerfile' ],
    tags: [
      'cleaner',
      'duplicates',
      'gtk rs',
      'multiplatform',
      'rust',
      'similar images',
      'similar music',
      'similar videos'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/qarmin/czkawka' } ]
  },
  {
    id: 743,
    name: 'vanilla lazyload',
    creator: 'joybiswas',
    description: 'LazyLoad is a lightweight, flexible script that speeds up your website by deferring the loading of your below-the-fold images, backgrounds, videos, iframes and scripts to when they will enter the viewport. Written in plain "vanilla" JavaScript, it leverages IntersectionObserver, supports responsive images and enables native lazy loading.',
    skills: [ 'JavaScript' ],
    tags: [
      'iframes',              'images',
      'intersectionobserver', 'lazy loading',
      'lazy sizes',           'lazyload',
      'lazyload iframes',     'lazyload images',
      'lazyload script',      'lazyload videos',
      'picture',              'picture tag',
      'responsive images',    'srcset',
      'srcset sizes',         'vanilla javascript',
      'vanilla js',           'videos',
      'webp'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/verlok/vanilla-lazyload'
      }
    ]
  },
  {
    id: 744,
    name: 'react native fast image',
    creator: 'akbarhaider',
    description: '🚩 FastImage, performant React Native image component.',
    skills: [
      'TypeScript',
      'Java',
      'Objective-C',
      'JavaScript',
      'Ruby',
      'Starlark'
    ],
    tags: [
      'cocoapod',
      'glide',
      'hacktoberfest',
      'image',
      'image cache',
      'priority',
      'react native',
      'sdwebimage'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/DylanVann/react-native-fast-image'
      }
    ]
  },
  {
    id: 745,
    name: 'Nuke',
    creator: 'mehedishohag',
    description: 'Image loading system',
    skills: [ 'Swift', 'Shell', 'Ruby' ],
    tags: [ 'cache', 'gif', 'image', 'progressive', 'swift', 'webp' ],
    links: [ { type: 'GitHub', link: 'https://github.com/kean/Nuke' } ]
  },
  {
    id: 746,
    name: 'ansible',
    creator: 'janedoe',
    description: 'Ansible is a radically simple IT automation platform that makes your applications and systems easier to deploy and maintain. Automate everything from code deployment to network configuration to cloud management, in a language that approaches plain English, using SSH, with no agents to install on remote systems. https://docs.ansible.com.',
    skills: [
      'Python',    'PowerShell',
      'Shell',     'C#',
      'Jinja',     'Makefile',
      'Go',        'Roff',
      'Batchfile'
    ],
    tags: [ 'ansible', 'hacktoberfest', 'python' ],
    links: [ { type: 'GitHub', link: 'https://github.com/ansible/ansible' } ]
  },
  {
    id: 747,
    name: 'select2',
    creator: 'abdulimtiaz',
    description: 'Select2 is a jQuery based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.',
    skills: [ 'JavaScript', 'SCSS', 'HTML' ],
    tags: [ 'javascript', 'jquery', 'select2' ],
    links: [ { type: 'GitHub', link: 'https://github.com/select2/select2' } ]
  },
  {
    id: 748,
    name: 'remote jobs',
    creator: 'joybiswas',
    description: 'A list of semi to fully remote-friendly companies (jobs) in tech.',
    skills: [ 'JavaScript', 'HTML', 'CSS', 'Shell' ],
    tags: [
      'hacktoberfest',
      'hacktoberfest2020',
      'job board',
      'jobs search',
      'jobsearch',
      'jobseeker',
      'remote',
      'remote job',
      'remote work'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/remoteintech/remote-jobs'
      }
    ]
  },
  {
    id: 749,
    name: 'rustdesk',
    creator: 'techlead',
    description: 'Yet another remote desktop software',
    skills: [
      'Rust',        'C',
      'CSS',         'C++',
      'Python',      'NSIS',
      'HTML',        'Shell',
      'AppleScript', 'Dockerfile',
      'Objective-C'
    ],
    tags: [
      'anydesk',        'frp',
      'gui',            'p2p',
      'parsec',         'rdp',
      'remote',         'remote access',
      'remote control', 'remote desktop',
      'rust',           'sciter',
      'teamviewer',     'vnc'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/rustdesk/rustdesk' }
    ]
  },
  {
    id: 750,
    name: 'flysystem',
    creator: 'akbarhaider',
    description: 'Abstraction for local and remote filesystems',
    skills: [ 'PHP', 'Shell' ],
    tags: [ 'filesystem', 'filesystem library', 'php', 'thephpleague' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/thephpleague/flysystem'
      }
    ]
  },
  {
    id: 751,
    name: 'capistrano',
    creator: 'mdrislam30',
    description: 'Remote multi-server automation tool',
    skills: [ 'Ruby', 'Gherkin', 'HTML' ],
    tags: [ 'capistrano', 'deployment', 'ruby', 'ssh' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/capistrano/capistrano'
      }
    ]
  },
  {
    id: 752,
    name: 'remote working',
    creator: 'joybiswas',
    description: '收集整理远程工作相关的资料',
    skills: [ 'Ruby' ],
    tags: [
      'china',
      'freelancer',
      'remote work',
      'remote workers',
      'soho',
      'telecommunications',
      'work from home'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/greatghoul/remote-working'
      }
    ]
  },
  {
    id: 753,
    name: 'pupy',
    creator: 'tanzilbaraskar',
    description: 'Pupy is an opensource, cross-platform (Windows, Linux, OSX, Android) remote administration and post-exploitation tool mainly written in python',
    skills: [
      'Python',     'C',
      'C++',        'Go',
      'Makefile',   'C#',
      'Shell',      'Ruby',
      'JavaScript', 'HTML'
    ],
    tags: [
      'android',       'backdoor',
      'linux',         'mac os',
      'meterpreter',   'payload',
      'pentesting',    'post exploitation',
      'pupy',          'python',
      'rat',           'reflective injection',
      'remote access', 'remote admin tool',
      'reverse shell', 'shell',
      'windows'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/n1nj4sec/pupy' } ]
  },
  {
    id: 754,
    name: 'TheFatRat',
    creator: 'joma',
    description: 'Thefatrat a massive exploiting tool : Easy tool to generate backdoor and easy tool to post exploitation attack like browser attack and etc . This tool compiles a malware with popular payload and then the compiled malware can be execute on windows, android, mac . The malware that created with this tool also have an ability to bypass most AV software protection .',
    skills: [
      'C',
      'RenderScript',
      'Shell',
      'Python',
      'C++',
      'Ruby',
      'CMake',
      'C#'
    ],
    tags: [
      'accessibility',        'antivirus',
      'autorun',              'backdoor',
      'bypass',               'bypass av',
      'bypassantivirus',      'dracos',
      'hacking',              'kali linux',
      'linux',                'malware',
      'metasploit framework', 'msfvenom',
      'rat',                  'remote',
      'remote access',        'thefatrat',
      'tool',                 'trojan'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/screetsec/TheFatRat'
      }
    ]
  },
  {
    id: 755,
    name: 'react native push notification',
    creator: 'bob',
    description: 'React Native Local and Remote Notifications',
    skills: [ 'Java', 'JavaScript', 'Objective-C', 'Starlark', 'Ruby' ],
    tags: [ 'android', 'ios', 'push notifications', 'react native' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/zo0r/react-native-push-notification'
      }
    ]
  },
  {
    id: 756,
    name: 'mRemoteNG',
    creator: 'justinsiu',
    description: 'mRemoteNG is the next generation of mRemote, open source, tabbed, multi-protocol, remote connections manager.',
    skills: [ 'C#', 'PowerShell', 'TSQL', 'XSLT', 'Gherkin', 'Python', 'CSS' ],
    tags: [
      'c sharp',
      'mremoteng',
      'multi protocol',
      'rdp',
      'remote access',
      'remote desktop',
      'ssh'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/mRemoteNG/mRemoteNG'
      }
    ]
  },
  {
    id: 757,
    name: 'FreeRDP',
    creator: 'tanviryouhana',
    description: 'FreeRDP is a free remote desktop protocol library and clients',
    skills: [
      'C',                'CMake',
      'Objective-C',      'Java',
      'C++',              'HTML',
      'Python',           'Shell',
      'Lua',              'Roff',
      'Perl',             'C#',
      'CSS',              'Makefile',
      'Rich Text Format'
    ],
    tags: [
      'android',
      'c',
      'freerdp',
      'library',
      'rdp',
      'remote desktop',
      'wiki'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/FreeRDP/FreeRDP' } ]
  },
  {
    id: 758,
    name: 'imgproxy',
    creator: 'akbarhaider',
    description: 'Fast and secure standalone server for resizing and converting remote images',
    skills: [ 'Go', 'C', 'Dockerfile', 'Shell' ],
    tags: [
      'avif',
      'crop image',
      'docker',
      'image',
      'image processing',
      'jpeg',
      'libvips',
      'microservice',
      'png',
      'resize images',
      'webp'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/imgproxy/imgproxy' }
    ]
  },
  {
    id: 759,
    name: 'Quasar',
    creator: 'tanviryouhana',
    description: 'Remote Administration Tool for Windows',
    skills: [ 'C#', 'HTML' ],
    tags: [
      'administration', 'c sharp',
      'dotnet',         'mono',
      'net',            'protobuf',
      'rat',            'red team',
      'remote',         'remote control',
      'remote desktop', 'security',
      'windows'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/quasar/Quasar' } ]
  },
  {
    id: 760,
    name: 'cloud torrent',
    creator: 'zealptl',
    description: '☁️ Cloud Torrent: a self-hosted remote torrent client',
    skills: [ 'Go', 'JavaScript', 'HTML', 'CSS' ],
    tags: [ 'cloud', 'golang', 'self hosted', 'torrent', 'torrent client' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jpillora/cloud-torrent'
      }
    ]
  },
  {
    id: 761,
    name: 'telepresence',
    creator: 'joma',
    description: 'Local development against a remote Kubernetes or OpenShift cluster',
    skills: [
      'Go',        'Shell',
      'Makefile',  'HCL',
      'Smarty',    'Dockerfile',
      'Batchfile', 'PowerShell',
      'Ruby'
    ],
    tags: [
      'docker',
      'kubernetes',
      'local development',
      'minikube',
      'proxy',
      'tunnel',
      'vpn'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/telepresenceio/telepresence'
      }
    ]
  },
  {
    id: 762,
    name: 'mockoon',
    creator: 'tanviryouhana',
    description: 'Mockoon is the easiest and quickest way to run mock APIs locally. No remote deployment, no account required, open source.',
    skills: [
      'TypeScript',
      'HTML',
      'JavaScript',
      'SCSS',
      'Dockerfile',
      'Shell',
      'Batchfile'
    ],
    tags: [
      'api',            'application',
      'desktop',        'electron',
      'hacktoberfest',  'mock',
      'mock api',       'mock data',
      'mock server',    'mocking',
      'mocking server', 'mocking utility',
      'openapi',        'openapi3',
      'prototyping',    'rest',
      'rest api',       'server',
      'swagger'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/mockoon/mockoon' } ]
  },
  {
    id: 763,
    name: 'chrome remote interface',
    creator: 'akbarhaider',
    description: 'Chrome Debugging Protocol interface for Node.js',
    skills: [ 'JavaScript', 'Shell' ],
    tags: [
      'browser',
      'chrome debugging protocol',
      'firefox',
      'google chrome',
      'headless',
      'javascript',
      'microsoft edge',
      'mobile safari',
      'nodejs',
      'opera'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/cyrus-and/chrome-remote-interface'
      }
    ]
  },
  {
    id: 764,
    name: 'Arduino IRremote',
    creator: 'techlead',
    description: 'Infrared remote library for Arduino: send and receive infrared signals with multiple protocols',
    skills: [ 'C++', 'C' ],
    tags: [ 'arduino', 'infrared', 'library' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Arduino-IRremote/Arduino-IRremote'
      }
    ]
  },
  {
    id: 765,
    name: 'dockerode',
    creator: 'joybiswas',
    description: "Docker + Node = Dockerode (Node.js module for Docker's Remote API)",
    skills: [ 'JavaScript', 'Dockerfile' ],
    tags: [ 'docker', 'javascript', 'moby', 'node', 'nodejs' ],
    links: [ { type: 'GitHub', link: 'https://github.com/apocas/dockerode' } ]
  },
  {
    id: 766,
    name: 'AhMyth Android RAT',
    creator: 'joybiswas',
    description: 'Android Remote Administration Tool',
    skills: [ 'Smali', 'JavaScript', 'Java', 'HTML', 'CSS' ],
    tags: [
      'ahmyth',
      'ahmyth rat',
      'android',
      'android rat',
      'electron app'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/AhMyth/AhMyth-Android-RAT'
      }
    ]
  },
  {
    id: 767,
    name: 'vscode dev containers',
    creator: 'tanviryouhana',
    description: 'A repository of development container definitions for the VS Code Remote - Containers extension and GitHub Codespaces',
    skills: [
      'Shell',      'Dockerfile',
      'JavaScript', 'Jupyter Notebook',
      'Python',     'C#',
      'Java',       'TypeScript',
      'C++',        'Rust',
      'Go',         'Swift',
      'Ruby',       'PowerShell',
      'Dart',       'Elm',
      'HTML',       'F#',
      'CMake',      'R',
      'PHP',        'Clojure',
      'Starlark',   'Reason',
      'CSS',        'HCL',
      'Bicep',      'Perl',
      'TSQL',       'Batchfile'
    ],
    tags: [
      'codespaces',
      'containers',
      'dev containers',
      'devcontainer',
      'devcontainers',
      'docker',
      'github',
      'github codespaces',
      'remote',
      'remote development',
      'visual studio code',
      'visual studio codespaces',
      'vs',
      'vscode'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/microsoft/vscode-dev-containers'
      }
    ]
  },
  {
    id: 768,
    name: 'remi',
    creator: 'janedoe',
    description: 'Python REMote Interface library. Platform independent. In about 100 Kbytes, perfect for your diet.',
    skills: [ 'Python', 'Jupyter Notebook', 'CSS', 'Shell' ],
    tags: [
      'gui',
      'gui library',
      'platform independent',
      'python',
      'remi',
      'ui'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/rawpython/remi' } ]
  },
  {
    id: 769,
    name: 'BoostNote App',
    creator: 'bob',
    description: 'Boost Note is a document driven project management tool that maximizes remote DevOps team velocity.',
    skills: [ 'TypeScript', 'JavaScript', 'Swift', 'CSS', 'Kotlin', 'HTML' ],
    tags: [
      'agile development',
      'boostnote',
      'developer tools',
      'devops',
      'documentation tool',
      'electron',
      'hacktoberfest',
      'hacktoberfest2021',
      'markdown',
      'notes for developer',
      'react',
      'typescript',
      'wiki'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/BoostIO/BoostNote-App'
      }
    ]
  },
  {
    id: 770,
    name: 'react native storage',
    creator: 'janedoe',
    description: 'local storage wrapper for both react-native and browser. Support size controlling, auto expiring, remote data auto syncing and getting batch data in one query.',
    skills: [ 'JavaScript' ],
    tags: [
      'asyncstorage',
      'localstorage',
      'react native',
      'reactjs',
      'sync'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/sunnylqm/react-native-storage'
      }
    ]
  },
  {
    id: 771,
    name: 'obs websocket',
    creator: 'refatmonjur',
    description: 'Remote-control of OBS Studio through WebSocket',
    skills: [ 'C++', 'CMake', 'C', 'Shell' ],
    tags: [ 'obs studio', 'remote control', 'websocket' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/obsproject/obs-websocket'
      }
    ]
  },
  {
    id: 772,
    name: 'remotedebug ios webkit adapter',
    creator: 'janedoe',
    description: 'Debug Safari and WebViews on iOS from tools like VS Code and Chrome DevTools',
    skills: [ 'TypeScript', 'JavaScript', 'CSS' ],
    tags: [
      'chrome devtools',
      'debugger',
      'devtools',
      'ios',
      'protocol adapter',
      'remotedebug',
      'safari'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/RemoteDebug/remotedebug-ios-webkit-adapter'
      }
    ]
  },
  {
    id: 773,
    name: 'pocsuite3',
    creator: 'justinsiu',
    description: 'pocsuite3 is an open-sourced remote vulnerability testing framework developed by the Knownsec 404 Team.',
    skills: [
      'Python',
      'Assembly',
      'Roff',
      'Java',
      'Dockerfile',
      'Makefile',
      'Batchfile'
    ],
    tags: [ 'pentesting', 'python', 'security', 'security tools' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/knownsec/pocsuite3' }
    ]
  },
  {
    id: 774,
    name: 'ZeroBraneStudio',
    creator: 'mdrislam30',
    description: 'Lightweight Lua-based IDE for Lua with code completion, syntax highlighting, live coding, remote debugger, and code analyzer; supports Lua 5.1, 5.2, 5.3, 5.4, LuaJIT and other Lua interpreters on Windows, macOS, and Linux',
    skills: [ 'Lua', 'Shell', 'C', 'CMake', 'Batchfile' ],
    tags: [
      'debugger',
      'editor',
      'ide',
      'lua',
      'lua engines',
      'syntax highlighting',
      'wxwidgets applications',
      'zerobrane',
      'zerobrane studio'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/pkulchenko/ZeroBraneStudio'
      }
    ]
  },
  {
    id: 775,
    name: 'EternalTerminal',
    creator: 'tanzilbaraskar',
    description: 'Re-Connectable secure remote shell',
    skills: [ 'C++', 'CMake', 'Shell', 'Dockerfile' ],
    tags: [ 'mosh', 'remote shell', 'ssh', 'terminal', 'tmux' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/MisterTea/EternalTerminal'
      }
    ]
  },
  {
    id: 776,
    name: 'Andromeda',
    creator: 'tanviryouhana',
    description: ' Andromeda simplifies local/remote communication for Android modularization',
    skills: [ 'Java', 'Groovy' ],
    tags: [ 'android', 'ipc', 'modularization', 'router' ],
    links: [ { type: 'GitHub', link: 'https://github.com/iqiyi/Andromeda' } ]
  },
  {
    id: 777,
    name: 'remotestorage.js',
    creator: 'anvinhtr',
    description: '⬡ JavaScript client library for integrating remoteStorage in apps',
    skills: [ 'JavaScript', 'TypeScript', 'Shell' ],
    tags: [
      'indexeddb',
      'javascript',
      'javascript library',
      'localstorage',
      'offline capable',
      'offline first',
      'remotestorage',
      'remotestorage client',
      'storage',
      'sync',
      'synchronization',
      'unhosted'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/remotestorage/remotestorage.js'
      }
    ]
  },
  {
    id: 778,
    name: 'Stitch',
    creator: 'frankniu',
    description: 'Python Remote Administration Tool (RAT)',
    skills: [ 'Python', 'Shell', 'Objective-C', 'Roff', 'C' ],
    tags: [
      'cross platform',
      'keylogger',
      'linux',
      'mac osx',
      'nsis',
      'payload',
      'python',
      'rat',
      'reverse shell',
      'windows'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/nathanlopez/Stitch' }
    ]
  },
  {
    id: 779,
    name: 'sofa bolt',
    creator: 'johndoe',
    description: 'SOFABolt is a lightweight, easy to use and high performance remoting framework based on Netty.',
    skills: [ 'Java', 'Lua', 'Shell', 'Batchfile' ],
    tags: [ 'java', 'netty', 'sofa bolt', 'sofa rpc', 'sofastack' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/sofastack/sofa-bolt'
      }
    ]
  },
  {
    id: 780,
    name: 'IRremoteESP8266',
    creator: 'justinsiu',
    description: 'Infrared remote library for ESP8266/ESP32: send and receive infrared signals with multiple protocols. Based on: https://github.com/shirriff/Arduino-IRremote/',
    skills: [ 'C++', 'Python', 'C', 'Shell', 'Makefile' ],
    tags: [
      '940nm',           'airconditioners',
      'arduino',         'arduino ide',
      'arduino library', 'communication',
      'esp32',           'esp8266',
      'hacktoberfest',   'home automation',
      'hvac',            'hvac control',
      'infrared',        'ir decoder',
      'ir device',       'platformio',
      'protocols',       'remote control'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/crankyoldgit/IRremoteESP8266'
      }
    ]
  },
  {
    id: 781,
    name: 'ssh action',
    creator: 'akbarhaider',
    description: 'GitHub Actions for executing remote ssh commands.',
    skills: [ 'Dockerfile', 'Shell' ],
    tags: [ 'github actions', 'ssh', 'ssh client' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/appleboy/ssh-action'
      }
    ]
  },
  {
    id: 782,
    name: 'rtop',
    creator: 'frankniu',
    description: 'rtop is an interactive, remote system monitoring tool based on SSH',
    skills: [ 'Go' ],
    tags: [ 'cli', 'monitoring', 'ssh' ],
    links: [ { type: 'GitHub', link: 'https://github.com/rapidloop/rtop' } ]
  },
  {
    id: 783,
    name: 'Remotery',
    creator: 'joybiswas',
    description: 'Single C file, Realtime CPU/GPU Profiler with Remote Web Viewer',
    skills: [ 'C', 'JavaScript', 'CSS', 'HTML', 'Objective-C++' ],
    tags: [
      'c',      'cpu',
      'cuda',   'd3d11',
      'gpu',    'metal',
      'opengl', 'profiler'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Celtoys/Remotery' } ]
  },
  {
    id: 784,
    name: 'EvilOSX',
    creator: 'joma',
    description: 'An evil RAT (Remote Administration Tool) for macOS / OS X.',
    skills: [ 'Python', 'Dockerfile' ],
    tags: [
      'backdoor',
      'mac',
      'macos',
      'macosx',
      'osx',
      'pentesting',
      'post exploitation',
      'python',
      'python3',
      'rat',
      'reverse shell'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Marten4n6/EvilOSX' }
    ]
  },
  {
    id: 785,
    name: 'flightplan',
    creator: 'johndoe',
    description: 'Run sequences of shell commands against local and remote hosts.',
    skills: [ 'JavaScript' ],
    tags: [ 'deploy', 'devops', 'javascript', 'nodejs', 'ssh', 'tasks' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/pstadler/flightplan'
      }
    ]
  },
  {
    id: 786,
    name: 'remote redux devtools',
    creator: 'saif',
    description: 'Redux DevTools remotely.',
    skills: [ 'JavaScript' ],
    tags: [ 'debug', 'devtools', 'redux', 'remotedev' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/zalmoxisus/remote-redux-devtools'
      }
    ]
  },
  {
    id: 787,
    name: 'ALVR',
    creator: 'patrick',
    description: 'ALVR is an open source remote VR display for Gear VR and Oculus Go. With it, you can play SteamVR games in your standalone headset.',
    skills: [
      'C++',        'C',
      'C#',         'JavaScript',
      'HTML',       'Python',
      'Inno Setup', 'Batchfile',
      'Cuda',       'HLSL',
      'Shell'
    ],
    tags: [ 'gear vr', 'oculus', 'openvr', 'steamvr' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/polygraphene/ALVR' }
    ]
  },
  {
    id: 788,
    name: 'POC T',
    creator: 'johndoe',
    description: '渗透测试插件化并发框架 / Open-sourced remote vulnerability PoC/EXP framework',
    skills: [ 'Python' ],
    tags: [ 'exploitation', 'pentesting', 'vulnerability scanner' ],
    links: [ { type: 'GitHub', link: 'https://github.com/Xyntax/POC-T' } ]
  },
  {
    id: 789,
    name: 'Remmina',
    creator: 'bob',
    description: 'Mirror of https://gitlab.com/Remmina/Remmina The GTK+ Remmina Remote Desktop Client',
    skills: [
      'C',          'CMake',
      'Shell',      'Roff',
      'Dockerfile', 'HTML',
      'JavaScript', 'C++'
    ],
    tags: [ 'gtk', 'rdp', 'remote control', 'spice', 'ssh client', 'vnc' ],
    links: [ { type: 'GitHub', link: 'https://github.com/FreeRDP/Remmina' } ]
  },
  {
    id: 790,
    name: 'getssl',
    creator: 'mehedishohag',
    description: 'obtain free SSL certificates from letsencrypt ACME server  Suitable for automating the process on remote servers. ',
    skills: [ 'Shell', 'PHP', 'Python', 'Batchfile', 'Makefile' ],
    tags: [
      'acme',
      'acme server',
      'certificate',
      'ftp',
      'getssl',
      'letsencrypt',
      'remote',
      'ssh',
      'ssl certificate'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/srvrco/getssl' } ]
  },
  {
    id: 791,
    name: 'gomplate',
    creator: 'patrick',
    description: 'A flexible commandline tool for template rendering. Supports lots of local and remote datasources.',
    skills: [ 'Go', 'Makefile', 'Dockerfile', 'Shell' ],
    tags: [
      'boltdb',        'cli',
      'cloud',         'config',
      'consul',        'devops',
      'devops tools',  'docker',
      'go',            'golang',
      'hacktoberfest', 'sysadmin',
      'sysops',        'template',
      'templating',    'vault'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hairyhenderson/gomplate'
      }
    ]
  },
  {
    id: 792,
    name: 'WebApiClient',
    creator: 'bob',
    description: 'An open source project based on the HttpClient. You only need to define the c# interface and modify the related features to invoke the client library of the remote http interface asynchronously.',
    skills: [ 'C#', 'HTML', 'PowerShell' ],
    tags: [
      'client',          'form',
      'httpclient',      'json',
      'json rpc client', 'oauth2 client',
      'openapi',         'restful',
      'retrofit',        'swagger',
      'webapi',          'webclient',
      'xml'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/dotnetcore/WebApiClient'
      }
    ]
  },
  {
    id: 793,
    name: 'L3MON',
    creator: 'justinsiu',
    description: 'L3MON - Remote Android Managment Suite',
    skills: [ 'Smali', 'HTML', 'Java', 'JavaScript', 'CSS' ],
    tags: [ 'android', 'android rat', 'android remote', 'device management' ],
    links: [ { type: 'GitHub', link: 'https://github.com/D3VL/L3MON' } ]
  },
  {
    id: 794,
    name: 'flagsmith',
    creator: 'janedoe',
    description: 'Open Source Feature Flagging and Remote Config Service. Host on-prem or use our hosted version at https://flagsmith.com/',
    skills: [
      'Python',
      'JavaScript',
      'SCSS',
      'HTML',
      'Handlebars',
      'Dockerfile',
      'Shell',
      'Procfile'
    ],
    tags: [
      'cd',
      'ci',
      'continuous integration',
      'docker',
      'feature flag',
      'feature flaggers',
      'feature flagging',
      'feature flags',
      'feature management',
      'feature toggles',
      'flagsmith',
      'multivariate testing',
      'python',
      'react',
      'remote config',
      'remote control'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Flagsmith/flagsmith'
      }
    ]
  },
  {
    id: 795,
    name: 'vdo.ninja',
    creator: 'frankniu',
    description: 'VDO.Ninja is a powerful tool that lets you bring remote video feeds into OBS or other studio software via WebRTC.',
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [
      'live',     'low latency',
      'ninja',    'obs',
      'obsninja', 'studio',
      'vdo',      'vdo ninja',
      'vdoninja', 'video',
      'vmix'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/steveseguin/vdo.ninja'
      }
    ]
  },
  {
    id: 796,
    name: 'mainframer',
    creator: 'refatmonjur',
    description: 'Tool for remote builds. Sync project to remote machine, execute command, sync back.',
    skills: [ 'Rust', 'Shell', 'Dockerfile' ],
    tags: [
      'mainframer',
      'remote build',
      'rsync',
      'rust',
      'ssh',
      'sync files'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/buildfoundation/mainframer'
      }
    ]
  },
  {
    id: 797,
    name: 'PdfViewPager',
    creator: 'saif',
    description: 'Android widget that can render PDF documents stored on SD card, linked as assets, or downloaded from a remote URL.',
    skills: [ 'Java' ],
    tags: [
      'android',
      'espresso',
      'library',
      'pdf',
      'pdf book',
      'pdf document',
      'rendering',
      'testing',
      'ui',
      'ui automated tests'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/voghDev/PdfViewPager'
      }
    ]
  },
  {
    id: 798,
    name: 'CHAOS',
    creator: 'johndoe',
    description: ':fire: CHAOS is a free and open-source Remote Administration Tool that allow generate binaries to control remote operating systems.',
    skills: [ 'Go', 'HTML', 'JavaScript', 'Dockerfile', 'Procfile' ],
    tags: [
      'chaos',
      'golang',
      'hacking',
      'hacking tool',
      'hacktoberfest',
      'payload',
      'remote admin tool',
      'remote administration tool',
      'remote control'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/tiagorlampert/CHAOS'
      }
    ]
  },
  {
    id: 799,
    name: 'PowerRemoteDesktop',
    creator: 'mdrislam30',
    description: 'Remote Desktop entirely coded in PowerShell.',
    skills: [ 'PowerShell' ],
    tags: [
      'desktop',
      'powershell',
      'rdp',
      'remote',
      'remote control',
      'windows'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/DarkCoderSc/PowerRemoteDesktop'
      }
    ]
  },
  {
    id: 800,
    name: 'BrowserBox',
    creator: 'abdulimtiaz',
    description: '📷 BrowserBox - Remote isolated browser API for security, automation visibility and interactivity. Run on our cloud, or bring your own. Full scope double reverse web proxy with multi-tab, mobile-ready browser UI frontend. Plus co-browsing, advanced adaptive streaming, secure document viewing and more! But only in the Pro version. Get BB today! Secure your document needs and internet, today!',
    skills: [
      'JavaScript',
      'HTML',
      'TypeScript',
      'CSS',
      'Shell',
      'Dockerfile'
    ],
    tags: [
      'browser',
      'browser automation',
      'browserview',
      'chrome',
      'chrome headless',
      'cobrowsing',
      'embeddable',
      'internet isolation',
      'proxy',
      'proxy server',
      'puppeteer',
      'remote browser',
      'remote browser isolation',
      'security',
      'viewfinder',
      'webrtc video',
      'websockets'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/crisdosyago/BrowserBox'
      }
    ]
  },
  {
    id: 801,
    name: 'web console',
    creator: 'frankniu',
    description: 'Simple web-based shell, remote shell in your browser',
    skills: [ 'JavaScript', 'PHP', 'HTML', 'Dockerfile', 'CSS', 'Makefile' ],
    tags: [ 'browser', 'console', 'remote', 'shell', 'web' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/nickola/web-console'
      }
    ]
  },
  {
    id: 802,
    name: 'rey',
    creator: 'mehedishohag',
    description: 'RestTemplate + resilience4j + opentracing for k8s',
    skills: [ 'Java' ],
    tags: [
      'fallback',
      'r4j',
      'remote',
      'resilience4j',
      'resttemplate',
      'reyclient'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/x-ream/rey' } ]
  },
  {
    id: 803,
    name: 'EggShell',
    creator: 'bob',
    description: 'iOS/macOS/Linux Remote Administration Tool',
    skills: [
      'Objective-C',
      'Python',
      'C',
      'Objective-C++',
      'Logos',
      'Makefile'
    ],
    tags: [
      'exploitation',
      'information security',
      'ios',
      'jailbreak',
      'macos',
      'metasploit',
      'meterpreter',
      'pentest scripts',
      'pentest tool',
      'remote admin tool',
      'reverse shell'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/neoneggplant/EggShell'
      }
    ]
  },
  {
    id: 804,
    name: 'owntone server',
    creator: 'tanviryouhana',
    description: "OwnTone is forked-daapd's new name. Linux/FreeBSD DAAP (iTunes) and MPD media server with support for AirPlay devices (multiroom), Apple Remote (and compatibles), Chromecast, Spotify and internet radio.",
    skills: [
      'C',          'Vue',
      'JavaScript', 'Yacc',
      'M4',         'Lex',
      'Makefile',   'Shell',
      'SCSS',       'Roff',
      'HTML'
    ],
    tags: [
      'airplay',
      'airplay2',
      'apple remote',
      'c',
      'chromecast audio',
      'daap',
      'daapd',
      'internet radio',
      'itunes',
      'mpd',
      'spotify'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/owntone/owntone-server'
      }
    ]
  },
  {
    id: 805,
    name: 'ShellPop',
    creator: 'zealptl',
    description: 'Pop shells like a master.',
    skills: [ 'Python', 'Ruby' ],
    tags: [
      'bind',
      'hacking',
      'pentest',
      'pop shells',
      'remote',
      'reverse',
      'shell'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/0x00-0x00/ShellPop' }
    ]
  },
  {
    id: 806,
    name: 'myrtille',
    creator: 'mdrislam30',
    description: 'A native HTML4 / HTML5 Remote Desktop Protocol and SSH client',
    skills: [
      'C#',
      'JavaScript',
      'ASP.NET',
      'PowerShell',
      'CSS',
      'Dockerfile',
      'VBScript',
      'Batchfile'
    ],
    tags: [
      'browser',
      'html',
      'rdp',
      'rdp gateway',
      'remote desktop',
      'ssh',
      'ssh gateway',
      'web'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/cedrozor/myrtille' }
    ]
  },
  {
    id: 807,
    name: 'ssf',
    creator: 'abdulimtiaz',
    description: 'Secure Socket Funneling - Network tool and toolkit - TCP and UDP port forwarding, SOCKS proxy, remote shell, standalone and cross platform',
    skills: [ 'C++', 'CMake', 'Shell', 'Batchfile', 'C' ],
    tags: [
      'cpp',
      'cpp11',
      'network',
      'port forwarding',
      'socks',
      'socks proxy',
      'socks server'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/securesocketfunneling/ssf'
      }
    ]
  },
  {
    id: 808,
    name: 'NeteaseCloudMusicApi',
    creator: 'abdulimtiaz',
    description: '网易云音乐 Node.js API service',
    skills: [ 'JavaScript', 'HTML', 'Dockerfile', 'TypeScript', 'Shell' ],
    tags: [
      'api',
      'apis',
      'cloudmusic',
      'javascript',
      'neteasecloud',
      'nodejs'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Binaryify/NeteaseCloudMusicApi'
      }
    ]
  },
  {
    id: 809,
    name: 'awesome piracy',
    creator: 'bob',
    description: 'A curated list of awesome warez and piracy links',
    skills: [ 'HTML', 'Shell' ],
    tags: [
      'audiobooks',
      'awesome list',
      'comics',
      'ebooks',
      'movies',
      'music',
      'piracy',
      'tv',
      'warez'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Igglybuff/awesome-piracy'
      }
    ]
  },
  {
    id: 810,
    name: 'lx music desktop',
    creator: 'mdrislam30',
    description: '一个基于 electron 的音乐软件',
    skills: [ 'JavaScript', 'Vue', 'Less', 'HTML', 'Pug' ],
    tags: [ 'electron app', 'javascript', 'music player', 'vue3' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/lyswhut/lx-music-desktop'
      }
    ]
  },
  {
    id: 811,
    name: 'YesPlayMusic',
    creator: 'janedoe',
    description: '高颜值的第三方网易云播放器，支持 Windows / macOS / Linux :electron: ',
    skills: [
      'Vue',
      'JavaScript',
      'CSS',
      'SCSS',
      'Dockerfile',
      'HTML',
      'Shell'
    ],
    tags: [
      'electron',         'javascript',
      'linux',            'mac',
      'macos',            'music',
      'music player',     'netease music',
      'player',           'progressive web app',
      'pwa',              'pwa apps',
      'vue',              'vue cli',
      'vue router',       'vuex',
      'web music player', 'windows'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/qier222/YesPlayMusic'
      }
    ]
  },
  {
    id: 812,
    name: 'UnblockNeteaseMusic',
    creator: 'abdulimtiaz',
    description: 'Revive unavailable songs for Netease Cloud Music',
    skills: [ 'JavaScript', 'Dockerfile', 'HTML' ],
    tags: [ 'netease cloud music', 'proxy server', 'unblocker' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/nondanee/UnblockNeteaseMusic'
      }
    ]
  },
  {
    id: 813,
    name: 'koel',
    creator: 'tufayelahmed',
    description: '🐦 A personal music streaming server that works.',
    skills: [
      'PHP',
      'TypeScript',
      'Shell',
      'Blade',
      'JavaScript',
      'Dockerfile'
    ],
    tags: [
      'audio',
      'hacktoberfest',
      'laravel',
      'mp3player',
      'streaming',
      'vue'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/koel/koel' } ]
  },
  {
    id: 814,
    name: 'Tone.js',
    creator: 'anvinhtr',
    description: 'A Web Audio framework for making interactive music in the browser.',
    skills: [ 'TypeScript', 'JavaScript' ],
    tags: [
      'javascript',
      'music',
      'samples',
      'scheduling',
      'synthesis',
      'tone',
      'web audio'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Tonejs/Tone.js' } ]
  },
  {
    id: 815,
    name: 'BackgroundMusic',
    creator: 'anvinhtr',
    description: "Background Music, a macOS audio utility: automatically pause your music, set individual apps' volumes and record system audio.",
    skills: [
      'C++',
      'Objective-C',
      'C',
      'Objective-C++',
      'Shell',
      'JavaScript',
      'TeX',
      'Python'
    ],
    tags: [ 'audio', 'audio utility', 'cpp', 'macos', 'objective c' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/kyleneideck/BackgroundMusic'
      }
    ]
  },
  {
    id: 816,
    name: 'beets',
    creator: 'refatmonjur',
    description: 'music library manager and MusicBrainz tagger',
    skills: [ 'Python', 'JavaScript', 'Shell', 'HTML', 'CSS' ],
    tags: [
      'cli',
      'hacktoberfest',
      'music',
      'music library',
      'musicbrainz',
      'python'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/beetbox/beets' } ]
  },
  {
    id: 817,
    name: 'musicbox',
    creator: 'saif',
    description: '网易云音乐命令行版本',
    skills: [ 'Python' ],
    tags: [ 'linux', 'music', 'netease musicbox', 'python' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/darknessomi/musicbox'
      }
    ]
  },
  {
    id: 818,
    name: 'AudioKit',
    creator: 'akbarhaider',
    description: 'Swift audio synthesis, processing, & analysis platform for iOS, macOS and tvOS',
    skills: [ 'Swift', 'C' ],
    tags: [
      'audio',
      'audiokit',
      'ios',
      'macos',
      'midi',
      'music',
      'playground',
      'swift',
      'swift playgrounds',
      'tvos'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/AudioKit/AudioKit' }
    ]
  },
  {
    id: 819,
    name: 'sonic pi',
    creator: 'joybiswas',
    description: 'Code. Music. Live.',
    skills: [
      'C++',           'Ruby',
      'HTML',          'C',
      'Clojure',       'Erlang',
      'Elixir',        'CSS',
      'CMake',         'Shell',
      'SuperCollider', 'JavaScript',
      'Python',        'QMake',
      'Batchfile',     'XSLT',
      'Objective-C++', 'Scheme',
      'LilyPond'
    ],
    tags: [
      'art',         'audio',
      'education',   'instrument',
      'live coding', 'livecoding',
      'music',       'schools',
      'synthesis',   'synthesizer'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/sonic-pi-net/sonic-pi'
      }
    ]
  },
  {
    id: 820,
    name: 'nuclear',
    creator: 'johndoe',
    description: 'Streaming music player that finds free music for you',
    skills: [
      'TypeScript',
      'JavaScript',
      'SCSS',
      'HTML',
      'Shell',
      'Dockerfile'
    ],
    tags: [
      'electron',
      'linux',
      'mac',
      'music',
      'music player',
      'stream',
      'streaming',
      'windows',
      'youtube'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/nukeop/nuclear' } ]
  },
  {
    id: 821,
    name: 'ieaseMusic',
    creator: 'joybiswas',
    description: '网易云音乐第三方',
    skills: [ 'JavaScript', 'HTML', 'Shell', 'CSS' ],
    tags: [
      'electron',
      'electron app',
      'highquality music',
      'jss',
      'mobx',
      'music',
      'music player',
      'netease cloud music',
      'netease cloudmusic',
      'netease music',
      'player',
      'react',
      'unblocker',
      'wang yi'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/trazyn/ieaseMusic' }
    ]
  },
  {
    id: 822,
    name: 'Google Play Music Desktop Player UNOFFICIAL ',
    creator: 'refatmonjur',
    description: 'A beautiful cross platform Desktop Player for Google Play Music',
    skills: [ 'JavaScript', 'Less', 'HTML', 'Shell', 'Dockerfile' ],
    tags: [
      'cross platform',
      'electron',
      'google play music',
      'music',
      'player'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL-'
      }
    ]
  },
  {
    id: 823,
    name: 'listen1_chrome_extension',
    creator: 'mdrislam30',
    description: 'one for all free music in china (chrome extension, also works for firefox)',
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [ 'chrome extension', 'music player' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/listen1/listen1_chrome_extension'
      }
    ]
  },
  {
    id: 824,
    name: 'spotify downloader',
    creator: 'anvinhtr',
    description: 'Download your Spotify playlists and songs along with album art and metadata (from YouTube if a match is found).',
    skills: [ 'Python', 'Shell', 'Dockerfile' ],
    tags: [
      'download music',
      'mp3',
      'music',
      'playlists',
      'song',
      'song lyrics',
      'spotdl',
      'spotdl cli',
      'spotify',
      'youtube music'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/spotDL/spotify-downloader'
      }
    ]
  },
  {
    id: 825,
    name: 'Hitomi Downloader',
    creator: 'justinsiu',
    description: ':cake: Desktop utility to download images/videos/music/text from various websites, and more.',
    skills: [ 'Python', 'HTML', 'Batchfile' ],
    tags: [
      'bilibili',   'downloader',
      'exhentai',   'gui',
      'hitomi',     'manga',
      'nhentai',    'pixiv',
      'pornhub',    'torrent',
      'twitter',    'youtube',
      'youtube dl'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/KurtBestor/Hitomi-Downloader'
      }
    ]
  },
  {
    id: 826,
    name: 'Jetpack MVVM Best Practice',
    creator: 'johndoe',
    description: '是 难得一见 的 Jetpack MVVM 最佳实践！在 以简驭繁 的代码中，对 视图控制器 乃至 标准化开发模式 形成正确、深入的理解！',
    skills: [ 'Java', 'HTML' ],
    tags: [
      'android',
      'androidx',
      'databinding',
      'databinding android',
      'jetpack',
      'jetpack android',
      'jetpack lifecycle components',
      'jetpack navigation',
      'livedata',
      'livedata viewmodel',
      'music',
      'music player',
      'mvvm',
      'mvvm android',
      'mvvm architecture',
      'navigation'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/KunMinX/Jetpack-MVVM-Best-Practice'
      }
    ]
  },
  {
    id: 827,
    name: 'mopidy',
    creator: 'saif',
    description: 'Mopidy is an extensible music server written in Python',
    skills: [ 'Python', 'HTML', 'Shell', 'CSS', 'Roff' ],
    tags: [ 'mopidy', 'music player', 'python' ],
    links: [ { type: 'GitHub', link: 'https://github.com/mopidy/mopidy' } ]
  },
  {
    id: 828,
    name: 'MuseScore',
    creator: 'bob',
    description: 'MuseScore is an open source and free music notation software. For support, contribution, bug reports, visit MuseScore.org. Fork and make pull requests!',
    skills: [
      'C++',        'CartoCSS',
      'QML',        'CMake',
      'Shell',      'C',
      'JavaScript', 'HTML',
      'Python',     'Batchfile',
      'Roff',       'Objective-C++',
      'Perl',       'CSS',
      'NSIS',       'PHP',
      'Dockerfile', 'QMake',
      'LilyPond',   'jq'
    ],
    tags: [
      'cpp',
      'musescore',
      'music notation',
      'musicxml',
      'qt',
      'sfz',
      'sheet music',
      'sheetmusic'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/musescore/MuseScore'
      }
    ]
  },
  {
    id: 829,
    name: 'Timber',
    creator: 'janedoe',
    description: 'Material Design Music Player',
    skills: [ 'Java' ],
    tags: [ 'android', 'material design', 'music player' ],
    links: [ { type: 'GitHub', link: 'https://github.com/naman14/Timber' } ]
  },
  {
    id: 830,
    name: 'wavesurfer.js',
    creator: 'frankniu',
    description: 'Navigable waveform built on Web Audio and Canvas',
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [ 'audio', 'music', 'waveform', 'web audio' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/katspaugh/wavesurfer.js'
      }
    ]
  },
  {
    id: 831,
    name: 'APlayer',
    creator: 'saif',
    description: ':lollipop: Wow, such a beautiful HTML5 music player',
    skills: [ 'JavaScript', 'SCSS' ],
    tags: [ 'aplayer', 'html', 'html5', 'music', 'player' ],
    links: [ { type: 'GitHub', link: 'https://github.com/DIYgod/APlayer' } ]
  },
  {
    id: 832,
    name: 'lmms',
    creator: 'techlead',
    description: 'Cross-platform music production software',
    skills: [
      'C++',   'C',
      'CMake', 'HTML',
      'CSS',   'Shell',
      'NSIS',  'Python'
    ],
    tags: [ 'daw', 'midi', 'music', 'songs' ],
    links: [ { type: 'GitHub', link: 'https://github.com/LMMS/lmms' } ]
  },
  {
    id: 833,
    name: 'listen1_desktop',
    creator: 'saif',
    description: 'one for all free music in china (Windows, Mac, Linux desktop)',
    skills: [ 'JavaScript', 'HTML' ],
    tags: [ 'desktop app', 'music player' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/listen1/listen1_desktop'
      }
    ]
  },
  {
    id: 834,
    name: 'AutoPiano',
    creator: 'joma',
    description: '自由钢琴 🎹 AutoPiano ( https://www.autopiano.cn )   Simple & Elegant Piano Online',
    skills: [ 'JavaScript', 'Vue', 'HTML', 'Less' ],
    tags: [
      'anti 996',
      'audio player',
      'entertainment',
      'instruments',
      'music',
      'piano',
      'relax'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/AutoPiano/AutoPiano'
      }
    ]
  },
  {
    id: 835,
    name: 'android advancedrecyclerview',
    creator: 'janedoe',
    description: "RecyclerView extension library which provides advanced features. (ex. Google's Inbox app like swiping, Play Music app like drag and drop sorting)",
    skills: [ 'Java', 'C#', 'JavaScript', 'CSS', 'Smalltalk' ],
    tags: [
      'android',
      'drag and drop',
      'expandable',
      'footer',
      'header',
      'recyclerview',
      'swipe'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/h6ah4i/android-advancedrecyclerview'
      }
    ]
  },
  {
    id: 836,
    name: 'librosa',
    creator: 'saif',
    description: 'Python library for audio and music analysis',
    skills: [ 'Python', 'MATLAB', 'Jupyter Notebook' ],
    tags: [
      'audio',   'dsp',
      'librosa', 'music',
      'nyucds',  'python',
      'scipy'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/librosa/librosa' } ]
  },
  {
    id: 837,
    name: 'jukebox',
    creator: 'techlead',
    description: 'Code for the paper "Jukebox: A Generative Model for Music"',
    skills: [
      'Python',
      'Cuda',
      'Jupyter Notebook',
      'C++',
      'Shell',
      'CSS',
      'Makefile',
      'HTML',
      'Dockerfile'
    ],
    tags: [
      'audio',
      'generative model',
      'music',
      'paper',
      'pytorch',
      'transformer',
      'vq vae'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/openai/jukebox' } ]
  },
  {
    id: 838,
    name: 'sound redux',
    creator: 'anvinhtr',
    description: 'A Soundcloud client built with React / Redux',
    skills: [ 'JavaScript', 'CSS', 'HTML' ],
    tags: [ 'music', 'react', 'redux', 'soundcloud' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/andrewngu/sound-redux'
      }
    ]
  },
  {
    id: 839,
    name: 'alda',
    creator: 'tanzilbaraskar',
    description: 'A music programming language for musicians. :notes:',
    skills: [ 'Go', 'Kotlin', 'Shell' ],
    tags: [
      'alda',
      'music',
      'music composition',
      'music programming language',
      'programming language'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/alda-lang/alda' } ]
  },
  {
    id: 840,
    name: 'iScript',
    creator: 'zealptl',
    description: '各种脚本 -- 关于 虾米 xiami.com, 百度网盘 pan.baidu.com, 115网盘 115.com, 网易音乐 music.163.com, 百度音乐 music.baidu.com, 360网盘/云盘 yunpan.cn, 视频解析 flvxz.com, bt torrent ↔ magnet, ed2k 搜索, tumblr 图片下载, unzip',
    skills: [ 'Python', 'JavaScript' ],
    tags: [
      'baiduyun',
      'iscript',
      'magnet torrent',
      'music',
      'python2',
      'tumblr',
      'unzip',
      'xiami'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/PeterDing/iScript' }
    ]
  },
  {
    id: 841,
    name: 'snapcast',
    creator: 'mdrislam30',
    description: 'Synchronous multiroom audio player',
    skills: [
      'C++',   'Python',
      'CMake', 'Makefile',
      'CSS',   'Roff',
      'HTML',  'Shell'
    ],
    tags: [
      'audio',
      'audio player',
      'audio streaming',
      'lms',
      'multiroom audio',
      'music',
      'sonos',
      'synchronous'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/badaix/snapcast' } ]
  },
  {
    id: 842,
    name: 'supercollider',
    creator: 'janedoe',
    description: 'An audio server, programming language, and IDE for sound synthesis and algorithmic composition.',
    skills: [
      'C++',              'SuperCollider',
      'C',                'Python',
      'CMake',            'Objective-C++',
      'JavaScript',       'HTML',
      'CSS',              'Yacc',
      'Shell',            'Scala',
      'Lex',              'Makefile',
      'NSIS',             'Objective-C',
      'XSLT',             'Batchfile',
      'Ruby',             'Perl',
      'Rich Text Format'
    ],
    tags: [
      'algorithmic composition',
      'audio',
      'c plus plus',
      'computer music',
      'electronic music',
      'livecoding',
      'music',
      'programming language',
      'sclang',
      'scsynth',
      'sound',
      'supercollider',
      'synthesis'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/supercollider/supercollider'
      }
    ]
  },
  {
    id: 843,
    name: 'Rythm.js',
    creator: 'akbarhaider',
    description: 'A javascript library that makes your page dance.',
    skills: [ 'JavaScript', 'HTML' ],
    tags: [
      'audio',
      'dance',
      'javascript',
      'music',
      'page dancing',
      'pulse',
      'rythm',
      'web'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Okazari/Rythm.js' } ]
  },
  {
    id: 844,
    name: 'SpotiFlyer',
    creator: 'janedoe',
    description: 'Kotlin Multiplatform Music Downloader, Supports Spotify /   Gaana / Youtube Music / Jio Saavn / SoundCloud.                                                                                          NOTE:   BEING REWRITTEN,  SO  STAY TUNED.',
    skills: [
      'Kotlin', 'CSS',
      'Java',   'HCL',
      'HTML',   'Shell',
      'Ruby'
    ],
    tags: [
      'album downloader', 'albums',
      'android',          'app',
      'desktop',          'gaana',
      'gaana downloader', 'metadata',
      'mp3',              'music',
      'music downloader', 'playlist downloader',
      'song downloader',  'soundcloud',
      'spotify',          'spotify downloader',
      'youtube',          'youtube downloader',
      'youtube music'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Shabinder/SpotiFlyer'
      }
    ]
  },
  {
    id: 845,
    name: 'scribbletune',
    creator: 'bob',
    description: 'Create music with JavaScript',
    skills: [ 'TypeScript', 'JavaScript' ],
    tags: [
      'ableton',     'ableton live',
      'chords',      'javascript',
      'live',        'midi',
      'music',       'nodejs',
      'scale',       'webaudio',
      'webaudioapi', 'webmidi'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/scribbletune/scribbletune'
      }
    ]
  },
  {
    id: 846,
    name: 'Cider',
    creator: 'anvinhtr',
    description: 'A new cross-platform Apple Music experience based on Electron and Vue.js written from scratch with performance in mind. 🚀',
    skills: [ 'JavaScript', 'EJS', 'CSS', 'Less', 'TypeScript', 'Shell' ],
    tags: [
      'apple music',
      'apple music electron',
      'applemusic',
      'audio',
      'cider',
      'community',
      'discord',
      'electron',
      'linux',
      'lyrics',
      'macos',
      'music',
      'open source',
      'performance',
      'windows'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ciderapp/Cider' } ]
  },
  {
    id: 847,
    name: 'Music Player',
    creator: 'justinsiu',
    description: 'From UI Proposal to Code :notes::arrow_forward:',
    skills: [ 'Java' ],
    tags: [
      'android',
      'motion design',
      'music',
      'music player',
      'player',
      'prototype',
      'transition',
      'transitions',
      'ui proposal'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/andremion/Music-Player'
      }
    ]
  },
  {
    id: 848,
    name: 'LyricsX',
    creator: 'joybiswas',
    description: '🎶 Ultimate lyrics app for macOS.',
    skills: [ 'Swift', 'Rich Text Format', 'Shell' ],
    tags: [
      'apple music',
      'audirvana',
      'download lyrics',
      'itunes',
      'lyrics',
      'macos app',
      'menubar',
      'music',
      'spotify',
      'swinsian',
      'vox'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ddddxxx/LyricsX' } ]
  },
  {
    id: 849,
    name: 'MusicBot',
    creator: 'saif',
    description: "🎶 A Discord music bot that's easy to set up and run yourself!",
    skills: [ 'Java', 'Shell' ],
    tags: [
      'discord',    'discord bot',
      'java',       'jda',
      'music',      'music bot',
      'musicbot',   'playlist',
      'playlists',  'radio',
      'soundcloud', 'youtube'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/jagrosh/MusicBot' } ]
  },
  {
    id: 850,
    name: 'Clementine',
    creator: 'frankniu',
    description: ':tangerine: Clementine Music Player',
    skills: [
      'C++',
      'CMake',
      'Objective-C++',
      'C',
      'Objective-C',
      'CSS',
      'PLSQL',
      'HTML',
      'Ruby'
    ],
    tags: [ 'c plus plus', 'linux', 'mac', 'music', 'qt', 'windows' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/clementine-player/Clementine'
      }
    ]
  },
  {
    id: 851,
    name: 'Red DiscordBot',
    creator: 'tanzilbaraskar',
    description: 'A multi-function Discord bot',
    skills: [
      'Python',
      'PLpgSQL',
      'PowerShell',
      'JavaScript',
      'Makefile',
      'Batchfile',
      'HTML'
    ],
    tags: [
      'bot',
      'chatbot',
      'discord',
      'fun',
      'hacktoberfest',
      'moderation',
      'modular',
      'music',
      'trivia'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Cog-Creators/Red-DiscordBot'
      }
    ]
  },
  {
    id: 852,
    name: 'FeelUOwn',
    creator: 'tufayelahmed',
    description: 'trying to be a robust, user-friendly and hackable music player',
    skills: [ 'Python', 'Makefile' ],
    tags: [
      'china',  'cli',
      'linux',  'music',
      'player', 'pyqt5',
      'python', 'python3'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/feeluown/FeelUOwn' }
    ]
  },
  {
    id: 853,
    name: 'navidrome',
    creator: 'johndoe',
    description: '🎧☁️ Modern Music Server and Streamer compatible with Subsonic/Airsonic',
    skills: [
      'Go',         'JavaScript',
      'Makefile',   'Shell',
      'C++',        'HTML',
      'Dockerfile', 'C',
      'CSS'
    ],
    tags: [
      'airsonic',        'madsonic',
      'media server',    'music',
      'music server',    'navidrome',
      'raspberry pi',    'self hosted',
      'streamer',        'streaming api',
      'streaming audio', 'subsonic',
      'subsonic server'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/navidrome/navidrome'
      }
    ]
  },
  {
    id: 854,
    name: 'Musish',
    creator: 'zealptl',
    description: 'Apple Music...ish ',
    skills: [ 'TypeScript', 'CSS', 'JavaScript', 'HTML', 'Shell' ],
    tags: [
      'apple',
      'apple music',
      'music',
      'musickit',
      'musickitjs',
      'react'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Musish/Musish' } ]
  },
  {
    id: 855,
    name: 'LNPopupController',
    creator: 'zealptl',
    description: 'LNPopupController is a framework for presenting view controllers as popups of other view controllers, much like the Apple Music and Podcasts apps.',
    skills: [ 'Objective-C', 'Swift', 'Shell', 'C' ],
    tags: [
      'cocoa touch',
      'ios',
      'lnpopupcontroller',
      'mac catalyst',
      'objective c',
      'popup',
      'swift',
      'uiviewcontroller',
      'xcode'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/LeoNatan/LNPopupController'
      }
    ]
  },
  {
    id: 856,
    name: 'MusicBot',
    creator: 'akbarhaider',
    description: ':musical_note: The original MusicBot for Discord (formerly SexualRhinoceros/MusicBot)',
    skills: [ 'Python', 'Shell', 'Batchfile', 'Dockerfile' ],
    tags: [ 'discord', 'hacktoberfest', 'musicbot', 'python' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Just-Some-Bots/MusicBot'
      }
    ]
  },
  {
    id: 857,
    name: 'musikcube',
    creator: 'zealptl',
    description: 'a cross-platform, terminal-based music player, audio engine, metadata indexer, and server in c++',
    skills: [
      'C++',        'C',
      'Kotlin',     'CMake',
      'Shell',      'Objective-C',
      'JavaScript', 'Objective-C++',
      'CSS',        'Java',
      'Batchfile',  'HTML',
      'Python'
    ],
    tags: [
      'alsa',
      'audio engine',
      'audio player',
      'coreaudio',
      'cross platform',
      'curses',
      'directsound',
      'music library',
      'music player',
      'music player client',
      'pulseaudio',
      'terminal',
      'wasapi'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/clangen/musikcube' }
    ]
  },
  {
    id: 858,
    name: 'flutter netease music',
    creator: 'bob',
    description: 'flutter music player application. (仿网易云音乐)',
    skills: [
      'Dart',        'C++',
      'CMake',       'Ruby',
      'Swift',       'Inno Setup',
      'C',           'Kotlin',
      'Objective-C'
    ],
    tags: [
      'android',
      'android application',
      'dart',
      'flutter',
      'flutter apps',
      'music player',
      'netease cloud music'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/boyan01/flutter-netease-music'
      }
    ]
  },
  {
    id: 859,
    name: 'deepjazz',
    creator: 'joma',
    description: 'Deep learning driven jazz generation using Keras & Theano!',
    skills: [ 'Python' ],
    tags: [
      'deep learning',
      'jazz',
      'keras',
      'lstm',
      'machine learning',
      'music',
      'neural networks',
      'rnn',
      'theano'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/jisungk/deepjazz' } ]
  },
  {
    id: 860,
    name: 'picard',
    creator: 'tufayelahmed',
    description: 'MusicBrainz Picard audio file tagger',
    skills: [ 'Python', 'Shell', 'PowerShell', 'C' ],
    tags: [
      'acoustid',
      'audio',
      'id3',
      'music',
      'music tagger',
      'musicbrainz',
      'musicbrainz picard',
      'python',
      'tagger'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/metabrainz/picard' }
    ]
  },
  {
    id: 861,
    name: 'NeteaseCloudMusicFlac',
    creator: 'saif',
    description: '根据网易云音乐的歌单, 下载flac无损音乐到本地. Download the FLAC music from Internet according to your NeteaseCloudMusic playlist.',
    skills: [ 'Python' ],
    tags: [ 'download songs', 'flac', 'music', 'python' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/atlas-comstock/NeteaseCloudMusicFlac'
      }
    ]
  },
  {
    id: 862,
    name: 'MusicDNA',
    creator: 'techlead',
    description: 'A Music Player for android that renders beautiful DNA(Visualization) of the currently playing music.',
    skills: [ 'Java' ],
    tags: [ 'android', 'music player', 'soundcloud', 'visualizer' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/harjot-oberai/MusicDNA'
      }
    ]
  },
  {
    id: 863,
    name: 'react music',
    creator: 'techlead',
    description: 'Make beats with React!',
    skills: [ 'JavaScript', 'HTML', 'CSS' ],
    tags: [ 'buses', 'instrument', 'lfo', 'music', 'react', 'reactjs' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/FormidableLabs/react-music'
      }
    ]
  },
  {
    id: 864,
    name: 'mixxx',
    creator: 'saif',
    description: 'Mixxx is Free DJ software that gives you everything you need to perform live mixes.',
    skills: [
      'C++',        'JavaScript',
      'C',          'Shell',
      'Python',     'CMake',
      'Makefile',   'QML',
      'M4',         'Kaitai Struct',
      'GLSL',       'Batchfile',
      'Starlark',   'Nix',
      'PowerShell', 'XSLT'
    ],
    tags: [
      'audio',   'dj',
      'hid',     'linux',
      'mac',     'midi',
      'music',   'qt',
      'windows'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/mixxxdj/mixxx' } ]
  },
  {
    id: 865,
    name: 'Swift Radio Pro',
    creator: 'abdulimtiaz',
    description: 'Professional Radio Station App for iOS!',
    skills: [ 'Swift', 'Objective-C' ],
    tags: [
      'album art',     'audio',
      'audio player',  'avplayer',
      'itunes api',    'lastfm',
      'music',         'music player',
      'player',        'radio',
      'radio station', 'sound',
      'spotify api',   'swift',
      'swift radio'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/analogcode/Swift-Radio-Pro'
      }
    ]
  },
  {
    id: 866,
    name: 'aubio',
    creator: 'techlead',
    description: 'a library for audio and music analysis',
    skills: [ 'C', 'Python', 'Shell', 'Makefile' ],
    tags: [
      'analysis',       'annotation',
      'audio',          'beat',
      'c',              'extraction',
      'mfcc',           'music',
      'onset',          'pitch',
      'python',         'sound',
      'tempo tracking'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/aubio/aubio' } ]
  },
  {
    id: 867,
    name: 'Phonograph',
    creator: 'patrick',
    description: 'A material designed music player for Android',
    skills: [ 'Java', 'HTML', 'Ruby' ],
    tags: [ 'android', 'java', 'material design', 'music player' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/kabouzeid/Phonograph'
      }
    ]
  },
  {
    id: 868,
    name: 'gmusicapi',
    creator: 'justinsiu',
    description: 'An unofficial client library for Google Music.',
    skills: [ 'Python' ],
    tags: [
      'client lib',
      'gmusicapi',
      'google',
      'google music',
      'python',
      'python 2',
      'python 3'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/simon-weber/gmusicapi'
      }
    ]
  },
  {
    id: 869,
    name: 'SPStorkController',
    creator: 'saif',
    description: "Now playing controller from Apple Music, Mail & Podcasts Apple's apps.",
    skills: [ 'Swift', 'Objective-C', 'Ruby' ],
    tags: [
      'alert',      'animation',
      'app',        'apple',
      'controller', 'gester',
      'ios11',      'mail',
      'mimicrate',  'music',
      'native',     'pop',
      'popover',    'popup',
      'similar',    'swift',
      'swipe',      'transition',
      'ui',         'up'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ivanvorobei/SPStorkController'
      }
    ]
  },
  {
    id: 870,
    name: 'BlackHole',
    creator: 'mdrislam30',
    description: 'A Music Player App made with Flutter',
    skills: [
      'Dart',
      'C++',
      'CMake',
      'Kotlin',
      'C',
      'Ruby',
      'Swift',
      'Objective-C'
    ],
    tags: [
      'android music player',
      'flutter',
      'flutter app',
      'flutter apps',
      'flutter music player',
      'fluttermusicapp',
      'music app',
      'music application',
      'music player',
      'music player application',
      'offline songs'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Sangwan5688/BlackHole'
      }
    ]
  },
  {
    id: 871,
    name: 'music website',
    creator: 'zealptl',
    description: '🎧 Vue + SpringBoot + MyBatis 音乐网站',
    skills: [
      'Vue',
      'Java',
      'TypeScript',
      'SCSS',
      'JavaScript',
      'HTML',
      'CSS'
    ],
    tags: [
      'music website',
      'mvc',
      'mybatis',
      'mysql',
      'spring boot',
      'ssm',
      'typescript',
      'vue',
      'vue spring boot',
      'vue spring boot mybatis',
      'vue3'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Yin-Hongwei/music-website'
      }
    ]
  },
  {
    id: 872,
    name: 'cloudtunes',
    creator: 'joma',
    description: 'Web-based music player for the cloud :cloud: :notes: Play music from YouTube, Dropbox, etc.',
    skills: [ 'CoffeeScript', 'Python', 'CSS', 'HTML', 'Dockerfile', 'Shell' ],
    tags: [
      'backbone',    'coffeescript',
      'dropbox',     'jakubroztocil',
      'lastfm',      'mongodb',
      'music',       'music player',
      'musicbrainz', 'python',
      'redis',       'spa',
      'web',         'webapp',
      'websocket',   'youtube'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jakubroztocil/cloudtunes'
      }
    ]
  },
  {
    id: 873,
    name: 'OTTO',
    creator: 'frankniu',
    description: 'Sampler, Sequencer, Multi-engine synth and effects - in a box! [WIP]',
    skills: [ 'C++', 'CMake', 'Shell', 'Python' ],
    tags: [
      'audio',
      'audio processing',
      'music',
      'raspberry pi',
      'sequencing',
      'synth',
      'synthesizer',
      'ui design'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/bitfieldaudio/OTTO' }
    ]
  },
  {
    id: 874,
    name: 'helio workstation',
    creator: 'justinsiu',
    description: 'One music sequencer for all major platforms, desktop and mobile',
    skills: [
      'C++',
      'Makefile',
      'Shell',
      'CMake',
      'C',
      'Objective-C++',
      'Inno Setup',
      'AppleScript',
      'Ruby'
    ],
    tags: [
      'audio applications',
      'composition',
      'cross platform',
      'microtonal',
      'midi',
      'music composition',
      'music sequencer',
      'music tools',
      'sequencer',
      'vst'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/helio-fm/helio-workstation'
      }
    ]
  },
  {
    id: 875,
    name: 'ListenerMusicPlayer',
    creator: 'mdrislam30',
    description: 'A Grace Material Design Music Player',
    skills: [ 'Java' ],
    tags: [
      'android application',
      'material design',
      'music player',
      'mvp android',
      'retrofit2 rxjava'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hefuyicoder/ListenerMusicPlayer'
      }
    ]
  },
  {
    id: 876,
    name: 'scdl',
    creator: 'johndoe',
    description: 'Soundcloud Music Downloader',
    skills: [ 'Python' ],
    tags: [
      'downloader',
      'music',
      'python',
      'soundcloud',
      'soundcloud music downloader'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/flyingrub/scdl' } ]
  },
  {
    id: 877,
    name: 'MusicLake',
    creator: 'tanviryouhana',
    description: 'MediaPlayer、Exoplayer音乐播放器，可播在线音乐，qq音乐，百度音乐，虾米音乐，网易云音乐，YouTuBe',
    skills: [ 'Kotlin', 'Java', 'AIDL' ],
    tags: [
      'baidu',
      'exoplayer',
      'material design',
      'meidaplayer',
      'music',
      'musiclake',
      'netease',
      'xiami',
      'youtube'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/caiyonglong/MusicLake'
      }
    ]
  },
  {
    id: 878,
    name: 'ytmdl',
    creator: 'janedoe',
    description: 'A simple app to get songs from YouTube in mp3 format with artist name, album name etc from sources like iTunes, Spotify, LastFM, Deezer, Gaana etc.',
    skills: [ 'Python' ],
    tags: [
      'apple music',   'apple music api',
      'cli',           'ffmpeg',
      'free software', 'freemusic',
      'gaana',         'high quality music',
      'id3',           'itunes',
      'metadata',      'mp3',
      'music',         'music bot',
      'no ads',        'song download',
      'songs',         'spotify',
      'youtube',       'youtube dl'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/deepjyoti30/ytmdl' }
    ]
  },
  {
    id: 879,
    name: 'react native track player',
    creator: 'zealptl',
    description: 'A fully fledged audio module created for music apps. Provides audio playback, external media controls, chromecast support, background mode and more!',
    skills: [
      'C++',        'Kotlin',
      'Swift',      'TypeScript',
      'Java',       'Objective-C',
      'JavaScript', 'Ruby',
      'Makefile',   'Starlark',
      'C'
    ],
    tags: [
      'android',
      'ios',
      'media control',
      'music library',
      'music player',
      'react native',
      'windows'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/doublesymmetry/react-native-track-player'
      }
    ]
  },
  {
    id: 880,
    name: 'YouTube Music',
    creator: 'joybiswas',
    description: ':musical_note: A Mac app wrapper for music.youtube.com',
    skills: [ 'Swift', 'Objective-C', 'JavaScript', 'CSS', 'Ruby', 'C' ],
    tags: [
      'mac',     'macos',
      'music',   'osx',
      'swift',   'wrapper',
      'youtube'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/steve228uk/YouTube-Music'
      }
    ]
  },
  {
    id: 881,
    name: 'audio reactive led strip',
    creator: 'tanzilbaraskar',
    description: ':musical_note: :rainbow: Real-time LED strip music visualization using Python and the ESP8266 or Raspberry Pi',
    skills: [ 'Python', 'C++' ],
    tags: [
      'arduino',
      'audio processing',
      'esp8266',
      'music visualizer',
      'python',
      'raspberry pi',
      'signal processing'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/scottlawsonbc/audio-reactive-led-strip'
      }
    ]
  },
  {
    id: 882,
    name: 'awesome deep learning music',
    creator: 'frankniu',
    description: 'List of articles related to deep learning applied to music',
    skills: [ 'TeX', 'Python' ],
    tags: [
      'article',
      'audio',
      'audio processing',
      'awesome',
      'awesome list',
      'bib',
      'deep learning',
      'deep neural networks',
      'deeplearning',
      'list',
      'lists',
      'machine learning',
      'music',
      'music genre classification',
      'music information retrieval',
      'neural network',
      'neural networks',
      'research',
      'resources',
      'unicorns'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ybayle/awesome-deep-learning-music'
      }
    ]
  },
  {
    id: 883,
    name: 'tonal',
    creator: 'tanviryouhana',
    description: 'A functional music theory library for Javascript',
    skills: [ 'TypeScript', 'JavaScript', 'HTML' ],
    tags: [
      'chord progression',
      'chords',
      'functional',
      'interval',
      'javascript',
      'key signatures',
      'music',
      'music theory',
      'scale',
      'transpose',
      'typescript'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/tonaljs/tonal' } ]
  },
  {
    id: 884,
    name: 'DeckTransition',
    creator: 'refatmonjur',
    description: 'A library to recreate the iOS Apple Music now playing transition',
    skills: [ 'Swift', 'Ruby', 'Objective-C', 'Shell' ],
    tags: [ 'apple music', 'ios', 'modals', 'transition' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/HarshilShah/DeckTransition'
      }
    ]
  },
  {
    id: 885,
    name: 'Shuttle',
    creator: 'frankniu',
    description: 'Shuttle Music Player',
    skills: [ 'Java', 'Kotlin', 'HTML', 'CSS', 'Shell' ],
    tags: [ 'android', 'android app', 'java', 'music player' ],
    links: [ { type: 'GitHub', link: 'https://github.com/timusus/Shuttle' } ]
  },
  {
    id: 886,
    name: 'ESTMusicPlayer',
    creator: 'anvinhtr',
    description: 'An elegant and simple iOS music player.',
    skills: [ 'Objective-C', 'Ruby' ],
    tags: [
      'demo app',
      'design',
      'ios',
      'ios demo',
      'music',
      'music player',
      'ui'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Aufree/ESTMusicPlayer'
      }
    ]
  },
  {
    id: 887,
    name: 'OpenBBTerminal',
    creator: 'mdrislam30',
    description: 'Investment Research for Everyone, Anywhere.',
    skills: [ 'Python' ],
    tags: [
      'artificial intelligence',
      'cryptocurrency',
      'economics',
      'finance',
      'gamestonk terminal',
      'investment',
      'investment analysis',
      'investment research',
      'machine learning',
      'python',
      'quantitative finance',
      'stock market',
      'stocks',
      'terminal app'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/OpenBB-finance/OpenBBTerminal'
      }
    ]
  },
  {
    id: 888,
    name: 'tushare',
    creator: 'tanzilbaraskar',
    description: 'TuShare is a utility for crawling historical data of China stocks',
    skills: [ 'Python' ],
    tags: [
      'finance',
      'fintech',
      'pandas',
      'python',
      'realtime quotes data',
      'stock data',
      'stock market',
      'tushare'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/waditu/tushare' } ]
  },
  {
    id: 889,
    name: 'StockSharp',
    creator: 'techlead',
    description: 'Algorithmic trading and quantitative trading open source platform to develop trading robots (stock markets, forex, crypto, bitcoins, and options).',
    skills: [ 'C#' ],
    tags: [
      'algorithmic trading engine',
      'backtesting',
      'bitcoins',
      'broker',
      'brokers',
      'c sharp',
      'crypto',
      'cryptocurrency',
      'finance',
      'fixprotocol',
      'forex',
      'hft trading',
      'interactive brokers',
      'markets',
      'quantitative finance',
      'stocks',
      'trading',
      'trading platform',
      'trading robots',
      'trading strategies'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/StockSharp/StockSharp'
      }
    ]
  },
  {
    id: 890,
    name: 'ticker',
    creator: 'refatmonjur',
    description: 'Terminal stock ticker with live updates and position tracking',
    skills: [ 'Go', 'Dockerfile' ],
    tags: [
      'cryptocurrencies',
      'financial markets',
      'golang',
      'golang application',
      'quotes',
      'stock market',
      'stock positions',
      'stocks',
      'stocks app',
      'symbols',
      'terminal',
      'terminal app',
      'ticker',
      'tui'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/achannarasappa/ticker'
      }
    ]
  },
  {
    id: 891,
    name: 'dolibarr',
    creator: 'johndoe',
    description: "Dolibarr ERP CRM is a modern software package to manage your company or foundation's activity (contacts, suppliers, invoices, orders, stocks, agenda, accounting, ...). It is open source software (written in PHP) and designed for small and medium businesses, foundations and freelancers. You can freely install, use and distribute it as a standalone application or as a web application to use it from every internet access and media.",
    skills: [
      'PHP',        'JavaScript',
      'CSS',        'SCSS',
      'Less',       'Perl',
      'Inno Setup', 'Shell',
      'HTML',       'PLpgSQL',
      'Promela',    'Python',
      'Raku',       'Gherkin',
      'Makefile',   'C++',
      'Dockerfile', 'Batchfile'
    ],
    tags: [
      'accounting',
      'agenda',
      'crm',
      'erp',
      'hacktoberfest',
      'human resource managment',
      'invoice',
      'invoices',
      'invoicing',
      'mysql',
      'orders',
      'php',
      'postgresql',
      'proposal',
      'purchase',
      'quotations',
      'sales',
      'stock',
      'stocks',
      'suppliers'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Dolibarr/dolibarr' }
    ]
  },
  {
    id: 892,
    name: 'backtesting.py',
    creator: 'techlead',
    description: ':mag_right: :chart_with_upwards_trend: :snake: :moneybag:  Backtest trading strategies in Python.',
    skills: [ 'Python', 'JavaScript', 'Shell' ],
    tags: [
      'algorithmic trading',
      'backtesting',
      'backtesting engine',
      'backtesting frameworks',
      'backtesting trading strategies',
      'financial markets',
      'forex',
      'forex trading',
      'framework',
      'hacktoberfest',
      'investing',
      'investment',
      'investment strategies',
      'stocks',
      'trading',
      'trading algorithms',
      'trading simulation',
      'trading simulator',
      'trading strategies',
      'zipline'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/kernc/backtesting.py'
      }
    ]
  },
  {
    id: 893,
    name: 'FinanceReactNative',
    creator: 'janedoe',
    description: "[Deprecated] iOS's Stocks App clone written in React Native for demo purpose (available both iOS and Android).",
    skills: [ 'JavaScript', 'Objective-C', 'Python', 'Java' ],
    tags: [ 'android', 'ios', 'react native', 'stock', 'yahoo finance' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/7kfpun/FinanceReactNative'
      }
    ]
  },
  {
    id: 894,
    name: 'portfolio',
    creator: 'patrick',
    description: 'A simple tool to calculate the overall performance of an investment portfolio.',
    skills: [ 'Java', 'HTML', 'CSS', 'NSIS', 'Shell', 'JavaScript' ],
    tags: [
      'eclipse',
      'financial',
      'investment portfolio',
      'java',
      'portfolio',
      'portfolio performance',
      'stocks'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/buchen/portfolio' } ]
  },
  {
    id: 895,
    name: 'mop',
    creator: 'frankniu',
    description: 'Stock market tracker for hackers.',
    skills: [ 'Go', 'Makefile', 'Ruby' ],
    tags: [
      'bitcoin',
      'cryptocurrency',
      'finance',
      'go',
      'golang',
      'stock market',
      'stocks',
      'terminal',
      'trading'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/mop-tracker/mop' } ]
  },
  {
    id: 896,
    name: 'ta4j',
    creator: 'bob',
    description: 'A Java library for technical analysis.',
    skills: [ 'Java' ],
    tags: [
      'bitcoin',
      'ethereum',
      'forex',
      'java',
      'java library',
      'litecoin',
      'ripple',
      'stocks',
      'ta4j',
      'tachnical analysis',
      'technical analysis',
      'trading',
      'trading algorithms',
      'trading strategies'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ta4j/ta4j' } ]
  },
  {
    id: 897,
    name: 'surpriver',
    creator: 'refatmonjur',
    description: 'Find big moving stocks before they move using machine learning and anomaly detection',
    skills: [ 'Python', 'Batchfile', 'Shell' ],
    tags: [
      'ai',
      'algotrading',
      'anomaly detection',
      'finance application',
      'investment',
      'machine learning',
      'stock',
      'stock analysis',
      'trading',
      'trading algorithms'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/tradytics/surpriver'
      }
    ]
  },
  {
    id: 898,
    name: 'AIAlpha',
    creator: 'abdulimtiaz',
    description: 'Use unsupervised and supervised learning to predict stocks',
    skills: [ 'Python', 'R' ],
    tags: [
      'algorithmic trading',
      'artificial intelligence',
      'artificial neural networks',
      'autoencoder',
      'lstm',
      'machine learning',
      'python',
      'quantitative finance',
      'stock price prediction',
      'trading strategies',
      'wavelet transform',
      'yahoo finance api'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/VivekPa/AIAlpha' } ]
  },
  {
    id: 899,
    name: 'stocksight',
    creator: 'akbarhaider',
    description: 'Stock market analyzer and predictor using Elasticsearch, Twitter, News headlines and Python natural language processing and sentiment analysis',
    skills: [ 'Python', 'Shell', 'Dockerfile' ],
    tags: [
      'elasticsearch',
      'natural language processing',
      'nltk',
      'python',
      'sentiment',
      'sentiment analysis',
      'stock analysis',
      'stock analyzer',
      'stock market',
      'stock prediction',
      'stock price prediction',
      'textblob',
      'tweepy',
      'twitter',
      'twitter sentiment analysis',
      'twitter streaming api',
      'vader sentiment analysis'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/shirosaidev/stocksight'
      }
    ]
  },
  {
    id: 900,
    name: 'robin_stocks',
    creator: 'akbarhaider',
    description: 'This is a library to use with Robinhood Financial App. It currently supports trading crypto-currencies, options, and stocks. In addition, it can be used to get real time ticker information, assess the performance of your portfolio, and can also get tax documents, total dividends paid, and more. More info at',
    skills: [ 'Python', 'Shell' ],
    tags: [
      'cryptocurrency',
      'options trading',
      'quantitative finance',
      'robinhood',
      'robinhood api',
      'robinhood portfolio',
      'robinhood python',
      'stock market',
      'stock trading',
      'trading',
      'trading algorithms',
      'trading api'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jmfernandes/robin_stocks'
      }
    ]
  },
  {
    id: 901,
    name: 'MachineLearningStocks',
    creator: 'frankniu',
    description: 'Using python and scikit-learn to make stock predictions',
    skills: [ 'Python' ],
    tags: [
      'algorithmic trading',
      'data science',
      'guide',
      'historical stock fundamentals',
      'machine learning',
      'python',
      'quantitative finance',
      'scikit learn',
      'sklearn',
      'stock',
      'stock prediction',
      'stock prices',
      'trading',
      'tutorial',
      'yahoo finance'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/robertmartin8/MachineLearningStocks'
      }
    ]
  },
  {
    id: 902,
    name: 'gym anytrading',
    creator: 'mdrislam30',
    description: 'The most simple, flexible, and comprehensive OpenAI Gym trading environment (Approved by OpenAI Gym)',
    skills: [ 'Python' ],
    tags: [
      'dqn',
      'forex',
      'gym environments',
      'openai gym',
      'q learning',
      'reinforcement learning',
      'stocks',
      'trading',
      'trading algorithms',
      'trading environments'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/AminHP/gym-anytrading'
      }
    ]
  },
  {
    id: 903,
    name: 'KChartView',
    creator: 'saif',
    description: 'KChart for Android ；股票k线图',
    skills: [ 'Java' ],
    tags: [ 'charts', 'kline', 'stocks' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/tifezh/KChartView' }
    ]
  },
  {
    id: 904,
    name: 'fastquant',
    creator: 'saif',
    description: 'fastquant — Backtest and optimize your trading strategies with only 3 lines of code!',
    skills: [ 'Jupyter Notebook', 'Python', 'Shell', 'Dockerfile' ],
    tags: [
      'algotrading',
      'backtesting',
      'cryptocurrency',
      'financial data science',
      'quantitative finance',
      'stocks',
      'trading strategies'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/enzoampil/fastquant'
      }
    ]
  },
  {
    id: 905,
    name: 'tickrs',
    creator: 'techlead',
    description: 'Realtime ticker data in your terminal 📈',
    skills: [ 'Rust' ],
    tags: [ 'rust', 'stocks', 'tui' ],
    links: [ { type: 'GitHub', link: 'https://github.com/tarkah/tickrs' } ]
  },
  {
    id: 906,
    name: 'stock analysis engine',
    creator: 'patrick',
    description: "Backtest 1000s of minute-by-minute trading algorithms for training AI with automated pricing data from: IEX, Tradier and FinViz. Datasets and trading performance automatically published to S3 for building AI training datasets for teaching DNNs how to trade. Runs on Kubernetes and docker-compose. >150 million trading history rows generated from +5000 algorithms. Heads up: Yahoo's Finance API was disabled on 2019-01-03 https://developer.yahoo.com/yql/",
    skills: [
      'Jupyter Notebook',
      'Python',
      'Shell',
      'Smarty',
      'Dockerfile',
      'Vim script',
      'Makefile'
    ],
    tags: [
      'algorithmic trading',
      'backtesting',
      'deep learning',
      'deep learning tutorial',
      'deep neural networks',
      'docker',
      'helm',
      'helm charts',
      'iex',
      'iexcloud',
      'jupyter',
      'keras',
      'kubernetes',
      'minio',
      'options',
      'redis',
      's3',
      'stocks',
      'tensorflow',
      'tradier'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/AlgoTraders/stock-analysis-engine'
      }
    ]
  },
  {
    id: 907,
    name: 'AlphaPy',
    creator: 'joma',
    description: 'Automated Machine Learning [AutoML] with Python, scikit-learn, Keras, XGBoost, LightGBM, and CatBoost',
    skills: [ 'Python' ],
    tags: [
      'classification',       'cryptocurrency',
      'data science',         'deep learning',
      'iex',                  'keras',
      'machine learning',     'pandas',
      'portfolio',            'predictive analytics',
      'python',               'regression',
      'scikit learn',         'sports',
      'stocks',               'tensorflow',
      'time series analysis', 'trading',
      'trading platform',     'trading strategies'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ScottfreeLLC/AlphaPy'
      }
    ]
  },
  {
    id: 908,
    name: 'blankly',
    creator: 'justinsiu',
    description: '🚀 💸  Easily build, backtest and deploy your algo in just a few lines of code. Trade stocks, cryptos, and forex across exchanges w/ one package.',
    skills: [ 'Python' ],
    tags: [
      'algotrading',        'binance',
      'blankly',            'bot',
      'bot framework',      'bots',
      'coinbase',           'coinbase pro',
      'coinbase pro api',   'crypto',
      'cryptocurrency',     'framework',
      'investment',         'platform',
      'python',             'stocks',
      'trading',            'trading bot',
      'trading strategies'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/blankly-finance/blankly'
      }
    ]
  },
  {
    id: 909,
    name: 'TuChart',
    creator: 'tanviryouhana',
    description: 'Tuchart is a visualization interface for the Chinese stock market. Tuchart supports candlestick charts, price charts, tick data, high-frequency data and distribution of top shareholders for individual stocks. Tuchart是一个基于pyqt和echarts的股票视觉化应用。Tuchart 支持日／月线，分笔，高频数据，前十股东分笔的视觉化',
    skills: [ 'Python' ],
    tags: [ 'echarts', 'pyqt', 'stock market', 'tushare', 'visualization' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Seedarchangel/TuChart'
      }
    ]
  },
  {
    id: 910,
    name: 'yahoofinancials',
    creator: 'janedoe',
    description: 'A powerful financial data module used for pulling data from Yahoo Finance. This module can pull fundamental and technical data for stocks, indexes, currencies, cryptos, ETFs, Mutual Funds, U.S. Treasuries, and commodity futures.',
    skills: [ 'Python' ],
    tags: [
      'bonds',
      'commodities',
      'cryptocurrencies',
      'etfs',
      'financial data',
      'forex',
      'fundamentals',
      'mutual funds',
      'stock data',
      'stock quotes',
      'yahoo finance'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/JECSand/yahoofinancials'
      }
    ]
  },
  {
    id: 911,
    name: 'Deep Learning Machine Learning Stock',
    creator: 'tanviryouhana',
    description: 'Deep Learning and Machine Learning stocks represent a promising long-term or short-term opportunity for investors and traders. ',
    skills: [ 'Jupyter Notebook', 'Python' ],
    tags: [
      'algorithms',
      'data science',
      'deep learning',
      'feature engineering',
      'feature extraction',
      'feature selection',
      'features extraction',
      'financial engineering',
      'machine learning',
      'neural network',
      'prediction',
      'stock analysis',
      'stock data',
      'stock market',
      'stock prediction',
      'stock price prediction',
      'stock prices',
      'stock trading',
      'technical analysis',
      'trading'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/LastAncientOne/Deep-Learning-Machine-Learning-Stock'
      }
    ]
  },
  {
    id: 912,
    name: 'quickfix',
    creator: 'tanviryouhana',
    description: ':rocket: The Go FIX protocol library',
    skills: [ 'Go', 'Ruby', 'Makefile', 'Shell', 'Batchfile', 'PLpgSQL' ],
    tags: [
      'cryptocurrency',
      'docker',
      'finance',
      'financial data',
      'financial information exchange',
      'financial markets',
      'fintech',
      'fixprotocol',
      'forex',
      'hft trading',
      'messaging library',
      'protocol',
      'quantitative finance',
      'quickfix',
      'stock market',
      'stocks',
      'trading systems'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/quickfixgo/quickfix'
      }
    ]
  },
  {
    id: 913,
    name: 'stonks',
    creator: 'saif',
    description: 'Stonks is a terminal based stock visualizer and tracker that displays realtime stocks in graph format in a terminal. See how fast your stonks will crash.',
    skills: [ 'Go', 'Dockerfile', 'Makefile' ],
    tags: [
      'ascii art',        'aur',
      'cli',              'curl',
      'go',               'golang',
      'graphs',           'hacktoberfest',
      'linux',            'macos',
      'stock cli',        'stock data',
      'stock market',     'stock market data',
      'stock visualizer', 'stocks',
      'terminal based',   'terminal graphics',
      'tracker',          'wtfutil'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/ericm/stonks' } ]
  },
  {
    id: 914,
    name: 'example scalping',
    creator: 'johndoe',
    description: 'A working example algorithm for scalping strategy trading multiple stocks concurrently using python asyncio',
    skills: [ 'Python' ],
    tags: [
      'algorithmic trading',
      'algotrading',
      'alpaca',
      'api',
      'async',
      'asyncio',
      'fintech',
      'hft trading',
      'market data',
      'python3',
      'scalping',
      'trading bot',
      'trading strategy'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/alpacahq/example-scalping'
      }
    ]
  },
  {
    id: 915,
    name: 'ticker.sh',
    creator: 'zealptl',
    description: 'Real-time stock tickers from the command-line.',
    skills: [ 'Shell' ],
    tags: [
      'bash',
      'cli',
      'equities',
      'jq',
      'quotes',
      'shell',
      'stock prices',
      'stocks',
      'yahoo finance api'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/pstadler/ticker.sh' }
    ]
  },
  {
    id: 916,
    name: 'tstock',
    creator: 'joybiswas',
    description: '📈A command line tool to view stock charts in the terminal.',
    skills: [ 'Python', 'Dockerfile', 'Shell' ],
    tags: [
      'crypto',
      'python',
      'stock chart',
      'stock market',
      'stocks',
      'trading'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Gbox4/tstock' } ]
  },
  {
    id: 917,
    name: 'Finance',
    creator: 'zealptl',
    description: "Here you can find all the quantitative finance algorithms that I've worked on and refined over the past year!",
    skills: [ 'Python' ],
    tags: [
      'data science',
      'finance',
      'machine learning',
      'pandas',
      'python',
      'quantitative finance',
      'stock market',
      'stocks',
      'technical indicators'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/shashankvemuri/Finance'
      }
    ]
  },
  {
    id: 918,
    name: 'CHKLineChart',
    creator: 'joybiswas',
    description: '纯Swift4.0代码编写的K线图表组件，支持：MA,EMA,BOLL,SAR,KDJ,MACD等技术指标显示。集成使用简单，二次开发扩展强大',
    skills: [ 'Swift', 'Objective-C', 'Ruby', 'C' ],
    tags: [ 'bitcoin', 'candlelinechart', 'kline', 'stocks', 'swift' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/zhiquan911/CHKLineChart'
      }
    ]
  },
  {
    id: 919,
    name: 'pyEX',
    creator: 'tanzilbaraskar',
    description: 'Python interface to IEX and IEX cloud APIs',
    skills: [ 'Python', 'Makefile' ],
    tags: [
      'algorithmic trading',
      'finance',
      'financial analysis',
      'iex',
      'python',
      'python3',
      'stock data',
      'stock market',
      'stocks'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/timkpaine/pyEX' } ]
  },
  {
    id: 920,
    name: 'ta rs',
    creator: 'tanzilbaraskar',
    description: 'Technical analysis library for Rust language',
    skills: [ 'Rust' ],
    tags: [
      'finance',            'finances',
      'financial',          'financial analysis',
      'indicator',          'indicators',
      'library',            'market data',
      'math',               'moving average',
      'rust',               'rust lang',
      'rust library',       'stock market',
      'stocks',             'technical analysis',
      'trading',            'trading algorithms',
      'trading strategies', 'trading systems'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/greyblake/ta-rs' } ]
  },
  {
    id: 921,
    name: 'investments',
    creator: 'refatmonjur',
    description: 'Helps you with managing your investments',
    skills: [ 'Rust', 'Shell', 'Dockerfile' ],
    tags: [
      'asset allocation',
      'finance',
      'interactive brokers',
      'investments',
      'portfolio optimization',
      'portfolio rebalancing',
      'stocks',
      'tax statement'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/KonishchevDmitry/investments'
      }
    ]
  },
  {
    id: 922,
    name: 'python trading robot',
    creator: 'mdrislam30',
    description: 'A trading robot, that can submit basic orders in an automated fashion using the TD API.',
    skills: [ 'Python' ],
    tags: [
      'finance',
      'portfolio',
      'python',
      'stocks',
      'tdameritrade api',
      'trading robot',
      'trading robots'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/areed1192/python-trading-robot'
      }
    ]
  },
  {
    id: 923,
    name: 'tehran stocks',
    creator: 'mehedishohag',
    description: 'A python package to access tsetmc data',
    skills: [ 'Jupyter Notebook', 'Python', 'Batchfile' ],
    tags: [
      'dataset',
      'download prices',
      'pandas',
      'python',
      'stock',
      'stocks prices',
      'tehran stocks'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ghodsizadeh/tehran-stocks'
      }
    ]
  },
  {
    id: 924,
    name: 'Stock Analysis',
    creator: 'mehedishohag',
    description: 'Regression, Scrapers, and Visualization',
    skills: [ 'Jupyter Notebook', 'Python' ],
    tags: [
      'hacktoberfest',
      'hacktoberfest2020',
      'linear regression',
      'prediction',
      'sentiment analysis',
      'stock analysis',
      'stock prices',
      'stocks',
      'svm',
      'visualization'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Vaibhav/Stock-Analysis'
      }
    ]
  },
  {
    id: 925,
    name: 'ContainerController',
    creator: 'janedoe',
    description: 'UI Component. This is a copy swipe-panel from app: Apple Maps, Stocks. Swift version',
    skills: [ 'Swift', 'Ruby' ],
    tags: [
      'animation',      'cocoapods',
      'collectionview', 'containercontroller',
      'containerview',  'ios',
      'landscape',      'layout',
      'maps',           'move',
      'pan gesture',    'scrollview',
      'swift',          'swift package manager',
      'swipe panel',    'tableview',
      'ui components',  'xcode'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/mrustaa/ContainerController'
      }
    ]
  },
  {
    id: 926,
    name: 'Stocksera',
    creator: 'mehedishohag',
    description: 'Track trending stocks & crypto on social media, ARK, Senate, House Trades, insider trading, FTD, short volume and much more!',
    skills: [
      'JavaScript',
      'Python',
      'HTML',
      'CSS',
      'Dockerfile',
      'Batchfile'
    ],
    tags: [
      'cathie wood',    'cryptocurrency',
      'daytrading',     'due diligence',
      'finance',        'financial',
      'financial data', 'ibkr',
      'investing',      'jim cramer',
      'reddit',         'sentiment',
      'stock',          'stocks',
      'td ameritrade',  'wallstreetbets',
      'yahoo finance'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/guanquann/Stocksera'
      }
    ]
  },
  {
    id: 927,
    name: 'stocks.js',
    creator: 'tufayelahmed',
    description: ':moneybag: stocks.js is an easy-to-use stock market API for Javascript',
    skills: [ 'JavaScript' ],
    tags: [
      'alpha vantage',
      'api',
      'stock data',
      'stock market',
      'stocks api',
      'technical indicators'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/wagenaartje/stocks.js'
      }
    ]
  },
  {
    id: 928,
    name: 'reddit hyped stocks',
    creator: 'johndoe',
    description: 'A web application to explore currently hyped stocks on Reddit',
    skills: [ 'JavaScript', 'Python', 'HTML', 'Dockerfile', 'CSS', 'Shell' ],
    tags: [
      'algorithmic trading',
      'data science',
      'finance',
      'pennystocks',
      'reddit',
      'stocks'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/lukstei/reddit-hyped-stocks'
      }
    ]
  },
  {
    id: 929,
    name: 'zero btc screen',
    creator: 'techlead',
    description: 'Crypto stock price for RPi Zero',
    skills: [ 'Python' ],
    tags: [
      'bitcoin stock price',
      'cryptocurrency',
      'eink',
      'rpi',
      'stocks'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/dr-mod/zero-btc-screen'
      }
    ]
  },
  {
    id: 930,
    name: 'StockSensation',
    creator: 'joma',
    description: '基于情感字典和机器学习的股市舆情情感分类可视化Web',
    skills: [ 'Python', 'HTML', 'CSS' ],
    tags: [
      'bootstrap',
      'data visualization',
      'django',
      'javascript',
      'machine learning',
      'python',
      'scikit learn',
      'sensation data',
      'stock',
      'word2vec'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/LinLidi/StockSensation'
      }
    ]
  },
  {
    id: 931,
    name: 'Stocks',
    creator: 'tanzilbaraskar',
    description: 'Programs for stock prediction and evaluation',
    skills: [ 'Jupyter Notebook', 'Python', 'Shell' ],
    tags: [
      'forecasting',
      'forecasting model',
      'machine learning',
      'signal',
      'signal processing',
      'stock market',
      'stock price prediction',
      'stock trading'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/NGYB/Stocks' } ]
  },
  {
    id: 932,
    name: 'sec edgar downloader',
    creator: 'joma',
    description: '📈 Download filings from the SEC EDGAR database using Python',
    skills: [ 'Python', 'Makefile' ],
    tags: [
      'edgar',
      'finance',
      'financial',
      'financial data',
      'mutual funds',
      'python',
      'sec edgar',
      'stock market',
      'stocks'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jadchaar/sec-edgar-downloader'
      }
    ]
  },
  {
    id: 933,
    name: 'GraphVega',
    creator: 'akbarhaider',
    description: 'Open Source Options Analytics Platform.',
    skills: [ 'JavaScript', 'HTML', 'CSS', 'Dockerfile' ],
    tags: [
      'data visualization',
      'options',
      'options pricing',
      'options trading',
      'stock market',
      'stocks',
      'volatility'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rahuljoshi44/GraphVega'
      }
    ]
  },
  {
    id: 934,
    name: 'Stock Selection a Framework',
    creator: 'anvinhtr',
    description: 'This project demonstrates how to apply machine learning algorithms to distinguish "good" stocks from the "bad" stocks.',
    skills: [ 'Python' ],
    tags: [
      'deep learning',
      'feature selection',
      'financial data',
      'machine learning',
      'stock'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/xingyu-fu/Stock-Selection-a-Framework'
      }
    ]
  },
  {
    id: 935,
    name: 'TuringTrader',
    creator: 'joma',
    description: 'The Open-Source Backtesting Engine/ Market Simulator by Bertram Solutions.',
    skills: [ 'C#', 'R', 'Batchfile' ],
    tags: [
      'algorithmic trading',
      'backtesting',
      'c sharp',
      'finance',
      'options',
      'portfolio management',
      'portfolio optimization',
      'portfolios',
      'quant',
      'quantitative finance',
      'quantitative trading',
      'stock indicators',
      'stocks',
      'technical analysis',
      'technical indicators',
      'trading',
      'trading algorithms',
      'trading bot',
      'trading platform',
      'trading strategies'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/fbertram/TuringTrader'
      }
    ]
  },
  {
    id: 936,
    name: 'stonky',
    creator: 'saif',
    description: 'command line dashboard for monitoring stocks',
    skills: [ 'Python', 'Makefile' ],
    tags: [
      'cli',
      'command line',
      'cryptocurrency',
      'dashboard',
      'monitor',
      'python',
      'stock',
      'terminal'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/jkwill87/stonky' } ]
  },
  {
    id: 937,
    name: 'yahoo finance api',
    creator: 'joybiswas',
    description: 'PHP client for Yahoo Finance API 📈',
    skills: [ 'PHP' ],
    tags: [
      'exchange rates',
      'finance',
      'php',
      'stock market',
      'stock quotes',
      'stocks',
      'yahoo',
      'yahoo finance'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/scheb/yahoo-finance-api'
      }
    ]
  },
  {
    id: 938,
    name: 'TradingBot',
    creator: 'refatmonjur',
    description: 'Autonomous stocks trading script',
    skills: [ 'Python', 'Makefile', 'Dockerfile' ],
    tags: [
      'ig index',
      'macd',
      'python',
      'stock market',
      'trading',
      'tradingbot'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ilcardella/TradingBot'
      }
    ]
  },
  {
    id: 939,
    name: 'AutoTrader',
    creator: 'tanviryouhana',
    description: 'A Python-based development platform for automated trading systems - from backtesting to optimisation to livetrading. ',
    skills: [ 'Python', 'JavaScript' ],
    tags: [
      'algo trading',         'algorithmic trading',
      'autotrader',           'crypto',
      'finance',              'forex',
      'investing',            'oanda',
      'python',               'quantitative finance',
      'quantitative trading', 'stocks',
      'technical analysis',   'trading',
      'trading algorithms',   'trading bot',
      'trading platform',     'trading strategies'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/kieran-mackle/AutoTrader'
      }
    ]
  },
  {
    id: 940,
    name: 'revolut stocks',
    creator: 'tanzilbaraskar',
    description: 'A tax calculator for stocks and dividends activities.  ',
    skills: [ 'Python', 'Dockerfile' ],
    tags: [
      'bulgaria',
      'bulgarian',
      'bulgarian national revenue agency',
      'irs',
      'nap',
      'revolut',
      'stocks',
      'tax'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/doino-gretchenliev/revolut-stocks'
      }
    ]
  },
  {
    id: 941,
    name: 'SimpleStockAnalysisPython',
    creator: 'janedoe',
    description: 'Teaches step-by-step to analysis stock data in python.',
    skills: [ 'Jupyter Notebook', 'Python', 'HTML' ],
    tags: [
      'financial analysis',
      'financial data',
      'fundamental analysis',
      'python3',
      'stock analysis',
      'stock data',
      'stock market',
      'stock prices',
      'stock trading',
      'stocks',
      'technical analysis',
      'technical indicators',
      'time series',
      'time series analysis',
      'timeseries'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/LastAncientOne/SimpleStockAnalysisPython'
      }
    ]
  },
  {
    id: 942,
    name: 'Panther',
    creator: 'saif',
    description: 'A high performance python technical analysis library written in Rust and the Numpy C API.',
    skills: [ 'Rust', 'Python' ],
    tags: [
      'finance',
      'financial analysis',
      'fintech',
      'indicator',
      'indicators',
      'performance',
      'python',
      'rust',
      'stock market',
      'stocks',
      'wrapper'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/gregyjames/Panther' }
    ]
  },
  {
    id: 943,
    name: 'pytse client',
    creator: 'bob',
    description: 'work with Tehran stock exchange data in Python',
    skills: [ 'Python', 'Makefile' ],
    tags: [
      'financial data',
      'market data',
      'python',
      'stock market',
      'stocks',
      'tehran stock exchange',
      'tsetmc'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Glyphack/pytse-client'
      }
    ]
  },
  {
    id: 944,
    name: 'discord stock ticker',
    creator: 'joybiswas',
    description: 'Add live stock & crypto prices to your discord sidebar.',
    skills: [ 'Go', 'Dockerfile', 'Makefile' ],
    tags: [
      'bot',                  'crypto',
      'cryptocurrency',       'discord',
      'discord bot',          'discord sidebar',
      'discord stock ticker', 'futures',
      'hosting',              'piku',
      'python',               'stock',
      'stocks',               'ticker',
      'wallstreet',           'wallstreetbets'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rssnyder/discord-stock-ticker'
      }
    ]
  },
  {
    id: 945,
    name: 'bovespaStockRatings',
    creator: 'techlead',
    description: 'Crawler for Fundamental analysis platform for BOVESPA stocks, generating a score for each share according to the selected criteria on the indicators.',
    skills: [
      'Python',
      'JavaScript',
      'HTML',
      'TypeScript',
      'CSS',
      'Dockerfile',
      'Shell'
    ],
    tags: [
      'bovespa',          'bovespa stocks',
      'data analysis',    'datatables',
      'django',           'heroku',
      'herokuapp',        'html',
      'investment',       'javascript',
      'python3',          'stock',
      'stock indicators', 'stock market'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/daniloaleixo/bovespaStockRatings'
      }
    ]
  },
  {
    id: 946,
    name: 'lumibot',
    creator: 'tufayelahmed',
    description: 'Backtesting and Trading Bots Made Easy for Crypto, Stocks, Options, Futures, FOREX and more',
    skills: [ 'Python' ],
    tags: [
      'algorithmic trading',
      'alpaca',
      'backtester',
      'backtesting',
      'backtesting engine',
      'backtesting trading strategies',
      'broker',
      'crypto',
      'crypto bot',
      'cryptocurrency',
      'finance',
      'forex',
      'investing',
      'quantitative finance',
      'strategy',
      'trade',
      'trading',
      'trading algorithms',
      'trading bot',
      'trading strategies'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Lumiwealth/lumibot' }
    ]
  },
  {
    id: 947,
    name: 'bullish',
    creator: 'refatmonjur',
    description: 'Stock market performance insights and trends in your inbox every day.',
    skills: [ 'HTML', 'CSS', 'Ruby', 'JavaScript' ],
    tags: [
      'email',
      'newsletter',
      'ruby',
      'stock market',
      'stocks',
      'stocks api'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/eduardosasso/bullish'
      }
    ]
  },
  {
    id: 948,
    name: 'TradingView API',
    creator: 'saif',
    description: '📈 Get real-time stocks from Tradingview',
    skills: [ 'JavaScript' ],
    tags: [
      'backtesting',
      'backtesting trading strategies',
      'bitcoin',
      'charts',
      'crypto',
      'cryptocurrency',
      'ethereum',
      'realtime stocks',
      'stocks',
      'stocks api',
      'stocks prices',
      'trading',
      'tradingview',
      'tradingview api',
      'tradingview indicator',
      'tradingview replay',
      'tradingview scraper'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Mathieu2301/TradingView-API'
      }
    ]
  },
  {
    id: 949,
    name: 'tiingo python',
    creator: 'mehedishohag',
    description: 'Python client for interacting with the Tiingo Financial Data API (stock ticker and news data)',
    skills: [ 'Python', 'Makefile', 'Shell' ],
    tags: [
      'finance',
      'hacktoberfest',
      'stock market',
      'stock prices',
      'stocks',
      'ticker data'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/hydrosquall/tiingo-python'
      }
    ]
  },
  {
    id: 950,
    name: 'reddit sentiment analysis',
    creator: 'anvinhtr',
    description: 'This program goes thru reddit, finds the most mentioned tickers and uses Vader SentimentIntensityAnalyzer to calculate the ticker compound value.  ',
    skills: [ 'Python' ],
    tags: [
      'algotrading',
      'data science',
      'data science projects',
      'data visualization',
      'mentioned tickers',
      'reddit',
      'reddit sentiment analysis',
      'sentiment',
      'sentiment analysis',
      'stocks',
      'ticker compound',
      'trading',
      'vader',
      'vader sentiment analysis',
      'vader sentimentintensityanalyzer',
      'wallstreetbets'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/asad70/reddit-sentiment-analysis'
      }
    ]
  },
  {
    id: 951,
    name: 'stocktrends',
    creator: 'janedoe',
    description: 'A python package to calculate trends in stocks, derivates(Futures & Options) using Renko, PnF, LineBreak etc',
    skills: [ 'Python' ],
    tags: [ 'linebreak', 'pnf', 'renko', 'stock market', 'trading' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ChillarAnand/stocktrends'
      }
    ]
  },
  {
    id: 952,
    name: 'tradingview trainer',
    creator: 'mdrislam30',
    description: 'A lightweight app for practicing your trading on Tradingview',
    skills: [ 'Python' ],
    tags: [
      'bitcoin',
      'cryptocurrency',
      'options',
      'practice',
      'python',
      'selenium',
      'simulated',
      'stocks',
      'tkinter',
      'trading',
      'tradingview'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/robswc/tradingview-trainer'
      }
    ]
  },
  {
    id: 953,
    name: 'tvdatafeed',
    creator: 'akbarhaider',
    description: 'A simple TradingView historical Data Downloader',
    skills: [ 'Jupyter Notebook', 'Python' ],
    tags: [
      'algo trading',
      'backtrader',
      'bitcoin',
      'crypto',
      'dafafeed',
      'historical data',
      'python',
      'stocks',
      'trading',
      'tradingview',
      'tradingview backtrader',
      'tradingview data',
      'tradingview python',
      'tradingview ta'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/StreamAlpha/tvdatafeed'
      }
    ]
  },
  {
    id: 954,
    name: 'Stock Prediction',
    creator: 'joma',
    description: 'Smart Algorithms to predict buying and selling of stocks on the basis of Mutual Funds Analysis, Stock Trends Analysis and Prediction, Portfolio Risk Factor, Stock and Finance Market News Sentiment Analysis and Selling profit ratio.  Project developed as a part of NSE-FutureTech-Hackathon 2018, Mumbai. Team : Semicolon',
    skills: [
      'JavaScript',
      'HTML',
      'CSS',
      'CoffeeScript',
      'TSQL',
      'PHP',
      'Python',
      'Shell'
    ],
    tags: [
      'algorithms',
      'artificial intelligence',
      'data science',
      'lstm neural network',
      'machine learning',
      'risk analysis',
      'sentiment analysis',
      'stock prediction',
      'stock price prediction',
      'visualisation'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Ronak-59/Stock-Prediction'
      }
    ]
  },
  {
    id: 955,
    name: 'robinhood on rails',
    creator: 'anvinhtr',
    description: 'A web dashboard for the free trading platform Robinhood using Ruby on Rails and a private API',
    skills: [
      'Ruby',
      'HTML',
      'JavaScript',
      'CSS',
      'CoffeeScript',
      'Dockerfile'
    ],
    tags: [
      'brokerage',     'dashboard',
      'etf',           'investing',
      'nasdaq',        'nyse',
      'robinhood',     'robinhood api',
      'stock market',  'stocks',
      'trade stocks',  'trading',
      'web dashboard'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bcwik9/robinhood-on-rails'
      }
    ]
  },
  {
    id: 956,
    name: 'TradeAlgo',
    creator: 'tufayelahmed',
    description: 'Stock trading algorithm written in Python for TD Ameritrade.',
    skills: [ 'Python' ],
    tags: [
      'opensource',
      'python',
      'stock market',
      'stock trading',
      'stocks',
      'tdameritrade',
      'trading bot'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/4pz/TradeAlgo' } ]
  },
  {
    id: 957,
    name: 'Stocks Pattern Analyzer',
    creator: 'akbarhaider',
    description: 'This tool should help discover different patterns based on similarity measures in historical (financial) data',
    skills: [ 'Python', 'CSS', 'Dockerfile', 'Shell' ],
    tags: [
      'finance',
      'forecasting',
      'hacktoberfest2021',
      'heroku',
      'restapi',
      'similarity search',
      'stock data',
      'stock market',
      'stock price prediction',
      'stocks',
      'stocks pattern analyzer',
      'timeserie indexing',
      'timeseries',
      'timeseries analysis'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/gaborvecsei/Stocks-Pattern-Analyzer'
      }
    ]
  },
  {
    id: 958,
    name: 'phisix',
    creator: 'justinsiu',
    description: 'Simple PSEi (formerly known as PHISIX) RESTful API hosted on Google AppEngine',
    skills: [ 'Java', 'Shell', 'HTML' ],
    tags: [ 'google appengine', 'java', 'philippines', 'stock', 'stocks' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/phisix-org/phisix' }
    ]
  },
  {
    id: 959,
    name: 'SumZeroTrading',
    creator: 'tanviryouhana',
    description: 'A Java API for Developing Automated Trading Applications for the Equity, Futures, and Currency Markets',
    skills: [ 'Java' ],
    tags: [
      'currency api',
      'currency exchange',
      'futures',
      'fx',
      'interactivebrokers',
      'java api',
      'market data',
      'stock data',
      'stock market',
      'stocks',
      'trading',
      'trading algorithms',
      'trading api',
      'trading platform'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rterp/SumZeroTrading'
      }
    ]
  },
  {
    id: 960,
    name: 'AlgoBot',
    creator: 'joma',
    description: 'A C++ stock market algorithmic trading bot',
    skills: [ 'C++' ],
    tags: [
      'algorithmic trading',
      'algotrading',
      'cplusplus',
      'cplusplus 11',
      'cpp',
      'cpp11',
      'finance',
      'financial analysis',
      'financial data',
      'financial markets',
      'iex',
      'iex api',
      'iextrading',
      'stock analysis',
      'stock data',
      'stock market',
      'stock prediction',
      'stock price prediction',
      'stock trading',
      'stocks'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Chudleyj/AlgoBot' } ]
  },
  {
    id: 961,
    name: 'robinhood google sheets',
    creator: 'tanzilbaraskar',
    description: 'Robinhood Custom Functions for Google Sheets 📈',
    skills: [ 'JavaScript' ],
    tags: [
      'google apps script',
      'google sheets',
      'options',
      'robinhood',
      'robinhood api',
      'spreadsheet',
      'stocks'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/rghuckins/robinhood-google-sheets'
      }
    ]
  },
  {
    id: 962,
    name: 'fast_arrow',
    creator: 'anvinhtr',
    description: '(no longer maintained) A simple yet robust (stock+options) API client for Robinhood',
    skills: [ 'Python', 'Makefile', 'Shell' ],
    tags: [
      'option strategies',
      'portfolio',
      'quantitative finance',
      'robinhood',
      'robinhood api',
      'robinhood portfolio',
      'robinhood python',
      'stocks',
      'trading'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/westonplatter/fast_arrow'
      }
    ]
  },
  {
    id: 963,
    name: 'stocks',
    creator: 'janedoe',
    description: 'machine learning web app game where the user competes against the AI in picking stocks',
    skills: [ 'JavaScript', 'Python', 'HTML', 'CSS' ],
    tags: [
      'd3',
      'flask',
      'javascript',
      'pandas',
      'python',
      'react',
      'sklearn'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/austintackaberry/stocks'
      }
    ]
  },
  {
    id: 964,
    name: 'SweetCurtain',
    creator: 'mdrislam30',
    description: 'A framework that provides CurtainController. CurtainController is a container view controller that implements a content-curtain interface. You can find a similar implementation in applications like Apple Maps, Find My, Stocks, etc. Someone calls it "Pull Up" or "Bottom Sheet".',
    skills: [ 'Swift' ],
    tags: [
      'bottom sheet',
      'curtain',
      'ios',
      'pull up',
      'sliding menu',
      'swift',
      'swipe',
      'user experience'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/multimediasuite/SweetCurtain'
      }
    ]
  },
  {
    id: 965,
    name: 'hashcat',
    creator: 'bob',
    description: "World's fastest and most advanced password recovery utility",
    skills: [
      'C',
      'Perl',
      'Shell',
      'Objective-C',
      'Makefile',
      'Python',
      'C++',
      'Batchfile'
    ],
    tags: [
      'c',       'cracking',
      'cuda',    'gpgpu',
      'hashcat', 'hashes',
      'opencl',  'password'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/hashcat/hashcat' } ]
  },
  {
    id: 966,
    name: 'keepassxc',
    creator: 'bob',
    description: 'KeePassXC is a cross-platform community-driven port of the Windows application “Keepass Password Safe”.',
    skills: [
      'C++',
      'CMake',
      'Shell',
      'C',
      'PowerShell',
      'Objective-C++',
      'Python',
      'Go',
      'JavaScript'
    ],
    tags: [
      'cross platform',
      'hacktoberfest',
      'keepass',
      'keepassxc',
      'linux',
      'macos',
      'password',
      'password manager',
      'privacy',
      'security',
      'windows',
      'yubikey'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/keepassxreboot/keepassxc'
      }
    ]
  },
  {
    id: 967,
    name: 'keeweb',
    creator: 'tufayelahmed',
    description: 'Free cross-platform password manager compatible with KeePass',
    skills: [
      'JavaScript', 'Handlebars',
      'SCSS',       'Python',
      'NSIS',       'HTML',
      'Dockerfile', 'Shell',
      'CSS'
    ],
    tags: [
      'electron',
      'javascript',
      'keepass',
      'keeweb',
      'password',
      'password manager',
      'security'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/keeweb/keeweb' } ]
  },
  {
    id: 968,
    name: 'john',
    creator: 'mehedishohag',
    description: 'John the Ripper jumbo - advanced offline password cracker, which supports hundreds of hash and cipher types, and runs on many operating systems, CPUs, GPUs, and even some FPGAs',
    skills: [
      'C',             'Verilog',
      'Python',        'Perl',
      'Assembly',      'M4',
      'SystemVerilog', 'Shell',
      'Makefile',      'HTML',
      'Lua',           'Ruby',
      'JavaScript',    'Dockerfile'
    ],
    tags: [
      'assembler', 'c',
      'cracker',   'crypt',
      'fpga',      'gpgpu',
      'gpu',       'hash',
      'john',      'jtr',
      'mpi',       'opencl',
      'openmp',    'password',
      'ripper',    'simd'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/openwall/john' } ]
  },
  {
    id: 969,
    name: 'MacPass',
    creator: 'refatmonjur',
    description: 'A native OS X KeePass client ',
    skills: [ 'Objective-C', 'Rich Text Format', 'Shell', 'C' ],
    tags: [
      'autotype',
      'kdbx',
      'keepass',
      'macos',
      'macpass',
      'objective c',
      'password',
      'password manager'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/MacPass/MacPass' } ]
  },
  {
    id: 970,
    name: 'supertokens core',
    creator: 'akbarhaider',
    description: 'Open source alternative to Auth0 / Firebase Auth / AWS Cognito ',
    skills: [ 'Java', 'Shell', 'Dockerfile', 'Batchfile' ],
    tags: [
      'auth0',
      'authentication',
      'aws cognito',
      'email password',
      'email password login',
      'firebase auth',
      'java',
      'keycloak',
      'login',
      'nodejs',
      'oauth2',
      'passportjs',
      'password',
      'passwordless',
      'passwordless authentication',
      'passwordless login',
      'session management',
      'signin',
      'social login',
      'supertokens'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/supertokens/supertokens-core'
      }
    ]
  },
  {
    id: 971,
    name: 'lesspass',
    creator: 'mdrislam30',
    description: ':key: stateless open source password manager',
    skills: [
      'JavaScript', 'Python',
      'Vue',        'HTML',
      'Java',       'Objective-C',
      'Swift',      'Shell',
      'Starlark',   'TypeScript',
      'Dockerfile', 'Ruby'
    ],
    tags: [
      'anonymous',
      'lesspass',
      'password',
      'password manager',
      'passwords',
      'privacy',
      'self hosted'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/lesspass/lesspass' }
    ]
  },
  {
    id: 972,
    name: 'gopass',
    creator: 'bob',
    description: 'The slightly more awesome standard unix password manager for teams',
    skills: [ 'Go', 'Shell', 'Roff', 'Makefile', 'Dockerfile' ],
    tags: [
      'git',
      'go',
      'gpg',
      'hacktoberfest',
      'password manager',
      'security'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/gopasspw/gopass' } ]
  },
  {
    id: 973,
    name: 'HackBrowserData',
    creator: 'saif',
    description: 'Decrypt passwords/cookies/history/bookmarks from the browser. 一款可全平台运行的浏览器数据导出解密工具。',
    skills: [ 'Go' ],
    tags: [
      'browser',
      'browser extension',
      'chrome',
      'edge',
      'firefox',
      'golang',
      'hacking',
      'macos',
      'pentest tool',
      'windows'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/moonD4rk/HackBrowserData'
      }
    ]
  },
  {
    id: 974,
    name: 'fuzzDicts',
    creator: 'techlead',
    description: 'Web Pentesting Fuzz 字典,一个就够了。',
    skills: [ 'Python' ],
    tags: [
      'directory',
      'fuzz testing',
      'fuzzer',
      'fuzzing',
      'paramter',
      'password',
      'pentesting',
      'username',
      'wfuzz'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/TheKingOfDuck/fuzzDicts'
      }
    ]
  },
  {
    id: 975,
    name: 'K8tools',
    creator: 'abdulimtiaz',
    description: 'K8工具合集(内网渗透/提权工具/远程溢出/漏洞利用/扫描工具/密码破解/免杀工具/Exploit/APT/0day/Shellcode/Payload/priviledge/BypassUAC/OverFlow/WebShell/PenTest) Web GetShell Exploit(Struts2/Zimbra/Weblogic/Tomcat/Apache/Jboss/DotNetNuke/zabbix)',
    skills: [
      'PowerShell', 'Python',
      'ASP.NET',    'Go',
      'C',          'VBScript',
      'C++',        'PHP',
      'Perl',       'Classic ASP'
    ],
    tags: [
      '0day',
      'apt',
      'brute force',
      'bypass',
      'crack',
      'database',
      'exploit',
      'getshell',
      'hacking',
      'netscan',
      'password',
      'pentest',
      'poc',
      'privilege escalation',
      'scanner'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/k8gege/K8tools' } ]
  },
  {
    id: 976,
    name: 'buttercup desktop',
    creator: 'abdulimtiaz',
    description: ':key: Cross-Platform Passwords & Secrets Vault',
    skills: [ 'TypeScript', 'JavaScript', 'Sass', 'NSIS', 'Pug' ],
    tags: [
      'buttercup',
      'electron',
      'encryption',
      'login',
      'password manager',
      'password vault',
      'security'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/buttercup/buttercup-desktop'
      }
    ]
  },
  {
    id: 977,
    name: 'clearance',
    creator: 'saif',
    description: 'Rails authentication with email & password.',
    skills: [ 'Ruby', 'HTML', 'Shell' ],
    tags: [
      'clearance',
      'rails',
      'rails authentication',
      'ruby',
      'rubygem',
      'thoughtbot'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/thoughtbot/clearance'
      }
    ]
  },
  {
    id: 978,
    name: 'mimipenguin',
    creator: 'justinsiu',
    description: 'A tool to dump the login password from the current linux user',
    skills: [ 'C', 'Shell', 'Python', 'Makefile' ],
    tags: [ 'password extraction', 'post exploitation' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/huntergregal/mimipenguin'
      }
    ]
  },
  {
    id: 979,
    name: 'keepass2android',
    creator: 'justinsiu',
    description: 'Password manager app for Android',
    skills: [
      'Java',  'C#',
      'C',     'Assembly',
      'C++',   'Makefile',
      'Shell', 'Batchfile'
    ],
    tags: [
      'android',
      'keepass',
      'keepass2',
      'keepass2android',
      'password manager'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/PhilippC/keepass2android'
      }
    ]
  },
  {
    id: 980,
    name: 'Ladon',
    creator: 'joybiswas',
    description: '大型内网渗透扫描器&Cobalt Strike，Ladon9.1.4内置150个模块，包含信息收集/存活主机/端口扫描/服务识别/密码爆破/漏洞检测/漏洞利用。漏洞检测含MS17010/SMBGhost/Weblogic/ActiveMQ/Tomcat/Struts2，密码口令爆破(Mysql/Oracle/MSSQL)/FTP/SSH(Linux)/VNC/Windows(IPC/WMI/SMB/Netbios/LDAP/SmbHash/WmiHash/Winrm),远程执行命令(smbexec/wmiexe/psexec/atexec/sshexec/webshell),降权提权Runas、GetSystem，Poc/Exploit,支持Cobalt Strike 3.X-4.0',
    skills: [ 'C#', 'PowerShell', 'Go', 'Python' ],
    tags: [
      'brute force',    'exp',
      'exploit',        'getshell',
      'hack',           'hacking',
      'ipscanner',      'ladon',
      'netscan',        'password',
      'pentest',        'poc',
      'portscan',       'scanner',
      'security',       'security scanner',
      'security tools', 'tools'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/k8gege/Ladon' } ]
  },
  {
    id: 981,
    name: 'laravel auth',
    creator: 'tufayelahmed',
    description: 'Laravel 8 with user authentication, registration with email confirmation, social media authentication, password recovery, and captcha protection. Uses offical [Bootstrap 4](http://getbootstrap.com). This also makes full use of Controllers for the routes, templates for the views, and makes use of middleware for routing. The project can be stood up in minutes.',
    skills: [ 'PHP', 'Blade', 'Shell', 'Vue' ],
    tags: [
      'authentication',
      'dropzonejs',
      'google maps',
      'gravatar api',
      'laravel',
      'laravel framework',
      'localization',
      'registration',
      'roles',
      'social authentication',
      'socialite',
      'socialite logins',
      'two step authentication',
      'user management',
      'user profile',
      'users'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jeremykenedy/laravel-auth'
      }
    ]
  },
  {
    id: 982,
    name: 'cupp',
    creator: 'joybiswas',
    description: 'Common User Passwords Profiler (CUPP)',
    skills: [ 'Python' ],
    tags: [
      'dictionary attack',
      'password',
      'password strength',
      'weak passwords',
      'wordlist',
      'wordlist generator'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/Mebus/cupp' } ]
  },
  {
    id: 983,
    name: 'passport local',
    creator: 'abdulimtiaz',
    description: 'Username and password authentication strategy for Passport and Node.js.',
    skills: [ 'JavaScript', 'Makefile' ],
    tags: [ 'passport', 'password' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/jaredhanson/passport-local'
      }
    ]
  },
  {
    id: 984,
    name: 'holehe',
    creator: 'tanviryouhana',
    description: 'holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.',
    skills: [ 'Python' ],
    tags: [
      'ebay',
      'email',
      'emails',
      'information gathering',
      'instagram',
      'open source intelligence',
      'osint',
      'osint python',
      'osint tools',
      'pypi',
      'python',
      'social network',
      'tellonym',
      'trio',
      'twitter'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/megadose/holehe' } ]
  },
  {
    id: 985,
    name: 'stegcloak',
    creator: 'tufayelahmed',
    description: 'Hide secrets with invisible characters in plain text securely using passwords 🧙🏻‍♂️⭐',
    skills: [ 'JavaScript' ],
    tags: [
      'cipher',
      'compression',
      'cryptography',
      'data exfiltration',
      'functional programming',
      'hacking',
      'hacking tool',
      'hacking tools',
      'infosec',
      'javascript',
      'privacy',
      'ramdajs',
      'security',
      'security tools',
      'steganography',
      'stego'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/KuroLabs/stegcloak' }
    ]
  },
  {
    id: 986,
    name: 'h8mail',
    creator: 'frankniu',
    description: 'Email OSINT & Password breach hunting tool, locally or using premium services. Supports chasing down related email',
    skills: [ 'Python', 'Makefile', 'Dockerfile' ],
    tags: [
      'breach',
      'breach compilation',
      'email',
      'hacking',
      'haveibeenpwned',
      'hibp',
      'kali',
      'leak',
      'osint',
      'password',
      'recon',
      'theharvester'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/khast3x/h8mail' } ]
  },
  {
    id: 987,
    name: 'wifi password',
    creator: 'joma',
    description: 'Quickly fetch your WiFi password and if needed, generate a QR code of your WiFi to allow phones to easily connect',
    skills: [ 'Python' ],
    tags: [
      'commandline',  'linux',
      'macos',        'network',
      'python',       'python3',
      'qrcode',       'wifi',
      'wifi network', 'windows'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/sdushantha/wifi-password'
      }
    ]
  },
  {
    id: 988,
    name: 'staticrypt',
    creator: 'tanviryouhana',
    description: 'Password protect a static HTML page',
    skills: [ 'JavaScript', 'HTML' ],
    tags: [
      'cli',
      'encryption',
      'html',
      'javascript',
      'password',
      'static html'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/robinmoisson/staticrypt'
      }
    ]
  },
  {
    id: 989,
    name: 'DefaultCreds cheat sheet',
    creator: 'frankniu',
    description: 'One place for all the default credentials to assist the Blue/Red teamers activities on finding devices with default password 🛡️',
    skills: [ 'Jupyter Notebook', 'Python' ],
    tags: [
      'blueteam',
      'bugbounty',
      'cheatsheet',
      'credentials gathering',
      'cybersecurity',
      'default password',
      'exploit',
      'infosec',
      'offensive security',
      'pentest',
      'pentesting'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ihebski/DefaultCreds-cheat-sheet'
      }
    ]
  },
  {
    id: 990,
    name: 'KeePassDX',
    creator: 'mehedishohag',
    description: 'Lightweight password manager for Android, KeePassDX allows editing encrypted data in a single file in KeePass format and fill in the forms in a secure way.',
    skills: [
      'Kotlin',   'C',
      'Java',     'Assembly',
      'C++',      'Ruby',
      'CMake',    'Shell',
      'Makefile'
    ],
    tags: [
      'android',
      'android application',
      'fingerprint',
      'keepass',
      'keepass dx',
      'keepassdx',
      'material',
      'material design',
      'password manager'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Kunzisoft/KeePassDX'
      }
    ]
  },
  {
    id: 991,
    name: 'huge',
    creator: 'joybiswas',
    description: 'Simple user-authentication solution, embedded into a small framework.',
    skills: [ 'PHP', 'Shell', 'Hack' ],
    tags: [
      'auth',
      'authentication',
      'authorization',
      'framework',
      'password',
      'password hash',
      'php',
      'user auth'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/panique/huge' } ]
  },
  {
    id: 992,
    name: 'Android Password Store',
    creator: 'patrick',
    description: "Android application compatible with ZX2C4's Pass command line application",
    skills: [ 'Kotlin', 'Shell', 'JavaScript', 'AIDL' ],
    tags: [
      'android',
      'hacktoberfest',
      'openpgp',
      'password generator',
      'password manager',
      'password store'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/android-password-store/Android-Password-Store'
      }
    ]
  },
  {
    id: 993,
    name: 'tensorflow 1.4 billion password analysis',
    creator: 'janedoe',
    description: 'Deep Learning model to analyze a large corpus of clear text passwords.',
    skills: [ 'Python', 'Shell' ],
    tags: [ 'deep learning', 'natural language processing', 'tensorflow' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/philipperemy/tensorflow-1.4-billion-password-analysis'
      }
    ]
  },
  {
    id: 994,
    name: 'pwd.sh',
    creator: 'frankniu',
    description: 'GPG symmetric password manager',
    skills: [ 'Shell' ],
    tags: [
      'bash',
      'bash script',
      'encryption',
      'file encryption',
      'gnupg',
      'gpg',
      'password',
      'password manager',
      'unix'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/drduh/pwd.sh' } ]
  },
  {
    id: 995,
    name: 'utils',
    creator: 'tufayelahmed',
    description: '🛠 Lightweight utilities for string & array manipulation, image handling, safe JSON encoding/decoding, validation, slug or strong password generating etc.',
    skills: [ 'PHP' ],
    tags: [
      'array manipulations',
      'component',
      'json',
      'nette',
      'nette framework',
      'pagination',
      'php',
      'tools',
      'trait',
      'utilities'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/nette/utils' } ]
  },
  {
    id: 996,
    name: 'pwnedOrNot',
    creator: 'tanzilbaraskar',
    description: 'OSINT Tool for Finding Passwords of Compromised Email Addresses',
    skills: [ 'Python', 'Shell', 'Dockerfile' ],
    tags: [
      'api',
      'hacked emails',
      'haveibeenpwned',
      'osint',
      'passwords',
      'pwnedornot'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/thewhiteh4t/pwnedOrNot'
      }
    ]
  },
  {
    id: 997,
    name: 'google2fa',
    creator: 'tufayelahmed',
    description: 'A One Time Password Authentication package, compatible with Google Authenticator.',
    skills: [ 'PHP', 'Shell' ],
    tags: [
      '2fa',
      'agnostic',
      'google2fa',
      'hacktoberfest',
      'php',
      'two factor authentication'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/antonioribeiro/google2fa'
      }
    ]
  },
  {
    id: 998,
    name: 'TeamPass',
    creator: 'akbarhaider',
    description: 'Collaborative Passwords Manager',
    skills: [ 'PHP', 'CSS', 'JavaScript', 'Blade', 'Shell', 'Dockerfile' ],
    tags: [ 'php' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/nilsteampassnet/TeamPass'
      }
    ]
  },
  {
    id: 999,
    name: 'accounts',
    creator: 'abdulimtiaz',
    description: 'Fullstack authentication and accounts-management for Javascript.',
    skills: [ 'TypeScript', 'JavaScript', 'CSS', 'Shell' ],
    tags: [ 'accounts', 'graphql', 'oauth', 'password', 'rest', 'sessions' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/accounts-js/accounts'
      }
    ]
  },
  {
    id: 1000,
    name: 'otplib',
    creator: 'frankniu',
    description: ':key: One Time Password (OTP) / 2FA for Node.js and Browser - Supports HOTP, TOTP and Google Authenticator',
    skills: [ 'TypeScript', 'JavaScript', 'CSS', 'Shell', 'HTML' ],
    tags: [
      '2fa',
      'authenticator',
      'browser',
      'google authenticator',
      'hmac',
      'hotp',
      'nodejs',
      'one time passwords',
      'otp',
      'two factor',
      'two factor authentication'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/yeojz/otplib' } ]
  },
  {
    id: 1001,
    name: 'node argon2',
    creator: 'mdrislam30',
    description: 'Node.js bindings for Argon2 hashing algorithm',
    skills: [ 'JavaScript', 'C++', 'TypeScript' ],
    tags: [ 'argon2', 'crypto', 'encryption', 'hashing', 'password' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/ranisalt/node-argon2'
      }
    ]
  },
  {
    id: 1002,
    name: 'Cipher.so',
    creator: 'refatmonjur',
    description: 'A simple way to encrypt your secure data like passwords into a native .so library.',
    skills: [ 'Java', 'Groovy', 'C++', 'CMake', 'C' ],
    tags: [
      'cipher',
      'gradle',
      'java',
      'native',
      'native libraries',
      'secure'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/linisme/Cipher.so' }
    ]
  },
  {
    id: 1003,
    name: 'SecretScanner',
    creator: 'zealptl',
    description: ':unlock: :unlock: Find secrets and passwords in container images and file systems :unlock: :unlock:',
    skills: [ 'Go', 'Python', 'Dockerfile', 'Shell', 'Makefile' ],
    tags: [
      'containers',
      'devsecops',
      'docker',
      'infosectools',
      'k8s',
      'kubernetes',
      'password',
      'scanning tool',
      'secret keys',
      'secrets',
      'secrets detection',
      'secrets management',
      'security',
      'security tools',
      'vulnerability scanners'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/deepfence/SecretScanner'
      }
    ]
  },
  {
    id: 1004,
    name: 'mentalist',
    creator: 'techlead',
    description: 'Mentalist is a graphical tool for custom wordlist generation. It utilizes common human paradigms for constructing passwords and can output the full wordlist as well as rules compatible with Hashcat and John the Ripper.',
    skills: [ 'Python' ],
    tags: [
      'cracking',
      'cracking hashes',
      'password',
      'wordlist',
      'wordlist generator',
      'wordlist technique'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/sc0tfree/mentalist' }
    ]
  },
  {
    id: 1005,
    name: 'node keytar',
    creator: 'tanviryouhana',
    description: 'Native Password Node Module',
    skills: [
      'C++',
      'JavaScript',
      'Python',
      'Dockerfile',
      'PowerShell',
      'Shell'
    ],
    tags: [ 'credential storage', 'keychain', 'libsecret' ],
    links: [ { type: 'GitHub', link: 'https://github.com/atom/node-keytar' } ]
  },
  {
    id: 1006,
    name: 'comeonin',
    creator: 'janedoe',
    description: 'Password hashing specification for the Elixir programming language',
    skills: [ 'Elixir' ],
    tags: [ 'argon2', 'bcrypt', 'elixir', 'pbkdf2' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/riverrun/comeonin' }
    ]
  },
  {
    id: 1007,
    name: 'authpass',
    creator: 'frankniu',
    description: 'AuthPass - Password Manager based on Flutter for all platforms. Keepass 2.x (kdbx 3.x) compatible.',
    skills: [
      'Dart',        'Shell',
      'C++',         'CMake',
      'HTML',        'Ruby',
      'Swift',       'Inno Setup',
      'C',           'Java',
      'Objective-C'
    ],
    tags: [
      'android',          'contributions welcome',
      'dart',             'dartlang',
      'debian',           'flutter',
      'flutter apps',     'hacktoberfest',
      'help wanted',      'ios',
      'kdbx',             'keepass',
      'linux',            'macos application',
      'password manager', 'password store',
      'security',         'web',
      'windows'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/authpass/authpass' }
    ]
  },
  {
    id: 1008,
    name: 'MasterPassword',
    creator: 'techlead',
    description: 'Project moved to https://gitlab.com/spectre.app',
    skills: [
      'Objective-C',
      'Java',
      'C',
      'Shell',
      'JavaScript',
      'CMake',
      'HTML',
      'CSS',
      'Ruby',
      'Dockerfile',
      'Rich Text Format',
      'Makefile'
    ],
    tags: [
      'android',
      'cli',
      'cryptography',
      'ios',
      'java',
      'macos',
      'password generator',
      'password hash',
      'password manager',
      'password store',
      'password vault',
      'passwords',
      'scrypt'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Lyndir/MasterPassword'
      }
    ]
  },
  {
    id: 1009,
    name: 'passport local mongoose',
    creator: 'saif',
    description: 'Passport-Local Mongoose is a Mongoose plugin that simplifies building username and password login with Passport',
    skills: [ 'JavaScript', 'Dockerfile' ],
    tags: [ 'javascript', 'mongoose plugin', 'passport' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/saintedlama/passport-local-mongoose'
      }
    ]
  },
  {
    id: 1010,
    name: 'SprayingToolkit',
    creator: 'justinsiu',
    description: 'Scripts to make password spraying attacks against Lync/S4B, OWA & O365 a lot quicker, less painful and more efficient',
    skills: [ 'Python' ],
    tags: [
      'lync',
      'o365',
      'owa',
      'password spraying',
      'password spraying attacks',
      'pentesting',
      'python3',
      'red teams',
      'security',
      'security tools',
      'skype for business'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/byt3bl33d3r/SprayingToolkit'
      }
    ]
  },
  {
    id: 1011,
    name: 'Dictionary Of Pentesting',
    creator: 'mdrislam30',
    description: 'Dictionary collection project such as Pentesing, Fuzzing, Bruteforce and BugBounty. 渗透测试、SRC漏洞挖掘、爆破、Fuzzing等字典收集项目。',
    skills: [ 'Shell' ],
    tags: [
      'bruteforce',
      'bugbounty',
      'bugbountytips',
      'bughunting methodology',
      'database',
      'dictionary',
      'dns',
      'fingerprint',
      'fuzzing',
      'iot security',
      'password',
      'payloads',
      'pentest',
      'pentesting',
      'rce',
      'regex pattern',
      'spring boot',
      'subdomain',
      'websecurity',
      'wifi'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/insightglacier/Dictionary-Of-Pentesting'
      }
    ]
  },
  {
    id: 1012,
    name: 'Bilibili Toolkit',
    creator: 'mehedishohag',
    description: '🛠️ 哔哩哔哩（B站）辅助工具箱，支持Cookie/Token/Password融合持久化登录与多用户操作',
    skills: [ 'Python', 'Dockerfile' ],
    tags: [ 'bilibili', 'python' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Hsury/Bilibili-Toolkit'
      }
    ]
  },
  {
    id: 1013,
    name: 'Passhunt',
    creator: 'joma',
    description: 'Passhunt is a simple tool for searching of default credentials for network devices, web applications and more. Search through 523 vendors and their 2084 default passwords.',
    skills: [ 'Python' ],
    tags: [
      'cybersecurity',
      'default credentials',
      'default password',
      'password',
      'penetration testing',
      'pentest tool',
      'security',
      'security testing'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/Viralmaniar/Passhunt'
      }
    ]
  },
  {
    id: 1014,
    name: 'EMAGNET',
    creator: 'anvinhtr',
    description: 'Automated hacking tool that will find leaked databases with 97.1% accurate to grab mail + password together from recent uploads from https://pastebin.com. Bruteforce support for spotify accounts, instagram accounts, ssh servers, microsoft rdp clients and gmail accounts',
    skills: [ 'Shell', 'Dockerfile' ],
    tags: [
      'attack',
      'breaches',
      'brute force attacks',
      'bruteforce password cracker',
      'bruteforcing',
      'database',
      'databases',
      'hacking',
      'linux',
      'pastebin',
      'rdp',
      'rdpattack',
      'screenshot',
      'spotify',
      'ssh',
      'sshbruteforce'
    ],
    links: [ { type: 'GitHub', link: 'https://github.com/wuseman/EMAGNET' } ]
  },
  {
    id: 1015,
    name: 'repo security scanner',
    creator: 'janedoe',
    description: 'CLI tool that finds secrets accidentally committed to a git repo, eg passwords, private keys',
    skills: [
      'Go',
      'Python',
      'Makefile',
      'Shell',
      'Standard ML',
      'Dockerfile'
    ],
    tags: [ 'golang', 'security', 'security audit' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/techjacker/repo-security-scanner'
      }
    ]
  },
  {
    id: 1016,
    name: 'fakelogonscreen',
    creator: 'mehedishohag',
    description: 'Fake Windows logon screen to steal passwords',
    skills: [ 'C#' ],
    tags: [
      'cobaltstrike',
      'fake',
      'logon',
      'screen',
      'windows',
      'winlogon'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/bitsadmin/fakelogonscreen'
      }
    ]
  },
  {
    id: 1017,
    name: 'enso',
    creator: 'joybiswas',
    description: 'Laravel Vue SPA, Bulma themed. For demo login use `admin@laravel-enso.com` & `password` -',
    skills: [ 'PHP', 'Dockerfile', 'Shell', 'Vue', 'Blade' ],
    tags: [
      'admin',      'boilerplate',
      'bulma',      'enso',
      'laravel',    'laravel enso',
      'spa',        'vue',
      'vue router', 'vuex'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/laravel-enso/enso' }
    ]
  },
  {
    id: 1018,
    name: 'browserpass legacy',
    creator: 'refatmonjur',
    description: 'Legacy Browserpass repo, development is now happening at:',
    skills: [
      'JavaScript',
      'Go',
      'Shell',
      'CSS',
      'Makefile',
      'PowerShell',
      'HTML',
      'Dockerfile'
    ],
    tags: [ 'chrome', 'firefox', 'go', 'password' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/browserpass/browserpass-legacy'
      }
    ]
  },
  {
    id: 1019,
    name: 'gocrack',
    creator: 'akbarhaider',
    description: 'GoCrack is a management frontend for password cracking tools written in Go',
    skills: [ 'Go', 'Makefile', 'Shell', 'C' ],
    tags: [ 'fireeye flare' ],
    links: [ { type: 'GitHub', link: 'https://github.com/mandiant/gocrack' } ]
  },
  {
    id: 1020,
    name: 'firefox_decrypt',
    creator: 'tufayelahmed',
    description: 'Firefox Decrypt is a tool to extract passwords from Mozilla (Firefox™, Waterfox™, Thunderbird®, SeaMonkey®) profiles',
    skills: [ 'Python' ],
    tags: [
      'command line tool',
      'extract passwords',
      'firefox',
      'firefox decrypt',
      'libnss3',
      'mozilla',
      'python',
      'seamonkey',
      'thunderbird',
      'waterfox'
    ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/unode/firefox_decrypt'
      }
    ]
  },
  {
    id: 1021,
    name: 'otphp',
    creator: 'patrick',
    description: ':closed_lock_with_key: A PHP library for generating one time passwords according to RFC 4226 (HOTP) and the RFC 6238 (TOTP)',
    skills: [ 'PHP' ],
    tags: [
      'hotp',     'otp',
      'php',      'rfc 4226',
      'rfc 6238', 'rfc4226',
      'rfc6238',  'totp'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/Spomky-Labs/otphp' }
    ]
  },
  {
    id: 1022,
    name: 'btcrecover',
    creator: 'techlead',
    description: 'An open source Bitcoin wallet password and seed recovery tool designed for the case where you already know most of your password/seed, but need assistance in trying different possible combinations.',
    skills: [ 'Python', 'C', 'Shell' ],
    tags: [ 'bitcoin', 'password recovery' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/gurnec/btcrecover' }
    ]
  },
  {
    id: 1023,
    name: 'naive hashcat',
    creator: 'abdulimtiaz',
    description: 'Crack password hashes without the fuss :cat2:',
    skills: [ 'C', 'Shell', 'Python', 'Batchfile' ],
    tags: [ 'hacking', 'hash cracking', 'hashcat', 'password cracking' ],
    links: [
      {
        type: 'GitHub',
        link: 'https://github.com/brannondorsey/naive-hashcat'
      }
    ]
  },
  {
    id: 1024,
    name: 'passcore',
    creator: 'patrick',
    description: 'A self-service password management tool for Active Directory',
    skills: [
      'C#',
      'TypeScript',
      'PowerShell',
      'JavaScript',
      'HTML',
      'Dockerfile'
    ],
    tags: [
      'activedirectory',
      'application pool',
      'dotnet',
      'dotnetcore',
      'iis',
      'password',
      'password manager',
      'password meter',
      'powershell',
      'react',
      'recaptcha',
      'self service',
      'ssl certificate'
    ],
    links: [
      { type: 'GitHub', link: 'https://github.com/unosquare/passcore' }
    ]
  },
  {
    id: 1025,
    name: 'pass otp',
    creator: 'mehedishohag',
    description: 'A pass extension for managing one-time-password (OTP) tokens',
    skills: [ 'Shell', 'Roff', 'Makefile', 'Nix' ],
    tags: [ 'otpauth', 'password store' ],
    links: [
      { type: 'GitHub', link: 'https://github.com/tadfisher/pass-otp' }
    ]
  }
]

module.exports = projectInfos;
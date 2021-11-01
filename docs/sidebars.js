/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 module.exports = {
  test: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro',
        'community',
        'support'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting_started/installation',
        'getting_started/cli',
        'getting_started/voipnet',
        'getting_started/voice'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        //'guides/voipnet'
      ],
      collapsed: false,
    }
  ],
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro',
        'community',
        'support'
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting_started/installation',
        'getting_started/cli',
        'getting_started/voipnet',
        'getting_started/voice',
        {
          type: 'category',
          label: 'Reference',
          items: [
            'reference/Users',
            'reference/Projects',
            'reference/Providers',
            'reference/Numbers',
            'reference/Domains',
            'reference/Agents',
            'reference/CallManager',
            'reference/Auths',
            'reference/Funcs',
            'reference/Secrets',
            'reference/Storage'
          ],
          collapsed: true,
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/voipnet'
      ],
      collapsed: false,
    }
  ]
}

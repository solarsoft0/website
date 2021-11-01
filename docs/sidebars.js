/**
 * Copyright (c) 2021-present, Fonoster, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'overview',
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
            'reference/overview',
            'reference/Users',
            'reference/Projects',
            'reference/Providers',
            'reference/Numbers',
            'reference/Domains',
            'reference/Agents',
            'reference/CallManager',
            'reference/Auths'
          ],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/voice'
      ],
      collapsed: false,
    }
  ]
}

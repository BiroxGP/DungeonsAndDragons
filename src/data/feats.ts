import type { Feat } from '../types/srd'

/**
 * SRD 5.1 publishes exactly one feat (Grappler) under the optional feats
 * rule — the rest of the PHB feat list is not part of the open content.
 */
export const FEATS: Feat[] = [
  {
    id: 'grappler',
    name: { en: 'Grappler' },
    prerequisite: { en: 'Strength 13 or higher' },
    description: {
      en: 'You have advantage on attack rolls against a creature you are grappling. You can use your action to try to pin a creature grappled by you: make another grapple check, and if you succeed, you and the creature are both restrained until the grapple ends.',
    },
    source: 'SRD5.1',
  },
]

export const FEATS_BY_ID: Record<string, Feat> = Object.fromEntries(FEATS.map((f) => [f.id, f]))

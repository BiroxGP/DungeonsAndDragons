import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createCharacter, CHARACTER_SCHEMA_VERSION, type Character } from '../types/character'

interface CharacterStore {
  characters: Character[]
  activeCharacterId: string | null
  addCharacter: (name?: string) => Character
  /** Upserts a fully-formed character (e.g. from the creation wizard or a JSON import). */
  saveCharacter: (character: Character) => void
  updateCharacter: (id: string, patch: Partial<Character>) => void
  removeCharacter: (id: string) => void
  setActiveCharacterId: (id: string | null) => void
  /** Clones a template into a play copy, per the plan's explicit `kind` discriminator. */
  startPlayCopy: (templateId: string) => Character | undefined
}

export const useCharacterStore = create<CharacterStore>()(
  persist(
    (set, get) => ({
      characters: [],
      activeCharacterId: null,

      addCharacter: (name) => {
        const character = createCharacter(name)
        set((state) => ({ characters: [...state.characters, character], activeCharacterId: character.id }))
        return character
      },

      saveCharacter: (character) => {
        set((state) => {
          const exists = state.characters.some((c) => c.id === character.id)
          const characters = exists
            ? state.characters.map((c) => (c.id === character.id ? character : c))
            : [...state.characters, character]
          return { characters, activeCharacterId: character.id }
        })
      },

      updateCharacter: (id, patch) => {
        set((state) => ({
          characters: state.characters.map((c) =>
            c.id === id ? { ...c, ...patch, updatedAt: Date.now() } : c,
          ),
        }))
      },

      removeCharacter: (id) => {
        set((state) => ({
          characters: state.characters.filter((c) => c.id !== id),
          activeCharacterId: state.activeCharacterId === id ? null : state.activeCharacterId,
        }))
      },

      setActiveCharacterId: (id) => set({ activeCharacterId: id }),

      startPlayCopy: (templateId) => {
        const template = get().characters.find((c) => c.id === templateId)
        if (!template) return undefined
        const now = Date.now()
        const playCopy: Character = {
          ...template,
          id: `char_${now}_${Math.random().toString(36).slice(2, 9)}`,
          kind: 'playCopy',
          sourceCharacterId: template.id,
          currentHp: template.maxHp,
          createdAt: now,
          updatedAt: now,
        }
        set((state) => ({ characters: [...state.characters, playCopy], activeCharacterId: playCopy.id }))
        return playCopy
      },
    }),
    {
      name: 'dnd-character-generator',
      version: CHARACTER_SCHEMA_VERSION,
      // Placeholder for future schema changes: bump CHARACTER_SCHEMA_VERSION
      // and add a branch here instead of an inline fixup in the initializer.
      migrate: (persistedState) => persistedState as CharacterStore,
    },
  ),
)

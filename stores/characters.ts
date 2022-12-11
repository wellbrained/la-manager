import { acceptHMRUpdate, defineStore } from "pinia";
import { Character } from "~/types/types";

export const useCharacters = defineStore("characters", {
  state: () => ({
    characters: [] as Character[],
  }),

  getters: {
    chars: (state) => state.characters,
  },

  actions: {
    update(character: Character) {
      this.chars.push(character);
    },
    remove(index: number) {
      this.chars.splice(index, 1);
    },
  },

  persist: {
    storage: persistedState.localStorage,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCharacters, import.meta.hot));
}

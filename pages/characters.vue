<script setup lang="ts">
import { useCharacters } from '~/stores/characters';
import { Classes } from '~/types/classes'
import { Character } from '~/types/types'

const characters = useCharacters()

const name = ref()
const charLevel = ref(0)
const itemLevel = ref(0)
const selectedClass = ref()
const isAddCharacter = ref(true)

const classOptions = computed(() => {
    const test = Object.values(Classes)
    console.log(test)
    return test
})

function addCharacter() {
    const char: Character = {
        id: Date.now().toString(36),
        name: name.value,
        charLevel: charLevel.value,
        itemLevel: itemLevel.value,
        class: selectedClass.value,
    };
    characters.update(char)
    resetForm()
}

function updateCharacter() {
    characters.update(char)
}

function editCharacter(id: string) {
    const char: Character = characters.chars.find(char => char.id === id)
    id.value = char.id
    name.value = char.name
    charLevel.value = char.charLevel
    itemLevel.value = char.itemLevel
    selectedClass.value = char.class
}

function removeCharacter(index: number) {
    characters.remove(index)
}

function resetForm() {    
    name.value = ''
    charLevel.value = ''
    itemLevel.value = ''
    selectedClass.value = ''
}
</script>

<template>
    <div class="flex w-full gap-8">
        <div class="w-1/4">
            <div class="grid items-start grid-cols-1 gap-6 mt-8">
                <div class="grid grid-cols-1 gap-6">
                    <label class="block">
                        <span class="text-gray-700">Charactername</span>
                        <NInput v-model:value="name" type="text" />
                    </label>
                    <label class="block">
                        <span class="text-gray-700">Character Level</span>
                        <NInputNumber v-model:value="charLevel" :min="0" :max="60" />
                    </label>
                    <label class="block">
                        <span class="text-gray-700">Item Level</span>
                        <NInputNumber v-model:value="itemLevel" :min="0" :max="1700" />
                    </label>
                    <label class="block">
                        <span class="text-gray-700">Class</span>
                        <NSelect v-model:value="selectedClass" :options="classOptions" />
                    </label>
                </div>
                <div>
                    <NButton type="primary" @click="addCharacter()" v-if="isAddCharacter">Add Character</NButton>
                    <NButton type="primary" @click="updateCharacter()" v-else>Update Character</NButton>
                </div>
            </div>
        </div>

        <div class="w-3/4 overflow-x-auto">
            <table class="table w-full table-zebra">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th class="48">Level</th>
                        <th class="48">itemLevel</th>
                        <th class="w-24"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(char, index) in characters.chars" :key="index">
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="w-12 h-12 mask mask-squircle">
                                        <img :src="`../_nuxt/public/class-icons/${char.class.toLowerCase()}.png`" :alt="`Class - ${char.class}`" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">{{ char.name }}</div>
                                    <div class="text-sm opacity-50">{{ char.class }}</div>
                                </div>
                            </div>
                        </td>
                        <td>{{ char.charLevel }}</td>
                        <td>{{ char.itemLevel }}</td>
                        <td>
                            <button class="btn btn-ghost" @click="editCharacter(char.id)">Edit</button>
                            <button class="btn btn-ghost" @click="removeCharacter(index)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
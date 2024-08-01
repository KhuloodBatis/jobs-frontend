<template>
    <header class="py-6 flex items-center justify-between">
        <NuxtLink :to="{name:'index'}" exact-active-class="text-blue-500">Jobs </NuxtLink>

        <div class="-mx-4   flex items-center flex-wrap">
            <span class="mx-4 font-bold">kool</span>
            <NuxtLink :to="{name:'login'}" exact-active-class="text-blue-500">Login</NuxtLink>
            <a href="" class="mx-4" exact-active-class="text-blue-500" >Manage listings</a>
            <a href="" class="mx-4" exact-active-class="text-blue-500">Logout</a>
            <a href="" class="mx-4"exact-active-class="text-blue-500">Post a job</a>
        </div>

    </header>
</template>


<template>
    <header class="py-6 flex items-center justify-between">
        <NuxtLink :to="{name:'index'}" exact-active-class="text-blue-500">Jobs </NuxtLink>
        <div class="-mx-4   flex items-center flex-wrap">

          <a href="" class="mx-4"exact-active-class="text-blue-500">Post a job</a>

          <template v-if="$auth.loggedIn">
            <span class="mx-4 font-bold">{{ $auth.user.name }}</span>
            <a href="" class="mx-4" exact-active-class="text-blue-500" >Manage listings</a>
            <a href="" class="mx-4" exact-active-class="text-blue-500">Logout</a>
          </template>


         <template v-if="!$auth.loggedIn">
          <NuxtLink :to="{name:'login'}" exact-active-class="text-blue-500">Login</NuxtLink>
          </template>


        </div>

    </header>
</template>


<template>
  <UHeader>
    <template #title>
      <div class="flex place-items-center-safe gap-2">
        <NuxtImg src="/owl.png" width="48" height="48" />
        <p>CyberOwl</p>
      </div>
    </template>

    <template #right>
      <UButton
        class="font-mono"
        color="neutral"
        variant="subtle"
        to="https://github.com/cyberowl-town"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
      >
        cyberowl-town
      </UButton>
    </template>
  </UHeader>

  <UMain>
    <UContainer class="font-mono">
      <slot />
    </UContainer>
  </UMain>

  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        Copyright &copy;{{ new Date().getFullYear() }} CyberOwl Town.
      </p>
    </template>
  </UFooter>
</template>

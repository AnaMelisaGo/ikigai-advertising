<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
<style>
main {
  padding: 2rem;
  min-height: calc(100vh - 56px); /* Adjust based on header and footer height */
}
</style>
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
  min-height: calc(100vh - 160px); /* Adjust based on header and footer height */
  margin-top: 5rem;
}
</style>
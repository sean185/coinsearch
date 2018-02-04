<template lang='pug'>
md-app#app(md-mode="fixed", md-waterfall)
  md-app-toolbar.md-primary
    .md-toolbar-row
      .md-toolbar-section-start
        span.md-title CoinSearch
      .md-toolbar-section-end
        md-button.md-icon-button
          md-icon settings
  md-app-drawer(md-permanent="clipped")
    md-toolbar.md-transparent(md-elevation='0') CoinSearch
    md-list
      md-list-item
        md-icon move_to_inbox
        span.md-list-item-text Inbox
      md-list-item
        md-icon send
        span.md-list-item-text Sent Mail
      md-list-item
        md-icon delete
        span.md-list-item-text Trash
      md-list-item
        md-icon error
        span.md-list-item-text Spam
  md-app-content
    router-view
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang='stylus'>
.md-app-drawer
  width 200px
#app
  min-height 100vh
  font-family 'Roboto', Helvetica, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>

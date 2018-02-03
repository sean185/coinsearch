<template lang='pug'>
#hello.page-container
    md-app(md-mode="reveal")
        md-app-toolbar.md-primary
            .md-toolbar-row
                .md-toolbar-section-start
                    md-button.md-icon-button(@click='menuVisible = !menuVisible')
                        md-icon menu
                    span.md-title CoinSearch
                md-autocomplete.search(v-model="selectedState", :md-options="states", md-layout="box")
                    label State
                .md-toolbar-section-end
                    md-button Advanced
        md-app-drawer(:md-active.sync="menuVisible")
            md-toolbar.md-transparent(md-elevation='0')
                | Navigation
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
            h1 CoinSearch
            hr
            .md-layout.md-gutter
                .md-layout-item.md-small-size-100.md-xsmall-size-100
                    h2 Articles & Discussions
                    md-card(routerLink='/details/first')
                        md-card-media-cover
                            md-card-media
                                img.card-img.img-fluid(src="./../assets/pawns.jpg")
                            md-card-area
                                md-card-header
                                    .card-title Card Title
                                    p.card-text This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    p.card-text Last Updated 3 mins ago
                    md-card(routerLink='/details/first')
                        md-card-media-cover
                            md-card-media
                                img.card-img.img-fluid(src="./../assets/pawns.jpg")
                            md-card-area
                                md-card-header
                                    .card-title Card Title
                                    p.card-text This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    p.card-text Last Updated 3 mins ago
                    md-card(routerLink='/details/first')
                        md-card-media-cover
                            md-card-media
                                img.card-img.img-fluid(src="./../assets/pawns.jpg")
                            md-card-area
                                md-card-header
                                    .card-title Card Title
                                    p.card-text This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    p.card-text Last Updated 3 mins ago
                    md-card(routerLink='/details/first')
                        md-card-media-cover
                            md-card-media
                                img.card-img.img-fluid(src="./../assets/pawns.jpg")
                            md-card-area
                                md-card-header
                                    .card-title Card Title
                                    p.card-text This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    p.card-text Last Updated 3 mins ago
                .md-layout-item.md-size-40.md-small-size-100.md-xsmall-size-100
                    h2 Trending
                    md-table(md-card)
                        md-table-row
                            md-table-cell #[span.fab.fa-2x.fa-bitcoin]
                            md-table-cell OneCoin
                            md-table-cell #[span.fas.fa-2x.fa-caret-up]
                            md-table-cell 50 new replies
                        md-table-row
                            md-table-cell #[span.fab.fa-2x.fa-bitcoin]
                            md-table-cell TwoCoin
                            md-table-cell #[span.fas.fa-2x.fa-caret-down]
                            md-table-cell Status
                        md-table-row
                            md-table-cell #[span.fab.fa-2x.fa-bitcoin]
                            md-table-cell ThreeCoin
                            md-table-cell #[span.fas.fa-2x.fa-caret-up]
                            md-table-cell Status
                        md-table-row
                            md-table-cell #[span.fab.fa-2x.fa-bitcoin]
                            md-table-cell FourCoin
                            md-table-cell #[span.fas.fa-2x.fa-caret-down]
                            md-table-cell Status
                        md-table-row
                            md-table-cell #[span.fab.fa-2x.fa-bitcoin]
                            md-table-cell FiveCoin
                            md-table-cell #[span.fas.fa-2x.fa-caret-up]
                            md-table-cell Status
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {
      msg: "Welcome to Your Vue.js App",
      menuVisible: false,
      selectedState: null,
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District Of Columbia",
        "Federated States Of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Islands",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.md-card {
  width: 40%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-title {
    margin-right: 1em;
}
.md-table-cell {
  height: auto;
}
</style>

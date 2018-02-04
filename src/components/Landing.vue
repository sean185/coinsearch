<template lang='pug'>
#hello.md-layout.md-gutter.md-alignment-top-center.page-container
    #jumbo.md-layout-item.md-size-100
        h1 {{funnyLine}}
        md-toolbar.md-transparent(md-elevation="1")
            .md-toolbar-row
                .md-toolbar-section-start
                    .md-icon-button
                md-autocomplete(v-model="selectedCoin", :md-options="coinNames", :md-fuzzy-search="false")
                    label
                        md-icon search
                        | coins
                    template(slot='md-autocomplete-empty', slot-scope='{ term }')
                        | No coins matching #[b {{ term }}] were found.
                .md-toolbar-section-end
                    md-button.md-icon-button
                        md-icon more_vert
    #left.md-layout-item.md-small-size-100.md-xsmall-size-100
        h2 Articles & Discussions
        router-link(to='/details/first')
            md-card
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
        md-table(md-card fluid)
            md-table-toolbar
                h2.md-title Trending
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
import axios from 'axios';
export default {
    name: "Landing",
    data: () => {
        return {
            menuVisible: false,
            selectedCoin: null,
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
            ],
            funnylines: [
                'I\'m curious about...',
                'Tell me oh wise one...',
                'Mirror, mirror, on the wall...',
                'Show me the...'
            ],
            coins: []
        }
    },
    created() {
        this.getBrief();
    },
    methods: {
        getBrief() {
            let url = 'https://seanang.me/coinsearch/data/brief';
            axios.get(url).then((response) => {
                this.coins = response.data
            }).catch(err => {console.log(err) });
        }
    },
    computed: {
        funnyLine() {
            const randNum = Math.floor(Math.random() * this.funnylines.length)
            return this.funnylines[randNum]
        },
        coinNames() {
            return this.coins.map((item) => item.name_hc);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>
#jumbo
    min-height 200px
h1,
h2
    font-weight normal
ul
    list-style-type none
    padding 0
li
    display inline-block
    margin 0 10px
a
    color #42b983
#left .md-card
    width calc(50% - 10px)
    margin 4px
    display inline-block
    vertical-align top
.md-title
    margin-right 1em
.md-table-cell
    height auto
.page-container
    max-width 1200px
    margin 0 auto
    padding 16px
</style>

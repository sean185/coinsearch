<template lang='pug'>
#hello.md-layout.md-gutter.md-alignment-top-center.page-container
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
    name: "Details",
    data: () => {
        return {
            msg: "Welcome to Your Vue.js App",
            menuVisible: false,
            selectedState: null
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            let url = 'https://seanang.me/coinsearch/data/' + coin_name;
            axios.get(url).then((response) => {
                this.coins = response.data
            }).catch(err => {console.log(err) });
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

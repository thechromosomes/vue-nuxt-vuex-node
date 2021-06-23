<template>
    <div class="multiple_box">
        <div :key="i" class="tag-button" v-for="i in f.selected">
            <label class="bt-bg">
                <input type="checkbox" :value="i" v-model="f.selected"
                       @change="$emit('applyFilter')"> <span
                    class="filter-tags">{{i}}</span></label>
        </div>
        <div :key="i.name" class="tag-button" v-for="i in getNotSelectedFilters(f)">
            <label class="bt-bg">
                <input type="checkbox" :value="i.name" v-model="f.selected"
                       @change="$emit('applyFilter'),filterAnalytics('top',f.title,i.name)"> <span
                    class="filter-tags">{{i.name}}</span></label>
        </div>
        <div style="">
            <span id="tag_left" class="hidden-xs hidden-sm" @click="breadCrumbScroll(-1)"><span class="st-left-arrow"></span></span>
            <span id="tag_right" class="hidden-xs hidden-sm" @click="breadCrumbScroll(1)"><span class="st-right-arrow"></span></span>
        </div>
    </div>

</template>

<script>
import stAnalytics from "@/utils/analytics";
let ga = new stAnalytics('ga', 'prod');
    export default {
        name: "TopFilter",
        props: ["f"],
        data() {
            return {
                currSymbol: '₹'
            }
        },
        methods: {
          filterAnalytics: function (pos, fName, fVal) {
            if (fVal !== false) {
              ga.recordFilterEvent(pos, `${fName} : ${fVal}`);
            }
          },
            clicked: function () {
                console.log("Here");
            },
            getSelectedCount: function (selected, filter) {

                let cat = undefined;
                if (filter.field !== 'discounted_price') {
                    cat = filter.values.find(y => y.name === selected);
                } else if (filter.field === 'discounted_price') {
                    cat = filter.values.find(y => {
                        if (y.min === selected[0] && y.max === selected[1]) {
                            return y;
                        }
                    });
                }

                if (cat !== undefined)
                    return cat.count;
                else
                    return 0
            },

            getNotSelectedFilters: function (custom_filters) {

                if (this !== undefined) {

                    let filteredValue = custom_filters.values;

                    if (custom_filters.field !== 'discounted_price') {

                        custom_filters.selected.forEach(s => {
                            filteredValue = filteredValue.filter(y => y.name !== s);
                        });
                    } else if (custom_filters.field === 'discounted_price') {

                        custom_filters.selected.forEach(s => {
                            filteredValue = filteredValue.filter(y => {
                                if (y.min !== s[0] && y.max !== s[1] && y.count > 0) {
                                    return y;
                                }
                            })
                        });
                    }
                    return filteredValue
                }
            },
           breadCrumbScroll: function (scrollMod) {

                let scrollHandle = 0;
                let parent = document.querySelector("#st-scroll");
                let scrollStep = 700;

                let direction = parseInt(scrollMod, 10);

                if (scrollHandle === 0) {
                    scrollHandle = 1;
                    let newOffset = parent.scrollLeft + (scrollStep * direction);
                    parent.scroll({
                      left: newOffset,
                      behavior: 'smooth'
                    });
                }
                clearInterval(scrollHandle);
                scrollHandle = 0;
            },

        },
        computed: {
            isDeviceMobile: function () {
                return window.matchMedia("only screen and (max-width: 834px)").matches;
            }
        }
    }
</script>

<style scoped>

</style>

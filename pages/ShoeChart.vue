<template>
  <div>
    <div class="size-chart-page">
      <div class="mainSections">
        <div class="container">
          <h1 class="mainTitle">Shoe Size Chart</h1>
          <div id="page" class="row">
            <div class="span12 details rte">
              <h1>Measure Your Shoe Size</h1>
              <p>
                Make sure you are standing, wearing the socks or stockings you
                will wear with your new shoes. Then convert the measurement to
                your shoe size using the following charts:
              </p>
              <table style="margin-bottom: 15px" width="90%">
                <tbody>
                  <tr>
                    <td
                      style="padding: 0px; border: none"
                      valign="top"
                      width="40%"
                    >
                      <h3>Men's Size Conversions</h3>
                      <table
                        style="border-collapse: collapse; margin: 0 auto 0 0"
                        role="presentation"
                        border="0"
                        width="90%"
                      >
                        <tbody>
                          <tr>
                            <th scope="col">
                              <h3>US Sizes</h3>
                            </th>
                            <th scope="col">
                              <h3>Euro Sizes</h3>
                            </th>
                            <th scope="col">
                              <h3>UK Sizes</h3>
                            </th>
                            <th scope="col">
                              <h3>Size</h3>
                            </th>
                            <th scope="col">
                              <h3>CM</h3>
                            </th>
                          </tr>
                          <tr
                            v-for="(size, index) in sizeChartData.male"
                            :key="index"
                          >
                            <td scope="row">{{ size.usSizes }}</td>
                            <td scope="row">{{ size.euroSizes }}</td>
                            <td scope="row">{{ size.UKSizes }}</td>
                            <td scope="row">{{ size.size }}</td>
                            <td scope="row">{{ size.cm }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td
                      style="padding: 0px; border: none"
                      valign="top"
                      width="40%"
                    >
                      <h3>WOMEN'S Size Conversions</h3>
                      <table
                        style="border-collapse: collapse; margin: 0 auto 0 0"
                        role="presentation"
                        border="0"
                        width="90%"
                      >
                        <tbody>
                          <tr>
                            <th scope="col">
                              <h3>US Sizes</h3>
                            </th>
                            <th scope="col">
                              <h3>Euro Sizes</h3>
                            </th>
                            <th scope="col">
                              <h3>UK Sizes</h3>
                            </th>
                            <th scope="col">
                              <h3>Size</h3>
                            </th>
                            <th scope="col">
                              <h3>CM</h3>
                            </th>
                          </tr>
                           <tr
                            v-for="(size, index) in sizeChartData.female"
                            :key="index"
                          >
                            <td scope="row">{{ size.usSizes }}</td>
                            <td scope="row">{{ size.euroSizes }}</td>
                            <td scope="row">{{ size.UKSizes }}</td>
                            <td scope="row">{{ size.size }}</td>
                            <td scope="row">{{ size.cm }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                Measuring from home is as easy as knowing what size you
                currently wear and reading below.
              </p>
              <p>
                Steve Madden women's styles start at size 5, however MOST start
                at size 5&frac12; . Most styles are available in half sizes from
                5&frac12; to 10, and many are available in size 11. We do not
                offer size 10&frac12;. Steve Madden women's slippers and some
                casual styles are available in whole sizes only from 5 to 11. If
                you wear a half size and only whole sizes are available, we
                recommend ordering the next size up unless otherwise noted. All
                styles are available in standard width B only.
              </p>
              <p>
                Steve Madden men's styles start at size 7, however MOST start at
                size 8. Most styles are available in half sizes from 8 to 11,
                and whole sizes 12 and 13. Some casuals are available in whole
                sizes 14 and 15 as well. Many Steve Madden men's styles are
                available in whole sizes only from 7 to 13. If you wear a half
                size and only whole sizes are available, we recommend ordering
                the next size up unless otherwise noted. All styles are
                available in standard width D only.
              </p>
              <p>
                Steven by Steve Madden styles start at size 5&frac12;, however
                MOST start at size 6. Most styles are available in half sizes
                from 6 to 10. Some Steven casuals are available in whole sizes
                only from 6 to 10. If you wear a half size and only whole sizes
                are available, we recommend ordering the next size up unless
                otherwise noted. All styles are available in standard width B
                only.
              </p>
              <p>
                Although we strive to provide consistent sizing across product
                lines, some styles may run smaller or larger than our regular
                sizing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeChartData: {},
    };
  },

  async fetch() {
    try {
      let { store } = this.$store.state.singleProductList;
      let sizeChartResponse = await this.$store.dispatch("pimAjax", {
        method: "post",
        url: `/pimresponse.php`,
        params: {
          service: "size_guide",
          store,
        },
      });
      if (sizeChartResponse.response.success) {
        this.sizeChartData = sizeChartResponse.result;
      }
    } catch (error) {
      console.log("this error form shoe chart >>> ", error);
    }
  },
};
</script>
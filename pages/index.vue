<template>
  <div>
    <div class="row m-0">
      <div class="col-2"></div>
      <div class="col-7">
        <div class="text-light">
          <h2 class="h2 p-3">Plan your trip to Iran</h2>
          <p class="px-3">
            Find or create your best plan to visit Iran based on +300 plans designed
            by professional tour guides and travelers.
          </p>
        </div>
        <div class="col-3"></div>
      </div>
    </div>

    <div class="row center-box p-2 m-0">
      <div class="col-2"></div>
      <div class="col-7">
        <div class="row">
          <div class="p-1">
            <div class="dropdown small">
              <button class="btn btn-sm btn-light" type="button" data-toggle="dropdown">Destinations</button>
              <div class="dropdown-menu float-left">
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 1
                </label>
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 2
                </label>
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 3
                </label>
                <div class="text-right p-2">
                  <button class="btn btn-sm btn-primary" type="button">apply</button>
                  <button class="btn btn-sm btn-secondary" type="button">cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-1">
            <div class="dropdown">
              <button class="btn btn-sm btn-light" type="button" data-toggle="dropdown">ALL month</button>
              <div class="dropdown-menu text-center p-2">
                <div class="row m-0 p-0">
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">Jan</div>
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">Feb</div>
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">Mar</div>
                </div>
                <div class="row m-0">
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">Apr</div>
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">May</div>
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">June</div>
                </div>
                <div class="row m-0">
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">July</div>
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">Aug</div>
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">Sep</div>
                </div>
                <div class="row m-0">
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">Oct</div>
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">Nov</div>
                  <div class="col-3 p-1 m-1 btn btn-sm btn-light">Dec</div>
                </div>
                <div class="text-right p-2">
                  <button class="btn btn-sm btn-primary" type="button">apply</button>
                  <button class="btn btn-sm btn-secondary" type="button">cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-1">
            <div class="dropdown">
              <button class="btn btn-sm btn-light" type="button" data-toggle="dropdown">ALL weeks</button>
              <div class="dropdown-menu float-left">
                <label class="dropdown-item checkbox-inline small p-0" @click.stop>
                  <input class="m-2" type="checkbox" />Option 1
                </label>
                <label class="dropdown-item checkbox-inline small p-0" @click.stop>
                  <input class="m-2" type="checkbox" value />Option 2
                </label>
                <label class="dropdown-item checkbox-inline small p-0" @click.stop>
                  <input class="m-2" type="checkbox" value />Option 3
                </label>
                <div class="text-right p-2">
                  <button class="btn btn-sm btn-primary" type="button">apply</button>
                  <button class="btn btn-sm btn-secondary" type="button">cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-1">
            <div class="dropdown">
              <button
                class="btn btn-sm btn-light"
                type="button"
                data-toggle="dropdown"
              >11 Passengers</button>
              <div class="dropdown-menu float-left">
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 1
                </label>
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 2
                </label>
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 3
                </label>
              </div>
            </div>
          </div>
          <div class="p-1">
            <div class="dropdown">
              <button
                class="btn btn-sm btn-light"
                type="button"
                data-toggle="dropdown"
              >All budgets plan</button>
              <div class="dropdown-menu float-left">
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 1
                </label>
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 2
                </label>
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 3
                </label>
              </div>
            </div>
          </div>
          <div class="p-1">
            <div class="dropdown">
              <!-- <button
                class="btn btn-sm btn-small btn-danger"
                type="button"
                data-toggle="dropdown"
              >Search</button>-->
              <nuxt-link
                to="/result"
                class="btn btn-sm btn-small btn-danger"
                type="button"
                data-toggle="dropdown"
              >Search</nuxt-link>
              <div class="dropdown-menu float-left">
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 1
                </label>
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 2
                </label>
                <label class="dropdown-item checkbox-inline">
                  <input class="m-2" type="checkbox" value />Option 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.center-box {
  background-color: white;
  width: 100%;
  position: absolute;
}

.container {
  /* background-image: url('/assets/bg.jpg'); */
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

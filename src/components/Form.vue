<template>
  <section class="section">
    <Header class="desktop-header" />
    <breadthumbs />
    <form class="container">
      <h1>Contact Information</h1>
      <b-field>
        <template slot="label">
          Email <span class="has-text-danger">*</span>
        </template>
        <b-input
          v-model="email"
          type="email"
          required
          placeholder="Email"
        />
      </b-field>
      <b>Important:</b> Enter the email address that's associated with your Fanmio account. If you don't have one you can create one after purchase.     
      <b-field>
        <b-checkbox>Keep me up to date on news and exclusive offers</b-checkbox>
      </b-field>
      <h1>Shipping Address</h1>
      <b-field grouped>
        <b-field>
          <template slot="label">
            First Name <span class="has-text-danger">*</span>
          </template>
          <b-input
            v-model="firstName"
            placeholder="First Name"
            required
            pattern="[A-Za-z]*"
          />
        </b-field>
        <b-field>
          <template slot="label">
            Last Name <span class="has-text-danger">*</span>
          </template>
          <b-input
            v-model="lastName"
            placeholder="Last Name"
            required
            pattern="[A-Za-z]*"
          />
        </b-field>
      </b-field>
      <b-field>
        <template slot="label">
          Address <span class="has-text-danger">*</span>
        </template>
        <b-input
          v-model="address"
          placeholder="Address"
          required
          pattern="[A-Za-z0-9\s]*"
        />
      </b-field>
      <b-field label="Address 2">
        <b-input
          v-model="address2"
          placeholder="Apartment, suite, etc. (optional)"
          pattern="[A-Za-z0-9\s]*"
        />
      </b-field>
      <b-field>
        <template slot="label">
          City <span class="has-text-danger">*</span>
        </template>
        <b-input
          v-model="city"
          placeholder="City"
          required
          pattern="[A-Za-z]*"
        />
      </b-field>
      <b-field grouped>
        <b-field>
          <template slot="label">
            Country/Region <span class="has-text-danger">*</span>
          </template>
          <b-select
            v-model="country"
            required
          >
            <option
              v-for="country in countryList"
              :key="country.code"
              :value="country.code"
            >
              {{ country.name }} 
            </option>
          </b-select>
        </b-field>
        <b-field>
          <template slot="label">
            State <span class="has-text-danger">*</span>
          </template>
          <b-select
            v-model="state"
            placeholder="State"
            required
          >
            <option
              v-for="state in stateList"
              :key="state.code"
              :value="state.code"
            >
              {{ state.name }}
            </option>
          </b-select>
        </b-field>
        <b-field>
          <template slot="label">
            Postal code <span class="has-text-danger">*</span>
          </template>
          <b-input
            v-model="postalCode"
            placeholder="Postal code"
            required
            pattern="[A-Za-z1-9]*"
          />
        </b-field>
      </b-field>
      <b-field position="is-right">
        <b-button type="is-primary" @click="submit">Continue to Shipping</b-button>
      </b-field>
    </form>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from './Header.vue'
import Breadthumbs from './Breadthumbs.vue'
import { statesListFromCountry } from '@/utils/country-region-service';
import COUNTRY_LIST from '@/mock/countries.json'

export default Vue.extend({
  components: {
    Header,
    Breadthumbs,
  },

  data: () => ({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    city: '',
    country: 'US',
    state: '',
    postalCode: '',

    countryList: [...COUNTRY_LIST],   
  }),

  computed: {
    stateList() {
      return statesListFromCountry(this.country);
    }
  },

  methods: {
    submit() {}
  }
})
</script>

<style lang="scss">
.section {
  text-align: left;
}
</style>

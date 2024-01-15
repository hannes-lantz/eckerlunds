<template>
  <div class="content">
    <div class="map" ref="map"></div>
    <article class="contactform">
      <h1>Kontakt</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <input type="text" id="name" v-model="formData.name" placeholder="Ditt namn" required />
        </div>

        <div class="form-group">
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="Din E-postadress"
            required
          />
        </div>

        <div class="form-group">
          <input
            type="phone"
            id="phone"
            v-model="formData.email"
            placeholder="Ditt telefonnummer"
            required
          />
        </div>

        <div class="form-group">
          <textarea
            id="message"
            v-model="formData.message"
            placeholder="Ditt meddelande"
            required
          ></textarea>
        </div>

        <button type="submit">Skicka</button>
      </form>
    </article>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
export default {
  data() {
    return {
      map: null,
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  mounted() {
    // Initialize the Leaflet map
    this.map = L.map(this.$refs.map).setView([55.7105, 13.21], 17)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map)
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted with data:', this.formData)
      // You can add additional logic to handle form submission, e.g., sending data to a server
    }
  }
}
</script>

<style scoped>
.content {
  color: #e8be8c;
  height: auto;
  margin: 8% 0 3% 0;
  display: flex;
  justify-content: space-between;
  gap: 3%;
}

.map {
  height: auto; /* Make sure the map takes the full height of its container */
  border: 1px solid #464545;
  overflow: hidden; /* Hide overflow for a cleaner look */
  width: 48%; /* Adjust the width as needed */
  margin-left: 3%;
  position: relative;

  z-index: 10;
}

.contactform {
  padding: 20px;
  border: 1px solid #464545;
  width: 48%; /* Adjust the width as needed */
  margin-right: 3%;
}

.contactform h1 {
  color: #7f4909;
  margin-bottom: 3%;
}

form {
  display: grid;
  gap: 10px;
}

.form-group {
  display: grid;
  gap: 5px;
}

.form-group input {
  border: none;
  border-bottom: 1px solid #464545;
  outline: none;
  background: transparent; /* Remove input background */
}

label {
  color: #e8be8c;
  text-align: left;
}

/* Set max-width for the textarea to prevent breaking */
textarea {
  width: 100%;
  max-width: 100%; /* Adjust max-width as needed */
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #464545;
  resize: vertical; /* Allow vertical resizing */
}

button {
  background-color: #e8be8c;
  color: #2c3e50;
  padding: 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #d18b54;
}
</style>

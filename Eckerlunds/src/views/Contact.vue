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
  flex-direction: column; /* Change to a column layout for mobile screens */
  gap: 3%;
}

.map {
  height: 300px; /* Set a fixed height for the map on mobile screens */
  border: 1px solid #464545;
  overflow: hidden;
  width: 100%; /* Take full width on mobile */
  margin-top: 3%; /* Add margin at the top for separation */
  margin-bottom: 3%; /* Add margin at the bottom for separation */
  position: relative;
  z-index: 10;
}

.contactform {
  padding: 20px;
  border: 1px solid #464545;
  width: 100%; /* Take full width on mobile */
}

/* Additional styles for h1 on mobile screens */
.contactform h1 {
  color: #7f4909;
  margin-bottom: 3%;
  text-align: center; /* Center the heading on mobile */
}

form {
  display: grid;
  gap: 10px;
}

.form-group {
  display: grid;
  gap: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%; /* Take full width on mobile */
}

.form-group input {
  border: none;
  border-bottom: 1px solid #464545;
  outline: none;
  background: transparent;
}

/* Set max-width for the textarea to prevent breaking */
textarea {
  width: 100%;
  max-width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #464545;
  resize: vertical;
}

button {
  background-color: #e8be8c;
  color: #2c3e50;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%; /* Take full width on mobile */
}

button:hover {
  background-color: #d18b54;
}

/* Media query for larger screens */
@media (min-width: 768px) {
  .content {
    flex-direction: row; /* Switch back to row layout for larger screens */
  }

  .map {
    height: auto;
    width: 48%;
    margin-bottom: 0;
    margin-top: 0%;
    margin-left: 5%;
  }

  .contactform {
    width: 48%;
    margin-right: 5%;
  }
}
</style>


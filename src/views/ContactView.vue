<template>
    <div class="container">
      <div class="row justify-content-center">
        <h2 class="display-2 text-center mb-4">Contact</h2>
        <form action="https://formspree.io/f/xdknlzza" method="POST" class="w-100">
          <!-- Name and Surname in the Same Row -->
          <div class="row">
            <div class="col-12 col-md-6 mb-3">
              <input class="form-control" type="text" placeholder="Name" required />
            </div>
            <div class="col-12 col-md-6 mb-3">
              <input class="form-control" type="text" placeholder="Surname" required />
            </div>
          </div>
          <!-- Email Field -->
          <div class="form-control-wrapper mb-3">
            <input class="form-control" name="email" type="email" placeholder="Email" required />
          </div>
          <!-- Message Field with Increased Vertical Size -->
          <div class="form-control-wrapper mb-3">
            <textarea class="form-control message-box" name="message" placeholder="Message" required></textarea>
          </div>
          <!-- Buttons -->
          <div class="form-control-wrapper d-flex flex-column flex-md-row justify-content-between gap-2">
            <button type="submit" class="btn btn-success mb-2 mb-md-0">Submit</button>
            <button type="reset" class="btn btn-dark">Reset</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .message-box {
    min-height: 150px;
  }
  
  /* Responsive margins */
  .mb-3 {
    margin-bottom: 1rem;
  }
  
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  
  .mb-md-0 {
    margin-bottom: 0;
  }
  </style>
  
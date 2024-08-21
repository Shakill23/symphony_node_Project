<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Contact</h2>
            <form action="https://formspree.io/f/xdknlzza" method="POST">
                <!-- Name and Surname in the Same Row -->
                <div class="row">
                    <div class="col-md-6">
                        <input class="form-control mb-3" type="text" placeholder="Name" required />
                    </div>
                    <div class="col-md-6">
                        <input class="form-control mb-3" type="text" placeholder="Surname" required />
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
                <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                    <button type="submit" class="btn btn-success">Submit</button>
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
</style>

<template>
  <div class="contacts py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h1>This is an contact page</h1>
          <div class="mt-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aperiam asperiores aut consequuntur culpa distinctio esse eveniet fugiat molestiae nihil nobis numquam quasi quod quos repellendus, sit veritatis voluptatibus.</p>
            <form>
              <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="name">
                </div>
              </div>
              <div class="form-group row">
                <label for="message" class="col-sm-2 col-form-label">Message</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="message" rows="5"></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style scoped>

</style>

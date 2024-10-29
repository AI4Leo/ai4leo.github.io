<script>
document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;

    if (!name || !course) {
        alert("Please fill in all required fields.");
        event.preventDefault();
    }
});
</script>

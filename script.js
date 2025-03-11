let list = document.querySelector('ul')
let listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
    item.addEventListener('click', function () {
        if (this.textContent.startsWith("✅ Chacked: ")) {
            this.textContent = this.textContent.replace("✅ Chacked: ", "");
        } else {
            this.textContent = "✅ Chacked: " + this.textContent;
        }
    })
})
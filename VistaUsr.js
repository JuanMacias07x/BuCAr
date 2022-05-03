let parameters = []

function removeElement(event, position) {
    event.target.parentElement.remove()
    delete parameters[position]
}

const addJsonElement = json => {
    parameters.push(json)
    return parameters.length - 1
}

(function load() {
    const $form = document.getElementById("frmLugar")
    const $divElements = document.getElementById("divElements")
    const $btnAgr = document.getElementById("btnAgr")
    const $btnSave = document.getElementById("btnSave")



    const templateElement = (data, position) => {
        return (`
        <button class="delete" onclick="removeElement(event)"></button>
        <strong>Ruta 1:</strong> ${data}
        `)
    }

    $btnAgr.addEventListener("click", (event) => {
        if ($form.name.value !== "") {
            let index = addJsonElement({
                name: $form.name.value
            })
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-link", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`${$form.name.value}`, index)
            $divElements.insertBefore($div, $divElements.firstChild)

            $form.reset()
        } else {
            alert("Complete los datos")

        }
    })

    $btnSave.addEventListener("click", (event) => {
        if ($form.name.value !== "") {
            const $div = document.createElement("div")
            $div.classList.add("notification", "is-link", "is-light", "py-2", "my-1")
            $div.innerHTML = templateElement(`${$form.name.value}`)
            $divElements.insertBefore($div, $divElements.firstChild)

            $form.reset()
        } else {
            alert("Complete los datos")

        }
    })

    $btnSave.addEventListener("click", (event) => {
        parameters = parameters.filter(el => el != null)
        const $jsonDiv = document.getElementById("jsonDiv")
        $jsonDiv.innerHTML = `JSON: ${JSON.stringify(parameters)}`
        $divElements.innerHTML = ""
        parameters = ""
    })
})()
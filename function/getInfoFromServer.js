fetch("http://parser-server.vercel.app/api/clinic")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json()
  })
  .then((clinics) => {
    const table = document.querySelector(".table")
    table.innerHTML = ""

    clinics.forEach((clinic) => {
      const row = document.createElement("tr")
      row.innerHTML = `<td><a href="${clinic[0]}">${clinic[0]}</a></td><td>${clinic[1]}</td><td>${clinic[2]}</td>`
      table.appendChild(row)
    })
  })
  .catch((err) => console.error("Error:", err))

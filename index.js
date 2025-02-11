if (localStorage.getItem("totalWaterMl") == null) localStorage.setItem("totalWaterMl", 0);

let totalWater = parseInt(localStorage.getItem("totalWaterMl"))

const updateTotalWaterMl = (totalWaterMl) => {
	localStorage.setItem("totalWaterMl", totalWaterMl)
}
